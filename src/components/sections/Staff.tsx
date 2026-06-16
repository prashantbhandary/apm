"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staff, type StaffMember } from "@/data/staff";
import { useLang } from "@/i18n/LanguageProvider";

const luxe = [0.22, 1, 0.36, 1] as const;

/** The people behind the kitchen — portrait cards with hover reveal. */
export function Staff() {
  const { t, pick } = useLang();

  return (
    <section
      id="staff"
      className="relative scroll-mt-24 bg-ivory paper-grain py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          kicker={t.staff.kicker}
          title={t.staff.title}
          description={t.staff.description}
        />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:mt-20 lg:grid-cols-4">
          {staff.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: (i % 4) * 0.1, ease: luxe }}
            >
              <StaffCard member={member} pick={pick} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StaffCard({
  member,
  pick,
}: {
  member: StaffMember;
  pick: (en: string, jp?: string) => string;
}) {
  return (
    <figure className="group relative overflow-hidden rounded-[var(--radius-card)] bg-charcoal shadow-[0_30px_70px_-45px_rgba(22,17,12,0.6)]">
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-[1.1s] ease-[var(--ease-luxe)] group-hover:scale-105"
        />
        {/* base gradient for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/30 to-transparent" />
        {/* extra darken on hover to lift the bio */}
        <div className="absolute inset-0 bg-espresso/0 transition-colors duration-500 group-hover:bg-espresso/30" />
      </div>

      <figcaption className="absolute inset-x-0 bottom-0 p-5">
        <p className="eyebrow text-saffron-light">{pick(member.role, member.roleJp)}</p>
        <h3 className="mt-1.5 font-display text-2xl text-cream">{member.name}</h3>

        <div className="mt-1 flex items-center gap-1.5 text-cream-muted">
          <MapPin className="size-3" strokeWidth={1.75} />
          <span className="text-xs">{pick(member.origin, member.originJp)}</span>
        </div>

        {/* Bio reveals on hover */}
        <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-[var(--ease-luxe)] group-hover:grid-rows-[1fr]">
          <p className="overflow-hidden text-sm leading-relaxed text-cream/80">
            <span className="mt-3 block">{pick(member.bio, member.bioJp)}</span>
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
