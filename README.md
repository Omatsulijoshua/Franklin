# 🛍️ Franklin Store - E-Commerce Storefront & Admin Dashboard

Franklin Store is a premium, fully responsive, client-side e-commerce web application featuring a customer storefront and a separate, password-protected merchant console. It requires no complex server-side databases or backend APIs—all product inventories, categories, and branding states are dynamically stored and synchronized using the browser's `localStorage` API.

---

## 🔑 Admin Console Credentials

To manage products and store configurations, navigate to the dashboard folder:
* **Dashboard URL**: `/admin/index.html` (or click **Merchant Dashboard** in the storefront footer)
* **Default Security Passcode**: `franklin2026`

> [!IMPORTANT]
> The admin page is protected with a full-screen glassmorphic passcode check. Access to dashboard metrics, products list operations, and configurations forms is locked until the merchant types the correct passcode. Session memory persists access so you do not have to retype it on reload.

---

## ⚙️ Merchant Admin Management & Controls

The Merchant Console is divided into four main functional areas: **Dashboard Overview**, **Products Manager**, **Orders Manager**, and **Store Settings**.

### 1. 📊 Dashboard Overview (Quick Stats)
Displays high-level e-commerce metrics updated in real-time as inventory or orders change:
* **Total Products**: Count of all listings currently active in the inventory.
* **Categories**: Number of unique, distinct product groups configured.
* **Store Mode**: Active display currency code and current store name mapping.
* **Total Orders**: Number of order checkout logs captured from customer purchases.

---

### 2. 📦 Products Manager Panel
A complete inventory dashboard with full CRUD (Create, Read, Update, Delete) capability:
* **Search Bar**: Live filters products immediately by title, description, or category.
* **Add New Product Form**: Opens a sliding modal container with the following fields:
  * **Product Title**: The primary name of the product.
  * **Category**: A dynamic text input. Typing a category name that does not exist will automatically register it and generate a new menu tab on the storefront. Existing categories appear as dropdown datalist autocomplete options.
  * **Star Rating**: Sets rating visual stars (1 to 5 stars) shown on product cards.
  * **Selling Price**: The price charged to the customer.
  * **Original Price (Optional)**: If entered higher than the selling price, it automatically adds a **"Sale" badge** on the storefront and renders a strikethrough price tag.
  * **Product Image URL**: Direct link to the hosted image asset (Imgur, Postimages, or ImgBB direct links).
  * **Description**: Detailed product features and specifications.
  * **Stock Status**: Toggles between `In Stock` (active shopping cart buttons) and `Out of Stock` (grayed out cart buttons).
* **Edit Button (Pencil Icon)**: Loads selected product details back into the modal for modification.
* **Delete Button (Trash Icon)**: Triggers a safety confirmation prompt before deleting the product from local databases.

#### 📷 How to Upload Images and Get Direct Links
Since this storefront is serverless, you need to host your images online and paste their **Direct URLs** into the *Product Image URL* field. Here are the easiest methods:

##### Method 1: Using Postimages (Recommended - Quickest & No Account Required)
1. Go to **[postimages.org](https://postimages.org/)**.
2. Click the **Choose images** button and upload your product photo.
3. Once the upload completes, a list of link boxes will appear.
4. **Copy the link inside the "Direct Link" row** (it will look like: `https://i.postimg.cc/abc123xy/product-name.jpg`).

> [!IMPORTANT]
> Always copy the **Direct Link**. If you copy the standard "Link" or "Markdown Link", it points to a web page displaying the image rather than the raw image file itself, which will cause a broken image icon on the storefront.

##### Method 2: Using ImgBB (Simple & Free Account option)
1. Go to **[imgbb.com](https://imgbb.com/)**.
2. Click **Start Uploading**, choose your photo, and click **Upload**.
3. Once uploaded, open the dropdown menu below the image (by default it says "Viewer links").
4. Select **Direct links** from the list.
5. Copy the generated URL (it will look like: `https://i.ibb.co/abc123xy/product-name.png`).

##### 🔍 How to check if your image link is correct:
Before pasting the link into your admin panel:
1. Open a new tab in your browser.
2. Paste the image link and press **Enter**.
3. **Correct link**: You should see *only the raw image file* on a clean background (the browser url bar will end in `.jpg`, `.jpeg`, `.png`, or `.webp`).
4. **Incorrect link**: If you see headers, logos, buttons, or website text around the image (e.g. imgur or postimages brand website), it is a viewer webpage link. Go back and copy the direct link.

---

### 3. 📋 Orders Manager Panel
Stores customer transactions submitted on checkout prior to WhatsApp dispatch:
* **Real-time Capture**: When a customer clicks **Send via WhatsApp** on checkout, their full order information is automatically logged to the `franklin_orders` database.
* **Detailed Table Records**:
  * **Order Ref & Date**: Displays unique reference codes (e.g. `ORD-4927`) and timestamps.
  * **Customer Info**: Lists Customer Name, Phone number, Delivery address, and custom checkout notes.
  * **Items Ordered**: Renders nested bullet lists containing item quantities, product names, and pricing.
  * **Total Cost**: Auto-computes total sums using current currency symbols.
  * **Status Badge**: Displays `Pending` (amber) or `Completed` (emerald) tags.
* **Status Toggler (Checkmark Icon)**: Instantly toggles order statuses between *Pending* and *Completed* to track shipments.
* **Delete Record (Trash Icon)**: Removes completed order histories from dashboard storage.

---

### 4. 🛠️ Store Settings Panel
Enables the merchant to re-brand the storefront at any time without touch coding:
* **General Settings**:
  * *Store Name*: Changes store name in headings, titles, and SEO tags.
  * *Currency Symbol*: Updates symbols (`₦`, `$`, `€`, `£`) across all checkout drawers, product tags, and logs.
  * *Store Logo URL*: Instantly overrides header, footer, and admin logos.
  * *Footer About Description*: Main text printed in the footer Column 1 biography.
* **Hero Banner Settings**:
  * *Hero Background URL*: Image displayed behind the main intro storefront section.
  * *Heading & Subtitles*: Main slogan headers.
  * *Promo Tag & Warranty Line*: Custom text badges.
* **Merchant Support Contacts**:
  * *WhatsApp Phone Number*: Number used for checkout forwards (must be international format).
  * *Alternative Phone / Support Line*: Renders as a second contact number inside the footer.
  * *Support Email*: Primary contact email address.
  * *Facebook & Instagram URLs*: Social link icons update dynamically.
* **Dashboard Security Settings**:
  * *Security Passcode*: Paste a custom string to change your dashboard access passcode lock dynamically.

---

## 📂 Project Architecture

```bash
Franklin/
├── admin/
│   ├── index.html     # Admin dashboard markup and forms layouts
│   ├── admin.css      # Modern dark-themed dashboard styling
│   └── admin.js       # Admin CRUD controllers & security access session logic
├── assets/            # Static high-quality branding graphics
│   ├── logo.png       # Store logo
│   ├── hero.jpg       # Hero banner background
│   └── promo.jpg      # Centers promo phone mockup graphic
├── index.html         # Customer storefront landing
├── style.css          # Storefront layout design system & mobile media queries
├── store.js           # Storefront dynamic navigation, cart operations & order dispatcher
└── README.md          # Project manual documentation
```

---

## 🛠️ Setup & Operations Guide

### Running Locally
1. Clone or download this directory to your local drive.
2. Double-click the main [index.html](file:///c:/Users/SirBill's/Desktop/Franklin/index.html) to open the customer storefront.
3. Scroll to the bottom right of the storefront page and click **Merchant Dashboard** (or navigate to `/admin/index.html` in your browser).
4. Enter passcode `franklin2026` to unlock admin console options.

### Live Deployments
* **Netlify Drop (Easiest)**: Drag and drop the `/Franklin` folder directly into [Netlify Drop](https://app.netlify.com/drop) to publish your live website in 5 seconds.
* **GitHub Integration**: Link your repository to Netlify or Vercel. Pushing updates will automatically build and publish your latest storefront edits.
