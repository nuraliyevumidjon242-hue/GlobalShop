/**
 * GlobalShop API - Orders Management Routes
 */

const express = require('express');
const router = express.Router();

let ORDERS_DB = [];

// GET /api/orders
router.get('/', (req, res) => {
  res.json({ success: true, count: ORDERS_DB.length, data: ORDERS_DB });
});

// GET /api/orders/:id
router.get('/:id', (req, res) => {
  const order = ORDERS_DB.find(o => o.id === req.params.id);
  if (!order) {
    return res.status(404).json({ success: false, message: "Buyurtma topilmadi" });
  }
  res.json({ success: true, data: order });
});

// POST /api/orders
router.post('/', (req, res) => {
  const { customer, items, calculations, paymentMethod } = req.body;
  if (!customer || !items || items.length === 0) {
    return res.status(400).json({ success: false, message: "Buyurtma ma'lumotlari to'liq emas" });
  }

  const newOrder = {
    id: "ORD-" + Math.floor(100000 + Math.random() * 900000),
    date: new Date().toISOString(),
    customer,
    items,
    calculations,
    paymentMethod: paymentMethod || "Stripe Card",
    status: "Ordered"
  };

  ORDERS_DB.unshift(newOrder);
  res.status(201).json({ success: true, data: newOrder });
});

// PATCH /api/orders/:id/status
router.patch('/:id/status', (req, res) => {
  const { status } = req.body;
  const order = ORDERS_DB.find(o => o.id === req.params.id);
  if (!order) {
    return res.status(404).json({ success: false, message: "Buyurtma topilmadi" });
  }

  order.status = status;
  res.json({ success: true, data: order });
});

module.exports = router;
