"use client";

import type { HTMLAttributes, ReactNode } from "react";
import BootstrapCard from "react-bootstrap/Card";
import { cn } from "@zero-ui/core";

export type CardVariant = "default" | "elevated" | "outline" | "soft" | "glass" | "gradient";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  interactive?: boolean;
  hover?: boolean;
  children?: ReactNode;
}

export function Card({
  className,
  variant = "default",
  interactive = false,
  hover = interactive,
  children,
  ...props
}: CardProps) {
  return (
    <BootstrapCard
      className={cn(
        "zui-card",
        `zui-card-${variant}`,
        interactive && "zui-card-interactive",
        hover && "zui-card-hover",
        className,
      )}
      {...props}
    >
      <BootstrapCard.Body>{children}</BootstrapCard.Body>
    </BootstrapCard>
  );
}

export const ZeroPanel = Card;
