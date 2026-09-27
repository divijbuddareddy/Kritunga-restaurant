/**
 * KRITUNGA RESTAURANT — MASTER JAVASCRIPT
 * Pure Vanilla JavaScript (ES6+) — Zero Frameworks
 * Authentic Andhra / Rayalaseema Cuisine | WhatsApp Ordering Engine
 */

'use strict';

/* ==========================================================================
   1. MASTER MENU DATABASE (All 46 items strictly from Specification PDF)
   ========================================================================== */
const KRITUNGA_MENU = [
  // --- SOUPS (6 items) ---
  {
    id: "soup-1",
    name: "Tomato Soup",
    category: "Soups",
    price: 169,
    isVeg: true,
    spice: 1,
    desc: "Tangy country tomato broth infused with South Indian tempered spices and fresh coriander.",
    img: "images/menu/soups/tomato-soup.webp"
  },
  {
    id: "soup-2",
    name: "Veg Manchow Soup",
    category: "Soups",
    price: 169,
    isVeg: true,
    spice: 2,
    desc: "Classic spicy vegetable soup simmered with garlic, ginger, and crispy fried noodles.",
    img: "images/menu/soups/veg-manchow-soup.webp"
  },
  {
    id: "soup-3",
    name: "Chicken Manchow Soup",
    category: "Soups",
    price: 199,
    isVeg: false,
    spice: 2,
    desc: "Robust shredded chicken broth packed with fresh garlic, scallions, and fried noodles.",
    img: "images/menu/soups/chicken-manchow-soup.webp"
  },
  {
    id: "soup-4",
    name: "Chicken Hot & Sour Soup",
    category: "Soups",
    price: 199,
    isVeg: false,
    spice: 3,
    desc: "Fiery and tangy shredded chicken soup with Rayalaseema crushed pepper warmth.",
    img: "images/menu/soups/chicken-hot-and-sour-soup.webp"
  },
  {
    id: "soup-5",
    name: "Mutton Bone Soup",
    category: "Soups",
    price: 209,
    isVeg: false,
    spice: 3,
    desc: "Signature slow-simmered rich mutton bone marrow extract brewed with roasted spices.",
    img: "images/menu/soups/mutton-bone-soup.webp"
  },
  {
    id: "soup-6",
    name: "Paya Soup",
    category: "Soups",
    price: 209,
    isVeg: false,
    spice: 3,
    desc: "Traditional spiced lamb trotters broth slow-brewed overnight with stone-ground herbs.",
    img: "images/menu/soups/paya-soup.webp"
  },

  // --- STARTERS (6 items) ---
  {
    id: "star-1",
    name: "Baby Corn Chilli",
    category: "Starters",
    price: 339,
    isVeg: true,
    spice: 2,
    desc: "Crisp tender baby corn tossed with slit green chillies, garlic, and fresh curry leaves.",
    img: "images/menu/starters/baby-corn-chilli.webp"
  },
  {
    id: "star-2",
    name: "Baby Corn Manchurian",
    category: "Starters",
    price: 339,
    isVeg: true,
    spice: 2,
    desc: "Golden-fried baby corn fritters tossed in a savoury and tangy Indo-Chinese spice blend.",
    img: "images/menu/starters/baby-corn-manchurian.webp"
  },
  {
    id: "star-3",
    name: "Crispy Corn",
    category: "Starters",
    price: 339,
    isVeg: true,
    spice: 2,
    desc: "Crunchy batter-fried sweet corn kernels tossed with onions, chaat masala, and pepper.",
    img: "images/menu/starters/crispy-corn.webp"
  },
  {
    id: "star-4",
    name: "Mushroom Masala",
    category: "Starters",
    price: 339,
    isVeg: true,
    spice: 2,
    desc: "Fresh button mushrooms pan-roasted in a fragrant semi-dry Andhra masala.",
    img: "images/menu/starters/mushroom-masala.webp"
  },
  {
    id: "star-5",
    name: "Paneer Butter Masala",
    category: "Starters",
    price: 369,
    isVeg: true,
    spice: 1,
    desc: "Tender cottage cheese cubes tossed with rich creamy butter sauce and mild spices.",
    img: "images/menu/starters/paneer-butter-masala.webp"
  },
  {
    id: "star-6",
    name: "Egg Pakodi",
    category: "Starters",
    price: 349,
    isVeg: false,
    spice: 2,
    desc: "Boiled egg halves coated in spiced gram flour batter and fried until crisp and golden.",
    img: "images/menu/starters/egg-pakodi.webp"
  },

  // --- CHICKEN (5 items) ---
  {
    id: "chk-1",
    name: "Chicken Tandoori",
    category: "Chicken",
    price: 359,
    isVeg: false,
    spice: 2,
    desc: "Succulent bone-in chicken marinated in spiced yoghurt and roasted in the clay tandoor.",
    img: "images/menu/chicken/chicken-tandoori.webp"
  },
  {
    id: "chk-2",
    name: "Chicken Tikka",
    category: "Chicken",
    price: 429,
    isVeg: false,
    spice: 2,
    desc: "Smoky boneless chicken morsels infused with mustard oil, fenugreek, and grilled charred.",
    img: "images/menu/chicken/chicken-tikka.webp"
  },
  {
    id: "chk-3",
    name: "Andhra Chicken Fry",
    category: "Chicken",
    price: 429,
    isVeg: false,
    spice: 3,
    desc: "The legendary Rayalaseema chicken roast dry-cooked with Guntur chillies and curry leaves.",
    img: "images/menu/chicken/andhra-chicken-fry.webp"
  },
  {
    id: "chk-4",
    name: "Chicken Malai Kebab",
    category: "Chicken",
    price: 429,
    isVeg: false,
    spice: 1,
    desc: "Melt-in-mouth chicken supreme marinated with rich clotted cream, cardamom, and cheese.",
    img: "images/menu/chicken/chicken-malai-kebab.webp"
  },
  {
    id: "chk-5",
    name: "Village Wings",
    category: "Chicken",
    price: 429,
    isVeg: false,
    spice: 3,
    desc: "Crispy country-style chicken wings glazed with fiery house-ground Rayalaseema pepper glaze.",
    img: "images/menu/chicken/village-wings.webp"
  },

  // --- BIRYANI (8 items) ---
  {
    id: "bir-1",
    name: "Veg Biryani",
    category: "Biryani",
    price: 289,
    isVeg: true,
    spice: 2,
    desc: "Long-grain fragrant basmati rice slow dum-cooked with garden vegetables, saffron and mint.",
    img: "images/menu/biryani/veg-biryani.webp"
  },
  {
    id: "bir-2",
    name: "Gongura Veg Biryani",
    category: "Biryani",
    price: 289,
    isVeg: true,
    spice: 3,
    desc: "Signature dum biryani infused with sour and spicy Andhra Gongura (red sorrel) leaf paste.",
    img: "images/menu/biryani/gongura-veg-biryani.webp"
  },
  {
    id: "bir-3",
    name: "Paneer Biryani",
    category: "Biryani",
    price: 309,
    isVeg: true,
    spice: 2,
    desc: "Aromatic dum-cooked basmati rice layered with soft marinated cottage cheese and ghee.",
    img: "images/menu/biryani/paneer-biryani.webp"
  },
  {
    id: "bir-4",
    name: "Mini Veg Biryani",
    category: "Biryani",
    price: 199,
    isVeg: true,
    spice: 2,
    desc: "Single-serving portion of rich vegetable dum biryani, served with raita and mirchi ka salan.",
    img: "images/menu/biryani/mini-veg-biryani.webp"
  },
  {
    id: "bir-5",
    name: "Mini Chicken Biryani",
    category: "Biryani",
    price: 229,
    isVeg: false,
    spice: 3,
    desc: "Single-serving portion of traditional spiced Andhra chicken dum biryani.",
    img: "images/menu/biryani/mini-chicken-biryani.webp"
  },
  {
    id: "bir-6",
    name: "Spl Chicken Biryani Family Pack",
    category: "Biryani",
    price: 759,
    isVeg: false,
    spice: 3,
    desc: "Generous royal feast pack of special Kritunga chicken dum biryani, boiled eggs and salan.",
    img: "images/menu/biryani/spl-chicken-biryani-family-pack.webp"
  },
  {
    id: "bir-7",
    name: "Gongura Mutton Biryani",
    category: "Biryani",
    price: 499,
    isVeg: false,
    spice: 3,
    desc: "Succulent bone-in mutton slow dum-cooked with fiery Gongura leaves and pure desi ghee.",
    img: "images/menu/biryani/gongura-mutton-biryani.webp"
  },
  {
    id: "bir-8",
    name: "Gongura Prawns Biryani",
    category: "Biryani",
    price: 459,
    isVeg: false,
    spice: 3,
    desc: "Fresh coastal prawns simmered with tangy Gongura paste and layered with fragrant basmati.",
    img: "images/menu/biryani/gongura-prawns-biryani.webp"
  },

  // --- PULAO (6 items) ---
  {
    id: "pul-1",
    name: "Veg Pulao",
    category: "Pulao",
    price: 319,
    isVeg: true,
    spice: 2,
    desc: "Delicately spiced basmati rice tossed with fresh carrots, beans, peas, and roasted cashews.",
    img: "images/menu/pulao/veg-pulao.webp"
  },
  {
    id: "pul-2",
    name: "Egg Pulao",
    category: "Pulao",
    price: 309,
    isVeg: false,
    spice: 2,
    desc: "Aromatic ghee rice tossed with golden fried spiced eggs, browned onions and cilantro.",
    img: "images/menu/pulao/egg-pulao.webp"
  },
  {
    id: "pul-3",
    name: "Chicken Pulao",
    category: "Pulao",
    price: 379,
    isVeg: false,
    spice: 3,
    desc: "Homestyle Andhra spiced chicken pulao prepared with whole spices and country ghee.",
    img: "images/menu/pulao/chicken-pulao.webp"
  },
  {
    id: "pul-4",
    name: "Gongura Chicken Pulao",
    category: "Pulao",
    price: 399,
    isVeg: false,
    spice: 3,
    desc: "Rayalaseema speciality pulao enriched with tangy red sorrel leaves and juicy chicken.",
    img: "images/menu/pulao/gongura-chicken-pulao.webp"
  },
  {
    id: "pul-5",
    name: "Natukodi Pulao",
    category: "Pulao",
    price: 429,
    isVeg: false,
    spice: 3,
    desc: "Authentic free-range country chicken (Natukodi) pulao bursting with rustic flavours.",
    img: "images/menu/pulao/natukodi-pulao.webp"
  },
  {
    id: "pul-6",
    name: "Mutton Pulao",
    category: "Pulao",
    price: 499,
    isVeg: false,
    spice: 3,
    desc: "Rich and tender mutton cuts tossed with ghee-roasted short grain rice and whole spices.",
    img: "images/menu/pulao/mutton-pulao.webp"
  },

  // --- CURRIES (6 items) ---
  {
    id: "cur-1",
    name: "Tomato Curry",
    category: "Curries",
    price: 249,
    isVeg: true,
    spice: 2,
    desc: "Rustic country tomato gravy tempered with mustard seeds, curry leaves, and cumin.",
    img: "images/menu/curries/tomato-curry.webp"
  },
  {
    id: "cur-2",
    name: "Kritunga Chicken Curry",
    category: "Curries",
    price: 389,
    isVeg: false,
    spice: 3,
    desc: "House special fiery chicken curry prepared in traditional thick Rayalaseema gravy.",
    img: "images/menu/curries/kritunga-chicken-curry.webp"
  },
  {
    id: "cur-3",
    name: "Kritunga Mutton Curry",
    category: "Curries",
    price: 489,
    isVeg: false,
    spice: 3,
    desc: "Signature slow-cooked mutton in rich, spicy stone-ground masala and cold-pressed oil.",
    img: "images/menu/curries/kritunga-mutton-curry.webp"
  },
  {
    id: "cur-4",
    name: "Palak Chicken",
    category: "Curries",
    price: 389,
    isVeg: false,
    spice: 2,
    desc: "Juicy chicken cuts simmered in a smooth, spiced farm-fresh spinach puree.",
    img: "images/menu/curries/palak-chicken.webp"
  },
  {
    id: "cur-5",
    name: "Prawns Curry",
    category: "Curries",
    price: 499,
    isVeg: false,
    spice: 3,
    desc: "Fresh coastal prawns simmered in an aromatic spicy coconut, shallots, and tomato gravy.",
    img: "images/menu/curries/prawns-curry.webp"
  },
  {
    id: "cur-6",
    name: "Mutton Kheema Curry",
    category: "Curries",
    price: 499,
    isVeg: false,
    spice: 3,
    desc: "Finely hand-minced tender mutton cooked with green peas, ginger, garlic, and rich spices.",
    img: "images/menu/curries/mutton-kheema-curry.webp"
  },

  // --- RICE (4 items) ---
  {
    id: "rice-1",
    name: "Curd Rice",
    category: "Rice",
    price: 169,
    isVeg: true,
    spice: 0,
    desc: "Comforting tempered yoghurt rice with mustard seeds, ginger, curry leaves, and pomegranate.",
    img: "images/menu/rice/curd-rice.webp"
  },
  {
    id: "rice-2",
    name: "Ghee Rice",
    category: "Rice",
    price: 299,
    isVeg: true,
    spice: 1,
    desc: "Aromatic basmati rice cooked gently in pure desi ghee with roasted cashews and cloves.",
    img: "images/menu/rice/ghee-rice.webp"
  },
  {
    id: "rice-3",
    name: "Chicken Fried Rice",
    category: "Rice",
    price: 329,
    isVeg: false,
    spice: 2,
    desc: "Wok-fried fluffy rice tossed with succulent shredded chicken, eggs, and garden veggies.",
    img: "images/menu/rice/chicken-fried-rice.webp"
  },
  {
    id: "rice-4",
    name: "Egg Fried Rice",
    category: "Rice",
    price: 299,
    isVeg: false,
    spice: 2,
    desc: "Classic stir-fried rice loaded with scrambled farm eggs, spring onions, and black pepper.",
    img: "images/menu/rice/egg-fried-rice.webp"
  },

  // --- TRADITIONAL SPECIALITIES (4 items) ---
  {
    id: "trad-1",
    name: "Phulka",
    category: "Traditional",
    price: 20,
    isVeg: true,
    spice: 0,
    desc: "Soft, whole wheat Indian flatbread puffed to perfection on an open flame.",
    img: "images/menu/traditional/phulka.webp"
  },
  {
    id: "trad-2",
    name: "Ragi Mudde",
    category: "Traditional",
    price: 109,
    isVeg: true,
    spice: 0,
    desc: "Wholesome Rayalaseema finger-millet ball, the timeless rural nutritious staple.",
    img: "images/menu/traditional/ragi-mudde.webp"
  },
  {
    id: "trad-3",
    name: "Veg Sankati",
    category: "Traditional",
    price: 239,
    isVeg: true,
    spice: 1,
    desc: "Traditional crushed rice and millet porridge served warm with melted country ghee.",
    img: "images/menu/traditional/veg-sankati.webp"
  },
  {
    id: "trad-4",
    name: "Chicken Sankati",
    category: "Traditional",
    price: 339,
    isVeg: false,
    spice: 3,
    desc: "Authentic hot Ragi Sankati paired with rich, spicy Andhra country chicken gravy.",
    img: "images/menu/traditional/chicken-sankati.webp"
  },

  // --- DESSERT (1 item) ---
  {
    id: "des-1",
    name: "Gulab Jamun",
    category: "Dessert",
    price: 119,
    isVeg: true,
    spice: 0,
    desc: "Soft golden milk dumplings soaked in aromatic cardamom and saffron sugar syrup.",
    img: "images/menu/desserts/gulab-jamun.webp"
  }
];

/* ==========================================================================
   2. GALLERY ASSETS DATABASE
   ========================================================================== */
const KRITUNGA_GALLERY = [
  { id: "g-1", title: "Signature Gongura Chicken Pulao", category: "Signature Dishes", img: "images/menu/pulao/gongura-chicken-pulao.webp" },
  { id: "g-2", title: "Authentic Natukodi Pulao", category: "Signature Dishes", img: "images/menu/pulao/natukodi-pulao.webp" },
  { id: "g-3", title: "Royal Mutton Pulao", category: "Signature Dishes", img: "images/menu/pulao/mutton-pulao.webp" },
  { id: "g-4", title: "Fiery Andhra Chicken Fry", category: "Food", img: "images/menu/chicken/andhra-chicken-fry.webp" },
  { id: "g-5", title: "Traditional Ragi Mudde Feast", category: "Signature Dishes", img: "images/menu/traditional/ragi-mudde.webp" },
  { id: "g-6", title: "Rayalaseema Chicken Sankati", category: "Signature Dishes", img: "images/menu/traditional/chicken-sankati.webp" },
  { id: "g-7", title: "Silken Chicken Malai Kebab", category: "Food", img: "images/menu/chicken/chicken-malai-kebab.webp" },
  { id: "g-8", title: "Charred Chicken Tikka", category: "Food", img: "images/menu/chicken/chicken-tikka.webp" },
  { id: "g-9", title: "Kritunga Mutton Curry", category: "Food", img: "images/menu/curries/kritunga-mutton-curry.webp" },
  { id: "g-10", title: "Palak Chicken Curry", category: "Food", img: "images/menu/curries/palak-chicken.webp" },
  { id: "g-11", title: "Spicy Mutton Kheema Curry", category: "Food", img: "images/menu/curries/mutton-kheema-curry.webp" },
  { id: "g-12", title: "Rich Mutton Bone Simmering Soup", category: "Food", img: "images/menu/soups/mutton-bone-soup.webp" },
  { id: "g-13", title: "Coastal Gongura Prawns Biryani", category: "Signature Dishes", img: "images/menu/biryani/gongura-prawns-biryani.webp" },
  { id: "g-14", title: "Fragrant Country Ghee Rice", category: "Food", img: "images/menu/rice/ghee-rice.webp" },
  { id: "g-15", title: "Fresh Handcrafted Phulka", category: "Food", img: "images/menu/traditional/phulka.webp" },
  { id: "g-16", title: "Warm Saffron Gulab Jamun", category: "Food", img: "images/menu/desserts/gulab-jamun.webp" },
  { id: "g-17", title: "Royal Marathahalli Dining Hall", category: "Interiors", img: "images/gallery/interior-main-hall.jpg" },
  { id: "g-18", title: "Heritage Brass & Clay Pot Ambiance", category: "Interiors", img: "images/gallery/interior-claypot-decor.jpg" },
  { id: "g-19", title: "Slow Wood-Fired Dum Cooking", category: "Dining Experience", img: "images/gallery/experience-dum-cooking.jpg" },
  { id: "g-20", title: "Family Feast Celebrations", category: "Dining Experience", img: "images/gallery/experience-family-dining.jpg" },
  { id: "g-21", title: "Authentic Clay Pot Table Service", category: "Dining Experience", img: "images/gallery/experience-claypot-serve.jpg" },
  { id: "g-22", title: "Evening Lantern Ambience", category: "Interiors", img: "images/gallery/interior-evening-glow.jpg" }
];

/* ==========================================================================
   3. CART STATE MANAGEMENT
   ========================================================================== */
const CART_STORAGE_KEY = 'kritunga_restaurant_cart';

const CartManager = {
  items: [],

  init() {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        this.items = JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Could not read cart from localStorage', e);
      this.items = [];
    }
    this.updateUI();
  },

  save() {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.items));
    } catch (e) {
      console.warn('Could not save cart to localStorage', e);
    }
    this.updateUI();
  },

  addItem(itemId) {
    const dish = KRITUNGA_MENU.find(d => d.id === itemId);
    if (!dish) return;

    const existing = this.items.find(item => item.id === itemId);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.items.push({
        id: dish.id,
        name: dish.name,
        price: dish.price,
        isVeg: dish.isVeg,
        img: dish.img,
        quantity: 1
      });
    }

    this.save();
    showToast(`Added ${dish.name} to cart!`, 'success');
    this.animateBadge();
  },

  updateQuantity(itemId, delta) {
    const item = this.items.find(i => i.id === itemId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      this.items = this.items.filter(i => i.id !== itemId);
    }
    this.save();
  },

  removeItem(itemId) {
    const item = this.items.find(i => i.id === itemId);
    const itemName = item ? item.name : 'Item';
    this.items = this.items.filter(i => i.id !== itemId);
    this.save();
    showToast(`Removed ${itemName} from cart`, 'info');
  },

  clearCart() {
    this.items = [];
    this.save();
    showToast('Cart cleared', 'info');
  },

  getTotals() {
    let count = 0;
    let subtotal = 0;
    this.items.forEach(item => {
      count += item.quantity;
      subtotal += item.price * item.quantity;
    });
    return { count, subtotal };
  },

  animateBadge() {
    document.querySelectorAll('.cart-badge').forEach(badge => {
      badge.classList.remove('bounce');
      void badge.offsetWidth; // trigger reflow
      badge.classList.add('bounce');
    });
  },

  updateUI() {
    const { count, subtotal } = this.getTotals();

    // Update all badge counters
    document.querySelectorAll('.cart-badge-count').forEach(el => {
      el.textContent = count;
    });

    // Update floating mobile cart total
    document.querySelectorAll('.floating-cart-total').forEach(el => {
      el.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    });

    // Render Drawer Content
    const cartList = document.getElementById('cartDrawerItems');
    const emptyState = document.getElementById('cartEmptyState');
    const footerSummary = document.getElementById('cartDrawerFooter');
    const subtotalDisplay = document.getElementById('cartSubtotalDisplay');
    const totalItemsDisplay = document.getElementById('cartTotalItemsDisplay');

    if (!cartList) return;

    if (this.items.length === 0) {
      if (emptyState) emptyState.style.display = 'block';
      cartList.innerHTML = '';
      if (footerSummary) footerSummary.style.display = 'none';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';
    if (footerSummary) footerSummary.style.display = 'flex';

    if (subtotalDisplay) subtotalDisplay.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    if (totalItemsDisplay) totalItemsDisplay.textContent = `${count} item${count > 1 ? 's' : ''}`;

    let html = '';
    this.items.forEach(item => {
      const lineTotal = item.price * item.quantity;
      html += `
        <div class="cart-item" data-id="${item.id}">
          <img src="${item.img}" alt="${item.name}" class="cart-item-img" onerror="this.src='images/food/food-placeholder.jpg'">
          <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-unit-price">₹${item.price} each</div>
            <div class="cart-item-controls">
              <button class="qty-btn" onclick="CartManager.updateQuantity('${item.id}', -1)" aria-label="Decrease quantity">−</button>
              <span class="cart-item-qty">${item.quantity}</span>
              <button class="qty-btn" onclick="CartManager.updateQuantity('${item.id}', 1)" aria-label="Increase quantity">+</button>
            </div>
          </div>
          <div class="cart-item-total">
            <div class="cart-item-price">₹${lineTotal.toLocaleString('en-IN')}</div>
            <button class="btn-remove-item" onclick="CartManager.removeItem('${item.id}')" aria-label="Remove item">Remove</button>
          </div>
        </div>
      `;
    });

    cartList.innerHTML = html;
  }
};

/* ==========================================================================
   4. WHATSAPP ORDER GENERATOR (Strict Format from Specification §7.5)
   ========================================================================== */
function proceedToWhatsAppOrder() {
  const { count, subtotal } = CartManager.getTotals();
  if (count === 0) {
    showToast('Your cart is empty! Add dishes to proceed.', 'error');
    return;
  }

  const nameInput = document.getElementById('customerName');
  const phoneInput = document.getElementById('customerPhone');
  const orderType = document.querySelector('input[name="orderType"]:checked')?.value || 'Pickup';
  const addressInput = document.getElementById('deliveryAddress');
  const noteInput = document.getElementById('customerNote');

  // Validation
  const name = nameInput ? nameInput.value.trim() : '';
  const phone = phoneInput ? phoneInput.value.trim() : '';
  const address = addressInput ? addressInput.value.trim() : '';
  const note = noteInput ? noteInput.value.trim() : '';

  if (!name) {
    showToast('Please enter your Name', 'error');
    if (nameInput) nameInput.focus();
    return;
  }

  const phoneRegex = /^[6-9]\d{9}$/;
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  if (!phone || cleanPhone.length !== 10) {
    showToast('Please enter a valid 10-digit Indian phone number', 'error');
    if (phoneInput) phoneInput.focus();
    return;
  }

  if (orderType === 'Delivery' && !address) {
    showToast('Please enter your Delivery Address', 'error');
    if (addressInput) addressInput.focus();
    return;
  }

  // Construct message strictly following §7.5
  let message = `Hello Kritunga Restaurant,\n\n`;
  message += `I would like to place an order through the website.\n\n`;
  message += `Customer Details\n`;
  message += `Name: ${name}\n`;
  message += `Phone: ${cleanPhone}\n`;
  message += `Order Type: ${orderType}\n`;
  if (orderType === 'Delivery' && address) {
    message += `Address: ${address}\n`;
  }
  message += `\nOrder\n`;

  CartManager.items.forEach(item => {
    const lineTotal = item.price * item.quantity;
    message += `${item.name} × ${item.quantity} — ₹${lineTotal.toLocaleString('en-IN')}\n`;
  });

  message += `\nSubtotal: ₹${subtotal.toLocaleString('en-IN')}\n`;

  if (note) {
    message += `\nCustomer Note: ${note}\n`;
  }

  message += `\nPlease confirm the order and availability.\n\nThank you.`;

  // WhatsApp Destination
  const waUrl = `https://wa.me/917619333335?text=${encodeURIComponent(message)}`;

  // Rule §7.6: Strict compliance - never claim instant confirmation
  showToast('Order request sent to WhatsApp — please wait for restaurant confirmation.', 'info');

  // Open WhatsApp in new tab
  window.open(waUrl, '_blank');

  // Close cart drawer
  closeCartDrawer();
}

/* ==========================================================================
   5. TABLE RESERVATION GENERATOR (Specification §9)
   ========================================================================== */
function handleTableReservation(event) {
  if (event) event.preventDefault();

  const name = document.getElementById('resName')?.value.trim();
  const phone = document.getElementById('resPhone')?.value.trim();
  const date = document.getElementById('resDate')?.value;
  const time = document.getElementById('resTime')?.value;
  const guests = document.getElementById('resGuests')?.value;
  const note = document.getElementById('resNote')?.value.trim() || 'None';

  if (!name || !phone || !date || !time || !guests) {
    showToast('Please fill in all required reservation fields', 'error');
    return;
  }

  const cleanPhone = phone.replace(/[^0-9]/g, '');
  if (cleanPhone.length !== 10) {
    showToast('Please enter a valid 10-digit phone number', 'error');
    return;
  }

  let message = `Hello Kritunga Restaurant,\n\n`;
  message += `I would like to request a table reservation.\n\n`;
  message += `Reservation Details\n`;
  message += `Name: ${name}\n`;
  message += `Phone: ${cleanPhone}\n`;
  message += `Date: ${date}\n`;
  message += `Time: ${time}\n`;
  message += `Number of Guests: ${guests}\n`;
  message += `Special Request: ${note}\n\n`;
  message += `Please confirm table availability.\n\nThank you.`;

  const waUrl = `https://wa.me/917619333335?text=${encodeURIComponent(message)}`;

  showToast('Reservation request sent to WhatsApp — awaiting restaurant confirmation.', 'info');
  window.open(waUrl, '_blank');
}

/* ==========================================================================
   6. UI CONTROLS & DRAWER INTERACTION
   ========================================================================== */
function openCartDrawer() {
  const drawerOverlay = document.getElementById('cartDrawerOverlay');
  if (drawerOverlay) {
    drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeCartDrawer() {
  const drawerOverlay = document.getElementById('cartDrawerOverlay');
  if (drawerOverlay) {
    drawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function toggleCustomerDetails() {
  const formSection = document.getElementById('customerDetailsSection');
  const proceedBtn = document.getElementById('proceedToDetailsBtn');
  const waBtn = document.getElementById('proceedToWhatsAppBtn');

  if (formSection) {
    formSection.classList.toggle('active');
    if (formSection.classList.contains('active')) {
      if (proceedBtn) proceedBtn.style.display = 'none';
      if (waBtn) waBtn.style.display = 'flex';
      formSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      if (proceedBtn) proceedBtn.style.display = 'flex';
      if (waBtn) waBtn.style.display = 'none';
    }
  }
}

function handleOrderTypeChange(type) {
  const addressGroup = document.getElementById('deliveryAddressGroup');
  const pickupCard = document.getElementById('pickupRadioCard');
  const deliveryCard = document.getElementById('deliveryRadioCard');

  if (type === 'Delivery') {
    if (addressGroup) addressGroup.style.display = 'flex';
    if (deliveryCard) deliveryCard.classList.add('active');
    if (pickupCard) pickupCard.classList.remove('active');
  } else {
    if (addressGroup) addressGroup.style.display = 'none';
    if (pickupCard) pickupCard.classList.add('active');
    if (deliveryCard) deliveryCard.classList.remove('active');
  }
}

function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 10);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

/* ==========================================================================
   7. MENU RENDERING & FILTER ENGINE (For menu.html & index.html)
   ========================================================================== */
let activeCategory = 'All';
let activeDietFilter = 'All';
let searchQuery = '';

function renderMenuGrid(targetContainerId, itemsToRender) {
  const container = document.getElementById(targetContainerId);
  if (!container) return;

  if (itemsToRender.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
        <h3 style="color: var(--color-warm-gold); margin-bottom: 10px;">No dishes match your search</h3>
        <p style="color: var(--color-cream-muted);">Try searching for another dish or clear the filters.</p>
      </div>
    `;
    return;
  }

  let html = '';
  itemsToRender.forEach(dish => {
    const badgeClass = dish.isVeg ? 'badge-veg' : 'badge-nonveg';
    const badgeText = dish.isVeg ? 'VEG' : 'NON-VEG';

    html += `
      <div class="food-card" data-category="${dish.category}" data-id="${dish.id}">
        <div class="food-card-img-wrap">
          <img src="${dish.img}" alt="${dish.name}" class="food-card-img" loading="lazy" onerror="this.src='images/food/food-placeholder.jpg'">
          <span class="food-card-badge ${badgeClass}">${badgeText}</span>
          <span class="food-card-category">${dish.category}</span>
        </div>
        <div class="food-card-body">
          <h3 class="food-card-title">${dish.name}</h3>
          <p class="food-card-desc">${dish.desc}</p>
          <div class="food-card-footer">
            <span class="food-card-price">₹${dish.price}</span>
            <button class="btn-add-cart" onclick="CartManager.addItem('${dish.id}')" aria-label="Add ${dish.name} to cart">
              + ADD TO CART
            </button>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function filterAndRenderMenu() {
  let filtered = KRITUNGA_MENU;

  if (activeCategory !== 'All') {
    filtered = filtered.filter(item => item.category === activeCategory);
  }

  if (activeDietFilter === 'Veg') {
    filtered = filtered.filter(item => item.isVeg);
  } else if (activeDietFilter === 'NonVeg') {
    filtered = filtered.filter(item => !item.isVeg);
  }

  if (searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(item => 
      item.name.toLowerCase().includes(q) || 
      item.desc.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  }

  renderMenuGrid('fullMenuGrid', filtered);
}

function initMenuFilters() {
  // Category Pills
  const categoryPills = document.querySelectorAll('.category-pill');
  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.getAttribute('data-category') || 'All';
      filterAndRenderMenu();
    });
  });

  // Dietary Filters
  const dietPills = document.querySelectorAll('.diet-pill');
  dietPills.forEach(pill => {
    pill.addEventListener('click', () => {
      dietPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeDietFilter = pill.getAttribute('data-diet') || 'All';
      filterAndRenderMenu();
    });
  });

  // Search input
  const searchInput = document.getElementById('menuSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      filterAndRenderMenu();
    });
  }
}

/* ==========================================================================
   8. GALLERY & LIGHTBOX CONTROLLER (gallery.html)
   ========================================================================== */
let activeLightboxIndex = 0;
let currentFilteredGallery = KRITUNGA_GALLERY;

function renderGallery(category = 'All') {
  const container = document.getElementById('galleryGridContainer');
  if (!container) return;

  if (category === 'All') {
    currentFilteredGallery = KRITUNGA_GALLERY;
  } else {
    currentFilteredGallery = KRITUNGA_GALLERY.filter(item => item.category === category);
  }

  let html = '';
  currentFilteredGallery.forEach((item, index) => {
    html += `
      <div class="gallery-item" onclick="openLightbox(${index})" data-category="${item.category}">
        <img src="${item.img}" alt="${item.title}" loading="lazy" onerror="this.src='images/food/food-placeholder.jpg'">
        <div class="gallery-item-overlay">
          <span class="gallery-item-cat">${item.category}</span>
          <h4 class="gallery-item-title">${item.title}</h4>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function openLightbox(index) {
  activeLightboxIndex = index;
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImage');
  const caption = document.getElementById('lightboxCaption');

  if (!modal || !img || !currentFilteredGallery[index]) return;

  const item = currentFilteredGallery[index];
  img.src = item.img;
  img.alt = item.title;
  if (caption) caption.textContent = `${item.title} — ${item.category}`;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function navigateLightbox(direction) {
  activeLightboxIndex += direction;
  if (activeLightboxIndex < 0) {
    activeLightboxIndex = currentFilteredGallery.length - 1;
  } else if (activeLightboxIndex >= currentFilteredGallery.length) {
    activeLightboxIndex = 0;
  }
  openLightbox(activeLightboxIndex);
}

function initGalleryFilters() {
  const filterPills = document.querySelectorAll('.gallery-filter-pill');
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const cat = pill.getAttribute('data-gallery-cat') || 'All';
      renderGallery(cat);
    });
  });

  // Keyboard navigation for lightbox
  window.addEventListener('keydown', (e) => {
    const modal = document.getElementById('lightboxModal');
    if (!modal || !modal.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });
}

/* ==========================================================================
   9. GLOBAL INITIALIZATION & EVENT LISTENERS
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Cart
  CartManager.init();

  // 2. Sticky Header Scroll Transition
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // 3. Mobile Navigation Drawer
  const menuToggleBtn = document.getElementById('mobileMenuToggle');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const closeMobileNavBtn = document.getElementById('closeMobileNav');

  menuToggleBtn?.addEventListener('click', () => {
    mobileNavDrawer?.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  closeMobileNavBtn?.addEventListener('click', () => {
    mobileNavDrawer?.classList.remove('open');
    document.body.style.overflow = '';
  });

  // 4. Cart Drawer Overlay Close Handlers
  const cartDrawerOverlay = document.getElementById('cartDrawerOverlay');
  cartDrawerOverlay?.addEventListener('click', (e) => {
    if (e.target === cartDrawerOverlay) {
      closeCartDrawer();
    }
  });

  // 5. Render Menu on Menu Page
  if (document.getElementById('fullMenuGrid')) {
    initMenuFilters();
    filterAndRenderMenu();
  }

  // 6. Render Signature Dishes on Home Page
  if (document.getElementById('signatureDishesGrid')) {
    const signatureIds = ['chk-3', 'pul-5', 'bir-7', 'trad-4'];
    const signatureItems = KRITUNGA_MENU.filter(item => signatureIds.includes(item.id));
    renderMenuGrid('signatureDishesGrid', signatureItems);
  }

  // 7. Render Gallery on Gallery Page
  if (document.getElementById('galleryGridContainer')) {
    initGalleryFilters();
    renderGallery('All');
  }

  // 8. Table Reservation Form on Contact Page
  const reservationForm = document.getElementById('tableReservationForm');
  reservationForm?.addEventListener('submit', handleTableReservation);
});
