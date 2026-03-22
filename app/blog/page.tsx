import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/sections/CTABanner";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog & Changelog — DokyDoc | VizaiLabs",
  description:
    "Product updates, engineering deep-dives, and insights on AI-powered documentation governance from the VizaiLabs team.",
};

const posts = [
  {
    category: "Product Update",
    date: "March 2026",
    title: "Introducing DokyDoc Early Access",
    excerpt:
      "Today we're opening DokyDoc to early access teams. Here's what's shipping in v1.0 — multi-pass AI analysis, the business ontology engine, AskyDoc, and full RBAC governance.",
    readTime: "4 min read",
    color: "#4F6EF7",
  },
  {
    category: "Engineering",
    date: "March 2026",
    title: "How We Built a 3-Tier Concept Matching Algorithm That Saves 97% on AI Costs",
    excerpt:
      "A deep-dive into the technical design of DokyDoc's ontology matching engine — why naive embedding similarity was too expensive, and how we layered exact, fuzzy, and AI-validated matching.",
    readTime: "8 min read",
    color: "#7B96FF",
  },
  {
    category: "Insights",
    date: "February 2026",
    title: "The True Cost of Documentation Debt (With Numbers)",
    excerpt:
      "We analyzed documentation practices at 50+ engineering teams. The results: $2.4M+ in annual losses per company, 19% of dev time lost to searching, and 68% doc staleness within 3 months.",
    readTime: "6 min read",
    color: "#22C55E",
  },
  {
    category: "Product",
    date: "February 2026",
    title: "AskyDoc Under the Hood: How We Achieve Zero-Hallucination AI Answers",
    excerpt:
      "AskyDoc's RAG architecture is built differently. We don't just chunk and retrieve — we assemble answers from pre-analyzed ontology nodes with structured source attribution at the claim level.",
    readTime: "7 min read",
    color: "#F59E0B",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="pt-32 pb-20 px-6 text-center"
          style={{ background: "linear-gradient(135deg, #0B0F1A 0%, #1E2D4F 50%, #0B0F1A 100%)" }}
        >
          <div className="max-w-2xl mx-auto">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-6"
              style={{ background: "rgba(79,110,247,0.15)", color: "#7B96FF", border: "1px solid rgba(79,110,247,0.3)" }}
            >
              Blog & Changelog
            </span>
            <h1 className="text-5xl font-bold mb-4" style={{ color: "#F1F5F9" }}>
              Thoughts on AI, Docs & Engineering
            </h1>
            <p className="text-xl" style={{ color: "#94A3B8" }}>
              Product updates, engineering deep-dives, and insights from the VizaiLabs team.
            </p>
          </div>
        </section>

        {/* Posts */}
        <section className="py-16 px-6" style={{ background: "#F8FAFC" }}>
          <div className="max-w-4xl mx-auto space-y-6">
            {posts.map((post, i) => (
              <article
                key={i}
                className="bg-white rounded-2xl p-8 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                style={{ border: "1px solid #E2E8F0", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: `${post.color}15`, color: post.color }}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs" style={{ color: "#94A3B8" }}>
                    {post.date}
                  </span>
                  <span className="text-xs" style={{ color: "#94A3B8" }}>
                    · {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-3" style={{ color: "#0F172A" }}>
                  {post.title}
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "#64748B" }}>
                  {post.excerpt}
                </p>
                <div className="mt-4 text-sm font-semibold" style={{ color: post.color }}>
                  Read more →
                </div>
              </article>
            ))}
          </div>

          {/* Coming soon */}
          <div className="max-w-4xl mx-auto mt-10 text-center">
            <p className="text-sm" style={{ color: "#94A3B8" }}>
              More posts coming soon. Follow{" "}
              <a href="https://twitter.com/vizailabs" style={{ color: "#4F6EF7" }}>
                @vizailabs
              </a>{" "}
              for updates.
            </p>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
