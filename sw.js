/**
 * GlobalShop - Service Worker for Offline Caching & PWA Support
 */

const CACHE_NAME = 'globalshop-cache-v2026';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './css/style.css',
  './js/i18n.js',
  './js/products.js',
  './js/store.js',
  './js/auth.js',
  './js/cart.js',
  './js/checkout.js',
  './js/order-tracking.js',
  './js/admin.js',
  './js/ai-assistant.js',
  './js/presentation.js',
  './js/app.js',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Network first, fallback to cache
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        return response;
      })
      .catch(() => {
        return caches.match(event.request);
      })
  );
});
