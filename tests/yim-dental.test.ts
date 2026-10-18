import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { appointmentSummary, emptyAppointment, toAppointmentPayload, validateAppointment, type AppointmentValues } from "../src/demos/yim-dental/appointment";
import { searchTreatments, treatments } from "../src/demos/yim-dental/treatments";
import { assessUrgency, emptyTriage } from "../src/demos/yim-dental/triage";

describe("Yim urgency guide", () => {
  it("waits for every answer", () => {
    assert.equal(assessUrgency(emptyTriage), null);
    assert.equal(assessUrgency({ ...emptyTriage, redFlags: false, injury: false, bleeding: false }), null);
  });

  it("sends red flags to hospital immediately, even before other answers", () => {
    assert.equal(assessUrgency({ ...emptyTriage, redFlags: true }), "emergency");
  });

  it("grades injury, bleeding and constant pain as same-day", () => {
    const base = { redFlags: false, injury: false, bleeding: false, pain: "none" as const };
    assert.equal(assessUrgency({ ...base, injury: true }), "today");
    assert.equal(assessUrgency({ ...base, bleeding: true }), "today");
    assert.equal(assessUrgency({ ...base, pain: "constant" }), "today");
    assert.equal(assessUrgency({ ...base, pain: "comes-goes" }), "soon");
    assert.equal(assessUrgency(base), "routine");
  });
});

describe("Yim treatment library", () => {
  it("searches by name in either language and filters by category", () => {
    assert.deepEqual(searchTreatments("wisdom", "all", "en").map((t) => t.id), ["extraction"]);
    assert.deepEqual(searchTreatments("ฟันคุด", "all", "th").map((t) => t.id), ["extraction"]);
    assert.ok(searchTreatments("", "straighten", "en").every((t) => t.category === "straighten"));
    assert.equal(searchTreatments("", "all", "en").length, treatments.length);
  });

  it("has sane sample price ranges", () => {
    for (const t of treatments) assert.ok(t.price[0] > 0 && t.price[0] <= t.price[1], t.id);
  });
});

describe("Yim appointment form", () => {
  const valid = (o: Partial<AppointmentValues> = {}): AppointmentValues => ({
    ...emptyAppointment(),
    reason: "pain",
    days: "any",
    time: "evening",
    name: "Krit",
    method: "phone",
    phone: "089-123-4567",
    consent: true,
    ...o,
  });

  it("requires the essentials", () => {
    assert.deepEqual(Object.keys(validateAppointment(emptyAppointment(), "en")), ["reason", "days", "time", "name", "method", "consent"]);
    assert.deepEqual(validateAppointment(valid(), "th"), {});
  });

  it("includes the urgency result and nervous flag in the summary and payload", () => {
    const v = valid({ urgency: "today", nervous: true });
    assert.equal(toAppointmentPayload(v).urgency, "today");
    const rows = appointmentSummary(v, "en");
    assert.ok(rows.some(([, value]) => value === "See today"));
    assert.ok(rows.some(([, value]) => value.includes("nervous")));
  });
});
