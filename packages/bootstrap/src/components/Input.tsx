"use client";

import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "zeroui-core";

export type InputSize = "sm" | "md" | "lg";
export type InputState = "default" | "success" | "warning" | "danger";

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
    <div className="zui-field">
      {label ? (
        <label className="form-label zui-label" htmlFor={inputId}>
          {label}
        </label>
      ) : null}

      <div
        className={cn(
          "zui-input-shell",
          `zui-input-shell-${size}`,
          `zui-input-shell-${state}`,
          disabled && "zui-input-shell-disabled",
        )}
      >
        {leftIcon ? <span className="zui-input-icon">{leftIcon}</span> : null}
        <input
          id={inputId}
          disabled={disabled}
          aria-invalid={state === "danger" || undefined}
          aria-describedby={cn(hintId, errorId) || undefined}
          className={cn("form-control zui-input", className)}
          {...props}
        />
        {rightIcon ? <span className="zui-input-icon">{rightIcon}</span> : null}
        {clearable ? (
          <button className="zui-input-clear" type="button" aria-label="Clear input">
            x
          </button>
        ) : null}
      </div>

      {hint ? (
        <p className="zui-field-hint" id={hintId}>
          {hint}
        </p>
      ) : null}
      {error ? (
        <p className="zui-field-error" id={errorId}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
