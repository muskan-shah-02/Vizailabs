"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section
      className="py-24 px-6"
      style={{ background: "linear-gradient(90deg, #4F6EF7 0%, #7B96FF 100%)" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative icon */}
          <div className="flex justify-center mb-8">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M7 8L13 20L14 17.5L15 20L21 8H18L14 17L10 8H7Z" fill="white" />
              </svg>
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Start Governing Your Knowledge Today.
          </h2>
          <p
            className="text-lg mb-10 max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Free trial. No credit card required. Up and running in minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all duration-200"
              style={{ background: "#FFFFFF", color: "#1E3A5F" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              Start Free Trial
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/contact?type=sales"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all duration-200 text-white"
              style={{ border: "2px solid rgba(255,255,255,0.5)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.15)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.8)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.5)";
              }}
            >
              Talk to Sales
            </Link>
          </div>

          <p className="mt-8 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
            Join 200+ engineering teams already using DokyDoc in early access.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
