"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle, Mail, Clock, Users, Zap } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid work email"),
  company: z.string().min(1, "Company name is required"),
  teamSize: z.string().min(1, "Please select your team size"),
  useCase: z.string().min(1, "Please select a primary use case"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const demoExpectations = [
  { icon: Clock, text: "30-minute live product walkthrough" },
  { icon: Users, text: "Tailored to your team's use case" },
  { icon: Zap, text: "Live Q&A with a product specialist" },
  { icon: CheckCircle, text: "Custom onboarding plan if it's a fit" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="pt-32 pb-10 px-6"
          style={{ background: "linear-gradient(135deg, #0B0F1A 0%, #1E2D4F 50%, #0B0F1A 100%)" }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-6"
              style={{ background: "rgba(79,110,247,0.15)", color: "#7B96FF", border: "1px solid rgba(79,110,247,0.3)" }}
            >
              Get in Touch
            </span>
            <h1 className="text-5xl font-bold mb-4" style={{ color: "#F1F5F9" }}>
              Request a Demo
            </h1>
            <p className="text-xl" style={{ color: "#94A3B8" }}>
              See DokyDoc in action with a live walkthrough tailored to your team.
            </p>
          </div>
        </section>

        <section className="py-16 px-6" style={{ background: "#F8FAFC" }}>
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
            {/* Left: Info */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#0F172A" }}>
                What to Expect in Your Demo
              </h2>
              <p className="text-lg mb-8" style={{ color: "#64748B" }}>
                We&apos;ll spend 30 minutes showing you exactly how DokyDoc fits into your team&apos;s workflow — from document ingestion to AskyDoc queries to governance controls.
              </p>

              <div className="space-y-5 mb-10">
                {demoExpectations.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(79,110,247,0.1)" }}
                    >
                      <item.icon size={18} color="#4F6EF7" />
                    </div>
                    <span className="font-medium" style={{ color: "#0F172A" }}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="rounded-xl p-6"
                style={{ background: "rgba(79,110,247,0.06)", border: "1px solid rgba(79,110,247,0.15)" }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Mail size={18} color="#4F6EF7" />
                  <span className="font-semibold" style={{ color: "#1E3A5F" }}>
                    Prefer email?
                  </span>
                </div>
                <p className="text-sm" style={{ color: "#64748B" }}>
                  Reach us directly at{" "}
                  <a href="mailto:hello@vizailabs.com" style={{ color: "#4F6EF7" }}>
                    hello@vizailabs.com
                  </a>
                  . We respond within 24 hours on business days.
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              {submitted ? (
                <div
                  className="rounded-2xl p-10 text-center"
                  style={{ background: "#FFFFFF", border: "1px solid #E2E8F0" }}
                >
                  <div
                    className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center"
                    style={{ background: "rgba(34,197,94,0.1)" }}
                  >
                    <CheckCircle size={32} color="#22C55E" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: "#0F172A" }}>
                    Request Received!
                  </h3>
                  <p style={{ color: "#64748B" }}>
                    Thanks for reaching out. Our team will be in touch within one business day to schedule your demo.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="rounded-2xl p-8 space-y-5"
                  style={{ background: "#FFFFFF", border: "1px solid #E2E8F0" }}
                >
                  <h3 className="text-xl font-bold mb-2" style={{ color: "#0F172A" }}>
                    Tell us about your team
                  </h3>

                  <FormField label="Full Name" error={errors.name?.message}>
                    <input {...register("name")} placeholder="Jane Smith" />
                  </FormField>

                  <FormField label="Work Email" error={errors.email?.message}>
                    <input {...register("email")} type="email" placeholder="jane@company.com" />
                  </FormField>

                  <FormField label="Company Name" error={errors.company?.message}>
                    <input {...register("company")} placeholder="Acme Corp" />
                  </FormField>

                  <FormField label="Team Size" error={errors.teamSize?.message}>
                    <select {...register("teamSize")}>
                      <option value="">Select team size...</option>
                      <option value="1-10">1–10 people</option>
                      <option value="11-50">11–50 people</option>
                      <option value="51-200">51–200 people</option>
                      <option value="200+">200+ people</option>
                    </select>
                  </FormField>

                  <FormField label="Primary Use Case" error={errors.useCase?.message}>
                    <select {...register("useCase")}>
                      <option value="">Select use case...</option>
                      <option value="engineering">Engineering / Code-Doc Alignment</option>
                      <option value="business-analysis">Business Analysis / Requirements</option>
                      <option value="product">Product Management</option>
                      <option value="compliance">Compliance / Audit</option>
                      <option value="knowledge-management">Knowledge Management</option>
                      <option value="ai-assistant">AI Assistant / Querying</option>
                    </select>
                  </FormField>

                  <FormField label="Message (optional)">
                    <textarea
                      {...register("message")}
                      rows={3}
                      placeholder="Tell us about your documentation challenges..."
                    />
                  </FormField>

                  {error && (
                    <p className="text-sm" style={{ color: "#EF4444" }}>
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl font-bold text-white transition-all duration-200"
                    style={{
                      background: "linear-gradient(135deg, #4F6EF7, #7B96FF)",
                      boxShadow: "0 4px 20px rgba(79,110,247,0.3)",
                      opacity: loading ? 0.7 : 1,
                    }}
                  >
                    {loading ? "Sending..." : "Request a Demo"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function FormField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactElement;
}) {
  return (
    <div>
      <label
        className="block text-sm font-semibold mb-1.5"
        style={{ color: "#0F172A" }}
      >
        {label}
      </label>
      <div
        className="w-full"
        style={{
          // Style all input/select/textarea children
        }}
      >
        {/* Inject className into child */}
        {(() => {
          const child = children as React.ReactElement<React.HTMLProps<HTMLElement>>;
          return (
            <child.type
              {...child.props}
              className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors"
              style={{
                background: "#F8FAFC",
                border: error ? "1.5px solid #EF4444" : "1.5px solid #E2E8F0",
                color: "#0F172A",
              }}
              onFocus={(e: React.FocusEvent<HTMLElement>) => {
                (e.target as HTMLElement).style.borderColor = "#4F6EF7";
                (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(79,110,247,0.1)";
              }}
              onBlur={(e: React.FocusEvent<HTMLElement>) => {
                (e.target as HTMLElement).style.borderColor = error ? "#EF4444" : "#E2E8F0";
                (e.target as HTMLElement).style.boxShadow = "none";
              }}
            />
          );
        })()}
      </div>
      {error && (
        <p className="mt-1 text-xs" style={{ color: "#EF4444" }}>
          {error}
        </p>
      )}
    </div>
  );
}
