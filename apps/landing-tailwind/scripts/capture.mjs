import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";

const edgePath = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
const outputDir = new URL("../artifacts/", import.meta.url);
const outputPath = fileURLToPath(outputDir);

await mkdir(outputPath, { recursive: true });

const browser = await chromium.launch({
  executablePath: edgePath,
});

const desktop = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
await desktop.goto("http://127.0.0.1:5174", { waitUntil: "networkidle" });
await desktop.screenshot({
  path: fileURLToPath(new URL("landing-desktop-light.png", outputDir)),
  fullPage: true,
});

await desktop.getByRole("button", { name: "Ativar tema escuro" }).click();
await desktop.screenshot({
  path: fileURLToPath(new URL("landing-desktop-dark.png", outputDir)),
  fullPage: true,
});

const mobile = await browser.newPage({ viewport: { width: 390, height: 900 } });
await mobile.goto("http://127.0.0.1:5174", { waitUntil: "networkidle" });
await mobile.screenshot({
  path: fileURLToPath(new URL("landing-mobile-light.png", outputDir)),
  fullPage: true,
});

await browser.close();
