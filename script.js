const HUGO_LINKS = {
  consultation: "https://t.me/Hugo_media",
  telegram: "https://t.me/Hugo_media",
  instagram: "",
  facebook: "",
  tiktok: "",
  youtube: ""
};

const HUGO_PACKAGES = [
  { name: "Публічний старт", price: "від 1000 zł" },
  { name: "Історія підприємця", price: "від 2500 zł" },
  { name: "Медійна присутність", price: "від 5000 zł / місяць" },
  { name: "Партнерство в тематичному напрямку", price: "індивідуально" }
];

const HUGO_MEDIA_ASSETS = [
  { platform: "TikTok", value: "40 000+", note: "підписників" },
  { platform: "Facebook", value: "31 000+", note: "підписників" },
  { platform: "Telegram Hugo Media", value: "3 300+", note: "підписників" },
  { platform: "Telegram Легалізація", value: "150+", note: "підписників" },
  { platform: "Instagram", value: "1 100+", note: "новий акаунт, у розвитку" },
  { platform: "Географія аудиторії", value: "Польща · Україна · Європа", note: "основні ринки" },
  { platform: "Охоплення за 30 днів", value: "", note: "власник додасть" },
  { platform: "Найкраще відео", value: "", note: "власник додасть" }
];

const HUGO_CONTENT_EXAMPLES = [];

const HUGO_STAT_SCREENSHOTS = [
  { platform: "Instagram", image: "", label: "дані оновлюються" },
  { platform: "TikTok", image: "", label: "дані оновлюються" },
  { platform: "Facebook", image: "", label: "дані оновлюються" }
];

const I18N = {
  ua: {
    "nav.home": "На головну",
    "nav.about": "Про Hugo",
    "nav.platform": "Платформа",
    "cta.write": "Обговорити співпрацю",
    "cta.consult": "Обговорити співпрацю",
    "cta.consultSub": "Медійна присутність · інтеграції · партнерства",
    "about.title": "Hugo",
    "about.intro1": "Я Сергій, автор Hugo Media Group.",
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
    "about.intro1": "I am Serhii, author of Hugo Media Group.",
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
    "about.intro1": "Jestem Serhii, autorem Hugo Media Group.",
    "platform.p2": "Hugo Media Group to autorska platforma medialna o ludziach, biznesie i życiu za granicą."
  }
};

const PAGE_TITLES = {
  ua: {
    about: "Про Hugo — автор Hugo Media Group",
    consultation: "Консультація з Hugo — Hugo Media Group",
    platform: "Hugo Media Group — медійна платформа для українців у Польщі",
    media: "Медіа-платформа — Hugo Media Group",
    legalization: "Легалізація в Польщі — Hugo Media Group × Axis Legalisation",
    business: "Для бізнесу — медійна присутність через Hugo Media Group",
    partners: "Співпраця — Hugo Media Group",
    "media-kit": "Медіакіт Hugo Media Group — формати, аудиторія та пакети"
  },
  en: {
    about: "About Hugo — author of Hugo Media Group",
    consultation: "Consultation with Hugo — Hugo Media Group",
    platform: "Hugo Media Group — media platform for Ukrainians in Poland",
    media: "Media platform — Hugo Media Group",
    legalization: "Legalization in Poland — Hugo Media Group × Axis Legalisation",
    business: "For business — media presence through Hugo Media Group",
    partners: "Cooperation — Hugo Media Group",
    "media-kit": "Hugo Media Group media kit — formats, audience and packages"
  },
  pl: {
    about: "O Hugo — autor Hugo Media Group",
    consultation: "Konsultacja z Hugo — Hugo Media Group",
    platform: "Hugo Media Group — platforma medialna dla Ukraińców w Polsce",
    media: "Platforma medialna — Hugo Media Group",
    legalization: "Legalizacja w Polsce — Hugo Media Group × Axis Legalisation",
    business: "Dla biznesu — obecność medialna przez Hugo Media Group",
    partners: "Współpraca — Hugo Media Group",
    "media-kit": "Mediakit Hugo Media Group — formaty, publiczność i pakiety"
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
