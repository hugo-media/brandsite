const HUGO_LINKS = {
  consultation: "https://t.me/Hugo_media",
  telegram: "https://t.me/Hugo_media",
  instagram: "",
  facebook: "",
  tiktok: "",
  youtube: ""
};

const I18N = {
  ua: {
    "nav.home": "На головну",
    "nav.about": "Про мене",
    "nav.platform": "Платформа",
    "cta.write": "Домовитись про консультацію",
    "cta.consult": "Домовитись про консультацію",
    "cta.consultSub": "Бізнес · легалізація · реклама · медійний розвиток",
    "about.title": "Hugo",
    "about.intro1": "Я — Hugo, засновник Hugo Media Group.",
    "platform.p2": "100 000+ людей в аудиторії, 6 000 000+ переглядів щомісяця, 1 000+ контактів, 100+ рекламних інтеграцій, консультацій, партнерств і перевірених робочих рішень."
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About Hugo",
    "nav.platform": "Platform",
    "cta.write": "Book a consultation",
    "cta.consult": "Book a consultation",
    "cta.consultSub": "Business · legalization · advertising · media growth",
    "about.title": "Hugo",
    "about.intro1": "I am Hugo, founder of Hugo Media Group.",
    "platform.p2": "100,000+ people in the audience, 6,000,000+ monthly views, 1,000+ contacts, 100+ advertising integrations, consultations, partnerships and proven working solutions."
  },
  pl: {
    "nav.home": "Strona główna",
    "nav.about": "O Hugo",
    "nav.platform": "Platforma",
    "cta.write": "Umówić konsultację",
    "cta.consult": "Umówić konsultację",
    "cta.consultSub": "Biznes · legalizacja · reklama · rozwój medialny",
    "about.title": "Hugo",
    "about.intro1": "Jestem Hugo, założycielem Hugo Media Group.",
    "platform.p2": "100 000+ osób w publiczności, 6 000 000+ wyświetleń miesięcznie, 1 000+ kontaktów, 100+ integracji reklamowych, konsultacji, partnerstw i sprawdzonych rozwiązań roboczych."
  }
};

const PAGE_TITLES = {
  ua: {
    about: "Про Hugo — журналіст, підприємець, засновник Hugo Media Group",
    consultation: "Консультація з Hugo — Hugo Media Group",
    platform: "Hugo Media Group — медійна платформа для українців у Польщі",
    media: "Медіа-платформа — Hugo Media Group",
    legalization: "Легалізація в Польщі — Hugo Media Group × Axis Legalisation",
    business: "Реклама для бізнесу — Hugo Media Group",
    partners: "Співпраця — Hugo Media Group",
    "media-kit": "Медіакіт Hugo Media Group — реклама, аудиторія та інтеграції"
  },
  en: {
    about: "About Hugo — journalist, entrepreneur, founder of Hugo Media Group",
    consultation: "Consultation with Hugo — Hugo Media Group",
    platform: "Hugo Media Group — media platform for Ukrainians in Poland",
    media: "Media platform — Hugo Media Group",
    legalization: "Legalization in Poland — Hugo Media Group × Axis Legalisation",
    business: "Business advertising — Hugo Media Group",
    partners: "Cooperation — Hugo Media Group",
    "media-kit": "Hugo Media Group media kit — advertising, audience and integrations"
  },
  pl: {
    about: "O Hugo — dziennikarz, przedsiębiorca, założyciel Hugo Media Group",
    consultation: "Konsultacja z Hugo — Hugo Media Group",
    platform: "Hugo Media Group — platforma medialna dla Ukraińców w Polsce",
    media: "Platforma medialna — Hugo Media Group",
    legalization: "Legalizacja w Polsce — Hugo Media Group × Axis Legalisation",
    business: "Reklama dla biznesu — Hugo Media Group",
    partners: "Współpraca — Hugo Media Group",
    "media-kit": "Mediakit Hugo Media Group — reklama, publiczność i integracje"
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
    setInternalLink(document.querySelector(".action-list .action-card.action-primary"), "consultation.html", "Домовитись про консультацію");
    const aboutLink = document.querySelector('.action-list a[href="about.html"] strong');
    if (aboutLink) aboutLink.textContent = "Про Hugo";
    const platformLink = document.querySelector('.action-list a[href="platform.html"] strong');
    if (platformLink) platformLink.textContent = "Про Hugo Media Group";
    return;
  }

  if (page === "about") return;
  if (page === "consultation") return;
  if (page === "legalization") return;

  if (page === "platform") {
    setExternalLink(document.querySelector(".platform-value-cta"), HUGO_LINKS.consultation, "Стати партнером Hugo Media Group");
    setExternalLink(document.querySelector(".editorial-page-actions .action-card.action-primary"), HUGO_LINKS.consultation, "Домовитись про консультацію");
    return;
  }

  if (page === "business") {
    const mainCta = document.querySelector(".platform-unites .platform-value-cta");
    setExternalLink(mainCta, HUGO_LINKS.consultation, "Обговорити рекламу");
    const mediaKitCta = document.querySelector("[data-business-mediakit]");
    if (mediaKitCta) {
      setInternalLink(mediaKitCta, "media-kit.html", "Отримати медіакіт");
    } else if (mainCta) {
      const clone = mainCta.cloneNode(true);
      clone.dataset.businessMediakit = "true";
      setInternalLink(clone, "media-kit.html", "Отримати медіакіт");
      mainCta.insertAdjacentElement("afterend", clone);
    }
    return;
  }

  const pageCtas = {
    media: "Запропонувати тему або інтеграцію",
    partners: "Запропонувати співпрацю",
    "media-kit": "Отримати умови реклами"
  };
  const text = pageCtas[page];
  if (text) {
    setExternalLink(document.querySelector(".editorial-page-actions .action-card.action-primary"), HUGO_LINKS.consultation, text);
    setExternalLink(document.querySelector(".platform-unites .platform-value-cta"), HUGO_LINKS.consultation, text);
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
