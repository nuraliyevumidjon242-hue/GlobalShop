/**
 * GlobalShop - Central State Management & Reactive Store
 */

const CURRENCY_CONFIG = {
  USD: { symbol: "$", rate: 1.0, decimals: 2, position: 'before' },
  EUR: { symbol: "€", rate: 0.92, decimals: 2, position: 'after' },
  UZS: { symbol: " so'm", rate: 12800, decimals: 0, position: 'after' },
  RUB: { symbol: " ₽", rate: 92.5, decimals: 1, position: 'after' }
};

class GlobalShopStore {
  constructor() {
    this.lang = localStorage.getItem('gs_lang') || 'uz';
    this.currency = localStorage.getItem('gs_currency') || 'USD';
    this.theme = localStorage.getItem('gs_theme') || 'dark';
    
    // Cart stored as array of items { id, qty, priceUSD }
    this.cart = JSON.parse(localStorage.getItem('gs_cart') || '[]');
    this.wishlist = JSON.parse(localStorage.getItem('gs_wishlist') || '[]');
    this.orders = JSON.parse(localStorage.getItem('gs_orders') || '[]');
    this.currentUser = JSON.parse(localStorage.getItem('gs_user') || 'null');
    
    this.activeCoupon = JSON.parse(localStorage.getItem('gs_coupon') || 'null');
    this.listeners = [];
  }

  // Subscribe to state changes
  subscribe(fn) {
    this.listeners.push(fn);
  }

  notify(event, payload) {
    this.listeners.forEach(fn => fn(event, payload));
  }

  // Language management
  setLanguage(lang) {
    if (['uz', 'de', 'en', 'ru'].includes(lang)) {
      this.lang = lang;
      localStorage.setItem('gs_lang', lang);
      document.documentElement.lang = lang;
      this.notify('LANGUAGE_CHANGED', lang);
    }
  }

  // Currency management
  setCurrency(curr) {
    if (CURRENCY_CONFIG[curr]) {
      this.currency = curr;
      localStorage.setItem('gs_currency', curr);
      this.notify('CURRENCY_CHANGED', curr);
    }
  }

  // Theme toggle
  setTheme(theme) {
    this.theme = theme;
    localStorage.setItem('gs_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    this.notify('THEME_CHANGED', theme);
  }

  toggleTheme() {
    this.setTheme(this.theme === 'dark' ? 'light' : 'dark');
  }

  // Currency Formatter
  formatPrice(usdAmount) {
    const config = CURRENCY_CONFIG[this.currency] || CURRENCY_CONFIG.USD;
    const converted = usdAmount * config.rate;
    
    let formattedNumber;
    if (config.decimals === 0) {
      formattedNumber = Math.round(converted).toLocaleString('ru-RU');
    } else {
      formattedNumber = converted.toLocaleString('en-US', {
        minimumFractionDigits: config.decimals,
        maximumFractionDigits: config.decimals
      });
    }

    if (config.position === 'before') {
      return `${config.symbol}${formattedNumber}`;
    } else {
      return `${formattedNumber}${config.symbol}`;
    }
  }

  // Cart operations
  addToCart(productId, qty = 1) {
    const existing = this.cart.find(item => item.id === productId);
    if (existing) {
      existing.qty += qty;
    } else {
      this.cart.push({ id: productId, qty: qty });
    }
    this.saveCart();
    this.notify('CART_UPDATED', this.cart);
  }

  updateCartQty(productId, delta) {
    const item = this.cart.find(i => i.id === productId);
    if (item) {
      item.qty += delta;
      if (item.qty <= 0) {
        this.removeFromCart(productId);
        return;
      }
      this.saveCart();
      this.notify('CART_UPDATED', this.cart);
    }
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.id !== productId);
    this.saveCart();
    this.notify('CART_UPDATED', this.cart);
  }

  clearCart() {
    this.cart = [];
    this.activeCoupon = null;
    localStorage.removeItem('gs_coupon');
    this.saveCart();
    this.notify('CART_UPDATED', this.cart);
  }

  saveCart() {
    localStorage.setItem('gs_cart', JSON.stringify(this.cart));
  }

  getCartCount() {
    return this.cart.reduce((sum, item) => sum + item.qty, 0);
  }

  getCartCalculations(productsList) {
    let subtotalUSD = 0;
    this.cart.forEach(item => {
      const prod = productsList.find(p => p.id === item.id);
      if (prod) {
        subtotalUSD += prod.priceUSD * item.qty;
      }
    });

    let discountUSD = 0;
    if (this.activeCoupon) {
      discountUSD = (subtotalUSD * this.activeCoupon.percent) / 100;
    }

    const shippingUSD = subtotalUSD > 0 ? (subtotalUSD > 500 ? 0 : 25) : 0;
    const taxUSD = subtotalUSD > 0 ? ((subtotalUSD - discountUSD) * 0.12) : 0;
    const totalUSD = Math.max(0, subtotalUSD - discountUSD + shippingUSD + taxUSD);

    return {
      subtotalUSD,
      discountUSD,
      shippingUSD,
      taxUSD,
      totalUSD
    };
  }

  // Wishlist operations
  toggleWishlist(productId) {
    const idx = this.wishlist.indexOf(productId);
    if (idx > -1) {
      this.wishlist.splice(idx, 1);
    } else {
      this.wishlist.push(productId);
    }
    localStorage.setItem('gs_wishlist', JSON.stringify(this.wishlist));
    this.notify('WISHLIST_UPDATED', this.wishlist);
  }

  isInWishlist(productId) {
    return this.wishlist.includes(productId);
  }

  // Coupon
  applyCoupon(code) {
    const validCoupons = {
      'GLOBAL2026': 20,
      'GERMANY10': 10,
      'DISCOUNT15': 15,
      'UMIDJON': 25
    };
    const cleanCode = code.trim().toUpperCase();
    if (validCoupons[cleanCode]) {
      this.activeCoupon = { code: cleanCode, percent: validCoupons[cleanCode] };
      localStorage.setItem('gs_coupon', JSON.stringify(this.activeCoupon));
      this.notify('COUPON_APPLIED', this.activeCoupon);
      return { success: true, percent: validCoupons[cleanCode] };
    }
    return { success: false };
  }

  // Orders
  createOrder(orderData) {
    this.orders.unshift(orderData);
    localStorage.setItem('gs_orders', JSON.stringify(this.orders));
    this.clearCart();
    this.notify('ORDER_CREATED', orderData);
    return orderData;
  }

  updateOrderStatus(orderId, newStatus) {
    const order = this.orders.find(o => o.id === orderId);
    if (order) {
      order.status = newStatus;
      localStorage.setItem('gs_orders', JSON.stringify(this.orders));
      this.notify('ORDER_STATUS_CHANGED', order);
    }
  }

  // User Auth
  setUser(user) {
    this.currentUser = user;
    localStorage.setItem('gs_user', JSON.stringify(user));
    this.notify('AUTH_CHANGED', user);
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('gs_user');
    this.notify('AUTH_CHANGED', null);
  }
}

const store = new GlobalShopStore();
