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
    "about.kicker": "Про мене",
    "about.title": "Hugo",
    "about.lead": "Я — Hugo, засновник Hugo Media Group.",
    "about.fact1a": "4 роки",
    "about.fact1b": "в медіа",
    "about.fact2a": "стотисячна",
    "about.fact2b": "аудиторія",
    "about.fact3a": "мільйони",
    "about.fact3b": "переглядів",
    "about.fact4a": "органічне",
    "about.fact4b": "зростання",
    "about.fact5a": "міжнародний журналістський статус",
    "about.fact5b": "у процесі",
    "about.p1": "Останні 4 роки я працюю в медіа та системно будую власний персональний бренд серед українців у Польщі і Європі. За цей час мій контент органічно виріс у різних нішах, зібрав стотисячну аудиторію, мільйони переглядів і головне — довіру людей, які бачать у мені не просто автора, а джерело позиції, досвіду та практичної інформації.",
    "about.p2": "Мій шлях у медіа починався з контенту, але поступово переріс у ширшу платформу. Сьогодні Hugo Media Group об’єднує кілька напрямків: інформаційний контент, легалізаційні теми, бізнес-комунікацію, рекламу, партнерства, інтерв’ю та суспільно важливі питання для українців за кордоном.",
    "about.p3": "Моя сильна сторона — говорити про складні речі просто, чесно і без зайвої дистанції. Я пояснюю те, з чим українці реально стикаються в Польщі: документи, легалізацію, роботу, бізнес, гроші, адаптацію, можливості, ризики та правила системи.",
    "about.p4": "Hugo Media Group — це не просто сторінка в соцмережах. Це медійна екосистема, побудована навколо довіри, аудиторії, контенту, партнерств і реальних запитів людей.",
    "about.p5": "Зараз я масштабую свою медійну діяльність і виходжу на новий професійний рівень. Один із важливих етапів — отримання міжнародного журналістського статусу. Для мене це не формальність, а крок до сильнішого контенту, більшої відповідальності та нових можливостей для людей і проєктів навколо Hugo Media Group.",
    "about.p6": "Я створюю медіа не заради шуму. Я будую платформу, яка пояснює, об’єднує, впливає і допомагає людям краще розуміти правила життя за кордоном.",
    "platform.kicker": "Платформа",
    "platform.title": "Hugo Media Group",
    "platform.lead": "Hugo Media Group — це медійна платформа, побудована навколо персонального бренду Hugo.",
    "platform.h2": "Про платформу",
    "platform.p1": "Платформа об’єднує контент, аудиторію, довіру, партнерства, бізнес-комунікацію та практичні напрямки для українців у Польщі й Європі.",
    "platform.p2": "Основний текст цієї сторінки буде оновлено пізніше.",
    "media.kicker": "Напрямок платформи",
    "media.title": "Медіа-платформа",
    "media.lead": "Контент, історії, пояснення та комунікація для українців у Польщі й Європі.",
    "media.p1": "Hugo Media Group працює з темами, які допомагають людям краще розуміти життя, можливості та процеси за кордоном.",
    "legalization.title": "Легалізація в Польщі",
    "legalization.lead": "Документи, статус, карта побиту, права, адаптація та практичні питання життя в Польщі.",
    "legalization.p1": "Цей напрямок створений для українців, яким потрібне зрозуміле пояснення процесів і наступних кроків.",
    "business.title": "Реклама для бізнесу",
    "business.lead": "Просування бізнесу через контент, Instagram, TikTok, Telegram і медійні інтеграції.",
    "business.p1": "Hugo Media Group допомагає бізнесам говорити з релевантною аудиторією українців у Польщі.",
    "partners.title": "Співпраця",
    "partners.lead": "Реклама, інтеграції, інтерв’ю, колаборації та спільні проєкти.",
    "partners.p1": "Hugo Media Group відкрита до співпраці з бізнесами, експертами, організаціями та медійними ініціативами."
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About me",
    "nav.platform": "Platform",
    "cta.write": "Book a consultation",
    "cta.consult": "Book a consultation",
    "cta.consultSub": "Business · legalization · advertising · media growth",
    "about.kicker": "About me",
    "about.title": "Hugo",
    "about.lead": "I am Hugo, founder of Hugo Media Group.",
    "about.fact1a": "4 years",
    "about.fact1b": "in media",
    "about.fact2a": "hundreds of thousands",
    "about.fact2b": "in audience reach",
    "about.fact3a": "millions",
    "about.fact3b": "of views",
    "about.fact4a": "organic",
    "about.fact4b": "growth",
    "about.fact5a": "international journalist status",
    "about.fact5b": "in progress",
    "about.p1": "For the last 4 years I have worked in media and systematically built my personal brand among Ukrainians in Poland and Europe. During this time, my content has grown organically across different niches, gathered an audience of hundreds of thousands, generated millions of views, and most importantly built trust with people who see me not only as a creator, but as a source of perspective, experience and practical information.",
    "about.p2": "My path in media started with content, but gradually grew into a wider platform. Today Hugo Media Group brings together several directions: informational content, legalization topics, business communication, advertising, partnerships, interviews and socially important issues for Ukrainians abroad.",
    "about.p3": "My strength is explaining complex things simply, honestly and without unnecessary distance. I speak about what Ukrainians actually face in Poland: documents, legalization, work, business, money, adaptation, opportunities, risks and the rules of the system.",
    "about.p4": "Hugo Media Group is not just a social media page. It is a media ecosystem built around trust, audience, content, partnerships and real human needs.",
    "about.p5": "I am now scaling my media work and moving to a new professional level. One important step is obtaining international journalist status. For me, this is not a formality, but a step toward stronger content, greater responsibility and new opportunities for people and projects around Hugo Media Group.",
    "about.p6": "I do not create media for noise. I am building a platform that explains, connects, influences and helps people better understand the rules of life abroad.",
    "platform.kicker": "Platform",
    "platform.title": "Hugo Media Group",
    "platform.lead": "Hugo Media Group is a media platform built around Hugo’s personal brand.",
    "platform.h2": "About the platform",
    "platform.p1": "The platform brings together content, audience, trust, partnerships, business communication and practical directions for Ukrainians in Poland and Europe.",
    "platform.p2": "The main text of this page will be updated later.",
    "media.kicker": "Platform direction",
    "media.title": "Media platform",
    "media.lead": "Content, stories, explanations and communication for Ukrainians in Poland and Europe.",
    "media.p1": "Hugo Media Group works with topics that help people better understand life, opportunities and processes abroad.",
    "legalization.title": "Legalization in Poland",
    "legalization.lead": "Documents, status, residence card, rights, adaptation and practical questions of life in Poland.",
    "legalization.p1": "This direction is created for Ukrainians who need clear explanations of processes and next steps.",
    "business.title": "Business advertising",
    "business.lead": "Business promotion through content, Instagram, TikTok, Telegram and media integrations.",
    "business.p1": "Hugo Media Group helps businesses communicate with a relevant Ukrainian audience in Poland.",
    "partners.title": "Cooperation",
    "partners.lead": "Advertising, integrations, interviews, collaborations and joint projects.",
    "partners.p1": "Hugo Media Group is open to cooperation with businesses, experts, organizations and media initiatives."
  },
  pl: {
    "nav.home": "Strona główna",
    "nav.about": "O mnie",
    "nav.platform": "Platforma",
    "cta.write": "Umówić konsultację",
    "cta.consult": "Umówić konsultację",
    "cta.consultSub": "Biznes · legalizacja · reklama · rozwój medialny",
    "about.kicker": "O mnie",
    "about.title": "Hugo",
    "about.lead": "Jestem Hugo, założycielem Hugo Media Group.",
    "about.fact1a": "4 lata",
    "about.fact1b": "w mediach",
    "about.fact2a": "setki tysięcy",
    "about.fact2b": "odbiorców",
    "about.fact3a": "miliony",
    "about.fact3b": "wyświetleń",
    "about.fact4a": "organiczny",
    "about.fact4b": "wzrost",
    "about.fact5a": "międzynarodowy status dziennikarski",
    "about.fact5b": "w trakcie",
    "about.p1": "Przez ostatnie 4 lata pracuję w mediach i systematycznie buduję własną markę osobistą wśród Ukraińców w Polsce i Europie. W tym czasie moje treści organicznie rozwinęły się w różnych niszach, zebrały setki tysięcy odbiorców, miliony wyświetleń i przede wszystkim zaufanie ludzi, którzy widzą we mnie nie tylko autora, ale źródło opinii, doświadczenia i praktycznej informacji.",
    "about.p2": "Moja droga w mediach zaczęła się od contentu, ale stopniowo przerodziła się w szerszą platformę. Dziś Hugo Media Group łączy kilka kierunków: treści informacyjne, tematy legalizacyjne, komunikację biznesową, reklamę, partnerstwa, wywiady i ważne społecznie kwestie dla Ukraińców za granicą.",
    "about.p3": "Moją mocną stroną jest mówienie o skomplikowanych rzeczach prosto, uczciwie i bez zbędnego dystansu. Wyjaśniam to, z czym Ukraińcy realnie mierzą się w Polsce: dokumenty, legalizację, pracę, biznes, pieniądze, adaptację, możliwości, ryzyka i zasady systemu.",
    "about.p4": "Hugo Media Group to nie tylko strona w mediach społecznościowych. To ekosystem medialny zbudowany wokół zaufania, odbiorców, treści, partnerstw i realnych potrzeb ludzi.",
    "about.p5": "Obecnie skaluję swoją działalność medialną i przechodzę na nowy poziom zawodowy. Jednym z ważnych etapów jest uzyskanie międzynarodowego statusu dziennikarskiego. Dla mnie to nie formalność, lecz krok w stronę mocniejszych treści, większej odpowiedzialności i nowych możliwości dla ludzi oraz projektów wokół Hugo Media Group.",
    "about.p6": "Nie tworzę mediów dla hałasu. Buduję platformę, która wyjaśnia, łączy, wpływa i pomaga ludziom lepiej rozumieć zasady życia za granicą.",
    "platform.kicker": "Platforma",
    "platform.title": "Hugo Media Group",
    "platform.lead": "Hugo Media Group to platforma medialna zbudowana wokół marki osobistej Hugo.",
    "platform.h2": "O platformie",
    "platform.p1": "Platforma łączy treści, odbiorców, zaufanie, partnerstwa, komunikację biznesową i praktyczne kierunki dla Ukraińców w Polsce i Europie.",
    "platform.p2": "Główny tekst tej strony zostanie zaktualizowany później.",
    "media.kicker": "Kierunek platformy",
    "media.title": "Platforma medialna",
    "media.lead": "Treści, historie, wyjaśnienia i komunikacja dla Ukraińców w Polsce i Europie.",
    "media.p1": "Hugo Media Group pracuje z tematami, które pomagają ludziom lepiej rozumieć życie, możliwości i procesy za granicą.",
    "legalization.title": "Legalizacja w Polsce",
    "legalization.lead": "Dokumenty, status, karta pobytu, prawa, adaptacja i praktyczne pytania życia w Polsce.",
    "legalization.p1": "Ten kierunek powstał dla Ukraińców, którzy potrzebują prostego wyjaśnienia procesów i kolejnych kroków.",
    "business.title": "Reklama dla biznesu",
    "business.lead": "Promocja biznesu przez content, Instagram, TikTok, Telegram i integracje medialne.",
    "business.p1": "Hugo Media Group pomaga firmom komunikować się z odpowiednią ukraińską publicznością w Polsce.",
    "partners.title": "Współpraca",
    "partners.lead": "Reklama, integracje, wywiady, kolaboracje i wspólne projekty.",
    "partners.p1": "Hugo Media Group jest otwarte na współpracę z biznesami, ekspertami, organizacjami i inicjatywami medialnymi."
  }
};

const PAGE_TITLES = {
  ua: {
    about: "Про Hugo — Hugo Media Group",
    platform: "Hugo Media Group — медійна платформа для українців у Польщі",
    media: "Медіа-платформа — Hugo Media Group",
    legalization: "Легалізація в Польщі — Hugo Media Group",
    business: "Реклама для бізнесу — Hugo Media Group",
    partners: "Співпраця — Hugo Media Group"
  },
  en: {
    about: "About Hugo — Hugo Media Group",
    platform: "Hugo Media Group — media platform for Ukrainians in Poland",
    media: "Media platform — Hugo Media Group",
    legalization: "Legalization in Poland — Hugo Media Group",
    business: "Business advertising — Hugo Media Group",
    partners: "Cooperation — Hugo Media Group"
  },
  pl: {
    about: "O Hugo — Hugo Media Group",
    platform: "Hugo Media Group — platforma medialna dla Ukraińców w Polsce",
    media: "Platforma medialna — Hugo Media Group",
    legalization: "Legalizacja w Polsce — Hugo Media Group",
    business: "Reklama dla biznesu — Hugo Media Group",
    partners: "Współpraca — Hugo Media Group"
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

function applyEditableLinks() {
  document.querySelectorAll("[data-link]").forEach((element) => {
    const key = element.dataset.link;
    const url = HUGO_LINKS[key];

    if (url) {
      element.href = url;
      element.target = "_blank";
      element.rel = "noopener noreferrer";
      return;
    }

    element.addEventListener("click", (event) => {
      event.preventDefault();
      showToast("Посилання ще не додано. Відредагуйте HUGO_LINKS у script.js.");
    });
  });
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
