"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const milestones = [
  "Closed design partnerships with 12 clinics",
  "Waitlist of 4,300 owners across 34 states",
  "Pilot NPS of 72 across first 140 households",
  "Signed LOIs from two regional sitter networks",
];

export function TractionSection() {
  return (
    <section id="traction" className="bg-muted/20 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 max-w-2xl">
          <div className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">
            Traction
          </div>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            Signal from the field.
          </h2>
        </div>
        <ul className="grid gap-4 md:grid-cols-2">
          {milestones.map((m, i) => (
            <motion.li
              key={m}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-start gap-3 rounded-lg border border-border bg-card p-5"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
              <span className="text-base">{m}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
