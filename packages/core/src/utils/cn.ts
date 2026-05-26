export type ClassValue =
  | string
  | number
  | false
  | null
  | undefined
  | ClassValue[]
  | Record<string, boolean | null | undefined>;

function toClassName(input: ClassValue): string {
  if (!input) {
    return "";
  }

  if (typeof input === "string" || typeof input === "number") {
    return String(input);
  }

  if (Array.isArray(input)) {
    return input.map(toClassName).filter(Boolean).join(" ");
  }

  return Object.entries(input)
    .filter(([, enabled]) => Boolean(enabled))
    .map(([className]) => className)
    .join(" ");
}

export function cn(...inputs: ClassValue[]): string {
  return inputs.map(toClassName).filter(Boolean).join(" ");
}
