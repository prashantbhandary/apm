"use client";

import Image from "next/image";
import { Clock, MapPin, Phone, Mail } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { Button } from "@/components/ui/Button";
import { restaurant } from "@/data/restaurant";
import { useLang } from "@/i18n/LanguageProvider";

/** Reservation CTA + hours + location — the conversion section. */
export function Visit() {
  const { t, pick } = useLang();
  const { contact, hours } = restaurant;

  return (
    <section
      id="visit"
      className="paper-grain relative scroll-mt-24 overflow-hidden bg-ivory-deep py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* — Left: invitation + hours --------------------------- */}
          <div>
            <Reveal>
              <span className="eyebrow flex items-center gap-3 text-clay">
                <span className="h-px w-8 bg-clay/40" />
                {t.visit.kicker}
              </span>
            </Reveal>
            <h2 className="mt-6 text-display text-4xl text-ink sm:text-5xl lg:text-6xl text-balance">
              <RevealText text={t.visit.title} />
            </h2>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft text-pretty">
                {t.visit.description}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={restaurant.orderUrl} arrow>
                  {t.visit.reserve}
                </Button>
                <Button href={`tel:${contact.phone}`} variant="outline">
                  {t.visit.call} {contact.phoneDisplay}
                </Button>
              </div>
            </Reveal>

            {/* Hours */}
            <Reveal delay={0.2}>
              <div className="mt-12 rounded-[var(--radius-card)] border border-ink/10 bg-paper/60 p-6 backdrop-blur-sm sm:p-8">
                <div className="flex items-center gap-2.5 text-clay">
                  <Clock className="size-4" strokeWidth={1.75} />
                  <span className="eyebrow">{t.visit.hours}</span>
                </div>
                <dl className="mt-5 flex flex-col divide-y divide-ink/10">
                  {hours.map((h) => (
                    <div
                      key={h.days}
                      className="flex items-baseline justify-between gap-4 py-3"
                    >
                      <dt className="text-sm font-medium text-ink">
                        {pick(h.days, h.daysJp)}
                      </dt>
                      <dd className="text-right text-sm text-ink-soft tabular-nums">
                        {h.lunch}
                        <span className="mx-1.5 text-ink-muted">·</span>
                        {h.dinner}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>

          {/* — Right: location card with map image ---------------- */}
          <Reveal y={40}>
            <div className="overflow-hidden rounded-[var(--radius-card)] border border-ink/10 bg-paper shadow-[0_40px_90px_-50px_rgba(22,17,12,0.5)]">
              <a
                href={contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[16/11] w-full overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80"
                  alt="Kawasaki street at night"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-luxe)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-espresso/20 transition-colors group-hover:bg-espresso/10" />
                <span className="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-saffron text-espresso shadow-lg transition-transform duration-500 group-hover:scale-110">
                  <MapPin className="size-6" strokeWidth={1.75} />
                </span>
              </a>

              <div className="space-y-5 p-6 sm:p-8">
                <div className="flex items-start gap-3">
                  <MapPin
                    className="mt-0.5 size-4 shrink-0 text-clay"
                    strokeWidth={1.75}
                  />
                  <div>
                    <p className="text-sm font-medium text-ink">
                      {contact.address.line1}, {contact.address.line2}
                    </p>
                    <p className="text-sm text-ink-soft">
                      {contact.address.region}, {contact.address.country}
                    </p>
                    <p className="mt-1 text-xs text-ink-muted">
                      {contact.addressJp}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 border-t border-ink/10 pt-5 sm:flex-row sm:gap-8">
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex items-center gap-2.5 text-sm text-ink-soft transition-colors hover:text-clay"
                  >
                    <Phone className="size-4 text-clay" strokeWidth={1.75} />
                    {contact.phoneDisplay}
                  </a>
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-2.5 text-sm text-ink-soft transition-colors hover:text-clay"
                  >
                    <Mail className="size-4 text-clay" strokeWidth={1.75} />
                    {contact.email}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
