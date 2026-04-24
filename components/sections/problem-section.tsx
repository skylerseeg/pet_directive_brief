"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const problems = [
  {
    title: "Fragmented records",
    body: "Care histories live across paper folders, clinic portals, and chat threads.",
  },
  {
    title: "Missed directives",
    body: "Feeding schedules, meds, and allergies get lost between caregivers.",
  },
  {
    title: "Low trust, high stakes",
    body: "Owners hand off beloved pets without a shared, verifiable plan.",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
            <AlertTriangle className="h-3.5 w-3.5" />
            The problem
          </div>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            Pet care runs on memory, not systems.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{p.title}</CardTitle>
                  <CardDescription>{p.body}</CardDescription>
                </CardHeader>
                <CardContent />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
