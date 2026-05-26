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
    <div className={cn("mb-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between", className)}>
      <div>
        <p className="text-xs font-bold uppercase text-primary">{eyebrow}</p>
        <h2 className="mt-2 max-w-3xl text-2xl font-semibold leading-tight text-foreground md:text-4xl">
          {title}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
          {children}
        </p>
      </div>
      {action}
    </div>
  );
}
