"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Minus, X } from "lucide-react";

import { Section } from "@/components/ui/Section";
import {
  getSection,
  type CompetitorCoverage,
  type LayerKey,
} from "@/lib/content";

const gap = getSection("competitive-gap");

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

const LAYERS: LayerKey[] = ["hardware", "recovery", "management", "legacy"];
const LAYER_LABELS: Record<LayerKey, string> = {
  hardware: "Hardware",
  recovery: "Recovery",
  management: "Management",
  legacy: "Legacy",
};

function CoverageCell({
  value,
  note,
  emphasized,
}: {
  value: CompetitorCoverage;
  note?: string;
  emphasized?: boolean;
}) {
  if (value === "yes") {
    return (
      <span
        className={[
          "inline-flex items-center gap-1.5",
          emphasized ? "text-sage" : "text-sage/85",
        ].join(" ")}
      >
        <Check className="h-4 w-4" strokeWidth={2.2} />
        {note ? (
          <span className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            {note}
          </span>
        ) : null}
      </span>
    );
  }
  if (value === "partial") {
    return (
      <span className="inline-flex items-center gap-1.5 text-muted-foreground/80">
        <Minus className="h-4 w-4" strokeWidth={2.2} />
        <span className="text-[10px] uppercase tracking-[0.16em]">partial</span>
      </span>
    );
  }
  return (
    <X
      className="h-3.5 w-3.5 text-muted-foreground/35"
      strokeWidth={1.6}
      aria-label="not covered"
    />
  );
}

export function CompetitiveGap() {
  const tableRef = useRef<HTMLDivElement>(null);
  const inView = useInView(tableRef, { once: true, margin: "-15% 0px" });

  return (
    <Section id="competitive-gap">
      <header className="mb-12 max-w-2xl md:mb-16">
        <span className="text-caption uppercase text-muted-foreground">
          {gap.eyebrow}
        </span>
        <h2 className="mt-4 font-serif text-heading [text-wrap:balance]">
          {gap.headline}
        </h2>
        <p className="mt-5 max-w-xl text-body-lg text-muted-foreground">
          {gap.body}
        </p>
      </header>

      <div ref={tableRef} className="overflow-x-auto">
        <div
          role="table"
          aria-label="Competitor coverage by layer"
          className="min-w-[640px] overflow-hidden rounded-2xl border border-border bg-card/30 backdrop-blur-sm"
        >
          <div
            role="row"
            className="grid grid-cols-[1.6fr_repeat(4,1fr)] items-center border-b border-border/60 px-5 py-4 md:px-7"
          >
            <div
              role="columnheader"
              className="text-caption uppercase text-muted-foreground"
            >
              Player
            </div>
            {LAYERS.map((l) => (
              <div
                key={l}
                role="columnheader"
                className="text-center text-caption uppercase text-muted-foreground"
              >
                {LAYER_LABELS[l]}
              </div>
            ))}
          </div>

          {gap.matrix.map((row, i) => {
            const isLast = i === gap.matrix.length - 1;
            return (
              <motion.div
                key={row.player}
                role="row"
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : undefined}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: EASE_OUT_EXPO,
                }}
                className={[
                  "grid grid-cols-[1.6fr_repeat(4,1fr)] items-center px-5 py-4 md:px-7",
                  !isLast ? "border-b border-border/40" : "",
                  row.self
                    ? "bg-sage/[0.07] shadow-[inset_3px_0_0_0_hsl(var(--sage))]"
                    : "",
                ].join(" ")}
              >
                <div
                  role="cell"
                  className={
                    row.self
                      ? "font-medium text-sage"
                      : "text-foreground/85"
                  }
                >
                  {row.player}
                </div>
                {LAYERS.map((l) => (
                  <div
                    key={l}
                    role="cell"
                    className="flex items-center justify-center"
                  >
                    <CoverageCell
                      value={row[l]}
                      note={row.notes?.[l]}
                      emphasized={row.self}
                    />
                  </div>
                ))}
              </motion.div>
            );
          })}
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-xl text-center text-sm italic text-muted-foreground md:mt-14">
        Nobody owns the full stack. That&apos;s the wedge.
      </p>
    </Section>
  );
}
