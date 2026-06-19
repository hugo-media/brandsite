const HUGO_LINKS = {
  consultation: "https://t.me/Hugo_media",
  telegram: "https://t.me/Hugo_media",
  instagram: "",
  facebook: "",
  tiktok: "",
  youtube: ""
};

const HUGO_STATUS = {
  name: "Сергій Гальчук / Hugo",
  title: "Незалежний міжнародний журналіст, автор Hugo Media Group, блогер і підприємець"
};

const HUGO_PACKAGES = [
  {
    name: "Стартер",
    price: "300 €",
    note: "1 знімальний день, 2–3 години зйомки, 30+ відео / коротких матеріалів і адаптація для TikTok, Instagram, Facebook і YouTube."
  },
  {
    name: "Стандарт",
    price: "1 000 €",
    note: "4 знімальні дні — 2 на тиждень, 30+ відео з кожного знімального дня, системний потік контенту і адаптація для TikTok, Instagram, Facebook і YouTube."
  },
  {
    name: "Максимум",
    price: "2 000 €",
    note: "8 знімальних днів за місяць, 30+ відео з кожного знімального дня, повноцінна медіа-присутність і адаптація для TikTok, Instagram, Facebook і YouTube."
  },
  {
    name: "Партнерство в тематичному напрямку",
    price: "індивідуально",
    note: "Для сервісів, експертів і компаній, які хочуть бути присутніми в конкретній темі Hugo Media Group."
  }
];

const HUGO_MEDIA_METRICS = [
  { value: "100 000+", label: "сукупна аудиторія проєктів" },
  { value: "6 000 000+", label: "сукупні місячні перегляди за даними основних платформ Hugo Media Group" },
  { value: "30+", label: "медійних інтеграцій" },
  { value: "100+", label: "контактів, звернень і ділових комунікацій" }
];

const HUGO_MEDIA_ASSETS = [
  { platform: "TikTok", value: "40 000+", note: "підписників · 7M переглядів відео за період зі скріншоту", screenshot: "tiktok.png" },
  { platform: "Facebook", value: "31 000+", note: "підписників · 5 591 597 переглядів за період зі скріншоту", screenshot: "facebook.png" },
  { platform: "Telegram Hugo Media", value: "3 300+", note: "підписників" },
  { platform: "Instagram", value: "1 100+", note: "підписників · нова сторінка після масового блокування попередніх акаунтів, канал активно розвивається · 449 346 переглядів за 60 днів", screenshot: "insta.jpeg" },
  { platform: "Telegram Легалізація", value: "150+", note: "підписників" },
  { platform: "YouTube", value: "Shorts", note: "доданий у медійну систему Hugo Media Group, контент адаптується під YouTube Shorts / відеоформат" },
  { platform: "Географія аудиторії", value: "Польща · Україна · Європа", note: "основні ринки" }
];

const HUGO_PLATFORM_VIEWS = [
  { platform: "TikTok", value: "7M", note: "переглядів відео за період зі скріншоту", screenshot: "tiktok.png" },
  { platform: "Facebook", value: "5 591 597", note: "переглядів за період зі скріншоту", screenshot: "facebook.png" },
  { platform: "Instagram", value: "449 346", note: "переглядів за 60 днів. Нова сторінка після масового блокування попередніх акаунтів.", screenshot: "insta.jpeg" }
];

const HUGO_CONTENT_EXAMPLES = [];

const I18N = {
  ua: {
    "nav.home": "На головну",
    "nav.about": "Про Hugo",
    "nav.platform": "Платформа",
    "cta.write": "Обговорити співпрацю",
    "cta.consult": "Обговорити співпрацю",
    "cta.consultSub": "Медійна присутність · інтеграції · партнерства",
    "about.title": "Hugo",
    "about.intro1": "Мене звати Сергій. У медіа я працюю під брендом Hugo.",
    "platform.p2": "Hugo Media Group — авторська медіаплатформа про людей, бізнес і життя за кордоном."
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About Hugo",
    "nav.platform": "Platform",
    "cta.write": "Discuss cooperation",
    "cta.consult": "Discuss cooperation",
    "cta.consultSub": "Media presence · integrations · partnerships",
    "about.title": "Hugo",
    "about.intro1": "My name is Serhii. In media, I work under the Hugo brand.",
    "platform.p2": "Hugo Media Group is an author-led media platform about people, business and life abroad."
  },
  pl: {
    "nav.home": "Strona główna",
    "nav.about": "O Hugo",
    "nav.platform": "Platforma",
    "cta.write": "Omówić współpracę",
    "cta.consult": "Omówić współpracę",
    "cta.consultSub": "Obecność medialna · integracje · partnerstwa",
    "about.title": "Hugo",
    "about.intro1": "Nazywam się Serhii. W mediach działam pod marką Hugo.",
    "platform.p2": "Hugo Media Group to autorska platforma medialna o ludziach, biznesie i życiu za granicą."
  }
};

const PAGE_TITLES = {
  ua: {
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

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2600);
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
  label.removeAttribute("data-i18n");
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

function applyPageCtas() {
  const page = document.body.dataset.page || "home";

  if (page === "home") {
    setExternalLink(document.querySelector(".action-list .action-card.action-primary"), HUGO_LINKS.telegram, "Обговорити співпрацю");
    const aboutLink = document.querySelector('.service-stack a[href="about.html"] strong');
    if (aboutLink) aboutLink.textContent = "Про Hugo";
    const platformLink = document.querySelector('.service-stack a[href="platform.html"] strong');
    if (platformLink) platformLink.textContent = "Про Hugo Media Group";
    return;
  }

  if (page === "about") return;
  if (page === "consultation") return;
  if (page === "legalization") return;

  if (page === "platform") {
    setExternalLink(document.querySelector(".platform-value-cta"), HUGO_LINKS.telegram, "Стати партнером Hugo Media Group");
    setExternalLink(document.querySelector(".editorial-page-actions .action-card.action-primary"), HUGO_LINKS.telegram, "Обговорити співпрацю");
    return;
  }

  if (page === "business") {
    const mainCta = document.querySelector(".platform-unites .platform-value-cta");
    setExternalLink(mainCta, HUGO_LINKS.telegram, "Обговорити співпрацю");
    const mediaKitCta = document.querySelector("[data-business-mediakit]");
    if (mediaKitCta) {
      setExternalLink(mediaKitCta, HUGO_LINKS.telegram, "Отримати комерційну пропозицію");
    }
    return;
  }

  const pageCtas = {
    media: "Запропонувати тему або інтеграцію",
    partners: "Запропонувати співпрацю",
    "media-kit": "Обговорити співпрацю"
  };
  const text = pageCtas[page];
  if (text) {
    setExternalLink(document.querySelector(".editorial-page-actions .action-card.action-primary"), HUGO_LINKS.telegram, text);
    setExternalLink(document.querySelector(".platform-unites .platform-value-cta"), HUGO_LINKS.telegram, text);
  }
}

function setLanguage(lang) {
  const dictionary = I18N[lang] || I18N.ua;
  document.documentElement.lang = lang === "ua" ? "uk" : lang;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
    button.setAttribute("aria-pressed", button.dataset.lang === lang ? "true" : "false");
  });
  const page = document.body.dataset.page;
  if (page && PAGE_TITLES[lang]?.[page]) document.title = PAGE_TITLES[lang][page];
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

applyEditableLinks();
initLanguageSwitcher();