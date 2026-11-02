# GlobalShop

> A multilingual, multi-currency e-commerce demo with an interactive pitch deck.

[O'zbekcha](#uzbek-ozbekcha) · [English](#english) · [Deutsch](#deutsch) · [English pitch deck](#english-pitch-deck)

---

## Uzbek (O'zbekcha)

GlobalShop — xalqaro savdo tajribasini namoyish etuvchi ko'p tilli e-commerce demo loyihasi. Unda mahsulotlar katalogi, savatcha, checkout, admin paneli va interaktiv taqdimot mavjud.

### Imkoniyatlar

- **4 ta til:** o'zbek, ingliz, nemis va rus tillarida interfeys.
- **4 ta valyuta:** USD, EUR, UZS va RUB ko'rinishida narxlar.
- Mahsulotlarni ko'rish, qidirish, saralash va savatchaga qo'shish.
- Demo checkout va buyurtma holatini kuzatish.
- JWT asosidagi login/registratsiya API-si va bcrypt parol xeshlash.
- Mahsulotlar va buyurtmalarni boshqarish uchun admin paneli.
- Xarid bo'yicha tavsiyalar beruvchi demo AI yordamchisi.
- 10 slaydli interaktiv pitch deck va PWA manifest/service worker.

### Texnologiyalar

- Frontend: HTML, CSS va brauzer JavaScript.
- Backend: Node.js va Express REST API.
- Qo'shimcha: JWT, bcryptjs va Stripe SDK (kalit sozlanganda).

### Ishga tushirish

Node.js backend va frontendni birga ishga tushirish:

```bash
cd server
npm install
npm run dev
```

Brauzerda `http://localhost:5000` manzilini oching. Faqat frontendni ko'rish uchun `index.html` faylini bevosita ochish mumkin, ammo API talab qiladigan imkoniyatlar bunda ishlamasligi mumkin.

### Demo ma'lumotlari

Demo hisoblari va test checkout ma'lumotlari [admin.txt](./admin.txt) faylida keltirilgan. Ularni faqat lokal demo uchun ishlating; haqiqiy parollar yoki to'lov ma'lumotlari bilan almashtirmang.

### Muhim cheklovlar

Bu loyiha demo/prototip bo'lib, production uchun tayyor tizim emas. Backendda foydalanuvchilar, mahsulotlar va buyurtmalar uchun doimiy ma'lumotlar bazasi sozlanmagan; to'lov jarayonining ayrim qismlari simulyatsiya qilinadi. Haqiqiy foydalanishdan oldin ma'lumotlar bazasi, autentifikatsiya va ruxsatlar nazorati, HTTPS, server sozlamalari hamda to'lov provayderini sozlash va tekshirish kerak.

### Лиценз

Backend `package.json` faylida MIT litsenziyasi ko'rsatilgan. Loyiha ildizida alohida `LICENSE` fayli mavjud bo'lsa, uning shartlariga qarang.

---

## English

GlobalShop is a multilingual e-commerce demo showcasing an international shopping experience. It includes a product catalog, cart, checkout flow, admin dashboard, and interactive pitch deck.

### Features

- **Four interface languages:** Uzbek, English, German, and Russian.
- **Four currencies:** USD, EUR, UZS, and RUB.
- Browse, search, sort, and add products to the cart.
- Demo checkout and order-status tracking.
- JWT-based login/registration API with bcrypt password hashing.
- Admin dashboard for product and order management.
- Demo AI shopping assistant with product recommendations.
- Interactive 10-slide pitch deck and PWA manifest/service worker.

### Technology

- Frontend: HTML, CSS, and browser JavaScript.
- Backend: Node.js and Express REST API.
- Additional libraries: JWT, bcryptjs, and Stripe SDK (when configured).

### Run locally

Start the backend and serve the frontend:

```bash
cd server
npm install
npm run dev
```

Open `http://localhost:5000` in your browser. You can also open `index.html` directly for a frontend preview, but features that depend on the API may not work.

### Demo credentials

Demo accounts and checkout test details are documented in [admin.txt](./admin.txt). Use them only for local demonstrations; do not reuse real passwords or payment details.

### Limitations

This is a demo/prototype, not a production-ready commerce system. A persistent database for users, products, and orders is not configured in the backend, and some payment flows run in simulated mode. Before real-world use, configure and review persistent storage, authentication and authorization, HTTPS, server deployment, and a real payment provider.

### License

The project declares the MIT license. See [LICENSE](./LICENSE) if the license file is present.

---

## Deutsch

GlobalShop ist eine mehrsprachige E-Commerce-Demo, die ein internationales Einkaufserlebnis präsentiert. Das Projekt umfasst einen Produktkatalog, Warenkorb, Checkout-Ablauf, ein Admin-Dashboard und eine interaktive Präsentation.

### Funktionen

- **Vier Oberflächensprachen:** Usbekisch, Englisch, Deutsch und Russisch.
- **Vier Währungen:** USD, EUR, UZS und RUB.
- Produkte anzeigen, suchen, sortieren und in den Warenkorb legen.
- Demo-Checkout und Verfolgung des Bestellstatus.
- JWT-basierte Login-/Registrierungs-API mit bcrypt-Passwort-Hashing.
- Admin-Dashboard zur Verwaltung von Produkten und Bestellungen.
- Demo-Kaufassistent mit Produktempfehlungen.
- Interaktives Pitch Deck mit 10 Folien sowie PWA-Manifest und Service Worker.

### Technologie

- Frontend: HTML, CSS und JavaScript im Browser.
- Backend: Node.js und Express REST API.
- Weitere Bibliotheken: JWT, bcryptjs und Stripe SDK (bei entsprechender Konfiguration).

### Lokal starten

Backend starten und Frontend bereitstellen:

```bash
cd server
npm install
npm run dev
```

Anschließend `http://localhost:5000` im Browser öffnen. Für eine reine Frontend-Vorschau kann auch `index.html` direkt geöffnet werden; API-abhängige Funktionen sind dabei möglicherweise nicht verfügbar.

### Demo-Zugangsdaten

Demo-Konten und Checkout-Testdaten stehen in [admin.txt](./admin.txt). Diese Daten sind ausschließlich für lokale Demonstrationen gedacht. Verwenden Sie keine echten Passwörter oder Zahlungsdaten.

### Einschränkungen

Dieses Projekt ist eine Demo/ein Prototyp und kein produktionsreifes Shopsystem. Eine persistente Datenbank für Benutzer, Produkte und Bestellungen ist im Backend nicht eingerichtet; einige Zahlungsabläufe werden simuliert. Vor einem realen Einsatz müssen persistente Speicherung, Authentifizierung und Autorisierung, HTTPS, Serverbetrieb und ein echter Zahlungsanbieter eingerichtet und überprüft werden.

### Lizenz

Das Projekt gibt eine MIT-Lizenz an. Falls vorhanden, finden Sie die Lizenzbedingungen in [LICENSE](./LICENSE).

---

## English pitch deck

### Slide 1 — GlobalShop: Shopping without borders

GlobalShop is a multilingual e-commerce demo designed to make an international shopping experience easier to explore. It brings the storefront, shopping flow, administration tools, and product assistance together in one web application.

### Slide 2 — The challenge

Customers expect to browse and shop in a language and currency that feel familiar. A small retailer building separate storefront experiences for every market can face unnecessary complexity.

### Slide 3 — The concept

GlobalShop demonstrates one storefront with four interface languages and four currency choices. Customers can discover products, add them to a cart, and follow a demo checkout flow.

### Slide 4 — What users can do

Customers can search and browse the catalog, manage a cart, explore checkout, and view order tracking. A demo shopping assistant can help surface product suggestions.

### Slide 5 — The technology

The frontend uses HTML, CSS, and browser JavaScript. A Node.js and Express backend exposes REST endpoints for authentication, products, orders, payments, and the assistant.

### Slide 6 — Internationalization

The interface supports Uzbek, English, German, and Russian. Currency selection supports USD, EUR, UZS, and RUB, allowing the demo to present the shopping experience to a wider audience.

### Slide 7 — Administration and authentication

The demo includes an admin dashboard for product and order workflows. The API demonstrates JWT-based authentication and bcrypt password hashing; production deployment would require a persistent database and a thorough security review.

### Slide 8 — Checkout and order experience

The project demonstrates checkout and order-status flows. Payment behavior can run in a simulated mode; a real deployment must configure and verify a payment provider and its webhook handling.

### Slide 9 — What comes next

The next step is to add persistent storage, strengthen operational security, connect a real payment provider, and validate the complete purchase lifecycle. These foundations would move the demo toward a dependable production service.

### Slide 10 — Questions and live demo

Thank you. I would be happy to walk through the architecture, demonstrate the storefront and admin dashboard, and discuss the technical decisions and next steps.
