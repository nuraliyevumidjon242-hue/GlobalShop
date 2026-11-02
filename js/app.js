/**
 * GlobalShop - Main Application Controller (Supercharged 2026 Edition)
 * Voice Search, Speech Synthesis, Canvas Confetti, Advanced Filtering, and Customer Reviews
 */

// Canvas Confetti Generator for celebration moments
const ConfettiFX = {
  canvas: null,
  ctx: null,
  particles: [],
  animationId: null,

  init() {
    this.canvas = document.getElementById('confettiCanvas');
    if (this.canvas) {
      this.ctx = this.canvas.getContext('2d');
      this.resize();
      window.addEventListener('resize', () => this.resize());
    }
  },

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  },

  launch() {
    if (!this.canvas) this.init();
    if (!this.canvas) return;

    this.particles = [];
    const colors = ['#6366f1', '#06b6d4', '#f43f5e', '#10b981', '#fbbf24', '#a855f7'];

    for (let i = 0; i < 150; i++) {
      this.particles.push({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        vx: (Math.random() - 0.5) * 18,
        vy: (Math.random() - 0.7) * 20,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vr: (Math.random() - 0.5) * 10,
        gravity: 0.35,
        alpha: 1,
        decay: Math.random() * 0.015 + 0.005
      });
    }

    if (this.animationId) cancelAnimationFrame(this.animationId);
    this.loop();
  },

  loop() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    let activeCount = 0;
    this.particles.forEach(p => {
      if (p.alpha > 0) {
        activeCount++;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.rotation += p.vr;
        p.alpha -= p.decay;

        this.ctx.save();
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate((p.rotation * Math.PI) / 180);
        this.ctx.fillStyle = p.color;
        this.ctx.globalAlpha = Math.max(0, p.alpha);
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        this.ctx.restore();
      }
    });

    if (activeCount > 0) {
      this.animationId = requestAnimationFrame(() => this.loop());
    } else {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
};

// Web Audio Sound Synthesis for micro-interactions
const AudioFX = {
  ctx: null,
  init() {
    try {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    } catch (e) {}
  },
  playClick() {
    if (!this.ctx) this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch (e) {}
  },
  playSuccess() {
    if (!this.ctx) this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.setValueAtTime(659.25, now + 0.08);
      osc.frequency.setValueAtTime(783.99, now + 0.16);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(now + 0.3);
    } catch (e) {}
  }
};

// Toast notification helper
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  let icon = 'fa-info-circle';
  if (type === 'success') {
    icon = 'fa-circle-check';
    AudioFX.playSuccess();
  } else if (type === 'error') {
    icon = 'fa-triangle-exclamation';
  }

  toast.innerHTML = `
    <i class="fa-solid ${icon}" style="font-size: 1.1rem; color: ${type === 'success' ? '#10b981' : (type === 'error' ? '#f43f5e' : '#38bdf8')};"></i>
    <div style="flex: 1;">${message}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-30px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Speak any text using SpeechSynthesis
function speakText(text, lang = store.lang) {
  if (!('speechSynthesis' in window)) {
    showToast("Brauzeringiz ovoz sintezini qo'llab-quvvatlamaydi", "error");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  const langMap = { de: 'de-DE', en: 'en-US', ru: 'ru-RU', uz: 'tr-TR' };
  utterance.lang = langMap[lang] || 'en-US';
  window.speechSynthesis.speak(utterance);
}

const App = {
  currentCategory: 'all',
  searchQuery: '',
  currentSort: 'default',
  maxPrice: 3000,
  filterDiscountOnly: false,
  filterInStockOnly: false,
  isListeningVoice: false,
  recognition: null,

  init() {
    document.documentElement.setAttribute('data-theme', store.theme);
    document.documentElement.lang = store.lang;
    
    this.updateLanguageDropdown();
    this.updateCurrencyDropdown();
    this.updateThemeButton();
    this.updateAuthUI();

    CartController.init();
    CheckoutController.init();
    OrderTracker.init();
    AdminController.init();
    AIAssistant.init();
    PresentationController.init();
    ConfettiFX.init();

    this.renderProducts();
    this.translateStaticUI();
    this.setupVoiceSearch();

    store.subscribe((event) => {
      if (event === 'LANGUAGE_CHANGED') {
        this.updateLanguageDropdown();
        this.translateStaticUI();
        this.renderProducts();
      } else if (event === 'CURRENCY_CHANGED') {
        this.updateCurrencyDropdown();
        this.updatePriceSliderDisplay();
        this.renderProducts();
      } else if (event === 'THEME_CHANGED') {
        this.updateThemeButton();
      } else if (event === 'AUTH_CHANGED') {
        this.updateAuthUI();
      } else if (event === 'WISHLIST_UPDATED') {
        this.updateWishlistBadges();
      }
    });

    this.setupEventListeners();
  },

  setupVoiceSearch() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = false;

      this.recognition.onstart = () => {
        this.isListeningVoice = true;
        const micBtn = document.getElementById('btnVoiceSearch');
        if (micBtn) micBtn.classList.add('listening');
        showToast(t('voice_search_listening', store.lang), 'info');
      };

      this.recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        const searchInput = document.getElementById('headerSearchInput');
        if (searchInput) searchInput.value = transcript;
        this.handleSearch(transcript);
        showToast(`Qidirilmoqda: "${transcript}"`, 'success');
      };

      this.recognition.onend = () => {
        this.isListeningVoice = false;
        const micBtn = document.getElementById('btnVoiceSearch');
        if (micBtn) micBtn.classList.remove('listening');
      };

      this.recognition.onerror = () => {
        this.isListeningVoice = false;
        const micBtn = document.getElementById('btnVoiceSearch');
        if (micBtn) micBtn.classList.remove('listening');
      };
    }
  },

  toggleVoiceSearch() {
    if (!this.recognition) {
      showToast(t('voice_search_unsupported', store.lang), 'error');
      return;
    }

    if (this.isListeningVoice) {
      this.recognition.stop();
    } else {
      const langCodes = { uz: 'uz-UZ', de: 'de-DE', en: 'en-US', ru: 'ru-RU' };
      this.recognition.lang = langCodes[store.lang] || 'en-US';
      this.recognition.start();
    }
  },

  translateStaticUI() {
    const lang = store.lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = t(key, lang);
      if (el.tagName === 'INPUT' && el.placeholder !== undefined) {
        el.placeholder = val;
      } else {
        el.innerHTML = val;
      }
    });
  },

  updateLanguageDropdown() {
    const btn = document.getElementById('langSelectBtn');
    if (!btn) return;
    const flags = { uz: '🇺🇿 UZ', de: '🇩🇪 DE', en: '🇬🇧 EN', ru: '🇷🇺 RU' };
    btn.innerHTML = `${flags[store.lang]} <i class="fa-solid fa-chevron-down" style="font-size: 0.75rem;"></i>`;

    document.querySelectorAll('#langDropdown .dropdown-item').forEach(item => {
      item.classList.toggle('active', item.dataset.lang === store.lang);
    });
  },

  updateCurrencyDropdown() {
    const btn = document.getElementById('currencySelectBtn');
    if (!btn) return;
    btn.innerHTML = `${store.currency} (${CURRENCY_CONFIG[store.currency].symbol.trim()}) <i class="fa-solid fa-chevron-down" style="font-size: 0.75rem;"></i>`;

    document.querySelectorAll('#currencyDropdown .dropdown-item').forEach(item => {
      item.classList.toggle('active', item.dataset.curr === store.currency);
    });
  },

  updatePriceSliderDisplay() {
    const label = document.getElementById('priceSliderVal');
    if (label) {
      label.textContent = store.formatPrice(this.maxPrice);
    }
  },

  updateThemeButton() {
    const btn = document.getElementById('themeToggleBtn');
    if (!btn) return;
    btn.innerHTML = store.theme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  },

  updateAuthUI() {
    const user = store.currentUser;
    const userBtn = document.getElementById('userNavBtn');
    const adminLink = document.getElementById('adminNavLink');

    if (userBtn) {
      if (user) {
        userBtn.innerHTML = `<i class="fa-solid fa-user-check" style="color: #10b981;"></i> <span>${user.name.split(' ')[0]}</span>`;
        userBtn.onclick = () => App.openProfileModal();
      } else {
        userBtn.innerHTML = `<i class="fa-solid fa-user"></i> <span data-i18n="nav_login">${t('nav_login', store.lang)}</span>`;
        userBtn.onclick = () => App.openAuthModal();
      }
    }

    if (adminLink) {
      adminLink.style.display = (user && user.role === 'admin') ? 'flex' : 'none';
    }
  },

  updateWishlistBadges() {
    const count = store.wishlist.length;
    const badge = document.getElementById('wishlistBadgeHeader');
    if (badge) {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    }

    document.querySelectorAll('.btn-card-action[data-wishlist-id]').forEach(btn => {
      const prodId = btn.getAttribute('data-wishlist-id');
      btn.classList.toggle('active-wishlist', store.isInWishlist(prodId));
    });
  },

  filterByCategory(cat) {
    this.currentCategory = cat;
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.category === cat);
    });
    this.renderProducts();
  },

  handleSearch(query) {
    this.searchQuery = query.toLowerCase().trim();
    const clearBtn = document.getElementById('searchClearBtn');
    if (clearBtn) {
      clearBtn.classList.toggle('active', this.searchQuery.length > 0);
    }
    this.renderProducts();
  },

  clearSearch() {
    const searchInput = document.getElementById('headerSearchInput');
    if (searchInput) searchInput.value = '';
    this.handleSearch('');
  },

  handleSort(sortVal) {
    this.currentSort = sortVal;
    this.renderProducts();
  },

  handlePriceRange(val) {
    this.maxPrice = parseFloat(val);
    this.updatePriceSliderDisplay();
    this.renderProducts();
  },

  toggleDiscountFilter(checked) {
    this.filterDiscountOnly = checked;
    this.renderProducts();
  },

  toggleStockFilter(checked) {
    this.filterInStockOnly = checked;
    this.renderProducts();
  },

  renderProducts() {
    const grid = document.getElementById('productGrid');
    const countEl = document.getElementById('productsCount');
    if (!grid) return;

    let products = getStoredProducts();
    const lang = store.lang;

    // Filter by Category
    if (this.currentCategory !== 'all') {
      products = products.filter(p => p.category === this.currentCategory);
    }

    // Filter by Max Price
    products = products.filter(p => p.priceUSD <= this.maxPrice);

    // Filter by Discount Only
    if (this.filterDiscountOnly) {
      products = products.filter(p => p.badge === 'discount' || p.discountPercent > 0);
    }

    // Filter by In-Stock Only
    if (this.filterInStockOnly) {
      products = products.filter(p => p.stock > 0);
    }

    // Filter by Search Query
    if (this.searchQuery) {
      products = products.filter(p => {
        const nameMatch = (p.name[lang] || p.name['en'] || '').toLowerCase().includes(this.searchQuery);
        const descMatch = (p.desc[lang] || p.desc['en'] || '').toLowerCase().includes(this.searchQuery);
        const catMatch = p.category.toLowerCase().includes(this.searchQuery);
        return nameMatch || descMatch || catMatch;
      });
    }

    // Sort
    if (this.currentSort === 'price_asc') {
      products.sort((a, b) => a.priceUSD - b.priceUSD);
    } else if (this.currentSort === 'price_desc') {
      products.sort((a, b) => b.priceUSD - a.priceUSD);
    } else if (this.currentSort === 'rating') {
      products.sort((a, b) => b.rating - a.rating);
    } else if (this.currentSort === 'name') {
      products.sort((a, b) => (a.name[lang] || '').localeCompare(b.name[lang] || ''));
    }

    if (countEl) {
      countEl.textContent = `${products.length} ta mahsulot`;
    }

    if (products.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon"><i class="fa-solid fa-magnifying-glass"></i></div>
          <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">Mos mahsulotlar topilmadi</h3>
          <p style="color: var(--text-muted);">Qidiruv yoki narx chegarasini o'zgartirib ko'ring.</p>
          <button class="btn btn-secondary" onclick="App.resetAllFilters()" style="margin-top: 1rem;">
            Barcha filtrlarni tozalash
          </button>
        </div>
      `;
      return;
    }

    let html = '';
    products.forEach(p => {
      const prodName = p.name[lang] || p.name['en'];
      const priceFormatted = store.formatPrice(p.priceUSD);
      const oldPriceFormatted = p.oldPriceUSD ? store.formatPrice(p.oldPriceUSD) : null;
      const isWishlisted = store.isInWishlist(p.id);

      let badgeHtml = '';
      if (p.badge === 'hot') {
        badgeHtml = `<span class="badge badge-hot">HOT 🔥</span>`;
      } else if (p.badge === 'new') {
        badgeHtml = `<span class="badge badge-new">NEW ✨</span>`;
      } else if (p.badge === 'discount') {
        badgeHtml = `<span class="badge badge-discount">-${p.discountPercent}%</span>`;
      }

      html += `
        <div class="product-card" id="card_${p.id}">
          <div class="card-image-wrap" onclick="App.openProductDetail('${p.id}')">
            <img src="${p.image}" alt="${prodName}" class="card-img" loading="lazy">
            <div class="card-badges">${badgeHtml}</div>
          </div>

          <div class="card-actions-top">
            <button class="btn-card-action ${isWishlisted ? 'active-wishlist' : ''}" data-wishlist-id="${p.id}" onclick="store.toggleWishlist('${p.id}'); AudioFX.playClick();" title="Saralanganlarga qo'shish">
              <i class="fa-solid fa-heart"></i>
            </button>
            <button class="btn-card-action" onclick="App.openProductDetail('${p.id}')" title="${t('btn_quick_view', lang)}">
              <i class="fa-solid fa-eye"></i>
            </button>
          </div>

          <div class="card-body">
            <span class="card-category">${p.category}</span>
            <h3 class="card-title" onclick="App.openProductDetail('${p.id}')" title="${prodName}">${prodName}</h3>
            
            <div class="card-rating">
              <div class="stars">
                ${'<i class="fa-solid fa-star"></i>'.repeat(Math.floor(p.rating))}
                ${p.rating % 1 !== 0 ? '<i class="fa-solid fa-star-half-stroke"></i>' : ''}
              </div>
              <span style="font-weight: 700; font-size: 0.85rem;">${p.rating}</span>
              <span class="review-count">(${p.reviewCount} ${t('reviews', lang)})</span>
            </div>

            <div class="card-footer">
              <div class="price-wrapper">
                <span class="price-current">${priceFormatted}</span>
                ${oldPriceFormatted ? `<span class="price-old">${oldPriceFormatted}</span>` : ''}
              </div>

              <button class="btn-add-to-cart" onclick="store.addToCart('${p.id}'); AudioFX.playClick(); showToast('${prodName} savatga qo\\'shildi', 'success');">
                <i class="fa-solid fa-cart-plus"></i> ${t('btn_add_cart', lang)}
              </button>
            </div>
          </div>
        </div>
      `;
    });

    grid.innerHTML = html;
    this.updateWishlistBadges();
  },

  resetAllFilters() {
    this.searchQuery = '';
    this.currentCategory = 'all';
    this.maxPrice = 3000;
    this.filterDiscountOnly = false;
    this.filterInStockOnly = false;

    const searchInput = document.getElementById('headerSearchInput');
    if (searchInput) searchInput.value = '';

    const priceSlider = document.getElementById('priceRangeSlider');
    if (priceSlider) priceSlider.value = 3000;

    const discountChk = document.getElementById('chkDiscountOnly');
    if (discountChk) discountChk.checked = false;

    const stockChk = document.getElementById('chkInStockOnly');
    if (stockChk) stockChk.checked = false;

    this.updatePriceSliderDisplay();
    this.filterByCategory('all');
  },

  openProductDetail(productId) {
    const products = getStoredProducts();
    const p = products.find(prod => prod.id === productId);
    if (!p) return;

    const modal = document.getElementById('productDetailModal');
    const container = document.getElementById('productDetailContainer');
    const lang = store.lang;

    const prodName = p.name[lang] || p.name['en'];
    const prodDesc = p.desc[lang] || p.desc['en'];
    const priceFormatted = store.formatPrice(p.priceUSD);
    const oldPriceFormatted = p.oldPriceUSD ? store.formatPrice(p.oldPriceUSD) : null;

    let specsHtml = '';
    if (p.specs) {
      Object.entries(p.specs).forEach(([k, v]) => {
        specsHtml += `
          <div class="spec-box">
            <div class="spec-label">${k.toUpperCase()}</div>
            <div class="spec-val">${v}</div>
          </div>
        `;
      });
    }

    const reviews = p.userReviews || [];
    let reviewsHtml = '';
    reviews.forEach(r => {
      reviewsHtml += `
        <div class="review-item">
          <div class="review-user-header">
            <strong>${r.name}</strong>
            <div class="stars" style="font-size: 0.75rem;">
              ${'<i class="fa-solid fa-star"></i>'.repeat(r.rating)}
            </div>
          </div>
          <p style="font-size: 0.85rem; color: var(--text-secondary);">${r.comment}</p>
          <span style="font-size: 0.7rem; color: var(--text-muted);">${r.date}</span>
        </div>
      `;
    });

    container.innerHTML = `
      <div class="product-modal-grid">
        <div>
          <div class="modal-gallery-main">
            <img src="${p.image}" alt="${prodName}">
          </div>
        </div>

        <div>
          <span class="badge badge-discount" style="margin-bottom: 0.5rem;">${p.category.toUpperCase()}</span>
          <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem;">${prodName}</h2>
          
          <div class="card-rating" style="margin-bottom: 0.75rem;">
            <div class="stars" style="color: #fbbf24;">
              ${'<i class="fa-solid fa-star"></i>'.repeat(Math.floor(p.rating))}
            </div>
            <span style="font-weight: 700;">${p.rating} / 5.0</span>
            <span class="review-count">(${p.reviewCount} ${t('reviews', lang)})</span>
            <span style="margin-left: auto; color: var(--success); font-weight: 600; font-size: 0.85rem;">
              <i class="fa-solid fa-circle-check"></i> ${p.stock} ta ${t('in_stock', lang)}
            </span>
          </div>

          <div style="margin-bottom: 1rem;">
            <span style="font-size: 1.8rem; font-weight: 800; color: var(--text-primary);">${priceFormatted}</span>
            ${oldPriceFormatted ? `<span style="text-decoration: line-through; color: var(--text-muted); margin-left: 0.75rem;">${oldPriceFormatted}</span>` : ''}
          </div>

          <p style="color: var(--text-secondary); line-height: 1.5; margin-bottom: 1rem; font-size: 0.9rem;">
            ${prodDesc}
          </p>

          <h4 style="font-size: 0.9rem; margin-bottom: 0.5rem;">${t('specs_title', lang)}:</h4>
          <div class="modal-specs">${specsHtml}</div>

          <div style="display: flex; gap: 1rem; margin-top: 1.25rem;">
            <button class="btn btn-primary" onclick="store.addToCart('${p.id}'); AudioFX.playClick(); showToast('${prodName} savatga qo\\'shildi', 'success'); App.closeProductDetail();" style="flex: 1; padding: 0.85rem;">
              <i class="fa-solid fa-cart-shopping"></i> ${t('btn_add_cart', lang)}
            </button>
            <button class="btn btn-secondary" onclick="store.toggleWishlist('${p.id}'); AudioFX.playClick();" style="padding: 0.85rem;">
              <i class="fa-solid fa-heart"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Reviews Section -->
      <div class="reviews-section">
        <h3 style="font-size: 1.2rem; margin-bottom: 1rem;">${t('customer_reviews', lang)} (${reviews.length})</h3>
        
        <div id="productReviewsList" style="margin-bottom: 1.5rem;">
          ${reviewsHtml || '<p style="color: var(--text-muted); font-size: 0.85rem;">Hozircha sharhlar qoldirilmagan. Birinchi bo\'lib fikr bildiring!</p>'}
        </div>

        <!-- Add Review Form -->
        <div style="background: var(--bg-surface-elevated); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-glass);">
          <h4 style="font-size: 0.95rem; margin-bottom: 0.75rem;">${t('add_review_title', lang)}</h4>
          <form onsubmit="App.handleReviewSubmit(event, '${p.id}')">
            <div class="form-group">
              <label class="form-label">Bahoyingiz:</label>
              <select class="form-select" id="reviewRatingSelect" style="max-width: 160px;">
                <option value="5">⭐⭐⭐⭐⭐ (5 / 5)</option>
                <option value="4">⭐⭐⭐⭐ (4 / 5)</option>
                <option value="3">⭐⭐⭐ (3 / 5)</option>
                <option value="2">⭐⭐ (2 / 5)</option>
                <option value="1">⭐ (1 / 5)</option>
              </select>
            </div>
            <div class="form-group">
              <input type="text" class="form-input" id="reviewAuthorInput" placeholder="Ismingiz" value="${store.currentUser ? store.currentUser.name : ''}" required>
            </div>
            <div class="form-group">
              <textarea class="form-textarea" id="reviewCommentInput" rows="2" placeholder="Fikringizni yozing..." required></textarea>
            </div>
            <button type="submit" class="btn btn-secondary" style="font-size: 0.85rem;">
              ${t('btn_submit_review', lang)}
            </button>
          </form>
        </div>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  },

  handleReviewSubmit(e, productId) {
    e.preventDefault();
    const rating = document.getElementById('reviewRatingSelect').value;
    const author = document.getElementById('reviewAuthorInput').value.trim();
    const comment = document.getElementById('reviewCommentInput').value.trim();

    if (!author || !comment) return;

    addProductReview(productId, author, rating, comment);
    showToast(t('review_success', store.lang), 'success');
    this.openProductDetail(productId);
    this.renderProducts();
  },

  closeProductDetail() {
    const modal = document.getElementById('productDetailModal');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = '';
  },

  openAuthModal(tab = 'login') {
    const modal = document.getElementById('authModal');
    if (!modal) return;
    this.switchAuthTab(tab);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  },

  closeAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = '';
  },

  switchAuthTab(tab) {
    const loginForm = document.getElementById('loginFormContainer');
    const registerForm = document.getElementById('registerFormContainer');
    const loginTabBtn = document.getElementById('authLoginTabBtn');
    const regTabBtn = document.getElementById('authRegTabBtn');

    if (tab === 'login') {
      if (loginForm) loginForm.style.display = 'block';
      if (registerForm) registerForm.style.display = 'none';
      if (loginTabBtn) loginTabBtn.classList.add('active');
      if (regTabBtn) regTabBtn.classList.remove('active');
    } else {
      if (loginForm) loginForm.style.display = 'none';
      if (registerForm) registerForm.style.display = 'block';
      if (loginTabBtn) loginTabBtn.classList.remove('active');
      if (regTabBtn) regTabBtn.classList.add('active');
    }
  },

  handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const pass = document.getElementById('loginPassword').value;
    
    const res = AuthManager.login(email, pass);
    if (res.success) {
      showToast(`Xush kelibsiz, ${res.user.name}!`, 'success');
      this.closeAuthModal();
    } else {
      showToast(res.message, 'error');
    }
  },

  handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const pass = document.getElementById('regPassword').value;
    const phone = document.getElementById('regPhone').value;
    const city = document.getElementById('regCity').value;

    const res = AuthManager.register(name, email, pass, phone, city);
    if (res.success) {
      showToast(`Muvaffaqiyatli ro'yxatdan o'tdingiz!`, 'success');
      this.closeAuthModal();
    } else {
      showToast(res.message, 'error');
    }
  },

  openProfileModal() {
    const user = store.currentUser;
    if (!user) return;

    const container = document.getElementById('profileModalContainer');
    if (!container) return;

    container.innerHTML = `
      <div style="padding: 2rem;">
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
          <div style="width: 56px; height: 56px; border-radius: 50%; background: linear-gradient(135deg, var(--primary), var(--secondary)); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; color: white;">
            <i class="fa-solid fa-user"></i>
          </div>
          <div>
            <h3 style="font-size: 1.3rem;">${user.name}</h3>
            <span style="font-size: 0.85rem; color: var(--text-muted);">${user.email} • <strong>${user.role.toUpperCase()}</strong></span>
          </div>
        </div>

        <div style="background: var(--bg-surface-elevated); padding: 1rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; font-size: 0.9rem;">
          <div><strong>Telefon:</strong> ${user.phone || 'Kiritilmagan'}</div>
          <div style="margin-top: 4px;"><strong>Manzil:</strong> ${user.city ? user.city + ', ' + user.address : 'Kiritilmagan'}</div>
        </div>

        <div style="display: flex; gap: 1rem;">
          <button class="btn btn-primary" onclick="App.openOrdersModal(); document.getElementById('profileModal').classList.remove('active');" style="flex: 1;">
            <i class="fa-solid fa-clock-rotate-left"></i> Buyurtmalarim (${store.orders.length})
          </button>
          <button class="btn btn-accent" onclick="AuthManager.logout(); document.getElementById('profileModal').classList.remove('active'); showToast('Tizimdan chiqildi', 'info');">
            <i class="fa-solid fa-arrow-right-from-bracket"></i> Chiqish
          </button>
        </div>
      </div>
    `;

    document.getElementById('profileModal').classList.add('active');
  },

  openOrdersModal() {
    const modal = document.getElementById('ordersModal');
    const container = document.getElementById('ordersListContainer');
    if (!container || !modal) return;

    if (store.orders.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon"><i class="fa-solid fa-box-open"></i></div>
          <p style="color: var(--text-muted);">Sizda hali buyurtmalar yo'q</p>
        </div>
      `;
    } else {
      let html = '';
      store.orders.forEach(o => {
        html += `
          <div style="background: var(--bg-surface-elevated); border: 1px solid var(--border-glass); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
              <span style="font-weight: 700; font-family: var(--font-mono); color: var(--primary-light);">${o.id}</span>
              <span class="badge badge-discount">${o.status}</span>
            </div>
            <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.75rem;">
              ${new Date(o.date).toLocaleString()} • ${o.items.length} ta mahsulot
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px dashed var(--border-glass); padding-top: 0.75rem;">
              <strong style="font-size: 1.1rem;">${store.formatPrice(o.calculations.totalUSD)}</strong>
              <div style="display: flex; gap: 0.5rem;">
                <button class="btn btn-secondary" onclick="OrderTracker.trackOrder('${o.id}'); modal.classList.remove('active');" style="padding: 4px 10px; font-size: 0.8rem;">
                  <i class="fa-solid fa-route"></i> Kuzatish
                </button>
                <button class="btn btn-primary" onclick="CheckoutController.showInvoice(store.orders.find(ord => ord.id === '${o.id}')); modal.classList.remove('active');" style="padding: 4px 10px; font-size: 0.8rem;">
                  <i class="fa-solid fa-file-invoice"></i> Chek
                </button>
              </div>
            </div>
          </div>
        `;
      });
      container.innerHTML = html;
    }

    modal.classList.add('active');
  },

  openWishlistModal() {
    const modal = document.getElementById('wishlistModal');
    const container = document.getElementById('wishlistContainer');
    if (!container || !modal) return;

    const products = getStoredProducts();
    const wishlisted = products.filter(p => store.isInWishlist(p.id));

    if (wishlisted.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon"><i class="fa-solid fa-heart-crack"></i></div>
          <p style="color: var(--text-muted);">${t('empty_wishlist', store.lang)}</p>
        </div>
      `;
    } else {
      let html = '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">';
      wishlisted.forEach(p => {
        const name = p.name[store.lang] || p.name['en'];
        html += `
          <div style="background: var(--bg-surface-elevated); border: 1px solid var(--border-glass); border-radius: var(--radius-md); padding: 0.75rem; display: flex; gap: 0.75rem; align-items: center;">
            <img src="${p.image}" style="width: 60px; height: 60px; border-radius: 6px; object-fit: cover;">
            <div style="flex: 1;">
              <h4 style="font-size: 0.85rem; font-weight: 600; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden;">${name}</h4>
              <div style="font-weight: 700; color: var(--primary-light); font-size: 0.9rem;">${store.formatPrice(p.priceUSD)}</div>
              <button class="btn btn-primary" onclick="store.addToCart('${p.id}'); AudioFX.playClick(); showToast('Savatga qo\\'shildi', 'success');" style="padding: 2px 8px; font-size: 0.75rem; margin-top: 4px;">
                Savatga
              </button>
            </div>
          </div>
        `;
      });
      html += '</div>';
      container.innerHTML = html;
    }

    modal.classList.add('active');
  },

  setupEventListeners() {
    document.getElementById('langSelectBtn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      document.getElementById('langDropdown')?.classList.toggle('show');
      document.getElementById('currencyDropdown')?.classList.remove('show');
    });

    document.getElementById('currencySelectBtn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      document.getElementById('currencyDropdown')?.classList.toggle('show');
      document.getElementById('langDropdown')?.classList.remove('show');
    });

    window.addEventListener('click', () => {
      document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('show'));
    });

    document.getElementById('btnApplyCoupon')?.addEventListener('click', () => {
      const code = document.getElementById('cartCouponInput')?.value;
      if (!code) return;
      const res = store.applyCoupon(code);
      if (res.success) {
        showToast(`Gutschein / Promokod faollashtirildi: -${res.percent}%`, 'success');
      } else {
        showToast("Noto'g'ri promokod! Test uchun: GLOBAL2026", 'error');
      }
    });

    document.getElementById('headerSearchInput')?.addEventListener('input', (e) => {
      this.handleSearch(e.target.value);
    });

    document.getElementById('checkoutForm')?.addEventListener('submit', (e) => {
      CheckoutController.processPayment(e);
    });

    document.getElementById('btnConfirmSms')?.addEventListener('click', () => {
      CheckoutController.confirm3DSecure();
    });

    document.getElementById('aiChatInput')?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        AIAssistant.sendUserMessage();
      }
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
