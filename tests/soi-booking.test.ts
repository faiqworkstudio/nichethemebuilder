import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  addDays,
  emptyStay,
  nightsBetween,
  roomsFor,
  sampleTotal,
  staySummary,
  todayInBangkok,
  toStayPayload,
  validateStay,
  type StayValues,
} from "../src/demos/soi-nine/booking";

const today = "2026-10-18";
const valid = (o: Partial<StayValues> = {}): StayValues => ({
  ...emptyStay(),
  room: "teak",
  checkIn: "2026-11-02",
  checkOut: "2026-11-05",
  guests: 2,
  name: "Anna",
  method: "email",
  email: "anna@example.com",
  consent: true,
  ...o,
});

describe("Soi Nine dates", () => {
  it("counts nights across month ends without time-zone drift", () => {
    assert.equal(nightsBetween("2026-10-30", "2026-11-02"), 3);
    assert.equal(nightsBetween("2026-12-31", "2027-01-01"), 1);
    assert.equal(nightsBetween("bad", "2026-01-01"), null);
  });

  it("adds days and finds today in Bangkok", () => {
    assert.equal(addDays("2026-02-27", 2), "2026-03-01");
    assert.equal(todayInBangkok(new Date("2026-10-17T18:30:00Z")), "2026-10-18");
  });
});

describe("Soi Nine stay request", () => {
  it("accepts a valid request", () => {
    assert.deepEqual(validateStay(valid(), "en", today), {});
  });

  it("rejects past, reversed and over-long stays", () => {
    assert.ok(validateStay(valid({ checkIn: "2026-10-01" }), "en", today).checkIn);
    assert.ok(validateStay(valid({ checkOut: "2026-11-02" }), "en", today).checkOut);
    assert.ok(validateStay(valid({ checkOut: "2026-12-30" }), "en", today).checkOut);
  });

  it("requires at least 28 nights for the monthly studio", () => {
    assert.ok(validateStay(valid({ room: "studio" }), "en", today).checkOut);
    assert.deepEqual(validateStay(valid({ room: "studio", checkOut: "2026-12-05" }), "en", today), {});
  });

  it("rejects a room that is too small for the party", () => {
    assert.ok(validateStay(valid({ guests: 3 }), "en", today).guests);
    assert.deepEqual(validateStay(valid({ guests: 3, room: "loft" }), "en", today), {});
  });

  it("only offers nightly rooms that fit the party", () => {
    assert.deepEqual(roomsFor(3).map((r) => r.id), ["loft"]);
    assert.ok(!roomsFor(1).some((r) => r.id === "studio"));
  });

  it("computes sample totals and summarises in Thai", () => {
    assert.equal(sampleTotal("teak", 3), 7800);
    assert.equal(toStayPayload(valid()).nights, 3);
    assert.match(staySummary(valid(), "th")[0][1], /ไม้สัก/);
  });
});
