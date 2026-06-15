import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { restaurant } from "@/data/restaurant";
import { LanguageProvider } from "@/i18n/LanguageProvider";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://apmcurry.jp"),
  title: {
    default: `${restaurant.name} — Authentic Indian & Nepali Cuisine in Kawasaki`,
    template: `%s · ${restaurant.name}`,
  },
  description:
    "Apm Curry brings the warmth of authentic Indian and Nepali cooking to Kawasaki — clay-oven breads, slow-simmered curries and handcrafted momo, served in a refined, candle-lit setting.",
  keywords: [
    "Indian restaurant Kawasaki",
    "Nepali restaurant Kawasaki",
    "curry Kawasaki",
    "momo",
    "tandoori",
    "Apm Curry",
  ],
  openGraph: {
    title: `${restaurant.name} — Authentic Indian & Nepali Cuisine`,
    description:
      "Clay-oven breads, slow-simmered curries and handcrafted momo in the heart of Kawasaki.",
    type: "website",
    locale: "en_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
