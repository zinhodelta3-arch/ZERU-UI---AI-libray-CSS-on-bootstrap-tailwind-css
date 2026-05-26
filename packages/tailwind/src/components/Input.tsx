"use client";

import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "zeroui-core";

export type InputSize = "sm" | "md" | "lg";
export type InputState = "default" | "success" | "warning" | "danger";

const inputSizeClasses: Record<InputSize, string> = {
  sm: "min-h-9 text-sm",
  md: "min-h-11 text-sm",
  lg: "min-h-12 text-base",
};

const inputStateClasses: Record<InputState, string> = {
  default: "border-border focus-within:border-[var(--zui-focus)]",
  success: "border-emerald-400/55",
  warning: "border-amber-400/55",
  danger: "border-rose-400/55",
};

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  size?: InputSize;
  state?: InputState;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  clearable?: boolean;
}

export function Input({
  className,
  id,
  label,
  hint,
  error,
  size = "md",
  state = error ? "danger" : "default",
  leftIcon,
  rightIcon,
  clearable,
  disabled,
  ...props
}: InputProps) {
  const inputId = id ?? props.name;
  const hintId = hint && inputId ? `${inputId}-hint` : undefined;
  const errorId = error && inputId ? `${inputId}-error` : undefined;

  return (
    <div className="grid gap-1.5">
      {label ? (
        <label className="text-sm font-semibold text-foreground" htmlFor={inputId}>
          {label}
        </label>
      ) : null}

      <div
        className={cn(
          "flex items-center gap-2 rounded-[8px] border bg-input px-3 shadow-none transition focus-within:ring-2 focus-within:ring-[var(--zui-ring)]",
          inputSizeClasses[size],
          inputStateClasses[state],
          disabled && "opacity-60",
        )}
      >
        {leftIcon ? <span className="text-muted-foreground">{leftIcon}</span> : null}
        <input
          id={inputId}
          disabled={disabled}
          aria-invalid={state === "danger" || undefined}
          aria-describedby={cn(hintId, errorId) || undefined}
          className={cn(
            "h-full w-full bg-transparent text-foreground outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed",
            className,
          )}
          {...props}
        />
        {rightIcon ? <span className="text-muted-foreground">{rightIcon}</span> : null}
        {clearable ? (
          <button className="text-muted-foreground" type="button" aria-label="Clear input">
            x
          </button>
        ) : null}
      </div>

      {hint ? (
        <p className="m-0 text-sm text-muted-foreground" id={hintId}>
          {hint}
        </p>
      ) : null}
      {error ? (
        <p className="m-0 text-sm text-danger" id={errorId}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
