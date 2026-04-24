"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AskSection() {
  return (
    <section id="ask" className="px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center"
      >
        <div className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">
          The ask
        </div>
        <h2 className="font-serif text-4xl leading-tight md:text-6xl">
          Raising $3.5M to build the directive layer for pet care.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
          18-month runway to ship clinician tooling, household mobile app, and
          our sitter hand-off protocol.
        </p>
        <div className="mt-10 flex items-center justify-center gap-3">
          <Button size="lg">
            <Mail />
            founders@petdirective.co
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
