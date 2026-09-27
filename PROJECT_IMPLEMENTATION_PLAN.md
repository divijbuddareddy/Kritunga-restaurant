# Kritunga Restaurant — Master Project Implementation Plan
**Master Source of Truth Specification & Architectural Blueprint**

---

## 1. Project Overview & Business Requirements

**Kritunga Restaurant** is a premier culinary destination celebrated for authentic, fiery, and rich Andhra & Rayalaseema cuisine. This project implements a high-end, responsive, static multi-page website built with strict fidelity to the **`Kritunga_Complete_Master_Website_Specification.pdf`**.

The primary business workflow is a pure client-side frontend ordering system that empowers customers to browse the authentic menu, manage a dynamic cart, enter fulfillment details, and transmit the complete, pre-formatted order directly to the restaurant's official **WhatsApp (+91 7619333335)**.

### 1.1 Master Business Information
* **Restaurant Name:** Kritunga Restaurant
* **Cuisine:** Authentic Andhra / Rayalaseema cuisine
* **Flagship Location:** 3, Outer Ring Road, near Tanishq Jewellery, Marathahalli, Bengaluru, Karnataka 560037, India
* **Primary Phone:** `+91 7619333335`
* **WhatsApp Link:** `https://wa.me/917619333335`
* **Primary Contact Rule:** Use `+91 7619333335` as the primary ordering/contact number for the project (noted for outlet verification before commercial publication).

### 1.2 Technology & Architecture Constraints
* **Stack:** Strictly **HTML5 + CSS3 + Vanilla JavaScript** only.
* **Strict Exclusions:** Absolutely NO React, Next.js, Vue, Angular, Bootstrap, Tailwind CSS, jQuery, Node.js runtime, external databases, or backend frameworks.
* **Database & Payment Policy:** Zero backend database. No fake checkout, fake payment gateways, or fake "Order Confirmed" screens.
* **Cart Lifetime & State:** Client-side JavaScript cart with `localStorage` synchronization to maintain state seamlessly across all 6 pages during the customer's visit.

---

## 2. Requirements Compliance Matrix

| Section / Requirement | Specification Rule | Implementation Plan |
| :--- | :--- | :--- |
| **Technology** | HTML5, CSS3, Vanilla JS only | Zero libraries, zero build steps, clean native DOM manipulation |
| **Color Palette** | 5 specific brand hex codes | Deep Burgundy `#6F1D1B`, Dark `#17120F`, Warm Gold `#C89B3C`, Cream `#F5EFE3`, Warm White `#FFFDF8` |
| **Visual Aesthetics** | Sophisticated, warm, authentic, cinematic, editorial | Editorial typography (*Cinzel* & *Plus Jakarta Sans*), rich dark gradients, food photography, glassmorphism |
| **Pages** | 6 specific HTML pages | `index.html`, `menu.html`, `about.html`, `locations.html`, `gallery.html`, `contact.html` |
| **Folder Structure** | Canonical directory layout | `css/style.css`, `js/script.js`, `images/` (`hero/`, `food/`, `restaurant/`, `gallery/`) |
| **Home Hero CTAs** | 3 specific action triggers | **EXPLORE MENU**, **CALL NOW**, **ORDER ON WHATSAPP** |
| **Home Structure** | Mandatory sections | Hero, Signature Dishes, Restaurant Story, Location, Gallery Preview, Final ORDER NOW CTA, Sticky Navigation |
| **Menu Items** | All 46 items across 9 categories | 6 Soups, 6 Starters, 5 Chicken, 8 Biryani, 6 Pulao, 6 Curries, 4 Rice, 4 Traditional, 1 Dessert with exact reference pricing |
| **Menu Functionality** | Search, categories, food cards | Real-time search, category filter pills, dietary badges, spice levels, "ADD TO CART" button on every card |
| **Cart Flow** | Add to Cart $\rightarrow$ Drawer $\rightarrow$ Details $\rightarrow$ WhatsApp | Instant counter badge update, toast feedback, full cart drawer, item increment/decrement, remove, clear, subtotal |
| **Customer Form** | Validation & conditional fields | Required Name, Required Phone, Order Type (Pickup/Delivery), Conditional Address (shown only if Delivery), Optional Note |
| **WhatsApp Message** | Exact template compliance (§7.5) | URL-encoded structured message with items, quantities, subtotal, and customer info |
| **Business Rule §7.6** | No fake confirmation | State *"Order request sent to WhatsApp — please wait for restaurant confirmation."* |
| **Reservation Flow** | WhatsApp table booking (§9) | Fields: Name, Phone, Date, Time, Number of Guests, Message $\rightarrow$ WhatsApp template to `+91 7619333335` |
| **Gallery & Lightbox** | Masonry + 4 categories + Lightbox | Categories: Food, Interiors, Signature Dishes, Dining Experience. Modal with Prev, Next, Close, and Esc key support |
| **Mobile Experience** | 320px, 375px, 390px, 430px | Zero overflow, one-handed cart operation, mobile nav, floating Call & WhatsApp buttons, sticky cart trigger |
| **SEO & A11y** | Semantic markup, metadata & schema | Unique title/meta per page, OpenGraph, JSON-LD `Restaurant` schema, WCAG 2.1 AA contrast & focus states |

---

## 3. Canonical Folder & File Architecture

```
kritunga-restaurant/
├── index.html                  # Home (Hero, Signature Dishes, Story, Location, Gallery, Order CTA)
├── menu.html                   # Menu (Category filters, Search, 46 Food Cards, Cart Engine)
├── about.html                  # Our Story (Authentic Rayalaseema & Andhra heritage, spice legacy)
├── locations.html              # Locations (Marathahalli address, timings, direct call, directions map)
├── gallery.html                # Gallery (Masonry grid, 4 category filters, JS Lightbox)
├── contact.html                # Contact & Table Reservation (Direct contacts & WhatsApp booking form)
├── css/
│   └── style.css               # Complete stylesheet: Design tokens, layout, components, cart drawer, modals, responsive breakpoints
├── js/
│   └── script.js               # Comprehensive script: Menu dataset (46 items), Cart state manager, WhatsApp order compiler, Lightbox, Reservation handler, Sticky nav, Mobile drawer
└── images/
    ├── hero/                   # High-res hero banners & dark overlays
    ├── food/                   # Authentic food dish imagery (Biryanis, Pulaos, Curries, Starters)
    ├── restaurant/             # Marathahalli ambiance, interiors, traditional clay pot settings
    └── gallery/                # Categorized photo assets (Food, Interiors, Signature, Dining)
```

---

## 4. Page-by-Page Architectural Specification

### 4.1 `index.html` (Home Page)
* **Header / Navigation:** Sticky header with transparent-to-solid dark burgundy/charcoal transition on scroll, brand logo, navigation links, and visible live cart counter badge.
* **Cinematic Hero:** Headline *"AUTHENTIC RAYALASEEMA FLAVOURS"*, atmospheric dark background overlay, subtitle highlighting the fiery culinary heritage.
* **3 Primary Hero CTAs:**
  1. `EXPLORE MENU` (links to `menu.html`)
  2. `CALL NOW` (`tel:+917619333335`)
  3. `ORDER ON WHATSAPP` (`https://wa.me/917619333335`)
* **Signature Dishes Section:** Curated showcase of flagship items (Natukodi Pulao, Gongura Mutton Biryani, Andhra Chicken Fry, Ragi Mudde with Chicken Sankati) with quick "Add to Cart" triggers.
* **Restaurant Story Section:** Brief editorial introduction to Rayalaseema's stone-ground spices and clay pot traditions with link to `about.html`.
* **Location Section:** Marathahalli flagship highlights, operating hours, quick address, and map directions button.
* **Gallery Preview Section:** High-impact visual preview grid leading to `gallery.html`.
* **Final High-Impact CTA Banner:** Prominent *"Taste the Legend — Order on WhatsApp Now"* banner leading directly to the ordering workflow.
* **Footer:** Comprehensive business details, phone, WhatsApp link, address, opening timings, and social/legal links.

### 4.2 `menu.html` (Menu & Ordering Engine)
* **Menu Category Sticky Filter Bar:** All 9 categories:
  `All` | `Soups` | `Starters` | `Chicken` | `Biryani` | `Pulao` | `Curries` | `Rice` | `Traditional` | `Dessert`
* **Real-time Live Search & Dietary Filters:**
  * Instant search bar (filters by dish name or description).
  * Dietary toggles (`All`, `Veg Only`, `Non-Veg Only`).
* **Food Cards Grid:**
  * Food image container with subtle hover zoom.
  * Veg/Non-Veg indicator icon (Green square/dot or Red triangle/dot).
  * Dish name and detailed description.
  * Price in Indian Rupees (`₹XXX`).
  * Prominent **"ADD TO CART"** button with immediate feedback.
* **Floating Mobile Cart Button:** Sticky bottom/corner button displaying total items and subtotal for instant one-tap access.
* **Full Cart Drawer & Modal:** Integrated slide-over drawer (detailed in §6).

### 4.3 `about.html` (Our Story)
* **Editorial Heritage Narrative:** The roots of Rayalaseema and Andhra culinary artistry.
* **Culinary Philosophy:** The secret of clay pot cooking, slow fire wood-smoke infusion, and indigenous Guntur chillies and Gongura leaves.
* **Quality Commitment:** Uncompromising authenticity, traditional stone-ground masalas, and warm South Indian hospitality.

### 4.4 `locations.html` (Locations & Outlet Details)
* **Outlet Details Card:**
  * **Address:** 3, Outer Ring Road, near Tanishq Jewellery, Marathahalli, Bengaluru, Karnataka 560037, India
  * **Phone:** `+91 7619333335`
  * **Timings:** Lunch: 11:30 AM – 3:30 PM | Dinner: 7:00 PM – 11:00 PM (All 7 days)
* **Action CTAs:** "Call Outlet", "Chat on WhatsApp", and "Get Directions".
* **Interactive Map:** Embedded Google Map location with directions route helper.

### 4.5 `gallery.html` (Visual Gallery & Lightbox)
* **Category Filter Pills:**
  * `All`
  * `Food`
  * `Interiors`
  * `Signature Dishes`
  * `Dining Experience`
* **Responsive Masonry Grid:** Fluid responsive layout displaying rich photography with hover caption overlay.
* **Vanilla JavaScript Lightbox:**
  * Full-screen dark modal.
  * High-resolution image view with title/category caption.
  * Controls: Previous (`‹`), Next (`›`), and Close (`✕`).
  * Keyboard navigation: Arrow keys for Next/Prev, `Escape` key to close.

### 4.6 `contact.html` (Contact & Table Reservation)
* **Direct Contact Section:** Direct call card, WhatsApp inquiry card, and location summary.
* **Table Reservation Form:**
  * Input fields: **Name** (required), **Phone** (required), **Date** (required), **Time** (required), **Number of Guests** (required), and **Message / Special Request** (optional).
  * Form-to-WhatsApp booking generator: Validates fields and generates an encoded WhatsApp message to `+91 7619333335`.
  * Explicit confirmation disclaimer: States clearly that reservation availability is subject to manual confirmation by the restaurant.

---

## 5. Master Menu Reference Dataset (All 46 Items)

The complete dataset of 46 items strictly conforms to Pages 5 & 6 of the Master Specification:

| # | Category | Dish Name | Price (₹) | Type |
| :- | :--- | :--- | :-: | :--- |
| 1 | **Soups** | Tomato Soup | ₹169 | Veg |
| 2 | **Soups** | Veg Manchow Soup | ₹169 | Veg |
| 3 | **Soups** | Chicken Manchow Soup | ₹199 | Non-Veg |
| 4 | **Soups** | Chicken Hot & Sour Soup | ₹199 | Non-Veg |
| 5 | **Soups** | Mutton Bone Soup | ₹209 | Non-Veg |
| 6 | **Soups** | Paya Soup | ₹209 | Non-Veg |
| 7 | **Starters** | Baby Corn Chilli | ₹339 | Veg |
| 8 | **Starters** | Baby Corn Manchurian | ₹339 | Veg |
| 9 | **Starters** | Crispy Corn | ₹339 | Veg |
| 10 | **Starters** | Mushroom Masala | ₹339 | Veg |
| 11 | **Starters** | Paneer Butter Masala | ₹369 | Veg |
| 12 | **Starters** | Egg Pakodi | ₹349 | Non-Veg |
| 13 | **Chicken** | Chicken Tandoori | ₹359 | Non-Veg |
| 14 | **Chicken** | Chicken Tikka | ₹429 | Non-Veg |
| 15 | **Chicken** | Andhra Chicken Fry | ₹429 | Non-Veg |
| 16 | **Chicken** | Chicken Malai Kebab | ₹429 | Non-Veg |
| 17 | **Chicken** | Village Wings | ₹429 | Non-Veg |
| 18 | **Biryani** | Veg Biryani | ₹289 | Veg |
| 19 | **Biryani** | Gongura Veg Biryani | ₹289 | Veg |
| 20 | **Biryani** | Paneer Biryani | ₹309 | Veg |
| 21 | **Biryani** | Mini Veg Biryani | ₹199 | Veg |
| 22 | **Biryani** | Mini Chicken Biryani | ₹229 | Non-Veg |
| 23 | **Biryani** | Spl Chicken Biryani Family Pack | ₹759 | Non-Veg |
| 24 | **Biryani** | Gongura Mutton Biryani | ₹499 | Non-Veg |
| 25 | **Biryani** | Gongura Prawns Biryani | ₹459 | Non-Veg |
| 26 | **Pulao** | Veg Pulao | ₹319 | Veg |
| 27 | **Pulao** | Egg Pulao | ₹309 | Non-Veg |
| 28 | **Pulao** | Chicken Pulao | ₹379 | Non-Veg |
| 29 | **Pulao** | Gongura Chicken Pulao | ₹399 | Non-Veg |
| 30 | **Pulao** | Natukodi Pulao | ₹429 | Non-Veg |
| 31 | **Pulao** | Mutton Pulao | ₹499 | Non-Veg |
| 32 | **Curries** | Tomato Curry | ₹249 | Veg |
| 33 | **Curries** | Kritunga Chicken Curry | ₹389 | Non-Veg |
| 34 | **Curries** | Kritunga Mutton Curry | ₹489 | Non-Veg |
| 35 | **Curries** | Palak Chicken | ₹389 | Non-Veg |
| 36 | **Curries** | Prawns Curry | ₹499 | Non-Veg |
| 37 | **Curries** | Mutton Kheema Curry | ₹499 | Non-Veg |
| 38 | **Rice** | Curd Rice | ₹169 | Veg |
| 39 | **Rice** | Ghee Rice | ₹299 | Veg |
| 40 | **Rice** | Chicken Fried Rice | ₹329 | Non-Veg |
| 41 | **Rice** | Egg Fried Rice | ₹299 | Non-Veg |
| 42 | **Traditional** | Phulka | ₹20 | Veg |
| 43 | **Traditional** | Ragi Mudde | ₹109 | Veg |
| 44 | **Traditional** | Veg Sankati | ₹239 | Veg |
| 45 | **Traditional** | Chicken Sankati | ₹339 | Non-Veg |
| 46 | **Dessert** | Gulab Jamun | ₹119 | Veg |

---

## 6. Complete Ordering & WhatsApp Architecture

### 6.1 State Management & Cart Flow
1. **Add to Cart:** User clicks "ADD TO CART" on any dish card.
2. **Instant Feedback:** Button briefly turns into "Added ✓", floating toast notification appears ("*Added [Dish Name] to cart*"), and navigation cart badge updates with an animated pulse.
3. **Cart Drawer Interface:**
   * Accessible via sticky header cart icon or floating mobile cart button.
   * Displays dish image, item name, unit price, quantity controls (`+` and `−`), item line total, and individual remove button (`✕` / trash).
   * Bottom bar displays "Clear Cart" button, Total Items count, and calculated Subtotal in `₹`.
   * Prominent **"PROCEED TO ORDER"** button transitions user to Customer Details.

### 6.2 Customer Details Form (§7.3)
* **Customer Name:** Input field (Required).
* **Phone Number:** 10-digit Indian phone validation (Required).
* **Order Type:** Radio/segmented selector between **Pickup** and **Delivery**.
* **Delivery Address:** Multi-line text field displayed and required **only** when *Delivery* is selected (smoothly hidden for *Pickup*).
* **Customer Note:** Optional special instructions (e.g., "Please pack the order carefully", spice level adjustments).
* **Validation:** Form validates all required inputs before generating the WhatsApp order. If invalid, field errors are highlighted.

### 6.3 Exact WhatsApp Message Generation (§7.4 & §7.5)
Upon clicking **"PROCEED TO WHATSAPP"**, the system compiles the exact message format required by the specification:

```text
Hello Kritunga Restaurant,

I would like to place an order through the website.

Customer Details
Name: Divij
Phone: 9876543210
Order Type: Pickup

Order
Chicken Dum Biryani × 2 — ₹798
Gongura Chicken Biryani × 1 — ₹419
Gulab Jamun × 2 — ₹238

Subtotal: ₹1,455

Customer Note: Please pack the order carefully.

Please confirm the order and availability.

Thank you.
```

*(For delivery, `Order Type: Delivery` and `Address: <Customer Address>` are included).*

### 6.4 WhatsApp Dispatch & Rule §7.6 Compliance
* WhatsApp is opened via `https://wa.me/917619333335?text=` + `encodeURIComponent(messageText)` in a new browser tab/window (`target="_blank"`).
* **Strict Business Rule Compliance:** The system **never** claims order payment or confirmed placement. A prominent visual status banner/toast confirms:
  > *"Order request sent to WhatsApp — please wait for restaurant confirmation."*

---

## 7. Table Reservation Flow (§9)

* Located on `contact.html` and linked from navigation.
* Fields: Name, Phone, Date, Time, Number of Guests, Message / Requests.
* Submits via WhatsApp to `+91 7619333335` with structured template:
  ```text
  Hello Kritunga Restaurant,

  I would like to request a table reservation.

  Reservation Details
  Name: <Customer Name>
  Phone: <Phone Number>
  Date: <YYYY-MM-DD>
  Time: <HH:MM>
  Number of Guests: <Count>
  Special Request: <Optional Note>

  Please confirm table availability.

  Thank you.
  ```
* Clear UI disclaimer that reservations are confirmed only after restaurant acknowledgment.

---

## 8. Design Tokens & CSS Architecture

### 8.1 Master Color Palette
```css
:root {
  --color-burgundy: #6F1D1B;
  --color-burgundy-dark: #4A1211;
  --color-burgundy-light: #8E2724;
  --color-dark: #17120F;
  --color-dark-surface: #201A16;
  --color-dark-card: #28211C;
  --color-warm-gold: #C89B3C;
  --color-gold-light: #E0BA65;
  --color-gold-glow: rgba(200, 155, 60, 0.25);
  --color-cream: #F5EFE3;
  --color-cream-muted: #D8CEBC;
  --color-warm-white: #FFFDF8;
  --color-veg: #2E7D32;
  --color-nonveg: #C62828;

  --font-heading: 'Cinzel', 'Playfair Display', serif;
  --font-body: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;

  --container-max: 1240px;
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-full: 9999px;
  
  --shadow-dark: 0 8px 30px rgba(0, 0, 0, 0.5);
  --shadow-gold: 0 4px 20px rgba(200, 155, 60, 0.25);
  --transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## 9. Mobile Experience, Accessibility & SEO Strategy

### 9.1 Mobile Experience (320px, 375px, 390px, 430px)
* Zero horizontal overflow across all mobile viewports.
* Floating bottom action bar on mobile with **Direct Call** and **WhatsApp Chat** buttons.
* Floating accessible cart pill button with live badge counter and total amount.
* One-handed drawer interaction with smooth swipe/tap dismissal.

### 9.2 Accessibility (WCAG 2.1 AA)
* Explicit `<label>` elements for all form fields.
* High contrast ratio ($\ge 4.5:1$) for all body and heading text over dark backgrounds.
* Focus indicators for keyboard-only navigation.
* Full keyboard accessibility for modal drawers and lightbox (Escape key to dismiss, arrow keys for lightbox navigation).
* `aria-label` attributes on all icon buttons.

### 9.3 SEO & Schema.org Structured Data
* Unique, keyword-rich `<title>` and `<meta name="description">` on all 6 pages.
* OpenGraph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`).
* Complete **JSON-LD Schema (`Restaurant`)** embedded in all pages:
  ```json
  {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Kritunga Restaurant",
    "image": "images/hero/hero-bg.jpg",
    "telephone": "+917619333335",
    "url": "https://kritunga.com",
    "servesCuisine": "Andhra, Rayalaseema, South Indian",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3, Outer Ring Road, near Tanishq Jewellery, Marathahalli",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560037",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "11:30",
        "closes": "15:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "19:00",
        "closes": "23:00"
      }
    ],
    "hasMenu": "menu.html"
  }
  ```

---

## 10. Comprehensive Quality Assurance Checklist

- [ ] **Cart Operations & Calculations:**
  - [ ] Add single item $\rightarrow$ Cart count increments by 1, toast notification displays.
  - [ ] Add multiple different items $\rightarrow$ Correctly listed with unit price and line totals.
  - [ ] Add same item multiple times $\rightarrow$ Quantity increments without duplicate rows.
  - [ ] Increase (+) and decrease (-) quantity $\rightarrow$ Subtotal and item total recalculate instantly.
  - [ ] Decrement quantity to 0 / Remove item $\rightarrow$ Item removed from cart.
  - [ ] Clear cart $\rightarrow$ Cart empties and displays empty state UI.
  - [ ] Multi-page persistence $\rightarrow$ Cart items and counts persist across page navigation via `localStorage`.
- [ ] **Customer Details & Validation:**
  - [ ] Empty name or phone displays validation error and halts WhatsApp dispatch.
  - [ ] Selecting "Delivery" reveals the Address field and makes it mandatory.
  - [ ] Selecting "Pickup" hides the Address field.
  - [ ] Customer note is properly captured and appended to WhatsApp message.
- [ ] **WhatsApp Ordering Message Compliance:**
  - [ ] Correct destination number (`+91 7619333335`).
  - [ ] Formatted with header, Customer Details, item list (`Dish × Qty — ₹Total`), Subtotal, and Note.
  - [ ] Characters safely encoded via `encodeURIComponent()`.
  - [ ] Opened in new tab/window where supported.
  - [ ] Displays confirmation toast: *"Order request sent to WhatsApp — please wait for restaurant confirmation."*
- [ ] **Table Reservation Flow:**
  - [ ] Form inputs validated (Name, Phone, Date, Time, Guests).
  - [ ] Formats structured WhatsApp reservation request to `+91 7619333335`.
  - [ ] Shows clear disclaimer that reservation is pending manual restaurant confirmation.
- [ ] **Gallery & Lightbox:**
  - [ ] Category tabs (Food, Interiors, Signature Dishes, Dining Experience) filter images correctly.
  - [ ] Clicking an image opens full-screen lightbox with caption.
  - [ ] Lightbox Next (`›`), Previous (`‹`), Close (`✕`), and keyboard `Esc`/Arrow keys work seamlessly.
- [ ] **Mobile & Cross-Device Polish:**
  - [ ] Tested at 320px, 375px, 390px, 430px, 768px, 1200px+ viewports with zero horizontal overflow.
  - [ ] Mobile navigation drawer opens and closes smoothly.
  - [ ] Sticky floating Call and WhatsApp buttons visible and functional on mobile.
  - [ ] Touch targets $\ge 48\text{px}$ for one-handed operation.
- [ ] **Code Quality & Performance:**
  - [ ] Pure HTML5, CSS3, and Vanilla JS with zero external framework dependencies.
  - [ ] Zero JavaScript console errors.
  - [ ] All images have descriptive `alt` tags and `loading="lazy"`.

---

## 11. Phased Execution Plan

1. **Phase 1: Project Setup & Global Assets**
   * Establish canonical directory structure (`css/`, `js/`, `images/hero/`, `images/food/`, `images/restaurant/`, `images/gallery/`).
   * Curate and generate rich, high-resolution imagery for hero sections, dishes, restaurant atmosphere, and gallery.
   * Write unified `css/style.css` containing design tokens, reset, typography, layouts, components, cart drawer, modals, and responsive breakpoints.
2. **Phase 2: Core JavaScript Engine (`js/script.js`)**
   * Embed complete 46-item menu database with categories, prices, veg/non-veg tags, and descriptions.
   * Implement reactive Cart State Manager with `localStorage` persistence.
   * Implement Customer Details validator and WhatsApp Order Message compiler (§7.5).
   * Implement Table Reservation validator and WhatsApp message compiler (§9).
   * Implement Gallery Lightbox with keyboard and touch navigation (§10).
   * Implement sticky navigation scroll transitions, mobile navigation drawer, and floating action buttons.
3. **Phase 3: Page Construction**
   * Build `index.html` (Hero with 3 CTAs, Signature Dishes, Story, Locations, Gallery preview, Final CTA).
   * Build `menu.html` (Category filters, search, 46 food cards with Add-to-Cart, Cart Drawer).
   * Build `about.html` (Authentic Rayalaseema editorial story, spices & heritage).
   * Build `locations.html` (Marathahalli flagship details, hours, call CTA, interactive map).
   * Build `gallery.html` (Categorized masonry gallery with full lightbox integration).
   * Build `contact.html` (Direct contacts, map, and WhatsApp table reservation flow).
4. **Phase 4: Multi-Device Testing & Verification**
   * Verify all 46 menu items, add-to-cart operations, quantity updates, subtotals, and cart clearing.
   * Test WhatsApp URL compilation for both Pickup and Delivery scenarios.
   * Test WhatsApp Reservation request compilation.
   * Validate responsive layouts on 320px, 375px, 390px, 430px, 768px, and desktop viewports.
   * Confirm zero console errors and full accessibility compliance.
