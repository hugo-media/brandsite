const HUGO_LINKS = {
  consultation: "",
  aboutMe: "#about-me",
  aboutPlatform: "#about-platform",
  legalization: "",
  business: "",
  advertising: "",
  mediaDevelopment: "",
  partnerships: "",
  telegram: "",
  instagram: "",
  facebook: "",
  tiktok: "",
  youtube: ""
};

const HUGO_I18N = {
  uk: {
    lang: "uk",
    title: "Hugo Media Group — консультації, медіа, легалізація та бізнес у Польщі",
    description: "Персональний бренд і медіа-платформа для українців у Польщі. Консультації, легалізація, реклама, бізнес і медійний розвиток.",
    toast: "Посилання ще не додано. Відредагуйте HUGO_LINKS у script.js.",
    "brand": "HUGO MEDIA GROUP",
    "hero.name": "Hugo",
    "hero.location": "Warszawa · Poland",
    "hero.kicker": "Консультації · Медіа · Легалізація · Бізнес",
    "hero.headline": "Hugo Media Group",
    "hero.bio": "Hugo — персональний бренд і медіа-платформа для українців у Польщі. Допомагаю людям і бізнесам розібратись із легалізацією, документами, бізнесом, рекламою, особистим брендом, контентом і медійним розвитком.",
    "cta.main": "Домовитись про консультацію",
    "cta.subtext": "Бізнес · легалізація · реклама · медійний розвиток",
    "buttons.aboutMe": "Про мене",
    "buttons.aboutMeSub": "Хто я і з чим допомагаю",
    "buttons.aboutPlatform": "Про платформу Hugo Media Group",
    "buttons.aboutPlatformSub": "Контент, консультації, реклама і партнерства",
    "work.kicker": "Напрямки",
    "work.title": "З чим ми працюємо",
    "work.subtitle": "Основні напрямки Hugo Media Group: консультації, медіа, легалізація, реклама, бізнес і партнерські проєкти.",
    "cards.legal.title": "Польща та легалізація",
    "cards.legal.text": "Документи, статус, карта побиту, права, адаптація та практичні питання життя в Польщі.",
    "cards.business.title": "Бізнес і запуск",
    "cards.business.text": "Ідея, упаковка, позиціонування, продажі, перші клієнти та стратегія розвитку.",
    "cards.ads.title": "Реклама та продажі",
    "cards.ads.text": "Просування бізнесу через Instagram, TikTok, Telegram, контент і медійні інтеграції.",
    "cards.mediaDev.title": "Медійний розвиток",
    "cards.mediaDev.text": "Особистий бренд, контент-стратегія, Reels/TikTok, публічна подача та розкрутка.",
    "cards.partnerships.title": "Партнерства",
    "cards.partnerships.text": "Реклама, інтеграції, інтерв’ю, колаборації та спільні проєкти.",
    "aboutMe.kicker": "Про мене",
    "aboutMe.title": "Про мене",
    "aboutMe.text": "Я — Hugo, засновник Hugo Media Group. Будую персональний бренд і медійну платформу для українців у Польщі. Мій фокус — консультації, бізнес, реклама, легалізація та медійний розвиток.",
    "aboutPlatform.kicker": "Платформа",
    "aboutPlatform.title": "Про платформу Hugo Media Group",
    "aboutPlatform.text": "Hugo Media Group — це платформа навколо персонального бренду Hugo. Вона об’єднує контент, консультації, легалізаційні рішення, рекламу для бізнесу, партнерства та медійні проєкти для українців у Польщі."
  },
  en: {
    lang: "en",
    title: "Hugo Media Group — consultations, media, legalization and business in Poland",
    description: "A personal brand and media platform for Ukrainians in Poland. Consultations, legalization, advertising, business and media development.",
    toast: "This link has not been added yet. Edit HUGO_LINKS in script.js.",
    "brand": "HUGO MEDIA GROUP",
    "hero.name": "Hugo",
    "hero.location": "Warsaw · Poland",
    "hero.kicker": "Consultations · Media · Legalization · Business",
    "hero.headline": "Hugo Media Group",
    "hero.bio": "Hugo is a personal brand and media platform for Ukrainians in Poland. I help people and businesses understand legalization, documents, business, advertising, personal branding, content and media development.",
    "cta.main": "Arrange a consultation",
    "cta.subtext": "Business · legalization · advertising · media development",
    "buttons.aboutMe": "About me",
    "buttons.aboutMeSub": "Who I am and how I help",
    "buttons.aboutPlatform": "About Hugo Media Group",
    "buttons.aboutPlatformSub": "Content, consultations, advertising and partnerships",
    "work.kicker": "Focus areas",
    "work.title": "What we work with",
    "work.subtitle": "The main areas of Hugo Media Group: consultations, media, legalization, advertising, business and partnership projects.",
    "cards.legal.title": "Poland and legalization",
    "cards.legal.text": "Documents, status, residence card, rights, adaptation and practical questions about life in Poland.",
    "cards.business.title": "Business and launch",
    "cards.business.text": "Idea, packaging, positioning, sales, first clients and growth strategy.",
    "cards.ads.title": "Advertising and sales",
    "cards.ads.text": "Business promotion through Instagram, TikTok, Telegram, content and media integrations.",
    "cards.mediaDev.title": "Media development",
    "cards.mediaDev.text": "Personal brand, content strategy, Reels/TikTok, public presentation and audience growth.",
    "cards.partnerships.title": "Partnerships",
    "cards.partnerships.text": "Advertising, integrations, interviews, collaborations and joint projects.",
    "aboutMe.kicker": "About me",
    "aboutMe.title": "About me",
    "aboutMe.text": "I am Hugo, founder of Hugo Media Group. I build a personal brand and media platform for Ukrainians in Poland. My focus is consultations, business, advertising, legalization and media development.",
    "aboutPlatform.kicker": "Platform",
    "aboutPlatform.title": "About Hugo Media Group",
    "aboutPlatform.text": "Hugo Media Group is a platform built around Hugo’s personal brand. It brings together content, consultations, legalization solutions, advertising for businesses, partnerships and media projects for Ukrainians in Poland."
  },
  pl: {
    lang: "pl",
    title: "Hugo Media Group — konsultacje, media, legalizacja i biznes w Polsce",
    description: "Marka osobista i platforma medialna dla Ukraińców w Polsce. Konsultacje, legalizacja, reklama, biznes i rozwój medialny.",
    toast: "Ten link nie został jeszcze dodany. Edytuj HUGO_LINKS w script.js.",
    "brand": "HUGO MEDIA GROUP",
    "hero.name": "Hugo",
    "hero.location": "Warszawa · Polska",
    "hero.kicker": "Konsultacje · Media · Legalizacja · Biznes",
    "hero.headline": "Hugo Media Group",
    "hero.bio": "Hugo to marka osobista i platforma medialna dla Ukraińców w Polsce. Pomagam ludziom i firmom zrozumieć legalizację, dokumenty, biznes, reklamę, markę osobistą, content i rozwój medialny.",
    "cta.main": "Umówić konsultację",
    "cta.subtext": "Biznes · legalizacja · reklama · rozwój medialny",
    "buttons.aboutMe": "O mnie",
    "buttons.aboutMeSub": "Kim jestem i w czym pomagam",
    "buttons.aboutPlatform": "O platformie Hugo Media Group",
    "buttons.aboutPlatformSub": "Content, konsultacje, reklama i partnerstwa",
    "work.kicker": "Kierunki",
    "work.title": "Z czym pracujemy",
    "work.subtitle": "Główne obszary Hugo Media Group: konsultacje, media, legalizacja, reklama, biznes i projekty partnerskie.",
    "cards.legal.title": "Polska i legalizacja",
    "cards.legal.text": "Dokumenty, status, karta pobytu, prawa, adaptacja i praktyczne kwestie życia w Polsce.",
    "cards.business.title": "Biznes i start",
    "cards.business.text": "Pomysł, opakowanie, pozycjonowanie, sprzedaż, pierwsi klienci i strategia rozwoju.",
    "cards.ads.title": "Reklama i sprzedaż",
    "cards.ads.text": "Promocja biznesu przez Instagram, TikTok, Telegram, content i integracje medialne.",
    "cards.mediaDev.title": "Rozwój medialny",
    "cards.mediaDev.text": "Marka osobista, strategia contentowa, Reels/TikTok, publiczna prezentacja i rozwój zasięgów.",
    "cards.partnerships.title": "Partnerstwa",
    "cards.partnerships.text": "Reklama, integracje, wywiady, współprace i wspólne projekty.",
    "aboutMe.kicker": "O mnie",
    "aboutMe.title": "O mnie",
    "aboutMe.text": "Jestem Hugo, założycielem Hugo Media Group. Buduję markę osobistą i platformę medialną dla Ukraińców w Polsce. Mój fokus to konsultacje, biznes, reklama, legalizacja i rozwój medialny.",
    "aboutPlatform.kicker": "Platforma",
    "aboutPlatform.title": "O platformie Hugo Media Group",
    "aboutPlatform.text": "Hugo Media Group to platforma wokół marki osobistej Hugo. Łączy content, konsultacje, rozwiązania legalizacyjne, reklamę dla biznesu, partnerstwa i projekty medialne dla Ukraińców w Polsce."
  }
};

const toast = document.querySelector(".toast");
const languageButtons = document.querySelectorAll("[data-lang]");
let toastTimer;
let activeLanguage = "uk";

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function setMeta(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.setAttribute("content", value);
}

function applyLanguage(language) {
  const dictionary = HUGO_I18N[language] || HUGO_I18N.uk;
  activeLanguage = language;
  document.documentElement.lang = dictionary.lang;
  document.title = dictionary.title;

  setMeta('meta[name="description"]', dictionary.description);
  setMeta('meta[property="og:title"]', dictionary.title);
  setMeta('meta[property="og:description"]', dictionary.description);
  setMeta('meta[name="twitter:title"]', dictionary.title);
  setMeta('meta[name="twitter:description"]', dictionary.description);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) element.textContent = dictionary[key];
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === language);
  });
}

function applyEditableLinks() {
  document.querySelectorAll("[data-link]").forEach((element) => {
    const key = element.dataset.link;
    const url = HUGO_LINKS[key];

    if (url) {
      element.href = url;
      if (!url.startsWith("#")) {
        element.target = "_blank";
        element.rel = "noopener noreferrer";
      }
      return;
    }

    if (element.getAttribute("href")?.startsWith("#")) return;

    element.addEventListener("click", (event) => {
      event.preventDefault();
      showToast((HUGO_I18N[activeLanguage] || HUGO_I18N.uk).toast);
    });
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

applyLanguage(activeLanguage);
applyEditableLinks();
