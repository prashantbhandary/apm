"use client";

import { motion } from "motion/react";
import { useLang } from "@/i18n/LanguageProvider";

/** Editorial running band — adds rhythm between sections. */
export function Marquee() {
  const { t } = useLang();
  const loop = [...t.marquee, ...t.marquee];
  return (
    <div className="relative overflow-hidden border-y border-cream/10 bg-charcoal py-6">
      <motion.div
        className="flex w-max gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-12 font-display text-xl text-cream/70 sm:text-2xl"
          >
            {item}
            <span className="text-saffron">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
