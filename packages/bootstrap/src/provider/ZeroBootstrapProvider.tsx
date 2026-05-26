"use client";

import type { HTMLAttributes, ReactNode } from "react";
import { cn, type ZeroTheme } from "@zero-ui/core";

export interface ZeroBootstrapProviderProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  theme?: Exclude<ZeroTheme, "system">;
}

export function ZeroBootstrapProvider({
  children,
  className,
  theme = "dark",
  ...props
}: ZeroBootstrapProviderProps) {
  const bootstrapTheme = theme === "cosmic" ? "dark" : theme;

  return (
    <div
      className={cn("zui-theme zui-bootstrap-theme", className)}
      data-bs-theme={bootstrapTheme}
      data-zui-theme={theme}
      {...props}
    >
      {children}
    </div>
  );
}

export const ZeroProvider = ZeroBootstrapProvider;
