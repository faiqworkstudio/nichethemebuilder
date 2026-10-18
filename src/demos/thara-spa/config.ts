/**
 * Thara Thai Massage & Spa — Demo 05 business configuration.
 *
 * A fictional massage house created by Klickdoe as a portfolio concept.
 * Contact values stay null until a real spa supplies verified details.
 */
export const tharaConfig = {
  basePath: "/demos/thara-spa",
  name: { th: "ธารา นวดไทยและสปา", en: "Thara Thai Massage & Spa" },
  contact: {
    lineUrl: null as string | null,
    lineId: null as string | null,
    phone: null as string | null,
  },
  /** Opening hours used to offer start times (24h, minutes since midnight). */
  opens: 10 * 60,
  closes: 22 * 60,
  /** When set, the booking form POSTs JSON here. Otherwise it runs in preview mode. */
  bookingEndpoint: process.env.NEXT_PUBLIC_THARA_BOOKING_ENDPOINT || null,
};
