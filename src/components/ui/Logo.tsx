import { cn } from "@/lib/utils";
import { restaurant } from "@/data/restaurant";

/** Wordmark — serif monogram + name. Inherits text color. */
export function Logo({
  className,
  showTagline = true,
}: {
  className?: string;
  showTagline?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-3 leading-none", className)}>
      <span className="grid size-9 place-items-center rounded-full border border-current/30 font-display text-lg font-semibold">
        A
      </span>
      <span className="flex flex-col">
        <span className="font-display text-xl font-semibold tracking-wide">
          {restaurant.name}
        </span>
        {showTagline && (
          <span className="text-[0.6rem] uppercase tracking-[0.3em] opacity-70">
            {restaurant.tagline}
          </span>
        )}
      </span>
    </span>
  );
}
