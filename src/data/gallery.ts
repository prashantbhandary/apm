/**
 * Gallery — every real Apm Curry dish, shown as two sideways-scrolling
 * strips. Photos live in /public/images. Captions are kept short on purpose.
 * The array order is also the display order; the Gallery splits it in two.
 */

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

export const gallery: GalleryImage[] = [
  // — row one
  { src: "/images/butter-chicken.jpg", alt: "Butter chicken curry", caption: "Butter Chicken" },
  { src: "/images/garlic-naan.jpg", alt: "Garlic naan", caption: "Garlic Naan" },
  { src: "/images/tandoori-platter.jpg", alt: "Tandoori chicken platter", caption: "Tandoori Chicken" },
  { src: "/images/mango-lassi.jpg", alt: "Mango lassi", caption: "Mango Lassi" },
  { src: "/images/seafood-curry.jpg", alt: "Seafood curry", caption: "Seafood Curry" },
  { src: "/images/cheese-naan.jpg", alt: "Cheese naan", caption: "Cheese Naan" },
  { src: "/images/seekh-kebab.jpg", alt: "Seekh kebab", caption: "Seekh Kebab" },
  { src: "/images/dal-curry.jpg", alt: "House dal curry", caption: "House Dal" },
  { src: "/images/butter-naan.jpg", alt: "Plain butter naan", caption: "Butter Naan" },
  { src: "/images/chicken-tikka.jpg", alt: "Chicken tikka", caption: "Chicken Tikka" },
  { src: "/images/veg-curry.jpg", alt: "Mixed vegetable curry", caption: "Vegetable Curry" },
  { src: "/images/double-curry-set.jpg", alt: "Double curry set", caption: "Double Curry Set" },
  { src: "/images/saag-chicken.jpg", alt: "Saag chicken curry", caption: "Saag Chicken" },

  // — row two
  { src: "/images/mutton-curry.jpg", alt: "Mutton curry", caption: "Mutton Curry" },
  { src: "/images/cheese-garlic-naan.jpg", alt: "Cheese garlic naan", caption: "Cheese Garlic Naan" },
  { src: "/images/tandoori-sizzler.jpg", alt: "Tandoori chicken on a sizzler", caption: "Tandoori Sizzler" },
  { src: "/images/set-manzoku.jpg", alt: "Manzoku set", caption: "Manzoku Set" },
  { src: "/images/chicken-curry.jpg", alt: "Chicken curry", caption: "Chicken Curry" },
  { src: "/images/mentai-cheese-naan.jpg", alt: "Mentai cheese naan", caption: "Mentai Cheese Naan" },
  { src: "/images/tandoori-2p.jpg", alt: "Tandoori chicken, two pieces", caption: "Tandoori · 2pc" },
  { src: "/images/saag-mutton.jpg", alt: "Saag mutton curry", caption: "Saag Mutton" },
  { src: "/images/one-curry-set.jpg", alt: "One curry set", caption: "One Curry Set" },
  { src: "/images/chicken-tikka-2p.jpg", alt: "Chicken tikka, two pieces", caption: "Chicken Tikka · 2pc" },
  { src: "/images/otoku-set.jpg", alt: "Otoku value set", caption: "Otoku Set" },
  { src: "/images/saag-pork.jpg", alt: "Saag pork curry", caption: "Saag Pork" },
  { src: "/images/tikka-set.jpg", alt: "Naan, curry, salad and chicken tikka set", caption: "Tikka Set" },
];
