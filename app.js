const translations = {
  ja: {
    brand: "時の市", favorites: "お気に入り", market: "マーケット",
    eyebrow: "中古価格を、ひと目で比較", heroTitle1: "欲しかったものを、", heroTitle2: "納得できる価格で。",
    heroDescription: "Mercari、Yahoo!オークション、Rakuma の出品を想定したデモデータから、お得な中古品をすばやく見つけられます。",
    dealScore: "お得度", recommend: "🔥 おすすめ", scoreDescription: "市場価格との差から、掘り出し物を自動判定。",
    searchPlaceholder: "商品名を検索", allItems: "すべて", sortLabel: "並び替え",
    sortRecommended: "おすすめ順", sortLow: "価格が安い順", sortHigh: "価格が高い順",
    itemsFound: "件の商品", mockNotice: "※ 現在はデモ用の価格データです",
    emptyTitle: "商品が見つかりません", emptyText: "検索条件を変更して、もう一度お試しください。", reset: "条件をリセット",
    currentPrice: "現在価格", marketPrice: "市場参考価格", hotDeal: "🔥 おすすめ掘り出し物",
    saved: "お気に入りに追加しました", removed: "お気に入りから削除しました", favoriteView: "お気に入り",
    noFavoriteTitle: "お気に入りはまだありません", noFavoriteText: "気になる商品にハートを付けて保存できます。"
  },
  zh: {
    brand: "旧时光", favorites: "我的收藏", market: "逛商品",
    eyebrow: "中古价格，一眼比较", heroTitle1: "喜欢的好物，", heroTitle2: "以合适的价格入手。",
    heroDescription: "通过模拟 Mercari、Yahoo拍卖、Rakuma 等平台商品数据，快速发现值得入手的中古商品。",
    dealScore: "捡漏分", recommend: "🔥 推荐捡漏", scoreDescription: "根据当前价格与市场参考价，自动判断捡漏程度。",
    searchPlaceholder: "搜索商品名称", allItems: "全部商品", sortLabel: "价格排序",
    sortRecommended: "推荐捡漏优先", sortLow: "价格从低到高", sortHigh: "价格从高到低",
    itemsFound: "件商品", mockNotice: "※ 当前使用模拟价格数据",
    emptyTitle: "没有找到商品", emptyText: "请更换搜索条件后重试。", reset: "重置条件",
    currentPrice: "当前价格", marketPrice: "市场参考价", hotDeal: "🔥 推荐捡漏",
    saved: "已加入收藏", removed: "已取消收藏", favoriteView: "我的收藏",
    noFavoriteTitle: "还没有收藏商品", noFavoriteText: "点击商品上的爱心即可保存到本机。"
  }
};

const products = [
  { id: 1, ja: "LOEWE ヴィンテージ レザーバッグ", zh: "LOEWE 中古皮革手提包", price: 23800, market: 52000, platform: "Mercari", emoji: "👜", bg: "#dfd1be", color: "#e9573f" },
  { id: 2, ja: "Nikon F3 フィルムカメラ", zh: "Nikon F3 胶片相机", price: 29800, market: 45000, platform: "Yahoo!オークション", emoji: "📷", bg: "#d7d9d0", color: "#e3a52f" },
  { id: 3, ja: "北欧ヴィンテージ テーブルランプ", zh: "北欧中古桌面灯", price: 8900, market: 22000, platform: "Rakuma", emoji: "💡", bg: "#e2d4ad", color: "#4f9b75" },
  { id: 4, ja: "Burberry 90s トレンチコート", zh: "Burberry 90年代风衣", price: 15800, market: 36000, platform: "Mercari", emoji: "🧥", bg: "#cbbda8", color: "#e9573f" },
  { id: 5, ja: "OMEGA アンティーク 手巻き時計", zh: "OMEGA 古董手动腕表", price: 42000, market: 68000, platform: "Yahoo!オークション", emoji: "⌚", bg: "#c8c0ad", color: "#e3a52f" },
  { id: 6, ja: "ウェッジウッド ティーカップ 2客", zh: "Wedgwood 茶杯两件套", price: 4600, market: 9800, platform: "Rakuma", emoji: "☕", bg: "#cbdad8", color: "#4f9b75" },
  { id: 7, ja: "Levi's 70505 デニムジャケット", zh: "Levi's 70505 牛仔夹克", price: 7200, market: 14800, platform: "Mercari", emoji: "👕", bg: "#bdccd3", color: "#e9573f" },
  { id: 8, ja: "昭和レトロ 花柄ガラス花瓶", zh: "昭和复古花纹玻璃花瓶", price: 2800, market: 7600, platform: "Rakuma", emoji: "🏺", bg: "#d8c5bd", color: "#4f9b75" },
  { id: 9, ja: "SONY WALKMAN WM-2", zh: "SONY WALKMAN WM-2 随身听", price: 18500, market: 31000, platform: "Yahoo!オークション", emoji: "🎧", bg: "#c7c9c6", color: "#e3a52f" },
  { id: 10, ja: "CELINE ヴィンテージ スカーフ", zh: "CELINE 中古丝巾", price: 3900, market: 12000, platform: "Mercari", emoji: "🧣", bg: "#dfc8bd", color: "#e9573f" },
  { id: 11, ja: "民藝 木製スツール", zh: "民艺木制凳子", price: 6800, market: 13500, platform: "Yahoo!オークション", emoji: "🪑", bg: "#d7c4a9", color: "#e3a52f" },
  { id: 12, ja: "絶版 写真集 1980年代", zh: "绝版1980年代摄影集", price: 3200, market: 8800, platform: "Rakuma", emoji: "📚", bg: "#c9c4b2", color: "#4f9b75" }
];

let language = localStorage.getItem("vintage-language") || "ja";
let currentView = "all";
let sortMode = "recommended";
let favorites = new Set(JSON.parse(localStorage.getItem("vintage-mvp-favorites") || "[]"));

const grid = document.querySelector("#productGrid");
const searchInput = document.querySelector("#searchInput");
const sortSelect = document.querySelector("#sortSelect");
const emptyState = document.querySelector("#emptyState");
const clearSearch = document.querySelector("#clearSearch");
const resultsKicker = document.querySelector("#resultsKicker");
const languageButton = document.querySelector("#languageButton");
const toast = document.querySelector("#toast");

function t(key) { return translations[language][key]; }
function productName(product) { return language === "ja" ? product.ja : product.zh; }
function dealScore(product) {
  const discountRate = 1 - product.price / product.market;
  return Math.max(0, Math.min(100, Math.round(discountRate * 150)));
}
function formatPrice(value) {
  return new Intl.NumberFormat(language === "ja" ? "ja-JP" : "zh-CN", {
    style: "currency", currency: "JPY", maximumFractionDigits: 0
  }).format(value);
}
function productImage(product) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="240" viewBox="0 0 320 240">
    <rect width="320" height="240" rx="28" fill="${product.bg}"/>
    <circle cx="160" cy="120" r="76" fill="rgba(255,255,255,.34)"/>
    <text x="160" y="148" text-anchor="middle" font-size="92">${product.emoji}</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function getVisibleProducts() {
  const keyword = searchInput.value.trim().toLowerCase();
  let list = products.filter((product) => {
    const matchesSearch = `${product.ja} ${product.zh}`.toLowerCase().includes(keyword);
    const matchesView = currentView === "all" || favorites.has(product.id);
    return matchesSearch && matchesView;
  });
  list = [...list].sort((a, b) => {
    if (sortMode === "low") return a.price - b.price;
    if (sortMode === "high") return b.price - a.price;
    return dealScore(b) - dealScore(a);
  });
  return list;
}

function renderProducts() {
  const visible = getVisibleProducts();
  grid.innerHTML = visible.map((product) => {
    const score = dealScore(product);
    const hot = score >= 80;
    const saving = Math.max(0, Math.round((1 - product.price / product.market) * 100));
    return `<article class="product-card">
      <div class="product-image-wrap" style="--product-bg:${product.bg}">
        <img class="product-image" src="${productImage(product)}" alt="${productName(product)}" />
        <span class="platform-badge" style="--platform-color:${product.color}">${product.platform}</span>
        <button class="favorite-card-button ${favorites.has(product.id) ? "saved" : ""}" type="button" data-favorite="${product.id}" aria-label="${t("favorites")}">${favorites.has(product.id) ? "♥" : "♡"}</button>
        <span class="deal-badge ${hot ? "hot" : ""}"><span>${language === "ja" ? "お得度" : "捡漏分"}</span><strong>${score}</strong></span>
      </div>
      <div class="product-content">
        <h3 class="product-name">${productName(product)}</h3>
        <div class="price-row">
          <div class="current-price"><span>${t("currentPrice")}</span><strong>${formatPrice(product.price)}</strong></div>
          <div class="market-price"><span>${t("marketPrice")}</span><strong>${formatPrice(product.market)}</strong></div>
        </div>
        <div class="savings-bar" style="--saving:${saving}%"><span></span></div>
        <p class="recommend-text">${hot ? t("hotDeal") : `−${saving}%`}</p>
      </div>
    </article>`;
  }).join("");

  const isFavoriteEmpty = currentView === "favorites" && favorites.size === 0;
  emptyState.querySelector("h3").textContent = isFavoriteEmpty ? t("noFavoriteTitle") : t("emptyTitle");
  emptyState.querySelector("p").textContent = isFavoriteEmpty ? t("noFavoriteText") : t("emptyText");
  emptyState.hidden = visible.length > 0;
  grid.hidden = visible.length === 0;
  document.querySelector("#resultCount").textContent = visible.length;
  document.querySelector("#allCount").textContent = products.length;
  updateFavoriteCounts();
}

function updateFavoriteCounts() {
  ["#favoriteCount", "#mobileFavoriteCount", "#desktopFavoriteCount"].forEach((selector) => {
    document.querySelector(selector).textContent = favorites.size;
  });
}

function setView(view) {
  currentView = view;
  document.querySelectorAll("[data-view]").forEach((button) => button.classList.toggle("active", button.dataset.view === view));
  document.querySelectorAll("[data-mobile-view]").forEach((button) => button.classList.toggle("active", button.dataset.mobileView === view));
  resultsKicker.textContent = view === "favorites" ? t("favoriteView") : t("allItems");
  renderProducts();
  document.querySelector("#market").scrollIntoView({ behavior: "smooth", block: "start" });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800);
}

function applyLanguage() {
  document.documentElement.lang = language === "ja" ? "ja" : "zh-CN";
  document.title = language === "ja" ? "時の市｜中古価格比較" : "旧时光｜中古比价";
  document.querySelectorAll("[data-i18n]").forEach((node) => { node.textContent = t(node.dataset.i18n); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => { node.placeholder = t(node.dataset.i18nPlaceholder); });
  document.querySelectorAll("#sortSelect option").forEach((option) => {
    const key = option.dataset.i18n;
    if (key) option.textContent = t(key);
  });
  document.querySelector(".brand-mark").textContent = language === "ja" ? "時" : "旧";
  languageButton.textContent = language === "ja" ? "中文" : "日本語";
  resultsKicker.textContent = currentView === "favorites" ? t("favoriteView") : t("allItems");
  renderProducts();
}

searchInput.addEventListener("input", () => {
  clearSearch.classList.toggle("show", searchInput.value.length > 0);
  renderProducts();
});
clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  clearSearch.classList.remove("show");
  searchInput.focus();
  renderProducts();
});
sortSelect.addEventListener("change", () => {
  sortMode = sortSelect.value;
  renderProducts();
});
grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-favorite]");
  if (!button) return;
  const id = Number(button.dataset.favorite);
  if (favorites.has(id)) {
    favorites.delete(id);
    showToast(t("removed"));
  } else {
    favorites.add(id);
    showToast(t("saved"));
  }
  localStorage.setItem("vintage-mvp-favorites", JSON.stringify([...favorites]));
  renderProducts();
});
document.querySelectorAll("[data-view]").forEach((button) => button.addEventListener("click", () => setView(button.dataset.view)));
document.querySelectorAll("[data-mobile-view]").forEach((button) => button.addEventListener("click", () => setView(button.dataset.mobileView)));
document.querySelector("#desktopFavoritesButton").addEventListener("click", () => setView("favorites"));
document.querySelector("#resetFilters").addEventListener("click", () => {
  searchInput.value = "";
  clearSearch.classList.remove("show");
  sortMode = "recommended";
  sortSelect.value = sortMode;
  setView("all");
});
languageButton.addEventListener("click", () => {
  language = language === "ja" ? "zh" : "ja";
  localStorage.setItem("vintage-language", language);
  applyLanguage();
});

applyLanguage();
