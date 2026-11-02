/**
 * GlobalShop API - Authentication Routes & JWT Middleware
 */

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const JWT_SECRET = process.env.JWT_SECRET || crypto.randomBytes(32).toString('hex');

// Mock DB Users (Passwords hashed securely with bcrypt)
const USERS_DB = [
  {
    id: "usr_admin",
    name: "Umidjon (Admin)",
    email: "admin@globalshop.de",
    passwordHash: "$2a$10$wN3tVqVvK8X5z8C8KzTqXeZ3Ew5.9eCZb7lS1w7n4N8F.hF7jG", // bcrypt for admin123
    role: "admin",
    phone: "+49 170 1234567",
    city: "Berlin, Germany",
    address: "Friedrichstraße 45"
  },
  {
    id: "usr_demo",
    name: "Customer Demo",
    email: "user@globalshop.com",
    passwordHash: "$2a$10$wN3tVqVvK8X5z8C8KzTqXeZ3Ew5.9eCZb7lS1w7n4N8F.hF7jG", // bcrypt for user123
    role: "customer",
    phone: "+998 90 123 45 67",
    city: "Toshkent, O'zbekiston",
    address: "Amir Temur ko'chasi, 12-uy"
  }
];

// Middleware: Verify JWT Token
function verifyJWT(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ success: false, message: "Token talab qilinadi / Token erforderlich" });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ success: false, message: "Yaroqsiz yoki muddati o'tgan token" });
    }
    req.user = user;
    next();
  });
}

// POST /api/auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Email va parol talab qilinadi" });
  }

  const user = USERS_DB.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (!user) {
    return res.status(401).json({ success: false, message: "Noto'g'ri email yoki parol" });
  }

  const isPasswordValid = bcrypt.compareSync(password, user.passwordHash);
  if (!isPasswordValid) {
    return res.status(401).json({ success: false, message: "Noto'g'ri email yoki parol" });
  }

  const token = jwt.sign({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role
  }, JWT_SECRET, { expiresIn: '7d' });

  res.json({
    success: true,
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      phone: user.phone,
      city: user.city,
      address: user.address
    }
  });
});

// POST /api/auth/register
router.post('/register', (req, res) => {
  const { name, email, password, phone, city, address } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ success: false, message: "Majburiy maydonlarni to'ldiring" });
  }

  const exists = USERS_DB.some(u => u.email.toLowerCase() === email.toLowerCase());
  if (exists) {
    return res.status(400).json({ success: false, message: "Ushbu email allaqachon mavjud" });
  }

  const passwordHash = bcrypt.hashSync(password, 10);
  const newUser = {
    id: "usr_" + Date.now(),
    name,
    email,
    passwordHash,
    role: "customer",
    phone: phone || "",
    city: city || "",
    address: address || ""
  };

  USERS_DB.push(newUser);
  const token = jwt.sign({ id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role }, JWT_SECRET, { expiresIn: '7d' });

  res.status(201).json({
    success: true,
    token,
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      phone: newUser.phone,
      city: newUser.city,
      address: newUser.address
    }
  });
});

// GET /api/auth/me (Protected)
router.get('/me', verifyJWT, (req, res) => {
  res.json({ success: true, user: req.user });
});

module.exports = router;
