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
  body: "Apm Curry began with a simple longing — to taste home. From the spice markets of the Indian plains to the dumpling kitchens of the Nepali hills, we carried our grandmothers' recipes to Kawasaki and set them gently on the fire.",
  bodyJp:
    "Apm Curry は「故郷の味をもう一度」という素朴な想いから始まりました。インドの平野のスパイス市場から、ネパールの山あいの台所まで。祖母から受け継いだレシピを川崎へ携え、そっと火にかけています。",
};

export const storyBlocks: StoryBlock[] = [
  {
    kicker: "The Craft",
    kickerJp: "技",
    title: "Spices ground at first light",
    titleJp: "夜明けに挽く、スパイス",
    body: "Every morning before service, whole coriander, cumin and Kashmiri chilli are roasted and stone-ground in-house. Nothing from a jar, nothing left over. The aroma that greets you at the door is the same one that fills our kitchen at dawn.",
    bodyJp:
      "毎朝、開店前にコリアンダーやクミン、カシミール唐辛子をホールから焙煎し、店内で石臼挽きにします。瓶詰めも作り置きもありません。扉を開けた時の香りは、夜明けの厨房に満ちるそれと同じです。",
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
    body: "Our tandoor burns at 480°C from open to close, charring naan in ninety seconds and sealing the smoke into every skewer. It is the oldest technology in our kitchen and still the most loved — a living fire at the heart of the room.",
    bodyJp:
      "タンドール窯は開店から閉店まで480℃で燃え続け、ナンを90秒で焼き上げ、串焼きに薫香を閉じ込めます。厨房で最も古く、今なお最も愛される——店の中心に息づく生きた炎です。",
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
    body: "There is no machine for this. Each Himalayan dumpling is folded by hand — thirteen pleats, a practised twist — the way it has been done in mountain kitchens for generations. Slower, yes. But you can taste the difference.",
    bodyJp:
      "これに機械はありません。ヒマラヤの餃子はひとつずつ手で包みます。十三のひだ、慣れた手つきのひねり——山あいの台所で何世代も受け継がれてきた方法です。手間はかかりますが、その違いは味に表れます。",
    image:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Hands pleating fresh momo dumplings",
    stat: { value: "13", label: "Pleats in every momo", labelJp: "ひだを、ひとつのモモに" },
  },
];
