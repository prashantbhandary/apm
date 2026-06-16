/**
 * Editorial storytelling blocks for the About section.
 * Rendered as alternating image/content splits. Bilingual `*Jp` fields.
 */

export type StoryBlock = {
  kicker: string;
  kickerJp?: string;
  title: string;
  titleJp?: string;
  body: string;
  bodyJp?: string;
  image: string;
  imageAlt: string;
  stat?: { value: string; label: string; labelJp?: string };
};

export const storyIntro = {
  kicker: "Our Story",
  kickerJp: "私たちの物語",
  title: "Two homelands, one warm table",
  titleJp: "ふたつの故郷、ひとつの温かな食卓",
  body: "A simple longing to taste home — our grandmothers' recipes from the Indian plains and the Nepali hills, carried to Kawasaki.",
  bodyJp:
    "「故郷の味をもう一度」。インドとネパールで受け継いだ祖母のレシピを、川崎へ持ち込みました。",
};

export const storyBlocks: StoryBlock[] = [
  {
    kicker: "The Craft",
    kickerJp: "技",
    title: "Spices ground at first light",
    titleJp: "夜明けに挽く、スパイス",
    body: "Every morning we roast and stone-grind whole spices in-house. Nothing from a jar — the aroma at the door is the one that fills our kitchen at dawn.",
    bodyJp:
      "毎朝、ホールスパイスを店内で焙煎し石臼挽きに。瓶詰めは使いません。扉口の香りは、夜明けの厨房そのものです。",
    image:
      "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Hand grinding whole spices on a stone in the kitchen",
    stat: { value: "32", label: "Spices, blended by hand", labelJp: "種のスパイスを手作業で" },
  },
  {
    kicker: "The Fire",
    kickerJp: "炎",
    title: "A clay oven that never sleeps",
    titleJp: "眠らない、炭火の窯",
    body: "Our tandoor burns at 480°C all day — naan in ninety seconds, smoke sealed into every skewer. A living fire at the heart of the room.",
    bodyJp:
      "タンドール窯は終日480℃。ナンは90秒、串焼きには薫香を。店の中心に息づく生きた炎です。",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Tandoor clay oven glowing with charcoal fire",
    stat: { value: "480°C", label: "Live charcoal tandoor", labelJp: "炭火のタンドール" },
  },
  {
    kicker: "The Hands",
    kickerJp: "手",
    title: "Momo, pleated one by one",
    titleJp: "ひとつひとつ、手で包むモモ",
    body: "No machine for this. Each momo is folded by hand — thirteen pleats, the way mountain kitchens have done for generations. You can taste the difference.",
    bodyJp:
      "機械は使いません。モモはひとつずつ手包み、十三のひだ。山の台所に受け継がれた手仕事は、味に表れます。",
    image:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Hands pleating fresh momo dumplings",
    stat: { value: "13", label: "Pleats in every momo", labelJp: "ひだを、ひとつのモモに" },
  },
];
