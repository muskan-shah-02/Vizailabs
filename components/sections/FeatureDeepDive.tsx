"use client";

import { motion } from "framer-motion";
import { BrowserMockup } from "@/components/ui/BrowserMockup";
import { Badge } from "@/components/ui/Badge";
import { ChatMockup } from "@/components/ui/ChatMockup";

// ── Knowledge Graph Visual ─────────────────────────────────────────────────
function OntologyVisual() {
  const nodes = [
    { x: 50, y: 20, label: "Authentication", r: 5, color: "#4F6EF7", links: [1, 2, 4] },
    { x: 20, y: 45, label: "User Model", r: 4, color: "#7B96FF", links: [3] },
    { x: 80, y: 45, label: "JWT Service", r: 4, color: "#7B96FF", links: [4] },
    { x: 30, y: 72, label: "DB Schema", r: 3.5, color: "#4F6EF7", links: [] },
    { x: 70, y: 70, label: "API Gateway", r: 3.5, color: "#2D5F9E", links: [] },
    { x: 50, y: 55, label: "Session Mgr", r: 4.5, color: "#22C55E", links: [3, 4] },
  ];

  const edges = nodes.flatMap((n, i) => n.links.map((j) => [i, j] as [number, number]));

  return (
    <BrowserMockup url="app.dokydoc.com/ontology">
      <div className="p-5">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold" style={{ color: "#F1F5F9" }}>
            Business Ontology — Authentication Domain
          </span>
          <span
            className="ml-auto text-xs px-2 py-0.5 rounded-full"
            style={{ background: "rgba(34,197,94,0.15)", color: "#22C55E" }}
          >
            ● 94% matched
          </span>
        </div>

        <svg viewBox="0 0 100 90" style={{ width: "100%", height: "220px" }}>
          {/* Animated edges */}
          {edges.map(([a, b], i) => (
            <motion.line
              key={i}
              x1={`${nodes[a].x}%`} y1={`${nodes[a].y}%`}
              x2={`${nodes[b].x}%`} y2={`${nodes[b].y}%`}
              stroke="rgba(79,110,247,0.3)"
              strokeWidth="0.4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            />
          ))}

          {/* Nodes */}
          {nodes.map((node, i) => (
            <motion.g
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 + 0.3, type: "spring" }}
              style={{ transformOrigin: `${node.x}% ${node.y}%` }}
            >
              <circle
                cx={`${node.x}%`} cy={`${node.y}%`}
                r={node.r * 2}
                fill={node.color}
                opacity={0.12}
              />
              <circle
                cx={`${node.x}%`} cy={`${node.y}%`}
                r={node.r}
                fill={node.color}
              />
              <text
                x={`${node.x}%`} y={`${node.y + 9}%`}
                textAnchor="middle"
                fill="rgba(241,245,249,0.55)"
                fontSize="3.5"
                fontFamily="sans-serif"
              >
                {node.label}
              </text>
            </motion.g>
          ))}
        </svg>

        <div
          className="flex items-center gap-4 mt-3 pt-3 text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)", color: "#64748B" }}
        >
          <span>87 concepts</span>
          <span>·</span>
          <span>243 relationships</span>
          <span>·</span>
          <span style={{ color: "#22C55E" }}>97% cost savings vs. naive matching</span>
        </div>
      </div>
    </BrowserMockup>
  );
}

// ── Audit Trail Visual ─────────────────────────────────────────────────────
function AuditVisual() {
  const entries = [
    {
      time: "2026-03-22 14:32",
      user: "sarah.k",
      action: "approved",
      doc: "API-Spec-v3.pdf",
      badge: "Approved",
      color: "#22C55E",
    },
    {
      time: "2026-03-22 13:15",
      user: "dev-team",
      action: "updated",
      doc: "Auth Flow.md",
      badge: "Modified",
      color: "#F59E0B",
    },
    {
      time: "2026-03-22 11:02",
      user: "compliance",
      action: "reviewed",
      doc: "GDPR Policy.pdf",
      badge: "Reviewed",
      color: "#4F6EF7",
    },
    {
      time: "2026-03-21 17:44",
      user: "james.o",
      action: "flagged",
      doc: "PRD-v2.pdf",
      badge: "Mismatch",
      color: "#EF4444",
    },
  ];

  return (
    <BrowserMockup url="app.dokydoc.com/audit">
      <div className="p-5">
        <p className="text-xs font-semibold mb-4" style={{ color: "#F1F5F9" }}>
          Audit Trail — Last 24 hours
        </p>
        <div className="space-y-2">
          {entries.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <span className="text-xs font-mono" style={{ color: "#64748B", minWidth: "120px" }}>
                {e.time}
              </span>
              <span className="text-xs font-medium" style={{ color: "#7B96FF" }}>
                @{e.user}
              </span>
              <span className="text-xs" style={{ color: "#F1F5F9", flex: 1 }}>
                {e.action} <span style={{ color: "#94A3B8" }}>{e.doc}</span>
              </span>
              <span
                className="text-xs px-2 py-0.5 rounded-full font-medium"
                style={{ background: `${e.color}20`, color: e.color }}
              >
                {e.badge}
              </span>
            </motion.div>
          ))}
        </div>
        <div
          className="mt-4 pt-3 text-xs flex items-center justify-between"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)", color: "#64748B" }}
        >
          <span>Showing 4 of 127 events today</span>
          <span style={{ color: "#4F6EF7", cursor: "pointer" }}>View all →</span>
        </div>
      </div>
    </BrowserMockup>
  );
}

// ── Section component ──────────────────────────────────────────────────────
interface DeepDiveSectionProps {
  reverse?: boolean;
  visual: React.ReactNode;
  tag: string;
  title: string;
  body: string;
  pills: string[];
  dark?: boolean;
}

function DeepDiveSection({ reverse, visual, tag, title, body, pills, dark }: DeepDiveSectionProps) {
  const bg = dark ? "#0B0F1A" : "#FFFFFF";
  const headColor = dark ? "#F1F5F9" : "#0F172A";
  const textColor = dark ? "#94A3B8" : "#64748B";

  return (
    <section className="py-24 px-6" style={{ background: bg }}>
      <div className="max-w-6xl mx-auto">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${reverse ? "lg:grid-flow-dense" : ""}`}>
          {/* Visual */}
          <motion.div
            className={reverse ? "lg:col-start-2" : ""}
            initial={{ opacity: 0, x: reverse ? 24 : -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {visual}
          </motion.div>

          {/* Text */}
          <motion.div
            className={reverse ? "lg:col-start-1" : ""}
            initial={{ opacity: 0, x: reverse ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4"
              style={{
                background: "rgba(79,110,247,0.15)",
                color: "#7B96FF",
                border: "1px solid rgba(79,110,247,0.25)",
              }}
            >
              {tag}
            </span>

            <h2 className="text-3xl font-bold mb-5 leading-tight" style={{ color: headColor }}>
              {title}
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: textColor }}>
              {body}
            </p>

            {/* Pill tags */}
            <div className="flex flex-wrap gap-2">
              {pills.map((pill) => (
                <Badge key={pill} variant="accent">
                  {pill}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Main export ────────────────────────────────────────────────────────────
export function FeatureDeepDive() {
  return (
    <>
      {/* Section A — Knowledge Graph */}
      <DeepDiveSection
        dark
        tag="Business Ontology Engine"
        title="A Living Map of Your Organization's Knowledge."
        body="DokyDoc builds two separate knowledge graphs — one for your documents, one for your code — then links them using a 3-tier matching algorithm (exact, fuzzy, AI-validated). The result: a single source of truth across your entire tech stack. Updated automatically with every commit and document change."
        pills={["Business Ontology Engine", "Concept Mapping", "97% cost savings on matching"]}
        visual={<OntologyVisual />}
      />

      {/* Section B — AskyDoc */}
      <DeepDiveSection
        reverse
        tag="AskyDoc AI Assistant"
        title="Ask Anything. Get Answers From Your Own Data."
        body="AskyDoc assembles context from your documents and code, then synthesizes precise answers using Gemini or Claude. No hallucinations — every answer is grounded in your actual data with source citations, page references, and confidence scores."
        pills={["RAG Architecture", "Source Citations", "DB-First Intelligence"]}
        visual={
          <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
            <ChatMockup />
          </div>
        }
      />

      {/* Section C — Governance */}
      <DeepDiveSection
        dark
        tag="Governance & Compliance"
        title="Complete Governance Out of the Box."
        body="Every change is tracked. Every document goes through an approval chain. Every access is logged with a timestamped record. DokyDoc gives compliance teams a full audit trail without any extra configuration — ready for SOC 2, ISO 27001, and GDPR from day one."
        pills={["Approval Workflows", "RBAC", "Audit Trail"]}
        visual={<AuditVisual />}
      />
    </>
  );
}
