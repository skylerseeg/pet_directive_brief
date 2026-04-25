"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { Section } from "@/components/ui/Section";
import { getSection } from "@/lib/content";

const problem = getSection("problem");

type Stat = {
  value: string;
  label: string;
  context: string;
  source: string;
};

const STATS: Stat[] = [
  {
    value: "10M+",
    label: "Pets lost annually, US",
    context:
      "Most go missing without recoverable identification. Roughly one in five comes home wearing a tag.",
    source: "ASPCA / American Humane",
  },
  {
    value: "58M",
    label: "Americans aged 65+",
    context:
      "Around half live with a pet — and quietly worry who takes the dog if they can't.",
    source: "US Census Bureau, 2023",
  },
  {
    value: "$150B+",
    label: "US pet industry, 2024",
    context:
      "Spend on food, care, and tech — yet legacy planning still happens in wills, on paper.",
    source: "APPA Industry Report, 2024",
  },
];

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

export function TheProblem() {
  const gridRef = useRef<HTMLDivElement>(null);
  const inView = useInView(gridRef, { once: true, margin: "-15% 0px" });

  return (
    <Section id="problem">
      <header className="mb-12 max-w-2xl md:mb-16">
        <span className="text-caption uppercase text-muted-foreground">
          {problem.eyebrow}
        </span>
        <h2 className="mt-4 font-serif text-heading [text-wrap:balance]">
          {problem.headline}
        </h2>
        <p className="mt-5 max-w-xl text-body-lg text-muted-foreground">
          {problem.body}
        </p>
      </header>

      <div
        ref={gridRef}
        className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5"
      >
        {STATS.map((stat, i) => (
          <motion.article
            key={stat.value}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{
              duration: 0.7,
              delay: i * 0.12,
              ease: EASE_OUT_EXPO,
            }}
            className="flex flex-col rounded-xl border border-border bg-card/40 p-7 backdrop-blur-sm md:p-8"
          >
            <span className="text-caption uppercase text-muted-foreground">
              {stat.label}
            </span>
            <span className="mt-7 font-serif text-[clamp(2.75rem,5vw,4.25rem)] font-light leading-none tracking-tight text-foreground md:mt-9">
              {stat.value}
            </span>
            <span
              className="mt-5 h-px w-10 bg-sage/60"
              aria-hidden="true"
            />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {stat.context}
            </p>
            <span className="mt-7 text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
              Source · {stat.source}
            </span>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
