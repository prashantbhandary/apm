"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { gallery } from "@/data/gallery";
import { useLang } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

const luxe = [0.22, 1, 0.36, 1] as const;

const spanClass: Record<string, string> = {
  tall: "row-span-2",
  short: "row-span-1",
  wide: "row-span-1 sm:col-span-2",
};

export function Gallery() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const next = useCallback(
    () => setOpen((i) => (i === null ? i : (i + 1) % gallery.length)),
    [],
  );
  const prev = useCallback(
    () =>
      setOpen((i) =>
        i === null ? i : (i - 1 + gallery.length) % gallery.length,
      ),
    [],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, next, prev]);

  return (
    <section
      id="gallery"
      className="relative scroll-mt-24 bg-paper py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          kicker={t.gallery.kicker}
          title={t.gallery.title}
          description={t.gallery.description}
        />

        {/* Masonry grid */}
        <div className="mt-16 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] lg:grid-cols-4">
          {gallery.map((img, i) => (
            <motion.button
              key={img.src}
              type="button"
              onClick={() => setOpen(i)}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: (i % 4) * 0.08, ease: luxe }}
              className={cn(
                "group relative overflow-hidden rounded-2xl",
                spanClass[img.span],
              )}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-[1.1s] ease-[var(--ease-luxe)] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-3 p-4 opacity-0 transition-all duration-500 ease-[var(--ease-luxe)] group-hover:translate-y-0 group-hover:opacity-100">
                <span className="font-display text-lg text-cream">
                  {img.caption}
                </span>
              </div>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-ink/5" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* — Lightbox ----------------------------------------------- */}
      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-espresso/95 backdrop-blur-md"
            onClick={close}
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-5 top-5 z-10 grid size-11 place-items-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:bg-cream/10 hover:text-cream"
            >
              <X className="size-5" strokeWidth={1.5} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous"
              className="absolute left-3 z-10 grid size-11 place-items-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:bg-cream/10 hover:text-cream sm:left-6"
            >
              <ChevronLeft className="size-5" strokeWidth={1.5} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next"
              className="absolute right-3 z-10 grid size-11 place-items-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:bg-cream/10 hover:text-cream sm:right-6"
            >
              <ChevronRight className="size-5" strokeWidth={1.5} />
            </button>

            <AnimatePresence mode="wait">
              <motion.figure
                key={open}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.45, ease: luxe }}
                className="relative mx-auto flex max-h-[82vh] w-[88vw] max-w-4xl flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={gallery[open].src.replace("w=900", "w=1600")}
                    alt={gallery[open].alt}
                    fill
                    sizes="88vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-5 text-center font-display text-xl text-cream">
                  {gallery[open].caption}
                  <span className="ml-3 text-sm text-cream-muted">
                    {open + 1} / {gallery.length}
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
