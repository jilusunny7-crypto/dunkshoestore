/**
 * DUNK Shoe Store Admin Inventory Management Engine
 * Real-time Stock, Price & Catalog Sync
 */

let products = [];
let currentFilter = 'all';
let searchQuery = '';
let viewMode = 'table'; // 'table' or 'grid'

const API_URL = '/api/products';
const STORAGE_KEY = 'dunk_products_catalog';

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  loadProducts();
});

// Load products from API or localStorage fallback
async function loadProducts() {
  try {
    const res = await fetch(API_URL);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        products = data;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
        renderInventory();
        return;
      }
    }
  } catch (err) {
    console.warn("API unavailable, falling back to localStorage:", err);
  }

  // Fallback to localStorage
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      products = JSON.parse(saved);
      renderInventory();
      return;
    } catch (e) {
      console.error("Local storage parse error:", e);
    }
  }

  // If both empty, fetch products.json directly
  try {
    const res = await fetch('data/products.json');
    if (res.ok) {
      products = await res.json();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
      renderInventory();
    }
  } catch (e) {
    console.error("Failed to load catalog:", e);
  }
}

// Save products to Server & localStorage
async function saveProducts(showNotification = true, customMessage = "Inventory updated successfully") {
  // Always update localStorage
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  } catch (e) {
    console.warn("localStorage write error:", e);
  }

  // Sync with Backend Server API
  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(products)
    });
    if (!res.ok) {
      console.warn("Backend API responded with non-200 status:", res.status);
    }
  } catch (err) {
    console.warn("Server API sync failed (offline or standalone mode):", err);
  }

  if (showNotification) {
    showToast(customMessage);
  }

  renderInventory();
}

// Render entire inventory UI
function renderInventory() {
  updateStats();
  renderProductsList();
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }
}

// Update KPI Stats
function updateStats() {
  const total = products.length;
  const inStock = products.filter(p => p.inStock !== false && (p.stockQuantity === undefined || p.stockQuantity > 0)).length;
  const soldOut = total - inStock;
  const inStore = products.filter(p => p.isAvailableStock === true).length;

  const statTotal = document.getElementById('statTotal');
  const statInStock = document.getElementById('statInStock');
  const statSoldOut = document.getElementById('statSoldOut');
  const statInStore = document.getElementById('statInStore');

  if (statTotal) statTotal.textContent = total;
  if (statInStock) statInStock.textContent = inStock;
  if (statSoldOut) statSoldOut.textContent = soldOut;
  if (statInStore) statInStore.textContent = inStore;
}

// Filter and Search logic
function getFilteredProducts() {
  return products.filter(p => {
    // Filter
    let matchesFilter = true;
    const isItemInStock = p.inStock !== false && (p.stockQuantity === undefined || p.stockQuantity > 0);
    
    if (currentFilter === 'in-stock') matchesFilter = isItemInStock;
    else if (currentFilter === 'sold-out') matchesFilter = !isItemInStock;
    else if (currentFilter === 'sneakers') matchesFilter = p.category === 'sneakers';
    else if (currentFilter === 'formals') matchesFilter = p.category === 'formals';
    else if (currentFilter === 'sandals') matchesFilter = p.category === 'sandals';
    else if (currentFilter === 'women') matchesFilter = p.category === 'women';

    // Search
    let matchesSearch = true;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      matchesSearch = (p.name && p.name.toLowerCase().includes(q)) ||
                      (p.category && p.category.toLowerCase().includes(q)) ||
                      (p.colorsCount && p.colorsCount.toLowerCase().includes(q)) ||
                      (p.id && p.id.toLowerCase().includes(q));
    }

    return matchesFilter && matchesSearch;
  });
}

// Render Products (Table or Grid)
function renderProductsList() {
  const container = document.getElementById('inventoryContainer');
  if (!container) return;

  const filtered = getFilteredProducts();

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="admin-card p-12 text-center">
        <div class="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4 text-ash-400">
          <i data-lucide="package-search" class="w-8 h-8"></i>
        </div>
        <h3 class="text-lg font-bold text-white mb-1">No shoes found</h3>
        <p class="text-sm text-ash-400 mb-4">Try clearing filters or search query.</p>
        <button onclick="setFilter('all'); document.getElementById('adminSearchInput').value=''; searchQuery='';" class="px-4 py-2 rounded-xl bg-white text-ash-950 font-bold text-xs hover:bg-ash-100 transition">
          Clear Filters
        </button>
      </div>
    `;
    return;
  }

  if (viewMode === 'table') {
    renderTableView(container, filtered);
  } else {
    renderGridView(container, filtered);
  }
}

// Render Table View
function renderTableView(container, items) {
  container.innerHTML = `
    <div class="admin-card overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-left text-sm">
          <thead class="bg-[#161716] text-ash-400 text-xs uppercase tracking-wider border-b border-white/10">
            <tr>
              <th class="py-3.5 px-4 font-bold">Shoe Item</th>
              <th class="py-3.5 px-3 font-bold">Category</th>
              <th class="py-3.5 px-3 font-bold">Price (₹)</th>
              <th class="py-3.5 px-3 font-bold">Sizes (UK)</th>
              <th class="py-3.5 px-3 font-bold text-center">Stock Qty</th>
              <th class="py-3.5 px-3 font-bold text-center">Status</th>
              <th class="py-3.5 px-4 font-bold text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/5">
            ${items.map(product => {
              const isInStock = product.inStock !== false && (product.stockQuantity === undefined || product.stockQuantity > 0);
              const qty = product.stockQuantity !== undefined ? product.stockQuantity : (isInStock ? 5 : 0);
              const sizes = product.sizes || [7, 8, 9, 10];

              return `
                <tr class="hover:bg-white/[0.02] transition group">
                  <!-- Shoe Item -->
                  <td class="py-3 px-4">
                    <div class="flex items-center gap-3">
                      <div class="w-12 h-12 rounded-xl bg-[#121312] border border-white/10 overflow-hidden shrink-0 flex items-center justify-center p-1">
                        <img src="${product.image}" alt="${product.name}" class="max-h-full max-w-full object-contain" onerror="this.src='favicon.ico'">
                      </div>
                      <div class="min-w-0">
                        <h4 class="font-bold text-white text-sm line-clamp-1 group-hover:text-ash-200 transition">${product.name}</h4>
                        <div class="flex items-center gap-2 mt-0.5">
                          <span class="text-[11px] text-ash-400 font-mono">#${product.id}</span>
                          ${product.badge ? `<span class="text-[10px] font-bold px-1.5 py-0.2 rounded bg-white/10 text-white border border-white/15">${product.badge}</span>` : ''}
                          ${product.isAvailableStock ? `<span class="text-[10px] font-black text-amber-300 flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>Store</span>` : ''}
                        </div>
                      </div>
                    </div>
                  </td>

                  <!-- Category -->
                  <td class="py-3 px-3">
                    <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 text-ash-300 border border-white/10 capitalize">
                      ${product.category || 'sneakers'}
                    </span>
                  </td>

                  <!-- Price -->
                  <td class="py-3 px-3">
                    <div class="flex flex-col">
                      <span class="font-extrabold text-white text-sm">₹${product.price.toLocaleString('en-IN')}</span>
                      ${product.originalPrice ? `<span class="text-[11px] text-ash-500 line-through">₹${product.originalPrice.toLocaleString('en-IN')}</span>` : ''}
                    </div>
                  </td>

                  <!-- Sizes Available -->
                  <td class="py-3 px-3">
                    <div class="flex flex-wrap gap-1 max-w-[180px]">
                      ${[4, 5, 6, 7, 8, 9, 10, 11].map(sz => {
                        const hasSize = sizes.includes(sz);
                        return `
                          <button 
                            type="button" 
                            onclick="toggleShoeSize('${product.id}', ${sz})" 
                            title="Click to toggle UK ${sz}"
                            class="w-6 h-6 rounded text-[10px] font-bold border transition flex items-center justify-center ${hasSize ? 'border-white/40 bg-white/15 text-white' : 'border-white/5 bg-transparent text-ash-600 hover:text-ash-400'}"
                          >
                            ${sz}
                          </button>
                        `;
                      }).join('')}
                    </div>
                  </td>

                  <!-- Stock Quantity Stepper -->
                  <td class="py-3 px-3 text-center">
                    <div class="inline-flex items-center gap-1 bg-[#121312] border border-white/10 rounded-lg p-0.5">
                      <button 
                        type="button"
                        onclick="adjustStockQuantity('${product.id}', -1)"
                        class="w-6 h-6 rounded flex items-center justify-center text-ash-400 hover:text-white hover:bg-white/10 transition"
                      >
                        -
                      </button>
                      <span class="w-8 text-center text-xs font-extrabold text-white">${qty}</span>
                      <button 
                        type="button"
                        onclick="adjustStockQuantity('${product.id}', 1)"
                        class="w-6 h-6 rounded flex items-center justify-center text-ash-400 hover:text-white hover:bg-white/10 transition"
                      >
                        +
                      </button>
                    </div>
                  </td>

                  <!-- In Stock Toggle -->
                  <td class="py-3 px-3 text-center">
                    <button 
                      type="button" 
                      onclick="toggleStockStatus('${product.id}')"
                      class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-extrabold transition shadow-xs border ${isInStock ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/25' : 'bg-rose-500/15 text-rose-400 border-rose-500/30 hover:bg-rose-500/25'}"
                      title="Click to toggle In Stock / Sold Out"
                    >
                      <span class="w-2 h-2 rounded-full ${isInStock ? 'bg-emerald-400 animate-pulse' : 'bg-rose-400'}"></span>
                      <span>${isInStock ? 'In Stock' : 'Sold Out'}</span>
                    </button>
                  </td>

                  <!-- Actions -->
                  <td class="py-3 px-4 text-right">
                    <div class="inline-flex items-center gap-1.5">
                      <button 
                        type="button" 
                        onclick="openEditShoeModal('${product.id}')"
                        class="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 text-ash-300 hover:text-white flex items-center justify-center transition border border-white/10"
                        title="Edit Shoe Details"
                      >
                        <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
                      </button>
                      <button 
                        type="button" 
                        onclick="deleteShoe('${product.id}')"
                        class="w-8 h-8 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 flex items-center justify-center transition border border-rose-500/20"
                        title="Delete Shoe"
                      >
                        <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// Render Grid Card View
function renderGridView(container, items) {
  container.innerHTML = `
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      ${items.map(product => {
        const isInStock = product.inStock !== false && (product.stockQuantity === undefined || product.stockQuantity > 0);
        const qty = product.stockQuantity !== undefined ? product.stockQuantity : (isInStock ? 5 : 0);

        return `
          <div class="admin-card p-4 flex flex-col justify-between group relative overflow-hidden">
            <!-- Header Badges -->
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs font-bold px-2 py-0.5 rounded-full bg-white/5 text-ash-300 border border-white/10 capitalize">
                ${product.category || 'sneakers'}
              </span>
              <button 
                type="button" 
                onclick="toggleStockStatus('${product.id}')"
                class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-extrabold border transition ${isInStock ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30' : 'bg-rose-500/15 text-rose-400 border-rose-500/30'}"
              >
                <span class="w-1.5 h-1.5 rounded-full ${isInStock ? 'bg-emerald-400 animate-pulse' : 'bg-rose-400'}"></span>
                ${isInStock ? 'In Stock' : 'Sold Out'}
              </button>
            </div>

            <!-- Image -->
            <div class="h-44 rounded-xl bg-[#121312] border border-white/10 p-2 flex items-center justify-center mb-3 overflow-hidden">
              <img src="${product.image}" alt="${product.name}" class="max-h-full max-w-full object-contain group-hover:scale-105 transition duration-300" onerror="this.src='favicon.ico'">
            </div>

            <!-- Title & Info -->
            <div class="mb-3">
              <h4 class="font-bold text-white text-sm line-clamp-1 mb-1">${product.name}</h4>
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-base font-extrabold text-white">₹${product.price.toLocaleString('en-IN')}</span>
                  ${product.originalPrice ? `<span class="text-xs text-ash-500 line-through ml-1.5">₹${product.originalPrice.toLocaleString('en-IN')}</span>` : ''}
                </div>
                <span class="text-xs text-ash-400 font-semibold">Qty: <strong class="text-white">${qty}</strong></span>
              </div>
            </div>

            <!-- Actions Bar -->
            <div class="pt-3 border-t border-white/10 flex items-center justify-between gap-2 mt-auto">
              <div class="flex items-center gap-1">
                <button 
                  type="button" 
                  onclick="adjustStockQuantity('${product.id}', -1)"
                  class="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/15 text-white flex items-center justify-center text-xs font-bold border border-white/10"
                >-</button>
                <button 
                  type="button" 
                  onclick="adjustStockQuantity('${product.id}', 1)"
                  class="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/15 text-white flex items-center justify-center text-xs font-bold border border-white/10"
                >+</button>
              </div>

              <div class="flex items-center gap-1.5">
                <button 
                  type="button" 
                  onclick="openEditShoeModal('${product.id}')"
                  class="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/15 flex items-center gap-1"
                >
                  <i data-lucide="edit-3" class="w-3 h-3"></i>
                  <span>Edit</span>
                </button>
                <button 
                  type="button" 
                  onclick="deleteShoe('${product.id}')"
                  class="w-7 h-7 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 flex items-center justify-center border border-rose-500/20"
                >
                  <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                </button>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// 1-Click Stock Status Toggle (In Stock <-> Sold Out)
function toggleStockStatus(productId) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  const currentStatus = prod.inStock !== false && (prod.stockQuantity === undefined || prod.stockQuantity > 0);
  prod.inStock = !currentStatus;

  if (prod.inStock) {
    if (prod.stockQuantity === 0) prod.stockQuantity = 5;
  } else {
    prod.stockQuantity = 0;
  }

  saveProducts(true, `${prod.name} marked ${prod.inStock ? 'IN STOCK' : 'SOLD OUT'}`);
}

// Adjust Stock Quantity (+ / -)
function adjustStockQuantity(productId, delta) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  let currentQty = prod.stockQuantity !== undefined ? prod.stockQuantity : 5;
  let newQty = Math.max(0, currentQty + delta);
  prod.stockQuantity = newQty;
  prod.inStock = newQty > 0;

  saveProducts(false);
  renderInventory();
}

// Toggle individual shoe size on / off
function toggleShoeSize(productId, sizeNum) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  if (!prod.sizes) prod.sizes = [7, 8, 9, 10];

  const idx = prod.sizes.indexOf(sizeNum);
  if (idx > -1) {
    if (prod.sizes.length > 1) {
      prod.sizes.splice(idx, 1);
    } else {
      showToast("A shoe must have at least one size available.");
      return;
    }
  } else {
    prod.sizes.push(sizeNum);
    prod.sizes.sort((a, b) => a - b);
  }

  saveProducts(false);
  renderInventory();
}

// Search & Filter handlers
function handleSearch(val) {
  searchQuery = val;
  renderProductsList();
}

function setFilter(filter) {
  currentFilter = filter;
  document.querySelectorAll('.admin-filter-pill').forEach(btn => {
    if (btn.dataset.filter === filter) {
      btn.className = "admin-filter-pill pill-active px-3.5 py-2 rounded-xl text-xs font-bold border border-white/10 transition whitespace-nowrap bg-white text-ash-950";
    } else {
      btn.className = "admin-filter-pill px-3.5 py-2 rounded-xl text-xs font-bold border border-white/10 transition whitespace-nowrap bg-white/5 text-ash-300 hover:text-white";
    }
  });
  renderProductsList();
}

function setViewMode(mode) {
  viewMode = mode;
  const btnTable = document.getElementById('btnViewTable');
  const btnGrid = document.getElementById('btnViewGrid');
  if (btnTable && btnGrid) {
    if (mode === 'table') {
      btnTable.className = "p-1.5 rounded-lg bg-white/15 text-white transition";
      btnGrid.className = "p-1.5 rounded-lg text-ash-400 hover:text-white transition";
    } else {
      btnGrid.className = "p-1.5 rounded-lg bg-white/15 text-white transition";
      btnTable.className = "p-1.5 rounded-lg text-ash-400 hover:text-white transition";
    }
  }
  renderProductsList();
}

// Add & Edit Modal Handlers
function openAddShoeModal() {
  document.getElementById('modalTitle').textContent = "Add New Sneaker";
  document.getElementById('shoeFormId').value = "";
  document.getElementById('formName').value = "";
  document.getElementById('formCategory').value = "sneakers";
  document.getElementById('formPrice').value = "";
  document.getElementById('formOriginalPrice').value = "";
  document.getElementById('formStockQuantity').value = "5";
  document.getElementById('formInStock').checked = true;
  document.getElementById('formIsAvailableStock').checked = false;
  document.getElementById('formImage').value = "";
  document.getElementById('formBadge').value = "In Stock Now";
  document.getElementById('formColorsCount').value = "";
  document.getElementById('formDescription').value = "";

  // Check default sizes: 7, 8, 9, 10
  document.querySelectorAll('.size-opt').forEach(chk => {
    const sz = parseInt(chk.value, 10);
    chk.checked = [7, 8, 9, 10].includes(sz);
  });

  previewModalImage("");
  document.getElementById('shoeModal').classList.remove('hidden');
}

function openEditShoeModal(productId) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  document.getElementById('modalTitle').textContent = "Edit Shoe: " + prod.name;
  document.getElementById('shoeFormId').value = prod.id;
  document.getElementById('formName').value = prod.name || "";
  document.getElementById('formCategory').value = prod.category || "sneakers";
  document.getElementById('formPrice').value = prod.price || "";
  document.getElementById('formOriginalPrice').value = prod.originalPrice || "";
  document.getElementById('formStockQuantity').value = prod.stockQuantity !== undefined ? prod.stockQuantity : 5;
  document.getElementById('formInStock').checked = prod.inStock !== false;
  document.getElementById('formIsAvailableStock').checked = prod.isAvailableStock === true;
  document.getElementById('formImage').value = prod.image || "";
  document.getElementById('formBadge').value = prod.badge || "";
  document.getElementById('formColorsCount').value = prod.colorsCount || "";
  document.getElementById('formDescription').value = prod.description || "";

  const sizes = prod.sizes || [7, 8, 9, 10];
  document.querySelectorAll('.size-opt').forEach(chk => {
    const sz = parseInt(chk.value, 10);
    chk.checked = sizes.includes(sz);
  });

  previewModalImage(prod.image || "");
  document.getElementById('shoeModal').classList.remove('hidden');
}

function closeShoeModal() {
  document.getElementById('shoeModal').classList.add('hidden');
}

function previewModalImage(url) {
  const wrapper = document.getElementById('imgPreviewWrapper');
  if (!wrapper) return;
  if (url && url.trim().length > 3) {
    wrapper.innerHTML = `<img src="${url}" class="w-full h-full object-cover" onerror="this.parentElement.innerHTML='<span class=text-xs>Invalid</span>'">`;
  } else {
    wrapper.innerHTML = `<i data-lucide="image" class="w-4 h-4 text-ash-500"></i>`;
    if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
  }
}

// Form Submit Handler
function handleSaveShoe(event) {
  event.preventDefault();

  const id = document.getElementById('shoeFormId').value;
  const name = document.getElementById('formName').value.trim();
  const category = document.getElementById('formCategory').value;
  const price = parseInt(document.getElementById('formPrice').value, 10);
  const originalPrice = parseInt(document.getElementById('formOriginalPrice').value, 10);
  const stockQuantity = parseInt(document.getElementById('formStockQuantity').value, 10) || 0;
  const inStock = document.getElementById('formInStock').checked && stockQuantity > 0;
  const isAvailableStock = document.getElementById('formIsAvailableStock').checked;
  const image = document.getElementById('formImage').value.trim();
  const badge = document.getElementById('formBadge').value.trim();
  const colorsCount = document.getElementById('formColorsCount').value.trim() || "1 Colorway";
  const description = document.getElementById('formDescription').value.trim();

  // Selected sizes
  const selectedSizes = [];
  document.querySelectorAll('.size-opt:checked').forEach(chk => {
    selectedSizes.push(parseInt(chk.value, 10));
  });
  selectedSizes.sort((a, b) => a - b);

  if (id) {
    // Edit existing
    const idx = products.findIndex(p => p.id === id);
    if (idx > -1) {
      products[idx] = {
        ...products[idx],
        name,
        category,
        categoryLabel: category.charAt(0).toUpperCase() + category.slice(1),
        price,
        originalPrice,
        stockQuantity,
        inStock,
        isAvailableStock,
        image,
        badge,
        colorsCount,
        description,
        sizes: selectedSizes.length > 0 ? selectedSizes : [7, 8, 9, 10]
      };
      saveProducts(true, `Updated "${name}"`);
    }
  } else {
    // Add new
    const newId = "shoe-" + Date.now();
    const newProduct = {
      id: newId,
      name,
      category,
      categoryLabel: category.charAt(0).toUpperCase() + category.slice(1),
      price,
      originalPrice,
      stockQuantity,
      inStock,
      isAvailableStock,
      image,
      badge: badge || "New Drop",
      colorsCount,
      colors: ["#09090b", "#ffffff"],
      rating: 5.0,
      reviews: 1,
      description: description || "Fresh arrival at DUNK Shoe Store, Koduvally, Calicut.",
      sizes: selectedSizes.length > 0 ? selectedSizes : [7, 8, 9, 10]
    };
    products.unshift(newProduct);
    saveProducts(true, `Added "${name}" to catalog!`);
  }

  closeShoeModal();
}

// Delete Shoe
function deleteShoe(productId) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  if (confirm(`Are you sure you want to remove "${prod.name}" from the store catalog?`)) {
    products = products.filter(p => p.id !== productId);
    saveProducts(true, `Removed "${prod.name}"`);
  }
}

// Export Catalog JSON
function exportBackupJson() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(products, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `dunk-shoes-catalog-backup-${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast("Catalog backup downloaded!");
}

// Toast Notification
let toastTimeout = null;
function showToast(message) {
  const toast = document.getElementById('toast');
  const msgEl = document.getElementById('toastMsg');
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.remove('translate-y-20', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0');
    toast.classList.remove('translate-y-0', 'opacity-100');
  }, 2800);
}
