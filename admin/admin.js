// Default Seed Data
const DEFAULT_SETTINGS = {
    storeName: "franklinstore",
    currency: "₦",
    logo: "assets/logo.png",
    heroBg: "assets/hero.jpg",
    heroTitle: "Franklin Store",
    heroSubtitle: "It has finally started...",
    heroTag: "Huge Sales up to 50% Off",
    heroWarranty: "Plus ONE YEAR WARRANTY",
    promoBanner: "assets/promo.jpg",
    supportWhatsapp: "+2348000000000",
    supportPhoneAlt: "+2348099999999",
    supportEmail: "support@franklinstore.com",
    facebookUrl: "https://facebook.com/franklinstore",
    instagramUrl: "https://instagram.com/franklinstore",
    adminPasscode: "franklin2026",
    description: "Welcome to Franklin Store, your one-stop destination for high-quality products that cater to your everyday needs. We pride ourselves on offering exceptional value, unbeatable deals, and a seamless shopping experience. From fresh groceries to trendy items, we are committed to delivering the best to your doorstep."
};

const DEFAULT_PRODUCTS = [
    {
        id: "prod-1",
        name: "Mandolin Slicer",
        category: "Kitchen Items",
        rating: 5,
        price: 25000,
        originalPrice: 30000,
        image: "assets/product_slicer.jpg",
        description: "Perfect for potatoes, cucumbers, cabbage, carrots, zucchini. Includes multiple safety attachments and razor-sharp slicing options.",
        status: "in_stock"
    },
    {
        id: "prod-2",
        name: "Manual Fruit Juicer",
        category: "Household Products",
        rating: 4,
        price: 20000,
        originalPrice: 25000,
        image: "assets/product_juicer.jpg",
        description: "Extract fresh juice in seconds. Crafted from heavy-duty aluminum alloy, it is highly durable, dishwasher safe, and easy to handle.",
        status: "in_stock"
    },
    {
        id: "prod-3",
        name: "Multifunction Vegetable Cutter",
        category: "Kitchen Items",
        rating: 4,
        price: 22000,
        originalPrice: 27000,
        image: "assets/product_cutter.jpg",
        description: "Innovative multi-blade rotary cutter designed to chop, grate, and julienne veggies effortlessly. Safeguards hands from sharp metal grids.",
        status: "in_stock"
    },
    {
        id: "prod-4",
        name: "Popcorn maker",
        category: "Electronic Gadgets",
        rating: 5,
        price: 30000,
        originalPrice: 45000,
        image: "assets/product_popcorn.jpg",
        description: "Hot-air convection popcorn maker that pops kernels in minutes without using oil. Perfect for quick and healthy snacks during movie nights.",
        status: "in_stock"
    },
    {
        id: "prod-5",
        name: "Stainless Steel Knife Set",
        category: "Kitchen Items",
        rating: 5,
        price: 45000,
        originalPrice: 60000,
        image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?q=80&w=600&auto=format&fit=crop",
        description: "High-carbon stainless steel kitchen chef knife set with a block stand. Precision ground blades for long-lasting sharpness and clean slicing.",
        status: "in_stock"
    },
    {
        id: "prod-6",
        name: "Electric Spice Grinder",
        category: "Kitchen Items",
        rating: 4,
        price: 15000,
        originalPrice: 18000,
        image: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=600&auto=format&fit=crop",
        description: "Compact battery-powered automatic spice and coffee grinder. One-touch rapid grinding mechanism with durable steel blades.",
        status: "in_stock"
    },
    {
        id: "prod-7",
        name: "Non-Stick Cookware Set",
        category: "Kitchen Items",
        rating: 5,
        price: 85000,
        originalPrice: 110000,
        image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=600&auto=format&fit=crop",
        description: "Multi-layered scratch-resistant nonstick frying pans and saucepans. Even heat distribution technology, dishwasher and oven safe.",
        status: "in_stock"
    },
    {
        id: "prod-8",
        name: "Portable Lint Remover",
        category: "Household Products",
        rating: 4,
        price: 8000,
        originalPrice: 12000,
        image: "https://images.unsplash.com/photo-1622445262465-2481c4574875?q=80&w=600&auto=format&fit=crop",
        description: "Electric lint shaver and fabric fuzz remover. Dual-action shaving head restores clothes, sweaters, and upholstery to pristine condition.",
        status: "in_stock"
    },
    {
        id: "prod-9",
        name: "Ultrasonic Air Humidifier",
        category: "Household Products",
        rating: 5,
        price: 18000,
        originalPrice: 24000,
        image: "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?q=80&w=600&auto=format&fit=crop",
        description: "Cool mist humidifier with an auto-off safety function and color-changing LED nightlight. Quiet operation suitable for bedrooms.",
        status: "in_stock"
    },
    {
        id: "prod-10",
        name: "Rechargeable LED Desk Lamp",
        category: "Household Products",
        rating: 4,
        price: 12000,
        originalPrice: 15000,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=600&auto=format&fit=crop",
        description: "Flexible gooseneck reading table lamp with touch controls and adjustable brightness levels. Energy efficient eye-care LED beads.",
        status: "in_stock"
    },
    {
        id: "prod-11",
        name: "Premium Microfiber Mop",
        category: "Household Products",
        rating: 4,
        price: 14000,
        originalPrice: 20000,
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop",
        description: "Flat squeeze floor mop with dry-use dusting and wet-use scrubbing microfiber pads. 360 swivel head for cleaning tight wall angles.",
        status: "in_stock"
    },
    {
        id: "prod-12",
        name: "Wireless ANC Earbuds",
        category: "Electronic Gadgets",
        rating: 5,
        price: 35000,
        originalPrice: 50000,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=600&auto=format&fit=crop",
        description: "True wireless earbuds featuring active noise cancellation, deep bass response, and 30-hour battery life with charging case.",
        status: "in_stock"
    },
    {
        id: "prod-13",
        name: "Smart Fitness Watch",
        category: "Electronic Gadgets",
        rating: 4,
        price: 40000,
        originalPrice: 55000,
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=600&auto=format&fit=crop",
        description: "Waterproof fitness tracker watch monitoring heart rate, oxygen, daily steps, and workout activities. Seamless syncs with iOS & Android.",
        status: "in_stock"
    },
    {
        id: "prod-14",
        name: "Portable Bluetooth Speaker",
        category: "Electronic Gadgets",
        rating: 5,
        price: 28000,
        originalPrice: 38000,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=600&auto=format&fit=crop",
        description: "Rugged waterproof outdoor speaker with dual drivers for crystal clear treble and deep punchy bass. 12-hour continuous music playback.",
        status: "in_stock"
    },
    {
        id: "prod-15",
        name: "Mini LED Projector",
        category: "Electronic Gadgets",
        rating: 4,
        price: 95000,
        originalPrice: 130000,
        image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=600&auto=format&fit=crop",
        description: "1080P supported home theater movie projector. Connects via HDMI or USB, built-in dual speakers, adjustable zoom focal lens.",
        status: "in_stock"
    }
];

// App State Management
let products = [];
let settings = {};

// Initialize state
function init() {
    // Check if products exist in localStorage
    const savedProducts = localStorage.getItem("franklin_products");
    if (!savedProducts) {
        localStorage.setItem("franklin_products", JSON.stringify(DEFAULT_PRODUCTS));
        products = [...DEFAULT_PRODUCTS];
    } else {
        products = JSON.parse(savedProducts);
    }

    // Check if settings exist in localStorage
    const savedSettings = localStorage.getItem("franklin_settings");
    if (!savedSettings) {
        localStorage.setItem("franklin_settings", JSON.stringify(DEFAULT_SETTINGS));
        settings = { ...DEFAULT_SETTINGS };
    } else {
        settings = JSON.parse(savedSettings);
    }
}

// Save state to localStorage
function saveState() {
    localStorage.setItem("franklin_products", JSON.stringify(products));
    localStorage.setItem("franklin_settings", JSON.stringify(settings));
}

// Toast System
function showToast(message, type = 'success') {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    
    let iconSvg = '';
    if (type === 'success') {
        iconSvg = `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;
    } else {
        iconSvg = `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>`;
    }
    
    toast.innerHTML = `
        <div class="toast-icon">${iconSvg}</div>
        <div class="toast-message">${message}</div>
    `;
    
    container.appendChild(toast);
    
    // Auto remove after 3.5s
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease forwards';
        toast.addEventListener('animationend', () => {
            toast.remove();
        });
    }, 3500);
}

// Rendering Logic
function renderDashboard() {
    document.getElementById("stat-total-products").textContent = products.length;
    
    // Count distinct categories
    const categories = new Set(products.map(p => p.category));
    document.getElementById("stat-total-categories").textContent = categories.size;
    
    // Currency symbol
    document.getElementById("stat-store-currency").textContent = `${settings.currency || '₦'} (${settings.storeName || 'Prime Store'})`;
    
    // Overview Details
    document.getElementById("overview-store-name").textContent = settings.storeName;
    document.getElementById("overview-support-phone").textContent = settings.supportWhatsapp;
    document.getElementById("overview-hero-heading").textContent = settings.heroTitle;
}

function renderProductsTable(filterQuery = "") {
    const tbody = document.getElementById("products-table-body");
    tbody.innerHTML = "";

    const query = filterQuery.toLowerCase().trim();
    const filteredProducts = products.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.category.toLowerCase().includes(query)
    );

    if (filteredProducts.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; color: var(--text-muted); padding: 3rem;">
                    No products found. Add a product or modify your search query.
                </td>
            </tr>
        `;
        return;
    }

    filteredProducts.forEach(product => {
        const tr = document.createElement("tr");
        
        // Sale calculation / original price UI
        const isSale = product.originalPrice && Number(product.originalPrice) > Number(product.price);
        const saleBadge = isSale ? `<span class="badge badge-sale">Sale!</span>` : `<span class="badge badge-regular">Regular</span>`;
        const originalPriceDisplay = isSale ? `<span style="text-decoration: line-through; color: var(--text-muted); font-size: 0.75rem; display: block;">${settings.currency}${Number(product.originalPrice).toLocaleString()}</span>` : "";
        
        // Star symbols
        const stars = "★".repeat(Number(product.rating)) + "☆".repeat(5 - Number(product.rating));

        tr.innerHTML = `
            <td>
                <div class="table-product-cell">
                    <img src="${product.image}" alt="${product.name}" class="table-product-image" onerror="this.src='https://placehold.co/100x100/1e293b/ffffff?text=Image'">
                    <div class="table-product-info">
                        <h4>${product.name}</h4>
                        <p style="max-width: 250px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${product.description}</p>
                    </div>
                </div>
            </td>
            <td><span style="color: var(--text-secondary);">${product.category}</span></td>
            <td>
                <strong>${settings.currency}${Number(product.price).toLocaleString()}</strong>
                ${originalPriceDisplay}
            </td>
            <td>${saleBadge}</td>
            <td style="color: #fbbf24; font-size: 1.1rem; letter-spacing: 2px;">${stars}</td>
            <td>
                <div class="table-actions">
                    <button class="action-btn edit" data-id="${product.id}" title="Edit Product">
                        <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                        </svg>
                    </button>
                    <button class="action-btn delete" data-id="${product.id}" title="Delete Product">
                        <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                        </svg>
                    </button>
                </div>
            </td>
        `;

        // Event Listeners for actions
        tr.querySelector(".action-btn.edit").addEventListener("click", () => editProduct(product.id));
        tr.querySelector(".action-btn.delete").addEventListener("click", () => deleteProduct(product.id));

        tbody.appendChild(tr);
    });
}

function loadSettingsForm() {
    document.getElementById("settings-store-name").value = settings.storeName || "";
    document.getElementById("settings-currency").value = settings.currency || "";
    document.getElementById("settings-store-logo").value = settings.logo || "";
    document.getElementById("settings-store-description").value = settings.description || "";
    document.getElementById("settings-hero-bg").value = settings.heroBg || "";
    document.getElementById("settings-hero-title").value = settings.heroTitle || "";
    document.getElementById("settings-hero-subtitle").value = settings.heroSubtitle || "";
    document.getElementById("settings-hero-tag").value = settings.heroTag || "";
    document.getElementById("settings-hero-warranty").value = settings.heroWarranty || "";
    document.getElementById("settings-promo-banner").value = settings.promoBanner || "";
    document.getElementById("settings-support-whatsapp").value = settings.supportWhatsapp || "";
    document.getElementById("settings-support-phone-alt").value = settings.supportPhoneAlt || "";
    document.getElementById("settings-support-email").value = settings.supportEmail || "";
    document.getElementById("settings-link-facebook").value = settings.facebookUrl || "";
    document.getElementById("settings-link-instagram").value = settings.instagramUrl || "";
    document.getElementById("settings-admin-passcode").value = settings.adminPasscode || "franklin2026";
}

// Tab Switching
document.querySelectorAll(".nav-item").forEach(nav => {
    nav.addEventListener("click", (e) => {
        // Toggle Nav Classes
        document.querySelectorAll(".nav-item").forEach(el => el.classList.remove("active"));
        const selectedNav = e.currentTarget;
        selectedNav.classList.add("active");

        // Toggle Views
        const targetTab = selectedNav.getAttribute("data-tab");
        document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
        document.getElementById(`tab-${targetTab}`).classList.add("active");

        // Dynamic Header titles
        const titles = {
            dashboard: "Dashboard Overview",
            products: "Products Catalog",
            settings: "Store Configuration"
        };
        const subtitles = {
            dashboard: "Track and configure your e-commerce shop state.",
            products: "Add, modify, and delete product catalogs items dynamically.",
            settings: "Configure branding banners, social parameters, and checkout details."
        };
        document.getElementById("page-title").textContent = titles[targetTab];
        document.getElementById("page-subtitle").textContent = subtitles[targetTab];
        
        // Load settings values if setting tab opened
        if (targetTab === 'settings') {
            loadSettingsForm();
        }
        
        // Refresh tables/data
        if (targetTab === 'dashboard') {
            renderDashboard();
        }
    });
});

// Search input handler
document.getElementById("product-search").addEventListener("input", (e) => {
    renderProductsTable(e.target.value);
});

// Modals Handling
const modal = document.getElementById("product-modal");
const productForm = document.getElementById("product-form");

function openModal(isEdit = false) {
    document.getElementById("modal-title").textContent = isEdit ? "Modify Product Details" : "Add New Product";
    document.getElementById("save-product-btn").textContent = isEdit ? "Save Changes" : "Create Product";
    modal.classList.add("active");
}

function closeModal() {
    modal.classList.remove("active");
    productForm.reset();
    document.getElementById("product-id").value = "";
}

document.getElementById("open-add-modal-btn").addEventListener("click", () => {
    openModal(false);
});
document.getElementById("close-modal-btn").addEventListener("click", closeModal);
document.getElementById("cancel-modal-btn").addEventListener("click", closeModal);

// Product Add / Edit submit
productForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const id = document.getElementById("product-id").value;
    const name = document.getElementById("prod-name").value;
    const category = document.getElementById("prod-category").value;
    const rating = parseInt(document.getElementById("prod-rating").value);
    const price = Number(document.getElementById("prod-price").value);
    const originalPriceInput = document.getElementById("prod-original-price").value;
    const originalPrice = originalPriceInput ? Number(originalPriceInput) : null;
    const image = document.getElementById("prod-image").value;
    const description = document.getElementById("prod-desc").value;
    const status = document.getElementById("prod-status").value;

    if (id) {
        // Edit existing product
        const prodIndex = products.findIndex(p => p.id === id);
        if (prodIndex > -1) {
            products[prodIndex] = { id, name, category, rating, price, originalPrice, image, description, status };
            showToast(`Product "${name}" updated successfully!`);
        }
    } else {
        // Create new product
        const newProduct = {
            id: "prod-" + Date.now(),
            name,
            category,
            rating,
            price,
            originalPrice,
            image,
            description,
            status
        };
        products.push(newProduct);
        showToast(`Product "${name}" created successfully!`);
    }

    saveState();
    closeModal();
    renderProductsTable(document.getElementById("product-search").value);
    renderDashboard();
});

// Edit Trigger
function editProduct(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    document.getElementById("product-id").value = product.id;
    document.getElementById("prod-name").value = product.name;
    document.getElementById("prod-category").value = product.category;
    document.getElementById("prod-rating").value = product.rating;
    document.getElementById("prod-price").value = product.price;
    document.getElementById("prod-original-price").value = product.originalPrice || "";
    document.getElementById("prod-image").value = product.image;
    document.getElementById("prod-desc").value = product.description;
    document.getElementById("prod-status").value = product.status || "in_stock";

    openModal(true);
}

// Delete Trigger
function deleteProduct(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    
    if (confirm(`Are you sure you want to delete the product "${product.name}"?`)) {
        products = products.filter(p => p.id !== id);
        saveState();
        renderProductsTable(document.getElementById("product-search").value);
        renderDashboard();
        showToast(`Product "${product.name}" deleted successfully!`, 'error');
    }
}

// Save Settings Form
document.getElementById("settings-form").addEventListener("submit", (e) => {
    e.preventDefault();
    
    settings.storeName = document.getElementById("settings-store-name").value;
    settings.currency = document.getElementById("settings-currency").value;
    settings.logo = document.getElementById("settings-store-logo").value;
    settings.description = document.getElementById("settings-store-description").value;
    settings.heroBg = document.getElementById("settings-hero-bg").value;
    settings.heroTitle = document.getElementById("settings-hero-title").value;
    settings.heroSubtitle = document.getElementById("settings-hero-subtitle").value;
    settings.heroTag = document.getElementById("settings-hero-tag").value;
    settings.heroWarranty = document.getElementById("settings-hero-warranty").value;
    settings.promoBanner = document.getElementById("settings-promo-banner").value;
    settings.supportWhatsapp = document.getElementById("settings-support-whatsapp").value;
    settings.supportPhoneAlt = document.getElementById("settings-support-phone-alt").value;
    settings.supportEmail = document.getElementById("settings-support-email").value;
    settings.facebookUrl = document.getElementById("settings-link-facebook").value;
    settings.instagramUrl = document.getElementById("settings-link-instagram").value;
    settings.adminPasscode = document.getElementById("settings-admin-passcode").value;

    saveState();
    renderDashboard();
    showToast("Branding settings saved successfully!");
});

// Passcode Login Verification
document.getElementById("admin-login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const password = document.getElementById("login-password").value;
    const correctPassword = settings.adminPasscode || "franklin2026";
    if (password === correctPassword) {
        document.getElementById("login-overlay").remove();
        showToast("Access granted. Welcome!");
        sessionStorage.setItem("admin_logged_in", "true");
    } else {
        const errorText = document.getElementById("login-error");
        if (errorText) errorText.style.display = "block";
        document.getElementById("login-password").value = "";
    }
});

// App Bootstrapping
window.addEventListener("DOMContentLoaded", () => {
    init();
    
    // Check if passcode session exists
    if (sessionStorage.getItem("admin_logged_in") === "true") {
        const overlay = document.getElementById("login-overlay");
        if (overlay) overlay.remove();
    }
    
    renderDashboard();
    renderProductsTable();
});

