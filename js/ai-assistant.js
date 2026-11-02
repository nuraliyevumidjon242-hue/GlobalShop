/**
 * GlobalShop - AI Shopping Assistant (Smart Multi-Language NLP Chatbot)
 * Handles smart recommendations, coupon guidance, inventory status, and instant support in 4 languages
 */

const AIAssistant = {
  isOpen: false,

  init() {
    this.window = document.getElementById('aiChatWindow');
    this.trigger = document.getElementById('aiWidgetTrigger');
    this.input = document.getElementById('aiChatInput');
    this.messagesContainer = document.getElementById('aiMessagesContainer');

    // Welcome greeting
    this.addBotMessage(t('ai_welcome', store.lang));

    // Listen to lang changes
    store.subscribe((event) => {
      if (event === 'LANGUAGE_CHANGED') {
        this.addBotMessage(t('ai_welcome', store.lang));
      }
    });
  },

  toggle() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.window.classList.add('open');
      if (this.input) this.input.focus();
    } else {
      this.window.classList.remove('open');
    }
  },

  sendQuick(promptText) {
    this.addUserMessage(promptText);
    this.processQuery(promptText);
  },

  sendUserMessage() {
    if (!this.input) return;
    const text = this.input.value.trim();
    if (!text) return;

    this.addUserMessage(text);
    this.input.value = '';
    this.processQuery(text);
  },

  addUserMessage(text) {
    if (!this.messagesContainer) return;
    const msgEl = document.createElement('div');
    msgEl.className = 'ai-msg user';
    msgEl.textContent = text;
    this.messagesContainer.appendChild(msgEl);
    this.scrollToBottom();
  },

  addBotMessage(htmlText) {
    if (!this.messagesContainer) return;
    const msgEl = document.createElement('div');
    msgEl.className = 'ai-msg bot';
    msgEl.innerHTML = htmlText;
    this.messagesContainer.appendChild(msgEl);
    this.scrollToBottom();
  },

  scrollToBottom() {
    if (this.messagesContainer) {
      this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }
  },

  processQuery(query) {
    const q = query.toLowerCase();
    const lang = store.lang;
    const products = getStoredProducts();

    // Typing simulation delay
    setTimeout(() => {
      // 1. Coupon & Discount Inquiry
      if (q.includes('promo') || q.includes('chegirma') || q.includes('rabatt') || q.includes('discount') || q.includes('kupon') || q.includes('скидк')) {
        let reply = "";
        if (lang === 'de') {
          reply = `🎉 Hier ist Ihr exklusiver Gutscheincode: <strong>GLOBAL2026</strong> (20% Rabatt) oder <strong>GERMANY10</strong> (10% Rabatt). Einfach im Warenkorb einlösen!`;
        } else if (lang === 'en') {
          reply = `🎉 Here is your exclusive promo code: <strong>GLOBAL2026</strong> (20% OFF) or <strong>GERMANY10</strong> (10% OFF). Apply it inside your shopping cart!`;
        } else if (lang === 'ru') {
          reply = `🎉 Ваш эксклюзивный промокод: <strong>GLOBAL2026</strong> (скидка 20%) или <strong>GERMANY10</strong> (скидка 10%). Примените его в корзине!`;
        } else {
          reply = `🎉 Siz uchun maxsus chegirma promokodlari: <strong>GLOBAL2026</strong> (20% chegirma) yoki <strong>UMIDJON</strong> (25% VIP chegirma). Savatchangizda qo'llashingiz mumkin!`;
        }
        this.addBotMessage(reply);
        return;
      }

      // 2. Delivery / Shipping Inquiry
      if (q.includes('yetkaz') || q.includes('liefer') || q.includes('shipping') || q.includes('доставк') || q.includes('delivery')) {
        let reply = "";
        if (lang === 'de') {
          reply = `🚚 Wir liefern weltweit innerhalb von 2–4 Werktagen. Ab einem Bestellwert von <strong>$500</strong> ist der Versand absolut <strong>KOSTENLOS</strong>!`;
        } else if (lang === 'en') {
          reply = `🚚 We offer worldwide express delivery in 2–4 business days. Orders over <strong>$500</strong> qualify for <strong>FREE SHIPPING</strong>!`;
        } else if (lang === 'ru') {
          reply = `🚚 Экспресс-доставка по всему миру за 2–4 рабочих дня. При заказе от <strong>$500</strong> доставка абсолютно <strong>БЕСПЛАТНА</strong>!`;
        } else {
          reply = `🚚 Butun dunyo va O'zbekiston bo'ylab 2-4 ish kunida yetkazib beramiz. <strong>$500</strong> dan ortiq xaridlarga yetkazib berish <strong>MUTLAQO BEPUL</strong>!`;
        }
        this.addBotMessage(reply);
        return;
      }

      // 3. Category / Product Search (e.g. Laptop, Phone, Watch, Shoes)
      if (q.includes('macbook') || q.includes('laptop') || q.includes('noutbuk') || q.includes('kompyuter') || q.includes('apple')) {
        const prod = products.find(p => p.id === 'prod_1');
        if (prod) {
          const name = prod.name[lang] || prod.name['en'];
          const price = store.formatPrice(prod.priceUSD);
          this.addBotMessage(`💻 Tavsiya etilgan eng kuchli model:<br><strong>${name}</strong><br>Narxi: <span style="color: var(--primary-light); font-weight: bold;">${price}</span><br><button class="btn btn-primary" onclick="store.addToCart('${prod.id}'); AIAssistant.toggle();" style="padding: 4px 10px; font-size: 0.75rem; margin-top: 6px;">Savatga qo'shish</button>`);
          return;
        }
      }

      if (q.includes('quloqchin') || q.includes('headphone') || q.includes('sony') || q.includes('kopfhörer') || q.includes('наушник')) {
        const prod = products.find(p => p.id === 'prod_2');
        if (prod) {
          const name = prod.name[lang] || prod.name['en'];
          const price = store.formatPrice(prod.priceUSD);
          this.addBotMessage(`🎧 Eng yaxshi shovqin so'ndiruvchi quloqchin:<br><strong>${name}</strong><br>Narxi: <span style="color: var(--primary-light); font-weight: bold;">${price}</span><br><button class="btn btn-primary" onclick="store.addToCart('${prod.id}'); AIAssistant.toggle();" style="padding: 4px 10px; font-size: 0.75rem; margin-top: 6px;">Savatga qo'shish</button>`);
          return;
        }
      }

      if (q.includes('elektronik') || q.includes('electronic') || q.includes('электроник')) {
        this.addBotMessage(`📱 Elektronika toifasida bizda <strong>Apple MacBook Pro M3</strong>, <strong>iPhone 16 Pro Max</strong> va <strong>Sony WH-1000XM5</strong> mavjud. Yuqori sifat va 2 yilgacha kafolat taqdim etiladi!`);
        if (typeof App !== 'undefined' && App.filterByCategory) {
          App.filterByCategory('electronics');
        }
        return;
      }

      // 4. Cart Status inquiry
      if (q.includes('savat') || q.includes('warenkorb') || q.includes('cart') || q.includes('корзин')) {
        const count = store.getCartCount();
        if (count === 0) {
          this.addBotMessage(`🛒 Sizning savatchangiz hozircha bo'sh. Qiziqarli mahsulotlarni tanlab, savatga qo'shishingiz mumkin!`);
        } else {
          const calcs = store.getCartCalculations(products);
          this.addBotMessage(`🛒 Savatchangizda <strong>${count} ta</strong> tovar bor.<br>Jami summa: <strong>${store.formatPrice(calcs.totalUSD)}</strong>.<br><button class="btn btn-primary" onclick="CartController.open(); AIAssistant.toggle();" style="padding: 4px 10px; font-size: 0.75rem; margin-top: 6px;">Savatchani ko'rish</button>`);
        }
        return;
      }

      // 5. Default Smart Fallback
      let fallback = "";
      if (lang === 'de') {
        reply = `Ich habe Ihre Anfrage verstanden! Sie können in unserem Katalog nach den neuesten Technologien, Modeprodukten oder Haushaltsgeräten stöbern. Nutzen Sie auch unsere 10-Folien-Präsentation für detaillierte technische Einblicke.`;
      } else if (lang === 'en') {
        reply = `I got your query! Feel free to explore our premium catalog for electronics, fashion, or home appliances. You can also view our 10-Slide Pitch Deck for technical details.`;
      } else if (lang === 'ru') {
        reply = `Я понял ваш вопрос! В нашем каталоге представлены премиальные товары электроники, одежды и дома. Также вы можете открыть 10-слайдовую презентацию для изучения архитектуры платформы.`;
      } else {
        reply = `Savolingizni tushundim! Katalogimizdan eng so'nggi gadjetlar, moda va maishiy texnikalarni xarid qilishingiz mumkin. Shuningdek, yuqoridagi <strong>10-Slayd Prezentatsiya</strong> tugmasi orqali loyihaning to'liq arxitekturasini ko'rishingiz mumkin!`;
      }
      this.addBotMessage(reply);
    }, 450);
  }
};
