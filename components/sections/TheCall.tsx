"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Square } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { getSection } from "@/lib/content";

const call = getSection("call");

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

const headlineClauses = call.headline.split(/\s*\.\s*/).filter(Boolean);

export function TheCall() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <Section id="call" contained={false} className="items-center text-center">
      <div ref={ref} className="mx-auto flex w-full max-w-2xl flex-col">
        <h2 className="font-serif text-display [text-wrap:balance]">
          {headlineClauses.map((clause, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{
                duration: 0.8,
                delay: 0.15 + i * 0.4,
                ease: EASE_OUT_EXPO,
              }}
              className="block"
            >
              {clause}.
            </motion.span>
          ))}
        </h2>

        <ul className="mx-auto mt-14 flex w-full max-w-md flex-col gap-4 text-left md:mt-16">
          {call.actions.map((a, i) => (
            <motion.li
              key={a.group}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : undefined}
              transition={{
                duration: 0.55,
                delay: 1.1 + i * 0.14,
                ease: EASE_OUT_EXPO,
              }}
              className="flex items-center gap-4 border-b border-border/50 pb-4 last:border-b-0"
            >
              <Square
                className="h-5 w-5 shrink-0 text-muted-foreground/70"
                strokeWidth={1.4}
                aria-hidden="true"
              />
              <span className="text-body-lg text-foreground/90">
                <span className="font-medium text-foreground">{a.count}</span>{" "}
                calls with {a.group}
              </span>
            </motion.li>
          ))}
        </ul>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{
            duration: 0.7,
            delay: 1.1 + call.actions.length * 0.14 + 0.1,
            ease: EASE_OUT_EXPO,
          }}
          className="mx-auto mt-12 max-w-xl text-balance text-body leading-relaxed text-muted-foreground md:mt-16"
        >
          {call.closing}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : undefined}
          transition={{
            duration: 0.6,
            delay: 1.1 + call.actions.length * 0.14 + 0.7,
          }}
          className="mx-auto mt-12 w-full max-w-md text-right font-serif text-sm italic text-muted-foreground/85 md:mt-16"
        >
          {call.signature}
        </motion.p>
      </div>
    </Section>
  );
}
