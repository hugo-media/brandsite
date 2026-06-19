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
  }
];

const PAGE_TITLES = {
  ua: {
    home: "Hugo Media Group — медійна присутність для бізнесу",
    about: "Сергій Гальчук / Hugo — незалежний міжнародний журналіст і автор Hugo Media Group",
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
    platform: "Hugo Media Group — author-led media platform for Ukrainians abroad",
    media: "Media platform — Hugo Media Group",
    legalization: "Legalization in Poland — Hugo Media Group thematic vertical",
    business: "Media presence for entrepreneurs and business — Hugo Media Group",
    partners: "Partnerships with Hugo Media Group — media integrations and audience access",
    "media-kit": "Hugo Media Group media kit — audience, cooperation formats and integrations"
  },
  pl: {
    home: "Hugo Media Group — obecność medialna dla biznesu",
    about: "Serhii Halchuk / Hugo — niezależny dziennikarz międzynarodowy i autor Hugo Media Group",
    platform: "Hugo Media Group — autorska platforma medialna dla Ukraińców za granicą",
    media: "Platforma medialna — Hugo Media Group",
    legalization: "Legalizacja w Polsce — pion tematyczny Hugo Media Group",
    business: "Obecność medialna dla przedsiębiorców i biznesu — Hugo Media Group",
    partners: "Partnerstwa z Hugo Media Group — integracje medialne i dostęp do odbiorców",
    "media-kit": "Mediakit Hugo Media Group — odbiorcy, formaty współpracy i integracje"
  }
};

const I18N = {
  ua: {
    "nav.home": "На головну",
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

const TEXT_TRANSLATIONS = {
  en: {
    "На головну": "Home",
    "Про мене": "About me",
    "Фокус": "Focus",
    "Позиція": "Position",
    "Довіра": "Trust",
    "Контакт": "Contact",
    "Масштаб": "Scale",
    "Канали": "Channels",
    "Перегляди": "Views",
    "Формати": "Formats",
    "Теми": "Topics",
    "Послуги": "Services",
    "Сергій Гальчук / Hugo": "Serhii Halchuk / Hugo",
    "Незалежний міжнародний журналіст, автор Hugo Media Group, блогер і підприємець.": "Independent international journalist, author of Hugo Media Group, blogger and entrepreneur.",
    "Мене звати Сергій. У медіа я працюю під брендом Hugo.": "My name is Serhii. In media, I work under the Hugo brand.",
    "Я незалежний міжнародний журналіст, автор Hugo Media Group, блогер і підприємець.": "I am an independent international journalist, author of Hugo Media Group, blogger and entrepreneur.",
    "Створюю контент про життя українців за кордоном, бізнес, легалізацію, документи, гроші, роботу, переїзд і реальні історії людей.": "I create content about Ukrainians abroad, business, legalization, documents, money, work, relocation and real human stories.",
    "Мій формат поєднує журналістський підхід, живу блогерську подачу і підприємницький досвід. Я не просто рекламую бізнес — я показую людину за бізнесом, її шлях, цінність, продукт і контекст, у якому аудиторія може зрозуміти, чому цій людині можна довіряти.": "My format combines a journalistic approach, direct creator-style delivery and entrepreneurial experience. I do not simply advertise a business — I show the person behind it, their path, value, product and context so the audience understands why this person can be trusted.",
    "Мій шлях починався не з теорії про маркетинг. Я сам будував проєкти через контент, особисту присутність і довіру аудиторії.": "My path did not start with marketing theory. I built projects myself through content, personal presence and audience trust.",
    "Через Hugo Media я працював із товарами, технікою, Telegram-каналами, відеооглядами, клієнтами і продажами. У напрямку легалізації я побачив, що люди приходять не просто на послугу — вони приходять до людини, якій довіряють.": "Through Hugo Media, I worked with products, electronics, Telegram channels, video reviews, clients and sales. In the legalization direction, I saw that people do not simply come for a service — they come to a person they trust.",
    "Саме тому я створюю Hugo Media Group як медіаплатформу, де бізнес, експерти й підприємці можуть ставати видимими через живі історії, авторську подачу, журналістський підхід і реальну присутність.": "That is why I am building Hugo Media Group as a media platform where businesses, experts and entrepreneurs can become visible through real stories, author-led presentation, a journalistic approach and real presence.",
    "Моя ціль — показувати людей за бізнесом і допомагати аудиторії знаходити тих, кому можна довіряти.": "My goal is to show the people behind businesses and help the audience find those they can trust.",
    "Чим можу бути корисний": "How I can be useful",
    "Медійна присутність для бізнесу": "Media presence for business",
    "Авторська подача, історії, інтеграції і довіра до людини за бізнесом.": "Author-led presentation, stories, integrations and trust in the person behind the business.",
    "Медіакіт і формати": "Media kit and formats",
    "Аудиторія, формати співпраці та медійні інтеграції Hugo Media Group.": "Audience, cooperation formats and Hugo Media Group media integrations.",
    "Легалізаційний напрямок": "Legalization direction",
    "Практичні теми про документи, адаптацію, ризики і роботу системи в Польщі.": "Practical topics about documents, adaptation, risks and how the system works in Poland.",
    "Показую людину за бізнесом": "I show the person behind the business",
    "Hugo Media Group — це точка входу в аудиторію, довіру, контакти, партнерства і можливості. Тут медіа перетворюється на реальні зв’язки, а зв’язки — на розвиток.": "Hugo Media Group is an entry point into audience, trust, contacts, partnerships and opportunities. Here, media turns into real connections, and connections turn into growth.",
    "Обговорити співпрацю": "Discuss cooperation",
    "Платформа": "Platform",
    "Hugo Media Group — не просто блог": "Hugo Media Group is not just a blog",
    "Авторська медіаплатформа, яка з’єднує аудиторію, підприємців, експертів, сервіси й реальні запити українців за кордоном.": "An author-led media platform connecting the audience, entrepreneurs, experts, services and real needs of Ukrainians abroad.",
    "Hugo Media Group працює навколо тем, які справді впливають на життя людей: легалізація, робота, бізнес, документи, гроші, житло, переїзд, адаптація, сервіси, особисті історії та підприємництво.": "Hugo Media Group works around topics that truly affect people’s lives: legalization, work, business, documents, money, housing, relocation, adaptation, services, personal stories and entrepreneurship.",
    "Автор платформи — Сергій Гальчук / Hugo, незалежний міжнародний журналіст, медійник і підприємець.": "The platform author is Serhii Halchuk / Hugo, an independent international journalist, media creator and entrepreneur.",
    "Моя роль — бути медійним містком між аудиторією і тими, кому можна довіряти.": "My role is to be a media bridge between the audience and people they can trust.",
    "Стати партнером Hugo Media Group": "Become a Hugo Media Group partner",
    "Партнерства · інтеграції · сервіси · бізнес": "Partnerships · integrations · services · business",
    "Отримати медіакіт": "Get the media kit",
    "Формати співпраці та інтеграції": "Cooperation formats and integrations",
    "Аудиторії": "Audiences",
    "Для кого ця платформа": "Who this platform is for",
    "Для українців у Польщі та Європі": "For Ukrainians in Poland and Europe",
    "Інформація, пояснення, контакти, легалізаційні напрямки, корисні сервіси і практичні рішення для життя за кордоном.": "Information, explanations, contacts, legalization directions, useful services and practical solutions for life abroad.",
    "Для підприємців": "For entrepreneurs",
    "Вихід до української аудиторії через медіа, довіру, медійні інтеграції, особистий бренд і правильну подачу бізнесу.": "Access to the Ukrainian audience through media, trust, media integrations, personal branding and proper business presentation.",
    "Для партнерів": "For partners",
    "Колаборації, спільні проєкти, експерти, постачальники, сервіси, юристи, бізнеси і люди, з якими можна створювати цінність.": "Collaborations, joint projects, experts, suppliers, services, lawyers, businesses and people with whom value can be created.",
    "Для експертів і сервісів": "For experts and services",
    "Можливість бути видимими для аудиторії, яка шукає не просто рекламу, а перевірені рішення і людей, яким можна довіряти.": "A chance to be visible to an audience looking not for simple advertising, but for verified solutions and people they can trust.",
    "Медіа-активи Hugo Media Group": "Hugo Media Group media assets",
    "сукупна аудиторія": "total audience",
    "Аудиторія проєктів і каналів Hugo Media Group.": "Audience of Hugo Media Group projects and channels.",
    "переглядів на місяць": "monthly views",
    "Сукупні місячні перегляди за даними основних платформ Hugo Media Group.": "Total monthly views according to the main Hugo Media Group platforms.",
    "медійних інтеграцій": "media integrations",
    "Інтеграції, рекомендації, партнерські формати і бізнес-комунікації.": "Integrations, recommendations, partner formats and business communications.",
    "контактів і звернень": "contacts and inquiries",
    "Контакти, звернення і ділові комунікації навколо платформи.": "Contacts, inquiries and business communications around the platform.",
    "Основні канали і медіа-активи": "Main channels and media assets",
    "підписників": "followers",
    "Нова сторінка після масового блокування попередніх акаунтів, канал активно розвивається.": "A new page after mass blocking of previous accounts; the channel is actively developing.",
    "Доданий у медійну систему Hugo Media Group. Контент адаптується під YouTube Shorts / відеоформат.": "Added to the Hugo Media Group media system. Content is being adapted for YouTube Shorts / video format.",
    "Екосистема": "Ecosystem",
    "Що об’єднує платформа": "What the platform brings together",
    "Медіа": "Media",
    "Контент, відео, новини, пояснення, позиція, інтерв’ю і теми, які реально цікавлять українців за кордоном.": "Content, videos, news, explanations, position, interviews and topics that genuinely matter to Ukrainians abroad.",
    "Медійні інтеграції": "Media integrations",
    "Просування підприємців, особистих брендів, послуг і бізнесів через Instagram, Facebook, TikTok, YouTube, Telegram та авторські матеріали.": "Promotion of entrepreneurs, personal brands, services and businesses through Instagram, Facebook, TikTok, YouTube, Telegram and author-led materials.",
    "Тематичні вертикалі": "Thematic verticals",
    "Легалізація, бізнес, партнерські напрями, перевірені сервіси і формати, які закривають практичні запити аудиторії.": "Legalization, business, partnership directions, verified services and formats that answer practical audience needs.",
    "Партнерства": "Partnerships",
    "Нетворкінг, постачальники, сервіси, бізнес-зв’язки, експерти, колаборації і можливості для спільного росту.": "Networking, suppliers, services, business connections, experts, collaborations and opportunities for shared growth.",
    "Практична користь": "Practical value",
    "Що дає Hugo Media Group": "What Hugo Media Group gives",
    "Hugo Media Group — це не просто медіа. Це екосистема, яка допомагає людям, підприємцям і партнерам швидше знаходити правильні рішення, контакти та можливості.": "Hugo Media Group is not just media. It is an ecosystem that helps people, entrepreneurs and partners find the right solutions, contacts and opportunities faster.",
    "Для бізнесу платформа дає вихід до української аудиторії через довіру, контент, медійні інтеграції, рекомендації, партнерства та правильну медійну подачу.": "For business, the platform gives access to the Ukrainian audience through trust, content, media integrations, recommendations, partnerships and proper media presentation.",
    "Напрямок платформи": "Platform direction",
    "Медіа-платформа": "Media platform",
    "Контент, позиція, пояснення, інтерв’ю та теми, які формують інформаційне поле українців у Польщі та Європі.": "Content, position, explanations, interviews and topics shaping the information field for Ukrainians in Poland and Europe.",
    "Медіа-напрямок Hugo Media Group — це не просто публікації в соцмережах. Це спосіб пояснювати складні речі, піднімати важливі теми, показувати реальність українців за кордоном і з’єднувати аудиторію з людьми, сервісами та рішеннями, які їй потрібні.": "The media direction of Hugo Media Group is not just social media posts. It is a way to explain complex things, raise important topics, show the reality of Ukrainians abroad and connect the audience with the people, services and solutions they need.",
    "Запропонувати тему або інтеграцію": "Suggest a topic or integration",
    "Контент · інтерв’ю · медійні інтеграції · колаборації": "Content · interviews · media integrations · collaborations",
    "Про що ми говоримо": "What we talk about",
    "Українці за кордоном": "Ukrainians abroad",
    "Життя, адаптація, конфлікти, робота, гроші, документи, правила системи і теми, які реально впливають на людей.": "Life, adaptation, conflicts, work, money, documents, system rules and topics that truly affect people.",
    "Польща і Європа": "Poland and Europe",
    "Новини, зміни правил, суспільні настрої, міграція, бізнес, можливості, ризики і контекст для українців.": "News, rule changes, social moods, migration, business, opportunities, risks and context for Ukrainians.",
    "Легалізація і документи": "Legalization and documents",
    "Пояснення складних юридичних і документальних тем нормальною мовою, без паніки і канцеляриту.": "Explaining complex legal and document topics in normal language, without panic or bureaucracy.",
    "Бізнес і підприємці": "Business and entrepreneurs",
    "Історії людей, бізнеси, послуги, сервіси, партнерства, кейси, помилки, досвід і можливості для росту.": "Human stories, businesses, services, partnerships, cases, mistakes, experience and growth opportunities.",
    "Короткі відео з сильним хуком, позицією, поясненням або медійною інтеграцією.": "Short videos with a strong hook, position, explanation or media integration.",
    "Пости, сторіс, репости, рекомендації, коментарі, медійна подача і робота з довірою.": "Posts, stories, reposts, recommendations, comments, media presentation and trust building.",
    "Пояснення, новини, корисні контакти, партнерські публікації, анонси, думки і прямий контакт з аудиторією.": "Explanations, news, useful contacts, partner posts, announcements, opinions and direct contact with the audience.",
    "Інтерв’ю / колаборації": "Interviews / collaborations",
    "Розмови з підприємцями, експертами, юристами, сервісами, партнерами і людьми, які мають що сказати аудиторії.": "Conversations with entrepreneurs, experts, lawyers, services, partners and people who have something to say to the audience.",
    "Участь": "Participation",
    "Як потрапити в медіа Hugo Media Group": "How to get into Hugo Media Group media",
    "Запропонувати тему": "Suggest a topic",
    "Якщо у вас є важлива тема для українців у Польщі або Європі — її можна запропонувати для контенту.": "If you have an important topic for Ukrainians in Poland or Europe, you can suggest it for content.",
    "Запропонувати експерта": "Suggest an expert",
    "Юристи, підприємці, спеціалісти, сервіси і люди з реальним досвідом можуть стати частиною медійного матеріалу.": "Lawyers, entrepreneurs, specialists, services and people with real experience can become part of a media story.",
    "Замовити інтеграцію": "Order an integration",
    "Бізнес може вийти до аудиторії через медійну інтеграцію, рекомендацію, відео, пост або серію форматів.": "A business can reach the audience through a media integration, recommendation, video, post or a series of formats.",
    "Зробити колаборацію": "Create a collaboration",
    "Спільні проєкти, інтерв’ю, партнерства і формати, які дають цінність аудиторії та посилюють обидві сторони.": "Joint projects, interviews, partnerships and formats that provide value to the audience and strengthen both sides.",
    "Медіа має не просто шуміти. Медіа має пояснювати.": "Media should not just make noise. Media should explain.",
    "Hugo Media Group створює контент, який не тільки збирає перегляди, а формує довіру, позицію, розуміння і зв’язки між людьми, бізнесами та можливостями.": "Hugo Media Group creates content that not only gathers views, but builds trust, position, understanding and connections between people, businesses and opportunities.",
    "Тематична вертикаль": "Thematic vertical",
    "Легалізація як тематична вертикаль Hugo Media Group": "Legalization as a Hugo Media Group thematic vertical",
    "Легалізація — один із тематичних напрямків Hugo Media Group, а не головна сутність платформи.": "Legalization is one of Hugo Media Group’s thematic directions, not the core identity of the platform.",
    "Я висвітлюю теми, які реально хвилюють українців у Польщі та Європі: карта побиту, PESEL, права, ZUS, документи, податки, статус UKR, зміни в правилах, ризики, штрафи та практичні питання життя за кордоном.": "I cover topics that truly concern Ukrainians in Poland and Europe: residence cards, PESEL, rights, ZUS, documents, taxes, UKR status, rule changes, risks, fines and practical questions of life abroad.",
    "Цей напрямок об’єднує аудиторію, яка шукає зрозумілу інформацію, і експертів, які можуть допомогти людям із конкретними запитами.": "This direction connects an audience looking for clear information with experts who can help people with specific requests.",
    "Сервісний напрям реалізується через Axis Legalisation разом із юристом.": "The service direction is implemented through Axis Legalisation together with a lawyer.",
    "Про що цей напрям": "What this direction is about",
    "Документи і статус": "Documents and status",
    "Карта побиту, PESEL, ZUS, UKR, статус перебування, переклади, втрачені документи і базові офіційні процеси.": "Residence card, PESEL, ZUS, UKR, stay status, translations, lost documents and basic official processes.",
    "Адаптація і правила": "Adaptation and rules",
    "Пояснення того, як працює система, які кроки потрібні людині і де найчастіше виникають помилки.": "Explaining how the system works, what steps a person needs and where mistakes most often occur.",
    "Ризики": "Risks",
    "Зміни в правилах, строки, штрафи, рішення державних органів і те, що не можна гарантувати.": "Rule changes, deadlines, fines, decisions of state authorities and what cannot be guaranteed.",
    "Партнерські формати": "Partner formats",
    "Співпраця з юридичними, бухгалтерськими, страховими і легалізаційними сервісами.": "Cooperation with legal, accounting, insurance and legalization services.",
    "Для сервісів": "For services",
    "Експертні інтеграції": "Expert integrations",
    "Коментарі експертів у корисних матеріалах і тематичному контенті.": "Expert comments in useful materials and thematic content.",
    "Telegram-публікації": "Telegram posts",
    "Пояснювальні пости, корисні оголошення і нативні рекомендації.": "Explanatory posts, useful announcements and native recommendations.",
    "Передача заявок": "Lead transfer",
    "Направлення людей із конкретним запитом до перевіреного сервісу або експерта.": "Sending people with a specific request to a verified service or expert.",
    "Довгострокове партнерство": "Long-term partnership",
    "Регулярна присутність у напрямку, спільні матеріали і робота з аудиторією.": "Regular presence in the direction, joint materials and work with the audience.",
    "Карта побиту": "Residence card",
    "Оформлення тимчасової карти побиту.": "Temporary residence card processing.",
    "Сталий побит і резидент": "Permanent residence and long-term resident",
    "Сталий побит та довгострокове резидентство ЄС.": "Permanent residence and EU long-term residence.",
    "Карта ЦУКР": "CUKR card",
    "Оформлення та питання карти ЦУКР.": "Processing and questions related to the CUKR card.",
    "Водійські права": "Driving license",
    "Заміна та виготовлення водійських прав.": "Exchange and issuance of driving licenses.",
    "Заміна українських документів": "Replacement of Ukrainian documents",
    "Заміна українських документів та офіційні переклади.": "Replacement of Ukrainian documents and official translations.",
    "Втрачені документи": "Lost documents",
    "Відновлення втрачених документів.": "Recovery of lost documents.",
    "Громадянство": "Citizenship",
    "Супровід у питаннях громадянства.": "Support with citizenship matters.",
    "Формат і вартість": "Format and pricing",
    "Перший контакт — безкоштовно": "First contact is free",
    "Коротко розберемо твою ситуацію і чесно скажемо, чи можемо допомогти.": "We will briefly review your situation and honestly say whether we can help.",
    "Консультація та супровід": "Consultation and support",
    "Вартість залежить від справи — за запитом після короткого розбору ситуації.": "The cost depends on the case — upon request after a brief review of the situation.",
    "Відповідальність": "Responsibility",
    "Чесно про результат": "Honest about the result",
    "Гарантуємо коректну підготовку документів і супровід на кожному етапі.": "We guarantee correct document preparation and support at every stage.",
    "Не обіцяємо того, що залежить не від нас: рішень державних органів і строків розгляду.": "We do not promise what does not depend on us: decisions of state authorities and processing times.",
    "Звернутись по легалізацію": "Ask about legalization",
    "Напиши в Telegram або зателефонуй. Коротко опиши ситуацію з документами, статусом або легалізацією — і ми підкажемо наступний крок.": "Write on Telegram or call. Briefly describe your situation with documents, status or legalization, and we will suggest the next step.",
    "Для бізнесу": "For business",
    "Медійна присутність для підприємців і бізнесу": "Media presence for entrepreneurs and business",
    "Публічність, довіра, клієнтські дотики й особистий бренд власника через авторський формат Hugo Media Group.": "Public visibility, trust, client touchpoints and the owner’s personal brand through the author-led Hugo Media Group format.",
    "Сьогодні бізнесу недостатньо просто мати послугу, сайт або сторінку в Instagram.": "Today, it is not enough for a business to simply have a service, website or Instagram page.",
    "Люди хочуть бачити, хто стоїть за бізнесом, кому вони платять гроші і чому саме цій людині можна довіряти.": "People want to see who stands behind the business, who they pay money to and why this person can be trusted.",
    "Я допомагаю підприємцям виходити в публічність і ставати обличчям власної справи. Через авторські відео, розмови, історії, репортажі та інтеграції я показую людину за бізнесом: її шлях, досвід, продукт, цінності, характер і реальну присутність у своїй справі.": "I help entrepreneurs become public and become the face of their own business. Through author-led videos, conversations, stories, reports and integrations, I show the person behind the business: their path, experience, product, values, character and real presence in their work.",
    "Це не SMM, не UGC і не класична реклама. Це авторська медійна подача, яка допомагає бізнесу отримати видимість, довіру, перші клієнтські дотики і основу для розвитку особистого бренду підприємця.": "This is not SMM, UGC or classic advertising. It is author-led media presentation that helps a business gain visibility, trust, first client touchpoints and a foundation for developing the entrepreneur’s personal brand.",
    "Співпраця з Hugo Media Group — це авторська медійна подача від Сергія Гальчука / Hugo, незалежного міжнародного журналіста, який показує бізнес через людину, історію, репутацію і довіру.": "Cooperation with Hugo Media Group is author-led media presentation by Serhii Halchuk / Hugo, an independent international journalist who shows business through the person, story, reputation and trust.",
    "Сукупна аудиторія": "Total audience",
    "аудиторія проєктів": "project audience",
    "Перегляди": "Views",
    "Інтеграції": "Integrations",
    "Комунікації": "Communications",
    "контактів, звернень і ділових комунікацій": "contacts, inquiries and business communications",
    "Telegram Hugo Media": "Telegram Hugo Media",
    "Telegram Легалізація": "Telegram Legalization",
    "Географія аудиторії": "Audience geography",
    "Польща, Україна, Європа": "Poland, Ukraine, Europe",
    "Місячні перегляди платформ": "Monthly platform views",
    "Статистика нижче підтверджена скріншотами з платформ. YouTube доданий у медійну систему Hugo Media Group і входить у формати публікації контенту.": "The statistics below are confirmed by platform screenshots. YouTube has been added to the Hugo Media Group media system and is part of the content publishing formats.",
    "переглядів відео за період зі скріншоту": "video views for the screenshot period",
    "переглядів за період зі скріншоту": "views for the screenshot period",
    "переглядів за 60 днів. Нова сторінка після масового блокування попередніх акаунтів.": "views over 60 days. A new page after mass blocking of previous accounts.",
    "Формати співпраці": "Cooperation formats",
    "Три формати для бізнесу, який хоче протестувати медійну присутність, отримати стабільний контент або запустити повноцінну медійну воронку через Hugo Media Group.": "Three formats for a business that wants to test media presence, get stable content or launch a full media funnel through Hugo Media Group.",
    "Стартер — 300 €": "Starter — 300 €",
    "1 знімальний день": "1 shooting day",
    "2–3 години зйомки": "2–3 hours of filming",
    "30+ відео / коротких матеріалів": "30+ videos / short materials",
    "Адаптація для TikTok, Instagram, Facebook і YouTube": "Adaptation for TikTok, Instagram, Facebook and YouTube",
    "Щоб протестувати формат і побачити перші результати без великих вкладень.": "To test the format and see first results without a large investment.",
    "Обговорити формат": "Discuss the format",
    "Найпопулярніший": "Most popular",
    "Стандарт — 1 000 €": "Standard — 1,000 €",
    "4 знімальні дні — 2 на тиждень": "4 shooting days — 2 per week",
    "30+ відео з кожного знімального дня": "30+ videos from each shooting day",
    "Системний потік контенту": "A systematic content flow",
    "Оптимальний формат: показати бізнес всередині й запустити стабільне зростання.": "The optimal format: show the business from the inside and launch stable growth.",
    "Максимум — 2 000 €": "Maximum — 2,000 €",
    "8 знімальних днів за місяць": "8 shooting days per month",
    "Повноцінна медіа-присутність": "Full media presence",
    "Контент на місяць+ уперед": "Content for a month+ ahead",
    "Масштабна видимість і повна воронка залучення клієнтів із соцмереж.": "Large-scale visibility and a full customer acquisition funnel from social media.",
    "Партнерство": "Partnership",
    "Партнерство в тематичному напрямку — індивідуально": "Partnership in a thematic direction — individual",
    "Індивідуальний формат для сервісів, експертів і компаній, які хочуть бути присутніми в конкретній темі Hugo Media Group: легалізація, бізнес, авто, освіта, медицина, нерухомість, робота, фінанси або інші напрямки.": "An individual format for services, experts and companies that want to be present in a specific Hugo Media Group topic: legalization, business, cars, education, medicine, real estate, work, finance or other directions.",
    "Можливі формати": "Possible formats",
    "Регулярні згадки, Telegram-публікації, експертні коментарі, інтеграції в тематичний контент, передача заявок, спільні ефіри або матеріали, довгострокове партнерство.": "Regular mentions, Telegram posts, expert comments, integrations into thematic content, lead transfer, joint live streams or materials, long-term partnership.",
    "Важливо": "Important",
    "Медійна присутність має будувати довіру": "Media presence must build trust",
    "Сильна медійна подача не просто показує продукт. Вона робить так, щоб люди повірили людині, яка стоїть за ним.": "Strong media presentation does not simply show a product. It makes people believe in the person behind it.",
    "Отримати комерційну пропозицію": "Get a commercial proposal",
    "Партнерства з Hugo Media Group": "Partnerships with Hugo Media Group",
    "Колаборації, сервіси, експерти, постачальники, бізнеси та люди, з якими можна створювати реальну цінність для українців у Польщі та Європі.": "Collaborations, services, experts, suppliers, businesses and people with whom real value can be created for Ukrainians in Poland and Europe.",
    "Hugo Media Group відкритий до партнерств із людьми та бізнесами, які дають реальну користь аудиторії. Нам не цікаві випадкові контакти заради логотипів. Нам цікаві робочі зв’язки, сильні сервіси, чесні експерти і проєкти, які можна масштабувати через довіру, медіа і спільну дію.": "Hugo Media Group is open to partnerships with people and businesses that bring real value to the audience. We are not interested in random contacts for the sake of logos. We are interested in working connections, strong services, honest experts and projects that can scale through trust, media and joint action.",
    "Запропонувати співпрацю": "Suggest cooperation",
    "Партнерство · інтеграції · сервіси · експерти": "Partnership · integrations · services · experts",
    "Кому": "For whom",
    "Кому підходить співпраця": "Who cooperation is for",
    "Підприємцям": "Entrepreneurs",
    "Бізнесам, які хочуть вийти до української аудиторії, посилити бренд, знайти партнерів або запустити спільний напрямок.": "Businesses that want to reach the Ukrainian audience, strengthen their brand, find partners or launch a joint direction.",
    "Експертам": "Experts",
    "Юристам, консультантам, фінансовим спеціалістам, HR, рекрутерам, сервісам і людям, які мають практичну експертизу.": "Lawyers, consultants, financial specialists, HR, recruiters, services and people with practical expertise.",
    "Сервісам і постачальникам": "Services and suppliers",
    "Компаніям, які можуть дати аудиторії перевірені послуги, продукти, рішення, логістику, техніку, авто, ремонт або інші напрямки.": "Companies that can offer the audience verified services, products, solutions, logistics, electronics, cars, repair or other directions.",
    "Медіа і проєктам": "Media and projects",
    "Людям, командам і платформам, які хочуть робити спільний контент, інтерв’ю, події, спецпроєкти або інформаційні кампанії.": "People, teams and platforms that want to create joint content, interviews, events, special projects or information campaigns.",
    "Формати партнерства": "Partnership formats",
    "Подача бізнесу, сервісу або експерта через контент, рекомендації, відео, пости, сторіс і Telegram в авторському медійному форматі.": "Presenting a business, service or expert through content, recommendations, videos, posts, stories and Telegram in an author-led media format.",
    "Спільні проєкти": "Joint projects",
    "Запуск напрямків, сервісів, інформаційних кампаній, серій контенту, консультацій або партнерських продуктів.": "Launching directions, services, information campaigns, content series, consultations or partner products.",
    "Нетворкінг і контакти": "Networking and contacts",
    "Знайомства з підприємцями, експертами, постачальниками, сервісами і людьми, з якими можна працювати.": "Introductions to entrepreneurs, experts, suppliers, services and people you can work with.",
    "Медійне посилення": "Media strengthening",
    "Публічна подача партнера, пояснення його цінності, створення довіри та вихід до аудиторії Hugo Media Group.": "Public presentation of a partner, explaining their value, creating trust and access to the Hugo Media Group audience.",
    "Принципи": "Principles",
    "Що важливо для співпраці": "What matters in cooperation",
    "Реальна користь": "Real value",
    "Партнер має давати аудиторії не просто красиву презентацію, а зрозумілу користь, послугу, рішення або можливість.": "A partner should give the audience not just a nice presentation, but clear value, a service, a solution or an opportunity.",
    "Адекватність і відповідальність": "Adequacy and responsibility",
    "Ми працюємо з людьми, які тримають слово, відповідають за якість і не псують довіру платформи.": "We work with people who keep their word, take responsibility for quality and do not damage platform trust.",
    "Довгостроковість": "Long-term thinking",
    "Найцінніші партнерства — це не одноразова реклама, а зв’язки, які можуть рости, давати результат і створювати нові можливості.": "The most valuable partnerships are not one-time ads, but connections that can grow, deliver results and create new opportunities.",
    "Спільна репутація": "Shared reputation",
    "Hugo Media Group береже довіру аудиторії. Тому партнерство має підсилювати обидві сторони, а не просто продавати будь-що.": "Hugo Media Group protects audience trust. That is why a partnership should strengthen both sides, not just sell anything.",
    "Партнерство — це не логотип. Це довіра.": "Partnership is not a logo. It is trust.",
    "Якщо ви маєте сервіс, бізнес, експертизу або ресурс, який може бути корисним українцям у Польщі та Європі — ми можемо знайти формат співпраці, який буде цінним для аудиторії і сильним для вашого бренду.": "If you have a service, business, expertise or resource that can be useful to Ukrainians in Poland and Europe, we can find a cooperation format that will be valuable for the audience and strong for your brand.",
    "Медіакіт": "Media kit",
    "Медіакіт Hugo Media Group": "Hugo Media Group media kit",
    "Авторська медіаплатформа незалежного міжнародного журналіста Сергія Гальчука / Hugo про людей, бізнес і життя за кордоном.": "An author-led media platform by independent international journalist Serhii Halchuk / Hugo about people, business and life abroad.",
    "Хто я": "Who I am",
    "Сергій Гальчук / Hugo — незалежний міжнародний журналіст, автор Hugo Media Group, блогер і підприємець.": "Serhii Halchuk / Hugo is an independent international journalist, author of Hugo Media Group, blogger and entrepreneur.",
    "Мій формат — не суха реклама, а медійна присутність: показати людину за бізнесом, пояснити цінність, створити довіру і дати аудиторії причину звернутись саме до вас.": "My format is not dry advertising, but media presence: show the person behind the business, explain the value, create trust and give the audience a reason to contact you specifically.",
    "Завантажити медіакіт (PDF)": "Download media kit (PDF)",
    "Статус і документи": "Status and documents",
    "Сергій Гальчук — незалежний міжнародний журналіст, автор Hugo Media Group, блогер і підприємець.": "Serhii Halchuk is an independent international journalist, author of Hugo Media Group, blogger and entrepreneur.",
    "Працюю з темами бізнесу, міграції, легалізації, життя українців за кордоном, підприємництва, сервісів і реальних історій людей.": "I work with topics of business, migration, legalization, Ukrainians abroad, entrepreneurship, services and real human stories.",
    "Документи / підтвердження журналістського статусу можуть бути надані за запитом.": "Documents / confirmation of journalistic status can be provided upon request.",
    "сукупна аудиторія проєктів": "total project audience",
    "Фільтр": "Filter",
    "Кому підходить": "Who it is for",
    "Підходить": "Good fit",
    "Підприємцям, експертам, локальним бізнесам, сервісам і партнерам, які хочуть будувати довіру, а не просто купити один рекламний пост.": "Entrepreneurs, experts, local businesses, services and partners who want to build trust, not just buy one ad post.",
    "Не підходить": "Not a fit",
    "Тим, хто шукає дешевий трафік, миттєві гарантії продажів або рекламу без готовності показувати людину, процес і цінність бізнесу.": "Those looking for cheap traffic, instant sales guarantees or advertising without readiness to show the person, process and value of the business.",
    "Напишіть у Telegram, щоб отримати умови, формат і комерційну пропозицію під ваш бізнес, аудиторію і задачу.": "Write on Telegram to get terms, format and a commercial proposal for your business, audience and task."
  },
  pl: {}
};

TEXT_TRANSLATIONS.pl = Object.fromEntries(Object.entries(TEXT_TRANSLATIONS.en).map(([key, value]) => [key, value]));
Object.assign(TEXT_TRANSLATIONS.pl, {
  "На головну": "Strona główna",
  "Про мене": "O mnie",
  "Фокус": "Fokus",
  "Позиція": "Pozycja",
  "Довіра": "Zaufanie",
  "Контакт": "Kontakt",
  "Масштаб": "Skala",
  "Канали": "Kanały",
  "Перегляди": "Wyświetlenia",
  "Формати": "Formaty",
  "Теми": "Tematy",
  "Послуги": "Usługi",
  "Обговорити співпрацю": "Omówić współpracę",
  "Сергій Гальчук / Hugo": "Serhii Halchuk / Hugo",
  "Незалежний міжнародний журналіст, автор Hugo Media Group, блогер і підприємець.": "Niezależny dziennikarz międzynarodowy, autor Hugo Media Group, bloger i przedsiębiorca.",
  "Мене звати Сергій. У медіа я працюю під брендом Hugo.": "Nazywam się Serhii. W mediach działam pod marką Hugo.",
  "Я незалежний міжнародний журналіст, автор Hugo Media Group, блогер і підприємець.": "Jestem niezależnym dziennikarzem międzynarodowym, autorem Hugo Media Group, blogerem i przedsiębiorcą.",
  "Створюю контент про життя українців за кордоном, бізнес, легалізацію, документи, гроші, роботу, переїзд і реальні історії людей.": "Tworzę treści o życiu Ukraińców za granicą, biznesie, legalizacji, dokumentach, pieniądzach, pracy, przeprowadzce i realnych historiach ludzi.",
  "Мій шлях починався не з теорії про маркетинг. Я сам будував проєкти через контент, особисту присутність і довіру аудиторії.": "Moja droga nie zaczęła się od teorii marketingu. Sam budowałem projekty przez treści, osobistą obecność i zaufanie odbiorców.",
  "Моя ціль — показувати людей за бізнесом і допомагати аудиторії знаходити тих, кому можна довіряти.": "Moim celem jest pokazywać ludzi stojących za biznesem i pomagać odbiorcom znajdować tych, którym można zaufać.",
  "Чим можу бути корисний": "W czym mogę pomóc",
  "Медійна присутність для бізнесу": "Obecność medialna dla biznesu",
  "Медіакіт і формати": "Mediakit i formaty",
  "Легалізаційний напрямок": "Kierunek legalizacyjny",
  "Показую людину за бізнесом": "Pokazuję człowieka za biznesem",
  "Платформа": "Platforma",
  "Hugo Media Group — не просто блог": "Hugo Media Group to nie tylko blog",
  "Стати партнером Hugo Media Group": "Zostać partnerem Hugo Media Group",
  "Отримати медіакіт": "Pobrać mediakit",
  "Для кого ця платформа": "Dla kogo jest ta platforma",
  "Для українців у Польщі та Європі": "Dla Ukraińców w Polsce i Europie",
  "Для підприємців": "Dla przedsiębiorców",
  "Для партнерів": "Dla partnerów",
  "Для експертів і сервісів": "Dla ekspertów i usług",
  "Медіа-активи Hugo Media Group": "Aktywa medialne Hugo Media Group",
  "Основні канали і медіа-активи": "Główne kanały i aktywa medialne",
  "Що об’єднує платформа": "Co łączy platforma",
  "Що дає Hugo Media Group": "Co daje Hugo Media Group",
  "Напрямок платформи": "Kierunek platformy",
  "Медіа-платформа": "Platforma medialna",
  "Запропонувати тему або інтеграцію": "Zaproponować temat lub integrację",
  "Про що ми говоримо": "O czym mówimy",
  "Українці за кордоном": "Ukraińcy za granicą",
  "Польща і Європа": "Polska i Europa",
  "Легалізація і документи": "Legalizacja i dokumenty",
  "Бізнес і підприємці": "Biznes i przedsiębiorcy",
  "Інтерв’ю / колаборації": "Wywiady / współprace",
  "Участь": "Udział",
  "Як потрапити в медіа Hugo Media Group": "Jak trafić do mediów Hugo Media Group",
  "Запропонувати тему": "Zaproponować temat",
  "Запропонувати експерта": "Zaproponować eksperta",
  "Замовити інтеграцію": "Zamówić integrację",
  "Зробити колаборацію": "Zrobić współpracę",
  "Медіа має не просто шуміти. Медіа має пояснювати.": "Media nie mają tylko robić hałasu. Media mają wyjaśniać.",
  "Тематична вертикаль": "Pion tematyczny",
  "Легалізація як тематична вертикаль Hugo Media Group": "Legalizacja jako pion tematyczny Hugo Media Group",
  "Про що цей напрям": "O czym jest ten kierunek",
  "Документи і статус": "Dokumenty i status",
  "Адаптація і правила": "Adaptacja i zasady",
  "Ризики": "Ryzyka",
  "Партнерські формати": "Formaty partnerskie",
  "Для сервісів": "Dla usług",
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
  "Сукупна аудиторія": "Łączna publiczność",
  "Інтеграції": "Integracje",
  "Комунікації": "Komunikacja",
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
  "Статус і документи": "Status i dokumenty",
  "Кому підходить": "Dla kogo",
  "Підходить": "Pasuje",
  "Не підходить": "Nie pasuje"
});

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

function setLabel(element, text) {
  const label = element.querySelector("strong") || element;
  label.textContent = text;
}

function setExternalLink(element, href, text) {
  if (!element) return;
  element.href = href;
  element.target = "_blank";
  element.rel = "noopener noreferrer";
  if (text) setLabel(element, text);
}

function applyEditableLinks() {
  document.querySelectorAll("[data-link]").forEach((element) => {
    const url = HUGO_LINKS[element.dataset.link];
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
  footer.innerHTML = `<p data-i18n="global.footer">Соцмережі Hugo Media Group</p><div class="site-social-footer__links">${links}</div>`;
  document.body.appendChild(footer);
}

function shouldSkipTextNode(node) {
  const parent = node.parentElement;
  if (!parent) return true;
  if (["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) return true;
  if (parent.closest("[data-i18n], [data-i18n-html]")) return true;
  if (!node.nodeValue.trim()) return true;
  return false;
}

function applyStaticPageTranslations(lang) {
  const translations = TEXT_TRANSLATIONS[lang] || {};
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      return shouldSkipTextNode(node) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
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
  if (page === "home") {
    setExternalLink(document.querySelector(".action-list .action-card.action-primary"), HUGO_LINKS.telegram);
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