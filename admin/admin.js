// Default seed database parameters are loaded globally from db.js

// App State Management
let products = [];
let settings = {};
let orders = [];

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

    // Check if orders exist in localStorage
    const savedOrders = localStorage.getItem("franklin_orders");
    if (!savedOrders) {
        localStorage.setItem("franklin_orders", JSON.stringify([]));
        orders = [];
    } else {
        orders = JSON.parse(savedOrders);
    }
}

// Save state to localStorage
function saveState() {
    localStorage.setItem("franklin_products", JSON.stringify(products));
    localStorage.setItem("franklin_settings", JSON.stringify(settings));
    localStorage.setItem("franklin_orders", JSON.stringify(orders));
    updateCategoriesDatalist();
}

function updateCategoriesDatalist() {
    const datalist = document.getElementById("categories-datalist");
    if (!datalist) return;
    const categories = Array.from(new Set(products.map(p => p.category))).filter(Boolean);
    datalist.innerHTML = categories.map(cat => `<option value="${cat}"></option>`).join("");
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
    document.getElementById("stat-store-currency").textContent = `${settings.currency || '₦'} (${settings.storeName || 'Franklin Store'})`;
    
    // Total Orders count
    const totalOrdersEl = document.getElementById("stat-total-orders");
    if (totalOrdersEl) {
        totalOrdersEl.textContent = orders.length;
    }
    
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

function renderOrdersTable(filterQuery = "") {
    const tbody = document.getElementById("orders-table-body");
    if (!tbody) return;
    tbody.innerHTML = "";

    const query = filterQuery.toLowerCase().trim();
    const filteredOrders = orders.filter(o => 
        o.name.toLowerCase().includes(query) || 
        o.phone.toLowerCase().includes(query) ||
        o.id.toLowerCase().includes(query)
    );

    if (filteredOrders.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; color: var(--text-muted); padding: 3rem;">
                    No orders recorded yet. Complete checkouts on the storefront to populate.
                </td>
            </tr>
        `;
        return;
    }

    filteredOrders.forEach(order => {
        const tr = document.createElement("tr");

        // Format items list
        let itemsHtml = "<ul style='padding-left:1.25rem; font-size:0.8rem; margin:0; color:var(--text-secondary);'>";
        order.items.forEach(item => {
            itemsHtml += `<li>${item.qty} x ${item.name} (${settings.currency}${Number(item.price).toLocaleString()})</li>`;
        });
        itemsHtml += "</ul>";

        // Status Badge
        const isCompleted = order.status === "completed";
        const statusBadge = isCompleted 
            ? `<span class="badge badge-sale">Completed</span>` 
            : `<span class="badge badge-regular" style="background-color:rgba(245,158,11,0.15); color:#f59e0b;">Pending</span>`;

        // Toggle button icon
        const toggleBtnTitle = isCompleted ? "Mark Pending" : "Mark Completed";
        const toggleIcon = isCompleted 
            ? `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width:18px;height:18px;"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
            : `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width:18px;height:18px;"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>`;

        tr.innerHTML = `
            <td>
                <strong style="color:white; font-family:var(--font-heading);">${order.id}</strong>
                <span style="display:block; font-size:0.75rem; color:var(--text-muted);">${order.date}</span>
            </td>
            <td>
                <div style="font-weight:600; color:white;">${order.name}</div>
                <div style="font-size:0.8rem; color:var(--text-secondary);">${order.phone}</div>
                <div style="font-size:0.75rem; color:var(--text-muted); max-width:220px; white-space:normal; line-height:1.2; margin-top:0.25rem;">${order.address}</div>
                ${order.notes ? `<div style="font-size:0.75rem; color:#f59e0b; font-style:italic; margin-top:0.25rem;">Note: ${order.notes}</div>` : ""}
            </td>
            <td>${itemsHtml}</td>
            <td><strong>${settings.currency}${Number(order.total).toLocaleString()}</strong></td>
            <td>${statusBadge}</td>
            <td>
                <div class="table-actions">
                    <button class="action-btn toggle-status" data-id="${order.id}" title="${toggleBtnTitle}">
                        ${toggleIcon}
                    </button>
                    <button class="action-btn delete" data-id="${order.id}" title="Delete Order">
                        <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                        </svg>
                    </button>
                </div>
            </td>
        `;

        tr.querySelector(".toggle-status").addEventListener("click", () => toggleOrderStatus(order.id));
        tr.querySelector(".action-btn.delete").addEventListener("click", () => deleteOrder(order.id));

        tbody.appendChild(tr);
    });
}

function toggleOrderStatus(id) {
    const order = orders.find(o => o.id === id);
    if (!order) return;
    order.status = order.status === "completed" ? "pending" : "completed";
    saveState();
    renderOrdersTable(document.getElementById("order-search").value);
    showToast(`Order status updated to "${order.status}"!`);
}

function deleteOrder(id) {
    const order = orders.find(o => o.id === id);
    if (!order) return;
    
    if (confirm(`Are you sure you want to delete order reference "${order.id}"?`)) {
        orders = orders.filter(o => o.id !== id);
        saveState();
        renderOrdersTable(document.getElementById("order-search").value);
        renderDashboard();
        showToast("Order record deleted successfully!", 'error');
    }
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
            orders: "Orders Manager",
            settings: "Store Configuration"
        };
        const subtitles = {
            dashboard: "Track and configure your e-commerce shop state.",
            products: "Add, modify, and delete product catalogs items dynamically.",
            orders: "View, track, and modify purchase orders made by storefront customers.",
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
        if (targetTab === 'orders') {
            renderOrdersTable();
        }
    });
});

// Search input handler
document.getElementById("product-search").addEventListener("input", (e) => {
    renderProductsTable(e.target.value);
});

if (document.getElementById("order-search")) {
    document.getElementById("order-search").addEventListener("input", (e) => {
        renderOrdersTable(e.target.value);
    });
}

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
    updateCategoriesDatalist();

    // Hook up export db.js button click listener
    const exportBtn = document.getElementById("btn-export-db");
    if (exportBtn) {
        exportBtn.addEventListener("click", () => {
            const dbContent = `// Global Default Seed Database - Shared by Storefront and Admin Dashboard
const DEFAULT_SETTINGS = ${JSON.stringify(settings, null, 4)};

const DEFAULT_PRODUCTS = ${JSON.stringify(products, null, 4)};
`;
            const blob = new Blob([dbContent], { type: "text/javascript" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "db.js";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            showToast("db.js file exported successfully! Replace the file in your folder and push to Git.");
        });
    }
});

