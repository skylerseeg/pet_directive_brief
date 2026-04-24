"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  HeartPulse,
  Landmark,
  ScanLine,
  Tag,
  type LucideIcon,
} from "lucide-react";

import { Section } from "@/components/ui/Section";
import { getSection } from "@/lib/content";

const layersSection = getSection("layers");

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

const ICON_BY_NAME: Record<string, LucideIcon> = {
  Hardware: Tag,
  Recovery: ScanLine,
  Management: HeartPulse,
  Legacy: Landmark,
};

/**
 * Per-layer surface treatment. Bottom is structural and cool; warmth and
 * sage-glow build as we move up the stack — Legacy is the apex with a
 * subtle honey undertone signaling the "richer" tier.
 */
const SURFACE: Array<{
  bg: string;
  ring: string;
  iconColor: string;
}> = [
  // 01 — Hardware (bottom)
  {
    bg: "bg-[radial-gradient(120%_140%_at_50%_-20%,hsl(240_5%_13%),hsl(240_5%_6%)_70%)]",
    ring: "border-border",
    iconColor: "text-foreground/75",
  },
  // 02 — Recovery
  {
    bg: "bg-[radial-gradient(120%_140%_at_70%_-20%,hsl(126_18%_22%/0.55),hsl(240_5%_7%)_65%)]",
    ring: "border-border",
    iconColor: "text-sage",
  },
  // 03 — Management
  {
    bg: "bg-[radial-gradient(120%_140%_at_70%_-25%,hsl(126_22%_30%/0.55),hsl(240_5%_8%)_65%)]",
    ring: "border-sage/15",
    iconColor: "text-sage",
  },
  // 04 — Legacy (top, warmest)
  {
    bg: "bg-[radial-gradient(130%_150%_at_70%_-30%,hsl(38_28%_55%/0.28),hsl(126_22%_32%/0.45)_38%,hsl(240_5%_8%)_78%)]",
    ring: "border-sage/25",
    iconColor: "text-sage",
  },
];

export function FourLayers() {
  const stackRef = useRef<HTMLDivElement>(null);
  const inView = useInView(stackRef, { once: true, margin: "-15% 0px" });

  const layers = layersSection.layers;
  // Render top-down so Legacy paints on top: [Legacy, Management, Recovery, Hardware].
  // Animation order is bottom-up — Hardware leads.
  const displayLayers = [...layers].reverse();

  return (
    <Section id="layers">
      <header className="mb-14 max-w-2xl md:mb-16">
        <span className="text-caption uppercase text-muted-foreground">
          {layersSection.eyebrow}
        </span>
        <h2 className="mt-4 font-serif text-heading [text-wrap:balance]">
          {layersSection.headline}
        </h2>
        <p className="mt-5 max-w-xl text-body-lg text-muted-foreground">
          {layersSection.body}
        </p>
      </header>

      <div
        ref={stackRef}
        className="mx-auto flex w-full max-w-2xl flex-col gap-2.5"
      >
        {displayLayers.map((layer, displayIndex) => {
          const bottomIndex = layers.length - 1 - displayIndex;
          const surface = SURFACE[bottomIndex];
          const Icon = ICON_BY_NAME[layer.name] ?? Tag;
          const layerNumber = String(bottomIndex + 1).padStart(2, "0");

          return (
            <motion.article
              key={layer.name}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{
                duration: 0.7,
                delay: bottomIndex * 0.16,
                ease: EASE_OUT_EXPO,
              }}
              className={[
                "relative overflow-hidden rounded-2xl border p-7 md:p-8",
                "shadow-[0_-1px_0_0_hsl(0_0%_100%/0.04)_inset,0_24px_60px_-30px_hsl(0_0%_0%/0.6)]",
                surface.bg,
                surface.ring,
              ].join(" ")}
            >
              <div className="flex items-start gap-5 md:gap-6">
                <div
                  className={[
                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm",
                    surface.iconColor,
                  ].join(" ")}
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-3">
                    <span className="text-caption uppercase text-muted-foreground/80">
                      Layer {layerNumber}
                    </span>
                    <span
                      className="h-px flex-1 bg-border/60"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-3 font-serif text-2xl tracking-tight text-foreground md:text-[1.75rem]">
                    {layer.name}
                  </h3>
                  <p className="mt-2 text-body text-muted-foreground">
                    {layer.description}
                  </p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      <p className="mx-auto mt-12 max-w-xl text-center text-sm italic text-muted-foreground md:mt-16">
        Each layer earns the right to sell the next.
      </p>
    </Section>
  );
}
