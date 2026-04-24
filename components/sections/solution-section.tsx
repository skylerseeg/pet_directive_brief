"use client";

import { motion } from "framer-motion";
import { Compass, ShieldCheck, Share2 } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    title: "Directive-first",
    body: "A living care plan — meds, diet, routine — owned by the pet, not the platform.",
  },
  {
    icon: ShieldCheck,
    title: "Vet-verified",
    body: "Clinicians sign records; caregivers inherit trusted guidance.",
  },
  {
    icon: Share2,
    title: "Sharable in a tap",
    body: "Hand off to a sitter or ER with a single link and full context.",
  },
];

export function SolutionSection() {
  return (
    <section id="solution" className="bg-muted/20 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 max-w-2xl">
          <div className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">
            The solution
          </div>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            One directive. Every caregiver. Every time.
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-2xl">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
