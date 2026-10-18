import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  bandFor,
  emptyEnquiry,
  estimate,
  formatTHB,
  normaliseThaiPhone,
  summaryText,
  toPayload,
  validateEnquiry,
  type EnquiryValues,
} from "../src/demos/sen-studio/enquiry";

const valid = (overrides: Partial<EnquiryValues> = {}): EnquiryValues => ({
  ...emptyEnquiry("en"),
  type: "condo",
  location: "Ari",
  budget: "1m-2m",
  timeline: "1-3m",
  name: "Somchai",
  method: "phone",
  phone: "081 234 5678",
  consent: true,
  ...overrides,
});

describe("Sen Studio enquiry validation", () => {
  it("reports every required field on an empty form, in form order", () => {
    const errors = validateEnquiry(emptyEnquiry("en"), "en");
    assert.deepEqual(Object.keys(errors), ["type", "location", "budget", "timeline", "name", "method", "consent"]);
  });

  it("accepts a complete enquiry", () => {
    assert.deepEqual(validateEnquiry(valid(), "en"), {});
  });

  it("returns Thai messages for the Thai page", () => {
    const errors = validateEnquiry(emptyEnquiry("th"), "th");
    assert.match(errors.type!, /[฀-๿]/);
  });

  it("only validates the contact field for the chosen method", () => {
    assert.ok(validateEnquiry(valid({ method: "email", email: "nope" }), "en").email);
    assert.deepEqual(validateEnquiry(valid({ method: "email", email: "a@b.co", phone: "" }), "en"), {});
    assert.ok(validateEnquiry(valid({ method: "line", lineId: "ab" }), "en").lineId);
    assert.deepEqual(validateEnquiry(valid({ method: "line", lineId: "@sen.studio" }), "en"), {});
  });

  it("checks the optional size and details length", () => {
    assert.ok(validateEnquiry(valid({ size: "2" }), "en").size);
    assert.ok(validateEnquiry(valid({ size: "abc" }), "en").size);
    assert.deepEqual(validateEnquiry(valid({ size: "74" }), "en"), {});
    assert.ok(validateEnquiry(valid({ details: "x".repeat(801) }), "en").details);
  });
});

describe("Thai phone numbers", () => {
  it("normalises common formats", () => {
    assert.equal(normaliseThaiPhone("081 234 5678"), "0812345678");
    assert.equal(normaliseThaiPhone("02-123-4567"), "021234567");
    assert.equal(normaliseThaiPhone("+66 81 234 5678"), "0812345678");
  });

  it("rejects numbers that are not Thai", () => {
    assert.equal(normaliseThaiPhone("12345"), null);
    assert.equal(normaliseThaiPhone("1812345678"), null);
  });
});

describe("payload and summary", () => {
  it("drops contact details for methods the visitor did not choose", () => {
    const payload = toPayload(valid({ email: "left@over.com", lineId: "leftover" }));
    assert.equal(payload.contactMethod, "phone");
    assert.equal(payload.contact, "0812345678");
    assert.ok(!JSON.stringify(payload).includes("leftover"));
  });

  it("builds a readable summary in the page language", () => {
    const text = summaryText(valid(), "en");
    assert.match(text, /Enquiry summary — Sen Studio/);
    assert.match(text, /Phone: 0812345678/);
  });
});

describe("budget planner", () => {
  it("multiplies the rate range by area and rounds to ฿10,000", () => {
    const e = estimate("condo", "full", 60)!;
    assert.equal(e.low, 1_080_000);
    assert.equal(e.high, 1_920_000);
    assert.equal(e.band, "1m-2m");
  });

  it("returns null outside the supported area range", () => {
    assert.equal(estimate("condo", "full", 5), null);
    assert.equal(estimate("condo", "full", Number.NaN), null);
  });

  it("maps amounts to budget bands", () => {
    assert.equal(bandFor(400_000), "u500k");
    assert.equal(bandFor(1_000_000), "500k-1m");
    assert.equal(bandFor(9_000_000), "o4m");
  });

  it("formats baht with the ฿ symbol", () => {
    assert.match(formatTHB(1_080_000, "en"), /^฿1,080,000$/);
  });
});
