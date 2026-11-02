/**
 * GlobalShop - Shopping Cart Drawer & Logic
 */

const CartController = {
  init() {
    this.drawer = document.getElementById('cartDrawer');
    this.overlay = document.getElementById('drawerOverlay');
    this.cartItemsList = document.getElementById('cartItemsList');
    this.badgeHeader = document.getElementById('cartBadgeHeader');
    
    // Summary elements
    this.subtotalEl = document.getElementById('cartSubtotal');
    this.discountRow = document.getElementById('cartDiscountRow');
    this.discountEl = document.getElementById('cartDiscount');
    this.shippingEl = document.getElementById('cartShipping');
    this.taxEl = document.getElementById('cartTax');
    this.totalEl = document.getElementById('cartTotal');

    store.subscribe((event) => {
      if (['CART_UPDATED', 'CURRENCY_CHANGED', 'LANGUAGE_CHANGED', 'COUPON_APPLIED'].includes(event)) {
        this.render();
      }
    });

    this.render();
  },

  open() {
    this.drawer.classList.add('open');
    this.overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    this.render();
  },

  close() {
    this.drawer.classList.remove('open');
    this.overlay.classList.remove('active');
    document.body.style.overflow = '';
  },

  render() {
    const products = getStoredProducts();
    const cart = store.cart;
    const lang = store.lang;
    
    // Update badge count
    const count = store.getCartCount();
    if (this.badgeHeader) {
      this.badgeHeader.textContent = count;
      this.badgeHeader.style.display = count > 0 ? 'flex' : 'none';
    }

    if (!this.cartItemsList) return;

    if (cart.length === 0) {
      this.cartItemsList.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon"><i class="fa-solid fa-cart-shopping"></i></div>
          <p style="color: var(--text-muted); font-size: 0.95rem;">${t('empty_cart', lang)}</p>
        </div>
      `;
      if (this.subtotalEl) this.subtotalEl.textContent = store.formatPrice(0);
      if (this.shippingEl) this.shippingEl.textContent = store.formatPrice(0);
      if (this.taxEl) this.taxEl.textContent = store.formatPrice(0);
      if (this.totalEl) this.totalEl.textContent = store.formatPrice(0);
      if (this.discountRow) this.discountRow.style.display = 'none';
      return;
    }

    let itemsHtml = '';
    cart.forEach(item => {
      const prod = products.find(p => p.id === item.id);
      if (prod) {
        const prodName = prod.name[lang] || prod.name['en'];
        const priceFormatted = store.formatPrice(prod.priceUSD * item.qty);
        const singlePriceFormatted = store.formatPrice(prod.priceUSD);

        itemsHtml += `
          <div class="cart-item">
            <img src="${prod.image}" alt="${prodName}" class="cart-item-img">
            <div class="cart-item-info">
              <h4 class="cart-item-title">${prodName}</h4>
              <div style="font-size: 0.8rem; color: var(--text-muted);">${singlePriceFormatted} / dona</div>
              <div class="cart-item-price">${priceFormatted}</div>
              <div class="cart-qty-controls">
                <button class="btn-qty" onclick="store.updateCartQty('${prod.id}', -1)" aria-label="Decrease">-</button>
                <span class="qty-val">${item.qty}</span>
                <button class="btn-qty" onclick="store.updateCartQty('${prod.id}', 1)" aria-label="Increase">+</button>
              </div>
            </div>
            <button class="btn-remove-item" onclick="store.removeFromCart('${prod.id}')" title="O'chirish">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        `;
      }
    });

    this.cartItemsList.innerHTML = itemsHtml;

    // Calculations
    const calcs = store.getCartCalculations(products);
    if (this.subtotalEl) this.subtotalEl.textContent = store.formatPrice(calcs.subtotalUSD);
    if (this.shippingEl) {
      this.shippingEl.textContent = calcs.shippingUSD === 0 ? t('free_shipping', lang) : store.formatPrice(calcs.shippingUSD);
    }
    if (this.taxEl) this.taxEl.textContent = store.formatPrice(calcs.taxUSD);
    if (this.totalEl) this.totalEl.textContent = store.formatPrice(calcs.totalUSD);

    if (this.discountRow) {
      if (calcs.discountUSD > 0 && store.activeCoupon) {
        this.discountRow.style.display = 'flex';
        this.discountEl.textContent = `-${store.formatPrice(calcs.discountUSD)} (${store.activeCoupon.percent}%)`;
      } else {
        this.discountRow.style.display = 'none';
      }
    }
  }
};
