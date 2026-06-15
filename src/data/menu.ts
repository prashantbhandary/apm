/**
 * Menu content — typography-first, no imagery.
 * Prices in Japanese yen. Bilingual: `*Jp` fields are used in Japanese mode.
 */

export type Spice = 0 | 1 | 2 | 3;

export type Dish = {
  name: string;
  nameJp?: string;
  description: string;
  descriptionJp?: string;
  price: number;
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

/** Signature dishes featured at the top of the menu section. */
export const signatures: Dish[] = [
  {
    name: "Apm Royal Butter Chicken",
    nameJp: "Apm ロイヤル バターチキン",
    description:
      "Clay-oven chicken folded through a velvet tomato gravy finished with fenugreek, honey and a slow swirl of cultured cream.",
    descriptionJp:
      "窯で焼いた鶏肉を、フェヌグリークと蜂蜜、発酵クリームを纏わせた滑らかなトマトグレイビーで包み込みました。",
    price: 1480,
    spice: 1,
    tags: ["House favourite", "Tandoor"],
    tagsJp: ["人気No.1", "タンドール"],
  },
  {
    name: "Himalayan Steam Momo",
    nameJp: "ヒマラヤ蒸しモモ",
    description:
      "Hand-pleated Nepali dumplings filled with spiced chicken and chive, served with a smoky sesame-tomato achar.",
    descriptionJp:
      "スパイス香る鶏肉とニラを包んだ手包みのネパール餃子。香ばしいごまとトマトのアチャールを添えて。",
    price: 980,
    spice: 2,
    tags: ["Nepali classic"],
    tagsJp: ["ネパールの定番"],
  },
  {
    name: "Lamb Rogan Josh Lazeez",
    nameJp: "ラム ローガンジョシュ ラジーズ",
    description:
      "Kashmiri lamb shoulder braised low for six hours with Mathania chillies, browned onion and warm whole spice.",
    descriptionJp:
      "カシミール産ラム肩肉を、マタニア唐辛子と飴色玉ねぎ、ホールスパイスで6時間じっくり煮込みました。",
    price: 1780,
    spice: 3,
    tags: ["Chef's reserve"],
    tagsJp: ["シェフ厳選"],
  },
];

export const menu: MenuCategory[] = [
  {
    id: "tandoor",
    label: "From the Tandoor",
    labelJp: "タンドール",
    kicker: "Clay oven · 480°C",
    kickerJp: "炭火の窯 · 480℃",
    note: "Marinated overnight, kissed by live charcoal.",
    noteJp: "一晩漬け込み、炭火でこんがりと。",
    dishes: [
      {
        name: "Murgh Malai Tikka",
        nameJp: "マライ チキンティッカ",
        description:
          "Cream-and-cashew marinated chicken thigh, cardamom, a whisper of green chilli.",
        descriptionJp:
          "生クリームとカシューナッツに漬けた鶏もも肉。カルダモンと青唐辛子をほのかに。",
        price: 1280,
        spice: 1,
      },
      {
        name: "Tandoori Prawns",
        nameJp: "タンドリー海老",
        description:
          "Tiger prawns, ajwain, smoked paprika and lime, charred to order.",
        descriptionJp:
          "大ぶりの海老を、アジョワンとスモークパプリカ、ライムで香ばしく焼き上げて。",
        price: 1680,
        spice: 2,
      },
      {
        name: "Paneer Sheek",
        nameJp: "パニール シーク",
        description:
          "Hand-pressed cottage cheese, mint, roasted bell pepper and onion.",
        descriptionJp: "自家製カッテージチーズに、ミントと焼きパプリカ、玉ねぎを添えて。",
        price: 1180,
        spice: 1,
        veg: true,
      },
      {
        name: "Seekh Kebab Lamb",
        nameJp: "シーク ケバブ（ラム）",
        description: "Minced lamb, garam masala, ginger, finished with chaat lime.",
        descriptionJp:
          "ラム挽肉にガラムマサラと生姜を効かせ、チャートライムで仕上げました。",
        price: 1380,
        spice: 2,
      },
    ],
  },
  {
    id: "curries",
    label: "Slow Curries",
    labelJp: "煮込みカレー",
    kicker: "Simmered, never rushed",
    kickerJp: "じっくり、ていねいに",
    note: "Ground fresh each morning. Choose your heat.",
    noteJp: "毎朝挽きたてのスパイスで。辛さはお選びいただけます。",
    dishes: [
      {
        name: "Butter Chicken",
        nameJp: "バターチキン",
        description: "Tomato, fenugreek, cultured cream, a touch of wild honey.",
        descriptionJp: "トマト、フェヌグリーク、発酵クリーム、そして野生の蜂蜜をひと匙。",
        price: 1480,
        spice: 1,
      },
      {
        name: "Lamb Rogan Josh",
        nameJp: "ラム ローガンジョシュ",
        description: "Kashmiri chilli, browned onion, six-hour braise.",
        descriptionJp: "カシミール唐辛子と飴色玉ねぎで、6時間の煮込み。",
        price: 1780,
        spice: 3,
      },
      {
        name: "Palak Paneer",
        nameJp: "パラックパニール",
        description: "Stone-ground spinach, garlic, hand-pressed paneer.",
        descriptionJp: "石臼で挽いたほうれん草とにんにく、自家製パニール。",
        price: 1280,
        spice: 1,
        veg: true,
      },
      {
        name: "Nepali Khasi Curry",
        nameJp: "ネパール カシ（山羊）カレー",
        description: "Goat on the bone, timur pepper, mustard oil, gentle heat.",
        descriptionJp: "骨付き山羊肉を、ティムール胡椒とマスタードオイルで穏やかな辛さに。",
        price: 1680,
        spice: 2,
      },
      {
        name: "Chana Masala",
        nameJp: "チャナマサラ",
        description: "Chickpea, ginger, tomato, dried mango — bright and earthy.",
        descriptionJp: "ひよこ豆に生姜、トマト、乾燥マンゴー。爽やかで滋味深い一品。",
        price: 1080,
        spice: 2,
        veg: true,
      },
    ],
  },
  {
    id: "nepali",
    label: "Nepali Table",
    labelJp: "ネパールの食卓",
    kicker: "From the Himalaya",
    kickerJp: "ヒマラヤより",
    note: "Soulful mountain cooking, the way home tastes.",
    noteJp: "故郷の味そのままに、心温まる山の料理。",
    dishes: [
      {
        name: "Steam Momo",
        nameJp: "蒸しモモ",
        description: "Hand-pleated dumplings, sesame-tomato achar.",
        descriptionJp: "手包みの餃子に、ごまとトマトのアチャールを添えて。",
        price: 980,
        spice: 2,
      },
      {
        name: "Jhol Momo",
        nameJp: "ジョル モモ",
        description: "Momo bathed in a warm, soupy timur-sesame broth.",
        descriptionJp: "ティムールとごまの温かなスープに浸したモモ。",
        price: 1120,
        spice: 2,
      },
      {
        name: "Thakali Dal Bhat",
        nameJp: "タカリ ダルバート",
        description:
          "Lentil, seasonal greens, pickle, rice — the complete Himalayan plate.",
        descriptionJp:
          "豆のスープ、季節の青菜、漬物、ごはん。ヒマラヤの定食をひと皿に。",
        price: 1380,
        spice: 1,
        veg: true,
      },
      {
        name: "Chicken Choila",
        nameJp: "チキン チョイラ",
        description: "Grilled chicken tossed with mustard oil, garlic and timur.",
        descriptionJp: "炙った鶏肉を、マスタードオイルとにんにく、ティムールで和えて。",
        price: 1180,
        spice: 3,
      },
    ],
  },
  {
    id: "breads",
    label: "Breads & Rice",
    labelJp: "パンとごはん",
    kicker: "Pulled from the oven",
    kickerJp: "窯から、できたてを",
    note: "Soft, blistered, made to order.",
    noteJp: "ふっくら香ばしく、ご注文ごとに焼き上げます。",
    dishes: [
      {
        name: "Garlic Butter Naan",
        nameJp: "ガーリックバターナン",
        description: "Stretched thin, brushed with cultured butter and garlic.",
        descriptionJp: "薄く伸ばし、発酵バターとにんにくを塗って焼き上げました。",
        price: 420,
        veg: true,
      },
      {
        name: "Keema Kulcha",
        nameJp: "キーマ クルチャ",
        description: "Stuffed with spiced lamb mince and onion seed.",
        descriptionJp: "スパイス香るラム挽肉とニゲラシードを包んで。",
        price: 680,
      },
      {
        name: "Saffron Biryani",
        nameJp: "サフラン ビリヤニ",
        description: "Layered basmati, fried onion, mint, your choice of filling.",
        descriptionJp:
          "バスマティ米にフライドオニオンとミントを重ねて。具材はお選びいただけます。",
        price: 1380,
        spice: 1,
      },
      {
        name: "Jeera Rice",
        nameJp: "ジーラライス",
        description: "Basmati tempered with cumin and ghee.",
        descriptionJp: "クミンとギーで香り付けしたバスマティ米。",
        price: 380,
        veg: true,
      },
    ],
  },
  {
    id: "sweets",
    label: "Sweets & Chai",
    labelJp: "デザートとチャイ",
    kicker: "A warm close",
    kickerJp: "締めくくりに、ひと息",
    note: "House-made daily.",
    noteJp: "毎日手づくりしています。",
    dishes: [
      {
        name: "Gulab Jamun",
        nameJp: "グラブジャムン",
        description: "Warm milk dumplings in cardamom-rose syrup.",
        descriptionJp: "カルダモンとローズのシロップに浸した、温かなミルク団子。",
        price: 580,
        veg: true,
      },
      {
        name: "Pistachio Kulfi",
        nameJp: "ピスタチオ クルフィ",
        description: "Slow-churned condensed milk ice, crushed pistachio.",
        descriptionJp: "練乳をじっくり練り上げた氷菓に、砕いたピスタチオを。",
        price: 620,
        veg: true,
      },
      {
        name: "Masala Chai",
        nameJp: "マサラチャイ",
        description: "Assam, ginger, clove, cardamom — simmered, not steeped.",
        descriptionJp: "アッサム茶に生姜、クローブ、カルダモン。煮出して仕上げます。",
        price: 420,
        veg: true,
      },
      {
        name: "Mango Lassi",
        nameJp: "マンゴーラッシー",
        description: "Alphonso pulp whipped with thick yoghurt.",
        descriptionJp: "アルフォンソマンゴーを濃厚なヨーグルトと合わせて。",
        price: 520,
        veg: true,
      },
    ],
  },
];
