/* ============================
   SEGERA - Main Script
   Sayur Segar, Langsung ke Rumah
   ============================ */

// ==========================================
// DATA PRODUK
// ==========================================
const products = [
    {
        id: 1,
        name: "Bayam",
        category: "sayuran",
        price: 5000,
        originalPrice: null,
        unit: "1 ikat",
        stock: 30,
        image: "assets/images/bayam.jpg",
        description: "Bayam segar pilihan untuk kebutuhan masakan sehari-hari. Kaya akan zat besi dan vitamin A."
    },
    {
        id: 2,
        name: "Kangkung",
        category: "sayuran",
        price: 4000,
        originalPrice: null,
        unit: "1 ikat",
        stock: 25,
        image: "assets/images/kangkung.jpg",
        description: "Kangkung segar yang renyah dan hijau. Cocok untuk tumis atau plecing kangkung."
    },
    {
        id: 3,
        name: "Wortel",
        category: "sayuran",
        price: 12000,
        originalPrice: 15000,
        unit: "1 kg",
        stock: 20,
        image: "assets/images/wortel.jpg",
        description: "Wortel segar berkualitas tinggi, manis dan renyah. Kaya vitamin A untuk kesehatan mata."
    },
    {
        id: 4,
        name: "Tomat",
        category: "sayuran",
        price: 10000,
        originalPrice: null,
        unit: "1 kg",
        stock: 35,
        image: "assets/images/tomat.jpg",
        description: "Tomat merah segar untuk masakan, sambal, atau jus. Sumber vitamin C yang baik."
    },
    {
        id: 5,
        name: "Kentang",
        category: "sayuran",
        price: 14000,
        originalPrice: null,
        unit: "1 kg",
        stock: 18,
        image: "assets/images/kentang.jpg",
        description: "Kentang pilihan untuk berbagai olahan masakan. Tekstur lembut dan rasa gurih alami."
    },
    {
        id: 6,
        name: "Cabai Merah",
        category: "bumbu",
        price: 30000,
        originalPrice: 35000,
        unit: "1 kg",
        stock: 15,
        image: "assets/images/cabai.jpg",
        description: "Cabai merah segar dengan tingkat kepedasan yang pas. Warna merah cerah dan berkualitas."
    },
    {
        id: 7,
        name: "Bawang Merah",
        category: "bumbu",
        price: 28000,
        originalPrice: null,
        unit: "1 kg",
        stock: 22,
        image: "assets/images/bawang-merah.png",
        description: "Bawang merah pilihan dengan aroma kuat dan rasa yang gurih untuk bumbu dapur."
    },
    {
        id: 8,
        name: "Bawang Putih",
        category: "bumbu",
        price: 25000,
        originalPrice: null,
        unit: "1 kg",
        stock: 20,
        image: "assets/images/bawang-putih.png",
        description: "Bawang putih segar berkualitas. Bumbu wajib dapur untuk menambah cita rasa masakan."
    },
    {
        id: 9,
        name: "Sawi Hijau",
        category: "sayuran",
        price: 6000,
        originalPrice: null,
        unit: "250 gram",
        stock: 28,
        image: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=400&q=80",
        description: "Sawi hijau segar yang renyah dan segar. Cocok untuk tumis, sup, atau bakso."
    },
    {
        id: 10,
        name: "Daun Kemangi",
        category: "bumbu",
        price: 5300,
        originalPrice: null,
        unit: "100 gram",
        stock: 15,
        image: "assets/images/kemangi.png",
        description: "Daun kemangi segar dengan aroma khas. Pelengkap lalapan dan sambal yang sempurna."
    },
    {
        id: 11,
        name: "Apel Merah",
        category: "buah",
        price: 32000,
        originalPrice: 38000,
        unit: "1 kg",
        stock: 12,
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&q=80",
        description: "Apel merah import segar, manis dan renyah. Kaya serat dan vitamin untuk kesehatan."
    },
    {
        id: 12,
        name: "Jeruk Manis",
        category: "buah",
        price: 18000,
        originalPrice: null,
        unit: "1 kg",
        stock: 20,
        image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=400&q=80",
        description: "Jeruk manis segar dengan rasa yang segar dan kaya vitamin C untuk daya tahan tubuh."
    },
    {
        id: 13,
        name: "Pisang Cavendish",
        category: "buah",
        price: 16000,
        originalPrice: null,
        unit: "1 sisir",
        stock: 25,
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&q=80",
        description: "Pisang Cavendish segar dan matang sempurna. Sumber energi dan kalium yang baik."
    },
    {
        id: 14,
        name: "Tahu Putih",
        category: "protein",
        price: 5000,
        originalPrice: null,
        unit: "1 papan",
        stock: 30,
        image: "assets/images/tahu.png",
        description: "Tahu putih segar buatan harian. Sumber protein nabati yang baik untuk keluarga."
    },
    {
        id: 15,
        name: "Tempe",
        category: "protein",
        price: 4000,
        originalPrice: null,
        unit: "1 bungkus",
        stock: 35,
        image: "assets/images/tempe.png",
        description: "Tempe segar dari kedelai pilihan. Makanan tradisional kaya protein dan probiotik."
    },
    {
        id: 16,
        name: "Telur Ayam",
        category: "protein",
        price: 28000,
        originalPrice: 32000,
        unit: "1 kg",
        stock: 40,
        image: "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?w=400&q=80",
        description: "Telur ayam negeri segar berkualitas tinggi. Sumber protein hewani untuk keluarga."
    },
    {
        id: 17,
        name: "Brokoli",
        category: "sayuran",
        price: 15000,
        originalPrice: null,
        unit: "500 gram",
        stock: 14,
        image: "assets/images/brokoli.png",
        description: "Brokoli segar hijau yang kaya nutrisi. Cocok untuk tumis, sup, atau dimakan rebus."
    },
    {
        id: 18,
        name: "Jahe",
        category: "bumbu",
        price: 20000,
        originalPrice: null,
        unit: "500 gram",
        stock: 18,
        image: "assets/images/jahe.png",
        description: "Jahe segar berkualitas. Bumbu dapur serbaguna untuk masakan dan minuman herbal."
    },
    {
        id: 19,
        name: "Bumbu Gado-gado",
        category: "siap-saji",
        price: 12000,
        originalPrice: null,
        unit: "200 gram",
        stock: 20,
        image: "assets/images/bumbu-gado-gado.png",
        description: "Bumbu gado-gado siap pakai. Tinggal campurkan dengan sayuran rebus untuk hidangan lezat."
    },
    {
        id: 20,
        name: "Bumbu Pecel",
        category: "siap-saji",
        price: 10000,
        originalPrice: null,
        unit: "200 gram",
        stock: 18,
        image: "assets/images/bumbu-pecel.png",
        description: "Bumbu pecel tradisional siap saji. Rasa kacang yang khas dan pedas gurih."
    }
];

// ==========================================
// KATEGORI
// ==========================================
const categories = [
    { id: "semua", name: "Semua", icon: "🛒" },
    { id: "sayuran", name: "Sayuran", icon: "🥬" },
    { id: "buah", name: "Buah", icon: "🍎" },
    { id: "protein", name: "Protein", icon: "🥚" },
    { id: "bumbu", name: "Bumbu Dapur", icon: "🌶️" },
    { id: "siap-saji", name: "Siap Saji", icon: "🍲" }
];

// ==========================================
// STATE
// ==========================================
let cart = [];
let orders = [];
let activeCategory = "semua";
let searchQuery = "";
let currentPage = "home";
let detailQty = 1;

// ==========================================
// INISIALISASI
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
    loadData();
    renderCategories();
    renderProducts();
    updateCartUI();
    renderOrders();
    setupSearch();
});

// ==========================================
// LOCAL STORAGE
// ==========================================
function loadData() {
    try {
        const savedCart = localStorage.getItem("segera_cart");
        if (savedCart) cart = JSON.parse(savedCart);

        const savedOrders = localStorage.getItem("segera_orders");
        if (savedOrders) orders = JSON.parse(savedOrders);
    } catch (e) {
        cart = [];
        orders = [];
    }
}

function saveData() {
    localStorage.setItem("segera_cart", JSON.stringify(cart));
    localStorage.setItem("segera_orders", JSON.stringify(orders));
}

// ==========================================
// NAVIGASI
// ==========================================
function navigateTo(page) {
    currentPage = page;

    // Hide all pages
    document.getElementById("page-home").style.display = "none";
    document.getElementById("page-orders").style.display = "none";

    // Show target page
    if (page === "home" || page === "products") {
        document.getElementById("page-home").style.display = "block";
        if (page === "products") {
            // Scroll to products section
            setTimeout(function () {
                const el = document.getElementById("products-section");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 100);
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    } else if (page === "orders") {
        document.getElementById("page-orders").style.display = "block";
        renderOrders();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Update active states
    updateNavActive(page);
    closeMobileMenu();
    closeAllModals();
}

function updateNavActive(page) {
    // Desktop nav
    document.querySelectorAll(".nav-link").forEach(function (link) {
        link.classList.remove("active");
        if (link.dataset.page === page) link.classList.add("active");
    });

    // Mobile menu
    document.querySelectorAll(".mobile-menu-link").forEach(function (link) {
        link.classList.remove("active");
        if (link.dataset.page === page) link.classList.add("active");
    });

    // Bottom nav
    document.querySelectorAll(".bottom-nav-item").forEach(function (item) {
        item.classList.remove("active");
        if (item.dataset.page === page) item.classList.add("active");
    });
}

function toggleMobileMenu() {
    var menu = document.getElementById("mobile-menu");
    var hamburger = document.getElementById("hamburger");
    menu.classList.toggle("open");
    hamburger.classList.toggle("active");
}

function closeMobileMenu() {
    var menu = document.getElementById("mobile-menu");
    var hamburger = document.getElementById("hamburger");
    menu.classList.remove("open");
    hamburger.classList.remove("active");
}

// ==========================================
// RENDER KATEGORI
// ==========================================
function renderCategories() {
    var container = document.getElementById("categories-container");
    var html = "";

    categories.forEach(function (cat) {
        var activeClass = cat.id === activeCategory ? "active" : "";
        html += '<div class="category-card ' + activeClass + '" onclick="filterByCategory(\'' + cat.id + '\')">';
        html += '<span class="category-icon">' + cat.icon + '</span>';
        html += '<span class="category-name">' + cat.name + '</span>';
        html += '</div>';
    });

    container.innerHTML = html;
}

// ==========================================
// RENDER PRODUK
// ==========================================
function renderProducts() {
    var grid = document.getElementById("products-grid");
    var emptyState = document.getElementById("empty-products");
    var filtered = getFilteredProducts();

    if (filtered.length === 0) {
        grid.style.display = "none";
        emptyState.style.display = "block";
        return;
    }

    grid.style.display = "grid";
    emptyState.style.display = "none";

    var html = "";
    filtered.forEach(function (product) {
        var discount = "";
        if (product.originalPrice) {
            var pct = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
            discount = '<span class="product-badge">-' + pct + '%</span>';
        }

        var oldPrice = "";
        if (product.originalPrice) {
            oldPrice = '<span class="product-price-old">' + formatPrice(product.originalPrice) + '</span>';
        }

        html += '<div class="product-card" id="product-card-' + product.id + '">';
        html += '  <div class="product-image-wrapper" onclick="showProductDetail(' + product.id + ')">';
        html += '    ' + discount;
        html += '    <img src="' + product.image + '" alt="' + product.name + '" loading="lazy" onerror="this.src=\'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80\'">';
        html += '    <button class="product-add-btn" onclick="event.stopPropagation(); addToCart(' + product.id + ')" title="Tambah ke keranjang">+</button>';
        html += '  </div>';
        html += '  <div class="product-info">';
        html += '    <div class="product-name" onclick="showProductDetail(' + product.id + ')">' + product.name + '</div>';
        html += '    <div class="product-unit">' + product.unit + '</div>';
        html += '    <div class="product-price-row">';
        html += '      <span class="product-price">' + formatPrice(product.price) + '</span>';
        html += '      ' + oldPrice;
        html += '    </div>';
        html += '  </div>';
        html += '</div>';
    });

    grid.innerHTML = html;
}

function getFilteredProducts() {
    var filtered = products;

    // Filter by category
    if (activeCategory !== "semua") {
        filtered = filtered.filter(function (p) {
            return p.category === activeCategory;
        });
    }

    // Filter by search
    if (searchQuery.trim() !== "") {
        var q = searchQuery.toLowerCase().trim();
        filtered = filtered.filter(function (p) {
            return p.name.toLowerCase().indexOf(q) !== -1 ||
                p.category.toLowerCase().indexOf(q) !== -1 ||
                p.description.toLowerCase().indexOf(q) !== -1;
        });
    }

    return filtered;
}

// ==========================================
// FILTER & SEARCH
// ==========================================
function filterByCategory(categoryId) {
    activeCategory = categoryId;
    renderCategories();
    renderProducts();

    // Update section title
    var title = document.getElementById("products-title");
    if (categoryId === "semua") {
        title.textContent = "Produk Segar";
    } else {
        var cat = categories.find(function (c) { return c.id === categoryId; });
        title.textContent = cat ? cat.name : "Produk";
    }
}

function setupSearch() {
    var input = document.getElementById("search-input");
    var clearBtn = document.getElementById("search-clear");
    var debounceTimer;

    input.addEventListener("input", function () {
        clearTimeout(debounceTimer);
        var value = input.value;
        clearBtn.style.display = value.length > 0 ? "flex" : "none";

        debounceTimer = setTimeout(function () {
            searchQuery = value;
            renderProducts();
        }, 250);
    });

    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            searchQuery = input.value;
            renderProducts();

            // Navigate to home if on orders page
            if (currentPage === "orders") {
                navigateTo("home");
            }

            // Scroll to products
            var el = document.getElementById("products-section");
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
}

function clearSearch() {
    var input = document.getElementById("search-input");
    var clearBtn = document.getElementById("search-clear");
    input.value = "";
    clearBtn.style.display = "none";
    searchQuery = "";
    renderProducts();
}

function resetFilters() {
    activeCategory = "semua";
    searchQuery = "";
    document.getElementById("search-input").value = "";
    document.getElementById("search-clear").style.display = "none";
    renderCategories();
    renderProducts();
}

// ==========================================
// DETAIL PRODUK
// ==========================================
function showProductDetail(productId) {
    var product = products.find(function (p) { return p.id === productId; });
    if (!product) return;

    detailQty = 1;
    var content = document.getElementById("product-detail-content");

    var oldPrice = "";
    if (product.originalPrice) {
        oldPrice = '<span class="product-detail-price-old">' + formatPrice(product.originalPrice) + '</span>';
    }

    var html = '';
    html += '<div class="product-detail-image">';
    html += '  <img src="' + product.image + '" alt="' + product.name + '" onerror="this.src=\'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80\'">';
    html += '</div>';
    html += '<div class="product-detail-body">';
    html += '  <span class="product-detail-category">' + getCategoryName(product.category) + '</span>';
    html += '  <h2 class="product-detail-name">' + product.name + '</h2>';
    html += '  <div class="product-detail-unit">' + product.unit + '</div>';
    html += '  <div class="product-detail-price-row">';
    html += '    <span class="product-detail-price">' + formatPrice(product.price) + '</span>';
    html += '    ' + oldPrice;
    html += '  </div>';
    html += '  <p class="product-detail-desc">' + product.description + '</p>';
    html += '  <div class="product-detail-stock">Stok: <span>' + product.stock + ' tersedia</span></div>';
    html += '  <div class="product-detail-actions">';
    html += '    <div class="quantity-control">';
    html += '      <button class="qty-btn" onclick="changeDetailQty(-1)">−</button>';
    html += '      <span class="qty-value" id="detail-qty-value">1</span>';
    html += '      <button class="qty-btn" onclick="changeDetailQty(1)">+</button>';
    html += '    </div>';
    html += '    <button class="btn-primary detail-add-btn" onclick="addToCartFromDetail(' + product.id + ')">Tambah ke Keranjang</button>';
    html += '  </div>';
    html += '</div>';

    content.innerHTML = html;
    openModal("modal-product-detail");
}

function changeDetailQty(delta) {
    detailQty = Math.max(1, detailQty + delta);
    var el = document.getElementById("detail-qty-value");
    if (el) el.textContent = detailQty;
}

function addToCartFromDetail(productId) {
    var product = products.find(function (p) { return p.id === productId; });
    if (!product) return;

    for (var i = 0; i < detailQty; i++) {
        addToCartSilent(productId);
    }

    showToast("✅", product.name + " (" + detailQty + ") ditambahkan ke keranjang");
    updateCartUI();
    closeModal("modal-product-detail");
}

// ==========================================
// KERANJANG
// ==========================================
function addToCart(productId) {
    var product = products.find(function (p) { return p.id === productId; });
    if (!product) return;

    addToCartSilent(productId);
    showToast("✅", product.name + " ditambahkan ke keranjang");
    updateCartUI();
}

function addToCartSilent(productId) {
    var existing = cart.find(function (item) { return item.productId === productId; });
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ productId: productId, qty: 1 });
    }
    saveData();
}

function updateCartQty(productId, delta) {
    var item = cart.find(function (i) { return i.productId === productId; });
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(productId);
        return;
    }
    saveData();
    updateCartUI();
    renderCartContent();
}

function removeFromCart(productId) {
    var product = products.find(function (p) { return p.id === productId; });
    cart = cart.filter(function (item) { return item.productId !== productId; });
    saveData();
    updateCartUI();
    renderCartContent();

    if (product) {
        showToast("🗑️", product.name + " dihapus dari keranjang");
    }
}

function calculateTotal() {
    var total = 0;
    cart.forEach(function (item) {
        var product = products.find(function (p) { return p.id === item.productId; });
        if (product) {
            total += product.price * item.qty;
        }
    });
    return total;
}

function getCartItemCount() {
    var count = 0;
    cart.forEach(function (item) {
        count += item.qty;
    });
    return count;
}

function updateCartUI() {
    var count = getCartItemCount();
    var total = calculateTotal();

    // Badge
    var badge = document.getElementById("cart-badge");
    badge.textContent = count;
    if (count > 0) {
        badge.classList.add("has-items");
        setTimeout(function () { badge.classList.remove("has-items"); }, 300);
    }

    // Sticky cart
    var stickyCart = document.getElementById("sticky-cart");
    if (count > 0) {
        stickyCart.style.display = "block";
        document.getElementById("sticky-cart-count").textContent = count + " Barang";
        document.getElementById("sticky-cart-total").textContent = formatPrice(total);
    } else {
        stickyCart.style.display = "none";
    }
}

function openCart() {
    renderCartContent();
    openModal("modal-cart");
}

function renderCartContent() {
    var content = document.getElementById("cart-content");
    var emptyEl = document.getElementById("cart-empty");
    var footerEl = document.getElementById("cart-footer");

    if (cart.length === 0) {
        content.style.display = "none";
        emptyEl.style.display = "block";
        footerEl.style.display = "none";
        return;
    }

    content.style.display = "block";
    emptyEl.style.display = "none";
    footerEl.style.display = "block";

    var html = "";
    cart.forEach(function (item) {
        var product = products.find(function (p) { return p.id === item.productId; });
        if (!product) return;

        var subtotal = product.price * item.qty;

        html += '<div class="cart-item">';
        html += '  <div class="cart-item-image">';
        html += '    <img src="' + product.image + '" alt="' + product.name + '" onerror="this.src=\'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80\'">';
        html += '  </div>';
        html += '  <div class="cart-item-info">';
        html += '    <div class="cart-item-name">' + product.name + '</div>';
        html += '    <div class="cart-item-price">' + formatPrice(product.price) + ' / ' + product.unit + '</div>';
        html += '  </div>';
        html += '  <div class="cart-item-controls">';
        html += '    <button class="cart-qty-btn" onclick="updateCartQty(' + product.id + ', -1)">−</button>';
        html += '    <span class="cart-qty-value">' + item.qty + '</span>';
        html += '    <button class="cart-qty-btn" onclick="updateCartQty(' + product.id + ', 1)">+</button>';
        html += '  </div>';
        html += '  <div class="cart-item-subtotal">' + formatPrice(subtotal) + '</div>';
        html += '  <button class="cart-item-remove" onclick="removeFromCart(' + product.id + ')" title="Hapus">🗑️</button>';
        html += '</div>';
    });

    content.innerHTML = html;

    // Update totals
    var total = calculateTotal();
    document.getElementById("cart-subtotal").textContent = formatPrice(total);
    document.getElementById("cart-total").textContent = formatPrice(total);
}

// ==========================================
// CHECKOUT
// ==========================================
function openCheckout() {
    if (cart.length === 0) {
        showToast("⚠️", "Keranjang masih kosong!");
        return;
    }

    closeModal("modal-cart");

    // Small delay for smoother transition
    setTimeout(function () {
        renderCheckoutItems();
        openModal("modal-checkout");
    }, 200);
}

function renderCheckoutItems() {
    var container = document.getElementById("checkout-items");
    var subtotal = calculateTotal();
    var deliveryType = document.querySelector('input[name="delivery"]:checked');
    var shipping = deliveryType && deliveryType.value === "delivery" ? 10000 : 0;

    var html = "";
    cart.forEach(function (item) {
        var product = products.find(function (p) { return p.id === item.productId; });
        if (!product) return;

        html += '<div class="checkout-item">';
        html += '  <div>';
        html += '    <span class="checkout-item-name">' + product.name + '</span>';
        html += '    <span class="checkout-item-qty"> x' + item.qty + '</span>';
        html += '  </div>';
        html += '  <span class="checkout-item-price">' + formatPrice(product.price * item.qty) + '</span>';
        html += '</div>';
    });

    container.innerHTML = html;

    document.getElementById("checkout-subtotal").textContent = formatPrice(subtotal);
    document.getElementById("checkout-shipping").textContent = formatPrice(shipping);
    document.getElementById("checkout-total").textContent = formatPrice(subtotal + shipping);
}

function toggleDelivery(radio) {
    // Update styling
    document.querySelectorAll(".delivery-option").forEach(function (opt) {
        opt.classList.remove("active");
    });
    radio.closest(".delivery-option").classList.add("active");

    var addressSection = document.getElementById("address-section");
    var shippingRow = document.getElementById("checkout-shipping-row");
    var addressInput = document.getElementById("checkout-address");

    if (radio.value === "pickup") {
        addressSection.style.display = "none";
        shippingRow.style.display = "none";
        addressInput.removeAttribute("required");
    } else {
        addressSection.style.display = "block";
        shippingRow.style.display = "flex";
        addressInput.setAttribute("required", "required");
    }

    renderCheckoutItems();
}

// ==========================================
// PEMESANAN / PO
// ==========================================
function createOrder() {
    var name = document.getElementById("checkout-name").value.trim();
    var phone = document.getElementById("checkout-phone").value.trim();
    var address = document.getElementById("checkout-address").value.trim();
    var notes = document.getElementById("checkout-notes").value.trim();
    var deliveryType = document.querySelector('input[name="delivery"]:checked').value;

    // Validasi
    if (!name) {
        showToast("⚠️", "Nama lengkap wajib diisi!");
        document.getElementById("checkout-name").focus();
        return;
    }

    if (!phone) {
        showToast("⚠️", "Nomor WhatsApp wajib diisi!");
        document.getElementById("checkout-phone").focus();
        return;
    }

    if (deliveryType === "delivery" && !address) {
        showToast("⚠️", "Alamat pengiriman wajib diisi!");
        document.getElementById("checkout-address").focus();
        return;
    }

    if (cart.length === 0) {
        showToast("⚠️", "Keranjang masih kosong!");
        return;
    }

    // Generate order number
    var orderNum = generateOrderNumber();
    var shipping = deliveryType === "delivery" ? 10000 : 0;
    var subtotal = calculateTotal();
    var total = subtotal + shipping;

    // Build order items
    var orderItems = cart.map(function (item) {
        var product = products.find(function (p) { return p.id === item.productId; });
        return {
            productId: item.productId,
            name: product ? product.name : "Produk",
            price: product ? product.price : 0,
            qty: item.qty,
            subtotal: product ? product.price * item.qty : 0
        };
    });

    // Create order
    var order = {
        orderNumber: orderNum,
        date: new Date().toISOString(),
        customer: {
            name: name,
            phone: phone,
            address: address,
            notes: notes
        },
        deliveryType: deliveryType,
        items: orderItems,
        subtotal: subtotal,
        shipping: shipping,
        total: total,
        status: "pending"
    };

    orders.unshift(order);

    // Clear cart
    cart = [];
    saveData();

    // Reset form
    document.getElementById("checkout-form").reset();
    // Reset delivery option visual
    document.querySelectorAll(".delivery-option").forEach(function (opt, i) {
        opt.classList.toggle("active", i === 0);
    });
    document.getElementById("address-section").style.display = "block";
    document.getElementById("checkout-shipping-row").style.display = "flex";

    // Close checkout, show success
    closeModal("modal-checkout");
    updateCartUI();

    setTimeout(function () {
        document.getElementById("success-order-number").textContent = orderNum;
        document.getElementById("success-total").textContent = formatPrice(total);
        openModal("modal-order-success");
    }, 200);
}

function generateOrderNumber() {
    var lastNum = 0;
    orders.forEach(function (order) {
        var match = order.orderNumber.match(/PO-(\d+)/);
        if (match) {
            var num = parseInt(match[1]);
            if (num > lastNum) lastNum = num;
        }
    });
    var nextNum = lastNum + 1;
    return "PO-" + String(nextNum).padStart(3, "0");
}

// ==========================================
// RIWAYAT PESANAN
// ==========================================
function renderOrders() {
    var container = document.getElementById("orders-list");
    var emptyEl = document.getElementById("empty-orders");

    if (orders.length === 0) {
        container.innerHTML = "";
        emptyEl.style.display = "block";
        return;
    }

    emptyEl.style.display = "none";
    var html = "";

    orders.forEach(function (order, index) {
        var statusClass = getStatusClass(order.status);
        var statusText = getStatusText(order.status);
        var dateStr = formatDate(order.date);
        var itemCount = 0;
        order.items.forEach(function (item) { itemCount += item.qty; });

        html += '<div class="order-card" onclick="showOrderDetail(' + index + ')">';
        html += '  <div class="order-card-header">';
        html += '    <div>';
        html += '      <div class="order-number">' + order.orderNumber + '</div>';
        html += '      <div class="order-date">' + dateStr + '</div>';
        html += '    </div>';
        html += '    <span class="status-badge ' + statusClass + '">' + statusText + '</span>';
        html += '  </div>';
        html += '  <div class="order-card-body">';
        html += '    <span class="order-items-count">' + itemCount + ' Produk</span>';
        html += '    <span class="order-total">' + formatPrice(order.total) + '</span>';
        html += '  </div>';
        html += '</div>';
    });

    container.innerHTML = html;
}

function showOrderDetail(index) {
    var order = orders[index];
    if (!order) return;

    var content = document.getElementById("order-detail-content");
    var statusClass = getStatusClass(order.status);
    var statusText = getStatusText(order.status);
    var dateStr = formatDate(order.date);
    var deliveryText = order.deliveryType === "delivery" ? "Diantar" : "Ambil di Toko";

    var html = '';

    // Info section
    html += '<div class="order-detail-section">';
    html += '  <h3>Informasi Pesanan</h3>';
    html += '  <div class="order-detail-row"><span>Nomor Pesanan</span><span style="font-weight:700; color:var(--navy);">' + order.orderNumber + '</span></div>';
    html += '  <div class="order-detail-row"><span>Tanggal</span><span>' + dateStr + '</span></div>';
    html += '  <div class="order-detail-row"><span>Status</span><span class="status-badge ' + statusClass + '">' + statusText + '</span></div>';
    html += '  <div class="order-detail-row"><span>Pengambilan</span><span>' + deliveryText + '</span></div>';
    html += '</div>';

    // Customer section
    html += '<div class="order-detail-section">';
    html += '  <h3>Data Pemesan</h3>';
    html += '  <div class="order-detail-row"><span>Nama</span><span>' + order.customer.name + '</span></div>';
    html += '  <div class="order-detail-row"><span>WhatsApp</span><span>' + order.customer.phone + '</span></div>';
    if (order.customer.address) {
        html += '  <div class="order-detail-row"><span>Alamat</span><span>' + order.customer.address + '</span></div>';
    }
    if (order.customer.notes) {
        html += '  <div class="order-detail-row"><span>Catatan</span><span>' + order.customer.notes + '</span></div>';
    }
    html += '</div>';

    // Items section
    html += '<div class="order-detail-section">';
    html += '  <h3>Daftar Produk</h3>';
    order.items.forEach(function (item) {
        html += '  <div class="order-detail-item">';
        html += '    <div>';
        html += '      <span class="order-detail-item-name">' + item.name + '</span>';
        html += '      <span class="order-detail-item-qty"> x' + item.qty + '</span>';
        html += '    </div>';
        html += '    <span class="order-detail-item-price">' + formatPrice(item.subtotal) + '</span>';
        html += '  </div>';
    });
    html += '</div>';

    // Totals section
    html += '<div class="order-detail-section">';
    html += '  <h3>Pembayaran</h3>';
    html += '  <div class="order-detail-row"><span>Subtotal</span><span>' + formatPrice(order.subtotal) + '</span></div>';
    if (order.shipping > 0) {
        html += '  <div class="order-detail-row"><span>Ongkos Kirim</span><span>' + formatPrice(order.shipping) + '</span></div>';
    }
    html += '  <div class="order-detail-row" style="padding-top:10px; margin-top:6px; border-top:1px solid var(--border);"><span style="font-weight:700; color:var(--text);">Total</span><span style="font-weight:700; color:var(--green); font-size:1.05rem;">' + formatPrice(order.total) + '</span></div>';
    html += '</div>';

    content.innerHTML = html;
    openModal("modal-order-detail");
}

// ==========================================
// MODAL
// ==========================================
function openModal(id) {
    var modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeModal(id) {
    var modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.remove("open");

    // Restore scrolling if no modals open
    var openModals = document.querySelectorAll(".modal-overlay.open");
    if (openModals.length === 0) {
        document.body.style.overflow = "";
    }
}

function closeAllModals() {
    document.querySelectorAll(".modal-overlay").forEach(function (modal) {
        modal.classList.remove("open");
    });
    document.body.style.overflow = "";
}

// Close modal on backdrop click
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("modal-overlay") && e.target.classList.contains("open")) {
        e.target.classList.remove("open");
        var openModals = document.querySelectorAll(".modal-overlay.open");
        if (openModals.length === 0) {
            document.body.style.overflow = "";
        }
    }
});

// Close modal on Escape key
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        var openModals = document.querySelectorAll(".modal-overlay.open");
        if (openModals.length > 0) {
            openModals[openModals.length - 1].classList.remove("open");
            var remainingModals = document.querySelectorAll(".modal-overlay.open");
            if (remainingModals.length === 0) {
                document.body.style.overflow = "";
            }
        }
    }
});

// ==========================================
// TOAST
// ==========================================
function showToast(icon, message) {
    var container = document.getElementById("toast-container");

    var toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = '<span class="toast-icon">' + icon + '</span><span>' + message + '</span>';
    container.appendChild(toast);

    setTimeout(function () {
        toast.classList.add("toast-out");
        setTimeout(function () {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 2500);
}

// ==========================================
// UTILITAS
// ==========================================
function formatPrice(price) {
    return "Rp" + price.toLocaleString("id-ID");
}

function getCategoryName(categoryId) {
    var cat = categories.find(function (c) { return c.id === categoryId; });
    return cat ? cat.name : categoryId;
}

function getStatusClass(status) {
    switch (status) {
        case "pending": return "status-pending";
        case "processing": return "status-processing";
        case "ready": return "status-ready";
        case "done": return "status-done";
        default: return "status-pending";
    }
}

function getStatusText(status) {
    switch (status) {
        case "pending": return "Menunggu Konfirmasi";
        case "processing": return "Diproses";
        case "ready": return "Siap Diambil";
        case "done": return "Selesai";
        default: return "Menunggu Konfirmasi";
    }
}

function formatDate(isoString) {
    var d = new Date(isoString);
    var months = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    return d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
}
