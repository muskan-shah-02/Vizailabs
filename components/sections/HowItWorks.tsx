"use client";

import { motion } from "framer-motion";
import { Upload, Brain, ShieldCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Connect Your Sources",
    body: "Upload PDFs, link Git repositories, or sync from Notion, Jira, and Slack. DokyDoc ingests everything in minutes.",
    color: "#4F6EF7",
  },
  {
    number: "02",
    icon: Brain,
    title: "AI Analyzes Everything",
    body: "Our multi-pass AI engine extracts concepts, maps relationships, and detects mismatches between your code and docs across four intelligence passes.",
    color: "#7B96FF",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Govern & Query",
    body: "Ask questions in plain English via AskyDoc, enforce approval workflows, and track every change with a full audit trail.",
    color: "#22C55E",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 px-6"
      style={{ background: "#0B0F1A" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4"
            style={{
              background: "rgba(79,110,247,0.15)",
              color: "#7B96FF",
              border: "1px solid rgba(79,110,247,0.3)",
            }}
          >
            How It Works
          </span>
          <h2 className="text-4xl font-bold" style={{ color: "#F1F5F9" }}>
            From Chaos to Clarity in Three Steps.
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
            DokyDoc turns your scattered knowledge assets into a unified, queryable intelligence layer — in minutes, not months.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[72px] left-[16.66%] right-[16.66%] h-px"
            style={{ background: "linear-gradient(90deg, #4F6EF7, #7B96FF, #22C55E)" }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon circle */}
                <div
                  className="relative w-[72px] h-[72px] rounded-2xl flex items-center justify-center mb-6 z-10"
                  style={{
                    background: `${step.color}20`,
                    border: `2px solid ${step.color}50`,
                    boxShadow: `0 0 30px ${step.color}25`,
                  }}
                >
                  <step.icon size={28} color={step.color} />

                  {/* Step number badge */}
                  <span
                    className="absolute -top-3 -right-3 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center"
                    style={{ background: step.color, color: "#fff" }}
                  >
                    {i + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3" style={{ color: "#F1F5F9" }}>
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "#64748B" }}>
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-white transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #4F6EF7, #7B96FF)",
              boxShadow: "0 4px 24px rgba(79,110,247,0.35)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px rgba(79,110,247,0.55)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(79,110,247,0.35)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            See It In Action
          </a>
        </motion.div>
      </div>
    </section>
  );
}
