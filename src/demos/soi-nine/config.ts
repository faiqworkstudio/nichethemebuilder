/**
 * Soi Nine House — Demo 03 business configuration.
 *
 * A fictional boutique stay in Talat Noi, created by Klickdoe as a portfolio
 * concept. No real rates, availability or reservations exist. Contact and
 * booking-provider values stay null until a real property supplies them.
 */
export const soiConfig = {
  basePath: "/demos/soi-nine",
  name: { th: "บ้านซอยเก้า", en: "Soi Nine House" },
  contact: {
    lineUrl: null as string | null,
    lineId: null as string | null,
    phone: null as string | null,
    email: null as string | null,
  },
  /** A real booking engine URL (e.g. the property's own engine). Null hides the hand-off button. */
  bookingProviderUrl: null as string | null,
  /** When set, the stay-request form POSTs JSON here. Otherwise it runs in preview mode. */
  requestEndpoint: process.env.NEXT_PUBLIC_SOI_REQUEST_ENDPOINT || null,
};
