const initialProducts = [
  { id: 1, name: "九十年代羊毛外套", category: "服饰", price: 680, condition: "成色优秀", emoji: "🧥", color: "#b9a88f" },
  { id: 2, name: "黄铜蘑菇台灯", category: "家居", price: 420, condition: "轻微使用痕迹", emoji: "💡", color: "#c7b079" },
  { id: 3, name: "复古皮革手提包", category: "配饰", price: 860, condition: "自然旧化", emoji: "👜", color: "#a8866c" },
  { id: 4, name: "胶片旁轴相机", category: "收藏", price: 1280, condition: "功能正常", emoji: "📷", color: "#8f9386" },
  { id: 5, name: "法式花纹咖啡杯", category: "家居", price: 160, condition: "保存良好", emoji: "☕", color: "#b8a99d" },
  { id: 6, name: "丝绸印花方巾", category: "配饰", price: 260, condition: "几乎全新", emoji: "🧣", color: "#bf8f79" },
  { id: 7, name: "经典牛仔夹克", category: "服饰", price: 390, condition: "自然水洗", emoji: "👕", color: "#8496a1" },
  { id: 8, name: "绝版文学精装本", category: "收藏", price: 230, condition: "书页完整", emoji: "📚", color: "#a89b76" }
];

const categoryEmoji = { "服饰": "👔", "家居": "🏺", "配饰": "👜", "收藏": "🎞️" };
const categoryColor = { "服饰": "#929e95", "家居": "#c3a989", "配饰": "#aa8976", "收藏": "#96927d" };

let products = [...initialProducts];
let selectedCategory = "全部";
let favorites = new Set(JSON.parse(localStorage.getItem("vintage-favorites") || "[]"));

const grid = document.querySelector("#productGrid");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");
const favoriteCount = document.querySelector("#favoriteCount");
const dialog = document.querySelector("#publishDialog");
const form = document.querySelector("#publishForm");
const toast = document.querySelector("#toast");

function formatPrice(price) {
  return new Intl.NumberFormat("zh-CN", {
    style: "currency",
    currency: "CNY",
    maximumFractionDigits: 0
  }).format(price);
}

function renderProducts() {
  const keyword = searchInput.value.trim().toLowerCase();
  const visibleProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "全部" || product.category === selectedCategory;
    const matchesSearch = `${product.name}${product.category}${product.condition}`.toLowerCase().includes(keyword);
    return matchesCategory && matchesSearch;
  });

  grid.innerHTML = visibleProducts.map((product) => `
    <article class="product-card">
      <div class="product-image" style="--card-color:${product.color}">
        <span class="condition">${product.condition}</span>
        <button class="favorite ${favorites.has(product.id) ? "saved" : ""}"
          type="button" data-favorite="${product.id}"
          aria-label="${favorites.has(product.id) ? "取消收藏" : "收藏"}${product.name}">
          ${favorites.has(product.id) ? "♥" : "♡"}
        </button>
        <span class="product-emoji" aria-hidden="true">${product.emoji}</span>
      </div>
      <div class="product-meta">
        <div>
          <p class="product-name">${product.name}</p>
          <p class="product-category">${product.category}</p>
        </div>
        <p class="product-price">${formatPrice(product.price)}</p>
      </div>
    </article>
  `).join("");

  emptyState.hidden = visibleProducts.length > 0;
  favoriteCount.textContent = favorites.size;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

document.querySelector("#categoryFilters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  selectedCategory = button.dataset.category;
  document.querySelectorAll(".category").forEach((item) => item.classList.toggle("active", item === button));
  renderProducts();
});

grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-favorite]");
  if (!button) return;
  const id = Number(button.dataset.favorite);
  if (favorites.has(id)) {
    favorites.delete(id);
    showToast("已取消收藏");
  } else {
    favorites.add(id);
    showToast("已加入收藏");
  }
  localStorage.setItem("vintage-favorites", JSON.stringify([...favorites]));
  renderProducts();
});

searchInput.addEventListener("input", renderProducts);
document.querySelector("#openPublish").addEventListener("click", () => dialog.showModal());
document.querySelector("#favoritesButton").addEventListener("click", () => {
  if (!favorites.size) {
    showToast("还没有收藏，先逛逛吧");
    return;
  }
  showToast(`你已经收藏了 ${favorites.size} 件好物`);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const category = data.get("category");
  products.unshift({
    id: Date.now(),
    name: data.get("name"),
    category,
    price: Number(data.get("price")),
    condition: "刚刚发布",
    emoji: categoryEmoji[category],
    color: categoryColor[category]
  });
  selectedCategory = "全部";
  document.querySelectorAll(".category").forEach((item) => item.classList.toggle("active", item.dataset.category === "全部"));
  searchInput.value = "";
  form.reset();
  dialog.close();
  renderProducts();
  showToast("发布成功，商品已加入市集");
  document.querySelector("#market").scrollIntoView({ behavior: "smooth" });
});

renderProducts();
