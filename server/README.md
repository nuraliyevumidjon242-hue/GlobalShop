# GlobalShop - Backend RESTful API Server

Ushbu backend moduli **GlobalShop** ko'p tilli va ko'p valyutali e-tijorat platformasi uchun Node.js & Express arxitekturasida ishlab chiqilgan.

## Asosiy Imkoniyatlar
1. **JWT Autentifikatsiya**: Foydalanuvchilar va Admin rollari uchun xavfsiz token tizimi.
2. **Stripe Integratsiyasi**: PCI-DSS xalqaro to'lov xavfsizligi standarti, Payment Intents va Webhook tinglovchisi.
3. **Mahsulotlar Katalogi**: CRUD amallari, qidiruv, saralash va toifalar bo'yicha filtrlash.
4. **Buyurtmalar Boshqaruvi**: Statuslarni real-vaqtda o'zgartirish (Ordered, Packed, Shipped, Delivered).
5. **AI Chatbot Endpoint**: Ko'p tilli (DE, EN, UZ, RU) savdo yordamchisi.

## Ishga tushirish (Getting Started)

```bash
cd server
npm install
npm run dev
# yoki
npm start
```

Server standart holatda `http://localhost:5000` portida ishga tushadi.

## API Endpointlari Ro'yxati

| Metod | Endpoint | Tavsif |
|---|---|---|
| `POST` | `/api/auth/login` | Tizimga kirish va JWT token olish |
| `POST` | `/api/auth/register` | Yangi foydalanuvchini ro'yxatdan o'tkazish |
| `GET` | `/api/products` | Mahsulotlar ro'yxati (filter va qidiruv bilan) |
| `POST` | `/api/products` | Yangi mahsulot qo'shish (Admin) |
| `POST` | `/api/payment/create-payment-intent` | Stripe to'lov niyatini yaratish |
| `POST` | `/api/orders` | Yangi buyurtma yaratish |
| `PATCH` | `/api/orders/:id/status` | Buyurtma holatini o'zgartirish |
| `POST` | `/api/ai/chat` | AI yordamchi bilan muloqot |
