/**
 * GlobalShop - Express Backend API Server
 * Modular Architecture with JWT Middleware, Stripe Webhook & Multi-Language Endpoints
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Security Headers Middleware
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

// Serve static frontend in production
app.use(express.static(path.join(__dirname, '../')));

// Import API Routes
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const aiRoutes = require('./routes/aiRoutes');

// API Mount Points
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/ai', aiRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: "online",
    service: "GlobalShop API Server",
    timestamp: new Date().toISOString(),
    version: "1.0.0",
    languagesSupported: ["DE", "EN", "UZ", "RU"],
    currencies: ["USD", "EUR", "UZS", "RUB"]
  });
});

// Fallback to index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("API Server Error:", err.stack);
  res.status(500).json({
    success: false,
    message: "Internal Server Error / Serverfehler",
    error: process.env.NODE_ENV === 'production' ? null : err.message
  });
});

app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🚀 GlobalShop Server running on http://localhost:${PORT}`);
  console.log(`📦 Multi-Language & Multi-Currency REST API Active`);
  console.log(`💳 Stripe Payment Gateway Ready (PCI-DSS Standard)`);
  console.log(`====================================================`);
});
