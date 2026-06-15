import type { Lang } from "./config";

/**
 * UI chrome + section copy in English and Japanese.
 * Editable, typed source of truth for all non-data strings.
 */

const en = {
  nav: {
    story: "Story",
    menu: "Menu",
    gallery: "Gallery",
    visit: "Visit",
    reserve: "Reserve a table",
    order: "Order online",
  },
  hero: {
    eyebrow: "Indian & Nepali Kitchen",
    line1: "The warmth of",
    line2: "two homelands",
    line3: "on one plate",
    body: "Clay-oven breads, slow-simmered curries and hand-pleated Himalayan momo — authentic Indian & Nepali cooking in the heart of Kawasaki.",
    exploreMenu: "Explore the menu",
    reserve: "Reserve a table",
    scroll: "Scroll",
    ratingLabel: "reviews",
    cuisine: "Indian & Nepali",
    cuisineSub: "Authentic cuisine",
    city: "Kawasaki",
    region: "Kanagawa, Japan",
  },
  story: {
    kicker: "Our Story",
  },
  menu: {
    kicker: "The Menu",
    title: "Cooked with intention, served with pride",
    description:
      "A short, considered list that changes with the season. Ask our team for tonight's specials and pairings.",
    reserve: "Reserve your table",
  },
  delivery: {
    kicker: "Order In",
    title: "Apm Curry, at your door",
    description:
      "Craving curry at home? We deliver across Kawasaki through your favourite apps — hot, fragrant and packed with care.",
    note: "Delivery hours follow restaurant hours. Availability varies by area.",
    cta: "Order now",
  },
  staff: {
    kicker: "The People",
    title: "The hands behind the fire",
    description:
      "A small team from across India and Nepal, cooking the food we grew up on — with the warmth of home.",
  },
  gallery: {
    kicker: "The Gallery",
    title: "A few moments from our table",
    description:
      "Steam, char and candlelight — a glimpse of what waits inside.",
  },
  visit: {
    kicker: "Visit Us",
    title: "Reserve a table by the fire",
    description:
      "Walk-ins are always welcome, but evenings fill quickly. Book ahead and let us look after the rest.",
    reserve: "Reserve a table",
    call: "Call",
    hours: "Opening Hours",
    findUs: "Find Us",
  },
  footer: {
    blurb:
      "Authentic Indian & Nepali cooking, served with warmth in the heart of Kawasaki since",
    explore: "Explore",
    findUs: "Find Us",
    rights: "All rights reserved.",
    crafted: "Crafted with care in",
  },
  marquee: [
    "Hand-ground spices",
    "480°C clay tandoor",
    "Hand-pleated momo",
    "Slow-simmered curries",
    "Warm Himalayan hospitality",
    "Made fresh, daily",
  ],
  common: {
    language: "Language",
  },
} as const;

const jp = {
  nav: {
    story: "私たちの物語",
    menu: "メニュー",
    gallery: "ギャラリー",
    visit: "アクセス",
    reserve: "ご予約",
    order: "オンライン注文",
  },
  hero: {
    eyebrow: "インド・ネパール料理",
    line1: "ふたつの故郷の",
    line2: "温もりを",
    line3: "ひと皿に",
    body: "窯焼きのナン、じっくり煮込んだカレー、手包みのヒマラヤ風モモ。川崎の中心で味わう、本格インド・ネパール料理。",
    exploreMenu: "メニューを見る",
    reserve: "ご予約はこちら",
    scroll: "スクロール",
    ratingLabel: "件のレビュー",
    cuisine: "インド・ネパール",
    cuisineSub: "本格料理",
    city: "川崎",
    region: "神奈川県・日本",
  },
  story: {
    kicker: "私たちの物語",
  },
  menu: {
    kicker: "メニュー",
    title: "心を込めて、誇りとともに",
    description:
      "季節ごとに移ろう、厳選された短いお品書き。本日のおすすめやペアリングはスタッフまでお気軽に。",
    reserve: "ご予約はこちら",
  },
  delivery: {
    kicker: "デリバリー",
    title: "Apm Curry をご自宅へ",
    description:
      "おうちでカレーを楽しみたい時は、おなじみのアプリから。川崎エリアへ、熱々のまま心を込めてお届けします。",
    note: "デリバリーの受付時間は営業時間に準じます。対応エリアは異なる場合がございます。",
    cta: "注文する",
  },
  staff: {
    kicker: "つくり手",
    title: "炎の向こうの、たしかな手",
    description:
      "インドとネパール各地から集まった少人数のチーム。私たちが育った味を、故郷の温もりとともにお届けします。",
  },
  gallery: {
    kicker: "ギャラリー",
    title: "食卓のひとこま",
    description: "湯気、炭火、ろうそくの灯り。店内のひとときをそっとお見せします。",
  },
  visit: {
    kicker: "ご来店",
    title: "炎のそばのお席へ",
    description:
      "ご予約なしでも歓迎ですが、夜は早くに満席となります。ご予約いただければ、あとはお任せください。",
    reserve: "ご予約",
    call: "電話する",
    hours: "営業時間",
    findUs: "店舗案内",
  },
  footer: {
    blurb:
      "本格インド・ネパール料理を、温もりとともに。川崎の地で営業しております ——",
    explore: "メニュー",
    findUs: "店舗案内",
    rights: "無断転載を禁じます。",
    crafted: "心を込めて —",
  },
  marquee: [
    "石臼挽きのスパイス",
    "480℃ の窯",
    "手包みのモモ",
    "じっくり煮込むカレー",
    "ヒマラヤのおもてなし",
    "毎日できたて",
  ],
  common: {
    language: "言語",
  },
} as const;

export type Dict = typeof en;

export const dictionary: Record<Lang, Dict> = {
  en,
  jp: jp as unknown as Dict,
};
