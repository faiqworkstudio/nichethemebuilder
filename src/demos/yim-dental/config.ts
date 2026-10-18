/**
 * Yim Dental Clinic — Demo 04 business configuration.
 *
 * A fictional neighbourhood dental clinic created by Klickdoe as a portfolio
 * concept. Contact values stay null until a real clinic supplies verified
 * details; the UI shows "not connected in this demo" instead.
 */
export const yimConfig = {
  basePath: "/demos/yim-dental",
  name: { th: "ยิ้ม ทันตกรรม", en: "Yim Dental Clinic" },
  contact: {
    lineUrl: null as string | null,
    lineId: null as string | null,
    /** Clinic phone for urgent calls, e.g. "02 123 4567". */
    phone: null as string | null,
  },
  /** When set, the appointment form POSTs JSON here. Otherwise it runs in preview mode. */
  appointmentEndpoint: process.env.NEXT_PUBLIC_YIM_APPOINTMENT_ENDPOINT || null,
};
