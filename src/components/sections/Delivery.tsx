"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { deliveryPartners, type DeliveryPartner } from "@/data/delivery";
import { useLang } from "@/i18n/LanguageProvider";

const luxe = [0.22, 1, 0.36, 1] as const;

/** Online ordering — branded delivery-partner cards. */
export function Delivery() {
  const { t, pick } = useLang();

  return (
    <section
      id="delivery"
      className="relative scroll-mt-24 overflow-hidden bg-paper py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left — copy + ambient dish */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow flex items-center gap-3 text-clay">
                <span className="h-px w-8 bg-clay/40" />
                {t.delivery.kicker}
              </span>
            </Reveal>
            <h2 className="mt-6 text-display text-4xl text-ink sm:text-5xl lg:text-6xl text-balance">
              <RevealText text={t.delivery.title} />
            </h2>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft text-pretty">
                {t.delivery.description}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 hidden overflow-hidden rounded-[var(--radius-card)] lg:block">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=80"
                    alt="Boxed curry ready for delivery"
                    fill
                    sizes="40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent" />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — partner cards */}
          <div className="lg:col-span-7">
            <div className="flex flex-col gap-4">
              {deliveryPartners.map((p, i) => (
                <motion.a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: luxe }}
                >
                  <PartnerCard partner={p} cta={t.delivery.cta} pick={pick} />
                </motion.a>
              ))}
            </div>
            <Reveal delay={0.2}>
              <p className="mt-6 text-center text-xs text-ink-muted sm:text-left">
                {t.delivery.note}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnerCard({
  partner,
  cta,
  pick,
}: {
  partner: DeliveryPartner;
  cta: string;
  pick: (en: string, jp?: string) => string;
}) {
  return (
    <div
      className="group relative flex items-center gap-5 overflow-hidden rounded-[var(--radius-card)] border border-ink/10 bg-paper p-5 transition-all duration-500 ease-[var(--ease-luxe)] hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-28px_rgba(22,17,12,0.45)] sm:p-6"
      style={{ ["--brand" as string]: partner.color }}
    >
      {/* brand color rail */}
      <span
        className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 transition-transform duration-500 ease-[var(--ease-luxe)] group-hover:scale-y-100"
        style={{ background: partner.color }}
      />

      {/* brand badge */}
      <span
        className="grid size-14 shrink-0 place-items-center rounded-2xl font-semibold text-white shadow-sm sm:size-16"
        style={{ background: partner.color }}
      >
        <span className="text-base sm:text-lg">{partner.badge}</span>
      </span>

      <div className="min-w-0 flex-1">
        <h3 className="font-display text-xl text-ink sm:text-2xl">
          {partner.name}
        </h3>
        <p className="text-sm text-ink-soft">
          {pick(partner.tagline, partner.taglineJp)}
        </p>
        <p className="mt-0.5 text-xs text-ink-muted">
          {pick(partner.eta, partner.etaJp)}
        </p>
      </div>

      <span
        className="flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-white transition-transform duration-500 ease-[var(--ease-luxe)] group-hover:translate-x-0.5"
        style={{ background: partner.color }}
      >
        <span className="hidden sm:inline">{cta}</span>
        <ArrowUpRight className="size-4" strokeWidth={2} />
      </span>
    </div>
  );
}
