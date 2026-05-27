export * from "zeroui-core";

export const zeruCssImports = {
  core: "zeru-ui/core.css",
  bootstrap: "zeru-ui/bootstrap.css",
  tailwind: "zeru-ui/tailwind.css",
} as const;

export type ZeruCssImport = keyof typeof zeruCssImports;
