"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type RevealTextProps = {
  text: string;
  className?: string;
  delay?: number;
  /** Stagger between units. */
  stagger?: number;
  /**
   * "view" reveals on scroll into view (default, for in-page sections).
   * "mount" reveals immediately (for above-the-fold hero copy).
   */
  trigger?: "view" | "mount";
};

/**
 * Masked reveal — each unit rises from behind an invisible line clip.
 * Latin text animates word-by-word; CJK text animates character-by-character
 * (CJK has no spaces, so a single long word would wrap inside its clip mask
 * and all but the last line would be hidden).
 *
 * Visibility is observed on the outer full-size wrapper so the
 * IntersectionObserver fires reliably.
 */
export function RevealText({
  text,
  className,
  delay = 0,
  stagger = 0.08,
  trigger = "view",
}: RevealTextProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  const isCJK = !/\s/.test(text.trim());
  const units = isCJK ? Array.from(text) : text.split(" ");
  const step = isCJK ? Math.min(stagger, 0.045) : stagger;

  if (reduce) {
    return <span className={className}>{text}</span>;
  }

  const show = trigger === "mount" ? true : inView;

  return (
    <span ref={ref} className={cn("inline", className)} aria-label={text}>
      {units.map((unit, i) => (
        <span
          key={`${unit}-${i}`}
          className="inline-block overflow-hidden align-bottom"
          aria-hidden
        >
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={show ? { y: 0 } : { y: "110%" }}
            transition={{
              duration: 0.95,
              delay: delay + i * step,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {unit}
            {!isCJK && i < units.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
