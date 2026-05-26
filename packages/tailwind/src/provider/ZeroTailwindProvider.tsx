"use client";

import type { HTMLAttributes, ReactNode } from "react";
import { cn, type ZeroTheme } from "zeroui-core";

export interface ZeroTailwindProviderProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  theme?: Exclude<ZeroTheme, "system">;
}

export function ZeroTailwindProvider({
  children,
  className,
  theme = "dark",
  ...props
}: ZeroTailwindProviderProps) {
  const isDark = theme === "dark" || theme === "cosmic";

  return (
    <div
      className={cn("zui-theme zui-tailwind-theme", isDark && "dark", className)}
      data-theme={theme}
      data-zui-theme={theme}
      {...props}
    >
      {children}
    </div>
  );
}

export const ZeroProvider = ZeroTailwindProvider;
