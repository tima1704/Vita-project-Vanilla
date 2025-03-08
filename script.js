document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    ru: {
      cooperation: "Сотрудничество",
      brands: "Бренды",
      about: "О нас",
      callCenter: "Наш кол центр:",
      contactUs: "Связаться с нами",
      homeHeader: "Витамиркет предлагает Вам  широкий ассортимент качественных витаминов и биологически активных добавок, которые помогут вам поддерживать здоровье, улучшить самочувствие и повысить уровень энергии.",
      homeSubHeader: "Наша цель — сделать заботу о вашем здоровье доступной и удобной.",
      guarantee1: "Гарантия 100% оргинальности",
      guarantee2: "Профессиональные рекомендации, разбор анализов и индивидуальный подбор витаминных добавок",
      guarantee3: "Широкий ассортимент",
      guarantee4: "удобные условия покупки",
      brandsHeader: "В нашем магазине ВитаМаркет вы найдете более 20 ведущих мировых брендов витаминов, бадов и спортивного питания.",
      productsHeader: "Наши продукты",
      aboutUsHeader: "Наши преимущества",
      step1: "Доставка",
      step1Desc: "Доставка по всему миру",
      step2: "Гарантия качества",
      step2Desc: "Мы гарантируем Вам оригинальную продукцию и пост-продажное сопровождение",
      step3: "Поддержка 24/7",
      step3Desc: "Персональный менеджер и индивидуальный подход",
      step4: "Более 5000+ товаров в наличии на складе и готовы к отправке в удобное для вас время.",
      step4Desc: "Более 5 000+ товаров готовы к отгрузке в любое время",
      faq1: "С какими брендами вы сотрудничаете?",
      faq1Ans: "-Мы работаем с 20+ лучшими мировыми брендами - лидерами рынка БАДов и спортивного питания. У нас широкий ассортимент в разрезе каждого бренда и хорошие цены.",
      faq2: "Как я могу оплатить свой заказ?",
      faq2Ans: " - У нас доступны различные способы оплаты: кредитные карты, интернет-банкинг, электронные кошельки и наличные.",
      faq3: "Как осуществляется доставка?",
      faq3Ans: "  - Мы предлагаем несколько вариантов доставки, включая курьерскую службу и почтовую доставку. Сроки зависят от вашего региона.",
      faq4: " Как вы гарантируете качество ваших продуктов?",
      faq4Ans: " - Мы работаем только с проверенными производителями и проводим регулярные проверки качества на всех этапах производства.",
      faq5: "Можно ли вернуть товар, если он мне не подошел?",
      faq5Ans: " - Да, в соответствии с нашей политикой возврата вы можете вернуть товар в течение определенного времени при условии сохранения упаковки и качества продукта",
      marqueeT: "#1 в городе магазин витаминов и бадов с широким ассортиментом и качественной продукцией",
      ourTxone: "Мы предлагаем профессиональные консультации с квалифицированными специалистами, которые могут помочь подобрать необходимые добавки с учетом индивидуальных потребностей и здоровья клиента",
      ourTtwo: "Мы работаем  только с проверенными производителями и можем предложить качественные и сертифицированные продукты.",
      ourTxThree: "Мы работаем как в традиционном формате, так и онлайн, что делает процесс покупки более удобным и доступным.",
      ourTxFor: "Мы следим за последними исследованиями в области здоровья и нутриционистики и предлагаем новинки, соответствующие современным трендам.", 
      aboutUs2Title: "Выбирайте нас - здоровье в каждой капсуле!",
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
      homeHeader: "VitaMarket  offers a wide range of quality vitamins and dietary supplements that will help you maintain your health, improve your well-being, and boost your energy levels. Our goal is to make caring for your health accessible and convenient. ",
      homeSubHeader: "Наша цель — сделать заботу о вашем здоровье доступной и удобной.",
      guarantee1: "100% originality guarantee",
      guarantee2: "Professional recommendations, analysis review, and personalized selection of vitamin supplements  ",
      guarantee3: "Wide range of products",
      ourBrands: "Our partner brands:",
      guarantee4: "Convenient purchase conditions",
      brandsHeader: "In VitaMarket you will find more than 20 of the world's leading brands of vitamins, dietary supplements and sports nutrition.",
      productsHeader: "Our products",
      aboutUsHeader: "Our advantages",
      step1: "Shipping",
      step1Desc: "Worldwide shipping",
      step2: "Quality guarantee",
      step2Desc: "We guarantee you original products and after-sales support",
      step3: "24/7 support",
      step3Desc: "Personal manager and individual approach",
      step4: "More than 5000+ items in stock in the store and read to be shipped at any time convenient for you",
      step4Desc: "Over 5,000+ items ready for shipping at any time",
      faq1: "What brands do you work with?",
      faq1Ans: "-We work with 20+ of the best global brands - leaders in the dietary supplements and sports nutrition market. We have a wide range of products for each brand and good prices.",
      faq2: "How can I pay for my order?",
      faq2Ans: "- We have various payment methods available: credit cards, online banking, e-wallets and cash.",
      faq3: "How is shipping done?",
      faq3Ans: "- We offer several shipping options, including courier service and postal delivery. The timing depends on your region.",
      faq4: " How do you guarantee the quality of your products?",
      faq4Ans: "- We only work with trusted manufacturers and conduct regular quality checks at all stages of production.",
      faq5: "Can I return the product if it does not suit me?",
      faq5Ans: "- Yes, according to our return policy, you can return the product within a certain time, provided that the packaging and quality of the product are preserved.",
      marqueeT: "#1 store of vitamins and dietary supplements in the city with a wide range and quality products",
      ourTxone: "We offer professional consultations with qualified specialists who can help select the necessary supplements taking into account the individual needs and health of the client",
      ourTtwo: "We work only with trusted manufacturers and can offer high-quality and certified products.",
      ourTxThree: "We work both in the traditional format and online, which makes the purchasing process more convenient and accessible.",
      ourTxFor: "We follow the latest research in the field of health and nutrition and offer new products that meet modern trends.",
      aboutUs2Title: " Choose us - health in every capsule!",
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

    document.querySelectorAll(".step_work_container div h3").forEach((el, index) => {
      el.textContent = translations[lang][`step${index + 1}`];
    });
    
    document.querySelectorAll(".step_work_container div p").forEach((el, index) => {
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
