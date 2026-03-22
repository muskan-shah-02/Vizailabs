"use client";

import { motion } from "framer-motion";
import { Brain, Link2, Globe, MessageSquare, Shield, Building2 } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Multi-Pass AI Analysis",
    description:
      "4-pass document processing with semantic enrichment, relationship extraction, and real-time cost tracking per analysis run.",
    color: "#4F6EF7",
  },
  {
    icon: Link2,
    title: "Code-Doc Alignment",
    description:
      "Detect mismatches between your codebase and documentation in real time. Get notified before drift becomes debt.",
    color: "#7B96FF",
  },
  {
    icon: Globe,
    title: "Business Ontology Engine",
    description:
      "Dual knowledge graphs for documents and code, linked by a 3-tier AI-validated concept matching algorithm. 97% cost savings vs. naive matching.",
    color: "#2D5F9E",
  },
  {
    icon: MessageSquare,
    title: "AskyDoc AI Assistant",
    description:
      "Ask your organization's knowledge base anything in plain English. Every answer is grounded in your actual data with source citations.",
    color: "#4F6EF7",
  },
  {
    icon: Shield,
    title: "Role-Based Governance",
    description:
      "20+ granular permissions, RBAC roles, structured approval workflows, and a complete audit trail — out of the box, zero configuration.",
    color: "#22C55E",
  },
  {
    icon: Building2,
    title: "Multi-Tenant SaaS",
    description:
      "Complete data isolation between organizations. Prepaid and postpaid billing enforcement with AI cost caps and real-time usage dashboards.",
    color: "#F59E0B",
  },
];

export function FeatureGrid() {
  return (
    <section
      id="features"
      className="py-24 px-6"
      style={{ background: "#F8FAFC" }}
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
              background: "rgba(79,110,247,0.1)",
              color: "#4F6EF7",
              border: "1px solid rgba(79,110,247,0.2)",
            }}
          >
            Core Features
          </span>
          <h2 className="text-4xl font-bold mb-4" style={{ color: "#0F172A" }}>
            Everything Your Team Needs to Know,{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #4F6EF7, #7B96FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Always Up to Date.
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
            Six enterprise-grade capabilities engineered into a single platform — no integrations required.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl p-7 bg-white transition-all duration-300 hover:-translate-y-1"
              style={{
                border: "1px solid #E2E8F0",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  `0 12px 40px rgba(0,0,0,0.08), 0 0 0 1px ${feature.color}30`;
                (e.currentTarget as HTMLElement).style.borderColor = `${feature.color}30`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)";
                (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0";
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${feature.color}15` }}
              >
                <feature.icon size={22} color={feature.color} />
              </div>

              <h3 className="text-lg font-bold mb-2" style={{ color: "#0F172A" }}>
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
                {feature.description}
              </p>

              {/* Hover accent line */}
              <div
                className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, ${feature.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
