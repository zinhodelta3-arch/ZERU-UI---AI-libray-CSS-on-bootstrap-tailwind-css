import { useCallback, useEffect, useMemo, useState } from "react";
import type { ZeroTheme } from "../types";

const storageKey = "zero-ui-theme";

function getSystemTheme() {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function resolveTheme(theme: ZeroTheme) {
  return theme === "system" ? getSystemTheme() : theme;
}

export function useZeroTheme(defaultTheme: ZeroTheme = "system") {
  const [theme, setThemeState] = useState<ZeroTheme>(defaultTheme);
  const resolvedTheme = useMemo(() => resolveTheme(theme), [theme]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const storedTheme = window.localStorage.getItem(storageKey) as ZeroTheme | null;

    if (storedTheme) {
      setThemeState(storedTheme);
    }
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const root = document.documentElement;
    const bootstrapTheme = resolvedTheme === "cosmic" ? "dark" : resolvedTheme;

    root.dataset.zuiTheme = resolvedTheme;
    root.dataset.theme = resolvedTheme;
    root.dataset.bsTheme = bootstrapTheme;
    root.classList.toggle("dark", resolvedTheme === "dark" || resolvedTheme === "cosmic");
  }, [resolvedTheme]);

  const setTheme = useCallback((nextTheme: ZeroTheme) => {
    setThemeState(nextTheme);

    if (typeof window !== "undefined") {
      window.localStorage.setItem(storageKey, nextTheme);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" || resolvedTheme === "cosmic" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return {
    theme,
    setTheme,
    toggleTheme,
    resolvedTheme,
  };
}
