import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { rollWeekend, upcomingDeadlines } from "../src/demos/ledgerline/deadlines";
import { estimateFee } from "../src/demos/ledgerline/fees";
import { emptyIntro, introSummary, toIntroPayload, validateIntro } from "../src/demos/ledgerline/introCall";

describe("Ledgerline filing deadlines", () => {
  it("rolls weekends forward to Monday", () => {
    assert.deepEqual(rollWeekend("2026-11-15"), { date: "2026-11-16", moved: true }); // Sunday
    assert.deepEqual(rollWeekend("2026-08-15"), { date: "2026-08-17", moved: true }); // Saturday
    assert.deepEqual(rollWeekend("2026-10-15"), { date: "2026-10-15", moved: false }); // Thursday
  });

  it("lists this month's deadlines when still ahead, soonest first", () => {
    const d = upcomingDeadlines("2026-10-10");
    assert.deepEqual(d.map((x) => [x.id, x.date, x.daysLeft]), [
      ["sso", "2026-10-15", 5],
      ["wht", "2026-10-15", 5],
      ["vat", "2026-10-23", 13],
    ]);
    assert.equal(d[0].period, "2026-09");
  });

  it("moves to next month once a deadline has passed", () => {
    const d = upcomingDeadlines("2026-10-19");
    assert.equal(d[0].id, "vat");
    assert.equal(d[0].date, "2026-10-23");
    const wht = d.find((x) => x.id === "wht")!;
    assert.equal(wht.date, "2026-11-16"); // 15 Nov 2026 is a Sunday
    assert.ok(wht.moved);
    assert.equal(wht.period, "2026-10");
  });

  it("handles the year boundary", () => {
    const vat = upcomingDeadlines("2026-12-28").find((x) => x.id === "vat")!;
    assert.equal(vat.date, "2027-01-25"); // 23 Jan 2027 is a Saturday
    assert.equal(vat.period, "2026-12");
  });
});

describe("Ledgerline fee estimate", () => {
  it("adds VAT and payroll on top of the volume band", () => {
    assert.deepEqual(estimateFee("small", false, 0), [3000, 4500]);
    assert.deepEqual(estimateFee("medium", true, 4), [5000 + 1500 + 600, 8000 + 2500 + 1000]);
  });

  it("clamps silly employee counts", () => {
    assert.deepEqual(estimateFee("small", false, -3), [3000, 4500]);
    assert.deepEqual(estimateFee("small", false, 500), estimateFee("small", false, 50));
  });
});

describe("Ledgerline intro call", () => {
  const valid = { ...emptyIntro("en"), stage: "new" as const, needs: ["books" as const, "vat" as const], structure: "thaico" as const, name: "Nok", method: "line" as const, lineId: "nok.w", consent: true };

  it("validates essentials", () => {
    assert.deepEqual(Object.keys(validateIntro(emptyIntro("en"), "en")), ["stage", "needs", "structure", "name", "method", "consent"]);
    assert.deepEqual(validateIntro(valid, "th"), {});
  });

  it("keeps revenue optional and summarises needs", () => {
    assert.equal(toIntroPayload(valid).revenue, null);
    assert.ok(introSummary(valid, "en").some(([, v]) => v === "Monthly bookkeeping, VAT"));
  });
});
