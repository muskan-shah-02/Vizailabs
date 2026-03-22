"use client";

import { motion, type Variants } from "framer-motion";
import { Play, ArrowRight, CheckCircle, AlertTriangle, Network } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { GradientText } from "@/components/ui/GradientText";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  }),
};

const companyLogos = [
  "Acme Corp",
  "TechFlow",
  "NovaSoft",
  "DataBridge",
  "CloudPeak",
];

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
      style={{ background: "linear-gradient(135deg, #0B0F1A 0%, #1E2D4F 50%, #0B0F1A 100%)" }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(79,110,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(79,110,247,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blobs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #4F6EF7 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex justify-center mb-6"
        >
          <Badge variant="accent">
            <span>✦</span>
            <span>Now in Early Access</span>
          </Badge>
        </motion.div>

        {/* H1 */}
        <motion.h1
          custom={0.1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-bold leading-[1.1] tracking-tight mb-6"
          style={{ fontSize: "clamp(40px, 7vw, 72px)", color: "#F1F5F9" }}
        >
          Your Documents Know More
          <br />
          <GradientText>Than You Think.</GradientText>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          custom={0.2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mx-auto mb-10 leading-relaxed max-w-2xl"
          style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "#94A3B8" }}
        >
          DokyDoc uses multi-pass AI to turn your documents and code into a living
          knowledge graph — with governance, alignment checks, and an AI assistant built in.
        </motion.p>

        {/* CTA Row */}
        <motion.div
          custom={0.3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-white transition-all duration-200 group"
            style={{
              background: "linear-gradient(135deg, #4F6EF7, #7B96FF)",
              boxShadow: "0 4px 24px rgba(79,110,247,0.4)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px rgba(79,110,247,0.6)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(79,110,247,0.4)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Start Free Trial
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="#how-it-works"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold transition-all duration-150"
            style={{
              color: "#F1F5F9",
              border: "1px solid rgba(241,245,249,0.2)",
              background: "rgba(241,245,249,0.04)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(241,245,249,0.09)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(241,245,249,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(241,245,249,0.04)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(241,245,249,0.2)";
            }}
          >
            <Play size={16} fill="currentColor" />
            Watch Demo
          </Link>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          custom={0.4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="relative mx-auto max-w-4xl"
        >
          {/* Floating stat cards */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 sm:-left-16 top-12 z-20"
          >
            <StatCard icon={<Network size={14} />} label="87 concepts mapped" color="#4F6EF7" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -right-4 sm:-right-16 top-24 z-20"
          >
            <StatCard icon={<AlertTriangle size={14} />} label="3 mismatches detected" color="#F59E0B" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-4 sm:-right-12 bottom-20 z-20"
          >
            <StatCard icon={<CheckCircle size={14} />} label="Analysis complete ✓" color="#22C55E" />
          </motion.div>

          {/* Browser mockup */}
          <div
            className="relative rounded-2xl overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.6)] animate-pulse-glow"
            style={{
              border: "1px solid rgba(79,110,247,0.25)",
              background: "#111827",
            }}
          >
            {/* Browser chrome */}
            <div
              className="flex items-center gap-3 px-5 py-4"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "#0D1421" }}
            >
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#EF4444] opacity-80" />
                <div className="w-3 h-3 rounded-full bg-[#F59E0B] opacity-80" />
                <div className="w-3 h-3 rounded-full bg-[#22C55E] opacity-80" />
              </div>
              <div
                className="flex-1 max-w-xs mx-auto rounded-md px-3 py-1.5 text-xs text-center font-mono"
                style={{ background: "#0B0F1A", color: "#64748B" }}
              >
                app.dokydoc.com/ontology
              </div>
            </div>

            {/* Dashboard content */}
            <DashboardMockup />
          </div>
        </motion.div>

        {/* Social proof */}
        <motion.div
          custom={0.5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-12 flex flex-col items-center gap-4"
        >
          <p className="text-sm" style={{ color: "#64748B" }}>
            Trusted by teams at —
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {companyLogos.map((name) => (
              <div
                key={name}
                className="px-5 py-2 rounded-lg font-bold text-sm tracking-wider"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(241,245,249,0.3)",
                  letterSpacing: "0.08em",
                }}
              >
                {name.toUpperCase()}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({ icon, label, color }: { icon: React.ReactNode; label: string; color: string }) {
  return (
    <div
      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium shadow-xl backdrop-blur"
      style={{
        background: "rgba(11,15,26,0.85)",
        border: `1px solid ${color}40`,
        color: "#F1F5F9",
      }}
    >
      <span style={{ color }}>{icon}</span>
      {label}
    </div>
  );
}

function DashboardMockup() {
  const nodes = [
    { x: 50, y: 30, label: "PRD v2", size: 20, color: "#4F6EF7" },
    { x: 20, y: 55, label: "Auth API", size: 16, color: "#7B96FF" },
    { x: 80, y: 55, label: "Payment", size: 16, color: "#7B96FF" },
    { x: 35, y: 75, label: "User Flow", size: 14, color: "#4F6EF7", opacity: 0.7 },
    { x: 65, y: 75, label: "Billing", size: 14, color: "#4F6EF7", opacity: 0.7 },
    { x: 50, y: 60, label: "Ontology", size: 18, color: "#22C55E" },
  ];

  const edges = [
    [0, 1], [0, 2], [0, 5], [1, 3], [2, 4], [5, 3], [5, 4],
  ];

  return (
    <div className="p-6" style={{ minHeight: "300px" }}>
      <div className="flex items-center gap-4 mb-6">
        <div className="flex gap-2">
          {["Documents", "Code", "Ontology"].map((tab, i) => (
            <span
              key={tab}
              className="px-3 py-1.5 rounded-lg text-xs font-medium"
              style={{
                background: i === 2 ? "rgba(79,110,247,0.2)" : "rgba(255,255,255,0.05)",
                color: i === 2 ? "#7B96FF" : "#64748B",
                border: i === 2 ? "1px solid rgba(79,110,247,0.3)" : "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {tab}
            </span>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
          <span className="text-xs" style={{ color: "#22C55E" }}>Live</span>
        </div>
      </div>

      {/* Graph visualization */}
      <svg viewBox="0 0 100 100" className="w-full" style={{ height: "220px" }}>
        {/* Edges */}
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={`${nodes[a].x}%`} y1={`${nodes[a].y}%`}
            x2={`${nodes[b].x}%`} y2={`${nodes[b].y}%`}
            stroke="rgba(79,110,247,0.25)"
            strokeWidth="0.5"
          />
        ))}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <g key={i}>
            {/* Glow */}
            <circle
              cx={`${node.x}%`} cy={`${node.y}%`}
              r={node.size * 0.8}
              fill={node.color}
              opacity={0.1}
            />
            {/* Node */}
            <circle
              cx={`${node.x}%`} cy={`${node.y}%`}
              r={node.size * 0.4}
              fill={node.color}
              opacity={node.opacity ?? 1}
            />
            {/* Label */}
            <text
              x={`${node.x}%`} y={`${node.y + 8}%`}
              textAnchor="middle"
              fill="rgba(241,245,249,0.5)"
              fontSize="4"
              fontFamily="sans-serif"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>

      {/* Status bar */}
      <div
        className="flex items-center justify-between mt-4 px-3 py-2 rounded-lg"
        style={{ background: "rgba(79,110,247,0.08)", border: "1px solid rgba(79,110,247,0.15)" }}
      >
        <span className="text-xs" style={{ color: "#7B96FF" }}>
          87 concepts · 243 relationships · 94% validated
        </span>
        <span className="text-xs" style={{ color: "#22C55E" }}>
          ✓ Analysis complete
        </span>
      </div>
    </div>
  );
}
