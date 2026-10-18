import type { StaticImageData } from "next/image";
import p101a from "./assets/pl101-a.jpg";
import p101b from "./assets/pl101-b.jpg";
import p102a from "./assets/pl102-a.jpg";
import p103a from "./assets/pl103-a.jpg";
import p103b from "./assets/pl103-b.jpg";
import p104a from "./assets/pl104-a.jpg";
import p104b from "./assets/pl104-b.jpg";
import p105a from "./assets/pl105-a.jpg";
import p105b from "./assets/pl105-b.jpg";
import p106a from "./assets/pl106-a.jpg";
import p106b from "./assets/pl106-b.jpg";
import p107a from "./assets/pl107-a.jpg";
import p107b from "./assets/pl107-b.jpg";
import p108a from "./assets/pl108-a.jpg";
import p108b from "./assets/pl108-b.jpg";

/** Photos per listing ref; the first is the cover. Stock photography, labelled as illustrative. */
export const listingImages: Record<string, StaticImageData[]> = {
  "PL-101": [p101a, p101b],
  "PL-102": [p102a],
  "PL-103": [p103a, p103b],
  "PL-104": [p104a, p104b],
  "PL-105": [p105a, p105b],
  "PL-106": [p106a, p106b],
  "PL-107": [p107a, p107b],
  "PL-108": [p108a, p108b],
};
