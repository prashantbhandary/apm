"use client";

import { Utensils } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/ui/BrandIcons";
import { Logo } from "@/components/ui/Logo";
import { navLinks, restaurant } from "@/data/restaurant";
import { useLang } from "@/i18n/LanguageProvider";

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();
  const { social, contact } = restaurant;

  return (
    <footer className="paper-grain relative overflow-hidden bg-espresso text-cream">
      {/* Oversized wordmark backdrop */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 select-none overflow-hidden">
        <span className="block translate-y-1/4 text-center font-display text-[22vw] font-semibold leading-none text-cream/3">
          {restaurant.name}
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo className="text-cream" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream-muted">
              {t.footer.blurb} {restaurant.established}.
            </p>
            <div className="mt-7 flex gap-3">
              {[
                { Icon: InstagramIcon, href: social.instagram, label: "Instagram" },
                { Icon: FacebookIcon, href: social.facebook, label: "Facebook" },
                { Icon: Utensils, href: social.tabelog, label: "Tabelog" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full border border-cream/15 text-cream/70 transition-colors duration-300 hover:border-saffron hover:bg-saffron hover:text-espresso"
                >
                  <Icon className="size-4" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="eyebrow text-saffron-light">{t.footer.explore}</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream-muted transition-colors hover:text-cream"
                  >
                    {t.nav[link.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="eyebrow text-saffron-light">{t.footer.findUs}</h3>
            <address className="mt-5 flex flex-col gap-2 text-sm not-italic text-cream-muted">
              <span>
                {contact.address.line1}, {contact.address.line2}
              </span>
              <span>
                {contact.address.region}, {contact.address.country}
              </span>
              <a
                href={`tel:${contact.phone}`}
                className="mt-2 transition-colors hover:text-cream"
              >
                {contact.phoneDisplay}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="transition-colors hover:text-cream"
              >
                {contact.email}
              </a>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream-muted sm:flex-row">
          <p>
            © {year} {restaurant.name}. {t.footer.rights}
          </p>
          <p className="flex items-center gap-1.5">
            {t.footer.crafted} {restaurant.city}
          </p>
        </div>
      </div>
    </footer>
  );
}
