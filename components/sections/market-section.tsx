"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "$261B", label: "Global pet care spend, 2024" },
  { value: "90M", label: "US households with a pet" },
  { value: "68%", label: "Owners sharing care with a non-primary" },
];

export function MarketSection() {
  return (
    <section id="market" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 max-w-2xl">
          <div className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">
            Market
          </div>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            A category built on love — still waiting for infrastructure.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="font-serif text-5xl">{s.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
