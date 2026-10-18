import type { L } from "@/lib/i18n";

export type TreatmentId = "thai" | "foot" | "oil" | "compress" | "head" | "stones";

export type MenuItem = {
  id: TreatmentId;
  name: L;
  /** Thai name shown alongside on the English menu, and vice versa. */
  alt: L;
  body: L;
  wear: L;
  /** Duration in minutes → sample price in THB. Illustrative only. */
  prices: Record<number, number>;
};

export const menu: MenuItem[] = [
  {
    id: "thai",
    name: { th: "นวดแผนไทย", en: "Traditional Thai massage" },
    alt: { th: "Traditional Thai massage", en: "นวดแผนไทย" },
    body: {
      th: "กดจุดและยืดเส้นบนเบาะ ไม่ใช้น้ำมัน ช่วยคลายตึงหลังจากนั่งทำงานทั้งวัน",
      en: "Pressure and stretching on a floor mat, no oil — good for undoing a day at a desk.",
    },
    wear: { th: "มีชุดผ้าฝ้ายให้เปลี่ยน", en: "Loose cotton clothes provided" },
    prices: { 60: 450, 90: 650, 120: 850 },
  },
  {
    id: "foot",
    name: { th: "นวดเท้า", en: "Foot reflexology" },
    alt: { th: "Foot reflexology", en: "นวดเท้า" },
    body: {
      th: "แช่เท้าน้ำอุ่นใส่ใบเตย แล้วนวดกดจุดฝ่าเท้าและน่อง บนเก้าอี้ปรับเอน",
      en: "A warm pandan foot soak, then pressure-point work on feet and calves in a reclining chair.",
    },
    wear: { th: "พับขากางเกงได้ ไม่ต้องเปลี่ยนชุด", en: "Stay dressed — just roll up your trousers" },
    prices: { 45: 350, 60: 450, 90: 650 },
  },
  {
    id: "oil",
    name: { th: "นวดน้ำมันอโรมา", en: "Aromatherapy oil massage" },
    alt: { th: "Aromatherapy oil massage", en: "นวดน้ำมันอโรมา" },
    body: {
      th: "นวดน้ำมันจังหวะช้าทั้งตัว เลือกกลิ่นตะไคร้ มะลิ หรือไม่มีกลิ่น",
      en: "Slow, full-body oil massage. Choose lemongrass, jasmine or unscented.",
    },
    wear: { th: "มีกางเกงใช้แล้วทิ้งให้", en: "Disposable underwear provided" },
    prices: { 60: 850, 90: 1150, 120: 1450 },
  },
  {
    id: "compress",
    name: { th: "ประคบสมุนไพร", en: "Thai herbal compress" },
    alt: { th: "Thai herbal compress", en: "ลูกประคบสมุนไพร" },
    body: {
      th: "นวดไทยร่วมกับลูกประคบสมุนไพรนึ่งร้อน ไพล ขมิ้น ตะไคร้ ห่อผ้าทำเองทุกเช้า",
      en: "Thai massage with steamed herbal compresses — plai, turmeric, lemongrass — wrapped fresh each morning.",
    },
    wear: { th: "มีชุดผ้าฝ้ายให้เปลี่ยน", en: "Loose cotton clothes provided" },
    prices: { 90: 1200, 120: 1500 },
  },
  {
    id: "head",
    name: { th: "นวดศีรษะ คอ บ่า ไหล่", en: "Head, neck & shoulders" },
    alt: { th: "Head, neck & shoulders", en: "นวดศีรษะ คอ บ่า ไหล่" },
    body: {
      th: "นั่งเก้าอี้นวด เน้นคอ บ่า และศีรษะ เหมาะกับช่วงพักกลางวัน",
      en: "Seated, focused on neck, shoulders and scalp — fits into a lunch break.",
    },
    wear: { th: "ไม่ต้องเปลี่ยนชุด", en: "Stay dressed" },
    prices: { 30: 300, 60: 550 },
  },
  {
    id: "stones",
    name: { th: "นวดหินร้อน", en: "Hot stone massage" },
    alt: { th: "Hot stone massage", en: "นวดหินร้อน" },
    body: {
      th: "นวดน้ำมันร่วมกับหินบะซอลต์อุ่น ช่วยให้กล้ามเนื้อคลายลึกโดยไม่ต้องกดแรง",
      en: "Oil massage with warm basalt stones — deep relaxation without heavy pressure.",
    },
    wear: { th: "มีกางเกงใช้แล้วทิ้งให้", en: "Disposable underwear provided" },
    prices: { 90: 1500 },
  },
];

export const getItem = (id: TreatmentId) => menu.find((m) => m.id === id)!;
export const durationsFor = (id: TreatmentId) => Object.keys(getItem(id).prices).map(Number);
