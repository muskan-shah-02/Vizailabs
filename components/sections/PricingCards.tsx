"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "Perfect for small teams exploring documentation intelligence.",
    highlights: [
      "3 team members",
      "10 documents",
      "1 repository",
      "Basic AI analysis (10 runs/month)",
      "Community support",
    ],
    cta: "Get Started Free",
    href: "/contact",
    accent: "#2D5F9E",
    featured: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/ month per org",
    description: "For growing teams that need full AI power and governance.",
    highlights: [
      "20 team members",
      "Unlimited documents",
      "5 repositories",
      "Full AI analysis (200 runs/month)",
      "AskyDoc AI assistant (100 queries/month)",
      "Email support + 48h SLA",
    ],
    cta: "Start Free Trial",
    href: "/contact",
    accent: "#4F6EF7",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "Unlimited scale, SSO, on-prem option, and dedicated support.",
    highlights: [
      "Unlimited everything",
      "SSO / SAML integration",
      "On-premise deployment option",
      "Dedicated Customer Success Manager",
      "SLA guarantee (99.9% uptime)",
      "Custom AI cost limits",
    ],
    cta: "Talk to Sales",
    href: "/contact",
    accent: "#1E3A5F",
    featured: false,
  },
];

export function PricingCards() {
  return (
    <section
      id="pricing"
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
          className="text-center mb-16"
        >
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4"
            style={{
              background: "rgba(79,110,247,0.1)",
              color: "#4F6EF7",
              border: "1px solid rgba(79,110,247,0.2)",
            }}
          >
            Pricing
          </span>
          <h2 className="text-4xl font-bold mb-4" style={{ color: "#0F172A" }}>
            Simple Pricing. Serious Power.
          </h2>
          <p className="text-lg" style={{ color: "#64748B" }}>
            Start free. Scale as your team grows. No surprises.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative flex flex-col rounded-2xl"
              style={
                plan.featured
                  ? {
                      background: "linear-gradient(145deg, #1E3A5F, #2D5F9E)",
                      border: `2px solid ${plan.accent}`,
                      boxShadow: `0 20px 60px rgba(79,110,247,0.25)`,
                    }
                  : {
                      background: "#FFFFFF",
                      border: "1px solid #E2E8F0",
                    }
              }
            >
              {/* Popular badge */}
              {plan.featured && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold text-white"
                  style={{ background: "linear-gradient(90deg, #4F6EF7, #7B96FF)" }}
                >
                  Most Popular
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                {/* Plan name */}
                <h3
                  className="text-lg font-bold mb-1"
                  style={{ color: plan.featured ? "#F1F5F9" : "#0F172A" }}
                >
                  {plan.name}
                </h3>
                <p
                  className="text-sm mb-6"
                  style={{ color: plan.featured ? "#94A3B8" : "#64748B" }}
                >
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span
                    className="text-5xl font-black"
                    style={{ color: plan.featured ? "#FFFFFF" : "#0F172A" }}
                  >
                    {plan.price}
                  </span>
                  <span className="ml-2 text-sm" style={{ color: plan.featured ? "#94A3B8" : "#64748B" }}>
                    {plan.period}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.highlights.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle
                        size={16}
                        className="flex-shrink-0 mt-0.5"
                        color={plan.featured ? "#7B96FF" : plan.accent}
                      />
                      <span
                        className="text-sm"
                        style={{ color: plan.featured ? "#CBD5E1" : "#0F172A" }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={plan.href}
                  className="block w-full text-center py-3.5 rounded-xl font-semibold text-base transition-all duration-200"
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
                  onMouseEnter={(e) => {
                    if (!plan.featured) {
                      (e.currentTarget as HTMLElement).style.background = plan.accent;
                      (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!plan.featured) {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                      (e.currentTarget as HTMLElement).style.color = plan.accent;
                    }
                  }}
                >
                  {plan.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link to full pricing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <Link
            href="/pricing"
            className="text-sm font-medium hover:underline"
            style={{ color: "#4F6EF7" }}
          >
            See full pricing details and feature comparison →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
