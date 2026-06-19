const HUGO_LINKS = {
  consultation: "https://t.me/Hugo_media",
  telegram: "https://t.me/Hugo_media",
  instagram: "https://www.instagram.com/hugo.ax.l?igsh=ODZ0enU4aHA5cnNp&utm_source=qr",
  facebook: "https://www.facebook.com/HugoStiglitzMedia?mibextid=wwXIfr&rdid=6bEocYcfdeEEHd5P&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18j3PUf9pc%2F%3Fmibextid%3DwwXIfr#",
  tiktok: "https://www.tiktok.com/@_hugo_media?is_from_webapp=1&sender_device=pc",
  youtube: "https://www.youtube.com/@hugo_media_pl",
  axisLegalisation: "https://t.me/axis_legalisation",
  shop: "https://t.me/hugo_media_shop"
};

const HUGO_STATUS = {
  name: "Сергій Гальчук / Hugo",
  title: "Незалежний міжнародний журналіст, автор Hugo Media Group, блогер і підприємець"
};

const HUGO_SOCIALS = [
  { label: "TikTok", href: HUGO_LINKS.tiktok },
  { label: "Instagram", href: HUGO_LINKS.instagram },
  { label: "Facebook", href: HUGO_LINKS.facebook },
  { label: "YouTube", href: HUGO_LINKS.youtube },
  { label: "Telegram", href: HUGO_LINKS.telegram },
  { label: "Легалізація", href: HUGO_LINKS.axisLegalisation, i18n: "global.axis" },
  { label: "Hugo Media Shop", href: HUGO_LINKS.shop, i18n: "global.shop" }
];

const HUGO_STRUCTURED_DATA = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Сергій Гальчук",
    alternateName: "Hugo",
    jobTitle: "Незалежний міжнародний журналіст, автор Hugo Media Group",
    description: "Незалежний міжнародний журналіст, блогер, підприємець і автор медіаплатформи Hugo Media Group.",
    url: "https://hugosite-lac.vercel.app/",
    sameAs: [HUGO_LINKS.telegram, HUGO_LINKS.instagram, HUGO_LINKS.facebook, HUGO_LINKS.tiktok, HUGO_LINKS.youtube]
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hugo Media Group",
    description: "Авторська медіаплатформа про людей, бізнес і життя за кордоном.",
    url: "https://hugosite-lac.vercel.app/",
    sameAs: [HUGO_LINKS.telegram, HUGO_LINKS.instagram, HUGO_LINKS.facebook, HUGO_LINKS.tiktok, HUGO_LINKS.youtube]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Hugo Media Group",
    url: "https://hugosite-lac.vercel.app/"
  }
];

const I18N = {
  ua: {
    "nav.home": "На головну",
    "nav.about": "Про Hugo",
    "nav.platform": "Платформа",
    "cta.write": "Обговорити співпрацю",
    "cta.consult": "Обговорити співпрацю",
    "cta.consultSub": "Медійна присутність · інтеграції · партнерства",
    "global.contact": "Зв’язатись",
    "global.footer": "Соцмережі Hugo Media Group",
    "global.axis": "Легалізація",
    "global.shop": "Hugo Media Shop",
    "home.kicker": "Авторська медіаплатформа",
    "home.bio.main": "Авторська медіаплатформа про людей, бізнес і життя за кордоном.",
    "home.bio.help": "Допомагаю підприємцям ставати видимими, зрозумілими й довіреними через історії, інтерв’ю та медійні інтеграції.",
    "home.bio.statement": "Показую не просто бізнес.<br>Показую людину за бізнесом.",
    "home.bio.name": "Сергій Гальчук / Hugo",
    "home.bio.role": "Блогер та Незалежний міжнародний журналіст",
    "home.cta.main": "Обговорити співпрацю",
    "home.cta.mainSub": "Медійна присутність · інтеграції · партнерства",
    "home.cta.mediaKit": "Отримати медіакіт",
    "home.cta.mediaKitSub": "Аудиторія, формати співпраці та інтеграції",
    "home.cta.formats": "Подивитись формати",
    "home.cta.formatsSub": "Формати для підприємців і бізнесу",
    "home.directions.kicker": "Напрямки",
    "home.directions.title": "З чим ми працюємо",
    "home.directions.subtitle": "Основні напрямки Hugo Media Group: медійна присутність для бізнесу, історії підприємців, медійні інтеграції, тематичні вертикалі та партнерські проєкти.",
    "home.card.media": "Медіа-платформа",
    "home.card.mediaSub": "Контент, історії, пояснення та комунікація з українцями в Польщі.",
    "home.card.legalization": "Легалізація в Польщі",
    "home.card.legalizationSub": "Тематична вертикаль: документи, PESEL, ZUS, UKR і практичні питання.",
    "home.card.business": "Для бізнесу",
    "home.card.businessSub": "Медійна присутність, особистий бренд, довіра та інтеграції.",
    "home.card.partners": "Співпраця",
    "home.card.partnersSub": "Інтеграції, інтерв’ю, колаборації та тематичні напрямки.",
    "home.card.about": "Про Hugo",
    "home.card.aboutSub": "Автор платформи, журналістський підхід, бізнес і довіра.",
    "home.card.platform": "Про Hugo Media Group",
    "home.card.platformSub": "Екосистема контенту, аудиторії, бізнесу і партнерств."
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About Hugo",
    "nav.platform": "Platform",
    "cta.write": "Discuss cooperation",
    "cta.consult": "Discuss cooperation",
    "cta.consultSub": "Media presence · integrations · partnerships",
    "global.contact": "Contact",
    "global.footer": "Hugo Media Group social links",
    "global.axis": "Legalization",
    "global.shop": "Hugo Media Shop",
    "home.kicker": "Author-led media platform",
    "home.bio.main": "An author-led media platform about people, business and life abroad.",
    "home.bio.help": "I help entrepreneurs become visible, clear and trusted through stories, interviews and media integrations.",
    "home.bio.statement": "I do not just show the business.<br>I show the person behind the business.",
    "home.bio.name": "Serhii Halchuk / Hugo",
    "home.bio.role": "Blogger and independent international journalist",
    "home.cta.main": "Discuss cooperation",
    "home.cta.mainSub": "Media presence · integrations · partnerships",
    "home.cta.mediaKit": "Get the media kit",
    "home.cta.mediaKitSub": "Audience, cooperation formats and integrations",
    "home.cta.formats": "View formats",
    "home.cta.formatsSub": "Formats for entrepreneurs and business",
    "home.directions.kicker": "Directions",
    "home.directions.title": "What we work with",
    "home.directions.subtitle": "The main Hugo Media Group directions: media presence for business, entrepreneur stories, media integrations, thematic verticals and partnership projects.",
    "home.card.media": "Media platform",
    "home.card.mediaSub": "Content, stories, explanations and communication with Ukrainians in Poland.",
    "home.card.legalization": "Legalization in Poland",
    "home.card.legalizationSub": "A thematic vertical: documents, PESEL, ZUS, UKR status and practical questions.",
    "home.card.business": "For business",
    "home.card.businessSub": "Media presence, personal brand, trust and integrations.",
    "home.card.partners": "Cooperation",
    "home.card.partnersSub": "Integrations, interviews, collaborations and thematic directions.",
    "home.card.about": "About Hugo",
    "home.card.aboutSub": "Platform author, journalistic approach, business and trust.",
    "home.card.platform": "About Hugo Media Group",
    "home.card.platformSub": "An ecosystem of content, audience, business and partnerships."
  },
  pl: {
    "nav.home": "Strona główna",
    "nav.about": "O Hugo",
    "nav.platform": "Platforma",
    "cta.write": "Omówić współpracę",
    "cta.consult": "Omówić współpracę",
    "cta.consultSub": "Obecność medialna · integracje · partnerstwa",
    "global.contact": "Kontakt",
    "global.footer": "Social media Hugo Media Group",
    "global.axis": "Legalizacja",
    "global.shop": "Hugo Media Shop",
    "home.kicker": "Autorska platforma medialna",
    "home.bio.main": "Autorska platforma medialna o ludziach, biznesie i życiu za granicą.",
    "home.bio.help": "Pomagam przedsiębiorcom stać się widocznymi, zrozumiałymi i wiarygodnymi poprzez historie, wywiady oraz integracje medialne.",
    "home.bio.statement": "Pokazuję nie tylko biznes.<br>Pokazuję człowieka stojącego za biznesem.",
    "home.bio.name": "Serhii Halchuk / Hugo",
    "home.bio.role": "Bloger i niezależny dziennikarz międzynarodowy",
    "home.cta.main": "Omówić współpracę",
    "home.cta.mainSub": "Obecność medialna · integracje · partnerstwa",
    "home.cta.mediaKit": "Pobrać mediakit",
    "home.cta.mediaKitSub": "Odbiorcy, formaty współpracy i integracje",
    "home.cta.formats": "Zobaczyć formaty",
    "home.cta.formatsSub": "Formaty dla przedsiębiorców i biznesu",
    "home.directions.kicker": "Kierunki",
    "home.directions.title": "Z czym pracujemy",
    "home.directions.subtitle": "Główne kierunki Hugo Media Group: obecność medialna dla biznesu, historie przedsiębiorców, integracje medialne, piony tematyczne i projekty partnerskie.",
    "home.card.media": "Platforma medialna",
    "home.card.mediaSub": "Treści, historie, wyjaśnienia i komunikacja z Ukraińcami w Polsce.",
    "home.card.legalization": "Legalizacja w Polsce",
    "home.card.legalizationSub": "Pion tematyczny: dokumenty, PESEL, ZUS, UKR i praktyczne pytania.",
    "home.card.business": "Dla biznesu",
    "home.card.businessSub": "Obecność medialna, marka osobista, zaufanie i integracje.",
    "home.card.partners": "Współpraca",
    "home.card.partnersSub": "Integracje, wywiady, współprace i kierunki tematyczne.",
    "home.card.about": "O Hugo",
    "home.card.aboutSub": "Autor platformy, podejście dziennikarskie, biznes i zaufanie.",
    "home.card.platform": "O Hugo Media Group",
    "home.card.platformSub": "Ekosystem treści, odbiorców, biznesu i partnerstw."
  }
};

const PAGE_TITLES = {
  ua: {
    home: "Hugo Media Group — медійна присутність для бізнесу",
    about: "Сергій Гальчук / Hugo — незалежний міжнародний журналіст і автор Hugo Media Group",
    consultation: "Консультація з Hugo — Hugo Media Group",
    platform: "Hugo Media Group — авторська медіаплатформа для українців за кордоном",
    media: "Медіа-платформа — Hugo Media Group",
    legalization: "Легалізація в Польщі — тематична вертикаль Hugo Media Group",
    business: "Медійна присутність для підприємців і бізнесу — Hugo Media Group",
    partners: "Партнерства з Hugo Media Group — медійні інтеграції та доступ до аудиторії",
    "media-kit": "Медіакіт Hugo Media Group — аудиторія, формати співпраці та інтеграції"
  },
  en: {
    home: "Hugo Media Group — media presence for business",
    about: "Serhii Halchuk / Hugo — independent international journalist and author of Hugo Media Group",
    consultation: "Consultation with Hugo — Hugo Media Group",
    platform: "Hugo Media Group — author-led media platform for Ukrainians abroad",
    media: "Media platform — Hugo Media Group",
    legalization: "Legalization in Poland — Hugo Media Group vertical",
    business: "Media presence for entrepreneurs and business — Hugo Media Group",
    partners: "Partnerships with Hugo Media Group — media integrations and audience access",
    "media-kit": "Hugo Media Group media kit — audience, cooperation formats and integrations"
  },
  pl: {
    home: "Hugo Media Group — obecność medialna dla biznesu",
    about: "Serhii Halchuk / Hugo — niezależny dziennikarz międzynarodowy i autor Hugo Media Group",
    consultation: "Konsultacja z Hugo — Hugo Media Group",
    platform: "Hugo Media Group — autorska platforma medialna dla Ukraińców za granicą",
    media: "Platforma medialna — Hugo Media Group",
    legalization: "Legalizacja w Polsce — tematyczny kierunek Hugo Media Group",
    business: "Obecność medialna dla przedsiębiorców i biznesu — Hugo Media Group",
    partners: "Partnerstwa z Hugo Media Group — integracje medialne i dostęp do odbiorców",
    "media-kit": "Mediakit Hugo Media Group — odbiorcy, formaty współpracy i integracje"
  }
};

const toast = document.querySelector(".toast");
let toastTimer;
let currentLanguage = localStorage.getItem("hugoLanguage") || "ua";

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function injectStructuredData() {
  if (document.querySelector("script[data-hugo-jsonld]")) return;
  const structuredData = document.createElement("script");
  structuredData.type = "application/ld+json";
  structuredData.dataset.hugoJsonld = "true";
  structuredData.textContent = JSON.stringify(HUGO_STRUCTURED_DATA);
  document.head.appendChild(structuredData);
}

function setExternalLink(element, href, text) {
  if (!element) return;
  element.href = href;
  element.target = "_blank";
  element.rel = "noopener noreferrer";
  if (text) setLabel(element, text);
}

function setInternalLink(element, href, text) {
  if (!element) return;
  element.href = href;
  element.removeAttribute("target");
  element.removeAttribute("rel");
  element.removeAttribute("data-link");
  if (text) setLabel(element, text);
}

function setLabel(element, text) {
  const label = element.querySelector("strong") || element;
  label.textContent = text;
}

function applyEditableLinks() {
  document.querySelectorAll("[data-link]").forEach((element) => {
    const key = element.dataset.link;
    const url = HUGO_LINKS[key];

    if (url) {
      setExternalLink(element, url);
      return;
    }

    element.addEventListener("click", (event) => {
      event.preventDefault();
      showToast("Посилання ще не додано. Відредагуйте HUGO_LINKS у script.js.");
    });
  });
}

function injectGlobalContact() {
  if (document.querySelector(".floating-contact")) return;
  const contact = document.createElement("a");
  contact.className = "floating-contact";
  contact.href = HUGO_LINKS.telegram;
  contact.target = "_blank";
  contact.rel = "noopener noreferrer";
  contact.setAttribute("aria-label", "Зв’язатись зі мною в Telegram");
  contact.innerHTML = `
    <span class="floating-contact__icon" aria-hidden="true">↗</span>
    <span class="floating-contact__text" data-i18n="global.contact">Зв’язатись</span>
  `;
  document.body.appendChild(contact);
}

function injectSocialFooter() {
  if (document.querySelector(".site-social-footer")) return;
  const footer = document.createElement("footer");
  footer.className = "site-social-footer";
  const links = HUGO_SOCIALS.map((item) => {
    const i18n = item.i18n ? ` data-i18n="${item.i18n}"` : "";
    return `<a href="${item.href}" target="_blank" rel="noopener noreferrer"${i18n}>${item.label}</a>`;
  }).join("");

  footer.innerHTML = `
    <p data-i18n="global.footer">Соцмережі Hugo Media Group</p>
    <div class="site-social-footer__links">${links}</div>
  `;
  document.body.appendChild(footer);
}

function applyPageCtas() {
  const page = document.body.dataset.page || "home";
  const dictionary = I18N[currentLanguage] || I18N.ua;

  if (page === "home") {
    setExternalLink(document.querySelector(".action-list .action-card.action-primary"), HUGO_LINKS.telegram);
    return;
  }

  if (page === "about") return;
  if (page === "consultation") return;
  if (page === "legalization") return;

  if (page === "platform") {
    setExternalLink(document.querySelector(".platform-value-cta"), HUGO_LINKS.telegram, dictionary["cta.write"] || "Обговорити співпрацю");
    setExternalLink(document.querySelector(".editorial-page-actions .action-card.action-primary"), HUGO_LINKS.telegram, dictionary["cta.write"] || "Обговорити співпрацю");
    return;
  }

  if (page === "business") {
    const mainCta = document.querySelector(".platform-unites .platform-value-cta");
    setExternalLink(mainCta, HUGO_LINKS.telegram, dictionary["cta.write"] || "Обговорити співпрацю");
    const mediaKitCta = document.querySelector("[data-business-mediakit]");
    if (mediaKitCta) {
      setExternalLink(mediaKitCta, HUGO_LINKS.telegram, "Отримати комерційну пропозицію");
    }
    return;
  }

  const pageCtas = {
    media: {
      ua: "Запропонувати тему або інтеграцію",
      en: "Suggest a topic or integration",
      pl: "Zaproponować temat lub integrację"
    },
    partners: {
      ua: "Запропонувати співпрацю",
      en: "Suggest cooperation",
      pl: "Zaproponować współpracę"
    },
    "media-kit": {
      ua: "Обговорити співпрацю",
      en: "Discuss cooperation",
      pl: "Omówić współpracę"
    }
  };
  const text = pageCtas[page]?.[currentLanguage];
  if (text) {
    setExternalLink(document.querySelector(".editorial-page-actions .action-card.action-primary"), HUGO_LINKS.telegram, text);
    setExternalLink(document.querySelector(".platform-unites .platform-value-cta"), HUGO_LINKS.telegram, text);
  }
}

function setLanguage(lang) {
  currentLanguage = lang;
  const dictionary = I18N[lang] || I18N.ua;
  document.documentElement.lang = lang === "ua" ? "uk" : lang;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = dictionary[element.dataset.i18nHtml];
    if (value) element.innerHTML = value;
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
    button.setAttribute("aria-pressed", button.dataset.lang === lang ? "true" : "false");
  });
  const page = document.body.dataset.page || "home";
  if (PAGE_TITLES[lang]?.[page]) document.title = PAGE_TITLES[lang][page];
  localStorage.setItem("hugoLanguage", lang);
  applyPageCtas();
}

function initLanguageSwitcher() {
  const savedLanguage = localStorage.getItem("hugoLanguage") || "ua";
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });
  setLanguage(savedLanguage);
}

injectStructuredData();
injectGlobalContact();
injectSocialFooter();
applyEditableLinks();
initLanguageSwitcher();