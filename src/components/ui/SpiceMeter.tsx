import { Flame } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Spice } from "@/data/menu";

/** Three-dot chilli heat indicator. */
export function SpiceMeter({
  level,
  className,
}: {
  level: Spice;
  className?: string;
}) {
  if (!level) return null;
  return (
    <span
      className={cn("inline-flex items-center gap-0.5", className)}
      aria-label={`Spice level ${level} of 3`}
      title={`Spice ${level}/3`}
    >
      {[1, 2, 3].map((i) => (
        <Flame
          key={i}
          className={cn(
            "size-3 transition-colors",
            i <= level ? "text-terracotta" : "text-ink-muted/25",
          )}
          fill={i <= level ? "currentColor" : "none"}
          strokeWidth={1.5}
        />
      ))}
    </span>
  );
}
