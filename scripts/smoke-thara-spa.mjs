#!/usr/bin/env node
/** Browser smoke test for Demo 05 (Thara Thai Massage & Spa). Run against a running server. */
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
  console.log(`✓ [thara] ${name}`);
};
const inDays = (n) => new Date(Date.now() + n * 86_400_000).toISOString().slice(0, 10);

try {
  await step("Thai page renders with lang=th", async () => {
    await page.goto(`${base}/demos/thara-spa/th`, { waitUntil: "networkidle" });
    assert.equal(await page.getAttribute("html", "lang"), "th");
  });

  await step("language switch keeps the section anchor", async () => {
    await page.goto(`${base}/demos/thara-spa/th#menu`, { waitUntil: "networkidle" });
    await page.click('header a[hreflang="en"]');
    await page.waitForURL(/\/en#menu$/);
  });

  const ticket = page.locator('section[aria-labelledby$="-title"]').filter({ hasText: "Book a massage" });

  await step("menu board price sets treatment and length in the hero ticket", async () => {
    await page.click('button:has-text("Book Hot stone massage 90 min")');
    assert.equal(await ticket.locator("select").first().inputValue(), "stones");
    assert.ok(await ticket.locator('input[type="radio"]').first().isChecked());
    await ticket.getByText("฿1,500").waitFor();
  });

  await step("people stepper multiplies the sample price", async () => {
    await ticket.getByRole("button", { name: "More people" }).click();
    await ticket.getByText("฿3,000").waitFor();
  });

  await step("start times end by closing time for the chosen length", async () => {
    await ticket.locator('input[type="date"]').fill(inDays(5));
    const options = await ticket.locator("select").nth(1).locator("option").allTextContents();
    assert.equal(options.at(-1), "20:30"); // 90 min must end by 22:00
    await ticket.locator("select").nth(1).selectOption("19:00");
  });

  await step("empty details show an error summary", async () => {
    await page.click('#book button[type="submit"]');
    await page.locator('#book [role="alert"]').waitFor();
  });

  await step("valid booking shows an honest preview with preferences", async () => {
    await page.check('input[name="therapist"][value="female"]');
    await page.check('input[name="pressure"][value="light"]');
    await page.fill('input[name="name"]', "Mai");
    await page.check('input[name="method"][value="email"]');
    await page.fill('input[name="email"]', "mai@example.com");
    await page.check('input[name="consent"]');
    await page.click('#book button[type="submit"]');
    await page.getByText("Preview only — nothing is booked").waitFor();
    assert.ok(await page.locator("#book dd", { hasText: "Female" }).isVisible());
  });

  assert.deepEqual(problems, [], `Console/page errors: ${problems.join("; ")}`);
  console.log("All Thara smoke checks passed.");
} finally {
  await browser.close();
}
