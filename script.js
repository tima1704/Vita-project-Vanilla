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
      cooperationF: "2025 ©",
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
      cooperationF: "2025 ©",
      rightsF: "All rights reserved.",
    },
  }

  function setLanguage(lang) {
    document.querySelector("ul li:nth-child(1) a").textContent = translations[lang].cooperation
    document.querySelector("ul li:nth-child(2) a").textContent = translations[lang].brands
    document.querySelector("ul li:nth-child(3) a").textContent = translations[lang].about
    document.querySelector(".head_phoneNumber p").textContent = translations[lang].callCenter
    document.querySelector(".head_contacts").textContent = translations[lang].contactUs

    // Section Home
    document.querySelector(".main_container_one h1").textContent = translations[lang].homeHeader
    document.querySelector(".main_container_one p").textContent = translations[lang].homeSubHeader

    // Marquee 
    const marqueeSpans = document.querySelectorAll(".marquee span")
    marqueeSpans.forEach(span => {
      span.textContent = translations[lang].marqueeT
    })

    // Section Guarantees
    document.querySelectorAll(".main_bottom_content div h3")[0].textContent = translations[lang].guarantee1
    document.querySelectorAll(".main_bottom_content div h3")[1].textContent = translations[lang].guarantee2
    document.querySelectorAll(".main_bottom_content div h3")[2].textContent = translations[lang].guarantee3
    document.querySelectorAll(".main_bottom_content div h3")[3].textContent = translations[lang].guarantee4

    // Section Brands
    document.querySelector(".title_block h1").textContent = translations[lang].brandsHeader
    document.querySelector('.ourBrandsTitle').textContent = translations[lang].ourBrands

    // Section Products
    document.querySelector(".slider_container h1").textContent = translations[lang].productsHeader

    // Section About Us
    document.querySelector(".about_us_content1 h1").textContent = translations[lang].aboutUsHeader

    document.querySelector(".ab_box_1 p").textContent = translations[lang].ourTxone
    document.querySelector(".ab_box_2 p").textContent = translations[lang].ourTtwo
    document.querySelector(".ab_box_3 p").textContent = translations[lang].ourTxThree
    document.querySelector(".ab_box_4 p").textContent = translations[lang].ourTxFor


    document.querySelector(".left_content2 h1").textContent = translations[lang].aboutUs2Title
    document.querySelectorAll(".step_work_container .box_container_1 div h3")[0].textContent = translations[lang].step1
    document.querySelectorAll(".step_work_container .box_container_1 div p")[0].textContent = translations[lang].step1Desc
    document.querySelectorAll(".step_work_container .box_container_1 div h3")[1].textContent = translations[lang].step2
    document.querySelectorAll(".step_work_container .box_container_1 div p")[1].textContent = translations[lang].step2Desc
    document.querySelectorAll(".step_work_container .box_container_2 div h3")[0].textContent = translations[lang].step3
    document.querySelectorAll(".step_work_container .box_container_2 div p")[0].textContent = translations[lang].step3Desc
    document.querySelectorAll(".step_work_container .box_container_2 div h3")[1].textContent = translations[lang].step4
    document.querySelectorAll(".step_work_container .box_container_2 div p")[1].textContent = translations[lang].step4Desc

    // FAQ Section
    document.querySelector('.text-center').textContent = translations[lang].reapeatFAQtitle
    document.querySelectorAll(".faq-item .faq-question h1")[0].textContent = translations[lang].faq1
    document.querySelectorAll(".faq-item .faq-answer p")[0].textContent = translations[lang].faq1Ans
    document.querySelectorAll(".faq-item .faq-question h1")[1].textContent = translations[lang].faq2
    document.querySelectorAll(".faq-item .faq-answer p")[1].textContent = translations[lang].faq2Ans
    document.querySelectorAll(".faq-item .faq-question h1")[2].textContent = translations[lang].faq3
    document.querySelectorAll(".faq-item .faq-answer p")[2].textContent = translations[lang].faq3Ans

    document.querySelector(".fAbout").textContent = translations[lang].aboutF
    document.querySelector(".fBrands").textContent = translations[lang].brandsF
    document.querySelector(".fProducts").textContent = translations[lang].productsF
    document.querySelector(".second_content_footer p:nth-child(1)").textContent = translations[lang].cooperationF
    document.querySelector(".second_content_footer p:nth-child(2)").textContent = translations[lang].rightsF

    document.getElementById("ru_translate").classList.remove("active")
    document.getElementById("en_translate").classList.remove("active")

    document.getElementById(lang + "_translate").classList.add("active")
  }

  setLanguage("ru")

  document.getElementById("ru_translate").addEventListener("click", () => setLanguage("ru"))
  document.getElementById("en_translate").addEventListener("click", () => setLanguage("en"))
})
