import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/sections/CTABanner";
import { UseCaseCard, type IconName } from "@/components/ui/UseCaseCard";

export const metadata: Metadata = {
  title: "Use Cases — DokyDoc | AI Documentation Intelligence for Every Team",
  description:
    "DokyDoc works for engineering, business analysis, product, compliance, knowledge management, and AI assistant use cases. See how each team benefits.",
};

const useCases: { slug: string; iconName: IconName; color: string; title: string; subtitle: string; description: string; benefits: string[] }[] = [
  {
    slug: "engineering",
    iconName: "Code2",
    color: "#4F6EF7",
    title: "Engineering Teams",
    subtitle: "Code-Doc Alignment for Dev Teams",
    description:
      "Stop the drift between your code and its documentation. DokyDoc detects mismatches at the function level on every commit, so your team ships with confidence — not guesswork.",
    benefits: [
      "Mismatch detection on every push",
      "Semantic code search across all repos",
      "Auto-suggested doc updates on PR merge",
      "Repository-level ontology mapping",
    ],
  },
  {
    slug: "business-analysis",
    iconName: "BarChart3",
    color: "#2D5F9E",
    title: "Business Analysts",
    subtitle: "Requirements Traceability",
    description:
      "Trace every requirement from PRD to deployed code. Know exactly which features are implemented, which are in progress, and which are missing — with a single query.",
    benefits: [
      "End-to-end requirements traceability",
      "Gap analysis and coverage metrics",
      "Auto-generated traceability matrix",
      "Change impact analysis on requirements",
    ],
  },
  {
    slug: "product",
    iconName: "Package",
    color: "#7B96FF",
    title: "Product Managers",
    subtitle: "Product Knowledge Management",
    description:
      "Keep your product's knowledge current as your team ships. Browse the ontology of every feature, track documentation health per release, and ensure specs stay aligned with reality.",
    benefits: [
      "Feature documentation with AI summaries",
      "Release-level documentation health scoring",
      "Ontology browser for product concepts",
      "Stakeholder-ready coverage reports",
    ],
  },
  {
    slug: "compliance",
    iconName: "ShieldCheck",
    color: "#22C55E",
    title: "Compliance & Audit",
    subtitle: "Audit Trail & Governance",
    description:
      "Access an immutable, export-ready audit log of every document change, approval, and access event. Built for SOC 2, ISO 27001, GDPR, and HIPAA compliance from day one.",
    benefits: [
      "Immutable timestamped audit trail",
      "SOC 2 / ISO 27001 / GDPR ready",
      "Before/after diffs for every change",
      "User access and permission audit reports",
    ],
  },
  {
    slug: "knowledge-management",
    iconName: "Network",
    color: "#1E3A5F",
    title: "Knowledge Management",
    subtitle: "Cross-Project Ontology",
    description:
      "Build a unified knowledge graph that spans all your projects, teams, and tools. DokyDoc surfaces hidden connections between concepts across your entire organization.",
    benefits: [
      "Cross-project concept linking",
      "Organization-wide ontology browser",
      "Duplicate and conflict detection",
      "Knowledge gap identification",
    ],
  },
  {
    slug: "ai-assistant",
    iconName: "MessageSquare",
    color: "#F59E0B",
    title: "AI-Powered Querying",
    subtitle: "Natural Language Knowledge Access",
    description:
      "Give every team member instant access to your organization's collective knowledge. Ask anything, get grounded answers — sourced from your actual documents and code.",
    benefits: [
      "Plain English queries across all sources",
      "Source-cited answers, zero hallucinations",
      "Role-aware context assembly",
      "Integration with Slack and web UI",
    ],
  },
];

export default function UseCasesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="pt-32 pb-20 px-6 text-center"
          style={{ background: "linear-gradient(135deg, #0B0F1A 0%, #1E2D4F 50%, #0B0F1A 100%)" }}
        >
          <div className="max-w-3xl mx-auto">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-6"
              style={{ background: "rgba(79,110,247,0.15)", color: "#7B96FF", border: "1px solid rgba(79,110,247,0.3)" }}
            >
              Use Cases
            </span>
            <h1 className="text-5xl font-bold mb-6" style={{ color: "#F1F5F9" }}>
              DokyDoc Works for Every Role in Your Organization.
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: "#94A3B8" }}>
              Whether you&apos;re engineering, analyzing, auditing, or querying — DokyDoc delivers the right intelligence for your workflow.
            </p>
          </div>
        </section>

        {/* Use case cards */}
        <section className="py-20 px-6" style={{ background: "#F8FAFC" }}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((uc) => (
                <UseCaseCard
                  key={uc.slug}
                  slug={uc.slug}
                  iconName={uc.iconName}
                  color={uc.color}
                  title={uc.title}
                  subtitle={uc.subtitle}
                  description={uc.description}
                  benefits={uc.benefits}
                />
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
