#!/usr/bin/env node
/** Browser smoke test for Demo 02 (Mali Skin Clinic). Run against a running server. */
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
  console.log(`✓ [mali] ${name}`);
};

try {
  await step("Thai page renders with lang=th", async () => {
    await page.goto(`${base}/demos/mali-clinic/th`, { waitUntil: "networkidle" });
    assert.equal(await page.getAttribute("html", "lang"), "th");
  });

  await step("language switch keeps the section anchor", async () => {
    await page.goto(`${base}/demos/mali-clinic/th#faq`, { waitUntil: "networkidle" });
    await page.click('header a[hreflang="en"]');
    await page.waitForURL(/\/en#faq$/);
    assert.equal(await page.getAttribute("html", "lang"), "en");
  });

  await step("hero concern chip filters treatments and pre-fills the form", async () => {
    await page.click('button[aria-pressed]:has-text("Unwanted hair")');
    const items = page.locator('section[aria-labelledby="treatments"] details');
    assert.equal(await items.count(), 2); // consultation + laser hair removal
    assert.ok(await page.isChecked('input[name="concerns"][value="hair"]'));
  });

  await step("clearing the filter shows every treatment", async () => {
    await page.click('button:has-text("Show all")');
    assert.equal(await page.locator('section[aria-labelledby="treatments"] details').count(), 6);
  });

  await step("empty booking shows an error summary", async () => {
    await page.click('#book button[type="submit"]');
    const summary = page.locator('#book [role="alert"]');
    await summary.waitFor();
    assert.equal(await summary.locator("li").count(), 6);
  });

  await step("valid booking shows an honest preview", async () => {
    await page.check('input[name="concerns"][value="acne"]');
    await page.check('input[name="days"][value="weekend"]');
    await page.check('input[name="time"][value="morning"]');
    await page.fill('input[name="name"]', "Ploy");
    await page.check('input[name="method"][value="email"]');
    await page.fill('input[name="email"]', "ploy@example.com");
    await page.check('#book input[type="checkbox"]:not([name])');
    await page.click('#book button[type="submit"]');
    await page.getByText("Preview only — no appointment was made").waitFor();
    assert.ok(await page.getByText("ploy@example.com").isVisible());
  });

  assert.deepEqual(problems, [], `Console/page errors: ${problems.join("; ")}`);
  console.log("All Mali Skin Clinic smoke checks passed.");
} finally {
  await browser.close();
}
