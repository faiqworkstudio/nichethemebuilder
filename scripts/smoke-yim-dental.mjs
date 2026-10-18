#!/usr/bin/env node
/** Browser smoke test for Demo 04 (Yim Dental Clinic). Run against a running server. */
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
  console.log(`✓ [yim] ${name}`);
};

try {
  await step("Thai page renders with lang=th", async () => {
    await page.goto(`${base}/demos/yim-dental/th`, { waitUntil: "networkidle" });
    assert.equal(await page.getAttribute("html", "lang"), "th");
  });

  await step("language switch keeps the section anchor", async () => {
    await page.goto(`${base}/demos/yim-dental/th#treatments`, { waitUntil: "networkidle" });
    await page.click('header a[hreflang="en"]');
    await page.waitForURL(/\/en#treatments$/);
  });

  await step("red flags send people to hospital, not a booking", async () => {
    await page.locator('input[name="triage-redFlags"]').first().check();
    await page.getByText("Go to a hospital emergency department now").waitFor();
    assert.equal(await page.locator('a[href="tel:1669"]').count(), 1);
    await page.click('button:has-text("Start again")');
  });

  await step("constant pain → 'see today' → carried into the form", async () => {
    await page.locator('input[name="triage-redFlags"]').nth(1).check();
    await page.locator('input[name="triage-injury"]').nth(1).check();
    await page.locator('input[name="triage-bleeding"]').nth(1).check();
    await page.locator('input[name="triage-pain"]').nth(2).check();
    await page.getByText("See a dentist today").waitFor();
    await page.click('button:has-text("Request a visit with these answers")');
    assert.ok(await page.isChecked('input[name="reason"][value="pain"]'));
    await page.getByText("Urgency guide result attached:").waitFor();
  });

  await step("treatment search and category filter", async () => {
    await page.fill('input[type="search"]', "wisdom");
    assert.equal(await page.locator("table tbody tr").count(), 1);
    await page.fill('input[type="search"]', "zzz");
    await page.getByText("No treatments match").waitFor();
    await page.fill('input[type="search"]', "");
    await page.click('button[aria-pressed]:has-text("Straightening")');
    assert.equal(await page.locator("table tbody tr").count(), 2);
  });

  await step("'Book for this' sets the visit reason", async () => {
    await page.locator('table button:has-text("Book for this")').first().click();
    assert.ok(await page.isChecked('input[name="reason"][value="straighten"]'));
  });

  await step("valid request shows an honest preview with the nervous flag", async () => {
    await page.check('input[name="days"][value="saturday"]');
    await page.check('input[name="time"][value="morning"]');
    await page.fill('input[name="name"]', "Krit");
    await page.check('input[name="method"][value="line"]');
    await page.fill('input[name="lineId"]', "krit.s");
    await page.check('input[name="nervous"]');
    await page.check('input[name="consent"]');
    await page.click('#book button[type="submit"]');
    await page.getByText("Preview only — no appointment was made").waitFor();
    assert.ok(await page.getByText("I'm nervous — please explain each step").isVisible());
  });

  assert.deepEqual(problems, [], `Console/page errors: ${problems.join("; ")}`);
  console.log("All Yim Dental smoke checks passed.");
} finally {
  await browser.close();
}
