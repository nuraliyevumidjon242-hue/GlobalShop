/**
 * GlobalShop API - Products CRUD & Filtering Routes
 */

const express = require('express');
const router = express.Router();

let PRODUCTS_DB = [
  {
    id: "prod_1",
    category: "electronics",
    name: {
      uz: "MacBook Pro 16 M3 Max Ultra (32GB / 1TB)",
      de: "Apple MacBook Pro 16 M3 Max (32GB RAM / 1TB SSD)",
      en: "Apple MacBook Pro 16 M3 Max (32GB / 1TB SSD)",
      ru: "Apple MacBook Pro 16 M3 Max (32ГБ / 1ТБ SSD)"
    },
    priceUSD: 2499,
    oldPriceUSD: 2799,
    discountPercent: 11,
    rating: 4.9,
    reviewCount: 142,
    stock: 18,
    badge: "hot",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "prod_2",
    category: "electronics",
    name: {
      uz: "Sony WH-1000XM5 Simsiz Shovqinni So'ndiruvchi Quloqchin",
      de: "Sony WH-1000XM5 Wireless Noise-Cancelling Kopfhörer",
      en: "Sony WH-1000XM5 Wireless Noise-Canceling Headphones",
      ru: "Беспроводные наушники Sony WH-1000XM5 с шумоподавлением"
    },
    priceUSD: 399,
    oldPriceUSD: 449,
    discountPercent: 11,
    rating: 4.8,
    reviewCount: 310,
    stock: 35,
    badge: "discount",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
  }
];

// GET /api/products (Optional ?category=electronics&search=sony&sort=price_asc)
router.get('/', (req, res) => {
  let result = [...PRODUCTS_DB];
  const { category, search, sort } = req.query;

  if (category && category !== 'all') {
    result = result.filter(p => p.category === category);
  }

  if (search) {
    const q = search.toLowerCase();
    result = result.filter(p => {
      return Object.values(p.name).some(val => val.toLowerCase().includes(q)) || p.category.includes(q);
    });
  }

  if (sort === 'price_asc') {
    result.sort((a, b) => a.priceUSD - b.priceUSD);
  } else if (sort === 'price_desc') {
    result.sort((a, b) => b.priceUSD - a.priceUSD);
  } else if (sort === 'rating') {
    result.sort((a, b) => b.rating - a.rating);
  }

  res.json({ success: true, count: result.length, data: result });
});

// GET /api/products/:id
router.get('/:id', (req, res) => {
  const prod = PRODUCTS_DB.find(p => p.id === req.params.id);
  if (!prod) {
    return res.status(404).json({ success: false, message: "Mahsulot topilmadi" });
  }
  res.json({ success: true, data: prod });
});

// POST /api/products (Admin CRUD)
router.post('/', (req, res) => {
  const { name, category, priceUSD, stock, image, desc } = req.body;
  const newProduct = {
    id: "prod_" + Date.now(),
    name: typeof name === 'object' ? name : { uz: name, de: name, en: name, ru: name },
    category: category || "electronics",
    priceUSD: parseFloat(priceUSD) || 100,
    oldPriceUSD: parseFloat(priceUSD) * 1.15,
    discountPercent: 10,
    rating: 5.0,
    reviewCount: 1,
    stock: parseInt(stock) || 10,
    badge: "new",
    image: image || "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
  };

  PRODUCTS_DB.unshift(newProduct);
  res.status(201).json({ success: true, data: newProduct });
});

// PUT /api/products/:id
router.put('/:id', (req, res) => {
  const idx = PRODUCTS_DB.findIndex(p => p.id === req.params.id);
  if (idx === -1) {
    return res.status(404).json({ success: false, message: "Mahsulot topilmadi" });
  }

  PRODUCTS_DB[idx] = { ...PRODUCTS_DB[idx], ...req.body };
  res.json({ success: true, data: PRODUCTS_DB[idx] });
});

// DELETE /api/products/:id
router.delete('/:id', (req, res) => {
  PRODUCTS_DB = PRODUCTS_DB.filter(p => p.id !== req.params.id);
  res.json({ success: true, message: "Mahsulot o'chirildi" });
});

module.exports = router;
