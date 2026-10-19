#!/usr/bin/env node
/** Browser smoke test for Demo 07 (Ledgerline Advisory). Run against a running server. */
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
  console.log(`✓ [ledger] ${name}`);
};

try {
  await step("Thai page renders with lang=th", async () => {
    await page.goto(`${base}/demos/ledgerline/th`, { waitUntil: "networkidle" });
    assert.equal(await page.getAttribute("html", "lang"), "th");
  });

  await step("language switch keeps the section anchor", async () => {
    await page.goto(`${base}/demos/ledgerline/th#services`, { waitUntil: "networkidle" });
    await page.click('header a[hreflang="en"]');
    await page.waitForURL(/\/en#services$/);
    await page.waitForLoadState("networkidle");
  });

  await step("deadline card lists the next three filings", async () => {
    const items = page.locator('[aria-labelledby="deadlines-title"] li');
    await items.nth(2).waitFor();
    assert.equal(await items.count(), 3);
  });

  const estimator = page.locator("section", { hasText: "Employees on payroll" }).last();

  await step("fee estimator responds to VAT and payroll", async () => {
    await estimator.getByText("฿3,000 – ฿4,500").waitFor();
    await estimator.getByLabel("VAT-registered").check();
    await estimator.getByText("฿4,500 – ฿7,000").waitFor();
    await estimator.locator('input[type="range"]').fill("2");
    await estimator.getByText("฿4,800 – ฿7,500").waitFor();
  });

  await step("footnote markers link to the notes list", async () => {
    const href = await page.locator('a[aria-label="Note 1"]').first().getAttribute("href");
    assert.equal(href, "#note-1");
    assert.equal(await page.locator("#note-1").count(), 1);
  });

  await step("empty intro request shows an error summary", async () => {
    await page.click('#intro button[type="submit"]');
    await page.locator('#intro [role="alert"]').waitFor();
  });

  await step("valid request shows an honest preview", async () => {
    await page.check('#intro input[name="stage"][value="new"]');
    await page.check('#intro input[name="needs"][value="books"]');
    await page.check('#intro input[name="structure"][value="thaico"]');
    await page.fill('#intro input[name="name"]', "Ploy");
    await page.check('#intro input[name="method"][value="phone"]');
    await page.fill('#intro input[name="phone"]', "081 234 5678");
    await page.check('#intro input[name="consent"]');
    await page.click('#intro button[type="submit"]');
    await page.getByText("Preview only — nothing was sent").waitFor();
  });

  assert.deepEqual(problems, [], `Console/page errors: ${problems.join("; ")}`);
  console.log("All Ledgerline smoke checks passed.");
} finally {
  await browser.close();
}
