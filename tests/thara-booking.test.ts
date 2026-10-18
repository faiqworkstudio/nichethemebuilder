import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { bookingSummary, defaultBooking, samplePrice, startTimes, toBookingPayload, validateBooking, type BookingValues } from "../src/demos/thara-spa/booking";
import { durationsFor, menu } from "../src/demos/thara-spa/menu";

const today = "2026-10-18";
const valid = (o: Partial<BookingValues> = {}): BookingValues => ({
  ...defaultBooking(),
  date: "2026-10-20",
  time: "18:00",
  name: "Mai",
  method: "line",
  lineId: "mai.p",
  consent: true,
  ...o,
});

describe("Thara start times", () => {
  it("ends every treatment by closing time", () => {
    const times = startTimes(90);
    assert.equal(times[0], "10:00");
    assert.equal(times.at(-1), "20:30");
    assert.equal(startTimes(30).at(-1), "21:30");
  });
});

describe("Thara booking", () => {
  it("accepts a valid booking", () => {
    assert.deepEqual(validateBooking(valid(), "en", today), {});
  });

  it("rejects lengths the treatment doesn't offer", () => {
    assert.ok(validateBooking(valid({ treatment: "stones", duration: 60 }), "en", today).duration);
    assert.deepEqual(durationsFor("stones"), [90]);
  });

  it("rejects past dates, late starts and times already gone today", () => {
    assert.ok(validateBooking(valid({ date: "2026-10-01" }), "en", today).date);
    assert.ok(validateBooking(valid({ time: "21:00", duration: 120 }), "en", today).time);
    assert.ok(validateBooking(valid({ date: today, time: "11:00" }), "en", today, 12 * 60).time);
    assert.deepEqual(validateBooking(valid({ date: today, time: "18:00" }), "en", today, 12 * 60), {});
  });

  it("multiplies sample prices by people", () => {
    assert.equal(samplePrice("thai", 90, 2), 1300);
    assert.equal(samplePrice("thai", 45, 1), 0);
  });

  it("sends preferences and only the chosen contact", () => {
    const p = toBookingPayload(valid({ therapist: "female", pressure: "light", email: "x@y.co" }));
    assert.equal(p.therapist, "female");
    assert.equal(p.contact, "mai.p");
    assert.match(bookingSummary(valid(), "th")[0][1], /นวดแผนไทย/);
  });

  it("has every price in both menus' durations", () => {
    for (const item of menu) assert.ok(Object.keys(item.prices).length > 0, item.id);
  });
});
