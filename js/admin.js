/**
 * GlobalShop - Administrator Management Suite (Supercharged)
 * Product CRUD with Local Image Drag & Drop, CSV Financial Export, and Order Tracking
 */

const AdminController = {
  currentTab: 'dashboard',
  tempUploadedImage: '',

  init() {
    this.modal = document.getElementById('adminModal');
  },

  open() {
    if (!store.currentUser || store.currentUser.role !== 'admin') {
      AuthManager.login('admin@globalshop.de', 'admin123');
      showToast("Administrator huquqi bilan tizimga kirildi", "info");
    }

    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    this.switchTab(this.currentTab);
  },

  close() {
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
  },

  switchTab(tabName) {
    this.currentTab = tabName;
    document.querySelectorAll('.admin-nav-item').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabName);
    });

    const contentArea = document.getElementById('adminContentArea');
    if (!contentArea) return;

    if (tabName === 'dashboard') {
      this.renderDashboard(contentArea);
    } else if (tabName === 'products') {
      this.renderProducts(contentArea);
    } else if (tabName === 'orders') {
      this.renderOrders(contentArea);
    } else if (tabName === 'analytics') {
      this.renderAnalytics(contentArea);
    }
  },

  renderDashboard(container) {
    const products = getStoredProducts();
    const orders = store.orders;
    const lang = store.lang;

    let totalRevenueUSD = 0;
    orders.forEach(o => {
      if (o.calculations && o.calculations.totalUSD) {
        totalRevenueUSD += o.calculations.totalUSD;
      }
    });

    container.innerHTML = `
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
          <h2 style="font-size: 1.6rem;">${t('admin_tab_dashboard', lang)}</h2>
          <button class="btn btn-secondary" onclick="AdminController.exportOrdersCSV()" style="font-size: 0.85rem;">
            <i class="fa-solid fa-file-csv"></i> ${t('btn_export_csv', lang)}
          </button>
        </div>
        
        <div class="stats-grid-4">
          <div class="stat-card-admin">
            <div style="color: var(--text-muted); font-size: 0.8rem; font-weight: 600;">${t('admin_total_sales', lang)}</div>
            <div style="font-size: 1.5rem; font-weight: 800; color: var(--success); margin-top: 0.25rem;">
              ${store.formatPrice(totalRevenueUSD)}
            </div>
          </div>
          <div class="stat-card-admin">
            <div style="color: var(--text-muted); font-size: 0.8rem; font-weight: 600;">${t('admin_total_orders', lang)}</div>
            <div style="font-size: 1.5rem; font-weight: 800; color: var(--primary-light); margin-top: 0.25rem;">
              ${orders.length} ta
            </div>
          </div>
          <div class="stat-card-admin">
            <div style="color: var(--text-muted); font-size: 0.8rem; font-weight: 600;">${t('admin_total_products', lang)}</div>
            <div style="font-size: 1.5rem; font-weight: 800; color: var(--secondary); margin-top: 0.25rem;">
              ${products.length} ta
            </div>
          </div>
          <div class="stat-card-admin">
            <div style="color: var(--text-muted); font-size: 0.8rem; font-weight: 600;">${t('admin_active_users', lang)}</div>
            <div style="font-size: 1.5rem; font-weight: 800; color: var(--warning); margin-top: 0.25rem;">
              1,248
            </div>
          </div>
        </div>

        <h3 style="font-size: 1.2rem; margin-bottom: 1rem;">So'nggi Buyurtmalar</h3>
        <table class="admin-table">
          <thead>
            <tr>
              <th>${t('th_order_id', lang)}</th>
              <th>${t('th_customer', lang)}</th>
              <th>${t('th_price', lang)}</th>
              <th>${t('th_status', lang)}</th>
              <th>${t('th_date', lang)}</th>
            </tr>
          </thead>
          <tbody>
            ${orders.slice(0, 5).map(o => `
              <tr>
                <td style="font-family: var(--font-mono); font-weight: 700; color: var(--primary-light);">${o.id}</td>
                <td>${o.customer.name}</td>
                <td><strong>${store.formatPrice(o.calculations.totalUSD)}</strong></td>
                <td><span class="badge badge-discount">${o.status}</span></td>
                <td style="color: var(--text-muted); font-size: 0.8rem;">${new Date(o.date).toLocaleDateString()}</td>
              </tr>
            `).join('') || '<tr><td colspan="5" style="text-align: center; color: var(--text-muted);">Hozircha buyurtmalar yo\'q</td></tr>'}
          </tbody>
        </table>
      </div>
    `;
  },

  renderProducts(container) {
    const products = getStoredProducts();
    const lang = store.lang;

    container.innerHTML = `
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
          <h2 style="font-size: 1.6rem;">${t('admin_tab_products', lang)}</h2>
          <button class="btn btn-primary" onclick="AdminController.openProductModal()" style="font-size: 0.85rem;">
            ${t('btn_add_product', lang)}
          </button>
        </div>

        <table class="admin-table">
          <thead>
            <tr>
              <th>${t('th_image', lang)}</th>
              <th>${t('th_name', lang)}</th>
              <th>${t('th_category', lang)}</th>
              <th>${t('th_price', lang)}</th>
              <th>${t('th_stock', lang)}</th>
              <th style="text-align: right;">${t('th_actions', lang)}</th>
            </tr>
          </thead>
          <tbody>
            ${products.map(p => `
              <tr>
                <td><img src="${p.image}" style="width: 44px; height: 44px; border-radius: 6px; object-fit: cover;"></td>
                <td>
                  <strong>${p.name[lang] || p.name['en']}</strong>
                  <div style="font-size: 0.75rem; color: var(--text-muted);">ID: ${p.id}</div>
                </td>
                <td><span class="badge" style="background: var(--bg-surface); border: 1px solid var(--border-glass);">${p.category}</span></td>
                <td><strong>${store.formatPrice(p.priceUSD)}</strong></td>
                <td>${p.stock} dona</td>
                <td style="text-align: right;">
                  <button class="btn btn-secondary" onclick="AdminController.openProductModal('${p.id}')" style="padding: 4px 8px; font-size: 0.75rem; margin-right: 4px;">
                    <i class="fa-solid fa-pen"></i>
                  </button>
                  <button class="btn btn-accent" onclick="AdminController.deleteProduct('${p.id}')" style="padding: 4px 8px; font-size: 0.75rem;">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  },

  renderOrders(container) {
    const orders = store.orders;
    const lang = store.lang;

    container.innerHTML = `
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
          <h2 style="font-size: 1.6rem;">${t('admin_tab_orders', lang)}</h2>
          <button class="btn btn-secondary" onclick="AdminController.exportOrdersCSV()" style="font-size: 0.85rem;">
            <i class="fa-solid fa-download"></i> CSV Eksport
          </button>
        </div>
        
        <table class="admin-table">
          <thead>
            <tr>
              <th>${t('th_order_id', lang)}</th>
              <th>${t('th_customer', lang)}</th>
              <th>Telefon & Manzil</th>
              <th>${t('th_price', lang)}</th>
              <th>${t('th_status', lang)}</th>
              <th>Statusni O'zgartirish</th>
            </tr>
          </thead>
          <tbody>
            ${orders.map(o => `
              <tr>
                <td style="font-family: var(--font-mono); font-weight: 700; color: var(--primary-light);">${o.id}</td>
                <td>
                  <strong>${o.customer.name}</strong>
                  <div style="font-size: 0.75rem; color: var(--text-muted);">${o.customer.email}</div>
                </td>
                <td>
                  <div>${o.customer.phone}</div>
                  <div style="font-size: 0.75rem; color: var(--text-muted);">${o.customer.city}, ${o.customer.address}</div>
                </td>
                <td><strong>${store.formatPrice(o.calculations.totalUSD)}</strong></td>
                <td><span class="badge badge-discount">${o.status}</span></td>
                <td>
                  <select class="form-select" onchange="AdminController.changeOrderStatus('${o.id}', this.value)" style="padding: 4px 8px; font-size: 0.8rem; width: 130px;">
                    <option value="Ordered" ${o.status === 'Ordered' ? 'selected' : ''}>Ordered</option>
                    <option value="Packed" ${o.status === 'Packed' ? 'selected' : ''}>Packed</option>
                    <option value="Shipped" ${o.status === 'Shipped' ? 'selected' : ''}>Shipped</option>
                    <option value="Delivered" ${o.status === 'Delivered' ? 'selected' : ''}>Delivered</option>
                  </select>
                </td>
              </tr>
            `).join('') || '<tr><td colspan="6" style="text-align: center; color: var(--text-muted);">Buyurtmalar mavjud emas</td></tr>'}
          </tbody>
        </table>
      </div>
    `;
  },

  renderAnalytics(container) {
    container.innerHTML = `
      <div>
        <h2 style="font-size: 1.6rem; margin-bottom: 1.5rem;">Moliyaviy va Savdo Analitikasi</h2>
        
        <div style="background: var(--bg-surface-elevated); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-glass); margin-bottom: 1.5rem;">
          <h3 style="font-size: 1.1rem; margin-bottom: 1rem;">Oylik Savdo Grafigi (2026 Simulyatsiyasi)</h3>
          
          <div style="display: flex; align-items: flex-end; gap: 1rem; height: 180px; padding-top: 1rem; border-bottom: 2px solid var(--border-glass);">
            <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 0.5rem; height: 100%; justify-content: flex-end;">
              <div style="background: var(--primary); width: 100%; height: 45%; border-radius: 4px 4px 0 0;"></div>
              <span style="font-size: 0.75rem; color: var(--text-muted);">Yan</span>
            </div>
            <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 0.5rem; height: 100%; justify-content: flex-end;">
              <div style="background: var(--primary); width: 100%; height: 60%; border-radius: 4px 4px 0 0;"></div>
              <span style="font-size: 0.75rem; color: var(--text-muted);">Fev</span>
            </div>
            <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 0.5rem; height: 100%; justify-content: flex-end;">
              <div style="background: var(--primary); width: 100%; height: 85%; border-radius: 4px 4px 0 0;"></div>
              <span style="font-size: 0.75rem; color: var(--text-muted);">Mar</span>
            </div>
            <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 0.5rem; height: 100%; justify-content: flex-end;">
              <div style="background: var(--primary); width: 100%; height: 75%; border-radius: 4px 4px 0 0;"></div>
              <span style="font-size: 0.75rem; color: var(--text-muted);">Apr</span>
            </div>
            <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 0.5rem; height: 100%; justify-content: flex-end;">
              <div style="background: var(--secondary); width: 100%; height: 95%; border-radius: 4px 4px 0 0;"></div>
              <span style="font-size: 0.75rem; color: var(--text-muted);">May</span>
            </div>
            <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 0.5rem; height: 100%; justify-content: flex-end;">
              <div style="background: var(--accent); width: 100%; height: 100%; border-radius: 4px 4px 0 0; box-shadow: 0 0 15px var(--accent-glow);"></div>
              <span style="font-size: 0.75rem; color: #fff; font-weight: 700;">Iyun</span>
            </div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
          <div style="background: var(--bg-surface-elevated); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-glass);">
            <h4 style="margin-bottom: 0.75rem;">Toifalar bo'yicha ulush</h4>
            <div style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.8;">
              <div>📱 Elektronika: <strong>55%</strong></div>
              <div>👗 Kiyim-kechak: <strong>22%</strong></div>
              <div>🏠 Uy va Oshxona: <strong>15%</strong></div>
              <div>⌚ Aksessuarlar: <strong>8%</strong></div>
            </div>
          </div>
          <div style="background: var(--bg-surface-elevated); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-glass);">
            <h4 style="margin-bottom: 0.75rem;">Konversiya va Ko'rsatkichlar</h4>
            <div style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.8;">
              <div>Konversiya darajasi: <strong>4.8%</strong> (Yuqori)</div>
              <div>O'rtacha chek: <strong>$465.00</strong></div>
              <div>Xaridni bekor qilish: <strong>1.2%</strong></div>
              <div>Mijoz mamnuniyati (CSAT): <strong>98.4%</strong></div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  openProductModal(productId = null) {
    const products = getStoredProducts();
    const product = productId ? products.find(p => p.id === productId) : null;
    this.tempUploadedImage = product ? product.image : '';

    const formHtml = `
      <div class="modal-overlay active" id="prodEditModal" style="z-index: 400;">
        <div class="modal-container" style="max-width: 620px; padding: 2rem;">
          <button class="modal-close-btn" onclick="document.getElementById('prodEditModal').remove()">
            <i class="fa-solid fa-xmark"></i>
          </button>
          
          <h3 style="font-size: 1.3rem; margin-bottom: 1.25rem;">
            ${product ? 'Mahsulotni Tahrirlash' : 'Yangi Mahsulot Qo\'shish'}
          </h3>

          <form id="productSaveForm" onsubmit="AdminController.saveProduct(event, '${productId || ''}')">
            <div class="form-group">
              <label class="form-label">Mahsulot Nomi (O'zbekcha / Nemischa)</label>
              <input type="text" class="form-input" id="editNameUz" value="${product ? (product.name.uz || '') : ''}" required>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Toifa (Category)</label>
                <select class="form-select" id="editCategory">
                  <option value="electronics" ${product && product.category === 'electronics' ? 'selected' : ''}>Elektronika</option>
                  <option value="fashion" ${product && product.category === 'fashion' ? 'selected' : ''}>Kiyim-kechak</option>
                  <option value="home" ${product && product.category === 'home' ? 'selected' : ''}>Uy va Oshxona</option>
                  <option value="accessories" ${product && product.category === 'accessories' ? 'selected' : ''}>Aksessuarlar</option>
                  <option value="books" ${product && product.category === 'books' ? 'selected' : ''}>Kitoblar</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label">Narx (USD $)</label>
                <input type="number" step="0.01" class="form-input" id="editPrice" value="${product ? product.priceUSD : ''}" required>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Zaxira Soni (Stock)</label>
                <input type="number" class="form-input" id="editStock" value="${product ? product.stock : '20'}" required>
              </div>

              <div class="form-group">
                <label class="form-label">Nishon (Badge)</label>
                <select class="form-select" id="editBadge">
                  <option value="">Yo'q</option>
                  <option value="hot" ${product && product.badge === 'hot' ? 'selected' : ''}>Hot 🔥</option>
                  <option value="new" ${product && product.badge === 'new' ? 'selected' : ''}>New ✨</option>
                  <option value="discount" ${product && product.badge === 'discount' ? 'selected' : ''}>Discount %</option>
                </select>
              </div>
            </div>

            <!-- Drag and Drop Image Zone -->
            <div class="form-group">
              <label class="form-label">Mahsulot Rasmi (Drag & Drop yoki Fayl Tanlash)</label>
              <div class="dropzone-area" id="adminDropzone" onclick="document.getElementById('productFileInput').click()">
                <i class="fa-solid fa-cloud-arrow-up" style="font-size: 2rem; color: var(--primary-light); margin-bottom: 0.5rem;"></i>
                <div style="font-size: 0.85rem; color: var(--text-secondary);">${t('drop_image_here', store.lang)}</div>
                <input type="file" id="productFileInput" accept="image/*" style="display: none;" onchange="AdminController.handleFileSelect(event)">
                <div id="dropzonePreview" style="margin-top: 0.75rem;">
                  ${this.tempUploadedImage ? `<img src="${this.tempUploadedImage}" style="height: 70px; border-radius: 6px;">` : ''}
                </div>
              </div>
              <input type="url" class="form-input" id="editImage" placeholder="Yoki rasm URL manzilini kiriting..." value="${product ? product.image : ''}">
            </div>

            <div class="form-group">
              <label class="form-label">Tavsif</label>
              <textarea class="form-textarea" id="editDesc" rows="3" required>${product ? (product.desc.uz || '') : 'Yuqori sifatli kafolatlangan mahsulot.'}</textarea>
            </div>

            <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 1rem;">
              Saqlash
            </button>
          </form>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', formHtml);
    this.setupDropzone();
  },

  setupDropzone() {
    const dropzone = document.getElementById('adminDropzone');
    if (!dropzone) return;

    ['dragenter', 'dragover'].forEach(name => {
      dropzone.addEventListener(name, (e) => {
        e.preventDefault();
        dropzone.classList.add('dragover');
      });
    });

    ['dragleave', 'drop'].forEach(name => {
      dropzone.addEventListener(name, (e) => {
        e.preventDefault();
        dropzone.classList.remove('dragover');
      });
    });

    dropzone.addEventListener('drop', (e) => {
      const files = e.dataTransfer.files;
      if (files && files[0]) {
        this.processFile(files[0]);
      }
    });
  },

  handleFileSelect(e) {
    const file = e.target.files[0];
    if (file) {
      this.processFile(file);
    }
  },

  processFile(file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      this.tempUploadedImage = event.target.result;
      const preview = document.getElementById('dropzonePreview');
      if (preview) {
        preview.innerHTML = `<img src="${this.tempUploadedImage}" style="height: 70px; border-radius: 6px;">`;
      }
      const editImageInput = document.getElementById('editImage');
      if (editImageInput) editImageInput.value = this.tempUploadedImage;
      showToast("Rasm muvaffaqiyatli yuklandi!", "success");
    };
    reader.readAsDataURL(file);
  },

  saveProduct(e, productId) {
    e.preventDefault();
    const products = getStoredProducts();

    const name = document.getElementById('editNameUz').value.trim();
    const category = document.getElementById('editCategory').value;
    const priceUSD = parseFloat(document.getElementById('editPrice').value);
    const stock = parseInt(document.getElementById('editStock').value);
    const badge = document.getElementById('editBadge').value;
    const image = document.getElementById('editImage').value.trim() || this.tempUploadedImage || "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80";
    const desc = document.getElementById('editDesc').value.trim();

    if (productId) {
      const idx = products.findIndex(p => p.id === productId);
      if (idx !== -1) {
        products[idx].name.uz = name;
        products[idx].name.de = name;
        products[idx].name.en = name;
        products[idx].name.ru = name;
        products[idx].category = category;
        products[idx].priceUSD = priceUSD;
        products[idx].stock = stock;
        products[idx].badge = badge;
        products[idx].image = image;
        products[idx].desc.uz = desc;
      }
    } else {
      const newProd = {
        id: "prod_" + Date.now(),
        category,
        name: { uz: name, de: name, en: name, ru: name },
        priceUSD,
        oldPriceUSD: priceUSD * 1.15,
        discountPercent: 10,
        rating: 5.0,
        reviewCount: 1,
        stock,
        badge,
        image,
        desc: { uz: desc, de: desc, en: desc, ru: desc },
        specs: { warranty: "1 Yil Kafolat", origin: "Import" },
        userReviews: []
      };
      products.unshift(newProd);
    }

    saveStoredProducts(products);
    document.getElementById('prodEditModal').remove();
    this.renderProducts(document.getElementById('adminContentArea'));
    showToast("Mahsulot muvaffaqiyatli saqlandi!", "success");
    
    if (typeof App !== 'undefined' && App.renderProducts) {
      App.renderProducts();
    }
  },

  deleteProduct(productId) {
    if (confirm("Haqiqatan ham bu mahsulotni o'chirmoqchimisiz?")) {
      let products = getStoredProducts();
      products = products.filter(p => p.id !== productId);
      saveStoredProducts(products);
      this.renderProducts(document.getElementById('adminContentArea'));
      showToast("Mahsulot o'chirildi", "info");
      
      if (typeof App !== 'undefined' && App.renderProducts) {
        App.renderProducts();
      }
    }
  },

  changeOrderStatus(orderId, newStatus) {
    store.updateOrderStatus(orderId, newStatus);
    showToast(`Buyurtma ${orderId} holati: ${newStatus}`, "info");
  },

  exportOrdersCSV() {
    const orders = store.orders;
    if (orders.length === 0) {
      showToast("Eksport qilish uchun buyurtmalar yo'q", "info");
      return;
    }

    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Order ID,Date,Customer Name,Phone,City,Items Count,Total USD,Payment Method,Status\n";

    orders.forEach(o => {
      const row = [
        o.id,
        new Date(o.date).toLocaleDateString(),
        `"${o.customer.name}"`,
        `"${o.customer.phone}"`,
        `"${o.customer.city}"`,
        o.items.length,
        o.calculations.totalUSD,
        `"${o.paymentMethod}"`,
        o.status
      ].join(",");
      csvContent += row + "\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `GlobalShop_Orders_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
    showToast("CSV Hisobot muvaffaqiyatli yuklab olindi!", "success");
  }
};
