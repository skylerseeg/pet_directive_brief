"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { Section } from "@/components/ui/Section";
import { getSection } from "@/lib/content";

const roadmap = getSection("roadmap");

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

export function Roadmap() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(timelineRef, { once: true, margin: "-15% 0px" });

  return (
    <Section id="roadmap">
      <header className="mb-14 max-w-2xl md:mb-16">
        <span className="text-caption uppercase text-muted-foreground">
          {roadmap.eyebrow}
        </span>
        <h2 className="mt-4 font-serif text-heading [text-wrap:balance]">
          {roadmap.headline}
        </h2>
        <p className="mt-5 max-w-xl text-body-lg text-muted-foreground">
          {roadmap.body}
        </p>
      </header>

      <div ref={timelineRef} className="relative">
        <motion.div
          aria-hidden="true"
          className="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-border md:hidden"
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : undefined}
          transition={{ duration: 1.4, ease: EASE_OUT_EXPO, delay: 0.2 }}
        />

        <motion.div
          aria-hidden="true"
          className="absolute left-[12.5%] right-[12.5%] top-2 hidden h-px origin-left bg-border md:block"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : undefined}
          transition={{ duration: 1.4, ease: EASE_OUT_EXPO, delay: 0.2 }}
        />

        <ol className="relative grid grid-cols-1 gap-y-12 md:grid-cols-4 md:gap-x-6 md:gap-y-0">
          {roadmap.phases.map((phase, i) => (
            <motion.li
              key={phase.number}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{
                duration: 0.7,
                delay: 0.4 + i * 0.12,
                ease: EASE_OUT_EXPO,
              }}
              className="relative pl-10 md:pl-0 md:pt-12"
            >
              <motion.div
                aria-hidden="true"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : undefined}
                transition={{
                  duration: 0.45,
                  delay: 0.4 + i * 0.12,
                  ease: EASE_OUT_EXPO,
                }}
                className="absolute left-0 top-0 h-4 w-4 rounded-full border-2 border-sage bg-background md:left-1/2 md:-translate-x-1/2"
              />

              <div className="md:text-left">
                <span className="text-caption uppercase text-muted-foreground">
                  Phase {phase.number}
                </span>

                <div className="mt-3 inline-flex items-center rounded-full border border-border bg-card/60 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-muted-foreground/85">
                  {phase.duration}
                </div>

                <h3 className="mt-4 font-serif text-2xl tracking-tight text-foreground md:text-[1.625rem]">
                  {phase.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {phase.deliverable}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
