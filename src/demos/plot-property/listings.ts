import type { L } from "@/lib/i18n";

// Listing data stays free of image imports so search logic can be unit
// tested in Node; photos are mapped by ref in ./listingImages.ts.

export type Deal = "rent" | "sale";
export type PropertyType = "condo" | "house";
export type AreaId = "thonglor" | "ari" | "riverside" | "bangna" | "silom" | "phromphong" | "ekkamai" | "ladprao";

export const areas: { id: AreaId; label: L }[] = [
  { id: "thonglor", label: { th: "ทองหล่อ", en: "Thong Lo" } },
  { id: "phromphong", label: { th: "พร้อมพงษ์", en: "Phrom Phong" } },
  { id: "ekkamai", label: { th: "เอกมัย", en: "Ekkamai" } },
  { id: "ari", label: { th: "อารีย์", en: "Ari" } },
  { id: "silom", label: { th: "สีลม", en: "Silom" } },
  { id: "riverside", label: { th: "ริมแม่น้ำ", en: "Riverside" } },
  { id: "ladprao", label: { th: "ลาดพร้าว", en: "Lat Phrao" } },
  { id: "bangna", label: { th: "บางนา", en: "Bang Na" } },
];

export type Listing = {
  ref: string;
  deal: Deal;
  type: PropertyType;
  area: AreaId;
  title: L;
  /** 0 = studio. */
  beds: number;
  baths: number;
  size: number;
  /** Land size in square wah (ตารางวา) for houses. */
  land?: number;
  floor?: number;
  /** THB per month for rent, THB total for sale. Sample figure. */
  price: number;
  transit: L;
  pets: boolean;
  furnished: boolean;
  features: L<string[]>;
  /** Plain-language notes an agent would normally only say on the phone. */
  notes: L<string[]>;
  available: "now" | "1-month" | "2-months";
};

export const listings: Listing[] = [
  {
    ref: "PL-101",
    deal: "rent",
    type: "condo",
    area: "thonglor",
    title: { th: "1 ห้องนอน แสงเช้าดี ใกล้ BTS ทองหล่อ", en: "Bright one-bed near BTS Thong Lo" },
    beds: 1,
    baths: 1,
    size: 48,
    floor: 18,
    price: 32000,
    transit: { th: "BTS ทองหล่อ ~350 ม.", en: "BTS Thong Lo ~350 m" },
    pets: false,
    furnished: true,
    features: { th: ["เฟอร์นิเจอร์ครบ", "สระว่ายน้ำ", "ฟิตเนส", "ห้องหันทิศตะวันออก"], en: ["Fully furnished", "Pool", "Gym", "East-facing"] },
    notes: {
      th: ["ค่าไฟคิดตามอัตราการไฟฟ้า ไม่บวกเพิ่ม", "สัญญาขั้นต่ำ 12 เดือน", "ไม่อนุญาตสัตว์เลี้ยงตามกฎอาคาร"],
      en: ["Electricity at the government rate, no mark-up", "12-month minimum contract", "No pets — building rule"],
    },
    available: "now",
  },
  {
    ref: "PL-102",
    deal: "rent",
    type: "condo",
    area: "ari",
    title: { th: "2 ห้องนอน เลี้ยงสัตว์ได้ ซอยอารีย์", en: "Pet-friendly two-bed in Ari" },
    beds: 2,
    baths: 2,
    size: 68,
    floor: 9,
    price: 38000,
    transit: { th: "BTS อารีย์ ~500 ม.", en: "BTS Ari ~500 m" },
    pets: true,
    furnished: true,
    features: { th: ["เลี้ยงสัตว์ได้", "ระเบียงกว้าง", "ที่จอดรถ 1 คัน"], en: ["Pets allowed", "Wide balcony", "1 parking space"] },
    notes: {
      th: ["รับสุนัขหรือแมวขนาดเล็ก 1 ตัว", "ระเบียงหันทิศตะวันตก ช่วงบ่ายร้อน", "เจ้าของห้องอยู่ในอาคาร ตอบเร็ว"],
      en: ["One small dog or cat accepted", "West-facing balcony — warm in the afternoon", "Owner lives in the building and replies fast"],
    },
    available: "1-month",
  },
  {
    ref: "PL-103",
    deal: "sale",
    type: "condo",
    area: "riverside",
    title: { th: "2 ห้องนอน วิวแม่น้ำ ชั้นสูง", en: "High-floor two-bed with river views" },
    beds: 2,
    baths: 2,
    size: 92,
    floor: 31,
    price: 11900000,
    transit: { th: "BTS สะพานตากสิน ~600 ม.", en: "BTS Saphan Taksin ~600 m" },
    pets: false,
    furnished: false,
    features: { th: ["วิวแม่น้ำ", "สระว่ายน้ำ", "เรือรับส่งของอาคาร"], en: ["River view", "Pool", "Building shuttle boat"] },
    notes: {
      th: ["ค่าส่วนกลางประมาณ 5,500 บาท/เดือน (ตัวอย่าง)", "โอนกรรมสิทธิ์ได้ทั้งคนไทยและโควตาต่างชาติ (ต้องตรวจสอบ)", "ห้องเปล่า เหมาะกับคนที่อยากตกแต่งเอง"],
      en: ["Common fee about ฿5,500/month (sample)", "Thai or foreign-quota ownership (to be verified)", "Unfurnished — a blank canvas"],
    },
    available: "now",
  },
  {
    ref: "PL-104",
    deal: "sale",
    type: "house",
    area: "bangna",
    title: { th: "บ้านเดี่ยว 4 ห้องนอน พร้อมสระ ในหมู่บ้าน", en: "Four-bed house with pool, gated estate" },
    beds: 4,
    baths: 4,
    size: 260,
    land: 80,
    price: 14500000,
    transit: { th: "BTS อุดมสุข ~4 กม.", en: "BTS Udom Suk ~4 km" },
    pets: true,
    furnished: false,
    features: { th: ["สระว่ายน้ำส่วนตัว", "ที่จอดรถ 2 คัน", "รปภ. 24 ชม."], en: ["Private pool", "2 parking spaces", "24-hour security"] },
    notes: {
      th: ["ค่าส่วนกลางหมู่บ้านประมาณ 2,400 บาท/เดือน (ตัวอย่าง)", "ใกล้โรงเรียนนานาชาติหลายแห่ง ต้องขับรถ", "ไม่ใกล้รถไฟฟ้า ต้องมีรถ"],
      en: ["Estate fee about ฿2,400/month (sample)", "Several international schools nearby by car", "Not near a train line — you'll want a car"],
    },
    available: "2-months",
  },
  {
    ref: "PL-105",
    deal: "rent",
    type: "condo",
    area: "silom",
    title: { th: "สตูดิโอใกล้สีลม เดินไปทำงานได้", en: "Studio near Silom, walk to work" },
    beds: 0,
    baths: 1,
    size: 32,
    floor: 12,
    price: 16500,
    transit: { th: "MRT สีลม ~300 ม.", en: "MRT Silom ~300 m" },
    pets: false,
    furnished: true,
    features: { th: ["เฟอร์นิเจอร์ครบ", "ครัวเล็ก", "ฟิตเนส"], en: ["Fully furnished", "Kitchenette", "Gym"] },
    notes: {
      th: ["ห้องหันหน้าถนน มีเสียงรถบ้าง", "สัญญา 6 เดือนได้ ค่าเช่าเพิ่ม 1,000 บาท", "รวมอินเทอร์เน็ต"],
      en: ["Street-facing — some traffic noise", "6-month contract possible at +฿1,000", "Internet included"],
    },
    available: "now",
  },
  {
    ref: "PL-106",
    deal: "rent",
    type: "condo",
    area: "phromphong",
    title: { th: "3 ห้องนอน สำหรับครอบครัว ใกล้สวนเบญจสิริ", en: "Three-bed family condo near Benjasiri Park" },
    beds: 3,
    baths: 2,
    size: 110,
    floor: 22,
    price: 75000,
    transit: { th: "BTS พร้อมพงษ์ ~250 ม.", en: "BTS Phrom Phong ~250 m" },
    pets: true,
    furnished: true,
    features: { th: ["เลี้ยงสัตว์ได้", "สระว่ายน้ำ", "ที่จอดรถ 2 คัน", "ห้องแม่บ้าน"], en: ["Pets allowed", "Pool", "2 parking spaces", "Maid's room"] },
    notes: {
      th: ["เดินไปสวนเบญจสิริและห้างได้", "รับสัตว์เลี้ยงไม่เกิน 2 ตัว มีเงินประกันเพิ่ม", "เจ้าของยินดีเปลี่ยนเฟอร์นิเจอร์บางชิ้น"],
      en: ["Walk to Benjasiri Park and the malls", "Up to two pets with an extra deposit", "Owner happy to swap some furniture"],
    },
    available: "1-month",
  },
  {
    ref: "PL-107",
    deal: "sale",
    type: "condo",
    area: "ekkamai",
    title: { th: "1 ห้องนอน ตกแต่งเรียบ ใกล้ BTS เอกมัย", en: "Calm one-bed near BTS Ekkamai" },
    beds: 1,
    baths: 1,
    size: 45,
    floor: 15,
    price: 6200000,
    transit: { th: "BTS เอกมัย ~450 ม.", en: "BTS Ekkamai ~450 m" },
    pets: false,
    furnished: true,
    features: { th: ["ขายพร้อมเฟอร์นิเจอร์", "สระว่ายน้ำ", "ปล่อยเช่าได้"], en: ["Sold furnished", "Pool", "Good rental demand"] },
    notes: {
      th: ["ค่าส่วนกลางประมาณ 2,700 บาท/เดือน (ตัวอย่าง)", "ผู้เช่าปัจจุบันหมดสัญญาใน 2 เดือน", "ราคาต่อรองได้เล็กน้อย"],
      en: ["Common fee about ฿2,700/month (sample)", "Current tenant's lease ends in two months", "Some room to negotiate"],
    },
    available: "2-months",
  },
  {
    ref: "PL-108",
    deal: "rent",
    type: "house",
    area: "ladprao",
    title: { th: "บ้านเดี่ยว 3 ห้องนอน มีสวน เลี้ยงสัตว์ได้", en: "Three-bed house with garden, pets welcome" },
    beds: 3,
    baths: 3,
    size: 220,
    land: 60,
    price: 65000,
    transit: { th: "MRT ลาดพร้าว ~2 กม.", en: "MRT Lat Phrao ~2 km" },
    pets: true,
    furnished: false,
    features: { th: ["สวนหน้าบ้าน", "ที่จอดรถ 2 คัน", "เลี้ยงสัตว์ได้"], en: ["Front garden", "2 parking spaces", "Pets welcome"] },
    notes: {
      th: ["เหมาะกับครอบครัวที่มีรถ", "ค่าน้ำค่าไฟจ่ายตรงกับการไฟฟ้า/การประปา", "ทาสีใหม่ก่อนเข้าอยู่"],
      en: ["Best for families with a car", "Water and power paid directly to the utilities", "Repainted before move-in"],
    },
    available: "now",
  },
];

export const getListing = (ref: string) => listings.find((l) => l.ref === ref);
