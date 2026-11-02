# 🎤 GlobalShop: 10-Folien Präsentationsplan / 10-Slaydli Prezentatsiya Rejasi

> Ushbu reja Germaniya IT kompaniyalaridagi texnik intervyular (Storytelling & Technical Deep Dive) standartlariga mos holda tuzilgan. Loyiha interfeysida ushbu slaydlarni jonli **"10-Slayd Deck"** tugmasi orqali interaktiv ko'rish mumkin.

---

### 📌 Folie 1: Einleitung & Vision / 1-slayd: Kirish va Vizyon
- **DE (Deutsch)**:
  *Titel*: "GlobalShop: Eine moderne, skalierbare Full-Stack-E-Commerce-Plattform".
  *Inhalt*: Vorstellung des Entwicklers, Motivation des Projekts und die Vision eines barrierefreien, globalen Handels ohne sprachliche oder finanzielle Grenzen.
- **UZ (O'zbekcha)**:
  *Slayd nomi*: "GlobalShop: To'liq tsiklli (Full-stack) E-tijorat loyihasi".
  *Mazmuni*: Ishlab chiquvchining tanishtiruvi, loyihaning kelib chiqishi va global savdoda til hamda valyuta to'siqlarini bartaraf etish viziyasi.
- **Texnik Nuqta**: Single Page Application (SPA) arxitekturasi va RESTful backend integratsiyasi.

---

### 📌 Folie 2: Problem & Lösung / 2-slayd: Muammo va Yechim
- **DE (Deutsch)**:
  *Problem*: Viele kleine und mittelständische Händler scheitern international an isolierten Sprachsystemen und unflexiblen Zahlungsgateways.
  *Lösung*: Eine schlüsselfertige E-Commerce-Plattform mit nativer Mehrsprachigkeit (DE, EN, UZ, RU) und automatischer Währungsumrechnung.
- **UZ (O'zbekcha)**:
  *Muammo*: Kichik va o'rta korxonalar ko'p tillilik yetishmasligi va xalqaro to'lovlardagi murakkabliklar tufayli jahon bozoriga chiqa olmaydilar.
  *Yechim*: To'liq tayyor, 4 ta tilda ishlovchi, ko'p valyutali va Stripe orqali himoyalangan platforma.

---

### 📌 Folie 3: Kernfunktionen / 3-slayd: Asosiy Vazifalar
- **DE (Deutsch)**:
  *Funktionen*: Nahtloser Sprachwechsel ohne Reload, dynamischer Warenkorb (LocalStorage & DB Sync), Live-Sendungsverfolgung, Admin-Dashboard und Gutscheinsystem.
- **UZ (O'zbekcha)**:
  *Funksiyalar*: Sahifani qayta yuklamasdan 4 tilda ishlash, doimiy savatcha boshqaruvi, jonli kuryer kuzatuv xaritasi, admin boshqaruvi va promokodlar tizimi.

---

### 📌 Folie 4: Technologie-Stack / 4-slayd: Texnologik Stek
- **DE (Deutsch)**:
  *Frontend*: HTML5, CSS3 Custom Properties (Glassmorphism), Vanilla JS (ES6+ Modules), i18n Engine.
  *Backend*: Node.js, Express.js RESTful API, JWT Authentication, Stripe SDK & Webhooks.
- **UZ (O'zbekcha)**:
  *Frontend*: Zamonaviy semantik HTML5, Glassmorphic CSS3 dizayn tizimi, modulli JS, i18n tarjima moduli.
  *Backend*: Node.js, Express REST API, JWT autentifikatsiya, Stripe to'lov integratsiyasi.

---

### 📌 Folie 5: Datenstruktur & Architektur / 5-slayd: Ma'lumotlar Strukturasi
- **DE (Deutsch)**:
  *Datenfluss*: Client-Anfrage ➔ JWT Validierung ➔ Express Controller ➔ Datenbank-Abfrage ➔ JSON API Antwort.
- **UZ (O'zbekcha)**:
  *Ma'lumotlar oqimi*: Mijoz so'rovi ➔ JWT token tekshiruvi ➔ Controller ➔ Baza operatsiyalari ➔ JSON javob.

---

### 📌 Folie 6: Internationalisierung (i18n) / 6-slayd: Ko'p Tillilik Xususiyati
- **DE (Deutsch)**:
  *Architektur*: Strukturierte JSON-Wörterbücher für Deutsch, Englisch, Usbekisch und Russisch. Sofortige DOM-Aktualisierung (Zero-Latency Re-render).
- **UZ (O'zbekcha)**:
  *Arxitektura*: Har bir til uchun alohida JSON lug'atlari. Barcha mahsulot nomlari, xususiyatlari va tizim xabarlarini darhol yangilash.

---

### 📌 Folie 7: Sicherheit & Zahlungsabwicklung / 7-slayd: Xavfsizlik va To'lovlar
- **DE (Deutsch)**:
  *Sicherheit*: PCI-DSS-Konformität durch Stripe Client Tokenisierung (Kreditkartendaten berühren niemals den eigenen Server), 3D Secure 2-Faktor-Authentifizierung (SMS) und verschlüsselte JWT Tokens.
- **UZ (O'zbekcha)**:
  *Xavfsizlik*: Stripe tokenizatsiyasi (kredit karta raqamlari o'z serverimizda saqlanmaydi - PCI-DSS standarti), 3D Secure SMS tasdiqlash va xavfsiz JWT sessiyalari.

---

### 📌 Folie 8: Technische Herausforderungen / 8-slayd: Qiyinchiliklar va Yechimlar
- **DE (Deutsch)**:
  *Herausforderung*: Race Conditions bei gleichzeitigen Warenkorbänderungen und asynchrone Stripe-Webhook-Verzögerungen.
  *Lösung*: Optimistisches UI-Updating im Client und Idempotenz-Schlüssel auf dem Server.
- **UZ (O'zbekcha)**:
  *Qiyinchilik*: Savatcha o'zgarishidagi asinxron konfliktlar va to'lov webhook kechikishlari.
  *Yechim*: 'Optimistic UI' yangilanishlari va serverdagi Idempotent kalitlar mexanizmi.

---

### 📌 Folie 9: Fazit & KI-Roadmap / 9-slayd: Xulosa va Kelajak Rejalari
- **DE (Deutsch)**:
  *Erfolg*: Vollständig funktionsfähige, produktionsreife Plattform.
  *Roadmap*: 24/7 KI-gestützter Shopping-Assistant für personalisierte Kaufempfehlungen und automatisierte Bestellabwicklung.
- **UZ (O'zbekcha)**:
  *Natija*: Ishlab chiqarishga to'liq tayyor bo'lgan zamonaviy platforma.
  *Kelajak*: 4 tilda mijozlarga 24/7 xizmat ko'rsatuvchi va tovar tavsiya qiluvchi aqlli sun'iy intellekt (AI) yordamchisi.

---

### 📌 Folie 10: Fragen & Antworten (Q&A) / 10-slayd: Savollar va Javoblar
- **DE (Deutsch)**:
  *Abschluss*: Einladung zur technischen Diskussion, Code-Walkthrough und Live-Demonstration aller Funktionen.
- **UZ (O'zbekcha)**:
  *Yakun*: Savol-javoblar, kod tahlili va platformaning jonli demonstratsiyasi.
