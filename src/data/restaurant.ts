/**
 * Core restaurant identity & contact info.
 * Single source of truth — edit here to update the whole site.
 *
 * Location, map and the public rating reflect the real Google Business
 * listing: "Apm カレー インドネパール料理", Kawasaki-ku, Kawasaki.
 * NOTE: phone & email below are still placeholders — swap for the real ones.
 */

export const restaurant = {
  name: "Apm Curry",
  tagline: "Indian & Nepali Kitchen",
  nameJp: "Apm カレー",
  fullNameJp: "Apm カレー インドネパール料理",
  city: "Kawasaki, Japan",
  established: "2024",
  rating: 4.6,
  reviewCount: 88,

  contact: {
    phone: "+81 44-123-4567",
    phoneDisplay: "044-123-4567",
    email: "hello@apmcurry.jp",
    area: "Kawasaki-ku, Kawasaki",
    areaJp: "神奈川県川崎市川崎区",
    region: "Kanagawa, Japan",
    directions:
      "About a 10-minute walk from JR Kawasaki Station, on the road toward Happy Road — near Minamigawara Park. The entrance is on the side of the building.",
    directionsJp:
      "JR川崎駅から徒歩約10分、ハッピーロード方面。南河原公園のそば、入口は建物の側面にあります。",
    mapsUrl:
      "https://www.google.com/maps/place/Apm+%E3%82%AB%E3%83%AC%E3%83%BC+%E3%82%A4%E3%83%B3%E3%83%89%E3%83%8D%E3%83%91%E3%83%BC%E3%83%AB%E6%96%99%E7%90%86/@35.5351902,139.6918861,17z/data=!4m6!3m5!1s0x6018610063cdae75:0x6b9db3c6796f9730!8m2!3d35.5351969!4d139.6920047!16s%2Fg%2F11v_264c19",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.01749929671!2d139.69200469999998!3d35.535196899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018610063cdae75%3A0x6b9db3c6796f9730!2zQXBtIOOCq-ODrOODvCDjgqTjg7Pjg4njg43jg5Hjg7zjg6vmlpnnkIY!5e1!3m2!1sen!2snp!4v1781633538116!5m2!1sen!2snp",
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
  { key: "reviews", href: "#reviews" },
  { key: "visit", href: "#visit" },
] as const;
