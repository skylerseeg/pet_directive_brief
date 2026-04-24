"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { getSection } from "@/lib/content";

const hero = getSection("hero");

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

const wordContainer: Variants = {
  hidden: {},
  show: {
    transition: { delayChildren: 0.25, staggerChildren: 0.07 },
  },
};

const word: Variants = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.7, ease: EASE_OUT_EXPO },
  },
};

export function Hero() {
  const reduce = useReducedMotion();
  const words = hero.headline.split(" ");
  const subheadDelay = reduce ? 0 : 0.25 + words.length * 0.07 + 0.2;

  return (
    <Section
      id="hero"
      contained={false}
      className="items-center justify-center text-center"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-caption uppercase text-muted-foreground backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-sage" />
            Built for Cody
          </span>
        </motion.div>

        <div className="mt-10 md:mt-12">
          <PetTag />
        </div>

        <motion.h1
          variants={reduce ? undefined : wordContainer}
          initial={reduce ? false : "hidden"}
          animate={reduce ? undefined : "show"}
          className="mt-10 font-serif text-display [text-wrap:balance]"
          aria-label={hero.headline}
        >
          {words.map((w, i) => (
            <span
              key={`${w}-${i}`}
              className="inline-block overflow-hidden pb-[0.15em] align-top"
              aria-hidden="true"
            >
              <motion.span
                variants={reduce ? undefined : word}
                className="inline-block pr-[0.24em]"
              >
                {w}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: subheadDelay }}
          className="mt-6 max-w-2xl text-balance text-body-lg text-muted-foreground md:mt-8"
        >
          {hero.body}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: subheadDelay + 0.4, duration: 0.6 }}
        className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center md:bottom-10"
        aria-hidden="true"
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-caption uppercase">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </Section>
  );
}

/**
 * Pet tag with a stylized QR mark. Not a scannable code — an evocative
 * glyph: three finder anchors, a curated data pattern, gentle pulse.
 */
function PetTag() {
  const cell = 5.5;
  const origin = { x: 23, y: 35 };
  const cellAt = (col: number, row: number) => ({
    x: origin.x + col * cell,
    y: origin.y + row * cell,
  });

  // Positions that *aren't* inside the three 3x3 finder anchors at
  // (0..2, 0..2), (6..8, 0..2), (0..2, 6..8). Hand-curated for balance.
  const dataCells: Array<[number, number]> = [
    [3, 0], [5, 1], [4, 2], [7, 2],
    [3, 3], [5, 3], [8, 3], [2, 3],
    [3, 4], [6, 4], [7, 4], [1, 4],
    [4, 5], [5, 5], [8, 5], [0, 5],
    [3, 6], [5, 6], [7, 6],
    [4, 7], [6, 7], [8, 7], [3, 7],
    [5, 8], [7, 8], [4, 8],
  ];

  return (
    <motion.svg
      viewBox="0 0 100 112"
      width="92"
      height="103"
      xmlns="http://www.w3.org/2000/svg"
      className="text-sage"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{
        opacity: [1, 0.82, 1],
        scale: [1, 1.015, 1],
      }}
      transition={{
        duration: 4.4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.15,
      }}
      aria-hidden="true"
    >
      <circle
        cx="50"
        cy="8"
        r="5"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.5"
        strokeWidth="1.1"
      />
      <line
        x1="50"
        y1="13"
        x2="50"
        y2="18"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="1"
      />
      <rect
        x="8"
        y="18"
        width="84"
        height="84"
        rx="12"
        fill="hsl(var(--card))"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="1"
      />

      {[
        [0, 0],
        [6, 0],
        [0, 6],
      ].map(([col, row], i) => {
        const { x, y } = cellAt(col, row);
        const size = cell * 3;
        return (
          <g key={`finder-${i}`}>
            <rect
              x={x}
              y={y}
              width={size}
              height={size}
              rx="2"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <rect
              x={x + cell}
              y={y + cell}
              width={cell}
              height={cell}
              rx="0.75"
              fill="currentColor"
            />
          </g>
        );
      })}

      {dataCells.map(([col, row], i) => {
        const { x, y } = cellAt(col, row);
        return (
          <rect
            key={`cell-${i}`}
            x={x + 0.6}
            y={y + 0.6}
            width={cell - 1.2}
            height={cell - 1.2}
            rx="0.6"
            fill="currentColor"
            opacity="0.82"
          />
        );
      })}
    </motion.svg>
  );
}
