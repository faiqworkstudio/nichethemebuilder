#!/usr/bin/env node
/**
 * Browser smoke test for Demo 01 (Sen Studio). Run against a running server:
 *   npm run build && npm start   # then
 *   npm run smoke                # optionally: -- http://host:port
 */
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
  console.log(`✓ ${name}`);
};

try {
  await step("Thai page renders with lang=th", async () => {
    await page.goto(`${base}/demos/sen-studio/th`, { waitUntil: "networkidle" });
    assert.equal(await page.getAttribute("html", "lang"), "th");
    assert.match(await page.textContent("h1"), /เขียนแบบ/);
  });

  await step("language switch keeps the section anchor", async () => {
    await page.goto(`${base}/demos/sen-studio/th#services`, { waitUntil: "networkidle" });
    await page.click('header a[hreflang="en"]');
    await page.waitForURL(/\/en#services$/);
    assert.equal(await page.getAttribute("html", "lang"), "en");
  });

  await step("project filter narrows the list", async () => {
    await page.click('button[aria-pressed]:has-text("Office")');
    const rows = page.locator('section[aria-labelledby="projects"] a[href*="/projects/"]');
    assert.equal(await rows.count(), 1);
    await page.click('button[aria-pressed]:has-text("All")');
    assert.equal(await rows.count(), 5);
  });

  await step("empty form shows an error summary and keeps focus there", async () => {
    await page.click('button[type="submit"]');
    const summary = page.locator('[role="alert"]').first();
    await summary.waitFor();
    assert.equal(await summary.locator("li").count(), 7);
    assert.ok(await summary.evaluate((el) => el === document.activeElement));
  });

  await step("budget planner fills the enquiry budget", async () => {
    await page.click('button:has-text("Use this in the enquiry")');
    assert.equal(await page.inputValue('select[name="budget"]'), "1m-2m");
    assert.ok(await page.isChecked('input[name="type"][value="condo"]'));
  });

  await step("valid enquiry shows an honest preview, not a fake success", async () => {
    await page.fill('input[name="location"]', "Ari");
    await page.selectOption('select[name="timeline"]', "1-3m");
    await page.fill('input[name="name"]', "Test");
    await page.check('input[name="method"][value="phone"]');
    await page.fill('input[name="phone"]', "081 234 5678");
    await page.check('input[name="consent"]');
    await page.click('button[type="submit"]');
    await page.getByText("Preview only — nothing was sent").waitFor();
    assert.ok(await page.getByText("0812345678").isVisible());
    await page.click('button:has-text("Edit enquiry")');
    assert.equal(await page.inputValue('input[name="name"]'), "Test");
  });

  await step("project page links back to a pre-filled enquiry", async () => {
    await page.goto(`${base}/demos/sen-studio/en/projects/silom-office`, { waitUntil: "networkidle" });
    assert.match(await page.textContent("h1"), /Silom/);
    assert.ok(await page.getByText("Concept project").first().isVisible());
    await page.click('a[href*="?type=office#enquiry"]');
    await page.waitForURL(/type=office/);
    await page.waitForFunction(() => document.querySelector('input[name="type"][value="office"]')?.checked);
  });

  await step("FAQ items open with the keyboard", async () => {
    const summary = page.locator("details summary").first();
    await summary.focus();
    await page.keyboard.press("Enter");
    assert.equal(await page.locator("details").first().getAttribute("open"), "");
  });

  assert.deepEqual(problems, [], `Console/page errors: ${problems.join("; ")}`);
  console.log("All Sen Studio smoke checks passed.");
} finally {
  await browser.close();
}
