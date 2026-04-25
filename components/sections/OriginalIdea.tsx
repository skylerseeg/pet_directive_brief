"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { Section } from "@/components/ui/Section";
import { getSection } from "@/lib/content";

const idea = getSection("original-idea");

const BUBBLE_EASE = [0.34, 1.4, 0.64, 1] as const;

export function OriginalIdea() {
  const threadRef = useRef<HTMLDivElement>(null);
  const inView = useInView(threadRef, { once: true, margin: "-20% 0px" });
  const lastIndex = idea.messages.length - 1;

  return (
    <Section id="original-idea">
      <header className="mb-14 max-w-2xl md:mb-16">
        <span className="text-caption uppercase text-muted-foreground">
          {idea.eyebrow}
        </span>
        <h2 className="mt-4 font-serif text-heading [text-wrap:balance]">
          {idea.headline}
        </h2>
        <p className="mt-5 max-w-xl text-body-lg text-muted-foreground">
          {idea.body}
        </p>
      </header>

      <div className="mx-auto w-full max-w-md">
        <div className="mb-5 flex items-center justify-center gap-3">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-sm font-medium text-foreground"
            aria-hidden="true"
          >
            {idea.contact.initial}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium leading-tight">
              {idea.contact.name}
            </span>
            <span className="text-[11px] text-muted-foreground">
              iMessage · {idea.contact.timestamp}
            </span>
          </div>
        </div>

        <div ref={threadRef} className="flex flex-col gap-1.5">
          {idea.messages.map((m, i) => {
            const isLast = i === lastIndex;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8, scale: 0.94 }}
                animate={
                  inView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : undefined
                }
                transition={{
                  duration: 0.42,
                  delay: i * 0.55,
                  ease: BUBBLE_EASE,
                }}
                className="flex max-w-[88%] self-start"
              >
                <div
                  className={[
                    "relative rounded-[22px] bg-secondary px-4 py-2.5 text-[15px] leading-snug text-foreground",
                    isLast ? "rounded-bl-[6px]" : "",
                  ].join(" ")}
                >
                  {m}
                  {isLast ? (
                    <svg
                      aria-hidden="true"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      className="absolute -bottom-[1px] -left-[5px] text-secondary"
                    >
                      <path
                        d="M14 16C8 16 4 12 4 8c0 3 -1 6 -4 8 5 0 10 0 14 0Z"
                        fill="currentColor"
                      />
                    </svg>
                  ) : null}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : undefined}
          transition={{
            duration: 0.5,
            delay: idea.messages.length * 0.55 + 0.25,
          }}
          className="mt-2 text-right text-[10px] uppercase tracking-[0.18em] text-muted-foreground/80"
        >
          Read 11:43 PM
        </motion.p>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 6 }}
        animate={inView ? { opacity: 1, y: 0 } : undefined}
        transition={{
          duration: 0.6,
          delay: idea.messages.length * 0.55 + 0.55,
        }}
        className="mx-auto mt-12 max-w-xl text-center font-serif text-subheading text-foreground/85 [text-wrap:balance] md:mt-16"
      >
        Cody saw something real.
      </motion.p>
    </Section>
  );
}
