"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

import { SECTIONS } from "@/lib/content";
import { cn } from "@/lib/utils";

const NAV_ITEMS = SECTIONS.map((s) => ({ id: s.id, label: s.eyebrow }));
const SECTION_IDS = NAV_ITEMS.map((n) => n.id);

const REVEAL_AT = 240;
const FULLY_VISIBLE_AT = 560;

function useActiveSection(): string {
  const [active, setActive] = useState<string>(SECTION_IDS[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry whose center is closest to the viewport center.
        const inView = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (inView[0]) {
          setActive(inView[0].target.id);
        }
      },
      {
        threshold: [0, 0.25, 0.5, 0.75],
        rootMargin: "-35% 0px -35% 0px",
      },
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}

export function SiteNav() {
  const { scrollY, scrollYProgress } = useScroll();
  const opacity = useTransform(
    scrollY,
    [REVEAL_AT, FULLY_VISIBLE_AT],
    [0, 1],
  );
  const topNavY = useTransform(scrollY, [REVEAL_AT, FULLY_VISIBLE_AT], [-8, 0]);

  const [interactive, setInteractive] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => {
    setInteractive(v > REVEAL_AT);
  });

  const active = useActiveSection();

  return (
    <>
      <motion.header
        style={{ opacity, y: topNavY }}
        className={cn(
          "fixed inset-x-0 top-0 z-40 border-b border-border/30 bg-background/55 backdrop-blur-xl",
          interactive ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5 md:px-10">
          <a
            href="#hero"
            className="flex items-center gap-2 text-sm font-medium tracking-tight text-foreground"
          >
            <span
              className="h-1.5 w-1.5 rounded-full bg-sage"
              aria-hidden="true"
            />
            Pet Directive
          </a>
          <span className="hidden text-caption uppercase text-muted-foreground sm:inline">
            A Founder&apos;s Brief
          </span>
        </div>
      </motion.header>

      <motion.nav
        style={{ opacity }}
        aria-label="Section navigation"
        className={cn(
          "fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 md:block",
          interactive ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <ul className="flex flex-col gap-3.5">
          {NAV_ITEMS.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-label={label}
                  aria-current={isActive ? "true" : undefined}
                  className="group relative flex items-center justify-end"
                >
                  <span
                    className={cn(
                      "block h-[5px] rounded-full transition-[width,background-color] duration-300 ease-out",
                      isActive
                        ? "w-5 bg-sage"
                        : "w-[5px] bg-muted-foreground/30 group-hover:bg-muted-foreground/70",
                    )}
                  />
                  <span className="pointer-events-none absolute right-7 whitespace-nowrap rounded-md border border-border/60 bg-card/85 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground opacity-0 backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100">
                    {label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </motion.nav>

      <motion.div
        style={{ opacity }}
        aria-hidden="true"
        className="pointer-events-none fixed bottom-[12vh] right-2 top-[12vh] z-40 w-px overflow-hidden rounded-full bg-border/40 md:hidden"
      >
        <motion.span
          className="block h-full w-full origin-top bg-sage"
          style={{ scaleY: scrollYProgress }}
        />
      </motion.div>
    </>
  );
}
