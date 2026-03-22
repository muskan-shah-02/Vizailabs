import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface GradientTextProps {
  className?: string;
  children: ReactNode;
}

export function GradientText({ className, children }: GradientTextProps) {
  return (
    <span
      className={cn("gradient-text", className)}
      style={{
        background: "linear-gradient(90deg, #4F6EF7, #7B96FF)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </span>
  );
}
