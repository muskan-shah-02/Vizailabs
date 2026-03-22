import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — VizaiLabs / DokyDoc",
  description: "The terms and conditions governing your use of DokyDoc by VizaiLabs.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    content: `By accessing or using DokyDoc (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service.

These Terms apply to all users of the Service, including individuals accessing under a free Starter plan, paid Pro plan, or Enterprise agreement.`,
  },
  {
    title: "Description of Service",
    content: `DokyDoc is an AI-powered document analysis and governance platform developed by VizaiLabs. The Service provides document analysis, knowledge graph construction, code-documentation alignment detection, AI-assisted querying (AskyDoc), approval workflows, and audit trail functionality.

VizaiLabs reserves the right to modify, suspend, or discontinue any part of the Service at any time with reasonable notice.`,
  },
  {
    title: "Account Registration",
    content: `To use DokyDoc, you must create an account and provide accurate information. You are responsible for maintaining the security of your account credentials. You must notify us immediately of any unauthorized access to your account.

Each account belongs to a single organization. Sharing accounts between organizations is prohibited.`,
  },
  {
    title: "Acceptable Use",
    content: `You agree not to use the Service to:
• Upload content that violates applicable laws or third-party rights
• Attempt to gain unauthorized access to other users' data
• Reverse engineer, decompile, or extract source code from the Service
• Use the Service to develop competing products
• Transmit malicious code or attempt to disrupt the Service
• Violate any applicable law or regulation`,
  },
  {
    title: "Your Content",
    content: `You retain all ownership rights to the documents, code, and data you upload to DokyDoc ("Your Content"). By using the Service, you grant VizaiLabs a limited license to process Your Content solely to provide and improve the Service.

VizaiLabs does not claim ownership of Your Content and will not use Your Content to train AI models or share it with other organizations.`,
  },
  {
    title: "Payment and Billing",
    content: `Paid plans are billed in advance on a monthly or annual basis. All fees are non-refundable except as required by law or as specified in your Enterprise agreement.

For prepaid plans, unused credits do not carry over between billing periods unless otherwise specified. AI usage that exceeds your plan's allocation may result in additional charges as disclosed in the pricing documentation.`,
  },
  {
    title: "Service Level Agreement",
    content: `VizaiLabs targets 99.9% uptime for Enterprise customers under a separate SLA agreement. Starter and Pro plans are provided on a best-effort basis without uptime guarantees.

Planned maintenance will be communicated in advance through the service status page.`,
  },
  {
    title: "Intellectual Property",
    content: `The Service, including all software, algorithms, interfaces, and documentation created by VizaiLabs, is the intellectual property of VizaiLabs and is protected by copyright, patent, and trade secret laws.

Nothing in these Terms grants you any right to use VizaiLabs' trademarks, logos, or product names without prior written consent.`,
  },
  {
    title: "Limitation of Liability",
    content: `To the maximum extent permitted by law, VizaiLabs shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service. Our total liability shall not exceed the amount you paid us in the twelve months preceding the claim.`,
  },
  {
    title: "Termination",
    content: `Either party may terminate these Terms at any time. Upon termination, your right to use the Service ceases immediately. We will provide a data export for paid customers upon request within 30 days of termination.

We may suspend or terminate accounts that violate these Terms without notice.`,
  },
  {
    title: "Changes to Terms",
    content: `We may update these Terms from time to time. We will notify you of material changes via email or in-app notification at least 30 days before they take effect. Continued use of the Service after changes take effect constitutes acceptance of the updated Terms.`,
  },
  {
    title: "Contact",
    content: `For questions about these Terms, contact us at:

VizaiLabs
Email: legal@vizailabs.com
Website: vizailabs.com`,
  },
];

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p style={{ color: "#94A3B8" }}>
              Last updated: March 2026 · VizaiLabs / DokyDoc
            </p>
          </div>
        </section>

        <section className="py-16 px-6" style={{ background: "#FFFFFF" }}>
          <div className="max-w-3xl mx-auto">
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
