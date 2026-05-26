"use client";

import type { HTMLAttributes, ReactNode } from "react";
import BootstrapBadge from "react-bootstrap/Badge";
import { cn } from "@zero-ui/core";

export type BadgeVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "neutral"
  | "outline"
  | "soft";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  active?: boolean;
  children?: ReactNode;
}

export function Badge({
  className,
  variant = "neutral",
  active = false,
  children,
  ...props
}: BadgeProps) {
  return (
    <BootstrapBadge
      as="span"
      className={cn(
        "zui-badge",
        `zui-badge-${variant}`,
        active && "zui-badge-active",
        className,
      )}
      {...props}
    >
      {children}
    </BootstrapBadge>
  );
}

export const Pill = Badge;
export const ZeroPill = Badge;
