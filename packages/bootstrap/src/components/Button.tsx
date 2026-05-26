"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import BootstrapButton from "react-bootstrap/Button";
import { cn, type ZeroRadius, type ZeroVisualVariant } from "zeroui-core";

export type ButtonVariant = ZeroVisualVariant;
export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl" | "icon";
export type ButtonRadius = ZeroRadius;

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size"> {
  variant?: ButtonVariant;
  intent?: ButtonVariant;
  size?: ButtonSize;
  radius?: ButtonRadius;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children?: ReactNode;
}

export function Button({
  className,
  variant,
  intent,
  size = "md",
  radius = "md",
  loading = false,
  disabled,
  type = "button",
  leftIcon,
  rightIcon,
  children,
  ...props
}: ButtonProps) {
  const resolvedVariant = variant ?? intent ?? "primary";

  return (
    <BootstrapButton
      as="button"
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={cn(
        "zui-btn",
        `zui-btn-${resolvedVariant}`,
        `zui-btn-${size}`,
        `zui-radius-${radius}`,
        className,
      )}
      {...props}
    >
      {loading ? (
        <span className="spinner-border spinner-border-sm" aria-hidden="true" />
      ) : (
        leftIcon
      )}
      {children ? <span>{children}</span> : null}
      {rightIcon}
    </BootstrapButton>
  );
}

export const ZeroButton = Button;
