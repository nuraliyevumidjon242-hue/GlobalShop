# 🌐 GlobalShop - Ko'p Tilli va Ko'p Valyutali E-Tijorat Platformasi (2026)

![Security Level](https://img.shields.io/badge/Security_Level-100%25_Bcrypt-brightgreen?style=for-the-badge&logo=shield)
![Internationalization](https://img.shields.io/badge/i18n-DE%20%7C%20EN%20%7C%20UZ%20%7C%20RU-blue?style=for-the-badge)
![Payment Gateway](https://img.shields.io/badge/Stripe-PCI--DSS_Simulated-purple?style=for-the-badge)
![Presentation Mode](https://img.shields.io/badge/Pitch_Deck-10_Slides_Active-orange?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

> **Nemis standarti (Lastenheft) asosida ishlab chiqilgan to'liq tsiklli (Full-Stack) E-Commerce tizimi va Interaktiv Taqdimot moduli**

---

## 📌 Loyiha Haqida

**GlobalShop** — xalqaro bozorga chiqishni xohlovchi bizneslar uchun mo'ljallangan, to'liq mahalliylashtirilgan (DE, EN, UZ, RU), ko'p valyutali (USD, EUR, UZS, RUB), yuqori darajada xavfsiz va zamonaviy e-tijorat platformasi.

Loyiha `GlobalShop_Texnik_Topshiriq_va_Prezentatsiya.docx` hujjati talablari asosida 100% bajarildi va eng so'nggi 2026-yilgi aktual texnologiyalar hamda xavfsizlik standartlari (Bcrypt 10 rounds, JWT, OWASP Security Headers) bilan boyitildi.

---

## ✨ Asosiy Xususiyatlar & Yangi Fishkalar

### 1. 🌍 To'liq 4 Tilli Mahalliyllashtirish (i18n)
- **Nemischa (DE)**, **Inglizcha (EN)**, **O'zbekcha (UZ)** va **Ruscha (RU)**.
- Sahifani qayta yuklamasdan real vaqtda bir zumda butun interfeys, katalog va tavsiflar tarjimasi.

### 2. 💱 Real-Vaqtda Ko'p Valyutali Tizim (Multi-Currency)
- **USD ($)**, **EUR (€)**, **UZS (so'm)** va **RUB (₽)**.
- Barcha narxlar, chegirmalar, yetkazib berish va hisob-fakturalar avtomatik joriy kurs bo'yicha hisoblanadi.

### 3. 💳 Xavfsiz To'lov (Stripe PCI-DSS & 3D Secure Simulyatsiya)
- Luhn algoritmi asosidagi kredit karta validatsiyasi.
- 3D Secure 2.0 SMS-kod tasdiqlash oynasi.
- Xariddan so'ng rasmiy soliq invoysi (PDF/Print chek) generatsiyasi va chop etish.

### 4. 🤖 AI Shopping Assistant (Aqlli Sun'iy Intellekt Maslahatchisi)
- 4 tilda mijozga tovarlarni tavsiya qiluvchi, savatcha holatini hisoblab beruvchi va maxsus promokodlarni taqdim etuvchi AI chatbot.

### 5. 📦 Jonli Kuryer Buyurtma Kuzatuvi (Live Order Tracking)
- Xaritada kuryerning harakati va 4 bosqichli buyurtma holati animatsiyasi (Ordered ➔ Packed ➔ Shipped ➔ Delivered).

### 6. 🎤 Interaktiv 10-Slaydli Taqdimot Rejimi (Pitch Deck)
- Germaniyadagi texnik intervyular uchun mo'ljallangan 10 ta slaydning nemis va o'zbek tillaridagi to'liq interaktiv taqdimoti, arxitektura diagrammalari va kod namunalari.

### 7. 🛡️ Administrator Paneli & Bcrypt Hashing (100% Xavfsiz)
- Mahsulotlar CRUD (qo'shish, tahrirlash, o'chirish, rasm manzillari).
- Buyurtmalar holatini boshqarish va yangilash.
- Parollar faqat **Bcrypt (10 rounds)** bilan hashlanadi, hardcoded bypass to'liqligicha olib tashlangan.

---

## 🚀 Qanday Ishga Tushiriladi?

### 1-Usul: Node.js & Express REST API Serveri Bilan (Tavsiya etiladi)
```bash
cd server
npm install
npm run dev
```
So'ng brauzeringizda `http://localhost:5000` manziliga kiring.

### 2-Usul: Brauzerda To'g'ridan-To'g'ri Ochish (Standalone Preview)
`index.html` faylini istalgan brauzerda oching.

---

## 👤 Demo Hisoblar (admin.txt da saqlanadi)

| Rol | Email | Parol | Huquqlar |
|---|---|---|---|
| **Administrator** | `admin@globalshop.de` | `admin123` | To'liq admin paneli, mahsulotlar CRUD, buyurtmalar boshqaruvi |
| **Mijoz (User)** | `user@globalshop.com` | `user123` | Xaridlar, savatcha, profil, buyurtmalar tarixi |

---

## 🎟️ Test Chegirma Promokodlari
- `GLOBAL2026` — **20% Chegirma**
- `UMIDJON` — **25% VIP Chegirma**
- `GERMANY10` — **10% Chegirma**

---

## 📂 Fayllar Strukturasi

```
Umidjon2/
├── index.html                   # Markaziy Web ilova sahifasi
├── admin.txt                    # Admin login & ishga tushirish ma'lumotlari
├── css/
│   └── style.css                # 2026 Glassmorphism & Neon Dizayn tizimi
├── js/
│   ├── i18n.js                  # 4 tildagi (UZ, DE, EN, RU) tarjimalar lug'ati
│   ├── products.js              # Mahsulotlar bazasi va spetsifikatsiyalar
│   ├── store.js                 # Markaziy State & Valyuta konvertori
│   ├── auth.js                  # REST API & JWT autentifikatsiya moduli
│   ├── cart.js                  # Savatcha va hisob-kitoblar draweri
│   ├── checkout.js              # Stripe to'lov va PDF chek generatsiyasi
│   ├── order-tracking.js        # Jonli kuryer buyurtma kuzatuv xaritasi
│   ├── admin.js                 # To'liq Administrator boshqaruv paneli
│   ├── ai-assistant.js          # Ko'p tilli AI Shopping chatbot
│   ├── presentation.js          # 10 ta slaydli Pitch Deck taqdimot tizimi
│   └── app.js                   # Asosiy birlashtiruvchi boshqaruvchi
├── server/
│   ├── package.json             # Backend bog'liqliklari
│   ├── server.js                # Express server (Security Headers + Helmet)
│   ├── routes/                  # RESTful API yo'nalishlari (Bcrypt Auth)
│   ├── .env.example             # Muhit o'zgaruvchilari namunasi
│   └── README.md                # Server qo'llanmasi
└── README.md                    # Loyiha umumiy hujjati
```
