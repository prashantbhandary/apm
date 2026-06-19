"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
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

  // One quiet parallax move on the content; everything else stays put.
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="paper-grain relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-soot"
    >
      {/* — Tandoor glow: warmth rising from the base of the page ---- */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[70%]"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 118%, var(--color-ember) 0%, color-mix(in oklab, var(--color-marigold) 55%, transparent) 26%, transparent 60%)",
          opacity: 0.42,
        }}
      />
      {/* faint indigo wash at the top — the block-print / aizome note */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[55%]"
        style={{
          background:
            "linear-gradient(to bottom, color-mix(in oklab, var(--color-indigo) 38%, transparent), transparent)",
        }}
      />

      {/* — Main grid ---------------------------------------------- */}
      <div className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-12 px-6 pb-12 pt-32 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-12 lg:pt-28">
        {/* — Masthead --------------------------------------------- */}
        <motion.div
          style={{ y: contentY, opacity: fade }}
          className="lg:col-span-7"
        >
          {/* Tri-script eyebrow — Devanagari · Japanese/English · year */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: luxe }}
            className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-marigold"
          >
            <span className="text-rice/90">भारतीय · नेपाली</span>
            <span className="mx-2.5 text-brass">—</span>
            {t.hero.eyebrow}
            <span className="mx-2.5 text-brass">·</span>
            Est. {restaurant.established}
          </motion.div>

          <h1 className="mt-6 text-display font-medium text-rice [text-wrap:balance] text-[clamp(3.1rem,8.5vw,7rem)] leading-[0.96]">
            <span className="block">
              <RevealText text={t.hero.line1} delay={0.35} trigger="mount" />
            </span>
            <span className="block italic text-marigold">
              <RevealText text={t.hero.line2} delay={0.6} trigger="mount" />
            </span>
            <span className="block">
              <RevealText text={t.hero.line3} delay={0.9} trigger="mount" />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: luxe }}
            className="mt-7 max-w-md text-lg leading-relaxed text-rice-muted text-pretty"
          >
            {t.hero.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4, ease: luxe }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button
              href="#menu"
              className="border-ember bg-ember text-rice hover:bg-ember-bright"
              arrow
            >
              {t.hero.exploreMenu}
            </Button>
            <Button
              href={restaurant.orderUrl}
              className="border-rice/25 text-rice hover:bg-rice hover:text-soot"
            >
              {t.hero.reserve}
            </Button>
          </motion.div>
        </motion.div>

        {/* — Single framed photograph ----------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.7, ease: luxe }}
          className="relative hidden lg:col-span-5 lg:block"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative ml-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2px] border border-brass/45 shadow-[0_50px_120px_-40px_rgba(0,0,0,0.85)]"
          >
            {/* Warm dining-room interior. Swap for a real photo of the
                room when available (drop it in /public/images). */}
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80"
              alt="The warm, candle-lit dining room at Apm Curry"
              fill
              priority
              sizes="(max-width: 1024px) 0px, 28rem"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-soot/70 via-transparent to-soot/10" />
            <div className="absolute inset-0 ring-1 ring-inset ring-rice/10" />
            {/* mono tag — data, not decoration */}
            <span className="absolute bottom-4 left-4 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-rice/85">
              <span className="text-marigold">●</span> Dine-in · Kawasaki
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* — Metadata strip: the stat cards, retyped as a rule ------ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6, ease: luxe }}
        className="relative z-10 border-t border-brass/20"
      >
        <dl className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-3 px-6 py-5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-rice-muted sm:px-8 lg:px-12">
          <MetaItem label="Est." value={restaurant.established} />
          <Divider />
          <MetaItem label="Cuisine" value={t.hero.cuisine} />
          <Divider />
          <MetaItem label="Where" value={`${t.hero.city} · 神奈川`} />
          <Divider />
          <MetaItem
            label="Rated"
            value={`★ ${restaurant.rating.toFixed(1)} / ${restaurant.reviewCount}`}
            accent
          />

          {/* scroll cue, tucked to the end of the rule */}
          <motion.a
            href="#story"
            style={{ opacity: fade }}
            aria-label="Scroll to story"
            className="ml-auto hidden items-center gap-2 text-rice/55 transition-colors hover:text-rice sm:flex"
          >
            {t.hero.scroll}
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="size-3.5" strokeWidth={1.5} />
            </motion.span>
          </motion.a>
        </dl>
      </motion.div>
    </section>
  );
}

function MetaItem({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="flex items-baseline gap-2">
      <dt className="text-brass">{label}</dt>
      <dd className={accent ? "text-marigold" : "text-rice"}>{value}</dd>
    </div>
  );
}

function Divider() {
  return <span aria-hidden className="hidden h-3 w-px bg-brass/25 sm:block" />;
}
