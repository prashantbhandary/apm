/**
 * Core restaurant identity & contact info.
 * Single source of truth — edit here to update the whole site.
 */

export const restaurant = {
  name: "Apm Curry",
  tagline: "Indian & Nepali Kitchen",
  nameJp: "エーピーエム カリー",
  city: "Kawasaki, Japan",
  established: "2016",
  rating: 4.5,
  reviewCount: 1280,

  contact: {
    phone: "+81 44-123-4567",
    phoneDisplay: "044-123-4567",
    email: "hello@apmcurry.jp",
    address: {
      line1: "2-14-8 Ekimae Honcho",
      line2: "Kawasaki-ku, Kawasaki",
      region: "Kanagawa 210-0007",
      country: "Japan",
    },
    addressJp: "〒210-0007 神奈川県川崎市川崎区駅前本町2-14-8",
    mapsUrl: "https://maps.google.com/?q=Kawasaki+Station",
  },

  hours: [
    { days: "Monday – Friday", daysJp: "月 – 金", lunch: "11:00 – 15:00", dinner: "17:00 – 23:00" },
    { days: "Saturday", daysJp: "土曜", lunch: "11:00 – 15:30", dinner: "17:00 – 23:30" },
    { days: "Sunday & Holidays", daysJp: "日・祝", lunch: "11:00 – 15:30", dinner: "17:00 – 22:30" },
  ],

  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tabelog: "https://tabelog.com",
  },

  orderUrl: "#visit",
} as const;

export const navLinks = [
  { key: "story", href: "#story" },
  { key: "menu", href: "#menu" },
  { key: "order", href: "#delivery" },
  { key: "gallery", href: "#gallery" },
  { key: "visit", href: "#visit" },
] as const;
