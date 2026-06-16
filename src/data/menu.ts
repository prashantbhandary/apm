/**
 * Menu — real Apm Curry dishes, matched to the photos in /public/images.
 * Prices in yen. Set prices follow the lunch menu board; à la carte prices
 * are best-estimate for the venue and should be confirmed.
 * Bilingual: `*Jp` fields are used in Japanese mode.
 */

export type Spice = 0 | 1 | 2 | 3;

export type Dish = {
  name: string;
  nameJp?: string;
  description: string;
  descriptionJp?: string;
  price: number;
  /** Photo in /public/images, when we have one. */
  image?: string;
  spice?: Spice;
  veg?: boolean;
  tags?: string[];
  tagsJp?: string[];
};

export type MenuCategory = {
  id: string;
  label: string;
  labelJp?: string;
  kicker: string;
  kickerJp?: string;
  note: string;
  noteJp?: string;
  dishes: Dish[];
};

/** A few favourites featured at the top of the menu section. */
export const signatures: Dish[] = [
  {
    name: "Kawasaki Apm Set",
    nameJp: "川崎 Apm セット",
    description:
      "Two curries with seekh kebab, tandoori chicken, mango lassi, naan and rice.",
    descriptionJp:
      "カレー2種に、シークケバブ、タンドリーチキン、マンゴーラッシー、ナンとライス。",
    price: 1050,
    image: "/images/set-manzoku.jpg",
    spice: 1,
    tags: ["Most ordered"],
    tagsJp: ["人気No.1"],
  },
  {
    name: "Butter Chicken",
    nameJp: "バターチキンカレー",
    description: "Mild, creamy tomato and butter curry.",
    descriptionJp: "まろやかでクリーミーなトマトバターのカレー。",
    price: 890,
    image: "/images/butter-chicken.jpg",
    spice: 1,
  },
  {
    name: "Cheese Naan",
    nameJp: "チーズナン",
    description: "Tandoor naan stuffed with melted cheese.",
    descriptionJp: "とろけるチーズを包んで焼いたナン。",
    price: 650,
    image: "/images/cheese-naan.jpg",
    veg: true,
    tags: ["Popular"],
    tagsJp: ["人気"],
  },
];

export const menu: MenuCategory[] = [
  {
    id: "lunch",
    label: "Lunch Sets",
    labelJp: "ランチセット",
    kicker: "Weekdays 11:00 – 15:00",
    kickerJp: "平日 11:00 – 15:00",
    note: "Each set comes with naan or rice (free refills), salad and a drink. Five spice levels.",
    noteJp: "各セットはナンまたはライス（おかわり自由）、サラダ、ドリンク付き。辛さは5段階。",
    dishes: [
      {
        name: "Kawasaki Apm Set",
        nameJp: "川崎 Apm セット",
        description:
          "Two curries with seekh kebab, tandoori chicken, mango lassi, naan and rice.",
        descriptionJp:
          "カレー2種に、シークケバブ、タンドリーチキン、マンゴーラッシー、ナンとライス。",
        price: 1050,
        image: "/images/set-manzoku.jpg",
        spice: 1,
        tags: ["Most ordered"],
        tagsJp: ["人気No.1"],
      },
      {
        name: "2 Curry Set",
        nameJp: "2カレーセット",
        description: "Any two curries with naan or rice.",
        descriptionJp: "お好きなカレー2種、ナンまたはライス付き。",
        price: 950,
        image: "/images/double-curry-set.jpg",
      },
      {
        name: "Cheese Naan Set",
        nameJp: "チーズナンセット",
        description: "One curry with cheese naan.",
        descriptionJp: "カレー1種にチーズナン。",
        price: 990,
        image: "/images/cheese-naan.jpg",
      },
      {
        name: "Butter Chicken Curry Set",
        nameJp: "バターチキンカレーセット",
        description: "Butter chicken with naan or rice.",
        descriptionJp: "バターチキンに、ナンまたはライス。",
        price: 890,
        image: "/images/butter-chicken.jpg",
        spice: 1,
      },
      {
        name: "Saag Curry Set",
        nameJp: "サグカレーセット",
        description: "Spinach curry, chicken or keema.",
        descriptionJp: "ほうれん草のカレー、チキンまたはキーマ。",
        price: 830,
        image: "/images/saag-chicken.jpg",
        spice: 1,
      },
      {
        name: "Vegetable Curry Set",
        nameJp: "ベジタブルカレーセット",
        description: "Mixed vegetable curry with naan or rice.",
        descriptionJp: "ミックス野菜カレーに、ナンまたはライス。",
        price: 780,
        image: "/images/veg-curry.jpg",
        veg: true,
      },
      {
        name: "Keema Curry Set",
        nameJp: "キーマカレーセット",
        description: "Minced-meat curry with naan or rice.",
        descriptionJp: "挽肉のカレーに、ナンまたはライス。",
        price: 750,
        image: "/images/one-curry-set.jpg",
        spice: 2,
      },
    ],
  },
  {
    id: "curries",
    label: "Curries",
    labelJp: "カレー",
    kicker: "Choose your heat",
    kickerJp: "辛さをお選びください",
    note: "Served with naan or rice. Five spice levels.",
    noteJp: "ナンまたはライス付き。辛さは5段階。",
    dishes: [
      {
        name: "Butter Chicken",
        nameJp: "バターチキンカレー",
        description: "Mild, creamy tomato and butter curry.",
        descriptionJp: "まろやかなトマトバターのカレー。",
        price: 890,
        image: "/images/butter-chicken.jpg",
        spice: 1,
      },
      {
        name: "Mutton Curry",
        nameJp: "マトンカレー",
        description: "Bone-in mutton in a spiced onion gravy.",
        descriptionJp: "骨付きマトンを玉ねぎのグレイビーで。",
        price: 890,
        image: "/images/mutton-curry.jpg",
        spice: 2,
      },
      {
        name: "Seafood Curry",
        nameJp: "シーフードカレー",
        description: "Mixed seafood in a creamy curry.",
        descriptionJp: "魚介をクリーミーなカレーで。",
        price: 990,
        image: "/images/seafood-curry.jpg",
        spice: 1,
      },
      {
        name: "Saag Chicken",
        nameJp: "サグチキン",
        description: "Chicken in a spinach gravy.",
        descriptionJp: "チキンをほうれん草のグレイビーで。",
        price: 850,
        image: "/images/saag-chicken.jpg",
        spice: 1,
      },
      {
        name: "Dal Curry",
        nameJp: "ダルカレー",
        description: "Slow-cooked lentils.",
        descriptionJp: "じっくり煮込んだ豆のカレー。",
        price: 750,
        image: "/images/dal-curry.jpg",
        spice: 1,
        veg: true,
      },
      {
        name: "Vegetable Curry",
        nameJp: "野菜カレー",
        description: "Seasonal mixed-vegetable curry.",
        descriptionJp: "季節のミックス野菜カレー。",
        price: 780,
        image: "/images/veg-curry.jpg",
        spice: 1,
        veg: true,
      },
    ],
  },
  {
    id: "tandoor",
    label: "Tandoor",
    labelJp: "タンドール",
    kicker: "From the clay oven",
    kickerJp: "炭火の窯から",
    note: "Grilled to order.",
    noteJp: "ご注文ごとに焼き上げます。",
    dishes: [
      {
        name: "Tandoori Chicken",
        nameJp: "タンドリーチキン",
        description: "Marinated chicken from the clay oven.",
        descriptionJp: "漬け込んだ鶏肉を窯で焼き上げ。",
        price: 600,
        image: "/images/tandoori-platter.jpg",
        spice: 1,
      },
      {
        name: "Chicken Tikka",
        nameJp: "チキンティッカ",
        description: "Boneless chicken, charcoal-grilled.",
        descriptionJp: "骨なし鶏肉を炭火で。",
        price: 600,
        image: "/images/chicken-tikka.jpg",
        spice: 1,
      },
      {
        name: "Seekh Kebab",
        nameJp: "シークケバブ",
        description: "Spiced minced meat on skewers.",
        descriptionJp: "スパイスを効かせた挽肉の串焼き。",
        price: 550,
        image: "/images/seekh-kebab.jpg",
        spice: 2,
      },
    ],
  },
  {
    id: "naan",
    label: "Naan & Bread",
    labelJp: "ナン・パン",
    kicker: "Baked to order",
    kickerJp: "焼きたてを",
    note: "Free refills with any lunch set.",
    noteJp: "ランチセットはおかわり自由。",
    dishes: [
      {
        name: "Plain Naan",
        nameJp: "プレーンナン",
        description: "Soft tandoor-baked flatbread.",
        descriptionJp: "ふっくら焼いたプレーンナン。",
        price: 350,
        image: "/images/butter-naan.jpg",
        veg: true,
      },
      {
        name: "Garlic Naan",
        nameJp: "ガーリックナン",
        description: "Naan with garlic and butter.",
        descriptionJp: "ガーリックとバターのナン。",
        price: 450,
        image: "/images/garlic-naan.jpg",
        veg: true,
      },
      {
        name: "Cheese Naan",
        nameJp: "チーズナン",
        description: "Naan stuffed with melted cheese.",
        descriptionJp: "チーズを包んで焼いたナン。",
        price: 650,
        image: "/images/cheese-naan.jpg",
        veg: true,
      },
      {
        name: "Cheese Garlic Naan",
        nameJp: "チーズガーリックナン",
        description: "Cheese naan with garlic.",
        descriptionJp: "ガーリックを加えたチーズナン。",
        price: 700,
        image: "/images/cheese-garlic-naan.jpg",
        veg: true,
      },
      {
        name: "Mentai Cheese Naan",
        nameJp: "明太チーズナン",
        description: "Cheese naan with spicy cod roe.",
        descriptionJp: "明太子入りのチーズナン。",
        price: 750,
        image: "/images/mentai-cheese-naan.jpg",
        spice: 1,
      },
    ],
  },
  {
    id: "nepali",
    label: "Nepali",
    labelJp: "ネパール",
    kicker: "From the Himalaya",
    kickerJp: "ヒマラヤより",
    note: "Hand-made in house.",
    noteJp: "店内で手づくり。",
    dishes: [
      {
        name: "Momo",
        nameJp: "モモ",
        description: "Steamed dumplings with dipping sauce.",
        descriptionJp: "蒸し餃子、ディップソース添え。",
        price: 600,
        spice: 1,
      },
      {
        name: "Jhol Momo",
        nameJp: "ジョルモモ",
        description: "Momo in a warm sesame soup.",
        descriptionJp: "温かいごまスープのモモ。",
        price: 700,
        spice: 2,
      },
      {
        name: "Chow Mein",
        nameJp: "チョウメン",
        description: "Stir-fried noodles with vegetables.",
        descriptionJp: "野菜入りの焼きそば。",
        price: 750,
        spice: 1,
      },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    labelJp: "ドリンク",
    kicker: "To finish",
    kickerJp: "お供に",
    note: "Mango lassi is a house favourite.",
    noteJp: "マンゴーラッシーが人気です。",
    dishes: [
      {
        name: "Mango Lassi",
        nameJp: "マンゴーラッシー",
        description: "Thick yogurt drink with mango.",
        descriptionJp: "濃厚なマンゴーのヨーグルトドリンク。",
        price: 500,
        image: "/images/mango-lassi.jpg",
        veg: true,
      },
      {
        name: "Lassi",
        nameJp: "ラッシー",
        description: "Sweet yogurt drink.",
        descriptionJp: "甘いヨーグルトドリンク。",
        price: 450,
        veg: true,
      },
      {
        name: "Masala Chai",
        nameJp: "マサラチャイ",
        description: "Spiced milk tea.",
        descriptionJp: "スパイス入りのミルクティー。",
        price: 400,
        veg: true,
      },
    ],
  },
];
