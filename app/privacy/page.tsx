import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — VizaiLabs / DokyDoc",
  description: "How VizaiLabs collects, uses, and protects your data when you use DokyDoc.",
};

const sections = [
  {
    title: "Information We Collect",
    content: `We collect information you provide directly to us when you create an account, request a demo, or use DokyDoc. This includes your name, email address, company name, and usage data within the platform.

We also automatically collect certain technical information when you use our services, including IP addresses, browser type, device identifiers, and interaction logs — solely for the purpose of operating, improving, and securing the platform.`,
  },
  {
    title: "How We Use Your Information",
    content: `We use the information we collect to:
• Provide, operate, and improve DokyDoc
• Send transactional emails (account setup, approvals, notifications)
• Respond to your inquiries and support requests
• Monitor for security threats and abuse
• Comply with legal obligations

We do not sell your data to third parties. We do not use your organizational knowledge content to train AI models.`,
  },
  {
    title: "Data Isolation and Multi-Tenancy",
    content: `All organizational data in DokyDoc is fully isolated between tenants. Your documents, analyses, ontology data, and audit logs are never accessible to or shared with other organizations.

Data isolation is enforced at the database, API, and AI context levels. No cross-tenant data leakage is architecturally possible.`,
  },
  {
    title: "AI Processing",
    content: `DokyDoc uses third-party AI providers (including Google Gemini and Anthropic Claude) to power document analysis and the AskyDoc assistant. When data is sent to these providers, it is processed under their data processing agreements.

We transmit only the minimum necessary data for each AI task. We do not permit third-party AI providers to use your data for model training. Enterprise customers may configure their own AI provider API keys for additional control.`,
  },
  {
    title: "Data Retention",
    content: `Document and analysis data is retained according to your plan's audit log retention limits (7 days for Starter, 90 days for Pro, unlimited for Enterprise). You may request deletion of your organization's data at any time by contacting us.

Account data is retained until you request deletion. We may retain minimal records for legal compliance purposes.`,
  },
  {
    title: "Security",
    content: `We implement industry-standard security practices including:
• Encryption in transit (TLS 1.3) and at rest (AES-256)
• Access control and authentication (including SSO/SAML for Enterprise)
• Regular security audits and penetration testing
• Immutable audit logs for all data access events
• SOC 2 Type II compliance (in progress)`,
  },
  {
    title: "Your Rights",
    content: `Depending on your jurisdiction, you may have rights to access, correct, delete, or export your personal data. To exercise these rights, contact us at privacy@vizailabs.com.

If you are in the EU/EEA, you have rights under GDPR. If you are in California, you have rights under CCPA.`,
  },
  {
    title: "Contact Us",
    content: `For privacy-related questions or to exercise your data rights, contact us at:

VizaiLabs
Email: privacy@vizailabs.com
Website: vizailabs.com`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section
          className="pt-32 pb-16 px-6"
          style={{ background: "linear-gradient(135deg, #0B0F1A 0%, #1E2D4F 50%, #0B0F1A 100%)" }}
        >
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4" style={{ color: "#F1F5F9" }}>
              Privacy Policy
            </h1>
            <p style={{ color: "#94A3B8" }}>
              Last updated: March 2026 · VizaiLabs / DokyDoc
            </p>
          </div>
        </section>

        <section className="py-16 px-6" style={{ background: "#FFFFFF" }}>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed mb-12" style={{ color: "#64748B" }}>
              VizaiLabs (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) operates DokyDoc and is committed to protecting your
              privacy and the confidentiality of your organizational data. This policy explains
              how we collect, use, and protect information when you use our services.
            </p>

            <div className="space-y-10">
              {sections.map((section, i) => (
                <div key={i}>
                  <h2 className="text-xl font-bold mb-3" style={{ color: "#0F172A" }}>
                    {i + 1}. {section.title}
                  </h2>
                  <div className="text-base leading-relaxed whitespace-pre-line" style={{ color: "#64748B" }}>
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
