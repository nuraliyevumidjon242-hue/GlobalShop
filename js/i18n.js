/**
 * GlobalShop - Internationalization (i18n) Dictionary
 * Supported Languages: DE (Deutsch), EN (English), UZ (O'zbekcha), RU (Русский)
 */

const I18N_DATA = {
  uz: {
    // Navigation & General
    nav_home: "Bosh sahifa",
    nav_catalog: "Katalog",
    nav_presentation: "🎤 10-Slayd Prezentatsiya (DE/UZ)",
    nav_admin: "Boshqaruv Paneli",
    nav_orders: "Buyurtmalarim",
    nav_wishlist: "Saralanganlar",
    nav_login: "Kirish",
    nav_register: "Ro'yxatdan o'tish",
    nav_logout: "Chiqish",
    search_placeholder: "Mahsulotlarni qidirish yoki ovoz bilan ayting...",
    cart_title: "Savatcha",
    empty_cart: "Savatchangiz bo'sh",
    empty_wishlist: "Saralangan mahsulotlar yo'q",
    voice_search_listening: "🎙️ Eshitilmoqda... Mahsulot nomini ayting",
    voice_search_unsupported: "Brauzeringiz ovozli qidiruvni qo'llab-quvvatlamaydi",

    // Hero Section
    hero_badge: "🚀 2026-yilgi Yangi Avlod Global Tijorat",
    hero_title: "Chegarasiz Savdo va <span class='gradient-text'>Ko'p Tilli</span> Imkoniyat",
    hero_subtitle: "O'zbekiston, Germaniya va butun dunyo bo'ylab tovarlarni ko'p valyutada, xavfsiz to'lov, AI yordamchi va ovozli qidiruv bilan xarid qiling.",
    hero_btn_shop: "Xaridni boshlash",
    hero_btn_pitch: "Germaniya Standartidagi Taqdimot",
    stat_clients: "Mamnun Mijozlar",
    stat_products: "Sifatli Mahsulotlar",
    stat_delivery: "Tezkor Yetkazish",
    stat_security: "Stripe Himoyasi",

    // Filters & Categories
    cat_all: "Barchasi",
    cat_electronics: "Elektronika",
    cat_fashion: "Kiyim-kechak",
    cat_home: "Uy va Oshxona",
    cat_accessories: "Aksessuarlar",
    cat_books: "Kitoblar",
    sort_default: "Odatiy saralash",
    sort_price_asc: "Arzondan qimmatga",
    sort_price_desc: "Qimmatdan arzonga",
    sort_rating: "Yuqori reyting bo'yicha",
    sort_name: "Nomi bo'yicha (A-Z)",
    filter_price_max: "Maksimal narx",
    filter_discount_only: "Faqat chegirmalar",
    filter_in_stock_only: "Faqat mavjudlari",

    // Product Card & Details
    in_stock: "Mavjud",
    out_of_stock: "Mavjud emas",
    btn_add_cart: "Savatga",
    btn_in_cart: "Savatda",
    btn_quick_view: "Tez ko'rish",
    reviews: "sharh",
    rating: "Reyting",
    desc_title: "Mahsulot tavsifi",
    specs_title: "Xususiyatlari",
    warranty: "Kafolat",
    delivery_info: "Yetkazib berish",
    free_shipping: "Bepul yetkazish",
    customer_reviews: "Mijozlar sharhlari",
    add_review_title: "Fikringizni qoldiring",
    btn_submit_review: "Sharhni yuborish",
    review_success: "Sharhingiz uchun rahmat! Muvaqqatli qo'shildi.",

    // Cart & Checkout
    subtotal: "Oraliq summa",
    shipping: "Yetkazib berish",
    tax: "Soliq (QQS 12%)",
    discount: "Chegirma",
    total: "Jami to'lov",
    coupon_placeholder: "PROMO-KOD (masalan: GLOBAL2026)",
    btn_apply: "Qo'llash",
    btn_checkout: "Xaridni rasmiylashtirish",
    checkout_title: "Xavfsiz To'lov (Stripe Simulyatsiya)",
    card_number: "Karta raqami",
    card_exp: "Amal qilish muddati (MM/YY)",
    card_cvc: "CVC / CVV",
    card_name: "Kartadagi ism-familiya",
    btn_pay_now: "To'lovni amalga oshirish",
    shipping_address: "Yetkazib berish manzili",
    full_name: "To'liq ismingiz",
    phone_number: "Telefon raqamingiz",
    city: "Shahar / Viloyat",
    address_line: "Ko'cha va uy raqami",
    payment_success: "To'lov muvaffaqiyatli amalga oshirildi!",
    order_id: "Buyurtma ID",
    print_receipt: "Chekni chop etish (Invoys)",
    track_order: "Buyurtmani jonli kuzatish",

    // 3D Secure SMS Modal
    secure_title: "3D Secure Xavfsizlik Tasdig'i",
    secure_desc: "Telefoningizga yuborilgan 6 xonali SMS kodni kiriting (Test kodi: 123456):",
    btn_confirm_sms: "SMS Kodni Tasdiqlash",

    // Live Order Tracking
    track_modal_title: "Jonli Buyurtma Kuzatuvi",
    step_ordered: "Qabul qilindi",
    step_packed: "Qadoqlandi",
    step_shipped: "Yo'lda (Kuryer)",
    step_delivered: "Yetkazildi",
    courier_status: "Kuryer sizning manzilingiz tomon harakatlanmoqda...",

    // AI Shopping Assistant
    ai_title: "AI Global Yordamchi",
    ai_subtitle: "Online • 4 tilda xizmat ko'rsatadi",
    ai_welcome: "Salom! Men GlobalShop sun'iy intellekt maslahatchisiman. Sizga qaysi mahsulotni tanlashda yoki buyurtmani tekshirishda yordam beray?",
    ai_placeholder: "Savolingizni yozing...",
    ai_quick_1: "Eng mashhur tovarlar qaysi?",
    ai_quick_2: "Chegirma promokod bormi?",
    ai_quick_3: "Yetkazib berish qancha vaqt oladi?",
    ai_quick_4: "Elektronika toifasini ko'rsat",
    ai_speak_reply: "Ovozli eshitish",

    // Audio Presentation
    pres_play_audio: "🎙️ Nemischa Ovozli Gid (Audio Pitch)",
    pres_stop_audio: "⏹️ Ovozni to'xtatish",
    pres_audio_playing: "Ovozli taqdimot yangramoqda...",

    // Admin Panel
    admin_title: "GlobalShop Administrator Paneli",
    admin_tab_dashboard: "Boshqaruv",
    admin_tab_products: "Mahsulotlar",
    admin_tab_orders: "Buyurtmalar",
    admin_tab_analytics: "Analitika",
    admin_total_sales: "Umumiy tushum",
    admin_total_orders: "Buyurtmalar soni",
    admin_total_products: "Mahsulotlar soni",
    admin_active_users: "Faol mijozlar",
    btn_add_product: "+ Yangi Mahsulot Qo'shish",
    btn_export_csv: "📥 CSV Hisobotni Yuklab Olish",
    drop_image_here: "Rasmni bu yerga tashlang yoki kompyuterdan tanlang",
    th_image: "Rasm",
    th_name: "Nomi",
    th_category: "Toifa",
    th_price: "Narxi",
    th_stock: "Zaxira",
    th_actions: "Amallar",
    th_order_id: "Buyurtma ID",
    th_customer: "Mijoz",
    th_status: "Holati",
    th_date: "Sana",

    // Slide Titles for Pitch Deck
    slides: [
      {
        num: "01",
        title: "Kirish va Vizyon (Einleitung & Vision)",
        de: "GlobalShop: Eine Full-Stack-E-Commerce-Plattform. Vorstellung des Entwicklers, Projekthintergrund und die Vision des globalen, barrierefreien Handels.",
        uz: "GlobalShop: To'liq tsiklli (Full-stack) E-tijorat loyihasi. Ishlab chiquvchining tanishtiruvi, loyihaning kelib chiqishi va xalqaro global savdo viziyasi.",
        visual: "Arxitektura: Client (SPA) <-> Express REST API <-> Stripe Payment <-> MongoDB/PostgreSQL"
      },
      {
        num: "02",
        title: "Muammo va Yechim (Problem & Lösung)",
        de: "Problem: Kleine Unternehmen scheitern am internationalen Markt aufgrund fehlender Mehrsprachigkeit und komplexer Zahlungssysteme. Lösung: Eine schlüsselfertige, lokalisierte Plattform mit nativer Mehrsprachigkeit und globalen Zahlungsmethoden.",
        uz: "Muammo: Kichik biznes subyektlari ko'p tillilik yetishmasligi va murakkab to'lov tizimlari sababli xalqaro bozorga chiqa olmaydilar. Yechim: To'liq mahalliylashtirilgan, ko'p tilli va xalqaro to'lovlarga tayyor platforma.",
        visual: "Taqqoslash: Standart do'konlar (1 til, 1 valyuta) VS GlobalShop (DE, EN, UZ, RU + EUR, USD, UZS, RUB)"
      },
      {
        num: "03",
        title: "Asosiy vazifalar (Kernfunktionen)",
        de: "Nahtloser Sprachwechsel (DE, EN, UZ, RU) ohne Seiten-Reloads, persistenter Warenkorb (LocalStorage & DB Sync), dynamische Währungsumrechnung und integrierte globale Zahlungsabwicklung via Stripe.",
        uz: "To'rt xil tilda (DE, EN, UZ, RU) sahifani qayta yuklamasdan ishlash, doimiy savatcha boshqaruvi, real vaqtda valyuta konvertatsiyasi va Stripe orqali xalqaro to'lovlar.",
        visual: "Funksiyalar: Multi-i18n + Multi-Currency + Live Order Tracker + 3D Secure SMS Verification"
      },
      {
        num: "04",
        title: "Texnologik Stek (Technologie-Stack)",
        de: "Frontend: Modern Vanilla JS/React SPA Architecture, Glassmorphic CSS3 Design System, i18next Engine. Backend: Node.js, Express RESTful API, JWT Authentication, Stripe SDK & Webhooks.",
        uz: "Frontend: Zamonaviy SPA arxitekturasi, Glassmorphism CSS dizayn tizimi, i18n moduli. Backend: Node.js, Express REST API, JWT autentifikatsiya, Stripe to'lov shlyuzi.",
        visual: "Frontend: HTML5, CSS3 Variables, ES6+ Modules | Backend: Express.js, JWT, Stripe API"
      },
      {
        num: "05",
        title: "Ma'lumotlar Strukturasi & Oqimi (Datenstruktur & Architektur)",
        de: "Datenfluss-Visualisierung: Client-Anfrage -> JWT Token Validierung -> Controller -> Model/DB -> API-Antwort. Klare Trennung von Nutzer-, Produkt-, Warenkorb- und Bestelldaten.",
        uz: "Ma'lumotlar oqimi: Mijoz so'rovi -> JWT validatsiyasi -> REST Controller -> DB Qidiruv -> JSON javob. Buyurtma va mahsulotlar o'rtasidagi mantiqiy munosabatlar.",
        visual: "Data Flow: [User Action] -> [JWT Auth Header] -> [REST API Route] -> [DB Operations] -> [Optimistic UI]"
      },
      {
        num: "06",
        title: "Ko'p Tillilik Xususiyati (Internationalisierung / i18next)",
        de: "Architektur der Übersetzung: Strukturierte JSON-Wörterbücher für jede Sprache. Sofortiges Rendern aller UI-Elemente und Produktkataloge ohne Ladeverzögerung.",
        uz: "Tarjima arxitekturasi: Har bir til uchun alohida JSON lug'atlari. Barcha mahsulot nomlari, tavsiflari va UI elementlarini bir zumda to'liq tarjima qilish.",
        visual: "i18n Engine: Locale Store -> Dynamic Proxy Dictionary -> Real-time UI Re-render"
      },
      {
        num: "07",
        title: "Xavfsizlik va To'lovlar (Sicherheit & Zahlungsabwicklung)",
        de: "Schutz sensibler Daten. Verwendung von verschlüsselten JWT Tokens. Stripe Tokenisierung verhindert die Speicherung von Kreditkartendaten auf eigenen Servern (PCI-DSS-Konformität). 3D Secure Authentifizierung.",
        uz: "Nozik ma'lumotlarni himoya qilish: JWT tokenlar orqali xavfsizlik, Stripe tokenizatsiyasi (karta raqamlari serverda saqlanmaydi - PCI-DSS standarti) va 3D Secure SMS tasdiqlash.",
        visual: "Security: PCI-DSS Compliant -> Client Tokenization -> 3D Secure 2.0 -> Webhook Verification"
      },
      {
        num: "08",
        title: "Texnik Qiyinchiliklar va Yechimlar (Technische Herausforderungen)",
        de: "Herausforderung: Race Conditions beim parallelen Ändern des Warenkorbs und asynchrone Stripe Webhook-Verzögerungen. Lösung: Implementierung von optimistischem UI-Updating, Idempotency-Keys und robusten DB-Transaktionen.",
        uz: "Qiyinchilik: Savatchani bir vaqtda o'zgartirishdagi asinxronlik va to'lov webhook kechikishlari. Yechim: 'Optimistic UI' yangilanishlari, Idempotent kalitlar va xavfsiz tranzaksiyalar.",
        visual: "Challenge -> Solution: Race Conditions -> Optimistic Locking; Webhook Latency -> Polling & SSE"
      },
      {
        num: "09",
        title: "Xulosa va AI Kelajak Rejalari (Fazit & Ausblick)",
        de: "Zusammenfassung des Erfolgs: Vollständig funktionale globale E-Commerce Plattform. Zukünftige Roadmap: Integrierter KI-gestützter Shopping-Assistant für 24/7 Kundenservice und prädiktive Empfehlungen.",
        uz: "Loyiha natijasi: To'liq ishlaydigan global e-tijorat platformasi. Kelajak: 24/7 rejimida 4 tilda mijozga xizmat ko'rsatuvchi va tovar tavsiya qiluvchi sun'iy intellekt (AI) yordamchisi.",
        visual: "Roadmap: AI Recommendation Engine + Multi-Warehouse Inventory + Crypto Payments"
      },
      {
        num: "10",
        title: "Savollar va Javoblar (Fragen & Antworten)",
        de: "Vielen Dank für Ihre Aufmerksamkeit! Einladung zur offenen Diskussion und technischen Demonstration des Source Codes und der Live-Plattform.",
        uz: "E'tiboringiz uchun rahmat! Savol-javoblar, arxitektura muhokamasi va jonli platformani namoyish etishga tayyormiz.",
        visual: "Live Demo Available: GitHub Repository | REST API Documentation | Ready for Deployment"
      }
    ]
  },

  de: {
    // Navigation & General
    nav_home: "Startseite",
    nav_catalog: "Katalog",
    nav_presentation: "🎤 10-Folien Präsentation (DE/UZ)",
    nav_admin: "Admin-Dashboard",
    nav_orders: "Meine Bestellungen",
    nav_wishlist: "Wunschliste",
    nav_login: "Anmelden",
    nav_register: "Registrieren",
    nav_logout: "Abmelden",
    search_placeholder: "Produkte suchen oder Sprachsuche nutzen...",
    cart_title: "Warenkorb",
    empty_cart: "Ihr Warenkorb ist leer",
    empty_wishlist: "Keine Wunschartikel vorhanden",
    voice_search_listening: "🎙️ Zuhören... Sagen Sie ein Produkt",
    voice_search_unsupported: "Sprachsuche wird nicht unterstützt",

    // Hero Section
    hero_badge: "🚀 Globaler Handel der nächsten Generation 2026",
    hero_title: "Grenzenloser Handel & <span class='gradient-text'>Mehrsprachige</span> Plattform",
    hero_subtitle: "Kaufen und verkaufen Sie weltweit mit nativer Mehrsprachigkeit, Multi-Währung, sicherer Stripe-Zahlung, Sprachsuche und KI-Assistenten.",
    hero_btn_shop: "Jetzt einkaufen",
    hero_btn_pitch: "10-Folien Pitch-Präsentation",
    stat_clients: "Zufriedene Kunden",
    stat_products: "Qualitätsprodukte",
    stat_delivery: "Express-Lieferung",
    stat_security: "PCI-DSS Stripe Schutz",

    // Filters & Categories
    cat_all: "Alle Produkte",
    cat_electronics: "Elektronik",
    cat_fashion: "Mode & Kleidung",
    cat_home: "Heim & Küche",
    cat_accessories: "Zubehör",
    cat_books: "Bücher",
    sort_default: "Standard-Sortierung",
    sort_price_asc: "Preis: Aufsteigend",
    sort_price_desc: "Preis: Absteigend",
    sort_rating: "Beste Bewertungen",
    sort_name: "Name: A bis Z",
    filter_price_max: "Maximaler Preis",
    filter_discount_only: "Nur Rabattartikel",
    filter_in_stock_only: "Nur auf Lager",

    // Product Card & Details
    in_stock: "Auf Lager",
    out_of_stock: "Ausverkauft",
    btn_add_cart: "In den Warenkorb",
    btn_in_cart: "Im Warenkorb",
    btn_quick_view: "Schnellansicht",
    reviews: "Bewertungen",
    rating: "Bewertung",
    desc_title: "Produktbeschreibung",
    specs_title: "Technische Daten",
    warranty: "Garantie",
    delivery_info: "Lieferinformationen",
    free_shipping: "Kostenloser Versand",
    customer_reviews: "Kundenbewertungen",
    add_review_title: "Bewertung schreiben",
    btn_submit_review: "Bewertung absenden",
    review_success: "Vielen Dank für Ihre Bewertung!",

    // Cart & Checkout
    subtotal: "Zwischensumme",
    shipping: "Versandkosten",
    tax: "MwSt. (12%)",
    discount: "Rabatt",
    total: "Gesamtsumme",
    coupon_placeholder: "GUTSCHEINCODE (z.B. GERMANY10)",
    btn_apply: "Einlösen",
    btn_checkout: "Zur Kasse",
    checkout_title: "Sichere Kasse (Stripe Simulation)",
    card_number: "Kartennummer",
    card_exp: "Gültig bis (MM/YY)",
    card_cvc: "CVC / CVV",
    card_name: "Name des Karteninhabers",
    btn_pay_now: "Jetzt kostenpflichtig bestellen",
    shipping_address: "Lieferadresse",
    full_name: "Vollständiger Name",
    phone_number: "Telefonnummer",
    city: "Stadt / Postleitzahl",
    address_line: "Straße und Hausnummer",
    payment_success: "Zahlung erfolgreich abgeschlossen!",
    order_id: "Bestellnummer",
    print_receipt: "Rechnung drucken (PDF)",
    track_order: "Live-Sendungsverfolgung",

    // 3D Secure SMS Modal
    secure_title: "3D Secure Authentifizierung",
    secure_desc: "Bitte geben Sie den 6-stelligen SMS-Code ein (Test-Code: 123456):",
    btn_confirm_sms: "Code bestätigen",

    // Live Order Tracking
    track_modal_title: "Live-Sendungsverfolgung",
    step_ordered: "Bestellt",
    step_packed: "Verpackt",
    step_shipped: "Unterwegs (Kurier)",
    step_delivered: "Zugestellt",
    courier_status: "Der Kurier ist auf dem Weg zu Ihrer Adresse...",

    // AI Shopping Assistant
    ai_title: "KI-Einkaufsassistent",
    ai_subtitle: "Online • 4 Sprachen unterstützt",
    ai_welcome: "Hallo! Ich bin Ihr intelligenter GlobalShop KI-Berater. Wie kann ich Ihnen heute bei Ihrer Produktauswahl oder Bestellung helfen?",
    ai_placeholder: "Ihre Frage eingeben...",
    ai_quick_1: "Was sind die beliebtesten Artikel?",
    ai_quick_2: "Gibt es Rabatt-Gutscheine?",
    ai_quick_3: "Wie lange dauert der Versand?",
    ai_quick_4: "Elektronik-Kategorie anzeigen",
    ai_speak_reply: "Sprachausgabe",

    // Audio Presentation
    pres_play_audio: "🎙️ Deutscher Audio-Pitch Guide",
    pres_stop_audio: "⏹️ Audio stoppen",
    pres_audio_playing: "Audio-Präsentation läuft...",

    // Admin Panel
    admin_title: "GlobalShop Administrationsbereich",
    admin_tab_dashboard: "Übersicht",
    admin_tab_products: "Produkte",
    admin_tab_orders: "Bestellungen",
    admin_tab_analytics: "Analysen",
    admin_total_sales: "Gesamtumsatz",
    admin_total_orders: "Bestellungen",
    admin_total_products: "Produkte",
    admin_active_users: "Aktive Kunden",
    btn_add_product: "+ Neues Produkt anlegen",
    btn_export_csv: "📥 CSV-Bericht exportieren",
    drop_image_here: "Bild hier ablegen oder Datei auswählen",
    th_image: "Bild",
    th_name: "Produktname",
    th_category: "Kategorie",
    th_price: "Preis",
    th_stock: "Lagerbestand",
    th_actions: "Aktionen",
    th_order_id: "Bestell-ID",
    th_customer: "Kunde",
    th_status: "Status",
    th_date: "Datum",

    // Slide Titles
    slides: []
  },

  en: {
    // Navigation & General
    nav_home: "Home",
    nav_catalog: "Catalog",
    nav_presentation: "🎤 10-Slide Pitch Deck (DE/UZ)",
    nav_admin: "Admin Dashboard",
    nav_orders: "My Orders",
    nav_wishlist: "Wishlist",
    nav_login: "Login",
    nav_register: "Register",
    nav_logout: "Logout",
    search_placeholder: "Search products or speak via mic...",
    cart_title: "Shopping Cart",
    empty_cart: "Your cart is empty",
    empty_wishlist: "No saved items yet",
    voice_search_listening: "🎙️ Listening... Speak product name",
    voice_search_unsupported: "Voice search not supported in this browser",

    // Hero Section
    hero_badge: "🚀 Next-Gen Global E-Commerce 2026",
    hero_title: "Borderless Commerce & <span class='gradient-text'>Multi-Language</span> Experience",
    hero_subtitle: "Buy and sell globally with native multi-language support, multi-currency conversion, secure Stripe payments, voice search, and AI assistant.",
    hero_btn_shop: "Explore Catalog",
    hero_btn_pitch: "10-Slide Pitch Deck",
    stat_clients: "Happy Customers",
    stat_products: "Premium Products",
    stat_delivery: "Fast Delivery",
    stat_security: "PCI-DSS Protected",

    // Filters & Categories
    cat_all: "All Categories",
    cat_electronics: "Electronics",
    cat_fashion: "Fashion & Clothes",
    cat_home: "Home & Living",
    cat_accessories: "Accessories",
    cat_books: "Books",
    sort_default: "Featured",
    sort_price_asc: "Price: Low to High",
    sort_price_desc: "Price: High to Low",
    sort_rating: "Highest Rated",
    sort_name: "Name: A to Z",
    filter_price_max: "Max Price",
    filter_discount_only: "Discounts Only",
    filter_in_stock_only: "In Stock Only",

    // Product Card & Details
    in_stock: "In Stock",
    out_of_stock: "Out of Stock",
    btn_add_cart: "Add to Cart",
    btn_in_cart: "In Cart",
    btn_quick_view: "Quick View",
    reviews: "reviews",
    rating: "Rating",
    desc_title: "Product Description",
    specs_title: "Specifications",
    warranty: "Warranty",
    delivery_info: "Shipping Info",
    free_shipping: "Free Shipping Worldwide",
    customer_reviews: "Customer Reviews",
    add_review_title: "Write a Review",
    btn_submit_review: "Submit Review",
    review_success: "Thank you for your review!",

    // Cart & Checkout
    subtotal: "Subtotal",
    shipping: "Shipping",
    tax: "Estimated Tax (12%)",
    discount: "Discount",
    total: "Total",
    coupon_placeholder: "PROMO CODE (e.g. GLOBAL2026)",
    btn_apply: "Apply",
    btn_checkout: "Proceed to Checkout",
    checkout_title: "Secure Checkout (Stripe Simulation)",
    card_number: "Card Number",
    card_exp: "Expiration (MM/YY)",
    card_cvc: "CVC / CVV",
    card_name: "Cardholder Name",
    btn_pay_now: "Complete Purchase",
    shipping_address: "Shipping Address",
    full_name: "Full Name",
    phone_number: "Phone Number",
    city: "City / State",
    address_line: "Street Address",
    payment_success: "Payment Successfully Processed!",
    order_id: "Order ID",
    print_receipt: "Print Official Invoice (PDF)",
    track_order: "Track Live Order",

    // 3D Secure SMS Modal
    secure_title: "3D Secure Verification",
    secure_desc: "Please enter the 6-digit SMS verification code (Test code: 123456):",
    btn_confirm_sms: "Verify Code",

    // Live Order Tracking
    track_modal_title: "Live Courier Order Tracking",
    step_ordered: "Confirmed",
    step_packed: "Packed",
    step_shipped: "On the Way",
    step_delivered: "Delivered",
    courier_status: "The courier is currently heading to your destination...",

    // AI Shopping Assistant
    ai_title: "AI Shopping Assistant",
    ai_subtitle: "Online • 4 Languages Supported",
    ai_welcome: "Hello! I am your GlobalShop AI shopping companion. How may I assist you with product advice, discounts or order tracking today?",
    ai_placeholder: "Type your query here...",
    ai_quick_1: "What are the trending items?",
    ai_quick_2: "Are there any promo codes?",
    ai_quick_3: "What is the delivery timeframe?",
    ai_quick_4: "Show Electronics category",
    ai_speak_reply: "Read Aloud",

    // Audio Presentation
    pres_play_audio: "🎙️ German Audio Pitch Guide",
    pres_stop_audio: "⏹️ Stop Audio",
    pres_audio_playing: "Audio presentation playing...",

    // Admin Panel
    admin_title: "GlobalShop Administration Suite",
    admin_tab_dashboard: "Overview",
    admin_tab_products: "Products",
    admin_tab_orders: "Orders",
    admin_tab_analytics: "Analytics",
    admin_total_sales: "Total Revenue",
    admin_total_orders: "Total Orders",
    admin_total_products: "Total Products",
    admin_active_users: "Active Customers",
    btn_add_product: "+ Add New Product",
    btn_export_csv: "📥 Export CSV Report",
    drop_image_here: "Drop image here or click to browse",
    th_image: "Image",
    th_name: "Name",
    th_category: "Category",
    th_price: "Price",
    th_stock: "Stock",
    th_actions: "Actions",
    th_order_id: "Order ID",
    th_customer: "Customer",
    th_status: "Status",
    th_date: "Date"
  },

  ru: {
    // Navigation & General
    nav_home: "Главная",
    nav_catalog: "Каталог",
    nav_presentation: "🎤 10-Слайдов Презентация (DE/UZ)",
    nav_admin: "Панель Управления",
    nav_orders: "Мои Заказы",
    nav_wishlist: "Избранное",
    nav_login: "Войти",
    nav_register: "Регистрация",
    nav_logout: "Выйти",
    search_placeholder: "Поиск товаров или голосом...",
    cart_title: "Корзина",
    empty_cart: "Ваша корзина пуста",
    empty_wishlist: "В избранном пока ничего нет",
    voice_search_listening: "🎙️ Слушаю... Назовите товар",
    voice_search_unsupported: "Голосовой поиск не поддерживается браузером",

    // Hero Section
    hero_badge: "🚀 Новое поколение глобальной коммерции 2026",
    hero_title: "Торговля без границ и <span class='gradient-text'>Многоязычная</span> платформа",
    hero_subtitle: "Покупайте товары по всему миру с поддержкой мультиязычности, конвертацией валют, безопасной оплатой Stripe, голосовым поиском и AI-консультантом.",
    hero_btn_shop: "Перейти к покупкам",
    hero_btn_pitch: "Презентация для Германии",
    stat_clients: "Довольных клиентов",
    stat_products: "Качественных товаров",
    stat_delivery: "Быстрая доставка",
    stat_security: "Защита Stripe PCI-DSS",

    // Filters & Categories
    cat_all: "Все категории",
    cat_electronics: "Электроника",
    cat_fashion: "Одежда и стиль",
    cat_home: "Дом и кухня",
    cat_accessories: "Аксессуары",
    cat_books: "Книги",
    sort_default: "По умолчанию",
    sort_price_asc: "Сначала дешевые",
    sort_price_desc: "Сначала дорогие",
    sort_rating: "По рейтингу",
    sort_name: "По названию (А-Я)",
    filter_price_max: "Максимальная цена",
    filter_discount_only: "Только со скидкой",
    filter_in_stock_only: "Только в наличии",

    // Product Card & Details
    in_stock: "В наличии",
    out_of_stock: "Нет в наличии",
    btn_add_cart: "В корзину",
    btn_in_cart: "В корзине",
    btn_quick_view: "Быстрый просмотр",
    reviews: "отзывов",
    rating: "Рейтинг",
    desc_title: "Описание товара",
    specs_title: "Характеристики",
    warranty: "Гарантия",
    delivery_info: "Доставка",
    free_shipping: "Бесплатная доставка",
    customer_reviews: "Отзывы покупателей",
    add_review_title: "Оставить отзыв",
    btn_submit_review: "Отправить отзыв",
    review_success: "Спасибо за ваш отзыв!",

    // Cart & Checkout
    subtotal: "Промежуточный итог",
    shipping: "Доставка",
    tax: "НДС (12%)",
    discount: "Скидка",
    total: "Итого к оплате",
    coupon_placeholder: "ПРОМОКОД (напр: GLOBAL2026)",
    btn_apply: "Применить",
    btn_checkout: "Оформить заказ",
    checkout_title: "Безопасная Оплата (Stripe Симуляция)",
    card_number: "Номер карты",
    card_exp: "Срок действия (ММ/ГГ)",
    card_cvc: "CVC / CVV",
    card_name: "Имя на карте",
    btn_pay_now: "Оплатить заказ",
    shipping_address: "Адрес доставки",
    full_name: "ФИО получателя",
    phone_number: "Номер телефона",
    city: "Город / Регион",
    address_line: "Улица и номер дома",
    payment_success: "Оплата успешно завершена!",
    order_id: "Номер заказа",
    print_receipt: "Распечатать чек (Инвойс)",
    track_order: "Отследить заказ онлайн",

    // 3D Secure SMS Modal
    secure_title: "3D Secure Подтверждение",
    secure_desc: "Введите 6-значный SMS-код безопасности (Тестовый код: 123456):",
    btn_confirm_sms: "Подтвердить код",

    // Live Order Tracking
    track_modal_title: "Онлайн отслеживание курьера",
    step_ordered: "Принят",
    step_packed: "Упакован",
    step_shipped: "В пути",
    step_delivered: "Доставлен",
    courier_status: "Курьер направляется по указанному адресу доставки...",

    // AI Shopping Assistant
    ai_title: "AI Торговый Помощник",
    ai_subtitle: "Онлайн • Поддержка 4 языков",
    ai_welcome: "Здравствуйте! Я искусственный интеллект-консультант GlobalShop. Чем могу помочь: подбор товара, проверка скидок или статус заказа?",
    ai_placeholder: "Напишите ваш вопрос...",
    ai_quick_1: "Какие товары самые популярные?",
    ai_quick_2: "Есть ли промокоды на скидку?",
    ai_quick_3: "Сколько длится доставка?",
    ai_quick_4: "Показать товары категории Электроника",
    ai_speak_reply: "Озвучить ответ",

    // Audio Presentation
    pres_play_audio: "🎙️ Немецкий аудио-гид презентации",
    pres_stop_audio: "⏹️ Остановить звук",
    pres_audio_playing: "Воспроизведение презентации...",

    // Admin Panel
    admin_title: "Панель Администратора GlobalShop",
    admin_tab_dashboard: "Обзор",
    admin_tab_products: "Товары",
    admin_tab_orders: "Заказы",
    admin_tab_analytics: "Аналитика",
    admin_total_sales: "Общая выручка",
    admin_total_orders: "Всего заказов",
    admin_total_products: "Количество товаров",
    admin_active_users: "Активные клиенты",
    btn_add_product: "+ Добавить товар",
    btn_export_csv: "📥 Экспорт отчета в CSV",
    drop_image_here: "Перетащите изображение сюда или выберите файл",
    th_image: "Фото",
    th_name: "Название",
    th_category: "Категория",
    th_price: "Цена",
    th_stock: "Остаток",
    th_actions: "Действия",
    th_order_id: "Заказ ID",
    th_customer: "Клиент",
    th_status: "Статус",
    th_date: "Дата"
  }
};

// Copy slide deck items across languages so presentation is consistent
I18N_DATA.de.slides = I18N_DATA.uz.slides;
I18N_DATA.en.slides = I18N_DATA.uz.slides;
I18N_DATA.ru.slides = I18N_DATA.uz.slides;

// Expose i18n helper function
function t(key, lang = store ? store.lang : 'uz') {
  const currentLangData = I18N_DATA[lang] || I18N_DATA['uz'];
  return currentLangData[key] || I18N_DATA['uz'][key] || key;
}
