import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/** Consistent section padding + max-width container. */
export function Section({
  id,
  children,
  className,
  containerClassName,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-24 py-24 sm:py-32 lg:py-40", className)}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
