"use client";

import type { CSSProperties } from "react";
import { Card } from "./Card";

export interface MetricProps {
  label: string;
  value: string;
  detail: string;
  className?: string;
  style?: CSSProperties;
}

export function Metric({ label, value, detail, className, style }: MetricProps) {
  return (
    <Card className={className} style={style} variant="glass">
      <p className="zui-metric-label">{label}</p>
      <p className="zui-metric-value">{value}</p>
      <p className="zui-metric-detail">{detail}</p>
    </Card>
  );
}

export const ZeroMetric = Metric;
