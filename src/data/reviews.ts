/**
 * Real guest reviews from the Apm Curry Google Business listing,
 * quoted verbatim (as shown on Google, English where Google translated).
 */

export type Review = {
  author: string;
  /** Shown under the name when present (e.g. "Local Guide"). */
  role?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
};

/** Aggregate shown in the section header (mirrors the Google listing). */
export const reviewSummary = {
  rating: 4.6,
  count: 88,
  source: "Google",
  /** Topics travellers mention most, lifted from the listing. */
  topics: [
    { en: "naan", jp: "ナン" },
    { en: "mango lassi", jp: "マンゴーラッシー" },
    { en: "momo", jp: "モモ" },
    { en: "cheese naan", jp: "チーズナン" },
    { en: "Kawasaki set", jp: "川崎セット" },
    { en: "tandoori", jp: "タンドリー" },
  ],
};

export const reviews: Review[] = [
  {
    author: "Rabindra Pantha",
    rating: 5,
    quote:
      "Delicious Naan and the best is Momo, size and test is same like as in nepal. Momo lover should come here once.",
  },
  {
    author: "HemantDhoj Shrestha",
    role: "Local Guide",
    rating: 5,
    quote:
      "It's peace family environment . Easy & cheap menu . I enjoyed lunch. Next time I will visit dinner.",
  },
  {
    author: "krishna neupane",
    rating: 5,
    quote: "Apm indian nepali curry best in the town Good services",
  },
  {
    author: "Mahendra Sapkota",
    role: "Local Guide",
    rating: 5,
    quote: "Very very tested curry and naan",
  },
  {
    author: "Hari Gyawali",
    rating: 5,
    quote: "Apm Indian Nepali curry 🍛",
  },
  {
    author: "Tilak Gautam",
    rating: 5,
    quote: "Delicious",
  },
  {
    author: "りこーだーInari",
    role: "Local Guide",
    rating: 5,
    quote:
      "The mango lassi is the thickest in the area, undiluted and delicious. They always give you one free lassi. The staff are also very friendly. I always order the mango lassi here!",
  },
];
