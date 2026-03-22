import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BrowserMockupProps {
  className?: string;
  children: ReactNode;
  url?: string;
}

export function BrowserMockup({ className, children, url = "app.dokydoc.com" }: BrowserMockupProps) {
  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden shadow-2xl border border-white/10",
        className
      )}
      style={{ background: "#1a2332" }}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10" style={{ background: "#111827" }}>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
          <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
          <div className="w-3 h-3 rounded-full bg-[#22C55E]" />
        </div>
        <div
          className="flex-1 max-w-xs mx-auto rounded-md px-3 py-1 text-xs text-center"
          style={{ background: "#0B0F1A", color: "#64748B" }}
        >
          {url}
        </div>
      </div>
      {/* Content */}
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}
