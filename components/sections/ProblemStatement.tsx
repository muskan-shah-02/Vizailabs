"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  {
    value: 68,
    suffix: "%",
    label: "of engineering docs are outdated within 3 months.",
    color: "#EF4444",
  },
  {
    prefix: "$",
    value: 2.4,
    suffix: "M+",
    label: "lost annually per company from documentation debt.",
    color: "#F59E0B",
    isDecimal: true,
  },
  {
    value: 19,
    suffix: "%",
    label: "of dev time spent searching for information.",
    color: "#4F6EF7",
  },
];

export function ProblemStatement() {
  return (
    <section
      id="problem"
      className="py-24 px-6"
      style={{ background: "#F8FAFC" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4"
            style={{
              background: "rgba(239,68,68,0.1)",
              color: "#EF4444",
              border: "1px solid rgba(239,68,68,0.2)",
            }}
          >
            The Problem
          </span>
          <h2 className="text-4xl font-bold" style={{ color: "#0F172A" }}>
            Documentation Debt Is Killing Your Team&apos;s Velocity
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Stats */}
          <div className="space-y-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex items-start gap-5"
              >
                {/* Accent line */}
                <div
                  className="w-1 self-stretch rounded-full flex-shrink-0"
                  style={{ background: stat.color, minHeight: "56px" }}
                />
                <div>
                  <div
                    className="text-5xl font-black leading-none mb-2"
                    style={{ color: stat.color }}
                  >
                    {stat.isDecimal ? (
                      <span>
                        {stat.prefix ?? ""}
                        <AnimatedCounter value={stat.value} />
                        {stat.suffix}
                      </span>
                    ) : (
                      <AnimatedCounter
                        value={stat.value}
                        prefix={stat.prefix ?? ""}
                        suffix={stat.suffix}
                      />
                    )}
                  </div>
                  <p className="text-lg font-medium" style={{ color: "#0F172A" }}>
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Description */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6" style={{ color: "#0F172A" }}>
              Documentation is the backbone of every product — but it&apos;s always falling behind.
            </h3>
            <p className="text-lg leading-relaxed mb-6" style={{ color: "#64748B" }}>
              Code changes. Requirements shift. Teams grow. Every sprint, the gap between what your
              docs say and what your system actually does widens — silently costing you rework,
              misaligned decisions, and onboarding friction.
            </p>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "#64748B" }}>
              DokyDoc keeps your knowledge base alive, accurate, and queryable. AI doesn&apos;t just
              read your documents — it understands them, tracks their evolution, and alerts you
              the moment something drifts out of sync.
            </p>

            {/* Callout box */}
            <div
              className="rounded-xl p-5"
              style={{
                background: "rgba(79,110,247,0.06)",
                border: "1px solid rgba(79,110,247,0.15)",
              }}
            >
              <p className="font-semibold text-base" style={{ color: "#1E3A5F" }}>
                &ldquo;The average enterprise loses 3–5 sprints per quarter to documentation debt.
                DokyDoc closes that gap — automatically.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
