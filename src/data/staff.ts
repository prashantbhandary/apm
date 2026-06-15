/**
 * Staff & chefs — the faces behind the kitchen.
 * Swap `image` URLs for real staff photos (drop files in /public/images).
 */

export type StaffMember = {
  name: string;
  role: string;
  roleJp?: string;
  origin: string;
  originJp?: string;
  bio: string;
  bioJp?: string;
  image: string;
};

export const staff: StaffMember[] = [
  {
    name: "Anil Pradhan",
    role: "Head Chef · Founder",
    roleJp: "総料理長 · 創業者",
    origin: "Kathmandu, Nepal",
    originJp: "ネパール・カトマンズ",
    bio: "Twenty years between Kathmandu and Delhi before bringing the family table to Kawasaki.",
    bioJp: "カトマンズとデリーで20年。家族の食卓を川崎へ持ち込みました。",
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Priya Sharma",
    role: "Tandoor Chef",
    roleJp: "タンドール担当",
    origin: "Amritsar, India",
    originJp: "インド・アムリトサル",
    bio: "Keeper of the fire — naan, tikka and the steady rhythm of the clay oven.",
    bioJp: "炎の番人。ナン、ティッカ、そして窯の確かなリズムを守ります。",
    image:
      "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Bishnu Gurung",
    role: "Momo & Curry Chef",
    roleJp: "モモ・カレー担当",
    origin: "Pokhara, Nepal",
    originJp: "ネパール・ポカラ",
    bio: "Thirteen pleats a momo, thousands a day — the calm hands of the Himalaya.",
    bioJp: "モモひとつに十三のひだ。一日に幾千も包む、ヒマラヤの静かな手。",
    image:
      "https://images.unsplash.com/photo-1581349485608-9469926a8e5e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Saya Tanaka",
    role: "Host & Sommelier",
    roleJp: "ホール · ソムリエ",
    origin: "Kawasaki, Japan",
    originJp: "日本・川崎",
    bio: "Pairs every plate with the right pour and the warmest welcome at the door.",
    bioJp: "一皿ごとに最適な一杯を。扉口で最も温かなおもてなしを添えます。",
    image:
      "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?auto=format&fit=crop&w=800&q=80",
  },
];
