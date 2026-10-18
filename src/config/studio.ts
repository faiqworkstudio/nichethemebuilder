/**
 * Portfolio/studio label and contact details, kept in one place so the
 * label can be changed globally. Contact values are null until real,
 * verified details are supplied — UI must handle null gracefully.
 */
export const studio = {
  name: "Klickdoe",
  descriptor: "Website design and development for Bangkok businesses",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  contact: {
    email: null as string | null,
    lineUrl: null as string | null,
  },
};
