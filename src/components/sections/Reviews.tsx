"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Star, Quote, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { reviews } from "@/data/reviews";
import { restaurant } from "@/data/restaurant";
import { useLang } from "@/i18n/LanguageProvider";

const luxe = [0.22, 1, 0.36, 1] as const;
const AUTOPLAY_MS = 6000;

/** Social proof — one real Google review at a time, gently auto-rotating. */
export function Reviews() {
  const { t } = useLang();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (dir: number) =>
      setIndex((i) => (i + dir + reviews.length) % reviews.length),
    [],
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % reviews.length), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused]);

  const review = reviews[index];

  return (
    <section
      id="reviews"
      className="paper-grain relative scroll-mt-24 overflow-hidden bg-espresso py-10 text-cream sm:py-12 lg:py-14"
    >
      {/* warm ambient lighting — candle-glow corners + vignette */}
      <div className="pointer-events-none absolute -top-24 left-1/4 size-[32rem] rounded-full bg-saffron/12 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-32 right-1/5 size-[30rem] rounded-full bg-clay/15 blur-[130px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_50%,transparent_55%,rgba(0,0,0,0.45))]" />

      <div className="relative mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          tone="light"
          kicker={t.reviews.kicker}
          title={t.reviews.title}
        />

        {/* — Single rotating review card ------------------------- */}
        <Reveal className="mt-7 lg:mt-9" delay={0.1}>
          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative overflow-hidden rounded-[var(--radius-card)] border border-cream/10 bg-cream/[0.04] px-6 py-6 backdrop-blur-sm sm:px-16 sm:py-8">
              <Quote
                className="mx-auto size-7 text-saffron/40"
                strokeWidth={1.5}
              />
              <AnimatePresence mode="wait">
                <motion.figure
                  key={index}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.5, ease: luxe }}
                  className="mx-auto mt-4 flex max-w-2xl flex-col items-center text-center"
                >
                  <blockquote className="font-display text-xl leading-relaxed text-cream text-pretty sm:text-2xl">
                    “{review.quote}”
                  </blockquote>
                  <Stars value={review.rating} className="mt-4 size-4" />
                  <figcaption className="mt-3 text-sm text-cream-muted">
                    <span className="font-medium text-cream">{review.author}</span>
                    {review.role ? ` · ${review.role}` : ""}
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            {/* arrows */}
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous review"
              className="absolute -left-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-cream/20 bg-espresso/70 text-cream/80 backdrop-blur transition-colors hover:bg-cream/10 hover:text-cream sm:-left-5"
            >
              <ChevronLeft className="size-5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next review"
              className="absolute -right-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-cream/20 bg-espresso/70 text-cream/80 backdrop-blur transition-colors hover:bg-cream/10 hover:text-cream sm:-right-5"
            >
              <ChevronRight className="size-5" strokeWidth={1.5} />
            </button>
          </div>
        </Reveal>

        {/* dots */}
        <div className="mt-5 flex justify-center gap-2">
          {reviews.map((r, i) => (
            <button
              key={r.author}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Review ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-saffron" : "w-1.5 bg-cream/25 hover:bg-cream/40"
              }`}
            />
          ))}
        </div>

        <div className="mt-7 flex justify-center">
          <a
            href={restaurant.contact.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3 text-sm font-medium text-cream transition-colors duration-300 hover:border-saffron hover:bg-saffron hover:text-espresso"
          >
            {t.reviews.cta}
            <ArrowUpRight
              className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={2}
            />
          </a>
        </div>
      </div>
    </section>
  );
}

function Stars({ value, className }: { value: number; className?: string }) {
  return (
    <div className="flex justify-center gap-0.5 text-saffron">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={className ?? "size-3.5"}
          strokeWidth={0}
          fill={i < value ? "currentColor" : "rgba(255,255,255,0.18)"}
        />
      ))}
    </div>
  );
}
