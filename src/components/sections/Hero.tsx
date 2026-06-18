"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Star, MapPin, UtensilsCrossed, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { RevealText } from "@/components/motion/RevealText";
import { restaurant } from "@/data/restaurant";
import { useLang } from "@/i18n/LanguageProvider";

const luxe = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { t } = useLang();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax layers
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const dishY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="paper-grain relative min-h-[100svh] w-full overflow-hidden bg-espresso"
    >
      {/* — Background image + cinematic gradients ------------------ */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10 scale-110">
        {/* Ambiance — warm dining-room interior. Swap for a real photo of
            the restaurant when available (drop it in /public/images). */}
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=80"
          alt="The warm dining room at Apm Curry"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-espresso via-espresso/80 to-espresso/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-espresso via-transparent to-espresso/60" />

      <div className="mx-auto grid min-h-[100svh] max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-32 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12 lg:pt-24">
        {/* — Left: headline + copy + CTAs ------------------------- */}
        <motion.div
          style={{ y: contentY, opacity: fade }}
          className="lg:col-span-6 xl:col-span-6"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: luxe }}
            className="eyebrow inline-flex items-center gap-3 text-saffron-light"
          >
            <span className="h-px w-8 bg-saffron-light/50" />
            {t.hero.eyebrow} · Est. {restaurant.established}
          </motion.span>

          <h1 className="mt-7 text-display text-cream text-[clamp(3rem,8vw,6.5rem)]">
            <span className="block">
              <RevealText text={t.hero.line1} delay={0.35} trigger="mount" />
            </span>
            <span className="block italic text-saffron-light">
              <RevealText text={t.hero.line2} delay={0.6} trigger="mount" />
            </span>
            <span className="block">
              <RevealText text={t.hero.line3} delay={0.9} trigger="mount" />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: luxe }}
            className="mt-8 max-w-md text-lg leading-relaxed text-cream-muted text-pretty"
          >
            {t.hero.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4, ease: luxe }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button
              href="#menu"
              className="bg-saffron text-espresso hover:bg-saffron-light border-saffron"
              arrow
            >
              {t.hero.exploreMenu}
            </Button>
            <Button href={restaurant.orderUrl} variant="light">
              {t.hero.reserve}
            </Button>
          </motion.div>
        </motion.div>

        {/* — Right: floating dish + stat cards -------------------- */}
        <motion.div
          style={{ y: dishY }}
          className="relative hidden lg:col-span-6 lg:block xl:col-span-6"
        >
          <FloatingDish />
        </motion.div>
      </div>

      {/* — Scroll cue --------------------------------------------- */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute inset-x-0 bottom-7 flex justify-center"
      >
        <motion.a
          href="#story"
          aria-label="Scroll to story"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="flex flex-col items-center gap-2 text-cream/60 transition-colors hover:text-cream"
        >
          <span className="text-[0.6rem] uppercase tracking-[0.3em]">
            {t.hero.scroll}
          </span>
          <motion.span
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="size-4" strokeWidth={1.5} />
          </motion.span>
        </motion.a>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 *  Floating dish composition with orbiting stat cards
 * ------------------------------------------------------------------ */
function FloatingDish() {
  const { t } = useLang();
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
      {/* Glow ring */}
      <div className="absolute inset-6 rounded-full bg-saffron/20 blur-3xl" />

      {/* Main image — the dining room. Swap for a real interior photo of
          the restaurant when available (drop it in /public/images). */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.6, delay: 0.6, ease: luxe }}
        className="relative h-full w-full"
      >
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="relative h-full w-full overflow-hidden rounded-full border border-cream/15 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)]"
        >
          <Image
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1100&q=80"
            alt="The warm dining room at Apm Curry"
            fill
            priority
            sizes="(max-width: 1024px) 0px, 34rem"
            className="object-cover"
          />
          <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-cream/10" />
        </motion.div>
      </motion.div>

      {/* Stat card — rating */}
      <FloatCard
        delay={1.1}
        float={9}
        className="-left-6 top-10 xl:-left-12"
      >
        <span className="grid size-10 place-items-center rounded-full bg-saffron/15 text-saffron-light">
          <Star className="size-5" fill="currentColor" strokeWidth={0} />
        </span>
        <div className="leading-tight">
          <p className="font-display text-2xl font-semibold text-ink">
            {restaurant.rating.toFixed(1)}
          </p>
          <p className="text-[0.7rem] text-ink-muted">
            {restaurant.reviewCount.toLocaleString()} {t.hero.ratingLabel}
          </p>
        </div>
      </FloatCard>

      {/* Stat card — cuisine */}
      <FloatCard
        delay={1.35}
        float={12}
        className="-right-4 top-1/3 xl:-right-10"
      >
        <span className="grid size-10 place-items-center rounded-full bg-clay/15 text-clay">
          <UtensilsCrossed className="size-5" strokeWidth={1.5} />
        </span>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-ink">{t.hero.cuisine}</p>
          <p className="text-[0.7rem] text-ink-muted">{t.hero.cuisineSub}</p>
        </div>
      </FloatCard>

      {/* Stat card — location */}
      <FloatCard
        delay={1.55}
        float={10}
        className="bottom-8 left-1/4"
      >
        <span className="grid size-10 place-items-center rounded-full bg-espresso/10 text-espresso">
          <MapPin className="size-5" strokeWidth={1.5} />
        </span>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-ink">{t.hero.city}</p>
          <p className="text-[0.7rem] text-ink-muted">{t.hero.region}</p>
        </div>
      </FloatCard>
    </div>
  );
}

function FloatCard({
  children,
  className,
  delay,
  float,
}: {
  children: React.ReactNode;
  className?: string;
  delay: number;
  float: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay, ease: luxe }}
      className={`absolute z-10 ${className ?? ""}`}
    >
      <motion.div
        animate={{ y: [0, -float, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay,
        }}
        className="flex items-center gap-3 rounded-2xl border border-white/60 bg-paper/90 px-4 py-3 shadow-[0_20px_50px_-20px_rgba(22,17,12,0.45)] backdrop-blur-md"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
