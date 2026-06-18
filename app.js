const translations = {
  ja: {
    homeAria: "時の市 ホーム", brand: "時の市", navMarket: "マーケット", navAbout: "私たちについて",
    favoritesAria: "お気に入りを見る", publish: "出品する", heroEyebrow: "古いものに、新しい物語を。",
    heroTitle: "時が育てた", heroAccent: "いいもの",
    heroDescription: "暮らしに温もりを添えるヴィンテージアイテムを厳選。服、家具、コレクションまで、もう一度愛される価値のある品々です。",
    heroCta: "古いものを探す", statItems: "厳選アイテム", statSellers: "出品者", statSatisfaction: "満足度",
    weekly: "今週のセレクト", marketTitle: "心ときめく一品を", searchPlaceholder: "ブランド・カテゴリー・キーワードで検索",
    empty: "該当するアイテムがありません。別のキーワードをお試しください。",
    whyVintage: "ヴィンテージを選ぶ理由", storyTitle1: "手にするのは、ものだけではなく", storyTitle2: "受け継がれていく時間です。",
    point1Title: "丁寧なセレクト", point1Text: "状態と細部を一つひとつ確認しています。",
    point2Title: "正直な説明", point2Text: "使用感も隠さず伝え、安心して選べます。",
    point3Title: "循環する暮らし", point3Text: "良いものを次へつなぎ、暮らしを少し軽やかに。",
    footer: "© 2026 時の市 · 一つひとつの品に、新しい物語を", publishTitle: "大切なものを、次の持ち主へ",
    itemName: "商品名", itemNamePlaceholder: "例：ヴィンテージレザーバッグ", category: "カテゴリー",
    price: "希望価格", pricePlaceholder: "価格（円）", submit: "出品する",
    demoNote: "現在はデモ版です。投稿した商品はこの端末に表示されます。",
    categories: { all: "すべて", fashion: "ファッション", home: "暮らし", accessories: "小物", collectibles: "コレクション" },
    saved: "お気に入りに追加しました", unsaved: "お気に入りから削除しました", noFavorites: "お気に入りはまだありません",
    favoriteTotal: (count) => `${count}点をお気に入りに登録しています`, published: "出品しました。マーケットに追加されています",
    justPublished: "出品したばかり", currency: "JPY"
  },
  zh: {
    homeAria: "旧时光首页", brand: "旧时光", navMarket: "逛市集", navAbout: "关于我们", favoritesAria: "查看收藏",
    publish: "发布闲置", heroEyebrow: "让旧物，遇见新故事", heroTitle: "时间留下的", heroAccent: "好东西",
    heroDescription: "精选有温度的中古物件。从衣橱、家居到收藏，每一件旧物都值得再次被喜欢。",
    heroCta: "开始淘旧物", statItems: "精选好物", statSellers: "同好卖家", statSatisfaction: "满意评价",
    weekly: "本周精选", marketTitle: "淘一件心动旧物", searchPlaceholder: "搜索品牌、品类或关键词",
    empty: "暂时没有找到合适的旧物，换个关键词试试吧。",
    whyVintage: "为什么选择中古", storyTitle1: "买的不只是物件，", storyTitle2: "也是一段被延续的时间。",
    point1Title: "认真筛选", point1Text: "每件商品都经过成色与细节确认。",
    point2Title: "真实描述", point2Text: "如实展示使用痕迹，让选择更安心。",
    point3Title: "循环生活", point3Text: "让好物继续流转，也让生活轻一点。",
    footer: "© 2026 旧时光中古市集 · 让每件旧物继续讲故事", publishTitle: "让好物遇见新主人",
    itemName: "物品名称", itemNamePlaceholder: "例如：中古皮革手提包", category: "分类",
    price: "期望价格", pricePlaceholder: "金额（元）", submit: "提交发布",
    demoNote: "当前为网页演示，提交后会在本机显示新商品。",
    categories: { all: "全部", fashion: "服饰", home: "家居", accessories: "配饰", collectibles: "收藏" },
    saved: "已加入收藏", unsaved: "已取消收藏", noFavorites: "还没有收藏，先逛逛吧",
    favoriteTotal: (count) => `你已经收藏了 ${count} 件好物`, published: "发布成功，商品已加入市集",
    justPublished: "刚刚发布", currency: "CNY"
  }
};

const initialProducts = [
  { id: 1, category: "服饰", price: 680, emoji: "🧥", color: "#b9a88f", ja: ["90年代 ウールコート", "コンディション良好"], zh: ["九十年代羊毛外套", "成色优秀"] },
  { id: 2, category: "家居", price: 420, emoji: "💡", color: "#c7b079", ja: ["真鍮のマッシュルームランプ", "わずかな使用感"], zh: ["黄铜蘑菇台灯", "轻微使用痕迹"] },
  { id: 3, category: "配饰", price: 860, emoji: "👜", color: "#a8866c", ja: ["ヴィンテージレザーバッグ", "自然な経年変化"], zh: ["复古皮革手提包", "自然旧化"] },
  { id: 4, category: "收藏", price: 1280, emoji: "📷", color: "#8f9386", ja: ["レンジファインダーカメラ", "動作確認済み"], zh: ["胶片旁轴相机", "功能正常"] },
  { id: 5, category: "家居", price: 160, emoji: "☕", color: "#b8a99d", ja: ["フレンチ柄コーヒーカップ", "保存状態良好"], zh: ["法式花纹咖啡杯", "保存良好"] },
  { id: 6, category: "配饰", price: 260, emoji: "🧣", color: "#bf8f79", ja: ["シルクプリントスカーフ", "未使用に近い"], zh: ["丝绸印花方巾", "几乎全新"] },
  { id: 7, category: "服饰", price: 390, emoji: "👕", color: "#8496a1", ja: ["クラシック デニムジャケット", "自然な色落ち"], zh: ["经典牛仔夹克", "自然水洗"] },
  { id: 8, category: "收藏", price: 230, emoji: "📚", color: "#a89b76", ja: ["絶版文学ハードカバー", "ページ欠損なし"], zh: ["绝版文学精装本", "书页完整"] }
];

const categoryEmoji = { "服饰": "👔", "家居": "🏺", "配饰": "👜", "收藏": "🎞️" };
const categoryColor = { "服饰": "#929e95", "家居": "#c3a989", "配饰": "#aa8976", "收藏": "#96927d" };
const categoryKeys = { "服饰": "fashion", "家居": "home", "配饰": "accessories", "收藏": "collectibles" };

let products = [...initialProducts];
let selectedCategory = "全部";
let currentLanguage = localStorage.getItem("vintage-language") || "ja";
let favorites = new Set(JSON.parse(localStorage.getItem("vintage-favorites") || "[]"));

const grid = document.querySelector("#productGrid");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");
const favoriteCount = document.querySelector("#favoriteCount");
const dialog = document.querySelector("#publishDialog");
const form = document.querySelector("#publishForm");
const toast = document.querySelector("#toast");
const languageButton = document.querySelector("#languageButton");

function t() { return translations[currentLanguage]; }
function productText(product) { return product[currentLanguage] || product.ja; }
function categoryLabel(category) { return t().categories[categoryKeys[category]]; }

function formatPrice(price) {
  return new Intl.NumberFormat(currentLanguage === "ja" ? "ja-JP" : "zh-CN", {
    style: "currency", currency: t().currency, maximumFractionDigits: 0
  }).format(price);
}

function applyLanguage() {
  document.documentElement.lang = currentLanguage === "ja" ? "ja" : "zh-CN";
  document.title = currentLanguage === "ja" ? "時の市｜ヴィンテージマーケット" : "旧时光｜中古市集";
  document.querySelectorAll("[data-i18n]").forEach((node) => { node.textContent = t()[node.dataset.i18n]; });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => { node.placeholder = t()[node.dataset.i18nPlaceholder]; });
  document.querySelectorAll("[data-i18n-aria]").forEach((node) => { node.setAttribute("aria-label", t()[node.dataset.i18nAria]); });
  document.querySelectorAll("[data-category-label]").forEach((node) => { node.textContent = t().categories[node.dataset.categoryLabel]; });
  document.querySelectorAll("select[name='category'] option").forEach((option) => { option.textContent = categoryLabel(option.value); });
  document.querySelectorAll(".brand-mark").forEach((node) => { node.textContent = currentLanguage === "ja" ? "時" : "旧"; });
  languageButton.textContent = currentLanguage === "ja" ? "中文" : "日本語";
  languageButton.setAttribute("aria-label", currentLanguage === "ja" ? "切换中文" : "日本語に切り替える");
  renderProducts();
}

function renderProducts() {
  const keyword = searchInput.value.trim().toLowerCase();
  const visibleProducts = products.filter((product) => {
    const text = [...product.ja, ...product.zh, categoryLabel(product.category)].join("");
    return (selectedCategory === "全部" || product.category === selectedCategory) && text.toLowerCase().includes(keyword);
  });
  grid.innerHTML = visibleProducts.map((product) => {
    const [name, condition] = productText(product);
    return `<article class="product-card">
      <div class="product-image" style="--card-color:${product.color}">
        <span class="condition">${condition}</span>
        <button class="favorite ${favorites.has(product.id) ? "saved" : ""}" type="button" data-favorite="${product.id}" aria-label="${favorites.has(product.id) ? t().unsaved : t().saved}：${name}">${favorites.has(product.id) ? "♥" : "♡"}</button>
        <span class="product-emoji" aria-hidden="true">${product.emoji}</span>
      </div>
      <div class="product-meta"><div><p class="product-name">${name}</p><p class="product-category">${categoryLabel(product.category)}</p></div><p class="product-price">${formatPrice(product.price)}</p></div>
    </article>`;
  }).join("");
  emptyState.hidden = visibleProducts.length > 0;
  favoriteCount.textContent = favorites.size;
}

function showToast(message) {
  toast.textContent = message; toast.classList.add("show");
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
  if (favorites.has(id)) { favorites.delete(id); showToast(t().unsaved); }
  else { favorites.add(id); showToast(t().saved); }
  localStorage.setItem("vintage-favorites", JSON.stringify([...favorites]));
  renderProducts();
});

languageButton.addEventListener("click", () => {
  currentLanguage = currentLanguage === "ja" ? "zh" : "ja";
  localStorage.setItem("vintage-language", currentLanguage);
  applyLanguage();
});
searchInput.addEventListener("input", renderProducts);
document.querySelector("#openPublish").addEventListener("click", () => dialog.showModal());
document.querySelector("#favoritesButton").addEventListener("click", () => showToast(favorites.size ? t().favoriteTotal(favorites.size) : t().noFavorites));

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const category = data.get("category");
  const enteredName = data.get("name");
  products.unshift({
    id: Date.now(), category, price: Number(data.get("price")), emoji: categoryEmoji[category], color: categoryColor[category],
    ja: [enteredName, translations.ja.justPublished], zh: [enteredName, translations.zh.justPublished]
  });
  selectedCategory = "全部";
  document.querySelectorAll(".category").forEach((item) => item.classList.toggle("active", item.dataset.category === "全部"));
  searchInput.value = ""; form.reset(); dialog.close(); renderProducts(); showToast(t().published);
  document.querySelector("#market").scrollIntoView({ behavior: "smooth" });
});

applyLanguage();
