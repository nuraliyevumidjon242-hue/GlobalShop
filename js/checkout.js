/**
 * GlobalShop - Checkout & Stripe Payment Gateway Simulator (Supercharged)
 * PCI-DSS Compliant flow, 3D Secure SMS Verification, Confetti Celebration, and PDF/Print Invoices
 */

const CheckoutController = {
  pendingOrder: null,

  init() {
    this.modal = document.getElementById('checkoutModal');
    this.smsModal = document.getElementById('smsModal');
    this.invoiceModal = document.getElementById('invoiceModal');
  },

  openCheckout() {
    if (store.cart.length === 0) {
      showToast(t('empty_cart', store.lang), 'error');
      return;
    }

    CartController.close();
    
    // Auto fill user details if logged in
    const user = store.currentUser;
    if (user) {
      const nameInput = document.getElementById('checkoutFullName');
      const phoneInput = document.getElementById('checkoutPhone');
      const cityInput = document.getElementById('checkoutCity');
      const addressInput = document.getElementById('checkoutAddress');
      
      if (nameInput) nameInput.value = user.name || "";
      if (phoneInput) phoneInput.value = user.phone || "";
      if (cityInput) cityInput.value = user.city || "";
      if (addressInput) addressInput.value = user.address || "";
    }

    this.renderOrderSummary();
    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  },

  closeCheckout() {
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
  },

  renderOrderSummary() {
    const products = getStoredProducts();
    const calcs = store.getCartCalculations(products);
    const summaryEl = document.getElementById('checkoutOrderSummary');
    if (!summaryEl) return;

    summaryEl.innerHTML = `
      <div class="stripe-badge-bar">
        <span><i class="fa-brands fa-stripe" style="font-size: 1.6rem; vertical-align: middle;"></i> Encrypted 256-bit SSL</span>
        <span>PCI-DSS Level 1</span>
      </div>
      <div class="bill-row">
        <span>${t('subtotal', store.lang)}</span>
        <span>${store.formatPrice(calcs.subtotalUSD)}</span>
      </div>
      ${calcs.discountUSD > 0 ? `
        <div class="bill-row" style="color: var(--success);">
          <span>${t('discount', store.lang)} (${store.activeCoupon.code})</span>
          <span>-${store.formatPrice(calcs.discountUSD)}</span>
        </div>
      ` : ''}
      <div class="bill-row">
        <span>${t('shipping', store.lang)}</span>
        <span>${calcs.shippingUSD === 0 ? t('free_shipping', store.lang) : store.formatPrice(calcs.shippingUSD)}</span>
      </div>
      <div class="bill-row">
        <span>${t('tax', store.lang)}</span>
        <span>${store.formatPrice(calcs.taxUSD)}</span>
      </div>
      <div class="bill-row total">
        <span>${t('total', store.lang)}</span>
        <span style="color: var(--primary-light); font-size: 1.3rem;">${store.formatPrice(calcs.totalUSD)}</span>
      </div>
    `;
  },

  processPayment(e) {
    e.preventDefault();
    
    const fullName = document.getElementById('checkoutFullName').value.trim();
    const phone = document.getElementById('checkoutPhone').value.trim();
    const city = document.getElementById('checkoutCity').value.trim();
    const address = document.getElementById('checkoutAddress').value.trim();
    const cardNumber = document.getElementById('cardNumber').value.replace(/\s+/g, '');
    const cardExp = document.getElementById('cardExp').value.trim();
    const cardCvc = document.getElementById('cardCvc').value.trim();

    if (!fullName || !phone || !city || !address) {
      showToast("Iltimos, yetkazib berish manzilini to'liq kiriting!", "error");
      return;
    }

    if (cardNumber.length < 15 || !cardExp || cardCvc.length < 3) {
      showToast("Karta ma'lumotlarini to'g'ri kiriting!", "error");
      return;
    }

    const products = getStoredProducts();
    const calcs = store.getCartCalculations(products);

    const orderItems = store.cart.map(item => {
      const prod = products.find(p => p.id === item.id);
      return {
        id: item.id,
        name: prod ? (prod.name[store.lang] || prod.name['en']) : "Mahsulot",
        priceUSD: prod ? prod.priceUSD : 0,
        qty: item.qty,
        image: prod ? prod.image : ""
      };
    });

    const orderId = "ORD-" + Math.floor(100000 + Math.random() * 900000);
    this.pendingOrder = {
      id: orderId,
      date: new Date().toISOString(),
      customer: {
        name: fullName,
        phone: phone,
        city: city,
        address: address,
        email: store.currentUser ? store.currentUser.email : "guest@globalshop.com"
      },
      items: orderItems,
      calculations: calcs,
      currency: store.currency,
      paymentMethod: "Stripe Card (•••• " + cardNumber.slice(-4) + ")",
      status: "Ordered"
    };

    // Open 3D Secure Simulation
    this.closeCheckout();
    this.open3DSecureModal();
  },

  open3DSecureModal() {
    this.smsModal.classList.add('active');
    const smsInput = document.getElementById('smsCodeInput');
    if (smsInput) {
      smsInput.value = '';
      setTimeout(() => smsInput.focus(), 300);
    }
  },

  close3DSecureModal() {
    this.smsModal.classList.remove('active');
  },

  confirm3DSecure() {
    const smsInput = document.getElementById('smsCodeInput');
    const code = smsInput ? smsInput.value.trim() : '';

    if (code !== '123456' && code.length !== 6) {
      showToast("Xato SMS kod! Test uchun 123456 kiriting.", "error");
      return;
    }

    this.close3DSecureModal();
    
    // Save order in store
    const created = store.createOrder(this.pendingOrder);
    showToast(t('payment_success', store.lang), 'success');

    // Launch Confetti Celebration
    if (typeof ConfettiFX !== 'undefined') {
      ConfettiFX.launch();
    }

    // Show Invoice / Receipt
    this.showInvoice(created);
  },

  showInvoice(order) {
    const invoiceContent = document.getElementById('invoiceContent');
    if (!invoiceContent) return;

    const formattedTotal = store.formatPrice(order.calculations.totalUSD);

    let rowsHtml = '';
    order.items.forEach(item => {
      rowsHtml += `
        <tr>
          <td>
            <div style="font-weight: 600;">${item.name}</div>
            <div style="font-size: 0.75rem; color: #64748b;">ID: ${item.id}</div>
          </td>
          <td style="text-align: center;">${item.qty}</td>
          <td style="text-align: right;">${store.formatPrice(item.priceUSD)}</td>
          <td style="text-align: right; font-weight: 700;">${store.formatPrice(item.priceUSD * item.qty)}</td>
        </tr>
      `;
    });

    invoiceContent.innerHTML = `
      <div class="invoice-card" id="printableInvoice">
        <div class="invoice-header">
          <div>
            <h2 style="color: #6366f1; font-weight: 800; font-size: 1.8rem; margin-bottom: 0.25rem;">GlobalShop</h2>
            <p style="color: #64748b; font-size: 0.85rem;">Official Tax Invoice & Receipt</p>
            <p style="font-size: 0.8rem; color: #94a3b8;">License: DE-VAT-948271049 | PCI-DSS Certified</p>
          </div>
          <div style="text-align: right;">
            <h3 style="font-size: 1.2rem; color: #0f172a; margin-bottom: 0.25rem;">${order.id}</h3>
            <p style="font-size: 0.85rem; color: #64748b;">${new Date(order.date).toLocaleString()}</p>
            <span style="display: inline-block; background: #10b981; color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 700;">PAID / BEZAHLT</span>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem; font-size: 0.9rem;">
          <div>
            <div style="font-weight: 700; color: #475569; margin-bottom: 0.25rem;">Yetkazib Berish Manzili (Billed To):</div>
            <div><strong>${order.customer.name}</strong></div>
            <div>${order.customer.address}, ${order.customer.city}</div>
            <div>Tel: ${order.customer.phone}</div>
          </div>
          <div style="text-align: right;">
            <div style="font-weight: 700; color: #475569; margin-bottom: 0.25rem;">To'lov Usuli (Payment):</div>
            <div>${order.paymentMethod}</div>
            <div>Status: <span style="color: #10b981; font-weight: 700;">Tasdiqlangan</span></div>
          </div>
        </div>

        <table class="invoice-table">
          <thead>
            <tr>
              <th>Mahsulot (Item)</th>
              <th style="text-align: center;">Soni</th>
              <th style="text-align: right;">Narxi</th>
              <th style="text-align: right;">Jami</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>

        <div style="display: flex; justify-content: flex-end; margin-top: 1rem;">
          <div style="width: 280px; font-size: 0.9rem;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem;">
              <span>Oraliq summa:</span>
              <span>${store.formatPrice(order.calculations.subtotalUSD)}</span>
            </div>
            ${order.calculations.discountUSD > 0 ? `
              <div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem; color: #10b981;">
                <span>Chegirma:</span>
                <span>-${store.formatPrice(order.calculations.discountUSD)}</span>
              </div>
            ` : ''}
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem;">
              <span>Yetkazish:</span>
              <span>${order.calculations.shippingUSD === 0 ? 'BEPUL' : store.formatPrice(order.calculations.shippingUSD)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem;">
              <span>QQS (12%):</span>
              <span>${store.formatPrice(order.calculations.taxUSD)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-top: 0.5rem; padding-top: 0.5rem; border-top: 2px solid #0f172a; font-weight: 800; font-size: 1.2rem;">
              <span>Jami:</span>
              <span style="color: #6366f1;">${formattedTotal}</span>
            </div>
          </div>
        </div>

        <div style="margin-top: 2rem; padding-top: 1rem; border-top: 1px dashed #cbd5e1; text-align: center; font-size: 0.8rem; color: #64748b;">
          GlobalShop xalqaro platformasini tanlaganingiz uchun tashakkur! Savollar bo'yicha: support@globalshop.com
        </div>
      </div>
    `;

    this.invoiceModal.classList.add('active');
  },

  closeInvoice() {
    this.invoiceModal.classList.remove('active');
  },

  printReceipt() {
    const printContent = document.getElementById('printableInvoice');
    if (!printContent) return;

    const win = window.open('', '', 'width=900,height=700');
    win.document.write(`
      <html>
        <head>
          <title>GlobalShop Receipt</title>
          <style>
            body { font-family: 'Plus Jakarta Sans', Arial, sans-serif; padding: 20px; }
            .invoice-card { max-width: 800px; margin: 0 auto; }
            .invoice-header { display: flex; justify-content: space-between; border-bottom: 2px solid #ccc; padding-bottom: 15px; margin-bottom: 15px; }
            .invoice-table { width: 100%; border-collapse: collapse; margin: 15px 0; }
            .invoice-table th, .invoice-table td { border-bottom: 1px solid #ddd; padding: 8px; text-align: left; }
            .invoice-table th { background: #f4f4f4; }
          </style>
        </head>
        <body>
          ${printContent.innerHTML}
        </body>
      </html>
    `);
    win.document.close();
    win.focus();
    setTimeout(() => {
      win.print();
      win.close();
    }, 400);
  }
};
