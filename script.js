document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    ru: {
      cooperation: "Сотрудничество",
      brands: "Бренды",
      about: "О нас",
      callCenter: "Наш кол центр:",
      contactUs: "Связаться с нами",
      homeHeader: "Оптовые поставки БАДов и спортивного питания напрямую от заводов-производителей из Европы из США",
      homeSubHeader: "Быстрый рост продаж, готовые инструменты и гарантированный доход на маркетплейсах, в интернет-магазинах, аптечных сетях и розничной торговле",
      guarantee1: "Гарантия 100% оргинальности",
      guarantee2: "Персональный менеджер с поддержкой 24/7",
      guarantee3: "Таможенное оформление, честный знак и доставка до вашего склада из Европы и США под ключ",
      guarantee4: "Официальный дистрибьютер 7 лет на рынке",
      brandsHeader: "Вита Маркет Официальный дистрибьютор более 20 ведущих мировых Брендов витаминов, спортивного питания в ЕАЭС.",
      productsHeader: "Наши продукты",
      aboutUsHeader: "Наши преимущества",
      step1: "Доставка",
      step1Desc: "Доставка по всему миру",
      step2: "Гарантия качества",
      step2Desc: "Мы гарантируем Вам оригинальную продукцию и пост-продажное сопровождение",
      step3: "Поддержка 24/7",
      step3Desc: "Персональный менеджер и индивидуальный подход",
      step4: "Более 2 000+ SKU всегда в наличии на складе",
      step4Desc: "Более 2 000+ SKU позиций готовы к отгрузке в любое время",
      faq1: "Как сделать заказ?",
      faq1Ans: "Вы можете оформить заказ через наш сайт, добавив товары в корзину и заполнив форму заказа.",
      faq2: "Какие способы оплаты доступны?",
      faq2Ans: "Мы принимаем оплату картами Visa, MasterCard, а также через электронные кошельки.",
      faq3: "Сколько времени занимает доставка?",
      faq3Ans: "Доставка занимает от 3 до 7 рабочих дней в зависимости от вашего региона.",
      marqueeT: "#1 в городе магазин витаминов и бадов с широким ассортиментом и качественной продукцией",
      ourTxone: "Преодолейте высокую конкуренцию и увеличьте свои продажи с минимальными затратами!",
      ourTtwo: "Мы предоставляем продукцию известных брендов, которая не требует больших затрат на продвижение. Это позволяет вам быстро занять новые рыночные ниши.",
      ourTxThree: "Поддержка опытного партнера поможет управлять продажами на нескольких площадках, снижая риски ошибок",
      ourTxFor: "Являемся официальными партнерами 20+ топовых мировых брендов витаминов и спортивного питания", 
      aboutUs2Title: "Мы привезем под ключ лучшие бренды витаминов и БАДов из Европы и США, поможем организовать и увеличить продажи",
      reapeatFAQtitle: "Часто задаваемые вопросы",
      aboutF: "О нас",
      ourBrands: "Наши бренды-партнеры:",
      brandsF: "Бренды",
      productsF: "Продукты",
      rightsF: "Все права защишены."
    },
    en: {
      cooperation: "Cooperation",
      brands: "Brands",
      about: "About us",
      callCenter: "Our call center:",
      contactUs: "Contact us",
      homeHeader: "Wholesale supply of dietary supplements and sports nutrition directly from manufacturers in Europe and the USA",
      homeSubHeader: "Rapid sales growth, ready-made tools, and guaranteed income on marketplaces, online stores, pharmacy chains, and retail",
      guarantee1: "100% originality guarantee",
      guarantee2: "Personal manager with 24/7 support",
      guarantee3: "Customs clearance, honest mark, and delivery to your warehouse from Europe and the USA turnkey",
      ourBrands: "Our partner brands:",
      guarantee4: "Official distributor for 7 years in the market",
      brandsHeader: "Vita Market Official distributor of more than 20 leading global brands of vitamins and sports nutrition in the EAEU.",
      productsHeader: "Our products",
      aboutUsHeader: "Our advantages",
      step1: "Delivery",
      step1Desc: "Worldwide delivery",
      step2: "Quality guarantee",
      step2Desc: "We guarantee original products and post-sales support",
      step3: "24/7 support",
      step3Desc: "Personal manager and individual approach",
      step4: "More than 2,000+ SKU always available in stock",
      step4Desc: "More than 2,000+ SKU items ready for shipment at any time",
      faq1: "How to place an order?",
      faq1Ans: "You can place an order through our website by adding items to your cart and filling out the order form.",
      faq2: "What payment methods are available?",
      faq2Ans: "We accept payments via Visa, MasterCard, as well as through e-wallets.",
      faq3: "How long does shipping take?",
      faq3Ans: "Shipping takes 3 to 7 business days depending on your region.",
      marqueeT: "#1 store of vitamins and dietary supplements in the city with a wide range and quality products",
      ourTxone: "Overcome high competition and increase your sales at minimal cost!",
      ourTtwo: "We provide products from well-known brands that do not require large promotional costs. This allows you to quickly occupy new market niches.",
      ourTxThree: "Support from an experienced partner will help manage sales on multiple sites, reducing the risk of errors",
      ourTxFor: "We are official partners of 20+ top global brands of vitamins and sports nutrition",
      aboutUs2Title: "We will bring turnkey the best brands of vitamins and dietary supplements from Europe and the USA, help organize and increase sales",
      reapeatFAQtitle: "Frequently Asked Questions",
      aboutF: "About Us",
      brandsF: "Brands",
      productsF: "Products",
      rightsF: "All rights reserved.",
    },
  }

  function setLanguage(lang) {
    document.querySelectorAll("ul li:nth-child(1) a").forEach(el => el.textContent = translations[lang].cooperation);
    document.querySelectorAll("ul li:nth-child(2) a").forEach(el => el.textContent = translations[lang].brands);
    document.querySelectorAll("ul li:nth-child(3) a").forEach(el => el.textContent = translations[lang].about);
    document.querySelectorAll(".head_phoneNumber p").forEach(el => el.textContent = translations[lang].callCenter);
    document.querySelectorAll(".head_contacts").forEach(el => el.textContent = translations[lang].contactUs);

    document.querySelectorAll(".main_container_one h1").forEach(el => el.textContent = translations[lang].homeHeader);
    document.querySelectorAll(".main_container_one p").forEach(el => el.textContent = translations[lang].homeSubHeader);

    document.querySelectorAll(".marquee span").forEach(span => span.textContent = translations[lang].marqueeT);

    document.querySelectorAll(".main_bottom_content div h3").forEach((el, index) => {
      el.textContent = translations[lang][`guarantee${index + 1}`];
    });

    document.querySelectorAll(".title_block h1").forEach(el => el.textContent = translations[lang].brandsHeader);
    document.querySelectorAll(".ourBrandsTitle").forEach(el => el.textContent = translations[lang].ourBrands);

    document.querySelectorAll(".slider_container h1").forEach(el => el.textContent = translations[lang].productsHeader);
    document.querySelectorAll(".about_us_content1 h1").forEach(el => el.textContent = translations[lang].aboutUsHeader);

    document.querySelectorAll(".ab_box_1 p").forEach(el => el.textContent = translations[lang].ourTxone);
    document.querySelectorAll(".ab_box_2 p").forEach(el => el.textContent = translations[lang].ourTtwo);
    document.querySelectorAll(".ab_box_3 p").forEach(el => el.textContent = translations[lang].ourTxThree);
    document.querySelectorAll(".ab_box_4 p").forEach(el => el.textContent = translations[lang].ourTxFor);

    document.querySelectorAll(".left_content2 h1").forEach(el => el.textContent = translations[lang].aboutUs2Title);

    document.querySelectorAll(".step_work_container .box_container_1 div h3").forEach((el, index) => {
      el.textContent = translations[lang][`step${index + 1}`];
    });

    document.querySelectorAll(".step_work_container .box_container_1 div p").forEach((el, index) => {
      el.textContent = translations[lang][`step${index + 1}Desc`];
    });

    document.querySelectorAll(".text-center").forEach(el => el.textContent = translations[lang].reapeatFAQtitle);
    document.querySelectorAll(".faq-item .faq-question h1").forEach((el, index) => {
      el.textContent = translations[lang][`faq${index + 1}`];
    });
    document.querySelectorAll(".faq-item .faq-answer p").forEach((el, index) => {
      el.textContent = translations[lang][`faq${index + 1}Ans`];
    });

    document.querySelectorAll(".fAbout").forEach(el => el.textContent = translations[lang].aboutF);
    document.querySelectorAll(".fBrands").forEach(el => el.textContent = translations[lang].brandsF);
    document.querySelectorAll(".fProducts").forEach(el => el.textContent = translations[lang].productsF);
    document.querySelectorAll(".second_content_footer p:nth-child(2)").forEach(el => el.textContent = translations[lang].rightsF);

    document.querySelectorAll(".lang").forEach(el => el.classList.remove("active"));
    document.querySelectorAll(`#${lang}_translate`).forEach(el => el.classList.add("active"));
  }

  document.querySelectorAll(".lang").forEach(button => {
    button.addEventListener("click", () => {
      const lang = button.id.includes("ru") ? "ru" : "en"
      setLanguage(lang)
    })
  })

  setLanguage("ru")
})
