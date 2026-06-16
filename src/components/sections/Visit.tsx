"use client";

import { Clock, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
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
      className="paper-grain relative scroll-mt-24 overflow-hidden bg-ivory-deep py-14 sm:py-20 lg:py-24"
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

          {/* — Right: location card with live Google map ---------- */}
          <Reveal y={40}>
            <div className="overflow-hidden rounded-[var(--radius-card)] border border-ink/10 bg-paper shadow-[0_40px_90px_-50px_rgba(22,17,12,0.5)]">
              <div className="relative aspect-[16/11] w-full overflow-hidden">
                <iframe
                  title={`${restaurant.name} — Google Maps`}
                  src={contact.mapEmbedUrl}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="space-y-5 p-6 sm:p-8">
                <div className="flex items-start gap-3">
                  <MapPin
                    className="mt-0.5 size-4 shrink-0 text-clay"
                    strokeWidth={1.75}
                  />
                  <div>
                    <p className="text-sm font-medium text-ink">
                      {pick(contact.area, contact.areaJp)}
                    </p>
                    <p className="text-sm text-ink-soft">{contact.region}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">
                      {pick(contact.directions, contact.directionsJp)}
                    </p>
                    <a
                      href={contact.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2.5 inline-flex items-center gap-1 text-xs font-medium text-clay transition-colors hover:text-ink"
                    >
                      {t.visit.directions}
                      <ArrowUpRight className="size-3.5" strokeWidth={2} />
                    </a>
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
