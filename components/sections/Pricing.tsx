"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { getSection } from "@/lib/content";

const pricing = getSection("pricing");

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

export function Pricing() {
  const gridRef = useRef<HTMLDivElement>(null);
  const inView = useInView(gridRef, { once: true, margin: "-15% 0px" });

  return (
    <Section id="pricing">
      <header className="mb-12 max-w-2xl md:mb-16">
        <span className="text-caption uppercase text-muted-foreground">
          {pricing.eyebrow}
        </span>
        <h2 className="mt-4 font-serif text-heading [text-wrap:balance]">
          {pricing.headline}
        </h2>
        <p className="mt-5 max-w-xl text-body-lg text-muted-foreground">
          {pricing.body}
        </p>
      </header>

      <div
        ref={gridRef}
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 md:gap-4"
      >
        {pricing.tiers.map((tier, i) => {
          const isFree = tier.price.toLowerCase() === "free";
          return (
            <motion.article
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{
                duration: 0.65,
                delay: i * 0.09,
                ease: EASE_OUT_EXPO,
              }}
              className="flex flex-col rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-sm md:p-7"
            >
              <span className="text-caption uppercase text-muted-foreground">
                {tier.name}
              </span>

              <div className="mt-7 flex items-baseline gap-1.5">
                <span
                  className={[
                    "font-serif text-[clamp(2rem,3.5vw,2.75rem)] font-light leading-none tracking-tight",
                    isFree ? "text-foreground/85" : "text-foreground",
                  ].join(" ")}
                >
                  {tier.price}
                </span>
              </div>
              <span className="mt-2 text-[11px] uppercase tracking-[0.16em] text-muted-foreground/80">
                {tier.cadence}
              </span>

              <span
                className="mt-5 h-px w-8 bg-sage/60"
                aria-hidden="true"
              />

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {tier.unlocks}
              </p>
            </motion.article>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : undefined}
        transition={{
          duration: 0.7,
          delay: pricing.tiers.length * 0.09 + 0.1,
          ease: EASE_OUT_EXPO,
        }}
        className="mx-auto mt-10 flex max-w-2xl flex-col items-start gap-4 rounded-xl border border-sage/25 bg-sage/[0.05] p-6 md:mt-14 md:flex-row md:items-center md:gap-7 md:p-7"
      >
        <div className="flex shrink-0 items-center gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-sage/25 bg-sage/10 text-sage"
            aria-hidden="true"
          >
            <TrendingUp className="h-4 w-4" strokeWidth={1.8} />
          </div>
          <div className="flex flex-col">
            <span className="text-caption uppercase text-sage">
              LTV potential
            </span>
            <span className="mt-0.5 font-serif text-2xl leading-none text-foreground md:text-[1.625rem]">
              {pricing.ltv.range}
            </span>
          </div>
        </div>
        <div className="text-sm leading-relaxed text-muted-foreground">
          {pricing.ltv.explainer}
        </div>
      </motion.div>
    </Section>
  );
}
