/**
 * Sen Studio — Demo 01 business configuration.
 *
 * Sen Studio is a fictional interior design & renovation studio created by
 * Klickdoe as a portfolio concept. Contact values stay null until a real
 * client supplies verified details; every UI that reads them must degrade
 * gracefully (no dead links, no invented numbers).
 */
export const senConfig = {
  basePath: "/demos/sen-studio",
  name: { th: "เส้น สตูดิโอ", en: "Sen Studio" },
  contact: {
    /** e.g. "https://line.me/R/ti/p/@yourid" — null shows a "not connected" note. */
    lineUrl: null as string | null,
    lineId: null as string | null,
    email: null as string | null,
    phone: null as string | null,
  },
  /** When set, the enquiry form POSTs JSON here. Otherwise it runs in preview mode. */
  enquiryEndpoint: process.env.NEXT_PUBLIC_SEN_ENQUIRY_ENDPOINT || null,
};
