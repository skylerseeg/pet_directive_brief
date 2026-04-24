"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Database, Gift, Waypoints, type LucideIcon } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { getSection } from "@/lib/content";

const whyWins = getSection("why-wins");

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

const ICON_BY_TITLE: Record<string, LucideIcon> = {
  "Network Effects": Waypoints,
  "Data Moat": Database,
  "Inverted CAC": Gift,
};

export function WhyThisWins() {
  const gridRef = useRef<HTMLDivElement>(null);
  const inView = useInView(gridRef, { once: true, margin: "-15% 0px" });

  return (
    <Section id="why-wins">
      <header className="mb-14 max-w-2xl md:mb-16">
        <span className="text-caption uppercase text-muted-foreground">
          {whyWins.eyebrow}
        </span>
        <h2 className="mt-4 font-serif text-heading [text-wrap:balance]">
          {whyWins.headline}
        </h2>
        <p className="mt-5 max-w-xl text-body-lg text-muted-foreground">
          {whyWins.body}
        </p>
      </header>

      <div
        ref={gridRef}
        className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5"
      >
        {whyWins.cards.map((card, i) => {
          const Icon = ICON_BY_TITLE[card.title] ?? Waypoints;
          return (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: EASE_OUT_EXPO,
              }}
              className="flex flex-col rounded-2xl border border-border bg-card/40 p-7 backdrop-blur-sm md:p-8"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-sage/20 bg-sage/5 text-sage"
                aria-hidden="true"
              >
                <Icon className="h-5 w-5" strokeWidth={1.6} />
              </div>

              <span className="mt-7 text-caption uppercase text-muted-foreground md:mt-9">
                {card.title}
              </span>

              <p className="mt-3 font-serif text-[1.5rem] leading-snug tracking-tight text-foreground [text-wrap:balance] md:text-[1.625rem]">
                {card.tagline}
              </p>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
