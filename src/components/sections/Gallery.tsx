"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { gallery } from "@/data/gallery";
import { useLang } from "@/i18n/LanguageProvider";

const luxe = [0.22, 1, 0.36, 1] as const;

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

  // Split into two strips that drift in opposite directions.
  const half = Math.ceil(gallery.length / 2);

  return (
    <section
      id="gallery"
      className="relative scroll-mt-24 overflow-hidden bg-paper py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          kicker={t.gallery.kicker}
          title={t.gallery.title}
        />
      </div>

      {/* — Two sideways-scrolling strips (full-bleed) ------------- */}
      <div className="mt-14 flex flex-col gap-4 lg:mt-20 lg:gap-5">
        <GalleryStrip
          from={0}
          to={half}
          duration="70s"
          onOpen={setOpen}
        />
        <GalleryStrip
          from={half}
          to={gallery.length}
          duration="88s"
          reverse
          onOpen={setOpen}
        />
      </div>

      <p className="mt-10 text-center text-xs uppercase tracking-[0.3em] text-ink-muted">
        {t.gallery.hint}
      </p>

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
                    src={gallery[open].src}
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

/** One auto-scrolling strip of gallery tiles, pausing on hover. */
function GalleryStrip({
  from,
  to,
  duration,
  reverse = false,
  onOpen,
}: {
  from: number;
  to: number;
  duration: string;
  reverse?: boolean;
  onOpen: (i: number) => void;
}) {
  const items = gallery.slice(from, to);
  // Duplicate the strip so the -50% translate loops seamlessly.
  const loop = [...items, ...items];
  return (
    <div className="edge-fade w-full overflow-hidden">
      <div
        className={`marquee-track flex w-max gap-4 px-2 lg:gap-5 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{ ["--marquee-duration" as string]: duration }}
      >
        {loop.map((img, i) => {
          const realIndex = from + (i % items.length);
          const dup = i >= items.length;
          return (
            <button
              key={`${img.src}-${i}`}
              type="button"
              aria-hidden={dup}
              tabIndex={dup ? -1 : 0}
              onClick={() => onOpen(realIndex)}
              className="group relative h-56 w-[16rem] shrink-0 overflow-hidden rounded-2xl sm:h-64 sm:w-[20rem]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 16rem, 20rem"
                className="object-cover transition-transform duration-[1.1s] ease-[var(--ease-luxe)] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/75 via-espresso/10 to-transparent" />
              <span className="absolute inset-x-0 bottom-0 p-4 text-left font-display text-lg text-cream">
                {img.caption}
              </span>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-cream/10" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
