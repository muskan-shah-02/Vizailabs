"use client";

import Link from "next/link";
import { ArrowRight, Code2, BarChart3, Package, ShieldCheck, Network, MessageSquare } from "lucide-react";
import { useState } from "react";

const iconMap = {
  Code2,
  BarChart3,
  Package,
  ShieldCheck,
  Network,
  MessageSquare,
} as const;

export type IconName = keyof typeof iconMap;

interface UseCaseCardProps {
  slug: string;
  iconName: IconName;
  color: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
}

export function UseCaseCard({
  slug,
  iconName,
  color,
  title,
  subtitle,
  description,
  benefits,
}: UseCaseCardProps) {
  const [hovered, setHovered] = useState(false);
  const Icon = iconMap[iconName];

  return (
    <Link
      href={`/use-cases/${slug}`}
      className="flex flex-col rounded-2xl p-8 bg-white transition-all duration-300"
      style={{
        border: hovered ? `1px solid ${color}30` : "1px solid #E2E8F0",
        boxShadow: hovered
          ? `0 12px 40px rgba(0,0,0,0.08), 0 0 0 1px ${color}30`
          : "0 1px 4px rgba(0,0,0,0.04)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
        style={{ background: `${color}15` }}
      >
        <Icon size={22} color={color} />
      </div>

      <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color }}>
        {subtitle}
      </p>
      <h2 className="text-xl font-bold mb-3" style={{ color: "#0F172A" }}>
        {title}
      </h2>
      <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "#64748B" }}>
        {description}
      </p>

      <ul className="space-y-1.5 mb-6">
        {benefits.map((b, i) => (
          <li key={i} className="flex items-center gap-2 text-xs" style={{ color: "#64748B" }}>
            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: color }} />
            {b}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-1 text-sm font-semibold" style={{ color }}>
        Learn more
        <ArrowRight size={15} />
      </div>
    </Link>
  );
}
