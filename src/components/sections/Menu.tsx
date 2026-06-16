"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Leaf } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpiceMeter } from "@/components/ui/SpiceMeter";
import { Button } from "@/components/ui/Button";
import { menu, signatures, type Dish } from "@/data/menu";
import { restaurant } from "@/data/restaurant";
import { useLang } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

const yen = (n: number) => `¥${n.toLocaleString()}`;
const luxe = [0.22, 1, 0.36, 1] as const;

export function Menu() {
  const { t, pick } = useLang();
  const [active, setActive] = useState(menu[0].id);
  const category = menu.find((c) => c.id === active) ?? menu[0];

  return (
    <section
      id="menu"
      className="paper-grain relative scroll-mt-24 overflow-hidden bg-espresso py-14 text-cream sm:py-20 lg:py-24"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 size-[40rem] -translate-x-1/2 rounded-full bg-saffron/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          tone="light"
          kicker={t.menu.kicker}
          title={t.menu.title}
          description={t.menu.description}
        />

        {/* — Signature dishes -------------------------------------- */}
        <div className="mt-10 grid gap-5 lg:mt-12 lg:grid-cols-3">
          {signatures.map((dish, i) => (
            <Reveal key={dish.name} delay={i * 0.1} y={36}>
              <SignatureCard dish={dish} index={i} pick={pick} />
            </Reveal>
          ))}
        </div>

        {/* — Category tabs ----------------------------------------- */}
        <div className="mt-14 lg:mt-16">
          <Reveal>
            <div className="no-scrollbar -mx-6 flex gap-2 overflow-x-auto px-6 sm:justify-center">
              {menu.map((c) => {
                const isActive = c.id === active;
                return (
                  <button
                    key={c.id}
                    onClick={() => setActive(c.id)}
                    className={cn(
                      "relative isolate whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition-colors duration-300",
                      isActive
                        ? "text-espresso"
                        : "text-cream/60 hover:text-cream",
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="menu-tab"
                        className="absolute inset-0 -z-10 rounded-full bg-saffron"
                        transition={{ duration: 0.5, ease: luxe }}
                      />
                    )}
                    <span className="relative z-10">
                      {pick(c.label, c.labelJp)}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* — Active category list -------------------------------- */}
          <div className="mx-auto mt-12 max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: luxe }}
              >
                <div className="mb-10 flex flex-col items-center gap-1 text-center">
                  <span className="eyebrow text-saffron-light">
                    {pick(category.kicker, category.kickerJp)}
                  </span>
                  <p className="text-sm italic text-cream-muted">
                    {pick(category.note, category.noteJp)}
                  </p>
                </div>

                <ul className="flex flex-col">
                  {category.dishes.map((dish, i) => (
                    <motion.li
                      key={dish.name}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: i * 0.07,
                        ease: luxe,
                      }}
                    >
                      <MenuRow dish={dish} pick={pick} />
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <Reveal className="mt-16 flex justify-center">
          <Button
            href={restaurant.orderUrl}
            variant="light"
            arrow
            className="border-cream/30"
          >
            {t.menu.reserve}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

type Pick = (en: string, jp?: string) => string;

function SignatureCard({
  dish,
  index,
  pick,
}: {
  dish: Dish;
  index: number;
  pick: Pick;
}) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-cream/10 bg-cream/[0.03] transition-colors duration-500 hover:border-saffron/40 hover:bg-cream/[0.06]">
      {dish.image && (
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover transition-transform duration-[1.1s] ease-[var(--ease-luxe)] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent" />
          <span className="absolute left-4 top-4 font-display text-4xl font-light text-cream/70">
            0{index + 1}
          </span>
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2">
          {dish.tags?.[0] && (
            <span className="rounded-full border border-saffron/30 px-2.5 py-0.5 text-[0.62rem] uppercase tracking-[0.15em] text-saffron-light">
              {pick(dish.tags[0], dish.tagsJp?.[0])}
            </span>
          )}
          {dish.veg && <Leaf className="size-3.5 text-emerald-400/80" />}
        </div>
        <h3 className="mt-2 font-display text-2xl text-cream">
          {pick(dish.name, dish.nameJp)}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-cream-muted">
          {pick(dish.description, dish.descriptionJp)}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-cream/10 pt-4">
          <span className="font-display text-xl text-saffron-light">
            {yen(dish.price)}
          </span>
          {dish.spice ? <SpiceMeter level={dish.spice} /> : null}
        </div>
      </div>
    </div>
  );
}

function MenuRow({ dish, pick }: { dish: Dish; pick: Pick }) {
  return (
    <div className="group flex items-center gap-4 border-b border-cream/10 py-4 transition-colors duration-300 hover:border-saffron/30">
      {dish.image && (
        <div className="relative size-16 shrink-0 overflow-hidden rounded-xl">
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            sizes="64px"
            className="object-cover transition-transform duration-500 ease-[var(--ease-luxe)] group-hover:scale-110"
          />
        </div>
      )}

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <h4 className="font-display text-xl text-cream transition-colors duration-300 group-hover:text-saffron-light">
            {pick(dish.name, dish.nameJp)}
          </h4>
          {dish.veg && <Leaf className="size-3.5 text-emerald-400/80" />}
          {dish.spice ? <SpiceMeter level={dish.spice} /> : null}
        </div>
        <p className="mt-1 text-sm leading-relaxed text-cream-muted">
          {pick(dish.description, dish.descriptionJp)}
        </p>
      </div>

      {/* leader dots */}
      <span
        className="mb-1 hidden h-px flex-1 self-end border-b border-dotted border-cream/20 sm:block"
        aria-hidden
      />

      <span className="shrink-0 font-display text-lg text-saffron-light">
        {yen(dish.price)}
      </span>
    </div>
  );
}
