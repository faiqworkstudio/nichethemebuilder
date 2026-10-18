/**
 * Plot Property — Demo 06 business configuration.
 *
 * A fictional Bangkok rental and sales agent created by Klickdoe as a
 * portfolio concept. Every listing is a sample, not a real property.
 */
export const plotConfig = {
  basePath: "/demos/plot-property",
  name: { th: "พล็อต พร็อพเพอร์ตี้", en: "Plot Property" },
  contact: {
    lineUrl: null as string | null,
    lineId: null as string | null,
    phone: null as string | null,
    email: null as string | null,
  },
  /** When set, the viewing-request form POSTs JSON here. Otherwise it runs in preview mode. */
  viewingEndpoint: process.env.NEXT_PUBLIC_PLOT_VIEWING_ENDPOINT || null,
};
