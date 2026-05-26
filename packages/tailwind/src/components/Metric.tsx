"use client";

import { cn } from "zeroui-core";
import { Card } from "./Card";

export interface MetricProps {
  label: string;
  value: string;
  detail: string;
  className?: string;
}

export function Metric({ label, value, detail, className }: MetricProps) {
  return (
    <Card className={cn("p-4", className)} variant="glass">
      <p className="m-0 text-xs font-semibold uppercase text-muted-foreground">{label}</p>
      <p className="mt-3 font-mono text-3xl font-semibold tabular-nums text-foreground">
        {value}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{detail}</p>
    </Card>
  );
}

export const ZeroMetric = Metric;
