"use client";

import type { ReactNode } from "react";
import { cn } from "@zero-ui/core";

export interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  children: ReactNode;
  action?: ReactNode;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  children,
  action,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "zui-section-heading mb-4 d-flex flex-column flex-md-row align-items-md-end justify-content-md-between gap-3",
        className,
      )}
    >
      <div>
        <p className="zui-eyebrow mb-0">{eyebrow}</p>
        <h2 className="zui-heading-title">{title}</h2>
        <p className="zui-heading-description mb-0">{children}</p>
      </div>

      {action ? <div className="flex-shrink-0">{action}</div> : null}
    </div>
  );
}
