"use client";

import { motion } from "motion/react";
import { useLang } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";
import type { Lang } from "@/i18n/config";

const options: { id: Lang; label: string }[] = [
  { id: "en", label: "EN" },
  { id: "jp", label: "日本語" },
];

/** Segmented EN / 日本語 switch with a sliding indicator. */
export function LanguageToggle({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const { lang, setLang, t } = useLang();
  const isLight = tone === "light";

  return (
    <div
      role="group"
      aria-label={t.common.language}
      className={cn(
        "relative inline-flex items-center rounded-full border p-0.5",
        isLight ? "border-cream/25" : "border-ink/15",
        className,
      )}
    >
      {options.map((opt) => {
        const active = lang === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => setLang(opt.id)}
            aria-pressed={active}
            className={cn(
              "relative isolate rounded-full px-3 py-1 text-xs font-medium tracking-wide transition-colors duration-300",
              active
                ? isLight
                  ? "text-espresso"
                  : "text-cream"
                : isLight
                  ? "text-cream/60 hover:text-cream"
                  : "text-ink-muted hover:text-ink",
            )}
          >
            {active && (
              <motion.span
                layoutId={`lang-pill-${tone}`}
                className={cn(
                  "absolute inset-0 -z-10 rounded-full",
                  isLight ? "bg-cream" : "bg-espresso",
                )}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
            )}
            <span className="relative z-10">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}
