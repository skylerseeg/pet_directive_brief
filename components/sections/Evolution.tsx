"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { getSection } from "@/lib/content";

const evolution = getSection("evolution");

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

export function Evolution() {
  const stageRef = useRef<HTMLDivElement>(null);
  const inView = useInView(stageRef, { once: true, margin: "-20% 0px" });

  return (
    <Section id="evolution">
      <header className="mb-14 max-w-3xl md:mb-20">
        <span className="text-caption uppercase text-muted-foreground">
          {evolution.eyebrow}
        </span>
        <h2 className="mt-4 font-serif text-heading [text-wrap:balance]">
          {evolution.headline}
        </h2>
        <p className="mt-5 max-w-xl text-body-lg text-muted-foreground">
          {evolution.body}
        </p>
      </header>

      <div
        ref={stageRef}
        className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_auto_1fr] md:gap-8"
      >
        <Stage label="Document" sublabel="The atom — a signed directive">
          <Document inView={inView} />
        </Stage>

        <div className="flex items-center justify-center text-muted-foreground">
          <motion.span
            initial={{ opacity: 0, x: -8 }}
            animate={inView ? { opacity: 1, x: 0 } : undefined}
            transition={{ duration: 0.6, delay: 0.4, ease: EASE_OUT_EXPO }}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 backdrop-blur-sm"
          >
            <ArrowRight className="h-4 w-4 rotate-90 md:rotate-0" />
          </motion.span>
        </div>

        <Stage label="Platform" sublabel="The network — every layer of care">
          <NetworkMark inView={inView} />
        </Stage>
      </div>

      <ul className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-3 text-sm text-muted-foreground md:mt-20 md:grid-cols-3">
        {evolution.points.map((p) => (
          <li
            key={p}
            className="rounded-lg border border-border/70 bg-card/30 px-4 py-3 leading-relaxed"
          >
            {p}
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Stage({
  label,
  sublabel,
  children,
}: {
  label: string;
  sublabel: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex aspect-square w-full max-w-[280px] items-center justify-center rounded-2xl border border-border bg-card/30 p-8">
        {children}
      </div>
      <div className="text-center">
        <div className="text-caption uppercase text-muted-foreground">
          {label}
        </div>
        <div className="mt-1.5 text-sm text-foreground/80">{sublabel}</div>
      </div>
    </div>
  );
}

function Document({ inView }: { inView: boolean }) {
  const lines = [0.85, 0.62, 0.78, 0.55, 0.7];

  return (
    <svg
      viewBox="0 0 120 150"
      width="100%"
      height="100%"
      className="text-foreground"
      aria-hidden="true"
    >
      <path
        d="M14 8 H88 L106 26 V142 a4 4 0 0 1 -4 4 H14 a4 4 0 0 1 -4 -4 V12 a4 4 0 0 1 4 -4 Z"
        fill="hsl(var(--card))"
        stroke="currentColor"
        strokeOpacity="0.45"
        strokeWidth="1.2"
      />
      <path
        d="M88 8 V22 a4 4 0 0 0 4 4 H106"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="1.2"
      />

      {lines.map((w, i) => (
        <motion.rect
          key={i}
          x="22"
          y={48 + i * 14}
          height="4"
          rx="1.5"
          fill="currentColor"
          opacity="0.55"
          initial={{ width: 0 }}
          animate={inView ? { width: 76 * w } : undefined}
          transition={{
            duration: 0.55,
            delay: 0.15 + i * 0.08,
            ease: EASE_OUT_EXPO,
          }}
        />
      ))}

      <motion.path
        d="M22 128 q14 -8 28 -2 t28 0"
        fill="none"
        stroke="hsl(var(--sage))"
        strokeWidth="1.6"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : undefined}
        transition={{ duration: 0.9, delay: 0.7, ease: EASE_OUT_EXPO }}
      />
    </svg>
  );
}

type Node = {
  id: string;
  cx: number;
  cy: number;
  label: string;
};

function NetworkMark({ inView }: { inView: boolean }) {
  const reduce = useReducedMotion();

  const center = { cx: 100, cy: 100 };
  const nodes: Node[] = [
    { id: "tag", cx: 100, cy: 30, label: "Tag" },
    { id: "vet", cx: 165, cy: 70, label: "Vet" },
    { id: "guardian", cx: 158, cy: 150, label: "Guardian" },
    { id: "family", cx: 42, cy: 150, label: "Family" },
    { id: "sitter", cx: 35, cy: 70, label: "Sitter" },
  ];

  return (
    <svg
      viewBox="0 0 200 200"
      width="100%"
      height="100%"
      className="text-foreground"
      aria-hidden="true"
    >
      {nodes.map((n, i) => (
        <motion.line
          key={`line-${n.id}`}
          x1={center.cx}
          y1={center.cy}
          x2={n.cx}
          y2={n.cy}
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : undefined}
          transition={{
            duration: 0.7,
            delay: 0.3 + i * 0.1,
            ease: EASE_OUT_EXPO,
          }}
        />
      ))}

      {nodes.map((n, i) => (
        <motion.g
          key={`node-${n.id}`}
          initial={{ opacity: 0, scale: 0.3 }}
          animate={inView ? { opacity: 1, scale: 1 } : undefined}
          transition={{
            duration: 0.5,
            delay: 0.55 + i * 0.1,
            ease: EASE_OUT_EXPO,
          }}
          style={{ transformOrigin: `${n.cx}px ${n.cy}px` }}
        >
          <motion.circle
            cx={n.cx}
            cy={n.cy}
            r="11"
            fill="none"
            stroke="hsl(var(--sage))"
            strokeOpacity="0.35"
            strokeWidth="1"
            animate={
              reduce
                ? undefined
                : { r: [11, 14, 11], opacity: [0.35, 0.05, 0.35] }
            }
            transition={{
              duration: 3.2,
              delay: 1 + i * 0.25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <circle
            cx={n.cx}
            cy={n.cy}
            r="5"
            fill="hsl(var(--card))"
            stroke="currentColor"
            strokeOpacity="0.7"
            strokeWidth="1.2"
          />
        </motion.g>
      ))}

      <motion.g
        initial={{ opacity: 0, scale: 0.3 }}
        animate={inView ? { opacity: 1, scale: 1 } : undefined}
        transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
        style={{ transformOrigin: `${center.cx}px ${center.cy}px` }}
      >
        <motion.circle
          cx={center.cx}
          cy={center.cy}
          r="14"
          fill="none"
          stroke="hsl(var(--sage))"
          strokeOpacity="0.5"
          strokeWidth="1"
          animate={
            reduce ? undefined : { r: [14, 19, 14], opacity: [0.5, 0.1, 0.5] }
          }
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <circle
          cx={center.cx}
          cy={center.cy}
          r="8"
          fill="hsl(var(--sage))"
        />
      </motion.g>
    </svg>
  );
}
