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

const STATIC_TEXT_TRANSLATIONS = {
  en: {
    "Про мене": "About me",
    "Сергій Гальчук / Hugo": "Serhii Halchuk / Hugo",
    "Незалежний міжнародний журналіст, автор Hugo Media Group, блогер і підприємець.": "Independent international journalist, author of Hugo Media Group, blogger and entrepreneur.",
    "Мене звати Сергій. У медіа я працюю під брендом Hugo.": "My name is Serhii. In media, I work under the Hugo brand.",
    "Я незалежний міжнародний журналіст, автор Hugo Media Group, блогер і підприємець.": "I am an independent international journalist, author of Hugo Media Group, blogger and entrepreneur.",
    "Створюю контент про життя українців за кордоном, бізнес, легалізацію, документи, гроші, роботу, переїзд і реальні історії людей.": "I create content about Ukrainians abroad, business, legalization, documents, money, work, relocation and real human stories.",
    "Мій формат поєднує журналістський підхід, живу блогерську подачу і підприємницький досвід. Я не просто рекламую бізнес — я показую людину за бізнесом, її шлях, цінність, продукт і контекст, у якому аудиторія може зрозуміти, чому цій людині можна довіряти.": "My format combines a journalistic approach, direct creator-style delivery and entrepreneurial experience. I do not simply advertise a business — I show the person behind it, their path, value, product and context so the audience understands why this person can be trusted.",
    "Мій шлях починався не з теорії про маркетинг. Я сам будував проєкти через контент, особисту присутність і довіру аудиторії.": "My path did not start with marketing theory. I built projects myself through content, personal presence and audience trust.",
    "Моя ціль — показувати людей за бізнесом і допомагати аудиторії знаходити тих, кому можна довіряти.": "My goal is to show the people behind businesses and help the audience find those they can trust.",
    "Чим можу бути корисний": "How I can be useful",
    "Медійна присутність для бізнесу": "Media presence for business",
    "Авторська подача, історії, інтеграції і довіра до людини за бізнесом.": "Author-led presentation, stories, integrations and trust in the person behind the business.",
    "Медіакіт і формати": "Media kit and formats",
    "Аудиторія, формати співпраці та медійні інтеграції Hugo Media Group.": "Audience, cooperation formats and Hugo Media Group media integrations.",
    "Легалізаційний напрямок": "Legalization direction",
    "Практичні теми про документи, адаптацію, ризики і роботу системи в Польщі.": "Practical topics about documents, adaptation, risks and how the system works in Poland.",
    "Показую людину за бізнесом": "I show the person behind the business",
    "Обговорити співпрацю": "Discuss cooperation",

    "Платформа": "Platform",
    "Hugo Media Group — не просто блог": "Hugo Media Group is not just a blog",
    "Авторська медіаплатформа, яка з’єднує аудиторію, підприємців, експертів, сервіси й реальні запити українців за кордоном.": "An author-led media platform connecting the audience, entrepreneurs, experts, services and real needs of Ukrainians abroad.",
    "Автор платформи — Сергій Гальчук / Hugo, незалежний міжнародний журналіст, медійник і підприємець.": "The platform author is Serhii Halchuk / Hugo, an independent international journalist, media creator and entrepreneur.",
    "Моя роль — бути медійним містком між аудиторією і тими, кому можна довіряти.": "My role is to be a media bridge between the audience and people they can trust.",
    "Стати партнером Hugo Media Group": "Become a Hugo Media Group partner",
    "Партнерства · інтеграції · сервіси · бізнес": "Partnerships · integrations · services · business",
    "Отримати медіакіт": "Get the media kit",
    "Формати співпраці та інтеграції": "Cooperation formats and integrations",
    "Для кого ця платформа": "Who this platform is for",
    "Масштаб": "Scale",
    "Медіа-активи Hugo Media Group": "Hugo Media Group media assets",
    "Основні канали і медіа-активи": "Main channels and media assets",
    "Що об’єднує платформа": "What the platform brings together",
    "Що дає Hugo Media Group": "What Hugo Media Group gives",

    "Напрямок платформи": "Platform direction",
    "Медіа-платформа": "Media platform",
    "Контент, позиція, пояснення, інтерв’ю та теми, які формують інформаційне поле українців у Польщі та Європі.": "Content, position, explanations, interviews and topics shaping the information field for Ukrainians in Poland and Europe.",
    "Запропонувати тему або інтеграцію": "Suggest a topic or integration",
    "Контент · інтерв’ю · медійні інтеграції · колаборації": "Content · interviews · media integrations · collaborations",
    "Теми": "Topics",
    "Про що ми говоримо": "What we talk about",
    "Формати": "Formats",
    "Як потрапити в медіа Hugo Media Group": "How to get into Hugo Media Group media",
    "Медіа має не просто шуміти. Медіа має пояснювати.": "Media should not just make noise. Media should explain.",

    "Тематична вертикаль": "Thematic vertical",
    "Легалізація як тематична вертикаль Hugo Media Group": "Legalization as a Hugo Media Group thematic vertical",
    "Легалізація — один із тематичних напрямків Hugo Media Group, а не головна сутність платформи.": "Legalization is one of Hugo Media Group’s thematic directions, not the core identity of the platform.",
    "Про що цей напрям": "What this direction is about",
    "Документи і статус": "Documents and status",
    "Адаптація і правила": "Adaptation and rules",
    "Ризики": "Risks",
    "Партнерські формати": "Partner formats",
    "Для сервісів": "For services",
    "Послуги": "Services",
    "Карта побиту": "Residence card",
    "Сталий побит і резидент": "Permanent residence and long-term resident",
    "Водійські права": "Driving license",
    "Громадянство": "Citizenship",
    "Формат і вартість": "Format and pricing",
    "Перший контакт — безкоштовно": "First contact is free",
    "Чесно про результат": "Honest about the result",
    "Звернутись по легалізацію": "Ask about legalization",

    "Для бізнесу": "For business",
    "Медійна присутність для підприємців і бізнесу": "Media presence for entrepreneurs and business",
    "Публічність, довіра, клієнтські дотики й особистий бренд власника через авторський формат Hugo Media Group.": "Public visibility, trust, client touchpoints and the owner’s personal brand through the author-led Hugo Media Group format.",
    "Сукупна аудиторія": "Total audience",
    "Перегляди": "Views",
    "Інтеграції": "Integrations",
    "Комунікації": "Communications",
    "Канали": "Channels",
    "Місячні перегляди платформ": "Monthly platform views",
    "Формати співпраці": "Cooperation formats",
    "Стартер — 300 €": "Starter — 300 €",
    "Стандарт — 1 000 €": "Standard — 1,000 €",
    "Максимум — 2 000 €": "Maximum — 2,000 €",
    "Найпопулярніший": "Most popular",
    "Обговорити формат": "Discuss the format",
    "Отримати комерційну пропозицію": "Get a commercial proposal",

    "Партнерства з Hugo Media Group": "Partnerships with Hugo Media Group",
    "Запропонувати співпрацю": "Suggest cooperation",
    "Кому підходить співпраця": "Who cooperation is for",
    "Підприємцям": "Entrepreneurs",
    "Експертам": "Experts",
    "Сервісам і постачальникам": "Services and suppliers",
    "Медіа і проєктам": "Media and projects",
    "Формати партнерства": "Partnership formats",
    "Медійні інтеграції": "Media integrations",
    "Спільні проєкти": "Joint projects",
    "Нетворкінг і контакти": "Networking and contacts",
    "Медійне посилення": "Media strengthening",
    "Що важливо для співпраці": "What matters in cooperation",
    "Реальна користь": "Real value",
    "Адекватність і відповідальність": "Adequacy and responsibility",
    "Довгостроковість": "Long-term thinking",
    "Спільна репутація": "Shared reputation",
    "Партнерство — це не логотип. Це довіра.": "Partnership is not a logo. It is trust.",

    "Медіакіт": "Media kit",
    "Медіакіт Hugo Media Group": "Hugo Media Group media kit",
    "Хто я": "Who I am",
    "Завантажити медіакіт (PDF)": "Download media kit (PDF)",
    "Довіра": "Trust",
    "Статус і документи": "Status and documents",
    "Кому підходить": "Who it is for",
    "Підходить": "Good fit",
    "Не підходить": "Not a fit",
    "Контакт": "Contact"
  },
  pl: {
    "Про мене": "O mnie",
    "Сергій Гальчук / Hugo": "Serhii Halchuk / Hugo",
    "Незалежний міжнародний журналіст, автор Hugo Media Group, блогер і підприємець.": "Niezależny dziennikarz międzynarodowy, autor Hugo Media Group, bloger i przedsiębiorca.",
    "Мене звати Сергій. У медіа я працюю під брендом Hugo.": "Nazywam się Serhii. W mediach działam pod marką Hugo.",
    "Я незалежний міжнародний журналіст, автор Hugo Media Group, блогер і підприємець.": "Jestem niezależnym dziennikarzem międzynarodowym, autorem Hugo Media Group, blogerem i przedsiębiorcą.",
    "Створюю контент про життя українців за кордоном, бізнес, легалізацію, документи, гроші, роботу, переїзд і реальні історії людей.": "Tworzę treści o życiu Ukraińców za granicą, biznesie, legalizacji, dokumentach, pieniądzach, pracy, przeprowadzce i realnych historiach ludzi.",
    "Мій формат поєднує журналістський підхід, живу блогерську подачу і підприємницький досвід. Я не просто рекламую бізнес — я показую людину за бізнесом, її шлях, цінність, продукт і контекст, у якому аудиторія може зрозуміти, чому цій людині можна довіряти.": "Mój format łączy podejście dziennikarskie, żywą blogerską narrację i doświadczenie przedsiębiorcy. Nie tylko reklamuję biznes — pokazuję człowieka stojącego za biznesem, jego drogę, wartość, produkt i kontekst, dzięki któremu odbiorcy rozumieją, dlaczego można mu zaufać.",
    "Мій шлях починався не з теорії про маркетинг. Я сам будував проєкти через контент, особисту присутність і довіру аудиторії.": "Moja droga nie zaczęła się od teorii marketingu. Sam budowałem projekty poprzez treści, osobistą obecność i zaufanie odbiorców.",
    "Моя ціль — показувати людей за бізнесом і допомагати аудиторії знаходити тих, кому можна довіряти.": "Moim celem jest pokazywać ludzi stojących za biznesem i pomagać odbiorcom znajdować tych, którym można zaufać.",
    "Чим можу бути корисний": "W czym mogę pomóc",
    "Медійна присутність для бізнесу": "Obecność medialna dla biznesu",
    "Авторська подача, історії, інтеграції і довіра до людини за бізнесом.": "Autorska prezentacja, historie, integracje i zaufanie do człowieka stojącego za biznesem.",
    "Медіакіт і формати": "Mediakit i formaty",
    "Аудиторія, формати співпраці та медійні інтеграції Hugo Media Group.": "Odbiorcy, formaty współpracy i integracje medialne Hugo Media Group.",
    "Легалізаційний напрямок": "Kierunek legalizacyjny",
    "Практичні теми про документи, адаптацію, ризики і роботу системи в Польщі.": "Praktyczne tematy o dokumentach, adaptacji, ryzykach i działaniu systemu w Polsce.",
    "Показую людину за бізнесом": "Pokazuję człowieka za biznesem",
    "Обговорити співпрацю": "Omówić współpracę",

    "Платформа": "Platforma",
    "Hugo Media Group — не просто блог": "Hugo Media Group to nie tylko blog",
    "Авторська медіаплатформа, яка з’єднує аудиторію, підприємців, експертів, сервіси й реальні запити українців за кордоном.": "Autorska platforma medialna, która łączy odbiorców, przedsiębiorców, ekspertów, usługi i realne potrzeby Ukraińców za granicą.",
    "Автор платформи — Сергій Гальчук / Hugo, незалежний міжнародний журналіст, медійник і підприємець.": "Autorem platformy jest Serhii Halchuk / Hugo, niezależny dziennikarz międzynarodowy, twórca medialny i przedsiębiorca.",
    "Моя роль — бути медійним містком між аудиторією і тими, кому можна довіряти.": "Moją rolą jest być medialnym mostem między odbiorcami a ludźmi, którym można zaufać.",
    "Стати партнером Hugo Media Group": "Zostać partnerem Hugo Media Group",
    "Партнерства · інтеграції · сервіси · бізнес": "Partnerstwa · integracje · usługi · biznes",
    "Отримати медіакіт": "Pobrać mediakit",
    "Формати співпраці та інтеграції": "Formaty współpracy i integracje",
    "Для кого ця платформа": "Dla kogo jest ta platforma",
    "Масштаб": "Skala",
    "Медіа-активи Hugo Media Group": "Aktywa medialne Hugo Media Group",
    "Основні канали і медіа-активи": "Główne kanały i aktywa medialne",
    "Що об’єднує платформа": "Co łączy platforma",
    "Що дає Hugo Media Group": "Co daje Hugo Media Group",

    "Напрямок платформи": "Kierunek platformy",
    "Медіа-платформа": "Platforma medialna",
    "Контент, позиція, пояснення, інтерв’ю та теми, які формують інформаційне поле українців у Польщі та Європі.": "Treści, stanowisko, wyjaśnienia, wywiady i tematy, które kształtują przestrzeń informacyjną Ukraińców w Polsce i Europie.",
    "Запропонувати тему або інтеграцію": "Zaproponować temat lub integrację",
    "Контент · інтерв’ю · медійні інтеграції · колаборації": "Treści · wywiady · integracje medialne · współprace",
    "Теми": "Tematy",
    "Про що ми говоримо": "O czym mówimy",
    "Формати": "Formaty",
    "Як потрапити в медіа Hugo Media Group": "Jak trafić do mediów Hugo Media Group",
    "Медіа має не просто шуміти. Медіа має пояснювати.": "Media nie mają tylko robić hałasu. Media mają wyjaśniać.",

    "Тематична вертикаль": "Pion tematyczny",
    "Легалізація як тематична вертикаль Hugo Media Group": "Legalizacja jako pion tematyczny Hugo Media Group",
    "Легалізація — один із тематичних напрямків Hugo Media Group, а не головна сутність платформи.": "Legalizacja to jeden z kierunków tematycznych Hugo Media Group, a nie główna istota platformy.",
    "Про що цей напрям": "O czym jest ten kierunek",
    "Документи і статус": "Dokumenty i status",
    "Адаптація і правила": "Adaptacja i zasady",
    "Ризики": "Ryzyka",
    "Партнерські формати": "Formaty partnerskie",
    "Для сервісів": "Dla usług",
    "Послуги": "Usługi",
    "Карта побиту": "Karta pobytu",
    "Сталий побит і резидент": "Stały pobyt i rezydent",
    "Водійські права": "Prawo jazdy",
    "Громадянство": "Obywatelstwo",
    "Формат і вартість": "Format i koszt",
    "Перший контакт — безкоштовно": "Pierwszy kontakt jest bezpłatny",
    "Чесно про результат": "Uczciwie o rezultacie",
    "Звернутись по легалізацію": "Zapytać o legalizację",

    "Для бізнесу": "Dla biznesu",
    "Медійна присутність для підприємців і бізнесу": "Obecność medialna dla przedsiębiorców i biznesu",
    "Публічність, довіра, клієнтські дотики й особистий бренд власника через авторський формат Hugo Media Group.": "Publiczność, zaufanie, punkty kontaktu z klientem i marka osobista właściciela poprzez autorski format Hugo Media Group.",
    "Сукупна аудиторія": "Łączna publiczność",
    "Перегляди": "Wyświetlenia",
    "Інтеграції": "Integracje",
    "Комунікації": "Komunikacje",
    "Канали": "Kanały",
    "Місячні перегляди платформ": "Miesięczne wyświetlenia platform",
    "Формати співпраці": "Formaty współpracy",
    "Стартер — 300 €": "Starter — 300 €",
    "Стандарт — 1 000 €": "Standard — 1 000 €",
    "Максимум — 2 000 €": "Maksimum — 2 000 €",
    "Найпопулярніший": "Najpopularniejszy",
    "Обговорити формат": "Omówić format",
    "Отримати комерційну пропозицію": "Otrzymać ofertę handlową",

    "Партнерства з Hugo Media Group": "Partnerstwa z Hugo Media Group",
    "Запропонувати співпрацю": "Zaproponować współpracę",
    "Кому підходить співпраця": "Dla kogo jest współpraca",
    "Підприємцям": "Przedsiębiorcom",
    "Експертам": "Ekspertom",
    "Сервісам і постачальникам": "Usługom i dostawcom",
    "Медіа і проєктам": "Mediom i projektom",
    "Формати партнерства": "Formaty partnerstwa",
    "Медійні інтеграції": "Integracje medialne",
    "Спільні проєкти": "Wspólne projekty",
    "Нетворкінг і контакти": "Networking i kontakty",
    "Медійне посилення": "Wzmocnienie medialne",
    "Що важливо для співпраці": "Co jest ważne we współpracy",
    "Реальна користь": "Realna wartość",
    "Адекватність і відповідальність": "Adekwatność i odpowiedzialność",
    "Довгостроковість": "Długoterminowość",
    "Спільна репутація": "Wspólna reputacja",
    "Партнерство — це не логотип. Це довіра.": "Partnerstwo to nie logo. To zaufanie.",

    "Медіакіт": "Mediakit",
    "Медіакіт Hugo Media Group": "Mediakit Hugo Media Group",
    "Хто я": "Kim jestem",
    "Завантажити медіакіт (PDF)": "Pobrać mediakit (PDF)",
    "Довіра": "Zaufanie",
    "Статус і документи": "Status i dokumenty",
    "Кому підходить": "Dla kogo",
    "Підходить": "Pasuje",
    "Не підходить": "Nie pasuje",
    "Контакт": "Kontakt"
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

function applyStaticPageTranslations(lang) {
  const translations = STATIC_TEXT_TRANSLATIONS[lang] || {};
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.parentElement) return NodeFilter.FILTER_REJECT;
      if (["SCRIPT", "STYLE", "NOSCRIPT"].includes(node.parentElement.tagName)) return NodeFilter.FILTER_REJECT;
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((node) => {
    if (!node._hugoSourceText) node._hugoSourceText = node.nodeValue.trim();
    const source = node._hugoSourceText;
    const leading = node.nodeValue.match(/^\s*/)?.[0] || "";
    const trailing = node.nodeValue.match(/\s*$/)?.[0] || "";
    node.nodeValue = leading + (lang === "ua" ? source : translations[source] || source) + trailing;
  });
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
      setExternalLink(mediaKitCta, HUGO_LINKS.telegram, currentLanguage === "ua" ? "Отримати комерційну пропозицію" : currentLanguage === "pl" ? "Otrzymać ofertę handlową" : "Get a commercial proposal");
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
  applyStaticPageTranslations(lang);
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