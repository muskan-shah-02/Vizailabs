import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface BadgeProps {
  variant?: "accent" | "dark" | "light" | "success";
  className?: string;
  children: ReactNode;
}

export function Badge({ variant = "accent", className, children }: BadgeProps) {
  const variants = {
    accent:
      "bg-[#4F6EF7]/15 text-[#7B96FF] border border-[#4F6EF7]/30",
    dark: "bg-white/10 text-[#F1F5F9] border border-white/20",
    light: "bg-[#1E3A5F]/10 text-[#1E3A5F] border border-[#1E3A5F]/20",
    success: "bg-[#22C55E]/15 text-[#22C55E] border border-[#22C55E]/30",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
