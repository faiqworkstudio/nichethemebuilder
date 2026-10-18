import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { getListing, listings } from "../src/demos/plot-property/listings";
import { applyFilters, defaultFilters, parseQuery, toQuery } from "../src/demos/plot-property/search";
import { emptyViewing, toViewingPayload, validateViewing, viewingSummary } from "../src/demos/plot-property/viewing";

describe("Plot listing search", () => {
  it("returns every listing with default filters, rent first", () => {
    const all = applyFilters(defaultFilters);
    assert.equal(all.length, listings.length);
    assert.equal(all[0].deal, "rent");
    assert.equal(all.at(-1)!.deal, "sale");
  });

  it("filters by deal, beds, pets and price cap", () => {
    const r = applyFilters({ ...defaultFilters, deal: "rent", beds: 2, pets: true, maxPrice: 40000 });
    assert.deepEqual(r.map((l) => l.ref), ["PL-102"]);
  });

  it("ignores price caps when deal is 'all'", () => {
    assert.equal(applyFilters({ ...defaultFilters, maxPrice: 20000 }).length, listings.length);
  });

  it("sorts by size", () => {
    const r = applyFilters({ ...defaultFilters, sort: "size-desc" });
    assert.equal(r[0].ref, "PL-104");
  });

  it("round-trips filters through the URL and rejects junk", () => {
    const f = { ...defaultFilters, deal: "sale" as const, area: "riverside" as const, maxPrice: 15_000_000, sort: "price-desc" as const };
    assert.equal(toQuery(f), "?deal=sale&area=riverside&max=15000000&sort=price-desc");
    assert.deepEqual(parseQuery(toQuery(f)), f);
    assert.deepEqual(parseQuery("?deal=steal&beds=99&max=123&area=mars"), { ...defaultFilters, beds: 4 });
    assert.equal(toQuery(defaultFilters), "");
  });
});


describe("Plot viewing request", () => {
  const listing = getListing("PL-103")!;
  const valid = { ...emptyViewing(), when: "weekend" as const, move: "3-months" as const, name: "Lee", method: "email" as const, email: "lee@example.com", consent: true };

  it("requires the essentials and accepts a complete request", () => {
    assert.deepEqual(Object.keys(validateViewing(emptyViewing(), "en")), ["when", "move", "name", "method", "consent"]);
    assert.deepEqual(validateViewing(valid, "en"), {});
  });

  it("carries the listing ref and uses buyer wording for sales", () => {
    assert.equal(toViewingPayload(listing, valid).listing, "PL-103");
    assert.ok(viewingSummary(listing, valid, "en").some(([k]) => k === "When are you looking to buy?"));
  });
});
