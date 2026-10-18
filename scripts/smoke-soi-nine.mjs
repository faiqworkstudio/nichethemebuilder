#!/usr/bin/env node
/** Browser smoke test for Demo 03 (Soi Nine House). Run against a running server. */
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
  console.log(`✓ [soi] ${name}`);
};

// Dates a few weeks ahead so the test never goes stale.
const iso = (d) => d.toISOString().slice(0, 10);
const inDays = (n) => iso(new Date(Date.now() + n * 86_400_000));
const checkIn = inDays(20);
const checkOut = inDays(23);

try {
  await step("Thai page renders with lang=th and the header outside <main>", async () => {
    await page.goto(`${base}/demos/soi-nine/th`, { waitUntil: "networkidle" });
    assert.equal(await page.getAttribute("html", "lang"), "th");
    assert.equal(await page.locator("main header").count(), 0);
  });

  await step("language switch keeps the section anchor", async () => {
    await page.goto(`${base}/demos/soi-nine/th#rooms`, { waitUntil: "networkidle" });
    await page.click('header a[hreflang="en"]');
    await page.waitForURL(/\/en#rooms$/);
  });

  await step("planner dates show a sample total in the room catalogue", async () => {
    const planner = page.locator("form").first();
    await planner.locator('input[type="date"]').nth(0).fill(checkIn);
    await planner.locator('input[type="date"]').nth(1).fill(checkOut);
    await page.getByText("3 nights", { exact: false }).first().waitFor();
    await page.getByText("Sample total for 3 nights").waitFor();
  });

  await step("room tabs work with arrow keys", async () => {
    await page.locator('[role="tab"][aria-selected="true"]').focus();
    await page.keyboard.press("ArrowRight");
    assert.match(await page.locator('[role="tab"][aria-selected="true"]').innerText(), /City Room/);
  });

  await step("three guests flag rooms that don't fit", async () => {
    await page.locator("form").first().locator("select").selectOption("3");
    await page.getByText("This room doesn't fit the number of guests you chose").waitFor();
  });

  await step("'Request this room' carries room and dates into the form", async () => {
    await page.click('[role="tab"]:has-text("Loft Suite")');
    await page.click('button:has-text("Request this room")');
    assert.equal(await page.inputValue('select[name="room"]'), "loft");
    assert.equal(await page.inputValue('input[name="checkIn"]'), checkIn);
  });

  await step("empty contact details show an error summary", async () => {
    await page.click('#request button[type="submit"]');
    await page.locator('#request [role="alert"]').waitFor();
  });

  await step("valid request shows an honest preview", async () => {
    await page.fill('input[name="name"]', "Anna");
    await page.check('input[name="method"][value="phone"]');
    await page.fill('input[name="phone"]', "+66 81 234 5678");
    await page.check('#request input[type="checkbox"]');
    await page.click('#request button[type="submit"]');
    await page.getByText("Preview only — nothing is booked").waitFor();
    assert.ok(await page.getByText("0812345678").isVisible());
  });

  assert.deepEqual(problems, [], `Console/page errors: ${problems.join("; ")}`);
  console.log("All Soi Nine House smoke checks passed.");
} finally {
  await browser.close();
}
