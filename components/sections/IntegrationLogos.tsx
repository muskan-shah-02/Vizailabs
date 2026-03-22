"use client";

import { motion } from "framer-motion";

const integrations = [
  { name: "GitHub", icon: "GH" },
  { name: "GitLab", icon: "GL" },
  { name: "Notion", icon: "N" },
  { name: "Jira", icon: "J" },
  { name: "Slack", icon: "S" },
  { name: "Google Drive", icon: "GD" },
  { name: "Confluence", icon: "CF" },
];

export function IntegrationLogos() {
  return (
    <section className="py-20 px-6" style={{ background: "#FFFFFF" }}>
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-3" style={{ color: "#0F172A" }}>
            Works With Your Stack
          </h2>
          <p className="text-base mb-12" style={{ color: "#64748B" }}>
            Connect your existing tools in minutes. More integrations coming soon.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {integrations.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                className="flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                style={{
                  background: "#F8FAFC",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(79,110,247,0.3)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 4px 16px rgba(79,110,247,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 4px rgba(0,0,0,0.03)";
                }}
              >
                {/* Icon placeholder */}
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black text-white"
                  style={{ background: "linear-gradient(135deg, #4F6EF7, #7B96FF)" }}
                >
                  {tool.icon}
                </div>
                <span className="font-medium text-sm" style={{ color: "#0F172A" }}>
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>

          <p className="text-sm" style={{ color: "#94A3B8" }}>
            + Bitbucket, Linear, Asana, HubSpot, Salesforce, and more on the roadmap.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
