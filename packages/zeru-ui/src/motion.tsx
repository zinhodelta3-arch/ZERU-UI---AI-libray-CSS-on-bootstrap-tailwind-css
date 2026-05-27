"use client";

import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { cn } from "zeroui-core";

export type ZeruMotionPreset =
  | "fade"
  | "fade-up"
  | "fade-down"
  | "scale"
  | "blur"
  | "reveal"
  | "float"
  | "glow"
  | "gradient";

export const zeruMotionVariants = {
  fade: "zu-animate-fade-in",
  "fade-up": "zu-animate-fade-up",
  "fade-down": "zu-animate-fade-down",
  scale: "zu-animate-scale-in",
  blur: "zu-animate-blur-in",
  reveal: "zu-animate-reveal-mask",
  float: "zu-animate-float",
  glow: "zu-animate-glow",
  gradient: "zu-animate-gradient",
} as const satisfies Record<ZeruMotionPreset, string>;

export interface ZeruMotionProps extends HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section" | "article" | "span";
  preset?: ZeruMotionPreset;
  delay?: 75 | 100 | 150 | 200 | 300 | 500 | 700 | 1000;
  duration?: 150 | 200 | 300 | 500 | 700 | 1000 | 1500;
  children?: ReactNode;
}

export function ZeruMotion({
  as = "div",
  preset = "fade-up",
  delay,
  duration,
  className,
  children,
  ...props
}: ZeruMotionProps) {
  const Component = as;

  return (
    <Component
      className={cn(
        zeruMotionVariants[preset],
        delay && `zu-delay-${delay}`,
        duration && `zu-duration-${duration}`,
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export interface ZeruStaggerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  stepMs?: number;
}

export function ZeruStagger({ className, children, stepMs = 90, style, ...props }: ZeruStaggerProps) {
  return (
    <div
      className={cn("zu-stagger zu-grid-auto", className)}
      style={{ "--zu-stagger-step": `${stepMs}ms`, ...style } as CSSProperties}
      {...props}
    >
      {children}
    </div>
  );
}

export const ZeruReveal = ZeruMotion;
export const ZeruFloat = (props: Omit<ZeruMotionProps, "preset">) => (
  <ZeruMotion preset="float" {...props} />
);
export const ZeruGlow = (props: Omit<ZeruMotionProps, "preset">) => (
  <ZeruMotion preset="glow" {...props} />
);

export function useZeruReducedMotion() {
  if (typeof window === "undefined" || !("matchMedia" in window)) {
    return false;
  }

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useZeruThemeMotion() {
  return {
    duration: "var(--zu-transition-base)",
    easing: "var(--zu-ease-premium)",
    reducedMotion: useZeruReducedMotion(),
  };
}
