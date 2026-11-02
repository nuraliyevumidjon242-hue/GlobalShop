/**
 * GlobalShop - Live Order Tracking Module
 * Real-time progressive courier simulation with dynamic map and status updates
 */

const OrderTracker = {
  activeInterval: null,

  init() {
    this.modal = document.getElementById('trackingModal');
  },

  trackOrder(orderId) {
    const order = store.orders.find(o => o.id === orderId);
    if (!order) {
      showToast("Buyurtma topilmadi!", "error");
      return;
    }

    const container = document.getElementById('trackingContainer');
    if (!container) return;

    this.render(order);
    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Start live simulation if order is in progress
    this.startSimulation(order);
  },

  close() {
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
    if (this.activeInterval) {
      clearInterval(this.activeInterval);
    }
  },

  render(order) {
    const container = document.getElementById('trackingContainer');
    const lang = store.lang;

    const statuses = ['Ordered', 'Packed', 'Shipped', 'Delivered'];
    const currentIndex = statuses.indexOf(order.status) !== -1 ? statuses.indexOf(order.status) : 0;
    const progressPercent = (currentIndex / (statuses.length - 1)) * 100;

    container.innerHTML = `
      <div class="tracking-container">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
          <div>
            <h3 style="font-size: 1.4rem; margin-bottom: 0.25rem;">${t('track_modal_title', lang)}</h3>
            <span style="font-size: 0.85rem; color: var(--text-muted); font-family: var(--font-mono);">${order.id}</span>
          </div>
          <span class="badge badge-discount" style="padding: 0.4rem 0.8rem; font-size: 0.85rem;">${order.status.toUpperCase()}</span>
        </div>

        <!-- 4-step Timeline -->
        <div class="tracking-timeline">
          <div class="timeline-progress-bar" style="width: ${progressPercent}%;"></div>

          <div class="step-node ${currentIndex >= 0 ? 'completed' : ''} ${currentIndex === 0 ? 'current' : ''}">
            <div class="step-icon"><i class="fa-solid fa-receipt"></i></div>
            <span class="step-label">${t('step_ordered', lang)}</span>
            <span class="step-time">${new Date(order.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          </div>

          <div class="step-node ${currentIndex >= 1 ? 'completed' : ''} ${currentIndex === 1 ? 'current' : ''}">
            <div class="step-icon"><i class="fa-solid fa-box-open"></i></div>
            <span class="step-label">${t('step_packed', lang)}</span>
            <span class="step-time">${currentIndex >= 1 ? 'Bajarildi' : 'Kutilmoqda'}</span>
          </div>

          <div class="step-node ${currentIndex >= 2 ? 'completed' : ''} ${currentIndex === 2 ? 'current' : ''}">
            <div class="step-icon"><i class="fa-solid fa-truck-fast"></i></div>
            <span class="step-label">${t('step_shipped', lang)}</span>
            <span class="step-time">${currentIndex >= 2 ? 'Yo\'lda' : 'Kutilmoqda'}</span>
          </div>

          <div class="step-node ${currentIndex >= 3 ? 'completed' : ''} ${currentIndex === 3 ? 'current' : ''}">
            <div class="step-icon"><i class="fa-solid fa-house-chimney-check"></i></div>
            <span class="step-label">${t('step_delivered', lang)}</span>
            <span class="step-time">${currentIndex >= 3 ? 'Topshirildi' : 'Kutilmoqda'}</span>
          </div>
        </div>

        <!-- Map Simulation -->
        <div class="tracking-map">
          <div style="position: absolute; top: 12px; left: 16px; font-size: 0.75rem; color: #94a3b8; z-index: 5;">
            <i class="fa-solid fa-satellite-dish"></i> GPS Jonli Kuryer Telemetriyasi
          </div>
          <div class="map-road"></div>
          <div class="courier-marker" id="courierMarker" style="left: ${Math.max(10, Math.min(85, 10 + (progressPercent * 0.75)))}%;">
            <i class="fa-solid fa-motorcycle"></i>
          </div>
          <div style="position: absolute; bottom: 12px; right: 16px; font-size: 0.8rem; color: #38bdf8;">
            <i class="fa-solid fa-location-dot"></i> ${order.customer.city}
          </div>
        </div>

        <div style="margin-top: 1.5rem; padding: 1rem; background: var(--bg-surface-elevated); border-radius: var(--radius-md); display: flex; align-items: center; gap: 1rem;">
          <div style="width: 44px; height: 44px; border-radius: 50%; background: var(--primary); display: flex; align-items: center; justify-content: center; color: white;">
            <i class="fa-solid fa-user-ninja"></i>
          </div>
          <div style="flex: 1;">
            <div style="font-weight: 700; font-size: 0.95rem;">Kuryer: Rustam Sh.</div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">${t('courier_status', lang)}</div>
          </div>
          <button class="btn btn-secondary" onclick="showToast('Kuryer bilan bog\'lanish: +998 90 999 88 77', 'info')" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">
            <i class="fa-solid fa-phone"></i> Qo'ng'iroq
          </button>
        </div>
      </div>
    `;
  },

  startSimulation(order) {
    if (this.activeInterval) clearInterval(this.activeInterval);
    
    // Auto advance order status every 12 seconds for realistic demo feel
    this.activeInterval = setInterval(() => {
      const statuses = ['Ordered', 'Packed', 'Shipped', 'Delivered'];
      let currentIdx = statuses.indexOf(order.status);
      if (currentIdx < statuses.length - 1) {
        const nextStatus = statuses[currentIdx + 1];
        store.updateOrderStatus(order.id, nextStatus);
        this.render(order);
        showToast(`Buyurtma statusi yangilandi: ${nextStatus}`, 'info');
      } else {
        clearInterval(this.activeInterval);
      }
    }, 12000);
  }
};
