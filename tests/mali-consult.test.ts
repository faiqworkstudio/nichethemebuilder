import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { consultSummary, emptyConsult, toConsultPayload, validateConsult, type ConsultValues } from "../src/demos/mali-clinic/consult";
import { treatments } from "../src/demos/mali-clinic/treatments";

const valid = (o: Partial<ConsultValues> = {}): ConsultValues => ({
  ...emptyConsult("en"),
  concerns: ["acne"],
  days: "weekday",
  time: "evening",
  name: "Ploy",
  method: "line",
  lineId: "ploy.k",
  consent: true,
  ...o,
});

describe("Mali consultation form", () => {
  it("requires concerns, days, time, name, contact method and consent", () => {
    const errors = validateConsult({ ...emptyConsult("en"), concerns: [] }, "en");
    assert.deepEqual(Object.keys(errors), ["concerns", "days", "time", "name", "method", "consent"]);
  });

  it("accepts a complete request", () => {
    assert.deepEqual(validateConsult(valid(), "en"), {});
  });

  it("flags the contact field that matches the chosen method", () => {
    assert.ok(validateConsult(valid({ method: "phone", phone: "123" }), "en").phone);
    assert.ok(validateConsult(valid({ method: "email", email: "x@" }), "th").email);
    assert.ok(validateConsult(valid({ lineId: "a" }), "en").lineId);
  });

  it("sends only the chosen contact channel", () => {
    const p = toConsultPayload(valid({ email: "hidden@example.com" }));
    assert.equal(p.contact, "ploy.k");
    assert.ok(!JSON.stringify(p).includes("hidden@example.com"));
  });

  it("summarises concerns by name in the page language", () => {
    const rows = consultSummary(valid({ concerns: ["acne", "hair"] }), "th");
    assert.match(rows[0][1], /สิว/);
  });
});

describe("Mali treatment library", () => {
  it("lists the doctor consultation for every concern", () => {
    const consult = treatments.find((t) => t.id === "consult")!;
    assert.equal(consult.concerns.length, 5);
  });

  it("has complete Thai and English copy for every treatment", () => {
    for (const t of treatments) {
      for (const lang of ["th", "en"] as const) {
        assert.ok(t.name[lang] && t.summary[lang] && t.steps[lang].length > 0, `${t.id} ${lang}`);
      }
    }
  });
});
