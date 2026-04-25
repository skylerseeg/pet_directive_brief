import * as React from "react";

import { cn } from "@/lib/utils";

type SectionOwnProps = {
  /** Rendered element; defaults to <section>. */
  as?: "section" | "div" | "article" | "main";
  /** Wrap children in a max-width container. Set false to opt out. */
  contained?: boolean;
  /** Turn off snap-align (e.g. for footers that shouldn't snap). */
  noSnap?: boolean;
  /** Turn off the min-h-screen constraint. */
  compact?: boolean;
};

type SectionProps = SectionOwnProps & React.HTMLAttributes<HTMLElement>;

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  function Section(
    {
      as: Comp = "section",
      contained = true,
      noSnap = false,
      compact = false,
      className,
      children,
      ...props
    },
    ref,
  ) {
    return (
      <Comp
        ref={ref as React.Ref<never>}
        className={cn(
          "relative flex w-full flex-col justify-center",
          "px-section-x md:px-section-x-lg",
          "py-section-y md:py-section-y-lg",
          !compact && "min-h-screen",
          !noSnap && "snap-start snap-always",
          className,
        )}
        {...props}
      >
        {contained ? (
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        ) : (
          children
        )}
      </Comp>
    );
  },
);
