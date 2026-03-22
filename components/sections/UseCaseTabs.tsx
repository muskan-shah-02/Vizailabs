"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

const roles = [
  {
    label: "CXO",
    title: "Strategic Intelligence at a Glance",
    description:
      "Get a board-ready view of your organization's documentation health, AI usage costs, and knowledge coverage across all products.",
    points: [
      "Business impact analysis — quantify doc debt in sprint cost",
      "Real-time billing visibility and AI cost control",
      "Strategic knowledge insights across teams and projects",
      "Coverage reports for investor and compliance review",
    ],
    accentColor: "#1E3A5F",
    metrics: [
      { label: "Docs Analyzed", value: "1,284" },
      { label: "Cost Savings", value: "$48K/yr" },
      { label: "Coverage", value: "94%" },
    ],
  },
  {
    label: "Developer",
    title: "Catch Drift Before It Becomes Debt",
    description:
      "Stay aligned between your code and its documentation. Detect mismatches automatically on every push, and search your entire codebase semantically.",
    points: [
      "Code-doc mismatch detection on every commit",
      "Repository-level analysis with function-level granularity",
      "Semantic code search across all linked repos",
      "Auto-suggested doc updates on PR merge",
    ],
    accentColor: "#4F6EF7",
    metrics: [
      { label: "Mismatches Found", value: "23" },
      { label: "Repos Connected", value: "12" },
      { label: "Time Saved", value: "4hr/wk" },
    ],
  },
  {
    label: "Business Analyst",
    title: "Requirements You Can Actually Trust",
    description:
      "Trace every requirement from PRD to code. Know exactly which features are implemented, which are missing, and where the gaps are.",
    points: [
      "End-to-end requirements traceability across all sources",
      "Gap analysis — which requirements have no code coverage?",
      "Coverage metrics per sprint, release, or domain",
      "Auto-generated traceability matrix for stakeholders",
    ],
    accentColor: "#2D5F9E",
    metrics: [
      { label: "Requirements", value: "342" },
      { label: "Traced", value: "97%" },
      { label: "Gaps Found", value: "18" },
    ],
  },
  {
    label: "Product Manager",
    title: "Your Product's Knowledge, Always Current",
    description:
      "Browse the ontology of your product's features, view AI-generated analysis of your documentation, and ensure specs stay in sync with reality.",
    points: [
      "Feature documentation with AI-generated summaries",
      "Analysis history — track how understanding evolves",
      "Ontology browser — explore your product's concept map",
      "Stakeholder-ready documentation health reports",
    ],
    accentColor: "#7B96FF",
    metrics: [
      { label: "Features Mapped", value: "87" },
      { label: "Doc Freshness", value: "91%" },
      { label: "Concepts", value: "243" },
    ],
  },
  {
    label: "Auditor",
    title: "Compliance Without the Chase",
    description:
      "Access a complete, read-only view of every document change, approval decision, and access event. Export-ready for any compliance framework.",
    points: [
      "Read-only audit logs with immutable timestamps",
      "Compliance reporting — SOC 2, ISO 27001, GDPR ready",
      "Full change history with before/after diffs",
      "User access reports and permission audit trails",
    ],
    accentColor: "#22C55E",
    metrics: [
      { label: "Audit Events", value: "12,840" },
      { label: "Approvals", value: "1,284" },
      { label: "Frameworks", value: "SOC2 ✓" },
    ],
  },
];

export function UseCaseTabs() {
  const [active, setActive] = useState(0);
  const role = roles[active];

  return (
    <section
      id="use-cases"
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
          className="text-center mb-14"
        >
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4"
            style={{
              background: "rgba(79,110,247,0.1)",
              color: "#4F6EF7",
              border: "1px solid rgba(79,110,247,0.2)",
            }}
          >
            Use Cases by Role
          </span>
          <h2 className="text-4xl font-bold" style={{ color: "#0F172A" }}>
            DokyDoc Works for Every Role in Your Organization
          </h2>
        </motion.div>

        {/* Tab pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {roles.map((r, i) => (
            <button
              key={r.label}
              onClick={() => setActive(i)}
              className="px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200"
              style={
                active === i
                  ? {
                      background: r.accentColor,
                      color: "#FFFFFF",
                      boxShadow: `0 4px 16px ${r.accentColor}40`,
                    }
                  : {
                      background: "white",
                      color: "#64748B",
                      border: "1px solid #E2E8F0",
                    }
              }
            >
              {r.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            {/* Left: Description */}
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#0F172A" }}>
                {role.title}
              </h3>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "#64748B" }}>
                {role.description}
              </p>
              <ul className="space-y-3">
                {role.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} color={role.accentColor} className="flex-shrink-0 mt-0.5" />
                    <span style={{ color: "#0F172A" }}>{point}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/use-cases"
                className="inline-flex items-center gap-2 mt-8 font-semibold text-sm transition-colors hover:underline"
                style={{ color: role.accentColor }}
              >
                See {role.label} use case in full →
              </a>
            </div>

            {/* Right: Dashboard mockup */}
            <div>
              <div
                className="rounded-2xl overflow-hidden shadow-xl"
                style={{ border: "1px solid #E2E8F0", background: "#FFFFFF" }}
              >
                {/* Mockup header */}
                <div
                  className="px-5 py-3 flex items-center gap-3"
                  style={{ borderBottom: "1px solid #E2E8F0" }}
                >
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#EF4444] opacity-60" />
                    <div className="w-3 h-3 rounded-full bg-[#F59E0B] opacity-60" />
                    <div className="w-3 h-3 rounded-full bg-[#22C55E] opacity-60" />
                  </div>
                  <div
                    className="flex-1 max-w-xs mx-auto rounded px-3 py-1 text-xs text-center"
                    style={{ background: "#F8FAFC", color: "#94A3B8" }}
                  >
                    app.dokydoc.com/{role.label.toLowerCase()}
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="font-bold" style={{ color: "#0F172A" }}>
                      {role.label} Dashboard
                    </h4>
                    <span
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{ background: `${role.accentColor}15`, color: role.accentColor }}
                    >
                      Live
                    </span>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {role.metrics.map((m, i) => (
                      <div
                        key={i}
                        className="rounded-xl p-4 text-center"
                        style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}
                      >
                        <div className="text-2xl font-black mb-1" style={{ color: role.accentColor }}>
                          {m.value}
                        </div>
                        <div className="text-xs" style={{ color: "#94A3B8" }}>
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Placeholder chart bars */}
                  <div
                    className="rounded-xl p-4"
                    style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}
                  >
                    <p className="text-xs font-medium mb-3" style={{ color: "#64748B" }}>
                      Activity — Last 7 days
                    </p>
                    <div className="flex items-end gap-2 h-20">
                      {[60, 80, 45, 90, 70, 85, 95].map((h, i) => (
                        <motion.div
                          key={i}
                          className="flex-1 rounded-t"
                          style={{ background: `${role.accentColor}${i === 6 ? "FF" : "60"}` }}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: i * 0.05, duration: 0.4 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
