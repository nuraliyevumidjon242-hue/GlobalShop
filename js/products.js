/**
 * GlobalShop - Initial Products Database (Supercharged with Interactive Reviews & Specs)
 */

const INITIAL_PRODUCTS = [
  {
    id: "prod_1",
    category: "electronics",
    name: {
      uz: "MacBook Pro 16 M3 Max Ultra (32GB / 1TB)",
      de: "Apple MacBook Pro 16 M3 Max (32GB RAM / 1TB SSD)",
      en: "Apple MacBook Pro 16 M3 Max (32GB / 1TB SSD)",
      ru: "Apple MacBook Pro 16 M3 Max (32ГБ / 1ТБ SSD)"
    },
    priceUSD: 2499,
    oldPriceUSD: 2799,
    discountPercent: 11,
    rating: 4.9,
    reviewCount: 142,
    stock: 18,
    badge: "hot",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    desc: {
      uz: "Eng kuchli Apple M3 Max protsessori, Liquid Retina XDR displey, 22 soatlik batareya quvvati va professional darajadagi unumdorlik.",
      de: "Leistungsstarker Apple M3 Max Chip, Liquid Retina XDR Display, bis zu 22 Stunden Akkulaufzeit für professionelle Workflows.",
      en: "Supercharged by M3 Max chip, Liquid Retina XDR display, 22-hour battery life engineered for extreme pro workflows.",
      ru: "Мощнейший чип Apple M3 Max, экран Liquid Retina XDR, до 22 часов работы без подзарядки для профессиональных задач."
    },
    specs: {
      processor: "Apple M3 Max 14-core",
      ram: "32GB Unified Memory",
      storage: "1TB Ultra-Fast SSD",
      display: "16.2\" Liquid Retina XDR 120Hz",
      warranty: "2 Yil Rasmiy Kafolat"
    },
    userReviews: [
      { name: "Lukas Weber (München)", rating: 5, comment: "Absolutes Spitzenmodell für Entwickler. Die Batterielaufzeit ist unglaublich!", date: "2026-02-15" },
      { name: "Jasur K.", rating: 5, comment: "Dasturlash va video render qilish uchun ajoyib, 10/10.", date: "2026-02-18" }
    ]
  },
  {
    id: "prod_2",
    category: "electronics",
    name: {
      uz: "Sony WH-1000XM5 Simsiz Shovqinni So'ndiruvchi Quloqchin",
      de: "Sony WH-1000XM5 Wireless Noise-Cancelling Kopfhörer",
      en: "Sony WH-1000XM5 Wireless Noise-Canceling Headphones",
      ru: "Беспроводные наушники Sony WH-1000XM5 с шумоподавлением"
    },
    priceUSD: 399,
    oldPriceUSD: 449,
    discountPercent: 11,
    rating: 4.8,
    reviewCount: 310,
    stock: 35,
    badge: "discount",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    desc: {
      uz: "Bozordagi eng ilg'or shovqinni so'ndirish (ANC) texnologiyasi, kristaldek tiniq audio va 30 soatgacha to'xtovsiz ishlash.",
      de: "Branchenführende Geräuschunterdrückung mit zwei Prozessoren und 8 Mikrofonen. Außergewöhnliche Klangqualität und 30 Std. Akku.",
      en: "Industry-leading noise cancellation with 8 microphones, ultra-comfortable design, and 30 hours of continuous playback.",
      ru: "Передовая система активного шумоподавления, кристально чистый звук высокой четкости и 30 часов автономной работы."
    },
    specs: {
      connectivity: "Bluetooth 5.2 / LDAC",
      battery: "30 Soat (ANC yoqilganda)",
      weight: "250g",
      charging: "USB-C Tezkor Zaryad",
      warranty: "1 Yil Kafolat"
    },
    userReviews: [
      { name: "Maximilian S.", rating: 5, comment: "Perfekt im Flugzeug und Büro. Bestes Active Noise Cancelling auf dem Markt.", date: "2026-02-10" }
    ]
  },
  {
    id: "prod_3",
    category: "electronics",
    name: {
      uz: "iPhone 16 Pro Max 256GB Titan",
      de: "Apple iPhone 16 Pro Max 256GB Titan",
      en: "Apple iPhone 16 Pro Max 256GB Titanium",
      ru: "Смартфон Apple iPhone 16 Pro Max 256GB Titanium"
    },
    priceUSD: 1199,
    oldPriceUSD: 1299,
    discountPercent: 8,
    rating: 5.0,
    reviewCount: 520,
    stock: 12,
    badge: "new",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80",
    desc: {
      uz: "Titan korpus, A18 Pro protsessori, 48MP yangi Camera Control tizimi va eng uzoq ishlovchi batareya.",
      de: "Titan-Design, A18 Pro Chip, 48 MP Kamera-Steuerungstaste und die beste Akkulaufzeit aller Zeiten im iPhone.",
      en: "Grade 5 Titanium design, groundbreaking A18 Pro chip, 48MP Pro camera system with Camera Control button.",
      ru: "Титановый корпус, процессор A18 Pro, кнопка управления камерой 48 МП и рекордное время работы аккумулятора."
    },
    specs: {
      screen: "6.9\" Super Retina XDR OLED",
      camera: "48MP Main + 48MP Ultra Wide + 5x Telephoto",
      chip: "A18 Pro (3nm)",
      os: "iOS 18",
      warranty: "1 Yil Global Apple Kafolat"
    },
    userReviews: [
      { name: "Dilshod R.", rating: 5, comment: "Kamerasi va titan korpusi juda yoqdi. Yetkazib berish juda tez bo'ldi!", date: "2026-02-22" }
    ]
  },
  {
    id: "prod_4",
    category: "fashion",
    name: {
      uz: "Premium Italiya Teri Kurtkasi (Biker Edition)",
      de: "Italienische Premium-Lederjacke für Herren",
      en: "Premium Italian Genuine Leather Jacket",
      ru: "Премиальная кожаная куртка из итальянской кожи"
    },
    priceUSD: 349,
    oldPriceUSD: 499,
    discountPercent: 30,
    rating: 4.7,
    reviewCount: 89,
    stock: 15,
    badge: "discount",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
    desc: {
      uz: "100% tabiiy italyan terisidan qo'lda tikilgan nafis biker kurtkasi. Shamol va sovuqdan to'liq himoya.",
      de: "Handgefertigt aus 100% echtem italienischem Nappaleder. Zeitloser Biker-Schnitt mit robusten YKK-Reißverschlüssen.",
      en: "Handcrafted from 100% genuine Italian Nappa leather. Timeless slim-fit cut with heavy-duty metal hardware.",
      ru: "Ручная работа из 100% натуральной итальянской кожи. Классический байкерский крой и надежная фурнитура YKK."
    },
    specs: {
      material: "100% Nappa Teri",
      lining: "Ipak va Paxta",
      fit: "Slim-Fit",
      origin: "Italiya (Milan)",
      sizes: "S, M, L, XL, XXL"
    },
    userReviews: []
  },
  {
    id: "prod_5",
    category: "fashion",
    name: {
      uz: "Nike Air Max 2026 Futura Sport Krossovkasi",
      de: "Nike Air Max 2026 Futura Sneaker",
      en: "Nike Air Max 2026 Futura Running Sneakers",
      ru: "Кроссовки Nike Air Max 2026 Futura"
    },
    priceUSD: 189,
    oldPriceUSD: 220,
    discountPercent: 14,
    rating: 4.9,
    reviewCount: 240,
    stock: 40,
    badge: "hot",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    desc: {
      uz: "Yengil va havo o'tkazuvchan to'rli mato, maksimal qulaylik ta'minlovchi Air kapsulasi va zamonaviy neon dizayn.",
      de: "Modernste Dämpfungstechnologie mit durchgehendem Air-Element. Ultimativer Tragekomfort für Sport und Alltag.",
      en: "Next-gen Air cushioning system provides ultra-plush comfort, breathable mesh upper, and high-traction rubber outsole.",
      ru: "Инновационная амортизация Air по всей длине подошвы, дышащий верх и яркий футуристичный дизайн."
    },
    specs: {
      type: "Sport & Casual",
      cushioning: "Full Air Sole Unit",
      weight: "320g",
      sizes: "39, 40, 41, 42, 43, 44, 45",
      gender: "Unisex"
    },
    userReviews: []
  },
  {
    id: "prod_6",
    category: "accessories",
    name: {
      uz: "Shveysariya Mexanik Avtomatik Qo'l Soati (Sapphire)",
      de: "Schweizer Automatikuhr mit Saphirglas",
      en: "Swiss Automatic Mechanical Watch with Sapphire Glass",
      ru: "Швейцарские механические часы с автоподзаводом"
    },
    priceUSD: 850,
    oldPriceUSD: 1100,
    discountPercent: 22,
    rating: 4.95,
    reviewCount: 75,
    stock: 8,
    badge: "hot",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
    desc: {
      uz: "Haqiqiy shveysariya mexanizmi, tirnalishga chidamli sapfir oyna, 100 metr suv o'tkazmaslik va zanglamas po'lat.",
      de: "Schweizer Präzisions-Automatikwerk, kratzfestes entspiegeltes Saphirglas, 10 bar wasserdicht und 316L Edelstahl.",
      en: "Authentic Swiss automatic movement, scratch-resistant sapphire crystal, 100m water resistance, and 316L stainless steel.",
      ru: "Настоящий швейцарский механизм с автоподзаводом, сапфировое стекло, водозащита 100м и стальной корпус 316L."
    },
    specs: {
      movement: "Swiss ETA 2824-2 (38h Power Reserve)",
      case: "41mm 316L Stainless Steel",
      crystal: "Anti-Reflective Sapphire",
      waterResistance: "100 Meters / 10 ATM",
      warranty: "5 Yil Shveysariya Kafolat"
    },
    userReviews: []
  },
  {
    id: "prod_7",
    category: "home",
    name: {
      uz: "De'Longhi Magnifica S Aqlli Qahva Mashinasi",
      de: "De'Longhi Magnifica S Kaffeevollautomat",
      en: "De'Longhi Magnifica S Smart Espresso Coffee Machine",
      ru: "Кофемашина автоматическая De'Longhi Magnifica S"
    },
    priceUSD: 599,
    oldPriceUSD: 699,
    discountPercent: 14,
    rating: 4.85,
    reviewCount: 412,
    stock: 22,
    badge: "hot",
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=80",
    desc: {
      uz: "Donli qahvani bir zumda maydalab, mukammal espresso va kapuchino tayyorlab beruvchi avtomatik qahva mashinasi.",
      de: "Kompakter Kaffeevollautomat mit 13-stufigem Mahlwerk, Milchaufschäumdüse für cremigen Cappuccino und einfacher Reinigung.",
      en: "Bean-to-cup smart espresso machine with 13 grind settings, manual milk frother, and customizable coffee strength.",
      ru: "Автоматическая кофемашина со встроенной кофемолкой на 13 степеней помола, ручным капучинатором и быстрым нагревом."
    },
    specs: {
      pressure: "15 Bar",
      waterTank: "1.8 Litr",
      grinder: "13-bosqichli Konussimon Tegirmon",
      features: "Avtomatik tozalash & Cappuccino tizimi",
      warranty: "2 Yil Kafolat"
    },
    userReviews: []
  },
  {
    id: "prod_8",
    category: "home",
    name: {
      uz: "Dyson V15 Detect Simsiz Changyutgich (Laser LED)",
      de: "Dyson V15 Detect Kabelloser Staubsauger",
      en: "Dyson V15 Detect Cordless Smart Vacuum Cleaner",
      ru: "Беспроводной пылесос Dyson V15 Detect"
    },
    priceUSD: 749,
    oldPriceUSD: 849,
    discountPercent: 12,
    rating: 4.9,
    reviewCount: 180,
    stock: 14,
    badge: "new",
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=80",
    desc: {
      uz: "Ko'rinmas changlarni aniq ko'rsatuvchi lazerli cho'tka, aqlli chang o'lchov datchigi va 60 daqiqalik quvvat.",
      de: "Hocheffizienter kabelloser Sauger mit Laserstauberkennung, LCD-Display mit Partikelzählung und 240 AW Saugleistung.",
      en: "Laser reveals microscopic dust, piezo sensor automatically sizes particles and optimizes power for up to 60 mins run time.",
      ru: "Лазерная подсветка пыли, интеллектуальный подсчет микрочастиц на LCD дисплее и 60 минут непрерывной уборки."
    },
    specs: {
      suctionPower: "240 AW",
      batteryTime: "60 Daqiqa",
      filter: "HEPA 99.99% Filtratsiya",
      weight: "3.1 kg",
      warranty: "2 Yil Dyson Rasmiy Kafolati"
    },
    userReviews: []
  },
  {
    id: "prod_9",
    category: "accessories",
    name: {
      uz: "Ray-Ban Aviator Klassik Quyosh Ko'zoynagi (Polaroid)",
      de: "Ray-Ban Aviator Classic Polarisierte Sonnenbrille",
      en: "Ray-Ban Aviator Classic Polarized Sunglasses",
      ru: "Солнцезащитные очки Ray-Ban Aviator Polarized"
    },
    priceUSD: 165,
    oldPriceUSD: 195,
    discountPercent: 15,
    rating: 4.75,
    reviewCount: 290,
    stock: 50,
    badge: "discount",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    desc: {
      uz: "100% UV400 himoya, qutblangan (polarized) linzalar va metall oltin rangli klassik hoshiya.",
      de: "Kultige Pilotenbrille mit polarisierten Gläsern, 100% UV-Schutz und leichtem, vergoldetem Metallrahmen.",
      en: "Timeless aviator design featuring polarized crystal lenses, 100% UV400 radiation protection, and lightweight metal frame.",
      ru: "Культовые авиаторы с поляризационными минеральными стеклами, полной защитой от ультрафиолета UV400 и золотистой оправой."
    },
    specs: {
      frame: "Metal / Gold Finish",
      lenses: "G-15 Polarized Green",
      uvProtection: "100% UV400",
      origin: "Italiya",
      case: "Original Charm G'ilof"
    },
    userReviews: []
  },
  {
    id: "prod_10",
    category: "books",
    name: {
      uz: "Toza Kod (Clean Code) - Robert Martin (O'zbek/Nemis/Ingliz)",
      de: "Clean Code: Refactoring, Patterns, Testen (Robert C. Martin)",
      en: "Clean Code: A Handbook of Agile Software Craftsmanship",
      ru: "Чистый код: создание, анализ и рефакторинг (Р. Мартин)"
    },
    priceUSD: 45,
    oldPriceUSD: 55,
    discountPercent: 18,
    rating: 4.98,
    reviewCount: 650,
    stock: 80,
    badge: "hot",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    desc: {
      uz: "Dasturlash sohasidagi eng mashhur qo'llanma: toza, o'qilishi oson va professional kod yozish qoidalari.",
      de: "Das Standardwerk für jeden Softwareentwickler: Wie man lesbaren, wartbaren und fehlerfreien Code schreibt.",
      en: "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. Master craftsman guide.",
      ru: "Классическое руководство по написанию чистого, понятного, масштабируемого и поддерживаемого программного кода."
    },
    specs: {
      author: "Robert C. Martin (Uncle Bob)",
      pages: "464 Sahifa",
      format: "Qattiq Muqova & E-book",
      publisher: "Prentice Hall",
      edition: "2026 Yangilangan Nashr"
    },
    userReviews: []
  }
];

// LocalStorage helpers
function getStoredProducts() {
  const data = localStorage.getItem('globalshop_products');
  if (data) {
    try {
      return JSON.parse(data);
    } catch (e) {
      console.error("Error parsing stored products:", e);
    }
  }
  localStorage.setItem('globalshop_products', JSON.stringify(INITIAL_PRODUCTS));
  return INITIAL_PRODUCTS;
}

function saveStoredProducts(products) {
  localStorage.setItem('globalshop_products', JSON.stringify(products));
}

function addProductReview(productId, name, rating, comment) {
  const products = getStoredProducts();
  const prod = products.find(p => p.id === productId);
  if (prod) {
    if (!prod.userReviews) prod.userReviews = [];
    prod.userReviews.unshift({
      name,
      rating: parseInt(rating),
      comment,
      date: new Date().toISOString().split('T')[0]
    });
    prod.reviewCount += 1;
    saveStoredProducts(products);
    return true;
  }
  return false;
}
