# 🛍️ Franklin Store - E-Commerce Storefront & Admin Dashboard

Franklin Store is a premium, fully responsive, client-side e-commerce web application featuring a customer storefront and a separate, password-protected merchant console. It requires no complex server-side databases or backend APIs—all product inventories, categories, and branding states are dynamically stored and synchronized using the browser's `localStorage` API.

---

## 🔑 Admin Console Credentials

To manage products and store configurations, navigate to the dashboard folder:
* **Dashboard URL**: `/admin/index.html` (or click "Merchant Dashboard" in the storefront footer)
* **Security Passcode**: `franklin2026`

> [!IMPORTANT]
> The admin page is protected with a full-screen glassmorphic passcode check. Access to dashboard metrics, products list operations, and configurations forms is locked until the merchant types the correct passcode. Session memory persists access so you do not have to retype it on reload.

---

## ✨ Features

### 🛒 Customer Storefront
* **15 Seeded Products**: Fully loaded inventory matching Kitchen, Electronics, and Household categories with beautiful Unsplash and custom-generated photography.
* **Sticky Navigation & Header**: Clean header with backdrop blurring (`backdrop-filter`) and real-time shopping cart bubble.
* **Mobile-First Ribbon**: On mobile screens, category list tabs condense into a clean horizontally-scrollable ribbon, and the cart button floats dynamically in the top-right corner to save screen estate.
* **Product Quick Views**: Detail previews inside a structured modal containing detail specs and local quantity selectors.
* **WhatsApp Dispatch Order Checkout**: A checkout drawer form that formats recipient shipping info and cart items into a clean, markdown-friendly text message, opening it in WhatsApp to finalize delivery:
  * *WhatsApp Dispatch supports international number redirection configurations inside Settings.*

### ⚙️ Merchant Dashboard
* **Metrics Dashboard**: Analytics counters showing total catalog listings, categories counts, and active currency symbols.
* **Searchable Inventories**: Live filter search bar to lookup products by title or category.
* **Interactive CRUD Manager**: Complete interface to Add, Edit, or Delete catalog products. Form inputs handle name, categories, sale prices, original prices (for "Sale!" bubble toggles), description, and stock statuses.
* **Branding Configurator**: Complete form to customize store name, active currency symbols, WhatsApp forwarding numbers, social links (Facebook, Instagram), hero banner texts, background images, and promotions banner graphics.
* **Cross-Tab Storage Synchronizations**: Opening both the storefront and admin panel in separate browser tabs dynamically updates the storefront the split-second you click "Save" on the dashboard.

---

## 📂 Project Architecture

```bash
Franklin/
├── admin/
│   ├── index.html     # Admin dashboard layouts
│   ├── admin.css      # Dark-themed dashboard styling
│   └── admin.js       # Admin CRUD controllers & login locks
├── assets/            # Static high-quality branding graphics
│   ├── logo.png       # Generated logo
│   ├── hero.jpg       # Hero banner background
│   ├── promo.jpg      # Centers promo phone mockup
│   ├── product_slicer.jpg
│   ├── product_juicer.jpg
│   ├── product_cutter.jpg
│   └── product_popcorn.jpg
├── index.html         # Customer storefront landing
├── style.css          # Storefront design system & mobile queries
├── store.js           # Storefront cart operations & order dispatcher
└── README.md          # Project documentation
```

---

## 🛠️ Setup & Operations Guide

### Running Locally
1. Clone or download the directory to your computer.
2. Double-click the main [index.html](file:///c:/Users/SirBill's/Desktop/Franklin/index.html) to boot the customer storefront.
3. To access settings, scroll to the bottom right and click the gear icon link **Merchant Dashboard** (or open [admin/index.html](file:///c:/Users/SirBill's/Desktop/Franklin/admin/index.html) in your browser).
4. Enter `franklin2026` to unlock control options.

### Live Deployments (Free & Fast)
* **Netlify Drop**: Go to [Netlify Drop](https://app.netlify.com/drop) and drag the entire `/Franklin` directory into the upload box. Your site goes live on a public URL in 5 seconds.
* **Surge CLI**: Open a terminal in the folder directory and run `npx surge .` to deploy to a custom subdomain instantly.
