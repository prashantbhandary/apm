"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Variant = "solid" | "outline" | "ghost" | "light";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium tracking-wide transition-colors duration-500 ease-[var(--ease-luxe)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

const sizes = "px-7 py-3.5";

const variants: Record<Variant, string> = {
  solid:
    "bg-espresso text-cream hover:bg-charcoal border border-espresso shadow-[0_10px_30px_-12px_rgba(22,17,12,0.6)]",
  outline:
    "border border-ink/25 text-ink hover:border-ink/60 hover:bg-ink/[0.03]",
  ghost: "text-ink hover:text-clay",
  light:
    "border border-cream/30 text-cream hover:bg-cream hover:text-espresso",
};

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
  onClick?: () => void;
};

export function Button({
  children,
  href,
  variant = "solid",
  className,
  arrow = false,
  onClick,
}: ButtonProps) {
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowUpRight
          className="size-4 transition-transform duration-500 ease-[var(--ease-luxe)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.75}
        />
      )}
    </>
  );

  const classes = cn(base, sizes, variants[variant], className);

  const MotionWrap = ({ inner }: { inner: ReactNode }) => (
    <motion.span
      whileHover={{ y: -2 }}
      whileTap={{ y: 0, scale: 0.98 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="inline-flex"
    >
      {inner}
    </motion.span>
  );

  if (href) {
    return (
      <MotionWrap
        inner={
          <Link href={href} className={classes} onClick={onClick}>
            {content}
          </Link>
        }
      />
    );
  }

  return (
    <MotionWrap
      inner={
        <button type="button" className={classes} onClick={onClick}>
          {content}
        </button>
      }
    />
  );
}
