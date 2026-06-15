"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { navLinks, restaurant } from "@/data/restaurant";
import { useLang } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const { t } = useLang();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 40);
  });

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 ease-[var(--ease-luxe)] sm:px-8 lg:px-12",
            scrolled
              ? "my-3 rounded-full border border-ink/10 bg-paper/80 py-2.5 backdrop-blur-xl shadow-[0_8px_40px_-20px_rgba(22,17,12,0.45)] lg:mx-6"
              : "py-5",
          )}
        >
          <a href="#top" aria-label={`${restaurant.name} home`}>
            <Logo
              className={cn(
                "transition-colors duration-500",
                scrolled ? "text-ink" : "text-cream",
              )}
            />
          </a>

          <nav className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative text-sm font-medium tracking-wide transition-colors duration-300",
                  scrolled
                    ? "text-ink-soft hover:text-ink"
                    : "text-cream/80 hover:text-cream",
                )}
              >
                {t.nav[link.key]}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-saffron transition-all duration-500 ease-[var(--ease-luxe)] group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <LanguageToggle tone={scrolled ? "dark" : "light"} />
            <Button
              href={restaurant.orderUrl}
              variant={scrolled ? "solid" : "light"}
              arrow
            >
              {t.nav.reserve}
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className={cn(
              "lg:hidden transition-colors",
              scrolled ? "text-ink" : "text-cream",
            )}
          >
            <Menu className="size-6" strokeWidth={1.5} />
          </button>
        </div>
      </motion.header>

      {/* — Mobile overlay menu ------------------------------------- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-espresso/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="paper-grain absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-espresso px-8 py-7 text-cream"
            >
              <div className="flex items-center justify-between">
                <Logo className="text-cream" />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="text-cream/70 hover:text-cream"
                >
                  <X className="size-6" strokeWidth={1.5} />
                </button>
              </div>

              <div className="mt-10">
                <LanguageToggle tone="light" />
              </div>

              <div className="mt-8 flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.15 + i * 0.08,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="border-b border-cream/10 py-4 font-display text-3xl font-medium text-cream/90 transition-colors hover:text-saffron-light"
                  >
                    {t.nav[link.key]}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-5">
                <a
                  href={`tel:${restaurant.contact.phone}`}
                  className="flex items-center gap-3 text-cream-muted"
                >
                  <Phone className="size-4 text-saffron-light" strokeWidth={1.5} />
                  {restaurant.contact.phoneDisplay}
                </a>
                <Button
                  href={restaurant.orderUrl}
                  variant="solid"
                  arrow
                  className="w-full bg-saffron text-espresso hover:bg-saffron-light border-saffron"
                  onClick={() => setOpen(false)}
                >
                  {t.nav.reserve}
                </Button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
