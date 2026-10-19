/** Illustrative monthly bookkeeping fee estimate for the demo (unit tested). Never a quote. */

export type Volume = "small" | "medium" | "large";

export const volumeRanges: Record<Volume, [number, number]> = {
  small: [3000, 4500],
  medium: [5000, 8000],
  large: [9000, 15000],
};

export const VAT_ADDON: [number, number] = [1500, 2500];
export const PER_EMPLOYEE: [number, number] = [150, 250];
export const MAX_EMPLOYEES = 50;

export function estimateFee(volume: Volume, vat: boolean, employees: number): [number, number] {
  const staff = Math.max(0, Math.min(MAX_EMPLOYEES, Math.floor(employees) || 0));
  const [lo, hi] = volumeRanges[volume];
  return [
    lo + (vat ? VAT_ADDON[0] : 0) + staff * PER_EMPLOYEE[0],
    hi + (vat ? VAT_ADDON[1] : 0) + staff * PER_EMPLOYEE[1],
  ];
}
