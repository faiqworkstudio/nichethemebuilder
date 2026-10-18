#!/usr/bin/env node
/**
 * Captures desktop / iPad / mobile screenshots of every demo for the showcase page.
 *
 *   npm run build && npm start      # in one terminal
 *   npm run screenshots             # in another (optionally: -- http://host:port)
 *
 * Demos are discovered from src/demos/<slug>/showcase.ts, so a new demo only
 * needs its own showcase entry. Output: public/showcase/<slug>/<device>.jpg
 */
import { mkdir, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { chromium } from "playwright";

const base = process.argv[2] ?? "http://localhost:3000";
const root = path.resolve(import.meta.dirname, "..");

const devices = {
  desktop: { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 },
  tablet: { viewport: { width: 820, height: 1180 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
  mobile: { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
};

async function loadDemos() {
  const dir = path.join(root, "src/demos");
  const demos = [];
  for (const slug of await readdir(dir)) {
    const file = path.join(dir, slug, "showcase.ts");
    if (!existsSync(file)) continue;
    // showcase.ts files only use type imports, so Node's type stripping can load them.
    const mod = await import(pathToFileURL(file).href);
    demos.push(...Object.values(mod).filter((v) => v && typeof v === "object" && "slug" in v));
  }
  return demos;
}

const executablePath = process.env.PLAYWRIGHT_CHROMIUM_PATH || undefined;
const browser = await chromium.launch({ executablePath });

try {
  for (const demo of await loadDemos()) {
    const route = demo.routes.th ?? demo.routes.en;
    const outDir = path.join(root, "public/showcase", demo.slug);
    await mkdir(outDir, { recursive: true });
    for (const [name, options] of Object.entries(devices)) {
      const context = await browser.newContext({ ...options, reducedMotion: "reduce" });
      const page = await context.newPage();
      await page.goto(base + route, { waitUntil: "networkidle" });
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(400);
      const file = path.join(outDir, `${name}.jpg`);
      await page.screenshot({ path: file, type: "jpeg", quality: 82 });
      console.log(`✓ ${demo.slug} ${name} → ${path.relative(root, file)}`);
      await context.close();
    }
  }
} finally {
  await browser.close();
}
