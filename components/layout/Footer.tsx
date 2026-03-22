"use client";

import Link from "next/link";

const product = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Changelog", href: "/blog" },
  { label: "Roadmap", href: "/blog" },
];

const company = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/about#careers" },
  { label: "Press", href: "/about#press" },
];

const resources = [
  { label: "Docs", href: "/docs" },
  { label: "API Reference", href: "/docs" },
  { label: "Status", href: "#" },
  { label: "Support", href: "/contact" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Security", href: "/privacy#security" },
];

function LogoMark() {
  return (
    <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
      <rect width="28" height="28" rx="7" fill="#4F6EF7" fillOpacity="0.15" />
      <path d="M7 8L13 20L14 17.5L15 20L21 8H18L14 17L10 8H7Z" fill="#4F6EF7" />
      <path d="M14 17.5L15 20L21 8H18L14 17.5Z" fill="#7B96FF" fillOpacity="0.6" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer style={{ background: "#0B0F1A", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Col 1: Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <LogoMark />
              <span className="font-bold text-white text-lg">VizaiLabs</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#64748B" }}>
              Building AI-native intelligence products that make every team&apos;s knowledge perpetually alive, reliable, and actionable.
            </p>
            <div className="flex items-center gap-3">
              <SocialLink href="https://twitter.com/vizailabs" label="Twitter/X">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.26 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </SocialLink>
              <SocialLink href="https://linkedin.com/company/vizailabs" label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </SocialLink>
              <SocialLink href="https://github.com/vizailabs" label="GitHub">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </SocialLink>
            </div>
          </div>

          {/* Col 2: Product */}
          <FooterCol title="Product" links={product} />
          {/* Col 3: Company */}
          <FooterCol title="Company" links={company} />
          {/* Col 4: Resources */}
          <FooterCol title="Resources" links={resources} />
          {/* Col 5: Legal */}
          <FooterCol title="Legal" links={legal} />
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)", color: "#64748B" }}
        >
          <p>© 2026 VizaiLabs. All rights reserved.</p>
          <p>
            DokyDoc — AI-Powered Document Intelligence by{" "}
            <span style={{ color: "#4F6EF7" }}>VizaiLabs</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="font-semibold text-white text-sm mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm transition-colors duration-150 hover:text-white"
              style={{ color: "#64748B" }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-150"
      style={{ background: "rgba(255,255,255,0.06)", color: "#64748B" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = "rgba(79,110,247,0.15)";
        (e.currentTarget as HTMLElement).style.color = "#4F6EF7";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
        (e.currentTarget as HTMLElement).style.color = "#64748B";
      }}
    >
      {children}
    </a>
  );
}
