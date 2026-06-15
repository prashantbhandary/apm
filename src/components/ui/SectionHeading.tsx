import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

/** Eyebrow + gold rule + serif display title — the shared section opener. */
export function SectionHeading({
  kicker,
  title,
  description,
  align = "center",
  tone = "dark",
  className,
}: SectionHeadingProps) {
  const isLight = tone === "light";
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start",
        className,
      )}
    >
      <Reveal>
        <span
          className={cn(
            "eyebrow flex items-center gap-3",
            isLight ? "text-saffron-light" : "text-clay",
          )}
        >
          <span
            className={cn(
              "h-px w-8",
              isLight ? "bg-saffron-light/50" : "bg-clay/40",
            )}
          />
          {kicker}
        </span>
      </Reveal>

      <h2
        className={cn(
          "text-display text-4xl sm:text-5xl lg:text-6xl max-w-3xl text-balance",
          isLight ? "text-cream" : "text-ink",
        )}
      >
        <RevealText text={title} />
      </h2>

      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "max-w-xl text-base sm:text-lg leading-relaxed text-pretty",
              isLight ? "text-cream-muted" : "text-ink-soft",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
