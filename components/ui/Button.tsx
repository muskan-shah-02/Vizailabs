import { cn } from "@/lib/utils";
import Link from "next/link";
import { type ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "ghost" | "outline" | "white" | "white-ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  children,
  type = "button",
  disabled,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer select-none";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variants: Record<string, string> = {
    primary: "btn-shimmer text-white focus:ring-accent shadow-lg",
    ghost:
      "bg-transparent text-text-inverse border border-text-inverse/30 hover:bg-white/10 hover:border-white/60 focus:ring-white",
    outline:
      "bg-transparent text-accent border border-accent hover:bg-accent hover:text-white focus:ring-accent",
    white: "bg-white text-primary hover:bg-bg-light focus:ring-white shadow-md",
    "white-ghost":
      "bg-transparent text-white border border-white/60 hover:bg-white/10 focus:ring-white",
  };

  const classes = cn(base, sizes[size], variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
