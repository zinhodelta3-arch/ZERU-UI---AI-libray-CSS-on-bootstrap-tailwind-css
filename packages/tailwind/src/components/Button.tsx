"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn, type ZeroRadius, type ZeroVisualVariant } from "@zero-ui/core";

export type ButtonVariant = ZeroVisualVariant;
export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl" | "icon";
export type ButtonRadius = ZeroRadius;

export const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2 border text-sm font-semibold transition duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--zui-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-45",
  {
    variants: {
      variant: {
        primary:
          "border-white/10 bg-[linear-gradient(135deg,#7c5cff_0%,#6d5dfc_48%,#2f7dff_100%)] text-white shadow-[0_16px_46px_rgba(124,92,255,0.28),inset_0_1px_0_rgba(255,255,255,0.26)] hover:-translate-y-0.5 hover:shadow-[0_22px_58px_rgba(124,92,255,0.34),inset_0_1px_0_rgba(255,255,255,0.3)] active:translate-y-0",
        secondary:
          "border-white/[0.12] bg-white/[0.085] text-foreground shadow-[0_16px_48px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl hover:-translate-y-0.5 hover:border-white/[0.22] hover:bg-white/[0.12] active:translate-y-0",
        accent:
          "border-cyan-400/40 bg-cyan-400/[0.14] text-foreground hover:-translate-y-0.5 hover:bg-cyan-400/[0.2]",
        success:
          "border-emerald-400/40 bg-emerald-400/[0.14] text-foreground hover:bg-emerald-400/[0.2]",
        warning:
          "border-amber-400/40 bg-amber-400/[0.14] text-foreground hover:bg-amber-400/[0.2]",
        danger:
          "border-rose-500/35 bg-rose-500/[0.12] text-foreground hover:bg-rose-500/[0.18]",
        info:
          "border-blue-400/40 bg-blue-400/[0.14] text-foreground hover:bg-blue-400/[0.2]",
        neutral:
          "border-border bg-muted text-foreground hover:bg-muted/80",
        ghost:
          "border-white/10 bg-transparent text-foreground/90 backdrop-blur-xl hover:-translate-y-0.5 hover:border-violet-400/40 hover:bg-violet-500/10 active:translate-y-0",
        soft: "border-transparent bg-muted text-foreground hover:bg-muted/80",
        outline: "border-border bg-transparent text-foreground hover:bg-muted",
        link: "border-transparent bg-transparent text-primary shadow-none hover:text-primary/80",
        glass:
          "border-white/[0.14] bg-white/[0.08] text-foreground shadow-[0_18px_52px_rgba(0,0,0,0.18)] backdrop-blur-2xl hover:bg-white/[0.12]",
        gradient:
          "border-white/10 bg-[linear-gradient(135deg,#7c5cff_0%,#06b6d4_100%)] text-white shadow-[0_18px_52px_rgba(124,92,255,0.26)] hover:-translate-y-0.5",
      },
      size: {
        xs: "h-8 px-2.5 text-xs",
        sm: "h-9 px-3 text-xs",
        md: "h-11 px-4",
        lg: "h-12 px-5 text-base",
        xl: "h-14 px-6 text-base",
        icon: "h-10 w-10 p-0",
      },
      radius: {
        sm: "rounded-[6px]",
        md: "rounded-[8px]",
        lg: "rounded-[12px]",
        xl: "rounded-[16px]",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      radius: "md",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  intent?: ButtonVariant;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export function Button({
  className,
  variant,
  intent,
  size,
  radius,
  type = "button",
  loading = false,
  disabled,
  leftIcon,
  rightIcon,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant: variant ?? intent, size, radius }), className)}
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? <span className="zui-spinner" aria-hidden="true" /> : leftIcon}
      {children ? <span>{children}</span> : null}
      {rightIcon}
    </button>
  );
}

export const ZeroButton = Button;
