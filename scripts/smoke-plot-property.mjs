#!/usr/bin/env node
/** Browser smoke test for Demo 06 (Plot Property). Run against a running server. */
import assert from "node:assert/strict";
import { chromium } from "playwright";

const base = process.argv[2] ?? "http://localhost:3000";
const browser = await chromium.launch({ executablePath: process.env.PLAYWRIGHT_CHROMIUM_PATH || undefined });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
const problems = [];
page.on("pageerror", (e) => problems.push(e.message));
page.on("console", (m) => m.type() === "error" && problems.push(m.text()));
const step = async (name, fn) => {
  await fn();
  console.log(`✓ [plot] ${name}`);
};
const cards = () => page.locator('section[aria-labelledby="listings"] li h3 a');

try {
  await step("Thai page renders with lang=th and all eight sample listings", async () => {
    await page.goto(`${base}/demos/plot-property/th`, { waitUntil: "networkidle" });
    assert.equal(await page.getAttribute("html", "lang"), "th");
    assert.equal(await cards().count(), 8);
  });

  await step("language switch keeps the section anchor", async () => {
    await page.goto(`${base}/demos/plot-property/th#renting`, { waitUntil: "networkidle" });
    await page.click('header a[hreflang="en"]');
    await page.waitForURL(/\/en#renting$/);
    // Wait for hydration so the explorer has read the URL before we touch filters.
    await page.waitForLoadState("networkidle");
  });

  await step("filters narrow results and are written to the URL", async () => {
    const filters = page.locator('form[aria-label="Filters"]');
    await filters.locator('input[name="deal"][value="rent"]').check({ force: true });
    await filters.locator('input[name="beds"][value="2"]').check({ force: true });
    await filters.getByLabel("Pet-friendly only").check();
    assert.equal(await cards().count(), 3);
    assert.match(page.url(), /deal=rent&beds=2&pets=1/);
  });

  await step("a shared URL restores the same search", async () => {
    await page.goto(`${base}/demos/plot-property/en?deal=sale&area=riverside#listings`, { waitUntil: "networkidle" });
    assert.equal(await cards().count(), 1);
    assert.match(await cards().first().innerText(), /river views/);
  });

  await step("impossible filters show a helpful empty state", async () => {
    await page.goto(`${base}/demos/plot-property/en?deal=rent&max=20000&beds=3#listings`, { waitUntil: "networkidle" });
    await page.getByText("Nothing matches those filters").waitFor();
  });

  await step("hero quick search works as a plain form", async () => {
    await page.goto(`${base}/demos/plot-property/en`, { waitUntil: "networkidle" });
    await page.locator('form[aria-label="Quick search"] select').selectOption("ari");
    await Promise.all([page.waitForURL(/deal=rent&area=ari/), page.click('form[aria-label="Quick search"] button')]);
    await page.waitForLoadState("networkidle");
    assert.equal(await cards().count(), 1);
  });

  await step("listing page shows facts and an honest viewing preview", async () => {
    await cards().first().click();
    await page.waitForURL(/\/listings\/PL-102$/);
    await page.getByText("Sample listing").first().waitFor();
    await page.check('input[name="when"][value="weekend"]', { force: true });
    await page.check('input[name="move"][value="1-month"]', { force: true });
    await page.fill('input[name="name"]', "Lee");
    await page.check('input[name="method"][value="phone"]', { force: true });
    await page.fill('input[name="phone"]', "0812345678");
    await page.check('input[name="consent"]');
    await page.click('#viewing button[type="submit"]');
    await page.getByText("Preview only — no viewing arranged").waitFor();
  });

  await step("back link restores the previous search", async () => {
    await page.goto(`${base}/demos/plot-property/en/listings/PL-102`, { waitUntil: "networkidle" });
    assert.match((await page.getAttribute("a:has-text('Back to all listings')", "href")) ?? "", /deal=rent&area=ari#listings/);
  });

  assert.deepEqual(problems, [], `Console/page errors: ${problems.join("; ")}`);
  console.log("All Plot Property smoke checks passed.");
} finally {
  await browser.close();
}
