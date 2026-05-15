export const phoneNumber = "+38 (073) 430-46-49";
export const phoneHref = "tel:+380734304649";
export const email = "vdumtsi@gmail.com";
export const instagramHandle = "@vdumtsi.studio.floristry";
export const instagramUrl = "https://instagram.com/vdumtsi.studio.floristry";
export const instagramDirectUrl = "https://ig.me/m/vdumtsi.studio.floristry";
export const address = "вул. Малоголосківська, 12-Г, Львів";
export const mapsUrl =
  "https://maps.google.com/?q=вул.+Малоголосківська,+12-Г,+Львів,+Львівська+область";

export type MasterclassFormat = {
  id: string;
  title: string;
  people: string;
  duration?: string;
  price: string;
  summary: string;
  bestFor: string[];
  accent: string;
  includes?: string[];
  note?: string;
};

export const formats: MasterclassFormat[] = [
  {
    id: "individual",
    title: "Індивідуальний МК 1:1",
    people: "1 учасник",
    duration: "до 3 годин",
    price: "6500 грн",
    summary:
      "Персонально адаптований формат, де учасник працює напряму з флористом та отримує більше практики й пояснень.",
    bestFor: [
      "особистого досвіду",
      "подарунка",
      "першого знайомства з флористикою",
      "глибшого навчання",
    ],
    accent: "Можна придбати як подарунковий сертифікат.",
    includes: [
      "підбір квітів під запит",
      "навчання технікам, основам колористики, видам букетів і пропорціям",
      "створення композиції",
      "усі матеріали та пакування",
    ],
  },
  {
    id: "small-group",
    title: "Група 3–5 осіб",
    people: "3–5 осіб",
    price: "3000 грн / особа",
    summary:
      "Камерний формат із більшою увагою до кожного учасника та спільним творчим досвідом.",
    bestFor: ["подруг", "сімейної зустрічі", "невеликої творчої події"],
    accent: "Більше часу на пояснення, корекцію техніки та деталі композиції.",
  },
  {
    id: "group",
    title: "Група 5–10 осіб",
    people: "5–10 осіб",
    price: "2600 грн / особа",
    summary:
      "Баланс атмосфери події та практики для групи, де кожен створює власну роботу.",
    bestFor: ["дівич‑вечорів", "свят", "творчих зустрічей", "невеликих команд"],
    accent: "Підходить, коли важливі і результат, і спільна подія.",
  },
  {
    id: "event",
    title: "Група 10–20 осіб",
    people: "10–20 осіб",
    price: "2200–2400 грн / особа",
    summary:
      "Організований майстер‑клас для команди або події, де творчий процес стає частиною атмосфери й спільного досвіду.",
    bestFor: [
      "корпоративних клієнтів",
      "командних подій",
      "свят",
      "бренд‑івентів",
    ],
    accent:
      "Фінальна вартість залежить від концепції сезону та наповнення майстер-класу.",
  },
];

export const groupFormats = formats.filter((format) => format.id !== "individual");

export const certificate = {
  title: "Подарунковий сертифікат на індивідуальний МК",
  price: "6500 грн",
  duration: "до 3 годин",
  format: "персональний формат 1:1",
  includes: [
    "усі квіти, матеріали та пакування включені",
    "учасник створює композицію разом із флористом",
    "після майстер‑класу готова композиція залишається в учасника",
  ],
  note:
    "Деталі фізичного сертифіката, оплату та отримання погоджуємо при оформленні.",
};

export const topics = [
  "авторський букет",
  "робота з кензаном",
  "сезонні композиції",
  "композиції в кашпо",
  "композиції в гарбузі, сезонний формат",
  "різдвяні вінки та святкові композиції",
];

export const includedItems = [
  "квіти та матеріали для роботи",
  "аквабокси або пакування",
  "текстиль та підготовка простору",
  "знайомство з базовою основою флористики та практика під час майстер‑класу",
  "для індивідуального формату — персональна адаптація під запит",
];

export const eventTypes = [
  "подарунок близькій людині",
  "день народження або камерне свято",
  "дівич‑вечір",
  "подія для корпоративного клієнта або тимбілдинг",
  "бренд‑подія",
  "сезонна творча зустріч",
];

export const bookingTerms = [
  "Оплата здійснюється офіційно на рахунок ФОП.",
  "Для корпоративних клієнтів можливий безготівковий розрахунок та укладання договору.",
  "Бронювання дати здійснюється після передоплати 50% або повної оплати вартості.",
  "За 10 і більше днів до дати проведення передоплата повертається у повному обсязі.",
  "Менш ніж за 10 днів до дати проведення передоплата 50% не повертається, оскільки покриває підготовку матеріалів та резерв місця.",
  "Перенесення дати можливе індивідуально за наявності вільних місць.",
];

export const heroImage = {
  src: "/images/masterclasses/brand-workshop-hero.webp",
  alt: "брендований пакет V DUMTSI та квіти для флористичного майстер‑класу",
};

export const supportingImages = {
  flatlay: {
    src: "/images/masterclasses/instagram-feature.webp",
    alt: "флористка V DUMTSI з букетом та брендованим пакетом",
  },
  preparedSpace: {
    src: "/images/masterclasses/individual-masterclass-flatlay.webp",
    alt: "квіти та матеріали для індивідуального майстер‑класу з флористики",
  },
  brandedMaterials: {
    src: "/images/masterclasses/branded-materials.webp",
    alt: "брендовані матеріали V DUMTSI для флористичного майстер‑класу",
  },
  process: {
    src: "/images/masterclasses/bouquet-process.webp",
    alt: "учасники створюють композицію на майстер‑класі з флористики",
  },
  certificate: {
    src: "/images/masterclasses/gift-certificate.webp",
    alt: "подарунковий сертифікат V DUMTSI на майстер‑клас з флористики",
  },
  eventTable: {
    src: "/images/masterclasses/event-table.webp",
    alt: "атмосфера групового майстер‑класу з флористики на події у Львові",
  },
  autumnComposition: {
    src: "/images/masterclasses/autumn-composition.webp",
    alt: "осіння флористична композиція у гарбузі для сезонного майстер‑класу",
  },
  winterWreath: {
    src: "/images/masterclasses/winter-wreath.webp",
    alt: "різдвяний вінок V DUMTSI для сезонного флористичного майстер‑класу",
  },
};
