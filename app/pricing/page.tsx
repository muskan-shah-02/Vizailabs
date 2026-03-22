"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/sections/CTABanner";
import { Accordion } from "@/components/ui/Accordion";
import { CheckCircle, X } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 0,
    annualPrice: 0,
    description: "For small teams exploring documentation intelligence.",
    cta: "Get Started Free",
    href: "/contact",
    accent: "#2D5F9E",
    featured: false,
    features: [
      "3 team members",
      "10 documents",
      "1 Git repository",
      "Basic AI analysis (10 runs/month)",
      "Business ontology (100 concepts)",
      "Community support",
      "7-day audit log retention",
    ],
  },
  {
    name: "Pro",
    monthlyPrice: 49,
    annualPrice: 39,
    description: "For growing teams that need full AI power and governance.",
    cta: "Start Free Trial",
    href: "/contact",
    accent: "#4F6EF7",
    featured: true,
    features: [
      "20 team members",
      "Unlimited documents",
      "5 Git repositories",
      "Full AI analysis (200 runs/month)",
      "AskyDoc AI assistant (100 queries/month)",
      "Approval workflows",
      "Email support + 48h SLA",
      "90-day audit log retention",
      "API access",
    ],
  },
  {
    name: "Enterprise",
    monthlyPrice: null,
    annualPrice: null,
    description: "Unlimited scale, SSO, on-prem option, dedicated support.",
    cta: "Talk to Sales",
    href: "/contact?type=sales",
    accent: "#1E3A5F",
    featured: false,
    features: [
      "Unlimited team members",
      "Unlimited documents & repositories",
      "Unlimited AI analysis runs",
      "Unlimited AskyDoc queries",
      "SSO / SAML integration",
      "On-premise deployment option",
      "Dedicated Customer Success Manager",
      "SLA guarantee (99.9% uptime)",
      "Custom AI cost limits",
      "Unlimited audit log retention",
      "Custom integrations",
    ],
  },
];

const comparisonFeatures = [
  { feature: "Team members", starter: "3", pro: "20", enterprise: "Unlimited" },
  { feature: "Documents", starter: "10", pro: "Unlimited", enterprise: "Unlimited" },
  { feature: "Repositories", starter: "1", pro: "5", enterprise: "Unlimited" },
  { feature: "AI analysis runs/month", starter: "10", pro: "200", enterprise: "Custom" },
  { feature: "AskyDoc queries/month", starter: false, pro: "100", enterprise: "Unlimited" },
  { feature: "Approval workflows", starter: false, pro: true, enterprise: true },
  { feature: "RBAC permissions", starter: "Basic", pro: "Full (20+)", enterprise: "Custom" },
  { feature: "Audit log retention", starter: "7 days", pro: "90 days", enterprise: "Unlimited" },
  { feature: "API access", starter: false, pro: true, enterprise: true },
  { feature: "SSO / SAML", starter: false, pro: false, enterprise: true },
  { feature: "On-premise option", starter: false, pro: false, enterprise: true },
  { feature: "Dedicated CSM", starter: false, pro: false, enterprise: true },
  { feature: "SLA guarantee", starter: false, pro: "48h email SLA", enterprise: "99.9% uptime" },
  { feature: "Custom integrations", starter: false, pro: false, enterprise: true },
];

const faqItems = [
  {
    question: "Is the Starter plan really free forever?",
    answer:
      "Yes. The Starter plan is free with no time limit. You can use it for as long as you want with the included limits. No credit card required to sign up.",
  },
  {
    question: "How does the free trial for Pro work?",
    answer:
      "When you start a Pro trial, you get 14 days of full Pro access with no credit card required. At the end of the trial, you can choose to upgrade or downgrade to Starter.",
  },
  {
    question: "How is AI usage billed?",
    answer:
      "Each plan includes a monthly allocation of AI analysis runs and AskyDoc queries. Enterprise customers can set custom AI cost caps. If you exceed your allocation, we'll notify you before applying any additional charges.",
  },
  {
    question: "Can I change plans at any time?",
    answer:
      "Yes. You can upgrade, downgrade, or cancel at any time. Upgrades take effect immediately. Downgrades take effect at the next billing cycle. We prorate all changes.",
  },
  {
    question: "How does annual pricing work?",
    answer:
      "Annual billing gives you a 20% discount versus monthly billing. You're billed for the full year upfront. Annual plans can be upgraded mid-cycle with prorated charges.",
  },
  {
    question: "Is my data isolated from other organizations?",
    answer:
      "Absolutely. DokyDoc is built with complete multi-tenant data isolation. Your documents, analyses, and ontology data are never accessible to or shared with other organizations — guaranteed at the database, API, and AI context levels.",
  },
  {
    question: "What AI models does DokyDoc use?",
    answer:
      "DokyDoc uses Google Gemini and Anthropic Claude for analysis and AskyDoc queries. Enterprise customers can configure preferred model routing and bring their own API keys for full cost control.",
  },
  {
    question: "Do you offer on-premise or private cloud deployment?",
    answer:
      "Yes — on-premise and private cloud (AWS, GCP, Azure) deployment is available on the Enterprise plan. Contact our sales team to discuss your infrastructure requirements.",
  },
  {
    question: "What compliance certifications do you support?",
    answer:
      "DokyDoc's audit trail and governance features are designed for SOC 2 Type II, ISO 27001, GDPR, and HIPAA compliance. We can provide compliance documentation packages for Enterprise customers.",
  },
  {
    question: "How do I contact support?",
    answer:
      "Starter plan users have access to our community forum and documentation. Pro plan users get email support with a 48-hour SLA. Enterprise customers get a dedicated Customer Success Manager and priority support channel.",
  },
];

function CheckCell({ value }: { value: string | boolean }) {
  if (value === false) return <X size={16} className="mx-auto" style={{ color: "#CBD5E1" }} />;
  if (value === true) return <CheckCircle size={16} className="mx-auto" style={{ color: "#22C55E" }} />;
  return <span className="text-sm" style={{ color: "#0F172A" }}>{value}</span>;
}

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

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
              Pricing
            </span>
            <h1 className="text-5xl font-bold mb-4" style={{ color: "#F1F5F9" }}>
              Simple Pricing. Serious Power.
            </h1>
            <p className="text-xl mb-10" style={{ color: "#94A3B8" }}>
              Start free. Scale as your team grows. No hidden fees.
            </p>

            {/* Monthly / Annual toggle */}
            <div className="flex items-center justify-center gap-3">
              <span className="text-sm font-medium" style={{ color: annual ? "#64748B" : "#F1F5F9" }}>Monthly</span>
              <button
                onClick={() => setAnnual(!annual)}
                className="relative w-12 h-6 rounded-full transition-colors duration-200"
                style={{ background: annual ? "#4F6EF7" : "#374151" }}
              >
                <div
                  className="absolute top-1 w-4 h-4 rounded-full bg-white transition-transform duration-200"
                  style={{ transform: annual ? "translateX(28px)" : "translateX(4px)" }}
                />
              </button>
              <span className="text-sm font-medium" style={{ color: annual ? "#F1F5F9" : "#64748B" }}>
                Annual
                <span className="ml-2 px-2 py-0.5 rounded-full text-xs font-bold" style={{ background: "rgba(34,197,94,0.2)", color: "#22C55E" }}>
                  Save 20%
                </span>
              </span>
            </div>
          </div>
        </section>

        {/* Plans */}
        <section className="py-16 px-6" style={{ background: "#F8FAFC" }}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {plans.map((plan) => {
                const price = annual ? plan.annualPrice : plan.monthlyPrice;
                return (
                  <div
                    key={plan.name}
                    className="relative flex flex-col rounded-2xl"
                    style={
                      plan.featured
                        ? {
                            background: "linear-gradient(145deg, #1E3A5F, #2D5F9E)",
                            border: "2px solid #4F6EF7",
                            boxShadow: "0 20px 60px rgba(79,110,247,0.25)",
                          }
                        : {
                            background: "#FFFFFF",
                            border: "1px solid #E2E8F0",
                          }
                    }
                  >
                    {plan.featured && (
                      <div
                        className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold text-white"
                        style={{ background: "linear-gradient(90deg, #4F6EF7, #7B96FF)" }}
                      >
                        Most Popular
                      </div>
                    )}

                    <div className="p-8 flex flex-col flex-1">
                      <h2
                        className="text-xl font-bold mb-1"
                        style={{ color: plan.featured ? "#F1F5F9" : "#0F172A" }}
                      >
                        {plan.name}
                      </h2>
                      <p className="text-sm mb-6" style={{ color: plan.featured ? "#94A3B8" : "#64748B" }}>
                        {plan.description}
                      </p>

                      <div className="mb-8">
                        {price === null ? (
                          <span className="text-4xl font-black" style={{ color: plan.featured ? "#FFFFFF" : "#0F172A" }}>
                            Custom
                          </span>
                        ) : price === 0 ? (
                          <span className="text-4xl font-black" style={{ color: plan.featured ? "#FFFFFF" : "#0F172A" }}>
                            Free
                          </span>
                        ) : (
                          <>
                            <span className="text-4xl font-black" style={{ color: plan.featured ? "#FFFFFF" : "#0F172A" }}>
                              ${price}
                            </span>
                            <span className="ml-1 text-sm" style={{ color: plan.featured ? "#94A3B8" : "#64748B" }}>
                              / month {annual && "billed annually"}
                            </span>
                          </>
                        )}
                      </div>

                      <ul className="space-y-3 mb-8 flex-1">
                        {plan.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle
                              size={15}
                              className="flex-shrink-0 mt-0.5"
                              color={plan.featured ? "#7B96FF" : plan.accent}
                            />
                            <span
                              className="text-sm"
                              style={{ color: plan.featured ? "#CBD5E1" : "#0F172A" }}
                            >
                              {f}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href={plan.href}
                        className="block w-full text-center py-3.5 rounded-xl font-semibold transition-all duration-200"
                        style={
                          plan.featured
                            ? {
                                background: "linear-gradient(90deg, #4F6EF7, #7B96FF)",
                                color: "#FFFFFF",
                                boxShadow: "0 4px 20px rgba(79,110,247,0.4)",
                              }
                            : {
                                background: "transparent",
                                color: plan.accent,
                                border: `2px solid ${plan.accent}`,
                              }
                        }
                      >
                        {plan.cta}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-6 overflow-x-auto" style={{ background: "#FFFFFF" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#0F172A" }}>
              Feature Comparison
            </h2>
            <table className="w-full border-collapse">
              <thead>
                <tr style={{ borderBottom: "2px solid #E2E8F0" }}>
                  <th className="text-left py-3 pr-4 text-sm font-semibold" style={{ color: "#64748B", minWidth: "200px" }}>
                    Feature
                  </th>
                  {plans.map((p) => (
                    <th key={p.name} className="py-3 px-4 text-center text-sm font-bold" style={{ color: p.featured ? "#4F6EF7" : "#0F172A" }}>
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: "1px solid #F1F5F9",
                      background: i % 2 === 0 ? "transparent" : "#F8FAFC",
                    }}
                  >
                    <td className="py-3 pr-4 text-sm" style={{ color: "#0F172A" }}>
                      {row.feature}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <CheckCell value={row.starter} />
                    </td>
                    <td className="py-3 px-4 text-center">
                      <CheckCell value={row.pro} />
                    </td>
                    <td className="py-3 px-4 text-center">
                      <CheckCell value={row.enterprise} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6" style={{ background: "#F8FAFC" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#0F172A" }}>
              Frequently Asked Questions
            </h2>
            <Accordion items={faqItems} />
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
