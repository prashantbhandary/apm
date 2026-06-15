"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { storyBlocks, storyIntro, type StoryBlock } from "@/data/story";
import { useLang } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

export function About() {
  const { pick } = useLang();
  return (
    <section id="story" className="relative scroll-mt-24 bg-ivory paper-grain">
      {/* Intro */}
      <div className="mx-auto max-w-7xl px-6 pt-24 sm:px-8 sm:pt-32 lg:px-12 lg:pt-40">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow flex items-center gap-3 text-clay">
                <span className="h-px w-8 bg-clay/40" />
                {pick(storyIntro.kicker, storyIntro.kickerJp)}
              </span>
            </Reveal>
            <h2 className="mt-6 text-display text-4xl text-ink sm:text-5xl lg:text-6xl text-balance">
              <RevealText text={pick(storyIntro.title, storyIntro.titleJp)} />
            </h2>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <p className="text-lg leading-relaxed text-ink-soft text-pretty">
                {pick(storyIntro.body, storyIntro.bodyJp)}
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Alternating editorial blocks */}
      <div className="mx-auto mt-20 max-w-7xl px-6 pb-24 sm:px-8 sm:pb-32 lg:px-12 lg:pb-40">
        <div className="flex flex-col gap-24 lg:gap-32">
          {storyBlocks.map((block, i) => (
            <StorySplit key={block.title} block={block} reversed={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StorySplit({
  block,
  reversed,
}: {
  block: StoryBlock;
  reversed: boolean;
}) {
  const { pick } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div
      ref={ref}
      className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
    >
      {/* Image */}
      <Reveal
        y={40}
        className={cn("group relative", reversed && "lg:order-2")}
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] shadow-[0_40px_90px_-40px_rgba(22,17,12,0.5)]">
          <motion.div style={{ y: imgY }} className="absolute inset-0 scale-110">
            <Image
              src={block.image}
              alt={block.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-luxe)] group-hover:scale-105"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/30 to-transparent" />

          {/* Stat overlay */}
          {block.stat && (
            <div className="absolute bottom-5 left-5 rounded-2xl border border-white/50 bg-paper/90 px-5 py-3 backdrop-blur-md shadow-lg">
              <p className="font-display text-3xl font-semibold text-clay">
                {block.stat.value}
              </p>
              <p className="text-[0.7rem] uppercase tracking-[0.18em] text-ink-muted">
                {pick(block.stat.label, block.stat.labelJp)}
              </p>
            </div>
          )}
        </div>
      </Reveal>

      {/* Content */}
      <div className={cn(reversed && "lg:order-1")}>
        <Reveal>
          <span className="eyebrow text-clay">
            {pick(block.kicker, block.kickerJp)}
          </span>
        </Reveal>
        <h3 className="mt-4 text-display text-3xl text-ink sm:text-4xl lg:text-[2.75rem] text-balance">
          <RevealText text={pick(block.title, block.titleJp)} />
        </h3>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft text-pretty sm:text-lg">
            {pick(block.body, block.bodyJp)}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-8 h-px w-24 gold-line" />
        </Reveal>
      </div>
    </div>
  );
}
