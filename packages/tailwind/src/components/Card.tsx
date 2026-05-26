"use client";

import type { HTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@zero-ui/core";

export const cardVariants = cva(
  "overflow-hidden border text-card-foreground shadow-zui-md transition duration-300",
  {
    variants: {
      variant: {
        default: "border-border bg-card",
        elevated: "border-border bg-surface-elevated shadow-zui-lg",
        outline: "border-border bg-transparent shadow-none",
        soft: "border-transparent bg-muted",
        glass: "zui-glass border-white/[0.14] bg-white/[0.075] backdrop-blur-2xl",
        gradient:
          "border-white/[0.14] bg-[linear-gradient(135deg,rgba(124,92,255,0.16),rgba(34,211,238,0.08))]",
      },
      radius: {
        sm: "rounded-[6px]",
        md: "rounded-[8px]",
        lg: "rounded-[12px]",
        xl: "rounded-[16px]",
      },
      hover: {
        true: "hover:-translate-y-0.5 hover:border-border-strong hover:shadow-zui-lg",
        false: "",
      },
      interactive: {
        true: "cursor-pointer",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      radius: "md",
      hover: false,
      interactive: false,
    },
  },
);

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  children?: ReactNode;
}

export function Card({
  className,
  variant,
  radius,
  hover,
  interactive,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        cardVariants({
          variant,
          radius,
          hover: hover ?? interactive ?? false,
          interactive: interactive ?? false,
        }),
        "p-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export const ZeroPanel = Card;
