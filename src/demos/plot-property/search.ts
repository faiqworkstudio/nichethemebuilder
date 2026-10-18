/** Pure listing search: filters, sorting and URL query encoding (unit tested). */
import { listings, type AreaId, type Deal, type Listing, type PropertyType } from "./listings";

export type Sort = "price-asc" | "price-desc" | "size-desc";

export type Filters = {
  deal: Deal | "all";
  type: PropertyType | "all";
  area: AreaId | "all";
  /** Minimum bedrooms; 0 includes studios. */
  beds: number;
  /** Maximum price in THB, or 0 for no limit. */
  maxPrice: number;
  pets: boolean;
  sort: Sort;
};

export const defaultFilters: Filters = { deal: "all", type: "all", area: "all", beds: 0, maxPrice: 0, pets: false, sort: "price-asc" };

/** Price caps offered per deal. Mixing rent and sale prices makes no sense, so "all" has none. */
export const priceCaps: Record<Deal, number[]> = {
  rent: [20000, 40000, 80000],
  sale: [5_000_000, 10_000_000, 15_000_000],
};

export function applyFilters(f: Filters, items: Listing[] = listings): Listing[] {
  const out = items.filter(
    (l) =>
      (f.deal === "all" || l.deal === f.deal) &&
      (f.type === "all" || l.type === f.type) &&
      (f.area === "all" || l.area === f.area) &&
      l.beds >= f.beds &&
      (!f.maxPrice || f.deal === "all" || l.price <= f.maxPrice) &&
      (!f.pets || l.pets),
  );
  const by: Record<Sort, (a: Listing, b: Listing) => number> = {
    // Rent sorts before sale so monthly and total prices aren't interleaved.
    "price-asc": (a, b) => a.deal.localeCompare(b.deal) || a.price - b.price,
    "price-desc": (a, b) => a.deal.localeCompare(b.deal) || b.price - a.price,
    "size-desc": (a, b) => b.size - a.size,
  };
  return [...out].sort(by[f.sort]);
}

const pick = <T extends string>(value: string | null, allowed: readonly T[], fallback: T): T =>
  value && (allowed as readonly string[]).includes(value) ? (value as T) : fallback;

/** Reads filters from a query string, ignoring anything invalid. */
export function parseQuery(search: string): Filters {
  const q = new URLSearchParams(search);
  const deal = pick(q.get("deal"), ["all", "rent", "sale"] as const, "all");
  const beds = Math.max(0, Math.min(4, Number(q.get("beds")) || 0));
  const max = Number(q.get("max")) || 0;
  return {
    deal,
    type: pick(q.get("type"), ["all", "condo", "house"] as const, "all"),
    area: pick(q.get("area"), ["all", "thonglor", "ari", "riverside", "bangna", "silom", "phromphong", "ekkamai", "ladprao"] as const, "all"),
    beds,
    maxPrice: deal !== "all" && priceCaps[deal].includes(max) ? max : 0,
    pets: q.get("pets") === "1",
    sort: pick(q.get("sort"), ["price-asc", "price-desc", "size-desc"] as const, "price-asc"),
  };
}

/** Writes only non-default filters, so shared links stay short. */
export function toQuery(f: Filters): string {
  const q = new URLSearchParams();
  if (f.deal !== "all") q.set("deal", f.deal);
  if (f.type !== "all") q.set("type", f.type);
  if (f.area !== "all") q.set("area", f.area);
  if (f.beds) q.set("beds", String(f.beds));
  if (f.maxPrice) q.set("max", String(f.maxPrice));
  if (f.pets) q.set("pets", "1");
  if (f.sort !== "price-asc") q.set("sort", f.sort);
  const s = q.toString();
  return s ? `?${s}` : "";
}
