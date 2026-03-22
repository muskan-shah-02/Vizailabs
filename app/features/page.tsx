import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/sections/CTABanner";
import {
  Brain, Link2, Globe, MessageSquare, Shield, Building2,
  FileText, GitBranch, Search, Workflow, Users, CreditCard,
  Github, Slack, Layers
} from "lucide-react";

export const metadata: Metadata = {
  title: "Features — DokyDoc AI Document Intelligence Platform",
  description:
    "Explore every capability of DokyDoc — from multi-pass AI analysis and code-doc alignment to AskyDoc AI assistant, RBAC governance, and multi-tenant billing.",
};

const categories = [
  {
    id: "analysis",
    label: "Document Analysis Engine",
    icon: Brain,
    color: "#4F6EF7",
    features: [
      {
        icon: FileText,
        title: "Multi-Pass AI Processing",
        description:
          "DokyDoc runs four distinct analysis passes over every document: structural extraction, semantic enrichment, relationship mapping, and validation. Each pass builds on the last, producing a deeply understood knowledge artifact — not just text chunks.",
      },
      {
        icon: Search,
        title: "Semantic Concept Extraction",
        description:
          "Go beyond keyword search. DokyDoc identifies named entities, domain concepts, defined terms, and implicit assumptions from your documents — automatically tagging and linking them to your organizational ontology.",
      },
      {
        icon: Brain,
        title: "Cost-Tracked AI Runs",
        description:
          "Every analysis run is tracked with token usage, model cost, and processing time. Set per-organization AI cost caps, view usage dashboards, and forecast spending before it surprises you.",
      },
    ],
  },
  {
    id: "code",
    label: "Code Intelligence",
    icon: GitBranch,
    color: "#7B96FF",
    features: [
      {
        icon: Link2,
        title: "Code-Doc Mismatch Detection",
        description:
          "Connect your Git repositories and DokyDoc automatically detects divergence between your codebase and its documentation. Get precise alerts — at the function, class, or module level — before documentation debt compounds.",
      },
      {
        icon: GitBranch,
        title: "Repository-Level Analysis",
        description:
          "DokyDoc parses your code's structure, comments, API contracts, and README files — then links every element to related documentation concepts. Navigate your code's knowledge graph as easily as your docs.",
      },
      {
        icon: Search,
        title: "Semantic Code Search",
        description:
          "Ask questions about your code in plain English. DokyDoc's semantic search spans both code and documentation simultaneously, surfacing relevant implementations, specs, and explanations in one unified result.",
      },
    ],
  },
  {
    id: "ontology",
    label: "Business Ontology Engine",
    icon: Globe,
    color: "#2D5F9E",
    features: [
      {
        icon: Globe,
        title: "Dual Knowledge Graphs",
        description:
          "DokyDoc builds two separate, synchronized knowledge graphs — one for your documents, one for your code. Both graphs share a unified ontology layer, giving you a cross-domain view of every concept in your organization.",
      },
      {
        icon: Layers,
        title: "3-Tier Concept Matching",
        description:
          "Our matching algorithm operates in three tiers: exact string match, fuzzy semantic similarity, and AI-validated cross-domain linking. This hierarchy achieves 94%+ accuracy while cutting AI API costs by up to 97% versus naive approaches.",
      },
      {
        icon: Search,
        title: "Ontology Browser",
        description:
          "Explore your organization's knowledge graph visually. Filter by domain, concept type, or confidence score. Drill into any concept to see its relationships, linked documents, and code references — all in one view.",
      },
    ],
  },
  {
    id: "askyDocAI",
    label: "AskyDoc AI Assistant",
    icon: MessageSquare,
    color: "#4F6EF7",
    features: [
      {
        icon: MessageSquare,
        title: "Natural Language Querying",
        description:
          "Ask any question about your organization's knowledge in plain English. AskyDoc assembles relevant context from your documents and code, then generates a precise answer using Gemini or Claude — with full source attribution.",
      },
      {
        icon: FileText,
        title: "Source-Grounded Answers",
        description:
          "Every AskyDoc response includes citations: document names, page numbers, code file paths, and line references. No hallucinations — every claim is traceable to a verified source in your knowledge base.",
      },
      {
        icon: Brain,
        title: "DB-First Intelligence",
        description:
          "AskyDoc doesn't re-read your documents on every query. It works from your pre-analyzed ontology and knowledge graph, making responses fast, consistent, and grounded in structured understanding — not raw text retrieval.",
      },
    ],
  },
  {
    id: "governance",
    label: "Governance & Compliance",
    icon: Shield,
    color: "#22C55E",
    features: [
      {
        icon: Users,
        title: "Role-Based Access Control",
        description:
          "20+ granular permission flags across five built-in roles: Owner, Admin, Analyst, Developer, and Auditor. Customize per-user access at the organization, project, or document level.",
      },
      {
        icon: Workflow,
        title: "Approval Workflows",
        description:
          "Define multi-step approval chains for document publishing, analysis runs, and ontology updates. Route approvals to the right stakeholders with automated notifications and deadline tracking.",
      },
      {
        icon: Shield,
        title: "Immutable Audit Trail",
        description:
          "Every action — document upload, edit, approval, rejection, access, deletion — is logged with a timestamp, user identity, and before/after snapshot. Export-ready for SOC 2, ISO 27001, GDPR, and HIPAA compliance.",
      },
    ],
  },
  {
    id: "billing",
    label: "Multi-Tenancy & Billing",
    icon: Building2,
    color: "#F59E0B",
    features: [
      {
        icon: Building2,
        title: "Complete Data Isolation",
        description:
          "Every organization operates in a fully isolated data environment. No cross-tenant data leakage — guaranteed at the database, API, and AI context levels.",
      },
      {
        icon: CreditCard,
        title: "Prepaid & Postpaid Billing",
        description:
          "Choose prepaid credits for predictable spend or postpaid billing for flexibility. Set hard AI cost caps per organization. Receive usage alerts before you hit limits — never get surprised by an invoice.",
      },
      {
        icon: Layers,
        title: "Usage Dashboards",
        description:
          "Real-time dashboards showing document counts, AI analysis runs, query volumes, and API calls — per user, per project, and per organization. Give finance teams the visibility they need.",
      },
    ],
  },
  {
    id: "integrations",
    label: "Integrations",
    icon: Github,
    color: "#1E3A5F",
    features: [
      {
        icon: Github,
        title: "Git Providers",
        description:
          "Connect GitHub, GitLab, and Bitbucket repositories with OAuth. DokyDoc listens to webhooks and re-analyzes affected documentation on every relevant commit — keeping your knowledge graph current automatically.",
      },
      {
        icon: Slack,
        title: "Productivity Tools",
        description:
          "Sync documents from Notion, Confluence, Google Drive, and Jira. Map Slack conversations to documentation gaps. Every integration is read-only at the source — your data stays in your tools.",
      },
      {
        icon: Layers,
        title: "API & Webhooks",
        description:
          "A full REST API and webhook system lets you embed DokyDoc intelligence into your own workflows. Trigger analyses from CI/CD, query the ontology from your IDE, or stream audit events to your SIEM.",
      },
    ],
  },
];

export default function FeaturesPage() {
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
              Platform Capabilities
            </span>
            <h1 className="text-5xl font-bold mb-6" style={{ color: "#F1F5F9" }}>
              Everything You Need to Govern Your Documentation.
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: "#94A3B8" }}>
              Seven enterprise-grade capability areas, engineered from the ground up for AI-native document intelligence.
            </p>
          </div>

          {/* Anchor nav */}
          <div className="mt-12 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  color: "#94A3B8",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {cat.label}
              </a>
            ))}
          </div>
        </section>

        {/* Feature categories */}
        {categories.map((cat, ci) => (
          <section
            key={cat.id}
            id={cat.id}
            className="py-20 px-6"
            style={{ background: ci % 2 === 0 ? "#FFFFFF" : "#F8FAFC" }}
          >
            <div className="max-w-6xl mx-auto">
              {/* Category header */}
              <div className="flex items-center gap-3 mb-12">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${cat.color}15` }}
                >
                  <cat.icon size={20} color={cat.color} />
                </div>
                <h2 className="text-2xl font-bold" style={{ color: "#0F172A" }}>
                  {cat.label}
                </h2>
              </div>

              {/* Features grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cat.features.map((feature, fi) => (
                  <div
                    key={fi}
                    className="p-7 rounded-2xl"
                    style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", boxShadow: "0 1px 4px rgba(0,0,0,0.03)" }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                      style={{ background: `${cat.color}12` }}
                    >
                      <feature.icon size={20} color={cat.color} />
                    </div>
                    <h3 className="font-bold text-lg mb-3" style={{ color: "#0F172A" }}>
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
