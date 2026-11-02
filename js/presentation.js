/**
 * GlobalShop - Interactive 10-Slide Pitch Presentation Mode (Supercharged)
 * Built strictly according to the German E-Commerce Tech Spec & Presentation Plan
 * Now with Web Speech API Native Text-to-Speech (TTS) Audio Guide in German & Uzbek!
 */

const SLIDE_DECK_DATA = [
  {
    num: 1,
    titleDe: "Folie 1: Einleitung & Vision",
    titleUz: "1-slayd: Kirish va Vizyon",
    textDe: "GlobalShop ist eine skalierbare, mandantenfähige Full-Stack E-Commerce-Plattform. Entwickelt für modernen internationalen Handel ohne Barrieren. Wir vereinen höchste Performance mit nativer Mehrsprachigkeit und sicheren Zahlungsstandards.",
    textUz: "GlobalShop — kengayuvchan va ko'p foydalanuvchili Full-stack e-tijorat platformasi. Xalqaro savdoda til va to'lov to'siqlarini bartaraf etish, yuqori xavfsizlik va mukammal tezlikni ta'minlash maqsadida ishlab chiqilgan.",
    speechDe: "Willkommen zu GlobalShop. Dies ist eine skalierbare Full-Stack E-Commerce-Plattform für den globalen Handel mit nativer Mehrsprachigkeit und modernster Architektur.",
    speechUz: "GlobalShop loyihasiga xush kelibsiz. Bu xalqaro savdoni rivojlantirish uchun yaratilgan to'liq ko'p tilli va yuqori xavfsizlikka ega zamonaviy e-tijorat tizimidir.",
    snippet: `// System Architecture Overview
Client: React/SPA + i18n + Tailwind/CSS Variables
Backend: Node.js + Express REST API (Modular Architecture)
Payment: Stripe API (PCI-DSS Level 1 Compliant)
Database: MongoDB (NoSQL) & LocalStorage State Synchronization`
  },
  {
    num: 2,
    titleDe: "Folie 2: Problem & Lösung",
    titleUz: "2-slayd: Muammo va Yechim",
    textDe: "Problem: Kleine und mittlere Unternehmen scheitern am globalen Markt aufgrund von mangelhafter Mehrsprachigkeit, komplexen Währungsbarrieren und unzuverlässigen Zahlungssystemen.\nLösung: Eine schlüsselfertige E-Commerce-Lösung mit integrierter Echtzeit-Übersetzung, Währungsumrechnung und PCI-DSS konformem Stripe Checkout.",
    textUz: "Muammo: Kichik va o'rta bizneslar ko'p tillilik yetishmasligi, valyuta konvertatsiyasi yo'qligi va murakkab to'lov tizimlari sababli global bozorga chiqa olmaydi.\nYechim: Avtomatik 4 tilda ishlovchi, ko'p valyutali va xavfsiz to'lov tizimiga ega tayyor global platforma.",
    speechDe: "Das Problem: Kleine Unternehmen scheitern international an Sprachbarrieren. Unsere Lösung: Eine schlüsselfertige Plattform mit nativer Lokalisierung in Deutsch, Englisch, Usbekisch und Russisch.",
    speechUz: "Muammo va yechim: Kichik korxonalar ko'p tillilik yo'qligi sababli xalqaro bozorga chiqa olmaydi. Bizning yechimimiz: 4 ta tilda bir zumda ishlovchi to'liq tayyor platforma.",
    snippet: `Problem Analysis:
❌ Single-Language Silos (75% conversion drop for non-native speakers)
❌ Hardcoded Currency & Complex Checkout
GlobalShop Solution:
✅ Dynamic 4-Language Localization (DE, EN, UZ, RU)
✅ Live Multi-Currency Engine (USD, EUR, UZS, RUB)`
  },
  {
    num: 3,
    titleDe: "Folie 3: Kernfunktionen (Core Features)",
    titleUz: "3-slayd: Asosiy Vazifalar",
    textDe: "• Nahtloser 4-Sprachen-Wechsel (DE, EN, UZ, RU) ohne Seiten-Reload.\n• Persistenter Warenkorb mit automatischer Steuer- und Rabattberechnung.\n• Vollständiges Admin-Dashboard mit CRUD für Produkte und Auftragsstatus.\n• Live-Sendungsverfolgung mit Kuriervisualisierung.",
    textUz: "• Sahifani yangilamasdan 4 tilda (DE, EN, UZ, RU) bir zumda ishlash.\n• Doimiy saqlanuvchi savatcha, avtomatik soliq va promokod hisob-kitobi.\n• To'liq Administrator boshqaruv paneli (CRUD mahsulotlar va buyurtmalar).\n• Jonli xaritada kuryer yetkazib berish kuzatuvi.",
    speechDe: "Zu den Kernfunktionen gehören der verzögerungsfreie Sprachwechsel, die Live-Sendungsverfolgung und das integrierte Stripe-Zahlungsgateway.",
    speechUz: "Asosiy funksiyalar: 4 tilda tezkor ishlash, savatcha boshqaruvi, kuryer jonli kuzatuvi va to'liq administrator paneli.",
    snippet: `Feature Matrix:
- Reactive State Management (Proxy Store)
- Intelligent Multi-Currency Cart & Coupon Validator
- 3D Secure 2.0 Credit Card Authentication
- Full CRUD Admin Panel & Financial Analytics`
  },
  {
    num: 4,
    titleDe: "Folie 4: Technologie-Stack",
    titleUz: "4-slayd: Texnologik Stek",
    textDe: "Frontend: Moderne Single Page Architecture, CSS3 Custom Properties (Glassmorphism), i18n Engine.\nBackend: Node.js, Express.js RESTful API, JSON Web Tokens (JWT).\nZahlung & APIs: Stripe Checkout SDK, Webhooks, AI Chatbot Natural Language Parser.",
    textUz: "Frontend: Zamonaviy SPA arxitekturasi, CSS3 Glassmorphism dizayn tizimi, i18n tili mexanizmi.\nBackend: Node.js, Express REST API, JWT autentifikatsiya.\nIntegratsiyalar: Stripe Checkout SDK, Webhooklar, AI Maslahatchi NLP moduli.",
    speechDe: "Unser Technologie-Stack basiert auf modernem Frontend mit CSS Glassmorphism, Node.js Express Backend und Stripe PCI-DSS Integration.",
    speechUz: "Texnologik stek: Zamonaviy SPA, Node.js va Express backend, JWT xavfsizlik va Stripe to'lov integratsiyasi.",
    snippet: `Frontend Stack: HTML5 Semantic, CSS Glassmorphic Variables, Modular JS (ES6+)
Backend Stack: Node.js, Express, Cors, Dotenv, JWT, Stripe API
Database: Document-oriented schema / LocalStorage Persistent Cache`
  },
  {
    num: 5,
    titleDe: "Folie 5: Datenstruktur & Architektur",
    titleUz: "5-slayd: Ma'lumotlar Strukturasi & Oqimi",
    textDe: "Strukturierter Datenfluss: Client-Anfrage -> JWT Token Validierung -> API Controller -> Business Logik -> DB Transaktion -> JSON Response. Klare Trennung von Nutzer-, Produkt-, Warenkorb- und Bestelldaten.",
    textUz: "Muntazam ma'lumotlar oqimi: Mijoz so'rovi -> JWT token validatsiyasi -> API Controller -> Biznes logika -> Ma'lumotlar bazasi tranzaksiyasi -> JSON javob. Foydalanuvchi, mahsulot va buyurtmalar to'liq ajratilgan.",
    speechDe: "Der strukturierte Datenfluss garantiert sichere JWT-Validierung und saubere Trennung zwischen Kunden-, Produkt- und Bestelldaten.",
    speechUz: "Ma'lumotlar oqimi mijoz so'rovidan tortib JWT tekshiruvi va baza tranzaksiyalarigacha xavfsiz zanjir hosil qiladi.",
    snippet: `// Express REST Route Example:
router.post('/api/orders/checkout', verifyJWT, async (req, res) => {
  const { items, paymentMethodId } = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateTotal(items),
    currency: 'eur'
  });
  res.json({ success: true, clientSecret: paymentIntent.client_secret });
});`
  },
  {
    num: 6,
    titleDe: "Folie 6: Internationalisierung (i18n)",
    titleUz: "6-slayd: Ko'p Tillilik Xususiyati",
    textDe: "Architektur der Übersetzung: Strukturierte JSON-Wörterbücher für jede Sprache. Sofortiges Rendern aller UI-Elemente und Produktkataloge ohne Ladeverzögerung oder Seitenneuladen (Zero-Latency Re-render).",
    textUz: "Tarjima arxitekturasi: Har bir til uchun maxsus JSON lug'atlari. Barcha mahsulot tavsiflari va interfeys elementlarini bir soniyada sahifani qayta yuklamasdan tarjima qilish.",
    speechDe: "Die Internationalisierung ermöglicht das Umschalten aller Oberflächentexte und Produktdetails in Millisekunden ohne Seiten-Reload.",
    speechUz: "Ko'p tillilik moduli sahifani qayta yuklamasdan barcha ma'lumotlarni bir zumda tarjima qilib beradi.",
    snippet: `// Dynamic Multi-Language Proxy:
function t(key, lang = store.lang) {
  return I18N_DATA[lang]?.[key] || I18N_DATA['en']?.[key] || key;
}
// Instant Product Attribute Translation:
product.name[store.lang] || product.name['en']`
  },
  {
    num: 7,
    titleDe: "Folie 7: Sicherheit & Zahlungsabwicklung",
    titleUz: "7-slayd: Xavfsizlik va To'lovlar",
    textDe: "Höchste Sicherheitsstandards: Verwendung von verschlüsselten JWT Tokens. Stripe Tokenisierung verhindert die Speicherung sensibler Kreditkartendaten auf eigenen Servern (PCI-DSS Konformität). Integrierte 3D Secure SMS-Verifizierung.",
    textUz: "Eng yuqori xavfsizlik: Shifrlangan JWT tokenlar, Stripe tokenizatsiyasi (kredit karta ma'lumotlari serverda saqlanmaydi - PCI-DSS standarti), 3D Secure SMS tasdiqlash.",
    speechDe: "Sicherheit steht an erster Stelle: PCI-DSS-konforme Stripe-Tokenisierung und 3D Secure 2-Faktor-Authentifizierung schützen alle Transaktionen.",
    speechUz: "Xavfsizlik eng yuqori darajada: Karta ma'lumotlari o'z serverimizda saqlanmaydi va 3D Secure SMS bilan himoyalangan.",
    snippet: `Security Protocol:
1. Client Tokenization: Sensitive Card Data -> Stripe Vault Token
2. 3D Secure Challenge: 2-Factor SMS Verification
3. Secure Server Webhook: HMAC Signature Validation`
  },
  {
    num: 8,
    titleDe: "Folie 8: Technische Herausforderungen & Lösungen",
    titleUz: "8-slayd: Qiyinchiliklar va Yechimlar",
    textDe: "Herausforderung: Race Conditions beim gleichzeitigen Ändern des Warenkorbs und asynchrone Webhook-Verzögerungen bei Stripe.\nLösung: Optimistisches UI-Updating im Client mit asynchronem Server-Rollback und idempotenten Transaktionsschlüsseln.",
    textUz: "Qiyinchilik: Savatchani bir vaqtda o'zgartirishdagi asinxron ziddiyatlar va Stripe webhook kechikishlari.\nYechim: 'Optimistic UI' yangilanishlari, Idempotent kalitlar va xavfsiz tranzaksiya mexanizmi.",
    speechDe: "Wir lösen Race Conditions und asynchrone Webhook-Verzögerungen durch optimistisches UI-Updating und Idempotenz-Schlüssel.",
    speechUz: "Asinxron xatoliklar va to'lov kechikishlari 'Optimistic UI' hamda Idempotent kalitlar orqali hal qilindi.",
    snippet: `Solution Pattern:
- Optimistic UI Updating for Instant User Feedback
- Idempotency-Key on all Stripe payment requests to prevent duplicate charges
- Transaction rollback on DB inventory exhaustion`
  },
  {
    num: 9,
    titleDe: "Folie 9: Fazit & KI-Roadmap",
    titleUz: "9-slayd: Xulosa va AI Kelajak Rejalari",
    textDe: "Zusammenfassung: GlobalShop demonstriert eine hochmoderne, marktreife E-Commerce-Plattform nach deutschen Qualitätsstandards.\nZukünftige Roadmap: Integration eines fortschrittlichen KI-gestützten Kundenservice-Chatbots für 24/7 Kundenberatung in allen Sprachen.",
    textUz: "Xulosa: GlobalShop Germaniya va xalqaro standartlarga to'liq mos keladigan, bozorga tayyor e-tijorat platformasi.\nKelajak reja: 4 tilda mijozlarga 24/7 xizmat ko'rsatuvchi va tovar tavsiya qiluvchi sun'iy intellekt (AI) yordamchisi.",
    speechDe: "Fazit: GlobalShop ist produktionsreif und erfüllt höchste deutsche Standards. Unsere Roadmap umfasst intelligente KI-Shopping-Assistenten.",
    speechUz: "Xulosa: Loyiha ishlab chiqarishga tayyor bo'lib, 24/7 rejimida ishlovchi sun'iy intellekt savdo yordamchisi bilan boyitildi.",
    snippet: `Roadmap Highlights:
✓ Integrated Smart AI Shopping Chatbot
✓ Multi-Currency Real-Time Exchange Rates
✓ Automated PDF Tax Invoice Generation
✓ Live Courier Map Telemetry`
  },
  {
    num: 10,
    titleDe: "Folie 10: Fragen & Antworten (Q&A)",
    titleUz: "10-slayd: Savollar va Javoblar",
    textDe: "Vielen Dank für Ihre Aufmerksamkeit! Ich freue mich auf Ihre Fragen und stehe für eine Live-Demonstration des Codes und der Plattform bereit.",
    textUz: "E'tiboringiz uchun katta rahmat! Savol-javoblar, kod tahlili va jonli platforma demonstratsiyasiga tayyorman.",
    speechDe: "Vielen Dank für Ihre Aufmerksamkeit. Ich freue mich auf Ihre Fragen und stehe für einen technischen Code-Walkthrough bereit.",
    speechUz: "E'tiboringiz uchun rahmat. Savol-javoblar va kod tahliliga tayyorman.",
    snippet: `GlobalShop Project Status: 100% Complete & Production Ready
Developer: Full-Stack Engineer (Umidjon)
Available for: Code Review & Deep-Dive Discussion`
  }
];

const PresentationController = {
  currentSlideIndex: 0,
  isPlayingAudio: false,

  init() {
    this.modal = document.getElementById('presentationModal');
    this.dotsContainer = document.getElementById('slideDotsContainer');
    this.setupKeyboard();
  },

  open() {
    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    this.goToSlide(0);
  },

  close() {
    this.stopAudio();
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
  },

  goToSlide(index) {
    if (index >= 0 && index < SLIDE_DECK_DATA.length) {
      this.stopAudio();
      this.currentSlideIndex = index;
      this.renderCurrentSlide();
    }
  },

  nextSlide() {
    if (this.currentSlideIndex < SLIDE_DECK_DATA.length - 1) {
      this.goToSlide(this.currentSlideIndex + 1);
    }
  },

  prevSlide() {
    if (this.currentSlideIndex > 0) {
      this.goToSlide(this.currentSlideIndex - 1);
    }
  },

  toggleAudio(lang = 'de') {
    if (this.isPlayingAudio) {
      this.stopAudio();
    } else {
      this.playSlideAudio(lang);
    }
  },

  playSlideAudio(lang = 'de') {
    if (!('speechSynthesis' in window)) {
      showToast("Brauzeringiz ovoz sintezini qo'llab-quvvatlamaydi", "error");
      return;
    }

    window.speechSynthesis.cancel();
    const slide = SLIDE_DECK_DATA[this.currentSlideIndex];
    const textToSpeak = lang === 'de' ? (slide.speechDe || slide.textDe) : (slide.speechUz || slide.textUz);

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = lang === 'de' ? 'de-DE' : 'uz-UZ';
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      this.isPlayingAudio = true;
      this.updateAudioButtonUI(true);
      showToast(t('pres_audio_playing', store.lang), 'info');
    };

    utterance.onend = () => {
      this.isPlayingAudio = false;
      this.updateAudioButtonUI(false);
    };

    utterance.onerror = () => {
      this.isPlayingAudio = false;
      this.updateAudioButtonUI(false);
    };

    window.speechSynthesis.speak(utterance);
  },

  stopAudio() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    this.isPlayingAudio = false;
    this.updateAudioButtonUI(false);
  },

  updateAudioButtonUI(playing) {
    const btn = document.getElementById('slideAudioBtn');
    if (!btn) return;
    if (playing) {
      btn.classList.add('playing');
      btn.innerHTML = `<i class="fa-solid fa-stop"></i> <span>${t('pres_stop_audio', store.lang)}</span>`;
    } else {
      btn.classList.remove('playing');
      btn.innerHTML = `<i class="fa-solid fa-volume-high"></i> <span>${t('pres_play_audio', store.lang)}</span>`;
    }
  },

  renderCurrentSlide() {
    const slide = SLIDE_DECK_DATA[this.currentSlideIndex];
    const container = document.getElementById('slideViewContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="slide-wrapper">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
          <div class="slide-number-indicator">
            FOLIE ${slide.num} / ${SLIDE_DECK_DATA.length} • GERMAN INTERVIEW TECH SPEC
          </div>
          <button class="btn-audio-guide" id="slideAudioBtn" onclick="PresentationController.toggleAudio('de')">
            <i class="fa-solid fa-volume-high"></i> <span>${t('pres_play_audio', store.lang)}</span>
          </button>
        </div>

        <h2 class="slide-main-title gradient-text">${slide.titleDe}</h2>

        <div class="slide-content-grid">
          <div class="slide-lang-card">
            <span class="lang-card-tag tag-de"><i class="fa-solid fa-flag"></i> Deutsch (DE)</span>
            <p class="slide-text-body">${slide.textDe.replace(/\n/g, '<br>')}</p>
          </div>

          <div class="slide-lang-card">
            <span class="lang-card-tag tag-uz"><i class="fa-solid fa-flag"></i> O'zbekcha (UZ)</span>
            <p class="slide-text-body">${slide.textUz.replace(/\n/g, '<br>')}</p>
          </div>

          <div class="slide-visual-box">
            <div style="font-weight: 700; color: #f43f5e; margin-bottom: 0.35rem;">
              <i class="fa-solid fa-code"></i> Technische Spezifikation & Code Snippet:
            </div>
            <pre style="margin: 0; white-space: pre-wrap; font-family: var(--font-mono); font-size: 0.8rem;">${slide.snippet}</pre>
          </div>
        </div>
      </div>
    `;

    // Render dots
    if (this.dotsContainer) {
      let dotsHtml = '';
      SLIDE_DECK_DATA.forEach((_, i) => {
        dotsHtml += `<div class="dot ${i === this.currentSlideIndex ? 'active' : ''}" onclick="PresentationController.goToSlide(${i})" title="Slayd ${i + 1}"></div>`;
      });
      this.dotsContainer.innerHTML = dotsHtml;
    }

    // Update prev/next buttons
    const prevBtn = document.getElementById('presPrevBtn');
    const nextBtn = document.getElementById('presNextBtn');
    if (prevBtn) prevBtn.disabled = this.currentSlideIndex === 0;
    if (nextBtn) nextBtn.disabled = this.currentSlideIndex === SLIDE_DECK_DATA.length - 1;
  },

  setupKeyboard() {
    window.addEventListener('keydown', (e) => {
      if (!this.modal || !this.modal.classList.contains('active')) return;
      if (e.key === 'ArrowRight' || e.key === ' ') {
        this.nextSlide();
      } else if (e.key === 'ArrowLeft') {
        this.prevSlide();
      } else if (e.key === 'Escape') {
        this.close();
      }
    });
  }
};
