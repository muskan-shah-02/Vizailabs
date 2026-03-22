import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "DokyDoc — AI-Powered Document Analysis & Governance | VizaiLabs",
  description:
    "DokyDoc transforms your documents and code into a living knowledge graph with AI analysis, mismatch detection, and an AI assistant. Built for engineering teams.",
  keywords: [
    "AI document analysis",
    "documentation governance platform",
    "code documentation alignment",
    "knowledge graph software",
    "document intelligence",
    "AI document management",
  ],
  metadataBase: new URL("https://dokydoc.vizailabs.com"),
  authors: [{ name: "VizaiLabs" }],
  creator: "VizaiLabs",
  publisher: "VizaiLabs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dokydoc.vizailabs.com",
    siteName: "DokyDoc by VizaiLabs",
    title: "DokyDoc — AI-Powered Document Analysis & Governance",
    description:
      "Turn your documents and code into a living knowledge graph with governance, alignment checks, and an AI assistant built in.",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "DokyDoc — AI Document Intelligence Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DokyDoc — AI-Powered Document Analysis & Governance",
    description:
      "Turn your documents and code into a living knowledge graph with governance, alignment checks, and an AI assistant built in.",
    images: ["/og-default.png"],
    creator: "@vizailabs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
