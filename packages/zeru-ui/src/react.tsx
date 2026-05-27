"use client";

import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "zeroui-core";

export type ZeruVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "soft"
  | "outline"
  | "glass"
  | "gradient"
  | "danger"
  | "success"
  | "warning"
  | "info"
  | "dark"
  | "light"
  | "link";

export type ZeruSize = "sm" | "md" | "lg" | "xl";

export interface ZeruButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ZeruVariant;
  size?: ZeruSize | "icon";
  loading?: boolean;
  block?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export function ZeruButton({
  className,
  variant = "primary",
  size = "md",
  loading = false,
  block = false,
  disabled,
  type = "button",
  leftIcon,
  rightIcon,
  children,
  ...props
}: ZeruButtonProps) {
  return (
    <button
      className={cn(
        "zu-btn",
        `zu-btn-${variant}`,
        `zu-btn-${size}`,
        block && "zu-btn-block",
        loading && "zu-btn-loading",
        className,
      )}
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? <span className="zu-spinner" aria-hidden="true" /> : leftIcon}
      {children ? <span>{children}</span> : null}
      {rightIcon}
    </button>
  );
}

export interface ZeruCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "glass" | "gradient" | "minimal" | "border-glow";
  hover?: boolean;
  interactive?: boolean;
}

export function ZeruCard({
  className,
  variant = "default",
  hover,
  interactive,
  children,
  ...props
}: ZeruCardProps) {
  return (
    <div
      className={cn(
        "zu-card",
        variant !== "default" && `zu-card-${variant}`,
        hover && "zu-card-hover",
        interactive && "zu-card-interactive",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export interface ZeruBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "soft" | "outline" | "glass" | "gradient" | "success" | "warning" | "danger" | "info";
  dot?: boolean;
}

export function ZeruBadge({
  className,
  variant = "default",
  dot = false,
  children,
  ...props
}: ZeruBadgeProps) {
  return (
    <span
      className={cn(
        "zu-badge",
        variant !== "default" && `zu-badge-${variant}`,
        dot && "zu-badge-dot",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export interface ZeruInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
}

export function ZeruInput({ className, id, label, hint, error, ...props }: ZeruInputProps) {
  const inputId = id ?? props.name;

  return (
    <label className="zu-field">
      {label ? <span className="zu-label">{label}</span> : null}
      <input className={cn("zu-input", className)} id={inputId} aria-invalid={!!error} {...props} />
      {error ? <span className="zu-error">{error}</span> : null}
      {!error && hint ? <span className="zu-helper">{hint}</span> : null}
    </label>
  );
}

export interface ZeruMetricProps extends HTMLAttributes<HTMLDivElement> {
  label: ReactNode;
  value: ReactNode;
  detail?: ReactNode;
}

export function ZeruMetric({ className, label, value, detail, ...props }: ZeruMetricProps) {
  return (
    <div className={cn("zu-card zu-card-metric", className)} {...props}>
      <p className="zu-overline">{label}</p>
      <p className="zu-title">{value}</p>
      {detail ? <p className="zu-text-muted">{detail}</p> : null}
    </div>
  );
}

export interface ZeruSectionHeadingProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
}

export function ZeruSectionHeading({
  className,
  eyebrow,
  title,
  description,
  actions,
  ...props
}: ZeruSectionHeadingProps) {
  return (
    <section className={cn("zu-between", className)} {...props}>
      <div className="zu-stack-sm">
        {eyebrow ? <p className="zu-eyebrow">{eyebrow}</p> : null}
        <h2 className="zu-heading">{title}</h2>
        {description ? <p className="zu-lead">{description}</p> : null}
      </div>
      {actions}
    </section>
  );
}

export const Button = ZeruButton;
export const Card = ZeruCard;
export const Badge = ZeruBadge;
export const Input = ZeruInput;
export const Metric = ZeruMetric;
export const SectionHeading = ZeruSectionHeading;
