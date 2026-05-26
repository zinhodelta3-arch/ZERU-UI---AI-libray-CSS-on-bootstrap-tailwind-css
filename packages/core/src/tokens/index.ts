export * from "./colors";

export const zeroSpacing = {
  0: "0",
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  32: "8rem",
} as const;

export const zeroRadius = {
  none: "0",
  xs: "0.125rem",
  sm: "0.375rem",
  md: "0.5rem",
  lg: "0.75rem",
  xl: "1rem",
  "2xl": "1.25rem",
  "3xl": "1.5rem",
  full: "9999px",
} as const;

export const zeroShadows = {
  none: "none",
  xs: "0 1px 2px rgb(15 23 42 / 0.08)",
  sm: "0 4px 10px rgb(15 23 42 / 0.08)",
  md: "0 12px 30px rgb(15 23 42 / 0.12)",
  lg: "0 20px 50px rgb(15 23 42 / 0.16)",
  xl: "0 30px 80px rgb(15 23 42 / 0.18)",
  "2xl": "0 44px 110px rgb(15 23 42 / 0.22)",
  inner: "inset 0 1px 0 rgb(255 255 255 / 0.12)",
  glow: "0 0 32px rgb(124 92 255 / 0.28)",
  glowPrimary: "0 0 36px rgb(124 92 255 / 0.35)",
  glowDanger: "0 0 36px rgb(244 63 94 / 0.28)",
} as const;

export const zeroZIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  overlay: 1040,
  modal: 1050,
  popover: 1070,
  toast: 1080,
  tooltip: 1090,
  max: 2147483647,
} as const;

export const zeroMotion = {
  durationFast: "140ms",
  durationNormal: "220ms",
  durationSlow: "360ms",
  easeStandard: "cubic-bezier(0.2, 0, 0, 1)",
  easeEmphasized: "cubic-bezier(0.2, 0, 0, 1.12)",
  easeSpring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
} as const;
