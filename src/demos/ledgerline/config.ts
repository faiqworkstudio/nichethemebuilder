/**
 * Ledgerline Advisory — Demo 07 business configuration.
 *
 * A fictional accounting and business-setup firm created by Klickdoe as a
 * portfolio concept. Case stories are illustrative scenarios, not clients.
 */
export const ledgerConfig = {
  basePath: "/demos/ledgerline",
  name: { th: "เลดเจอร์ไลน์ แอดไวซอรี", en: "Ledgerline Advisory" },
  contact: {
    lineUrl: null as string | null,
    lineId: null as string | null,
    phone: null as string | null,
    email: null as string | null,
  },
  /** When set, the intro-call form POSTs JSON here. Otherwise it runs in preview mode. */
  introEndpoint: process.env.NEXT_PUBLIC_LEDGER_INTRO_ENDPOINT || null,
};
