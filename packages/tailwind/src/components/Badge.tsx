"use client";

import type { HTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@zero-ui/core";

export const badgeVariants = cva(
  "inline-flex min-h-8 items-center gap-2 rounded-[7px] border px-3 py-1 text-xs font-semibold uppercase",
  {
    variants: {
      variant: {
        primary: "border-violet-400/55 bg-violet-500/[0.14] text-foreground",
        secondary: "border-white/10 bg-white/[0.055] text-muted-foreground",
        success: "border-emerald-400/45 bg-emerald-400/[0.1] text-emerald-300",
        warning: "border-amber-400/45 bg-amber-400/[0.1] text-amber-300",
        danger: "border-rose-400/45 bg-rose-400/[0.1] text-rose-300",
        info: "border-blue-400/45 bg-blue-400/[0.1] text-blue-300",
        neutral: "border-border bg-muted text-muted-foreground",
        outline: "border-border bg-transparent text-foreground",
        soft: "border-transparent bg-muted text-foreground",
      },
      active: {
        true: "border-violet-400/55 bg-violet-500/[0.14] text-foreground shadow-[0_10px_32px_rgba(124,92,255,0.14)]",
        false: "",
      },
    },
    defaultVariants: {
      variant: "neutral",
      active: false,
    },
  },
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  children?: ReactNode;
}

export function Badge({ className, variant, active, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, active }), className)} {...props}>
      {children}
    </span>
  );
}

export const Pill = Badge;
export const ZeroPill = Badge;
