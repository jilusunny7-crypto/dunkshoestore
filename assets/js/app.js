/**
 * DUNK Shoe Store (@dunk.shoestore)
 * Modern E-Commerce Application & WhatsApp Order Engine
 */

// Store Configuration
const STORE_CONFIG = {
  name: "DUNK & WOKE Shoe Store",
  instagram: "@dunk.shoestore",
  instagramUrl: "https://instagram.com/dunk.shoestore",
  whatsappChatNumber: "917907073737", // wa.me/917907073737
  storePhoneNumber: "+91 7034 677 538",
  whatsappGroupUrl: "https://chat.whatsapp.com/leRRgxWOAYx1XZcXuUNh",
  googleMapsUrl: "https://maps.app.goo.gl/HjKkXckXKGd3jq7JA?g_st=ic",
  address: "KODUVALLY, Calicut, Kerala, India",
  deliveryBadge: "All India Delivery 📬"
};

// Curated Product Catalog (Dynamic & Admin Synced)
let PRODUCTS = [
  {
    id: "stock-01",
    name: "Bape Sta Low \"White Green\" Patent",
    category: "sneakers",
    categoryLabel: "In Stock",
    isAvailableStock: true,
    colorsCount: "White / Green",
    colors: ["#ffffff", "#16a34a"],
    price: 2999,
    originalPrice: 3999,
    rating: 5.0,
    reviews: 48,
    badge: "In Stock Now",
    image: "assets/images/stock/bape-sta-white-green.jpg",
    description: "Authentic in-store stock! Premium white patent leather upper with vivid emerald green shooting star logo, embossed BAPE midsole, and matching green laces. In stock at Koduvally store for immediate pickup or All India delivery.",
    sizes: [7, 8, 9, 10]
  },
  {
    id: "stock-02",
    name: "Air Jordan 1 High OG Patent \"Pine Green & Orange\"",
    category: "sneakers",
    categoryLabel: "In Stock",
    isAvailableStock: true,
    colorsCount: "Black / Green / Orange",
    colors: ["#09090b", "#14532d", "#ea580c"],
    price: 3199,
    originalPrice: 4299,
    rating: 4.9,
    reviews: 62,
    badge: "In Stock Now",
    image: "assets/images/stock/jordan-1-patent-green-orange.jpg",
    description: "Authentic in-store stock! High-gloss patent leather finish in deep pine green and midnight black with striking electric orange Swoosh. Air cushioned sole and padded collar. In stock at Koduvally store.",
    sizes: [7, 8, 9, 10, 11]
  },
  {
    id: "stock-03",
    name: "Onitsuka Tiger Mexico 66 \"Oatmeal Cream\" Suede",
    category: "sneakers",
    categoryLabel: "In Stock",
    isAvailableStock: true,
    colorsCount: "Cream / Off-White",
    colors: ["#fef3c7", "#f5f5f4", "#e7e5e4"],
    price: 2699,
    originalPrice: 3499,
    rating: 5.0,
    reviews: 54,
    badge: "In Stock Now",
    image: "assets/images/stock/onitsuka-tiger-mexico66-cream.jpg",
    description: "Authentic in-store stock! Luxurious full-suede construction in iconic oatmeal cream with crisp white cross-stripes and textured slim cupsole. Ultra lightweight and sleek retro aesthetic.",
    sizes: [6, 7, 8, 9, 10]
  },
  {
    id: "stock-04",
    name: "Converse Chuck 70 High \"Coca-Cola\" Edition",
    category: "sneakers",
    categoryLabel: "In Stock",
    isAvailableStock: true,
    colorsCount: "Black / Red / White",
    colors: ["#09090b", "#dc2626", "#ffffff"],
    price: 2499,
    originalPrice: 3299,
    rating: 4.8,
    reviews: 41,
    badge: "In Stock Now",
    image: "assets/images/stock/converse-coca-cola-high.jpg",
    description: "Authentic in-store stock! Collector's high-top canvas sneaker with vibrant red wave panel, embroidered script, signature All-Star ankle badge, and translucent iced sole.",
    sizes: [6, 7, 8, 9, 10]
  },
  {
    id: "stock-05",
    name: "Adidas Originals Superstar Suede \"Burgundy & Black\"",
    category: "sneakers",
    categoryLabel: "In Stock",
    isAvailableStock: true,
    colorsCount: "Burgundy / Black / White",
    colors: ["#831843", "#09090b", "#ffffff"],
    price: 2299,
    originalPrice: 2999,
    rating: 4.9,
    reviews: 37,
    badge: "In Stock Now",
    image: "assets/images/stock/adidas-superstar-burgundy.jpg",
    description: "Authentic in-store stock! Rich velvet burgundy suede upper contrasted with iconic black shell toe, white serrated 3-Stripes, and gold foil Superstar branding.",
    sizes: [7, 8, 9, 10, 11]
  },
  {
    id: "dunk-01",
    name: "Onitsuka Tiger Mexico 66 Streetwear Edition",
    category: "sneakers",
    categoryLabel: "In Stock",
    isAvailableStock: true,
    colorsCount: "Cream / Terracotta / Cyan",
    colors: ["#fef3c7", "#9a3412", "#06b6d4"],
    price: 2699,
    originalPrice: 3499,
    rating: 5.0,
    reviews: 79,
    badge: "Featured Drop",
    image: "assets/images/hero-shoe.jpg",
    description: "Featured on-feet drop! Iconic Mexico 66 silhouette in premium off-white leather with rich terracotta and cyan contrast stripes. Super comfortable lightweight everyday shoe.",
    sizes: [6, 7, 8, 9, 10]
  },
  {
    id: "dunk-02",
    name: "Air Max Flyknit Blue Horizon",
    category: "sneakers",
    categoryLabel: "Sneakers",
    colorsCount: "03 COLORS",
    colors: ["#0284c7", "#0f172a", "#38bdf8"],
    price: 2199,
    originalPrice: 2899,
    rating: 4.9,
    reviews: 94,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=700&auto=format&fit=crop&q=80",
    description: "Vibrant ocean blue flyknit runner equipped with full-length dynamic air sole units for responsive sports performance.",
    sizes: [7, 8, 9, 10]
  },
  {
    id: "dunk-03",
    name: "Retro Heritage Pulse Runner",
    category: "sneakers",
    categoryLabel: "Sneakers",
    colorsCount: "02 COLORS",
    colors: ["#e2e8f0", "#db2777", "#2563eb"],
    price: 1699,
    originalPrice: 2299,
    rating: 4.7,
    reviews: 110,
    badge: "25% OFF",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=700&auto=format&fit=crop&q=80",
    description: "Classic color-block retro sneaker combining supple suede overlays with high-traction rubber outsole.",
    sizes: [6, 7, 8, 9, 10]
  },
  {
    id: "dunk-04",
    name: "Oxford Elite Italian Derby",
    category: "formals",
    categoryLabel: "Formals",
    colorsCount: "02 COLORS",
    colors: ["#1c1917", "#78350f"],
    price: 2499,
    originalPrice: 3299,
    rating: 4.9,
    reviews: 88,
    badge: "Premium",
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=700&auto=format&fit=crop&q=80",
    description: "Handcrafted genuine leather formal shoe with cushioned insole and sleek polished silhouette for weddings & executive meetings.",
    sizes: [6, 7, 8, 9, 10, 11]
  },
  {
    id: "dunk-05",
    name: "Royal Tan Brogue Monk Strap",
    category: "formals",
    categoryLabel: "Formals",
    colorsCount: "01 COLOR",
    colors: ["#92400e", "#1e293b"],
    price: 2299,
    originalPrice: 2999,
    rating: 4.8,
    reviews: 67,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=700&auto=format&fit=crop&q=80",
    description: "Refined double buckle monk strap with medallion brogue detailing. Perfect balance of sophistication and modern flare.",
    sizes: [7, 8, 9, 10]
  },
  {
    id: "dunk-06",
    name: "Classic Penny Leather Loafer",
    category: "formals",
    categoryLabel: "Formals",
    colorsCount: "03 COLORS",
    colors: ["#0f172a", "#451a03", "#78350f"],
    price: 1999,
    originalPrice: 2699,
    rating: 4.7,
    reviews: 142,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1582897027650-32770dc26442?w=700&auto=format&fit=crop&q=80",
    description: "Slip-on luxury penny loafers crafted with soft glove leather and shock-absorbing rubber pads.",
    sizes: [6, 7, 8, 9, 10, 11]
  },
  {
    id: "dunk-07",
    name: "Ortho-Flex Double Buckle Sandal",
    category: "sandals",
    categoryLabel: "Sandals",
    colorsCount: "03 COLORS",
    colors: ["#451a03", "#1e293b", "#d97706"],
    price: 1199,
    originalPrice: 1699,
    rating: 4.8,
    reviews: 195,
    badge: "Top Rated",
    image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=700&auto=format&fit=crop&q=80",
    description: "Ergonomic cork-cushioned footbed sandals with durable adjustable leather straps for unmatched daily comfort in Calicut.",
    sizes: [6, 7, 8, 9, 10]
  },
  {
    id: "dunk-08",
    name: "Koduvally Comfort Slide Pro",
    category: "sandals",
    categoryLabel: "Sandals",
    colorsCount: "02 COLORS",
    colors: ["#18181b", "#52525b"],
    price: 899,
    originalPrice: 1299,
    rating: 4.9,
    reviews: 218,
    badge: "Daily Essential",
    image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=700&auto=format&fit=crop&q=80",
    description: "High-density cloud foam recovery slides built for lightweight waterproof grip and all-day relaxation.",
    sizes: [6, 7, 8, 9, 10, 11]
  },
  {
    id: "dunk-09",
    name: "Dunk Women Chunky Cloud Pastel",
    category: "women",
    categoryLabel: "Women",
    colorsCount: "03 COLORS",
    colors: ["#fbcfe8", "#e0e7ff", "#fef08a"],
    price: 1799,
    originalPrice: 2399,
    rating: 4.9,
    reviews: 156,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=700&auto=format&fit=crop&q=80",
    description: "Chic pastel chunky platform sneakers designed for fashionable flair, elevated height, and featherlight walking.",
    sizes: [4, 5, 6, 7, 8]
  },
  {
    id: "dunk-10",
    name: "Women's Sleek Air Walk Trainer",
    category: "women",
    categoryLabel: "Women",
    colorsCount: "02 COLORS",
    colors: ["#ffffff", "#f43f5e"],
    price: 1599,
    originalPrice: 2199,
    rating: 4.8,
    reviews: 134,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=700&auto=format&fit=crop&q=80",
    description: "Slip-on breathable knit shoes engineered with memory foam cushioning for gym, walking, and college style.",
    sizes: [4, 5, 6, 7, 8]
  },
  {
    id: "dunk-11",
    name: "Dunk Street Edge Mid-Top",
    category: "sneakers",
    categoryLabel: "Sneakers",
    colorsCount: "04 COLORS",
    colors: ["#18181b", "#e11d48", "#ffffff"],
    price: 2399,
    originalPrice: 3199,
    rating: 4.9,
    reviews: 178,
    badge: "Hot Drop",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=700&auto=format&fit=crop&q=80",
    description: "Premium mid-cut urban sneaker featuring padded collar, contrast panels, and reinforced skate cupsole.",
    sizes: [7, 8, 9, 10, 11]
  },
  {
    id: "dunk-12",
    name: "Women's Chic Pointed Loafer",
    category: "women",
    categoryLabel: "Women",
    colorsCount: "02 COLORS",
    colors: ["#78350f", "#09090b"],
    price: 1899,
    originalPrice: 2499,
    rating: 4.7,
    reviews: 82,
    badge: "Formal Chic",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=700&auto=format&fit=crop&q=80",
    description: "Elegant pointed toe loafer with gold metallic buckle embellishment. Transition effortlessly from office to evening outings.",
    sizes: [5, 6, 7, 8]
  }
];

// Safe storage helpers (prevents crashes on restricted file:/// or strict privacy modes)
function loadStoredArray(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.warn("Storage not accessible:", e);
    return [];
  }
}

function saveStoredArray(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn("Storage write failed:", e);
  }
}

// Safe Lucide icon initializer
function refreshIcons() {
  try {
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
      lucide.createIcons();
    }
  } catch (e) {
    console.warn("Lucide icons failed to render:", e);
  }
}

// App State
let currentCategory = 'all';
let searchQuery = '';
let cart = loadStoredArray('dunk_cart');
let wishlist = loadStoredArray('dunk_wishlist');
let quickViewSelectedProduct = null;
let quickViewSelectedSize = null;

// Dynamic Catalog Sync from Backend & localStorage
const CATALOG_STORAGE_KEY = 'dunk_products_catalog';
async function loadDynamicCatalog() {
  try {
    const res = await fetch('/api/products');
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        PRODUCTS = data;
        saveStoredArray(CATALOG_STORAGE_KEY, data);
        renderProducts();
        return;
      }
    }
  } catch (err) {
    // API not responding
  }

  // Fallback to stored catalog
  const saved = loadStoredArray(CATALOG_STORAGE_KEY);
  if (Array.isArray(saved) && saved.length > 0) {
    PRODUCTS = saved;
    renderProducts();
  }
}

// Auto-sync storefront when Admin modifies inventory in another tab
window.addEventListener('storage', (e) => {
  if (e.key === CATALOG_STORAGE_KEY) {
    try {
      const updated = JSON.parse(e.newValue);
      if (Array.isArray(updated) && updated.length > 0) {
        PRODUCTS = updated;
        renderProducts();
      }
    } catch (err) {}
  }
});

// Site Preloader Dismissal (smoothly fades out when page is ready or on brief lag)
function dismissPreloader() {
  const preloader = document.getElementById('sitePreloader');
  if (preloader && !preloader.classList.contains('preloader-hidden')) {
    preloader.classList.add('preloader-hidden');
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 600);
  }
}

// Dismiss once all images, styles, and fonts load
window.addEventListener('load', () => {
  setTimeout(dismissPreloader, 400);
});

// Fallback safety timeout (maximum 1.5 seconds)
setTimeout(dismissPreloader, 1500);

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  loadDynamicCatalog();
  renderProducts();
  setupEventListeners();
  updateCartBadge();
  updateWishlistBadge();
  init3DRunnerShowcase();
  initScrollyShoe();
});

// Render Products Grid
function renderProducts() {
  const container = document.getElementById('productsGrid');
  if (!container) return;

  const filtered = PRODUCTS.filter(p => {
    const matchesCategory = currentCategory === 'all' || 
      (currentCategory === 'stock' ? p.isAvailableStock === true : p.category === currentCategory);
    const matchesSearch = searchQuery === '' || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-ash-300 border border-white/15">
          <i data-lucide="search-x" class="w-8 h-8"></i>
        </div>
        <h3 class="text-xl font-bold text-white mb-2">No Shoes Found</h3>
        <p class="text-ash-400 mb-6">We couldn't find any products matching your criteria.</p>
        <button onclick="resetFilters()" class="px-6 py-2.5 bg-white text-ash-950 rounded-full font-bold hover:bg-ash-100 transition shadow-lg">
          View All Products
        </button>
      </div>
    `;
    refreshIcons();
    return;
  }

  container.innerHTML = filtered.map(product => {
    const isWishlisted = wishlist.includes(product.id);
    const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    const isSoldOut = product.inStock === false || (product.stockQuantity !== undefined && product.stockQuantity === 0);

    return `
      <div class="product-card p-4 sm:p-5 flex flex-col justify-between group ${product.isAvailableStock && !isSoldOut ? 'ring-1 ring-white/20 shadow-xl' : ''} ${isSoldOut ? 'opacity-85' : ''}" data-id="${product.id}">
        <!-- Top meta: Category, Wishlist -->
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center gap-2">
            ${isSoldOut ? `
              <span class="text-xs uppercase tracking-wider font-extrabold text-rose-300 bg-rose-500/15 px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-rose-500/30">
                <span class="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                Sold Out
              </span>
            ` : (product.isAvailableStock ? `
              <span class="text-xs uppercase tracking-wider font-extrabold text-white bg-white/10 px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-white/20">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                In Store
              </span>
            ` : `
              <span class="text-xs uppercase tracking-wider font-bold text-ash-300 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                ${product.categoryLabel}
              </span>
            `)}
            <span class="text-xs text-ash-400 font-medium truncate max-w-[130px]">
              ${product.colorsCount}
            </span>
          </div>
          <button 
            onclick="toggleWishlist('${product.id}')" 
            class="wishlist-btn w-9 h-9 rounded-full flex items-center justify-center ${isWishlisted ? 'active' : 'text-ash-400 hover:text-white'}"
            aria-label="Wishlist"
            title="Save to Wishlist"
          >
            <i data-lucide="heart" class="w-4 h-4 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}"></i>
          </button>
        </div>

        <!-- Product Image with Click for Quick View -->
        <div 
          onclick="openQuickView('${product.id}')"
          class="shoe-img-wrapper cursor-pointer rounded-2xl h-56 sm:h-60 flex items-center justify-center ${product.isAvailableStock ? 'p-1' : 'p-4'} relative overflow-hidden mb-4"
        >
          ${isSoldOut ? `
            <span class="absolute top-3 left-3 z-10 text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-[#161716]/95 backdrop-blur-xs text-rose-400 shadow-md flex items-center gap-1.5 border border-rose-500/30">
              <span class="w-2 h-2 rounded-full bg-rose-500"></span>
              Out of Stock
            </span>
          ` : (product.isAvailableStock ? `
            <span class="absolute top-3 left-3 z-10 text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-[#161716]/95 backdrop-blur-xs text-white shadow-md flex items-center gap-1.5 border border-white/20">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Available Stock
            </span>
          ` : (product.badge ? `
            <span class="absolute top-3 left-3 z-10 text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${product.badge === '25% OFF' ? 'bg-white text-ash-950 font-black' : 'bg-white/15 backdrop-blur-xs text-white border border-white/20'} shadow-sm">
              ${product.badge}
            </span>
          ` : ''))}
          <img 
            src="${product.image}" 
            alt="${product.name}" 
            class="shoe-img max-h-full max-w-full ${product.isAvailableStock ? 'w-full h-full object-cover rounded-xl' : 'object-contain filter drop-shadow-md'} ${isSoldOut ? 'grayscale-30 opacity-75' : ''}"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span class="bg-white text-ash-950 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <i data-lucide="eye" class="w-3.5 h-3.5 text-ash-800"></i> Quick View
            </span>
          </div>
        </div>

        <!-- Title & Rating -->
        <div class="mb-3">
          <h3 
            onclick="openQuickView('${product.id}')"
            class="font-bold text-white text-base sm:text-lg hover:text-ash-300 transition cursor-pointer line-clamp-1 mb-1"
          >
            ${product.name}
          </h3>
          <div class="flex items-center gap-2">
            <div class="flex items-center text-amber-400 text-xs font-bold">
              <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400 text-amber-400 mr-1"></i>
              ${product.rating}
            </div>
            <span class="text-xs text-ash-400 font-medium">(${product.reviews} reviews)</span>
          </div>
        </div>

        <!-- Price & Action Buttons -->
        <div class="pt-3 border-t border-white/10 flex items-center justify-between gap-2 mt-auto">
          <div>
            <div class="flex items-baseline gap-1.5">
              <span class="text-lg sm:text-xl font-extrabold text-white">₹${product.price.toLocaleString('en-IN')}</span>
              <span class="text-xs text-ash-400 line-through">₹${product.originalPrice.toLocaleString('en-IN')}</span>
            </div>
            <span class="text-[10px] font-extrabold text-white bg-white/15 px-1.5 py-0.5 rounded border border-white/20">${discountPercent}% OFF</span>
          </div>

          <div class="flex items-center gap-1.5">
            <!-- 1-Click WhatsApp Direct Order Button -->
            <button 
              onclick="orderDirectViaWhatsApp('${product.id}')" 
              class="w-9 h-9 rounded-full bg-white/10 text-white hover:bg-white hover:text-black transition flex items-center justify-center border border-white/15 shadow-xs"
              title="${isSoldOut ? 'Inquire for restock on WhatsApp' : 'Order directly on WhatsApp'}"
            >
              <i data-lucide="message-circle" class="w-4 h-4"></i>
            </button>
            <!-- Add to Cart Pill Button -->
            ${isSoldOut ? `
              <button 
                disabled
                class="px-3.5 sm:px-4 py-2 bg-white/10 text-ash-400 font-bold text-xs sm:text-sm rounded-full cursor-not-allowed border border-white/10"
              >
                <span>Sold Out</span>
              </button>
            ` : `
              <button 
                onclick="addToCart('${product.id}')" 
                class="px-3.5 sm:px-4 py-2 bg-white hover:bg-ash-100 text-ash-950 font-bold text-xs sm:text-sm rounded-full transition-all duration-200 flex items-center gap-1.5 shadow-md"
              >
                <span>Add to Cart</span>
              </button>
            `}
          </div>
        </div>
      </div>
    `;
  }).join('');

  refreshIcons();
}

// Category Filter Handling
function setCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll('.category-pill').forEach(btn => {
    if (btn.dataset.category === cat) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  renderProducts();
}

function resetFilters() {
  currentCategory = 'all';
  searchQuery = '';
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';
  document.querySelectorAll('.category-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === 'all');
  });
  renderProducts();
}

// Wishlist Functionality
function toggleWishlist(productId) {
  const index = wishlist.indexOf(productId);
  if (index > -1) {
    wishlist.splice(index, 1);
    showToast("Removed from wishlist");
  } else {
    wishlist.push(productId);
    showToast("Added to wishlist ❤️");
  }
  saveStoredArray('dunk_wishlist', wishlist);
  updateWishlistBadge();
  renderProducts();
}

function updateWishlistBadge() {
  const badge = document.getElementById('wishlistBadge');
  if (badge) {
    badge.textContent = wishlist.length;
    badge.style.display = wishlist.length > 0 ? 'flex' : 'none';
  }
}

// Cart Functionality
function addToCart(productId, size = null) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const chosenSize = size || product.sizes[0];
  const existingIndex = cart.findIndex(item => item.id === productId && item.size === chosenSize);

  if (existingIndex > -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      categoryLabel: product.categoryLabel,
      price: product.price,
      image: product.image,
      size: chosenSize,
      quantity: 1
    });
  }

  saveCart();
  updateCartBadge();
  renderCartDrawer();
  showToast(`Added "${product.name}" (Size UK ${chosenSize}) to cart! 🛍️`);
}

function updateQuantity(index, delta) {
  if (cart[index]) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
      showToast("Item removed from cart");
    }
    saveCart();
    updateCartBadge();
    renderCartDrawer();
  }
}

function removeFromCart(index) {
  if (cart[index]) {
    cart.splice(index, 1);
    saveCart();
    updateCartBadge();
    renderCartDrawer();
    showToast("Item removed from cart");
  }
}

function saveCart() {
  saveStoredArray('dunk_cart', cart);
}

function updateCartBadge() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById('cartBadge');
  if (badge) {
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'flex' : 'none';
  }
}

function renderCartDrawer() {
  const container = document.getElementById('cartItemsList');
  const subtotalEl = document.getElementById('cartSubtotal');
  const emptyStateEl = document.getElementById('cartEmptyState');
  const cartFooterEl = document.getElementById('cartFooter');

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = '';
    if (emptyStateEl) emptyStateEl.classList.remove('hidden');
    if (cartFooterEl) cartFooterEl.classList.add('hidden');
    return;
  }

  if (emptyStateEl) emptyStateEl.classList.add('hidden');
  if (cartFooterEl) cartFooterEl.classList.remove('hidden');

  let subtotal = 0;

  container.innerHTML = cart.map((item, index) => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    return `
      <div class="flex items-center gap-3.5 p-3 rounded-2xl bg-[#1e201e] border border-white/10">
        <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-contain bg-[#282a28] rounded-xl p-1 border border-white/10" />
        <div class="flex-1 min-w-0">
          <h4 class="font-bold text-sm text-white truncate">${item.name}</h4>
          <p class="text-xs text-ash-400 font-medium">Size: UK ${item.size} • ₹${item.price.toLocaleString('en-IN')}</p>
          <div class="flex items-center gap-2 mt-2">
            <div class="flex items-center border border-white/15 rounded-lg bg-[#282a28] overflow-hidden">
              <button onclick="updateQuantity(${index}, -1)" class="w-6 h-6 flex items-center justify-center text-ash-300 hover:bg-white/10">
                <i data-lucide="minus" class="w-3 h-3"></i>
              </button>
              <span class="w-7 text-center text-xs font-bold text-white">${item.quantity}</span>
              <button onclick="updateQuantity(${index}, 1)" class="w-6 h-6 flex items-center justify-center text-ash-300 hover:bg-white/10">
                <i data-lucide="plus" class="w-3 h-3"></i>
              </button>
            </div>
            <span class="text-xs font-bold text-white ml-auto">₹${itemTotal.toLocaleString('en-IN')}</span>
          </div>
        </div>
        <button onclick="removeFromCart(${index})" class="text-ash-400 hover:text-rose-400 p-1.5 transition" title="Remove item">
          <i data-lucide="trash-2" class="w-4 h-4"></i>
        </button>
      </div>
    `;
  }).join('');

  if (subtotalEl) {
    subtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  }

  refreshIcons();
}

// Direct 1-Click WhatsApp Order for single product
function orderDirectViaWhatsApp(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const defaultSize = product.sizes[0];
  const message = 
`Hello DUNK & WOKE Shoe Store! 👋
I would like to order this item:

👟 *Product*: ${product.name}
🏷️ *Category*: ${product.categoryLabel}
📏 *Size*: UK ${defaultSize}
💰 *Price*: ₹${product.price.toLocaleString('en-IN')}

📍 Store: Koduvally, Calicut
📬 Please confirm stock and delivery details!`;

  const url = `https://wa.me/${STORE_CONFIG.whatsappChatNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// Cart Checkout Via WhatsApp
function checkoutViaWhatsApp() {
  if (cart.length === 0) {
    showToast("Your cart is empty!");
    return;
  }

  const customerName = document.getElementById('checkoutName')?.value.trim() || 'Valued Customer';
  const customerCity = document.getElementById('checkoutCity')?.value.trim() || 'Calicut / Kerala';

  let itemsSummary = '';
  let grandTotal = 0;

  cart.forEach((item, i) => {
    const total = item.price * item.quantity;
    grandTotal += total;
    itemsSummary += `${i + 1}. *${item.name}* (Size: UK ${item.size}) x ${item.quantity} = ₹${total.toLocaleString('en-IN')}\n`;
  });

  const message = 
`🛍️ *NEW ORDER - DUNK & WOKE SHOE STORE* 🛍️
-----------------------------------
👤 *Customer*: ${customerName}
📍 *Delivery Location*: ${customerCity}
🚚 *Shipping*: All India Delivery

📦 *Items Ordered*:
${itemsSummary}
-----------------------------------
💵 *Total Amount*: ₹${grandTotal.toLocaleString('en-IN')}
-----------------------------------
Please confirm my order and share payment (UPI/GPay/COD) details. Thank you!`;

  const url = `https://wa.me/${STORE_CONFIG.whatsappChatNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// Quick View Modal
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  quickViewSelectedProduct = product;
  quickViewSelectedSize = product.sizes[0];

  const modal = document.getElementById('quickViewModal');
  const imgEl = document.getElementById('qvImage');
  const nameEl = document.getElementById('qvName');
  const catEl = document.getElementById('qvCategory');
  const priceEl = document.getElementById('qvPrice');
  const origPriceEl = document.getElementById('qvOriginalPrice');
  const descEl = document.getElementById('qvDescription');
  const sizesContainer = document.getElementById('qvSizes');
  const colorsContainer = document.getElementById('qvColors');

  if (imgEl) {
    imgEl.src = product.image;
    imgEl.className = product.isAvailableStock 
      ? "max-h-full max-w-full w-full h-full object-cover rounded-xl shadow-inner" 
      : "max-h-full max-w-full object-contain filter drop-shadow-md";
  }
  if (nameEl) nameEl.textContent = product.name;
  if (catEl) catEl.textContent = product.isAvailableStock ? "In Stock • Calicut" : product.categoryLabel;
  if (priceEl) priceEl.textContent = `₹${product.price.toLocaleString('en-IN')}`;
  if (origPriceEl) origPriceEl.textContent = `₹${product.originalPrice.toLocaleString('en-IN')}`;
  if (descEl) descEl.textContent = product.description;

  // Render Sizes
  if (sizesContainer) {
    sizesContainer.innerHTML = product.sizes.map((s, idx) => `
      <button 
        type="button"
        onclick="selectQuickViewSize(${s})" 
        class="qv-size-btn w-11 h-11 rounded-xl border text-sm font-bold transition flex items-center justify-center ${s === quickViewSelectedSize ? 'border-white bg-white text-ash-950' : 'border-white/15 bg-white/5 text-ash-200 hover:border-white/40'}"
      >
        UK ${s}
      </button>
    `).join('');
  }

  // Render Colors
  if (colorsContainer) {
    colorsContainer.innerHTML = product.colors.map(c => `
      <span class="w-6 h-6 rounded-full border border-white shadow-sm inline-block" style="background-color: ${c}"></span>
    `).join('');
  }

  // Update Sold Out status on Quick View buttons
  const isSoldOut = product.inStock === false || (product.stockQuantity !== undefined && product.stockQuantity === 0);
  const qvAddToCartBtn = document.getElementById('qvAddToCartBtn');
  const qvWhatsAppBtn = document.getElementById('qvWhatsAppBtn');
  if (qvAddToCartBtn) {
    if (isSoldOut) {
      qvAddToCartBtn.disabled = true;
      qvAddToCartBtn.className = "w-full py-3.5 bg-white/10 text-ash-500 border border-white/10 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-not-allowed";
      qvAddToCartBtn.innerHTML = `<i data-lucide="slash" class="w-4 h-4"></i><span>Sold Out</span>`;
    } else {
      qvAddToCartBtn.disabled = false;
      qvAddToCartBtn.className = "w-full py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition";
      qvAddToCartBtn.innerHTML = `<i data-lucide="shopping-bag" class="w-4 h-4"></i><span>Add to Cart</span>`;
    }
  }
  if (qvWhatsAppBtn) {
    if (isSoldOut) {
      qvWhatsAppBtn.innerHTML = `<i data-lucide="message-circle" class="w-4 h-4 fill-current"></i><span>Inquire for Restock on WhatsApp</span>`;
    } else {
      qvWhatsAppBtn.innerHTML = `<i data-lucide="message-circle" class="w-4 h-4 fill-current"></i><span>Order Instantly on WhatsApp</span>`;
    }
  }

  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
  refreshIcons();
}

function selectQuickViewSize(size) {
  quickViewSelectedSize = size;
  document.querySelectorAll('.qv-size-btn').forEach(btn => {
    if (btn.textContent.trim() === `UK ${size}`) {
      btn.className = "qv-size-btn w-11 h-11 rounded-xl border text-sm font-bold transition flex items-center justify-center border-white bg-white text-ash-950";
    } else {
      btn.className = "qv-size-btn w-11 h-11 rounded-xl border text-sm font-bold transition flex items-center justify-center border-white/15 bg-white/5 text-ash-200 hover:border-white/40";
    }
  });
}

function addQuickViewToCart() {
  if (quickViewSelectedProduct) {
    addToCart(quickViewSelectedProduct.id, quickViewSelectedSize);
    closeQuickView();
  }
}

function orderQuickViewOnWhatsApp() {
  if (!quickViewSelectedProduct) return;
  const message = 
`Hello DUNK Shoe Store! 👋
I would like to order:

👟 *Product*: ${quickViewSelectedProduct.name}
📏 *Selected Size*: UK ${quickViewSelectedSize}
💰 *Price*: ₹${quickViewSelectedProduct.price.toLocaleString('en-IN')}

📍 Delivery to: Kerala / All India
Please let me know how to proceed!`;

  const url = `https://wa.me/${STORE_CONFIG.whatsappChatNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function closeQuickView() {
  const modal = document.getElementById('quickViewModal');
  if (modal) modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

// Drawer & UI Control
function toggleCart() {
  const drawer = document.getElementById('cartDrawer');
  if (drawer) {
    const isClosed = drawer.classList.contains('translate-x-full');
    if (isClosed) {
      drawer.classList.remove('translate-x-full');
      document.getElementById('cartBackdrop').classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
      renderCartDrawer();
    } else {
      drawer.classList.add('translate-x-full');
      document.getElementById('cartBackdrop').classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }
  }
}

function closeCart() {
  const drawer = document.getElementById('cartDrawer');
  if (drawer) {
    drawer.classList.add('translate-x-full');
    document.getElementById('cartBackdrop').classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}

// Wishlist Modal
function toggleWishlistModal() {
  const modal = document.getElementById('wishlistModal');
  if (!modal) return;
  
  if (modal.classList.contains('hidden')) {
    renderWishlistModal();
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  } else {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}

function renderWishlistModal() {
  const container = document.getElementById('wishlistItemsContainer');
  if (!container) return;

  const items = PRODUCTS.filter(p => wishlist.includes(p.id));

  if (items.length === 0) {
    container.innerHTML = `
      <div class="py-12 text-center">
        <div class="w-14 h-14 bg-white/10 text-white rounded-full flex items-center justify-center mx-auto mb-3 border border-white/15">
          <i data-lucide="heart" class="w-7 h-7"></i>
        </div>
        <h4 class="font-bold text-white text-lg mb-1">Your Wishlist is Empty</h4>
        <p class="text-ash-400 text-sm">Explore our shoes and tap the heart icon on any style you love!</p>
      </div>
    `;
    refreshIcons();
    return;
  }

  container.innerHTML = items.map(item => `
    <div class="flex items-center justify-between gap-4 p-3 bg-[#1e201e] rounded-2xl border border-white/10">
      <img src="${item.image}" alt="${item.name}" class="w-14 h-14 object-contain rounded-xl bg-[#282a28] p-1 border border-white/10" />
      <div class="flex-1 min-w-0">
        <h5 class="font-bold text-sm text-white truncate">${item.name}</h5>
        <p class="text-xs text-ash-300 font-semibold">₹${item.price.toLocaleString('en-IN')}</p>
      </div>
      <div class="flex items-center gap-2">
        <button onclick="addToCart('${item.id}'); toggleWishlistModal();" class="px-3.5 py-1.5 bg-white hover:bg-ash-100 text-ash-950 rounded-full text-xs font-bold transition shadow-md">
          Add to Cart
        </button>
        <button onclick="toggleWishlist('${item.id}'); renderWishlistModal();" class="p-1.5 text-ash-400 hover:text-rose-400 transition" title="Remove from wishlist">
          <i data-lucide="trash-2" class="w-4 h-4"></i>
        </button>
      </div>
    </div>
  `).join('');

  refreshIcons();
}

// Search Modal
function toggleSearchModal() {
  const modal = document.getElementById('searchModal');
  if (!modal) return;
  if (modal.classList.contains('hidden')) {
    modal.classList.remove('hidden');
    document.getElementById('liveSearchInput')?.focus();
  } else {
    modal.classList.add('hidden');
  }
}

function handleLiveSearch(query) {
  searchQuery = query;
  renderProducts();
}

// Toast Notification
function showToast(message) {
  const toast = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMessage');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.remove('translate-y-24', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.add('translate-y-24', 'opacity-0');
    toast.classList.remove('translate-y-0', 'opacity-100');
  }, 3200);
}

// Global Event Listeners
function setupEventListeners() {
  // Mobile Nav Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });
  }

  // Live search input in header
  const liveSearchInput = document.getElementById('liveSearchInput');
  if (liveSearchInput) {
    liveSearchInput.addEventListener('input', (e) => {
      handleLiveSearch(e.target.value);
    });
  }

  // Keyboard escape for modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeQuickView();
      closeCart();
      closeSizeGuideModal();
      document.getElementById('wishlistModal')?.classList.add('hidden');
      document.getElementById('searchModal')?.classList.add('hidden');
    }
  });
}

function toggleMobileMenu() {
  const mobileNav = document.getElementById('mobileNav');
  if (mobileNav) {
    mobileNav.classList.toggle('hidden');
  }
}

// ----------------------------------------------------
// INTERACTIVE SHOE SIZE GUIDE & CONVERTER ENGINE
// ----------------------------------------------------
const SIZE_GUIDE_DATA = {
  men: [
    { uk: 6, us: 7, eu: 40, cm: 24.5, in: 9.6, tip: "Snug Fit" },
    { uk: 7, us: 8, eu: 41, cm: 25.5, in: 10.0, tip: "Standard Indian Fit" },
    { uk: 8, us: 9, eu: 42, cm: 26.5, in: 10.4, tip: "Most Popular Men's Size" },
    { uk: 9, us: 10, eu: 43, cm: 27.5, in: 10.8, tip: "Most Popular Men's Size" },
    { uk: 10, us: 11, eu: 44.5, cm: 28.5, in: 11.2, tip: "Comfortable Fit" },
    { uk: 11, us: 12, eu: 45.5, cm: 29.5, in: 11.6, tip: "Roomy Fit" },
    { uk: 12, us: 13, eu: 47, cm: 30.5, in: 12.0, tip: "Large Fit" }
  ],
  women: [
    { uk: 3, us: 5, eu: 36, cm: 22.0, in: 8.7, tip: "Petite Fit" },
    { uk: 4, us: 6, eu: 37, cm: 23.0, in: 9.1, tip: "Standard Indian Fit" },
    { uk: 5, us: 7, eu: 38, cm: 24.0, in: 9.4, tip: "Most Popular Women's Size" },
    { uk: 6, us: 8, eu: 39, cm: 25.0, in: 9.8, tip: "Most Popular Women's Size" },
    { uk: 7, us: 9, eu: 40.5, cm: 26.0, in: 10.2, tip: "Comfortable Fit" },
    { uk: 8, us: 10, eu: 42, cm: 27.0, in: 10.6, tip: "Roomy Fit" }
  ]
};

let currentSizeGuideTab = 'men';
let currentSelectedGuideSize = 8;

function openSizeGuideModal(preselectedUkSize = null) {
  const modal = document.getElementById('sizeGuideModal');
  if (!modal) return;

  if (preselectedUkSize) {
    currentSelectedGuideSize = preselectedUkSize;
  }

  // If women product is open in quick view, default to women tab
  if (quickViewSelectedProduct && quickViewSelectedProduct.category === 'women') {
    currentSizeGuideTab = 'women';
    if (!preselectedUkSize) currentSelectedGuideSize = 5;
  }

  switchSizeGuideTab(currentSizeGuideTab);
  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
  refreshIcons();
}

function closeSizeGuideModal() {
  const modal = document.getElementById('sizeGuideModal');
  if (modal) {
    modal.classList.add('hidden');
    // If quick view modal is not active, restore scroll
    const qvModal = document.getElementById('quickViewModal');
    if (!qvModal || qvModal.classList.contains('hidden')) {
      document.body.classList.remove('overflow-hidden');
    }
  }
}

function switchSizeGuideTab(tab) {
  currentSizeGuideTab = tab;
  const tabMen = document.getElementById('sgTabMen');
  const tabWomen = document.getElementById('sgTabWomen');
  const tabHowTo = document.getElementById('sgTabHowTo');
  const convContainer = document.getElementById('sgConverterContainer');
  const howToContainer = document.getElementById('sgHowToContainer');

  const activeClass = "flex-1 py-2 px-2.5 rounded-xl transition bg-ash-950 text-white shadow-xs font-bold";
  const idleClass = "flex-1 py-2 px-2.5 rounded-xl transition text-ash-700 hover:text-ash-950 font-bold";

  if (tabMen) tabMen.className = (tab === 'men') ? activeClass : idleClass;
  if (tabWomen) tabWomen.className = (tab === 'women') ? activeClass : idleClass;
  if (tabHowTo) tabHowTo.className = (tab === 'howto') ? (activeClass + " flex items-center justify-center gap-1") : (idleClass + " flex items-center justify-center gap-1");

  if (tab === 'howto') {
    if (convContainer) convContainer.classList.add('hidden');
    if (howToContainer) howToContainer.classList.remove('hidden');
  } else {
    if (convContainer) convContainer.classList.remove('hidden');
    if (howToContainer) howToContainer.classList.add('hidden');
    
    // Validate selected size exists in current gender list
    const list = SIZE_GUIDE_DATA[tab] || [];
    const exists = list.some(item => item.uk === currentSelectedGuideSize);
    if (!exists && list.length > 0) {
      currentSelectedGuideSize = tab === 'women' ? 5 : 8;
    }
    renderSizeGuide();
  }
  refreshIcons();
}

function selectGuideSize(ukSize) {
  currentSelectedGuideSize = ukSize;
  renderSizeGuide();
}

function renderSizeGuide() {
  const list = SIZE_GUIDE_DATA[currentSizeGuideTab] || [];
  const selectedItem = list.find(i => i.uk === currentSelectedGuideSize) || list[0];
  if (!selectedItem) return;

  // 1. Render Size Buttons
  const buttonsContainer = document.getElementById('sgSizeButtons');
  if (buttonsContainer) {
    buttonsContainer.innerHTML = list.map(item => {
      const isSelected = item.uk === selectedItem.uk;
      return `
        <button 
          type="button" 
          onclick="selectGuideSize(${item.uk})"
          class="w-12 h-10 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center border ${
            isSelected 
              ? 'bg-ash-950 text-white border-ash-950 shadow-md scale-105' 
              : 'bg-white text-ash-800 border-ash-200 hover:border-ash-400 hover:bg-ash-100'
          }"
        >
          UK ${item.uk}
        </button>
      `;
    }).join('');
  }

  // 2. Update Live Conversion Values
  const valUK = document.getElementById('sgValUK');
  const valUS = document.getElementById('sgValUS');
  const valEU = document.getElementById('sgValEU');
  const valCM = document.getElementById('sgValCM');
  const tipEl = document.getElementById('sgFittingTip');

  if (valUK) valUK.textContent = `UK ${selectedItem.uk}`;
  if (valUS) valUS.textContent = `US ${selectedItem.us}`;
  if (valEU) valEU.textContent = `EU ${selectedItem.eu}`;
  if (valCM) valCM.textContent = `${selectedItem.cm} cm`;
  if (tipEl) tipEl.textContent = selectedItem.tip;

  // 3. Render Table Rows
  const tableBody = document.getElementById('sgTableBody');
  if (tableBody) {
    tableBody.innerHTML = list.map(item => {
      const isSelected = item.uk === selectedItem.uk;
      return `
        <tr 
          onclick="selectGuideSize(${item.uk})"
          class="cursor-pointer transition-colors ${
            isSelected 
              ? 'bg-ash-950 text-white font-extrabold' 
              : 'hover:bg-ash-100 text-ash-800'
          }"
        >
          <td class="py-2.5 px-3 font-black">UK ${item.uk}</td>
          <td class="py-2.5 px-3">US ${item.us}</td>
          <td class="py-2.5 px-3">EU ${item.eu}</td>
          <td class="py-2.5 px-3 font-bold">${item.cm} cm</td>
          <td class="py-2.5 px-3">${item.in}"</td>
        </tr>
      `;
    }).join('');
  }
}

// ----------------------------------------------------
// ANIMATED 3D RUNNER SHOWCASE ENGINE
// ----------------------------------------------------
let heroShowcaseMode = 'runner';
let isTurboActive = false;

function switchHeroShowcaseMode(mode) {
  heroShowcaseMode = mode;
  const tabRunner = document.getElementById('heroTabRunner');
  const tabLifestyle = document.getElementById('heroTabLifestyle');
  const viewRunner = document.getElementById('heroViewRunner');
  const viewLifestyle = document.getElementById('heroViewLifestyle');

  const activeBtnClass = "px-3.5 py-1.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 bg-white text-ash-950 shadow-md";
  const idleBtnClass = "px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 text-ash-300 hover:text-white";

  if (mode === 'runner') {
    if (tabRunner) tabRunner.className = activeBtnClass;
    if (tabLifestyle) tabLifestyle.className = idleBtnClass;
    if (viewRunner) viewRunner.classList.remove('hidden');
    if (viewLifestyle) viewLifestyle.classList.add('hidden');
  } else {
    if (tabRunner) tabRunner.className = idleBtnClass;
    if (tabLifestyle) tabLifestyle.className = activeBtnClass;
    if (viewRunner) viewRunner.classList.add('hidden');
    if (viewLifestyle) viewLifestyle.classList.remove('hidden');
  }
  refreshIcons();
}

function toggleTurboBoost(e) {
  if (e) e.stopPropagation();
  isTurboActive = !isTurboActive;

  const btn = document.getElementById('turboBoostBtn');
  const speedometer = document.getElementById('runnerSpeedometer');
  const card = document.getElementById('heroShowcaseCard');
  const runnerImg = document.getElementById('heroRunnerImg');

  if (isTurboActive) {
    if (btn) {
      btn.className = "absolute top-4 right-4 z-20 bg-amber-400 text-slate-950 px-3 py-1 rounded-full text-[11px] font-black shadow-xl transition transform scale-105 flex items-center gap-1 animate-pulse border border-amber-300";
      btn.innerHTML = "<span>🔥 TURBO 48 KM/H</span>";
    }
    if (speedometer) speedometer.textContent = "48 KM/H MAXIMUM SPRINT";
    if (card) card.classList.add('turbo-active');
    if (runnerImg) runnerImg.style.animationDuration = "0.38s";
    showToast("⚡ TURBO SPRINT ACTIVATED! Running away with the drop!");
  } else {
    if (btn) {
      btn.className = "absolute top-4 right-4 z-20 bg-white/90 hover:bg-white text-ash-950 px-3 py-1 rounded-full text-[11px] font-black shadow-xl transition transform hover:scale-105 active:scale-95 flex items-center gap-1 border border-ash-200";
      btn.innerHTML = "<span>⚡ BOOST</span>";
    }
    if (speedometer) speedometer.textContent = "32 KM/H SPRINT";
    if (card) card.classList.remove('turbo-active');
    if (runnerImg) runnerImg.style.animationDuration = "0.72s";
  }
}

function orderRunnerOnWhatsApp(e) {
  if (e) e.stopPropagation();
  const message = 
`Hello DUNK & WOKE Shoe Store! 👋
I saw the *DUNK Velocity Runner 3D* (Concrete Ash & White) on your website! 🏃💨

👟 *Model*: DUNK Velocity Runner 3D
🏷️ *Theme*: Concrete Ash & Crisp Pure White
💰 *Price*: ₹2,899
📍 *Location*: Koduvally, Calicut

Please let me know if this pair is available in my size!`;

  const url = `https://wa.me/${STORE_CONFIG.whatsappChatNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// Interactive 3D Card Tilt & Particle Physics Engine
function init3DRunnerShowcase() {
  const card = document.getElementById('heroShowcaseCard');
  const canvas = document.getElementById('heroRunnerCanvas');
  if (!card) return;

  // 1. Mouse Tracking 3D Tilt Parallax
  let targetRotateX = 0;
  let targetRotateY = 0;
  let currentRotateX = 0;
  let currentRotateY = 0;
  let isHovered = false;

  card.addEventListener('mousemove', (e) => {
    isHovered = true;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    targetRotateY = ((x - centerX) / centerX) * 14;
    targetRotateX = -((y - centerY) / centerY) * 14;
  });

  card.addEventListener('mouseleave', () => {
    isHovered = false;
    targetRotateX = 0;
    targetRotateY = 0;
  });

  // Smooth tilt interpolation loop
  function updateTilt() {
    currentRotateX += (targetRotateX - currentRotateX) * 0.12;
    currentRotateY += (targetRotateY - currentRotateY) * 0.12;

    if (Math.abs(currentRotateX) > 0.01 || Math.abs(currentRotateY) > 0.01 || isHovered) {
      card.style.transform = `perspective(1000px) rotateX(${currentRotateX.toFixed(2)}deg) rotateY(${currentRotateY.toFixed(2)}deg) ${isHovered ? 'scale3d(1.02, 1.02, 1.02)' : 'scale3d(1, 1, 1)'}`;
    } else {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    }
    requestAnimationFrame(updateTilt);
  }
  requestAnimationFrame(updateTilt);

  // 2. Real-time Canvas 3D Speed Particles & Sole Sparks
  if (canvas) {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function resizeCanvas() {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle pool
    const particles = [];
    const maxParticles = 42;

    function resetParticle(p) {
      p.x = canvas.width * 0.2 + Math.random() * (canvas.width * 0.6);
      p.y = canvas.height * 0.62 + Math.random() * (canvas.height * 0.28);
      p.vx = (Math.random() - 0.5) * 2.8;
      p.vy = (Math.random() * 4.5 + 2);
      p.size = Math.random() * 2.5 + 1;
      p.alpha = Math.random() * 0.85 + 0.2;
      p.color = Math.random() > 0.35 ? '#ffffff' : (Math.random() > 0.5 ? '#b2b4b1' : '#f59e0b');
      p.life = Math.random() * 55 + 35;
      p.maxLife = p.life;
      return p;
    }

    for (let i = 0; i < maxParticles; i++) {
      particles.push(resetParticle({}));
    }

    function animateParticles() {
      if (heroShowcaseMode === 'runner' && canvas.width > 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const speedMultiplier = isTurboActive ? 2.6 : 1.0;

        particles.forEach(p => {
          p.x += p.vx * speedMultiplier;
          p.y += p.vy * speedMultiplier;
          p.life -= 1 * speedMultiplier;
          p.alpha = (p.life / p.maxLife) * 0.85;

          if (p.life <= 0 || p.y > canvas.height || p.x < 0 || p.x > canvas.width) {
            resetParticle(p);
          }

          ctx.save();
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 6;
          ctx.shadowColor = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * (isTurboActive ? 1.4 : 1), 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        });
      }
      requestAnimationFrame(animateParticles);
    }
    animateParticles();
  }
}

// ----------------------------------------------------
// WISK.AERO STYLE CINEMATIC SCROLL-DRIVEN SNEAKER ENGINE
// ----------------------------------------------------
let scrollyTargetProgress = 0;
let scrollyCurrentProgress = 0;

function initScrollyShoe() {
  const section = document.getElementById('scrollyShoeSection');
  const track = document.getElementById('scrollyTrack');
  const viewport = document.getElementById('scrollyShoeViewport');
  const shoeUpper = document.getElementById('scrollyShoeUpper');
  const shoeSole = document.getElementById('scrollyShoeSole');
  const airWatermark = document.getElementById('scrollyAirWatermark');

  const ch1 = document.getElementById('scrollyChapter1');
  const ch2 = document.getElementById('scrollyChapter2');
  const ch3 = document.getElementById('scrollyChapter3');
  const ch4 = document.getElementById('scrollyChapter4');

  const dot1 = document.getElementById('timelineDot1');
  const dot2 = document.getElementById('timelineDot2');
  const dot3 = document.getElementById('timelineDot3');
  const dot4 = document.getElementById('timelineDot4');

  const pin1 = document.getElementById('hotspotPin1');
  const pin2 = document.getElementById('hotspotPin2');
  const pin3 = document.getElementById('hotspotPin3');
  const pin4 = document.getElementById('hotspotPin4');
  const pin5 = document.getElementById('hotspotPin5');

  const percentageEl = document.getElementById('scrollyPercentage');

  if (!section || !track || !viewport) return;

  function onScroll() {
    const rect = track.getBoundingClientRect();
    const scrollableDistance = track.offsetHeight - window.innerHeight;
    if (scrollableDistance <= 0) return;

    const scrolled = -rect.top;
    const progress = Math.min(Math.max(scrolled / scrollableDistance, 0), 1);
    scrollyTargetProgress = progress;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // 60FPS Lerp Animation Loop
  function tick() {
    scrollyCurrentProgress += (scrollyTargetProgress - scrollyCurrentProgress) * 0.12;
    const p = scrollyCurrentProgress;

    // Update Percentage
    if (percentageEl) {
      percentageEl.textContent = `${Math.round(p * 100)}%`;
    }

    const isMobile = window.innerWidth < 640;
    const isTablet = window.innerWidth < 1024;
    const mobileFactor = isMobile ? 0.25 : (isTablet ? 0.6 : 1.0);

    // CHAPTER TRANSITIONS & 3D MATRIX TRANSFORMS (ANGLED AIR FLIGHT DYNAMICS):
    // 0.00 - 0.25: Chapter 1 (The Icon with Angled Stance)
    // 0.25 - 0.50: Chapter 2 (Craftsmanship & Leather Zoom)
    // 0.50 - 0.75: Chapter 3 (35° Angled Air Dynamics & Sole Incline)
    // 0.75 - 1.00: Chapter 4 (Ready to Wear & Landing)

    let rotateX = 0;
    let rotateY = 0;
    let rotateZ = 0;
    let scale = 1.0;
    let translateX = 0;
    let translateY = 0;

    if (p < 0.25) {
      // Chapter 1: Floating Profile - PERFECTLY STRAIGHT on initial view
      const t = p / 0.25;
      translateX = (0 * (1 - t) + 130 * t) * mobileFactor;
      translateY = (isMobile ? 30 : 20) * (1 - t) + (isMobile ? 80 : 30) * t;
      rotateX = 0 + 10 * t;
      rotateY = 0 - 14 * t;
      rotateZ = 0 - 12 * t;
      scale = isMobile ? (0.95 + 0.05 * t) : (1.08 + 0.08 * t);

      if (shoeUpper) shoeUpper.style.opacity = '1';
      if (shoeSole) shoeSole.style.opacity = '0';
    } else if (p < 0.50) {
      // Chapter 2: Zooming into Craftsmanship & Toe Box
      const t = (p - 0.25) / 0.25;
      translateX = (130 - 180 * t) * mobileFactor;
      translateY = (isMobile ? 80 : 30 * t);
      rotateX = 10 + 14 * t;
      rotateY = -14 + 28 * t;
      rotateZ = -12 + 18 * t;
      scale = (isMobile ? 0.95 : 1.1) + 0.28 * t;

      if (shoeUpper) shoeUpper.style.opacity = '1';
      if (shoeSole) shoeSole.style.opacity = '0';
    } else if (p < 0.75) {
      // Chapter 3: 35° Angled Air Sole Cushion Dynamics
      const t = (p - 0.50) / 0.25;
      translateX = (-50 - 70 * t) * mobileFactor;
      translateY = isMobile ? 60 : (30 - 25 * t);
      rotateX = 26 - 42 * t;
      rotateY = 18 - 50 * t;
      rotateZ = 12 - 28 * t;
      scale = (isMobile ? 1.05 : 1.38) - 0.2 * t;

      // Cross-fade to Sole angle
      if (shoeUpper) shoeUpper.style.opacity = `${Math.max(0, 1 - t * 2.5)}`;
      if (shoeSole) shoeSole.style.opacity = `${Math.min(1, t * 2.5)}`;
    } else {
      // Chapter 4: Landing Stance
      const t = (p - 0.75) / 0.25;
      translateX = (-120 * (1 - t)) * mobileFactor;
      translateY = isMobile ? -90 * t : (5 - 15 * t);
      rotateX = -14 * (1 - t);
      rotateY = -30 * (1 - t);
      rotateZ = -14 * (1 - t);
      scale = isMobile ? (0.85 - 0.05 * t) : (1.18 - 0.18 * t);

      if (shoeUpper) shoeUpper.style.opacity = '1';
      if (shoeSole) shoeSole.style.opacity = `${Math.max(0, 1 - t * 3)}`;
    }

    if (viewport) {
      viewport.style.transform = `perspective(1400px) translate3d(${translateX}px, ${translateY}px, 0) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) rotateZ(${rotateZ.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
    }

    // Dynamic 3D Angled Air Watermark response
    if (airWatermark) {
      const watermarkOpacity = p < 0.25 ? (0.2 + p * 0.5) : (p < 0.75 ? 0.38 : Math.max(0, 0.38 * (1 - (p - 0.75) / 0.25)));
      airWatermark.style.opacity = watermarkOpacity.toFixed(2);
      airWatermark.style.transform = `rotate(${(-14 + p * 12).toFixed(1)}deg) translate3d(0, ${(p * 25).toFixed(1)}px, 0)`;
    }

    // 2. Chapter Overlays Opacity & Visibility
    function setChapterState(el, active) {
      if (!el) return;
      if (active) {
        el.classList.remove('opacity-0', 'pointer-events-none');
        el.classList.add('opacity-100', 'pointer-events-auto');
      } else {
        el.classList.add('opacity-0', 'pointer-events-none');
        el.classList.remove('opacity-100', 'pointer-events-auto');
      }
    }

    setChapterState(ch1, p < 0.22);
    setChapterState(ch2, p >= 0.22 && p < 0.48);
    setChapterState(ch3, p >= 0.48 && p < 0.73);
    setChapterState(ch4, p >= 0.73);

    // 3. Hotspot Pins Visibility
    const showPinsCh2 = (p >= 0.26 && p <= 0.48);
    const showPinsCh3 = (p >= 0.52 && p <= 0.72);

    [pin1, pin2, pin3].forEach(pin => {
      if (pin) pin.style.opacity = showPinsCh2 ? '1' : '0';
    });
    [pin4, pin5].forEach(pin => {
      if (pin) pin.style.opacity = showPinsCh3 ? '1' : '0';
    });

    // 4. Timeline Dots Highlighting
    function setDotActive(dot, active) {
      if (!dot) return;
      const dotCircle = dot.querySelector('span:first-child');
      if (active) {
        dot.className = "flex items-center gap-2 font-bold text-white transition";
        if (dotCircle) dotCircle.className = "w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_white]";
      } else {
        dot.className = "flex items-center gap-2 font-semibold text-ash-500 hover:text-white transition";
        if (dotCircle) dotCircle.className = "w-2.5 h-2.5 rounded-full bg-ash-700";
      }
    }

    setDotActive(dot1, p < 0.25);
    setDotActive(dot2, p >= 0.25 && p < 0.50);
    setDotActive(dot3, p >= 0.50 && p < 0.75);
    setDotActive(dot4, p >= 0.75);

    // 5. Front Page Nike Concept HUD & Carousel Opacity on Scroll
    const heroHUD = document.getElementById('heroProductHUD');
    const heroCards = document.getElementById('heroDiagonalCards');
    const heroRadial = document.getElementById('heroRadialDial');

    const showFrontHeroUI = p < 0.20;
    if (heroHUD) {
      heroHUD.style.opacity = showFrontHeroUI ? `${Math.max(0, 1 - p * 5)}` : '0';
      heroHUD.style.pointerEvents = showFrontHeroUI ? 'auto' : 'none';
      if (window.innerWidth < 640) {
        heroHUD.style.transform = `translateY(${p * 40}px) scale(${Math.max(0.9, 1 - p * 0.3)})`;
      } else {
        heroHUD.style.transform = `translateY(calc(-50% + ${p * 60}px)) scale(${Math.max(0.8, 1 - p * 0.5)})`;
      }
    }
    if (heroCards) {
      heroCards.style.opacity = showFrontHeroUI ? `${Math.max(0, 1 - p * 5)}` : '0';
      heroCards.style.pointerEvents = showFrontHeroUI ? 'auto' : 'none';
    }
    if (heroRadial) {
      heroRadial.style.opacity = showFrontHeroUI ? `${Math.max(0, 1 - p * 5)}` : '0';
      heroRadial.style.pointerEvents = showFrontHeroUI ? 'auto' : 'none';
    }

    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  // Trigger initial 3D punch-in zoom burst on load
  setTimeout(() => {
    if (window.replayShoeLaunchAnimation) {
      window.replayShoeLaunchAnimation();
    }
  }, 350);
}

// ============================================================
// NIKE, SALOMON & PUMA INTERACTIVE HERO - FIRST SHOE STRAIGHT
// ============================================================
const HERO_SHOES_DATA = {
  'air-force-1': {
    name: 'Nike Air Force 1',
    subtitle: '\'07 Low • Full Angled White',
    price: '₹2,999',
    oldPrice: '₹4,499',
    img: 'assets/images/nike-af1-angled.jpg',
    themeColor: '#ffffff',
    accentText: 'text-white',
    bgWatermark: 'AIR FORCE 1',
    badge: 'NIKE AIR FORCE 1 • FULL ANGLED'
  },
  'salomon-xt6': {
    name: 'Salomon XT-6',
    subtitle: 'Advanced Trail • ACS Chassis',
    price: '₹3,499',
    oldPrice: '₹5,499',
    img: 'assets/images/salomon-xt6-hero.jpg',
    themeColor: '#cbd5e1',
    accentText: 'text-slate-300',
    bgWatermark: 'SALOMON',
    badge: 'SALOMON XT-6 ADVANCED'
  },
  'puma-palermo': {
    name: 'Puma Palermo',
    subtitle: 'Suede Classic • Gum Sole Edition',
    price: '₹2,799',
    oldPrice: '₹3,999',
    img: 'assets/images/puma-palermo-hero.jpg',
    themeColor: '#f59e0b',
    accentText: 'text-amber-400',
    bgWatermark: 'PUMA',
    badge: 'PUMA PALERMO SUEDE'
  }
};

let currentHeroShoe = 'salomon-xt6';
let currentHeroSize = '8';

window.replayShoeLaunchAnimation = function() {
  const shoeUpper = document.getElementById('scrollyShoeUpper');
  if (!shoeUpper) return;
  shoeUpper.classList.remove('shoe-burst-in');
  void shoeUpper.offsetWidth; // force DOM reflow
  shoeUpper.classList.add('shoe-burst-in');
};

window.switchHeroShoe = function(shoeKey) {
  if (!HERO_SHOES_DATA[shoeKey]) return;
  currentHeroShoe = shoeKey;
  const shoe = HERO_SHOES_DATA[shoeKey];

  // Update Text Elements
  const titleEl = document.getElementById('heroShoeTitle');
  const subEl = document.getElementById('heroShoeSubtitle');
  const priceEl = document.getElementById('heroShoePrice');
  const badgeEl = document.getElementById('heroTopBadgeName');
  const watermarkEl = document.getElementById('heroBgWatermark');
  const shoeImgEl = document.getElementById('heroActiveSneakerImg');

  if (titleEl) titleEl.textContent = shoe.name;
  if (subEl) subEl.textContent = shoe.subtitle;
  if (priceEl) priceEl.innerHTML = `${shoe.price} <span class="text-xs text-ash-400 line-through font-normal">${shoe.oldPrice}</span>`;
  if (badgeEl) badgeEl.textContent = shoe.badge;
  if (watermarkEl) watermarkEl.textContent = shoe.bgWatermark;

  // Update Sneaker Image & Trigger Explosive 3D Fly-In Animation
  if (shoeImgEl) {
    shoeImgEl.src = shoe.img;
    shoeImgEl.alt = `${shoe.name} - DUNK & WOKE Shoe Store`;
  }
  window.replayShoeLaunchAnimation();

  // Update WhatsApp Link
  updateHeroWhatsAppLink();

  // Update Radial Dial active states
  ['air-force-1', 'salomon-xt6', 'puma-palermo'].forEach(k => {
    const btn = document.getElementById(`radialBtn-${k}`);
    if (btn) {
      if (k === shoeKey) {
        btn.classList.add('active');
        btn.style.borderColor = shoe.themeColor;
      } else {
        btn.classList.remove('active');
        btn.style.borderColor = 'rgba(255,255,255,0.2)';
      }
    }
  });
};

window.selectHeroSize = function(btn, size) {
  currentHeroSize = size;
  const pills = document.querySelectorAll('.hero-size-btn');
  pills.forEach(p => {
    p.classList.remove('active', 'border-white', 'bg-white', 'text-black');
    p.classList.add('border-white/15', 'bg-white/5', 'text-white');
  });
  if (btn) {
    btn.classList.add('active', 'border-white', 'bg-white', 'text-black');
    btn.classList.remove('border-white/15', 'bg-white/5', 'text-white');
  }
  updateHeroWhatsAppLink();
};

function updateHeroWhatsAppLink() {
  const buyBtn = document.getElementById('heroWhatsAppBuyBtn');
  if (!buyBtn) return;
  const shoe = HERO_SHOES_DATA[currentHeroShoe] || HERO_SHOES_DATA['air-force-1'];
  const msg = encodeURIComponent(`Hello DUNK & WOKE Shoe Store! I want to order ${shoe.name} (${shoe.subtitle}, Size UK ${currentHeroSize}) for ${shoe.price} featured on your front page.`);
  buyBtn.href = `https://wa.me/917907073737?text=${msg}`;
}

function scrollToScrollyChapter(chNum) {
  const track = document.getElementById('scrollyTrack');
  if (!track) return;
  const scrollableDistance = track.offsetHeight - window.innerHeight;
  const targetMap = { 1: 0.04, 2: 0.33, 3: 0.58, 4: 0.88 };
  const targetFraction = targetMap[chNum] || 0;
  const targetTop = track.offsetTop + (scrollableDistance * targetFraction);

  window.scrollTo({
    top: targetTop,
    behavior: 'smooth'
  });
}


