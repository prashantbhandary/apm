/**
 * Curated gallery — cinematic masonry.
 * `span` controls how tall a tile sits in the masonry grid.
 */

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  span: "tall" | "short" | "wide";
};

const u = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const gallery: GalleryImage[] = [
  {
    src: u("photo-1585937421612-70a008356fbe"),
    alt: "Butter chicken curry in a copper bowl",
    caption: "Royal Butter Chicken",
    span: "tall",
  },
  {
    src: u("photo-1601050690597-df0568f70950"),
    alt: "Assortment of Indian spices",
    caption: "Ground at dawn",
    span: "short",
  },
  {
    src: u("photo-1631452180519-c014fe946bc7"),
    alt: "Tandoori chicken on a platter",
    caption: "Straight from the tandoor",
    span: "short",
  },
  {
    src: u("photo-1626776876729-bab4369a5a5a"),
    alt: "Steamed momo dumplings with dipping sauce",
    caption: "Himalayan momo",
    span: "tall",
  },
  {
    src: u("photo-1517248135467-4c7edcad34c4"),
    alt: "Warm candle-lit restaurant interior",
    caption: "The dining room",
    span: "wide",
  },
  {
    src: u("photo-1565557623262-b51c2513a641"),
    alt: "Naan bread fresh from the oven",
    caption: "Blistered naan",
    span: "short",
  },
  {
    src: u("photo-1455619452474-d2be8b1e70cd"),
    alt: "Chef plating a dish in the kitchen",
    caption: "In the pass",
    span: "tall",
  },
  {
    src: u("photo-1546833999-b9f581a1996d"),
    alt: "Bowl of aromatic biryani rice",
    caption: "Saffron biryani",
    span: "short",
  },
];
