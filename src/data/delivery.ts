/**
 * Online ordering / delivery partners.
 * Swap `url` for your real store links on each platform.
 */

export type DeliveryPartner = {
  name: string;
  /** Short romaji/label shown as the monogram badge. */
  badge: string;
  tagline: string;
  taglineJp?: string;
  eta: string;
  etaJp?: string;
  url: string;
  /** Brand accent color. */
  color: string;
};

export const deliveryPartners: DeliveryPartner[] = [
  {
    name: "Uber Eats",
    badge: "Uber",
    tagline: "Fast city-wide delivery",
    taglineJp: "市内へスピーディーにお届け",
    eta: "25–40 min",
    etaJp: "25〜40分",
    url: "https://www.ubereats.com",
    color: "#06C167",
  },
  {
    name: "Wolt",
    badge: "Wolt",
    tagline: "Live order tracking",
    taglineJp: "リアルタイムで配達状況を確認",
    eta: "30–45 min",
    etaJp: "30〜45分",
    url: "https://wolt.com",
    color: "#00C2E8",
  },
  {
    name: "Demae-can",
    badge: "出前",
    tagline: "Japan's classic delivery",
    taglineJp: "おなじみの出前館",
    eta: "30–50 min",
    etaJp: "30〜50分",
    url: "https://demae-can.com",
    color: "#E60012",
  },
];
