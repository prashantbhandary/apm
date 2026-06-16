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
    reviews: "Reviews",
    visit: "Visit",
    reserve: "Reserve a table",
    order: "Order online",
  },
  hero: {
    eyebrow: "Indian & Nepali Kitchen",
    line1: "The warmth of",
    line2: "two homelands",
    line3: "on one plate",
    body: "Clay-oven naan, slow curries and hand-pleated momo — Indian & Nepali, in the heart of Kawasaki.",
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
    title: "What we serve",
    description:
      "Lunch sets with free naan & rice refills, plus curries, tandoor and naan. Five spice levels.",
    reserve: "Reserve your table",
  },
  delivery: {
    kicker: "Order In",
    title: "Apm Curry, at your door",
    description:
      "Hot, fragrant curry across Kawasaki — through your favourite delivery apps.",
    note: "Delivery hours follow restaurant hours. Availability varies by area.",
    cta: "Order now",
  },
  staff: {
    kicker: "The People",
    title: "The hands behind the fire",
    description:
      "A small team from India and Nepal, cooking the food we grew up on.",
  },
  gallery: {
    kicker: "The Gallery",
    title: "Every dish, from tandoor to table",
    description: "A look at everything we serve.",
    hint: "Hover to pause · tap to enlarge",
  },
  reviews: {
    kicker: "Loved in Kawasaki",
    title: "What our guests are saying",
    description: "Real words from our guests.",
    ratingLabel: "Google reviews",
    cta: "Read all reviews on Google",
  },
  visit: {
    kicker: "Visit Us",
    title: "Reserve a table by the fire",
    description:
      "Walk-ins welcome; evenings fill fast. Ten minutes from JR Kawasaki Station.",
    reserve: "Reserve a table",
    call: "Call",
    hours: "Opening Hours",
    findUs: "Find Us",
    directions: "Get directions",
  },
  footer: {
    blurb:
      "Indian & Nepali cooking, served with warmth in Kawasaki since",
    explore: "Explore",
    findUs: "Find Us",
    rights: "All rights reserved.",
    crafted: "Crafted with care in",
  },
  marquee: [
    "Free naan & rice refills",
    "Five spice levels",
    "Hand-pleated momo",
    "Fresh cheese naan",
    "Thick mango lassi",
    "10 min from JR Kawasaki",
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
    reviews: "口コミ",
    visit: "アクセス",
    reserve: "ご予約",
    order: "オンライン注文",
  },
  hero: {
    eyebrow: "インド・ネパール料理",
    line1: "ふたつの故郷の",
    line2: "温もりを",
    line3: "ひと皿に",
    body: "窯焼きのナン、煮込みカレー、手包みのモモ。川崎で味わうインド・ネパール料理。",
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
    title: "お品書き",
    description:
      "ナン・ライスおかわり自由のランチセットに、カレー・タンドール・ナン。辛さは5段階。",
    reserve: "ご予約はこちら",
  },
  delivery: {
    kicker: "デリバリー",
    title: "Apm Curry をご自宅へ",
    description:
      "熱々の本格カレーを、おなじみのアプリから川崎エリアへお届け。",
    note: "デリバリーの受付時間は営業時間に準じます。対応エリアは異なる場合がございます。",
    cta: "注文する",
  },
  staff: {
    kicker: "つくり手",
    title: "炎の向こうの、たしかな手",
    description:
      "インドとネパールから集まった少人数のチームが、育った味をお届けします。",
  },
  gallery: {
    kicker: "ギャラリー",
    title: "窯から食卓へ、すべての一皿",
    description: "提供しているお料理をすべてご紹介。",
    hint: "ホバーで停止・タップで拡大",
  },
  reviews: {
    kicker: "川崎で愛されて",
    title: "お客様の声",
    description: "実際にご来店いただいた皆さまの声。",
    ratingLabel: "件のGoogleレビュー",
    cta: "Googleで口コミをすべて見る",
  },
  visit: {
    kicker: "ご来店",
    title: "炎のそばのお席へ",
    description:
      "ご予約なしでも歓迎、夜は満席になりがちです。JR川崎駅から徒歩10分。",
    reserve: "ご予約",
    call: "電話する",
    hours: "営業時間",
    findUs: "店舗案内",
    directions: "道順を見る",
  },
  footer: {
    blurb:
      "インド・ネパール料理を、温もりとともに。川崎にて ——",
    explore: "メニュー",
    findUs: "店舗案内",
    rights: "無断転載を禁じます。",
    crafted: "心を込めて —",
  },
  marquee: [
    "ナン・ライスおかわり自由",
    "辛さ5段階",
    "手包みのモモ",
    "焼きたてチーズナン",
    "濃厚マンゴーラッシー",
    "JR川崎駅から徒歩10分",
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
