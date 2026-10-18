import type { L } from "@/lib/i18n";

export type Category = "checkup" | "pain" | "repair" | "straighten" | "cosmetic" | "kids";

export const categories: { id: Category; label: L }[] = [
  { id: "checkup", label: { th: "ตรวจและขูดหินปูน", en: "Check-ups" } },
  { id: "pain", label: { th: "ปวดฟัน", en: "Toothache" } },
  { id: "repair", label: { th: "ซ่อมและทดแทนฟัน", en: "Repair & replace" } },
  { id: "straighten", label: { th: "จัดฟัน", en: "Straightening" } },
  { id: "cosmetic", label: { th: "ความสวยงาม", en: "Cosmetic" } },
  { id: "kids", label: { th: "ทันตกรรมเด็ก", en: "Children" } },
];

export type Numbing = "no" | "sometimes" | "yes";

export type DentalTreatment = {
  id: string;
  category: Category;
  name: L;
  what: L;
  chair: L;
  visits: L;
  numbing: Numbing;
  /** Sample THB range for the demo — never a real price list. */
  price: [number, number];
  unit?: L;
};

/** Illustrative treatment library. Prices are sample ranges, clearly labelled in the UI. */
export const treatments: DentalTreatment[] = [
  {
    id: "checkup",
    category: "checkup",
    name: { th: "ตรวจฟันและขูดหินปูน", en: "Check-up, scale & polish" },
    what: { th: "ตรวจฟันทุกซี่ ขูดหินปูน ขัดฟัน และบอกตรงๆ ว่ามีอะไรต้องทำหรือไม่", en: "A full check, scale and polish — and a straight answer on whether anything needs doing." },
    chair: { th: "45–60 นาที", en: "45–60 min" },
    visits: { th: "1 ครั้ง", en: "1 visit" },
    numbing: "no",
    price: [800, 1500],
  },
  {
    id: "xray",
    category: "checkup",
    name: { th: "เอกซเรย์ฟัน", en: "Dental X-rays" },
    what: { th: "ฟิล์มเล็กเฉพาะจุด หรือฟิล์มพานอรามิกทั้งปาก เมื่อทันตแพทย์เห็นว่าจำเป็น", en: "Small single-tooth films or a full-mouth panoramic, only when the dentist needs one." },
    chair: { th: "5–15 นาที", en: "5–15 min" },
    visits: { th: "1 ครั้ง", en: "1 visit" },
    numbing: "no",
    price: [300, 1200],
  },
  {
    id: "filling",
    category: "pain",
    name: { th: "อุดฟัน", en: "Fillings" },
    what: { th: "อุดฟันผุด้วยวัสดุสีเหมือนฟัน ราคาขึ้นกับขนาดและจำนวนด้านที่อุด", en: "Tooth-coloured fillings for decay; the price depends on size and how many sides are filled." },
    chair: { th: "30–60 นาที", en: "30–60 min" },
    visits: { th: "1 ครั้ง", en: "1 visit" },
    numbing: "sometimes",
    price: [800, 2500],
    unit: { th: "ต่อซี่", en: "per tooth" },
  },
  {
    id: "root-canal",
    category: "pain",
    name: { th: "รักษารากฟัน", en: "Root canal treatment" },
    what: { th: "รักษาฟันที่ติดเชื้อถึงโพรงประสาท เพื่อเก็บฟันไว้แทนการถอน มักต้องทำครอบฟันต่อ", en: "Treats infection inside the tooth so it can be kept instead of removed; usually followed by a crown." },
    chair: { th: "60–90 นาที", en: "60–90 min" },
    visits: { th: "2–4 ครั้ง", en: "2–4 visits" },
    numbing: "yes",
    price: [5000, 15000],
    unit: { th: "ต่อซี่", en: "per tooth" },
  },
  {
    id: "extraction",
    category: "pain",
    name: { th: "ถอนฟันและผ่าฟันคุด", en: "Extractions & wisdom teeth" },
    what: { th: "ถอนฟันธรรมดา หรือผ่าฟันคุดหลังดูเอกซเรย์ นัดตัดไหมประมาณ 7 วันต่อมา", en: "Simple extractions, or wisdom-tooth surgery after an X-ray, with a stitch check about a week later." },
    chair: { th: "30–90 นาที", en: "30–90 min" },
    visits: { th: "1–2 ครั้ง", en: "1–2 visits" },
    numbing: "yes",
    price: [800, 8000],
    unit: { th: "ต่อซี่", en: "per tooth" },
  },
  {
    id: "crown",
    category: "repair",
    name: { th: "ครอบฟัน", en: "Crowns" },
    what: { th: "ครอบฟันเซรามิกสำหรับฟันที่แตกหรือหลังรักษารากฟัน ใส่ครอบชั่วคราวระหว่างรอ", en: "Ceramic crowns for broken teeth or after root canal treatment, with a temporary crown while you wait." },
    chair: { th: "60 นาที ต่อครั้ง", en: "60 min per visit" },
    visits: { th: "2 ครั้ง", en: "2 visits" },
    numbing: "sometimes",
    price: [10000, 20000],
    unit: { th: "ต่อซี่", en: "per tooth" },
  },
  {
    id: "implant",
    category: "repair",
    name: { th: "รากฟันเทียม", en: "Implants" },
    what: { th: "ทดแทนฟันที่หายไปโดยไม่ต้องกรอฟันข้างเคียง ใช้เวลาหลายเดือนเพื่อให้กระดูกยึดรากเทียม", en: "Replaces a missing tooth without touching its neighbours; takes a few months for the bone to settle." },
    chair: { th: "หลายนัด", en: "Several appointments" },
    visits: { th: "3–6 เดือน", en: "Over 3–6 months" },
    numbing: "yes",
    price: [45000, 80000],
    unit: { th: "ต่อซี่", en: "per tooth" },
  },
  {
    id: "aligners",
    category: "straighten",
    name: { th: "จัดฟันแบบใส", en: "Clear aligners" },
    what: { th: "ชุดถาดใสที่เปลี่ยนทุก 1–2 สัปดาห์ ต้องใส่วันละ 20–22 ชั่วโมงจึงจะได้ผล", en: "A series of clear trays changed every 1–2 weeks; they only work if worn 20–22 hours a day." },
    chair: { th: "นัดติดตาม 20 นาที", en: "20-min check-ins" },
    visits: { th: "12–24 เดือน", en: "12–24 months" },
    numbing: "no",
    price: [60000, 150000],
  },
  {
    id: "braces",
    category: "straighten",
    name: { th: "จัดฟันแบบติดแน่น", en: "Fixed braces" },
    what: { th: "เครื่องมือจัดฟันแบบโลหะหรือสีเหมือนฟัน ปรับลวดทุก 4–6 สัปดาห์", en: "Metal or tooth-coloured brackets, adjusted every 4–6 weeks." },
    chair: { th: "นัดปรับ 20–30 นาที", en: "20–30 min adjustments" },
    visits: { th: "18–30 เดือน", en: "18–30 months" },
    numbing: "no",
    price: [35000, 70000],
  },
  {
    id: "whitening",
    category: "cosmetic",
    name: { th: "ฟอกสีฟัน", en: "Teeth whitening" },
    what: { th: "ฟอกสีฟันที่คลินิกหลังตรวจฟันแล้ว อาจเสียวฟันชั่วคราว ไม่ได้ผลกับวัสดุอุดหรือครอบฟัน", en: "In-clinic whitening after a check-up. Temporary sensitivity is common; fillings and crowns don't change colour." },
    chair: { th: "60–90 นาที", en: "60–90 min" },
    visits: { th: "1 ครั้ง", en: "1 visit" },
    numbing: "no",
    price: [6000, 12000],
  },
  {
    id: "kids",
    category: "kids",
    name: { th: "ตรวจฟันเด็กและเคลือบฟลูออไรด์", en: "Children's check-up & fluoride" },
    what: { th: "นัดสั้นๆ สบายๆ ให้เด็กได้ทำความรู้จักเก้าอี้ทันตกรรมก่อน แนะนำผู้ปกครองเรื่องการแปรงฟัน", en: "A short, relaxed visit so children get used to the chair, plus brushing tips for parents." },
    chair: { th: "20–30 นาที", en: "20–30 min" },
    visits: { th: "ทุก 6 เดือน", en: "Every 6 months" },
    numbing: "no",
    price: [500, 900],
  },
];

/** Case-insensitive search across name and description in the current language. */
export function searchTreatments(query: string, category: Category | "all", lang: "th" | "en") {
  const q = query.trim().toLowerCase();
  return treatments.filter(
    (t) =>
      (category === "all" || t.category === category) &&
      (!q || t.name[lang].toLowerCase().includes(q) || t.what[lang].toLowerCase().includes(q) || t.name.en.toLowerCase().includes(q)),
  );
}
