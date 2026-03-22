"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "DokyDoc cut our documentation review time by 60%. The mismatch detection alone saved us 2 sprints of rework. It's become a critical part of our engineering workflow.",
    name: "Alex Rivera",
    role: "Engineering Lead",
    company: "Series B Startup",
    initials: "AR",
    color: "#4F6EF7",
  },
  {
    quote:
      "AskyDoc is like having a documentation expert available 24/7. Our analysts love it — they get answers in seconds instead of hunting through Confluence for hours.",
    name: "Priya Mehta",
    role: "Head of Product",
    company: "Enterprise SaaS",
    initials: "PM",
    color: "#7B96FF",
  },
  {
    quote:
      "Finally, a platform that treats docs as first-class citizens in the dev workflow. The ontology engine gave us visibility we never had — across 6 repos and 3 years of specs.",
    name: "James O'Brien",
    role: "CTO",
    company: "Tech Consultancy",
    initials: "JO",
    color: "#2D5F9E",
  },
];

export function Testimonials() {
  return (
    <section
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
          className="text-center mb-16"
        >
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4"
            style={{
              background: "rgba(79,110,247,0.15)",
              color: "#7B96FF",
              border: "1px solid rgba(79,110,247,0.3)",
            }}
          >
            What Teams Say
          </span>
          <h2 className="text-4xl font-bold" style={{ color: "#F1F5F9" }}>
            Trusted by Engineering Teams Who Ship Fast
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative rounded-2xl p-8 flex flex-col"
              style={{
                background: "linear-gradient(145deg, #111827, #1a2332)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Quote icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-6"
                style={{ background: `${t.color}20` }}
              >
                <Quote size={18} color={t.color} />
              </div>

              {/* Quote text */}
              <p className="text-base leading-relaxed flex-1 mb-8" style={{ color: "#94A3B8" }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}, #7B96FF)` }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "#F1F5F9" }}>
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: "#64748B" }}>
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>

              {/* Accent bottom bar */}
              <div
                className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full"
                style={{ background: `linear-gradient(90deg, ${t.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Stars */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-col items-center gap-3"
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#F59E0B">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
          <p className="text-sm" style={{ color: "#64748B" }}>
            Early access teams report <span style={{ color: "#F1F5F9", fontWeight: 600 }}>4.9 / 5</span> satisfaction
          </p>
        </motion.div>
      </div>
    </section>
  );
}
