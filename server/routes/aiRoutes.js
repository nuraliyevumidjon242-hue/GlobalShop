/**
 * GlobalShop API - AI Shopping Assistant NLP Endpoint
 */

const express = require('express');
const router = express.Router();

// POST /api/ai/chat
router.post('/chat', (req, res) => {
  const { message, lang = 'uz', currency = 'USD' } = req.body;

  if (!message) {
    return res.status(400).json({ success: false, message: "Xabar kiritilmadi" });
  }

  const query = message.toLowerCase();
  let reply = "";

  if (query.includes('promo') || query.includes('discount') || query.includes('chegirma') || query.includes('rabatt')) {
    reply = lang === 'de'
      ? "Nutzen Sie den Gutscheincode GLOBAL2026 für 20% Rabatt auf Ihre gesamte Bestellung!"
      : "Siz uchun 20% chegirma taqdim etuvchi GLOBAL2026 promokodi mavjud!";
  } else if (query.includes('shipping') || query.includes('versand') || query.includes('yetkazish')) {
    reply = lang === 'de'
      ? "Kostenloser Versand für alle Bestellungen über $500. Lieferzeit: 2-4 Werktage weltweit."
      : "$500 dan ortiq barcha buyurtmalarga bepul yetkazib berish mavjud. Yetkazish muddati: 2-4 ish kuni.";
  } else {
    reply = lang === 'de'
      ? "Ich bin Ihr persönlicher GlobalShop KI-Berater. Schauen Sie sich unsere Bestseller wie das MacBook Pro M3 oder iPhone 16 Pro an!"
      : "Men GlobalShop AI maslahatchisiman. MacBook Pro M3 yoki iPhone 16 Pro kabi eng yangi tovarlarimizni ko'rib chiqishingizni tavsiya qilaman!";
  }

  res.json({
    success: true,
    reply,
    lang,
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
