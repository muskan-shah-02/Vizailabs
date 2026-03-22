import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/sections/CTABanner";
import { Zap, Shield, Eye, Brain } from "lucide-react";

export const metadata: Metadata = {
  title: "About VizaiLabs — Building AI-Native Intelligence Products",
  description:
    "Learn about VizaiLabs — our mission, the team behind DokyDoc, and why we're building AI-native intelligence products for modern engineering teams.",
};

const values = [
  {
    icon: Brain,
    title: "Intelligence First",
    body: "Every product we build is AI-native, not AI-added. Intelligence isn't a feature — it's the foundation.",
    color: "#4F6EF7",
  },
  {
    icon: Shield,
    title: "Reliability",
    body: "Teams trust us with their most critical organizational knowledge. We take that responsibility seriously — in our architecture, security, and SLAs.",
    color: "#22C55E",
  },
  {
    icon: Eye,
    title: "Transparency",
    body: "Open systems, clear audit trails, and no black boxes. Every AI decision in DokyDoc is traceable and explainable.",
    color: "#7B96FF",
  },
  {
    icon: Zap,
    title: "Speed",
    body: "Fast iteration, fast insights, fast teams. We build for the teams that can't afford to slow down — and we move at the same pace ourselves.",
    color: "#F59E0B",
  },
];

const team = [
  {
    name: "Muskan Shah",
    role: "Founder & CEO",
    bio: "Serial builder with a background in AI systems and enterprise software. Previously scaled documentation infrastructure at a Fortune 500 tech company. Founded VizaiLabs after watching teams waste thousands of hours on documentation debt.",
    initials: "MS",
    color: "#4F6EF7",
  },
  {
    name: "Engineering Team",
    role: "Core Engineering",
    bio: "A distributed team of engineers passionate about AI, knowledge systems, and developer tooling. We've shipped products used by millions — now we're building the intelligence layer that makes teams smarter.",
    initials: "ET",
    color: "#7B96FF",
  },
  {
    name: "We're Hiring",
    role: "Your Role Here",
    bio: "We're looking for engineers, designers, and product thinkers who are excited about AI-native enterprise software. If that's you, we'd love to talk.",
    initials: "?",
    color: "#22C55E",
    isOpen: true,
  },
];

export default function AboutPage() {
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
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-6"
              style={{ background: "rgba(79,110,247,0.15)", color: "#7B96FF", border: "1px solid rgba(79,110,247,0.3)" }}
            >
              About VizaiLabs
            </span>
            <h1 className="text-5xl font-bold mb-6 leading-tight" style={{ color: "#F1F5F9" }}>
              We Built DokyDoc Because We Felt the Pain.
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: "#94A3B8" }}>
              VizaiLabs was founded on a simple observation: the hardest problem in engineering isn&apos;t writing code — it&apos;s keeping everyone aligned on what the code means, what it should do, and where it&apos;s going.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 px-6" style={{ background: "#FFFFFF" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#0F172A" }}>
              The VizaiLabs Story
            </h2>
            <div className="space-y-5 text-lg leading-relaxed" style={{ color: "#64748B" }}>
              <p>
                VizaiLabs began in 2025 with a frustration every engineer knows intimately: you&apos;re three sprints into a feature and you discover the spec was updated six weeks ago, the API contract changed, and nobody told anyone. The docs say one thing. The code does another. The requirements document is from last quarter.
              </p>
              <p>
                We tried every tool on the market. Documentation platforms. Wiki tools. Code comment generators. None of them solved the fundamental problem: knowledge drifts, and no tool was designed to fight that drift with AI.
              </p>
              <p>
                So we built DokyDoc — a platform that treats documentation not as a static artifact, but as a living knowledge system that must evolve in sync with the code, the team, and the business.
              </p>
              <p>
                DokyDoc is our flagship product, but it&apos;s the first of many. VizaiLabs is building a family of AI-native intelligence tools for modern enterprises — each one tackling a different facet of organizational knowledge management.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-6" style={{ background: "#0B0F1A" }}>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            <div
              className="rounded-2xl p-8"
              style={{ background: "linear-gradient(145deg, #111827, #1a2332)", border: "1px solid rgba(79,110,247,0.2)" }}
            >
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4"
                style={{ background: "rgba(79,110,247,0.15)", color: "#7B96FF" }}
              >
                Our Mission
              </span>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#F1F5F9" }}>
                Making organizational knowledge reliable, queryable, and alive.
              </h2>
              <p className="leading-relaxed" style={{ color: "#94A3B8" }}>
                We build AI-native intelligence products that empower every team to make faster, smarter, and more aligned decisions — grounded in a single source of truth that stays current automatically.
              </p>
            </div>

            <div
              className="rounded-2xl p-8"
              style={{ background: "linear-gradient(145deg, #111827, #1a2332)", border: "1px solid rgba(123,150,255,0.2)" }}
            >
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4"
                style={{ background: "rgba(123,150,255,0.15)", color: "#7B96FF" }}
              >
                Our Vision
              </span>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#F1F5F9" }}>
                A world where no team ever loses velocity to documentation debt.
              </h2>
              <p className="leading-relaxed" style={{ color: "#94A3B8" }}>
                We envision a future where AI continuously bridges the gap between what teams know and what they build — where knowledge silos are impossible, and organizational intelligence compounds over time.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-6" style={{ background: "#F8FAFC" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#0F172A" }}>
              Our Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="flex gap-5 p-7 rounded-2xl bg-white"
                  style={{ border: "1px solid #E2E8F0" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${v.color}15` }}
                  >
                    <v.icon size={22} color={v.color} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2" style={{ color: "#0F172A" }}>
                      {v.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
                      {v.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 px-6" style={{ background: "#FFFFFF" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#0F172A" }}>
              The Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {team.map((member, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-8 text-center"
                  style={{
                    background: member.isOpen ? "rgba(34,197,94,0.04)" : "#F8FAFC",
                    border: member.isOpen ? "2px dashed rgba(34,197,94,0.3)" : "1px solid #E2E8F0",
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-xl text-white"
                    style={{ background: `linear-gradient(135deg, ${member.color}, #7B96FF)` }}
                  >
                    {member.initials}
                  </div>
                  <h3 className="font-bold text-lg mb-1" style={{ color: "#0F172A" }}>
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium mb-4" style={{ color: member.color }}>
                    {member.role}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
                    {member.bio}
                  </p>
                  {member.isOpen && (
                    <a
                      href="/contact"
                      className="inline-block mt-4 text-sm font-semibold"
                      style={{ color: "#22C55E" }}
                    >
                      Apply now →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product roadmap note */}
        <section className="py-16 px-6" style={{ background: "#F8FAFC" }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#0F172A" }}>
              DokyDoc Is Just the Beginning
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "#64748B" }}>
              VizaiLabs is building a family of AI-native intelligence products. DokyDoc addresses document and code knowledge — but our roadmap extends into design system governance, data lineage intelligence, and beyond.
              Every product we ship follows the same principle: <strong style={{ color: "#0F172A" }}>AI-native from day one, governance built in, enterprise-ready.</strong>
            </p>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
