import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/sections/CTABanner";
import { CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

const useCaseData: Record<
  string,
  {
    title: string;
    subtitle: string;
    color: string;
    hero: string;
    intro: string;
    sections: { heading: string; body: string; points?: string[] }[];
  }
> = {
  engineering: {
    title: "Engineering Teams",
    subtitle: "Code-Doc Alignment for Dev Teams",
    color: "#4F6EF7",
    hero: "Ship Code You Can Trust — Because Your Docs Are Always in Sync.",
    intro:
      "The average engineering team loses 4+ hours per week to documentation drift. DokyDoc monitors your repositories and documentation simultaneously, alerting your team the moment something diverges — before it becomes a bug, a rework, or an onboarding nightmare.",
    sections: [
      {
        heading: "Mismatch Detection on Every Commit",
        body: "DokyDoc listens to your repository webhooks and re-analyzes affected documentation on every push. Get precise alerts — at the function, class, or module level — showing exactly where your code and docs have diverged.",
        points: [
          "Function-level granularity on drift alerts",
          "Diff view showing what changed vs. what docs say",
          "PR comment integration — fix docs before merge",
          "Configurable alert thresholds per repo",
        ],
      },
      {
        heading: "Semantic Code Search",
        body: "Search your entire codebase and documentation simultaneously using plain English. DokyDoc's semantic engine understands intent, not just keywords — so 'how does authentication work' returns implementations, specs, and comments in one unified result.",
        points: [
          "Cross-repo search across all connected repositories",
          "Simultaneous code + doc results",
          "Function, class, and file level granularity",
          "Ranked by relevance, not recency",
        ],
      },
    ],
  },
  "business-analysis": {
    title: "Business Analysts",
    subtitle: "Requirements Traceability",
    color: "#2D5F9E",
    hero: "Every Requirement Traced. Every Gap Found. Every Stakeholder Informed.",
    intro:
      "Requirements get written, then lost. Features get built without specs. Specs get updated without telling anyone. DokyDoc gives business analysts a single, AI-powered view of what was required, what was built, and where the gaps are.",
    sections: [
      {
        heading: "End-to-End Requirements Traceability",
        body: "Link every requirement in your PRDs, user stories, and specifications to the exact code components that implement them. DokyDoc's AI builds this traceability matrix automatically — no manual tagging required.",
        points: [
          "PRD-to-code traceability matrix, auto-generated",
          "Coverage scoring per requirement domain",
          "Stakeholder-ready export (PDF, CSV)",
          "Version-aware: track requirement changes over time",
        ],
      },
      {
        heading: "Gap Analysis in Plain English",
        body: "Ask DokyDoc: 'Which requirements from PRD-v3 have no code coverage?' and get a precise, cited answer in seconds. No pivot tables, no manual cross-referencing.",
        points: [
          "Natural language gap queries via AskyDoc",
          "Uncovered requirement identification",
          "Implementation risk scoring",
          "Sprint-level gap reporting",
        ],
      },
    ],
  },
  product: {
    title: "Product Managers",
    subtitle: "Product Knowledge Management",
    color: "#7B96FF",
    hero: "Your Product's Knowledge, Always Current. Always Queryable.",
    intro:
      "Product managers live at the intersection of specs, engineering, and stakeholders. DokyDoc gives you a living map of your product's features, concepts, and decisions — updated automatically as your team ships.",
    sections: [
      {
        heading: "Feature Documentation Intelligence",
        body: "Every feature in your product has a lifecycle — conceived in a PRD, built in code, documented in a spec, iterated by feedback. DokyDoc tracks all of it and surfaces AI-generated summaries, change history, and alignment scores.",
        points: [
          "AI-generated feature summaries from specs + code",
          "Documentation freshness score per feature",
          "Change history with before/after diffs",
          "Link PRDs to implemented code components",
        ],
      },
      {
        heading: "Ontology Browser for Product Concepts",
        body: "Explore the conceptual map of your product interactively. See how features relate, where terminology conflicts exist between teams, and which concepts are under-documented.",
        points: [
          "Visual concept graph for your product domain",
          "Terminology conflict detection across teams",
          "Documentation coverage by product area",
          "Stakeholder-ready knowledge health reports",
        ],
      },
    ],
  },
  compliance: {
    title: "Compliance & Audit",
    subtitle: "Audit Trail & Governance",
    color: "#22C55E",
    hero: "Compliance-Ready From Day One. No Configuration Required.",
    intro:
      "Compliance teams need evidence, not promises. DokyDoc logs every document action with an immutable timestamp, builds approval workflows into the document lifecycle, and exports everything in audit-ready formats.",
    sections: [
      {
        heading: "Immutable Audit Trail",
        body: "Every action taken in DokyDoc — document upload, edit, view, approval, rejection, deletion, access grant — is logged in an immutable ledger. Timestamps are cryptographically secured and tamper-evident.",
        points: [
          "Immutable log with cryptographic timestamps",
          "Before/after diffs for every document change",
          "User identity linked to every event",
          "SOC 2 Type II, ISO 27001, GDPR, HIPAA ready",
        ],
      },
      {
        heading: "Approval Workflows",
        body: "Define multi-step approval chains for document publishing, analysis runs, and ontology updates. DokyDoc enforces the chain — no document goes live without the required approvals.",
        points: [
          "Configurable approval chains per document type",
          "Deadline tracking with escalation alerts",
          "Rejection comments with reason codes",
          "Approval history in the audit log",
        ],
      },
    ],
  },
  "knowledge-management": {
    title: "Knowledge Management",
    subtitle: "Cross-Project Ontology",
    color: "#1E3A5F",
    hero: "One Organization. One Knowledge Graph. Zero Silos.",
    intro:
      "Enterprise knowledge is scattered across repositories, wikis, Slack threads, and Confluence pages. DokyDoc unifies it into a single, queryable ontology — surfacing hidden connections and eliminating redundant or conflicting information.",
    sections: [
      {
        heading: "Cross-Project Concept Linking",
        body: "The same concept — 'user', 'payment', 'session' — can mean different things in different projects. DokyDoc identifies these overlaps, surfaces conflicts, and links related concepts across your entire organization.",
        points: [
          "Organization-wide concept deduplication",
          "Cross-project relationship mapping",
          "Terminology conflict detection and resolution",
          "Domain-specific sub-ontologies",
        ],
      },
      {
        heading: "Knowledge Gap Identification",
        body: "Ask DokyDoc to find areas where your organization's knowledge is incomplete, undocumented, or at risk. Get a prioritized list of documentation gaps — ordered by impact and team dependency.",
        points: [
          "Automated documentation gap scoring",
          "High-risk gap prioritization",
          "Team dependency mapping",
          "Knowledge redundancy detection",
        ],
      },
    ],
  },
  "ai-assistant": {
    title: "AI-Powered Querying",
    subtitle: "Natural Language Knowledge Access",
    color: "#F59E0B",
    hero: "Your Entire Organization's Knowledge, One Question Away.",
    intro:
      "Stop hunting through Confluence, digging through Jira, and pinging engineers for answers. AskyDoc gives every team member instant, grounded answers from your actual documents and code — in plain English.",
    sections: [
      {
        heading: "Source-Grounded AI Answers",
        body: "AskyDoc never makes things up. Every answer cites the exact document, page, code file, and line that supports it. If the answer isn't in your knowledge base, AskyDoc says so — it doesn't hallucinate.",
        points: [
          "Source citation on every answer",
          "Confidence scoring per response",
          "Contradiction detection when sources conflict",
          "Multi-source answer synthesis",
        ],
      },
      {
        heading: "Role-Aware Context Assembly",
        body: "AskyDoc knows your role and assembles context accordingly. A developer gets code-heavy answers. An auditor gets compliance-focused responses. A CXO gets business impact framing.",
        points: [
          "Role-aware answer formatting",
          "Permission-scoped context (you only see what you can access)",
          "Query history and saved answers",
          "Slack and web UI integration",
        ],
      },
    ],
  },
};

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const data = useCaseData[slug];
  if (!data) return { title: "Not Found" };
  return {
    title: `${data.title} — DokyDoc Use Case`,
    description: data.intro,
  };
}

export async function generateStaticParams() {
  return Object.keys(useCaseData).map((slug) => ({ slug }));
}

export default async function UseCaseSlugPage({ params }: { params: Params }) {
  const { slug } = await params;
  const data = useCaseData[slug];
  if (!data) notFound();

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="pt-32 pb-20 px-6"
          style={{ background: "linear-gradient(135deg, #0B0F1A 0%, #1E2D4F 50%, #0B0F1A 100%)" }}
        >
          <div className="max-w-4xl mx-auto">
            <Link
              href="/use-cases"
              className="inline-flex items-center gap-2 text-sm mb-8 transition-colors hover:text-white"
              style={{ color: "#64748B" }}
            >
              <ArrowLeft size={14} /> Back to Use Cases
            </Link>

            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4"
              style={{ background: `${data.color}20`, color: data.color, border: `1px solid ${data.color}40` }}
            >
              {data.subtitle}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight" style={{ color: "#F1F5F9" }}>
              {data.hero}
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: "#94A3B8" }}>
              {data.intro}
            </p>
          </div>
        </section>

        {/* Sections */}
        {data.sections.map((section, i) => (
          <section
            key={i}
            className="py-16 px-6"
            style={{ background: i % 2 === 0 ? "#FFFFFF" : "#F8FAFC" }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#0F172A" }}>
                {section.heading}
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "#64748B" }}>
                {section.body}
              </p>
              {section.points && (
                <ul className="space-y-3">
                  {section.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle size={18} color={data.color} className="flex-shrink-0 mt-0.5" />
                      <span style={{ color: "#0F172A" }}>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
