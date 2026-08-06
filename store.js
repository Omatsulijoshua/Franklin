// Default Seed Data (synchronized with admin panel to ensure consistent fallback)
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


// App State variables
let products = [];
let settings = {};
let cart = [];
let currentCategory = "all";
let activeDetailProduct = null;

// Initialize Store Database
function initStore() {
    // 1. Fetch settings
    const savedSettings = localStorage.getItem("franklin_settings");
    if (!savedSettings) {
        localStorage.setItem("franklin_settings", JSON.stringify(DEFAULT_SETTINGS));
        settings = { ...DEFAULT_SETTINGS };
    } else {
        settings = JSON.parse(savedSettings);
    }

    // 2. Fetch products
    const savedProducts = localStorage.getItem("franklin_products");
    if (!savedProducts) {
        localStorage.setItem("franklin_products", JSON.stringify(DEFAULT_PRODUCTS));
        products = [...DEFAULT_PRODUCTS];
    } else {
        products = JSON.parse(savedProducts);
    }

    // 3. Fetch Cart
    const savedCart = localStorage.getItem("franklin_cart");
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }

    applyBranding();
    renderProductsGrid();
    updateCartUI();
}


// Update branding values dynamically
function applyBranding() {
    // Page Title
    document.title = `${settings.storeName} - Buy Household, Kitchen & Electronics`;

    // Store Name
    document.getElementById("store-name-text").textContent = settings.storeName;
    document.getElementById("footer-store-name").textContent = settings.storeName;

    // Logos
    const logoImgElements = [
        document.getElementById("store-logo-img"),
        document.getElementById("footer-logo-img")
    ];
    logoImgElements.forEach(el => {
        if (el) {
            el.src = settings.logo;
            el.onerror = function() {
                this.src = "https://placehold.co/200x80/ffffff/558b2f?text=PRIME+SHOP";
            }
        }
    });

    // Hero Section
    const heroBg = document.getElementById("hero-banner-section");
    if (heroBg && settings.heroBg) {
        heroBg.style.backgroundImage = `url('${settings.heroBg}')`;
    }
    document.getElementById("hero-title-text").textContent = settings.heroTitle;
    document.getElementById("hero-subtitle-text").textContent = settings.heroSubtitle;
    document.getElementById("hero-discount-text").textContent = settings.heroTag;
    document.getElementById("hero-warranty-text").textContent = settings.heroWarranty;

    // Center Promo Banner Graphic
    const promoGraphic = document.getElementById("promo-banner-graphic");
    if (promoGraphic && settings.promoBanner) {
        promoGraphic.src = settings.promoBanner;
        promoGraphic.onerror = function() {
            this.src = "https://placehold.co/800x250/558b2f/ffffff?text=Promo+Order+Now";
        }
    }

    // Footer contact text
    document.getElementById("footer-about-description").textContent = settings.description;
    
    // Footer social links
    const facebookLink = document.getElementById("footer-facebook-link");
    if (facebookLink) {
        facebookLink.href = settings.facebookUrl || "#";
    }
    const whatsappLink = document.getElementById("footer-whatsapp-link");
    if (whatsappLink) {
        whatsappLink.href = `https://wa.me/${settings.supportWhatsapp.replace(/[^0-9]/g, '')}`;
    }

    // Dynamic Contact List Injection
    const contactList = document.getElementById("footer-contact-list");
    if (contactList) {
        contactList.innerHTML = `
            <li><span class="footer-link" style="cursor:default;color:#9ea2a7;">📧 Email: ${settings.supportEmail}</span></li>
            <li><span class="footer-link" style="cursor:default;color:#9ea2a7;">💬 WhatsApp: ${settings.supportWhatsapp}</span></li>
            ${settings.supportPhoneAlt ? `<li><span class="footer-link" style="cursor:default;color:#9ea2a7;">📞 Alt Phone: ${settings.supportPhoneAlt}</span></li>` : ''}
            <li><span class="footer-link" style="cursor:default;color:#9ea2a7;">📍 Location: Lagos, Nigeria</span></li>
        `;
    }

    // Copyright
    const year = new Date().getFullYear();
    document.getElementById("footer-copyright-text").textContent = `Copyright © ${year} ${settings.storeName}. All rights reserved.`;
}

// Toast Alert Popups storefront
function showStoreToast(message) {
    const container = document.getElementById("storefront-toast-container");
    const toast = document.createElement("div");
    toast.className = "store-toast";
    toast.innerHTML = `
        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style="width:18px;height:18px;color:#8cc63f;"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        <span>${message}</span>
    `;
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add("fade-out");
        toast.addEventListener("animationend", () => {
            toast.remove();
        });
    }, 2500);
}

// Render Products catalog grid
function renderProductsGrid() {
    const grid = document.getElementById("storefront-products-grid");
    grid.innerHTML = "";

    const filtered = currentCategory === "all" 
        ? products 
        : products.filter(p => p.category === currentCategory);

    // Update section title text
    const heading = document.getElementById("category-heading-text");
    if (currentCategory === "all") {
        heading.textContent = "Best Selling Products Collection";
    } else {
        heading.textContent = `${currentCategory} Collection`;
    }

    if (filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 4rem; color: var(--text-muted);">No products found in this category.</div>`;
        return;
    }

    filtered.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        // Discount calculations
        const hasDiscount = product.originalPrice && Number(product.originalPrice) > Number(product.price);
        const saleBadgeHtml = hasDiscount ? `<div class="sale-badge">Sale!</div>` : "";
        const originalPriceHtml = hasDiscount 
            ? `<span class="price-original">${settings.currency}${Number(product.originalPrice).toLocaleString()}</span>` 
            : "";
        
        // Stars ratings
        const starsHtml = "★".repeat(Number(product.rating)) + "☆".repeat(5 - Number(product.rating));

        card.innerHTML = `
            ${saleBadgeHtml}
            <div class="product-image-wrapper">
                <img class="product-img" src="${product.image}" alt="${product.name}" onerror="this.src='https://placehold.co/300x300/e2e8f0/1e293b?text=PRIME+PRODUCT'">
            </div>
            <div class="product-details">
                <span class="product-category">${product.category}</span>
                <h4 class="product-name">${product.name}</h4>
                <div class="product-rating">${starsHtml}</div>
                <div class="product-price-row">
                    <span class="price-current">${settings.currency}${Number(product.price).toLocaleString()}</span>
                    ${originalPriceHtml}
                </div>
                <div class="product-buttons">
                    <button class="btn-card btn-add-cart">Add to Cart</button>
                    <button class="btn-card btn-buy-now">Buy Now</button>
                </div>
            </div>
        `;

        // Card Click Interactions
        const imgWrapper = card.querySelector(".product-image-wrapper");
        const titleEl = card.querySelector(".product-name");
        
        const openDetailFn = () => openProductDetailsModal(product);
        imgWrapper.addEventListener("click", openDetailFn);
        titleEl.addEventListener("click", openDetailFn);

        // Cart buttons interactions
        card.querySelector(".btn-add-cart").addEventListener("click", (e) => {
            e.stopPropagation();
            addItemToCart(product, 1);
            showStoreToast(`Added ${product.name} to Cart`);
        });

        card.querySelector(".btn-buy-now").addEventListener("click", (e) => {
            e.stopPropagation();
            addItemToCart(product, 1);
            openCartDrawer();
        });

        grid.appendChild(card);
    });
}

// Cart Mechanics
function addItemToCart(product, quantity) {
    const existingIndex = cart.findIndex(item => item.product.id === product.id);
    if (existingIndex > -1) {
        cart[existingIndex].quantity += Number(quantity);
    } else {
        cart.push({ product, quantity: Number(quantity) });
    }
    saveCart();
    updateCartUI();
}

function updateCartQty(productId, delta) {
    const item = cart.find(i => i.product.id === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeCartItem(productId);
            return;
        }
        saveCart();
        updateCartUI();
    }
}

function removeCartItem(productId) {
    cart = cart.filter(i => i.product.id !== productId);
    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem("franklin_cart", JSON.stringify(cart));
}

function updateCartUI() {
    // 1. Calc totals
    let totalQty = 0;
    let totalPrice = 0;

    cart.forEach(item => {
        totalQty += item.quantity;
        totalPrice += (item.product.price * item.quantity);
    });

    const formattedPrice = `${settings.currency}${totalPrice.toLocaleString()}`;

    // 2. Sync values in header & drawers
    document.getElementById("cart-total-price").textContent = formattedPrice;
    document.getElementById("cart-qty-badge").textContent = totalQty;
    document.getElementById("cart-subtotal-val").textContent = formattedPrice;
    document.getElementById("cart-total-val").textContent = formattedPrice;

    // 3. Render items in drawer list
    const container = document.getElementById("cart-items-container");
    container.innerHTML = "";

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty-state">
                <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
                </svg>
                <p>Your shopping cart is empty</p>
                <button class="hero-btn" id="cart-continue-shopping-btn" style="padding:0.6rem 1.5rem; font-size:0.85rem;">Shop Our Catalog</button>
            </div>
        `;
        document.getElementById("checkout-trigger-btn").disabled = true;
        document.getElementById("checkout-trigger-btn").style.opacity = 0.5;
        document.getElementById("checkout-trigger-btn").style.cursor = 'not-allowed';
        
        const shopBtn = container.querySelector("#cart-continue-shopping-btn");
        if (shopBtn) {
            shopBtn.addEventListener("click", closeCartDrawer);
        }
    } else {
        document.getElementById("checkout-trigger-btn").disabled = false;
        document.getElementById("checkout-trigger-btn").style.opacity = 1;
        document.getElementById("checkout-trigger-btn").style.cursor = 'pointer';

        cart.forEach(item => {
            const row = document.createElement("div");
            row.className = "cart-item";

            row.innerHTML = `
                <img src="${item.product.image}" alt="${item.product.name}" class="cart-item-img" onerror="this.src='https://placehold.co/100x100?text=Product'">
                <div class="cart-item-details">
                    <h4 class="cart-item-name">${item.product.name}</h4>
                    <p class="cart-item-price">${settings.currency}${(item.product.price * item.quantity).toLocaleString()}</p>
                    <div class="cart-item-actions">
                        <div class="cart-item-qty">
                            <button class="cart-item-qty-btn minus">-</button>
                            <input class="cart-item-qty-val" type="text" value="${item.quantity}" readonly>
                            <button class="cart-item-qty-btn plus">+</button>
                        </div>
                        <button class="cart-item-remove-btn">
                            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                            Remove
                        </button>
                    </div>
                </div>
            `;

            // Cart item triggers
            row.querySelector(".plus").addEventListener("click", () => updateCartQty(item.product.id, 1));
            row.querySelector(".minus").addEventListener("click", () => updateCartQty(item.product.id, -1));
            row.querySelector(".cart-item-remove-btn").addEventListener("click", () => removeCartItem(item.product.id));

            container.appendChild(row);
        });
    }
}

// Drawer Open/Close Transitions
const cartOverlay = document.getElementById("cart-drawer-overlay");
function openCartDrawer() {
    cartOverlay.classList.add("active");
}
function closeCartDrawer() {
    cartOverlay.classList.remove("active");
}

document.getElementById("cart-trigger-btn").addEventListener("click", openCartDrawer);
document.getElementById("close-cart-btn").addEventListener("click", closeCartDrawer);
cartOverlay.addEventListener("click", (e) => {
    if (e.target === cartOverlay) closeCartDrawer();
});

// Product Details Modal Dialog
const detailModal = document.getElementById("product-detail-modal");
const qtyInput = document.getElementById("modal-qty-input");

function openProductDetailsModal(product) {
    activeDetailProduct = product;
    qtyInput.value = 1;

    // Set fields
    document.getElementById("detail-modal-img").src = product.image;
    document.getElementById("detail-modal-img").onerror = function() {
        this.src = "https://placehold.co/400x400?text=Product+Image";
    };
    document.getElementById("detail-modal-category").textContent = product.category;
    document.getElementById("detail-modal-title").textContent = product.name;
    document.getElementById("detail-modal-desc").textContent = product.description;
    
    // Set prices
    document.getElementById("detail-modal-price").textContent = `${settings.currency}${Number(product.price).toLocaleString()}`;
    const hasDiscount = product.originalPrice && Number(product.originalPrice) > Number(product.price);
    const origPriceEl = document.getElementById("detail-modal-original-price");
    if (hasDiscount) {
        origPriceEl.textContent = `${settings.currency}${Number(product.originalPrice).toLocaleString()}`;
        origPriceEl.style.display = "block";
    } else {
        origPriceEl.style.display = "none";
    }

    // Set rating stars
    const starsHtml = "★".repeat(Number(product.rating)) + "☆".repeat(5 - Number(product.rating));
    document.getElementById("detail-modal-rating").textContent = starsHtml;

    detailModal.classList.add("active");
}

function closeProductDetailsModal() {
    detailModal.classList.remove("active");
    activeDetailProduct = null;
}

document.getElementById("close-details-btn").addEventListener("click", closeProductDetailsModal);
detailModal.addEventListener("click", (e) => {
    if (e.target === detailModal) closeProductDetailsModal();
});

// Detail Modal Quantity Buttons
document.getElementById("modal-qty-plus").addEventListener("click", () => {
    qtyInput.value = Number(qtyInput.value) + 1;
});
document.getElementById("modal-qty-minus").addEventListener("click", () => {
    const val = Number(qtyInput.value);
    if (val > 1) {
        qtyInput.value = val - 1;
    }
});

// Detail Modal Add-to-cart
document.getElementById("modal-add-cart-btn").addEventListener("click", () => {
    if (activeDetailProduct) {
        addItemToCart(activeDetailProduct, Number(qtyInput.value));
        closeProductDetailsModal();
        showStoreToast(`Added ${qtyInput.value} ${activeDetailProduct.name} to Cart`);
    }
});

// Category Tab Filters
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", (e) => {
        document.querySelectorAll(".nav-link").forEach(el => el.classList.remove("active"));
        e.currentTarget.classList.add("active");

        currentCategory = e.currentTarget.getAttribute("data-category");
        renderProductsGrid();
        
        // Auto scroll to collection if viewport is low
        const heading = document.getElementById("category-heading-text");
        if (heading) {
            heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Shop CTA button scroll
document.getElementById("hero-cta-btn").addEventListener("click", () => {
    const heading = document.getElementById("category-heading-text");
    if (heading) {
        heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});

// Checkout workflows
const checkoutModal = document.getElementById("checkout-form-modal");

document.getElementById("checkout-trigger-btn").addEventListener("click", () => {
    closeCartDrawer();
    checkoutModal.classList.add("active");
});

document.getElementById("close-checkout-form-btn").addEventListener("click", () => {
    checkoutModal.classList.remove("active");
});
document.getElementById("cancel-checkout-btn").addEventListener("click", () => {
    checkoutModal.classList.remove("active");
});
checkoutModal.addEventListener("click", (e) => {
    if (e.target === checkoutModal) checkoutModal.classList.remove("active");
});

// Process WhatsApp Order Dispatch
document.getElementById("checkout-submission-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("check-name").value;
    const phone = document.getElementById("check-phone").value;
    const address = document.getElementById("check-address").value;
    const notes = document.getElementById("check-notes").value;

    let subtotal = 0;
    let itemsText = "";

    cart.forEach(item => {
        subtotal += (item.product.price * item.quantity);
        itemsText += `• ${item.quantity} x ${item.product.name} (${settings.currency}${Number(item.product.price * item.quantity).toLocaleString()})\n`;
    });

    // Format text message
    let whatsappMsg = `*NEW ORDER - ${settings.storeName.toUpperCase()}*\n`;
    whatsappMsg += `----------------------------------------\n`;
    whatsappMsg += `*Recipient Details:*\n`;
    whatsappMsg += `Name: ${name}\n`;
    whatsappMsg += `Phone: ${phone}\n`;
    whatsappMsg += `Address: ${address}\n`;
    if (notes) {
        whatsappMsg += `Notes: ${notes}\n`;
    }
    whatsappMsg += `----------------------------------------\n`;
    whatsappMsg += `*Order Items:*\n`;
    whatsappMsg += itemsText;
    whatsappMsg += `----------------------------------------\n`;
    whatsappMsg += `*Subtotal:* ${settings.currency}${subtotal.toLocaleString()}\n`;
    whatsappMsg += `*Shipping:* FREE\n`;
    whatsappMsg += `*Total Sum:* ${settings.currency}${subtotal.toLocaleString()}\n`;
    whatsappMsg += `----------------------------------------\n`;
    whatsappMsg += `Thank you for your business!`;

    // Strip characters off WhatsApp support line
    const cleanNumber = settings.supportWhatsapp.replace(/[^0-9]/g, '');
    const encodedText = encodeURIComponent(whatsappMsg);
    
    // Redirect window to WhatsApp API
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanNumber}&text=${encodedText}`;
    
    // Clear cart and settings
    cart = [];
    saveCart();
    updateCartUI();
    checkoutModal.classList.remove("active");
    document.getElementById("checkout-submission-form").reset();

    // Trigger redirection
    window.open(whatsappUrl, '_blank');
    showStoreToast("Redirection to WhatsApp successful. Thank you!");
});

// Watch local storage modifications in real time (if user edits inside dashboard and returns to store)
window.addEventListener("storage", (e) => {
    if (e.key === "franklin_settings" || e.key === "franklin_products") {
        initStore();
    }
});

// Boot storefront
window.addEventListener("DOMContentLoaded", () => {
    initStore();
});
