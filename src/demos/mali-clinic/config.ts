/**
 * Mali Skin Clinic — Demo 02 business configuration.
 *
 * A fictional doctor-led skin clinic created by Klickdoe as a portfolio
 * concept. Contact values stay null until a real clinic supplies verified
 * details; the UI shows "not connected in this demo" instead.
 */
export const maliConfig = {
  basePath: "/demos/mali-clinic",
  name: { th: "มะลิ สกินคลินิก", en: "Mali Skin Clinic" },
  contact: {
    /** e.g. "https://line.me/R/ti/p/@yourid" */
    lineUrl: null as string | null,
    lineId: null as string | null,
    phone: null as string | null,
    email: null as string | null,
  },
  /** When set, the consultation form POSTs JSON here. Otherwise it runs in preview mode. */
  consultEndpoint: process.env.NEXT_PUBLIC_MALI_CONSULT_ENDPOINT || null,
};
