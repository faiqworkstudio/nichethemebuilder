import type { L } from "@/lib/i18n";

export type Concern = "acne" | "spots" | "dull" | "sensitive" | "hair";

export const concerns: { id: Concern; label: L; hint: L }[] = [
  { id: "acne", label: { th: "สิวและรอยสิว", en: "Breakouts & acne" }, hint: { th: "สิวอุดตัน สิวอักเสบ รอยแดง", en: "Clogged pores, inflamed spots, red marks" } },
  { id: "spots", label: { th: "ฝ้า กระ จุดด่างดำ", en: "Dark spots & melasma" }, hint: { th: "รอยดำ ฝ้าจากแดด สีผิวไม่สม่ำเสมอ", en: "Sun spots, melasma, uneven tone" } },
  { id: "dull", label: { th: "ผิวหมองคล้ำ แห้ง", en: "Dull or dry skin" }, hint: { th: "ผิวขาดน้ำ ไม่สดใส", en: "Dehydrated, tired-looking skin" } },
  { id: "sensitive", label: { th: "ผิวแพ้ง่าย ผิวแดง", en: "Sensitive or red skin" }, hint: { th: "แสบ คัน แดงง่าย", en: "Stinging, itching, flushing" } },
  { id: "hair", label: { th: "ขนที่ไม่ต้องการ", en: "Unwanted hair" }, hint: { th: "รักแร้ ขา ใบหน้า", en: "Underarms, legs, face" } },
];

export type Treatment = {
  id: string;
  concerns: Concern[];
  name: L;
  summary: L;
  steps: L<string[]>;
  length: L;
  downtime: L;
  course: L;
  tellUs: L;
};

/**
 * Treatment library. Wording deliberately avoids promised results: every
 * treatment is discussed with a doctor first and outcomes vary.
 */
export const treatments: Treatment[] = [
  {
    id: "consult",
    concerns: ["acne", "spots", "dull", "sensitive", "hair"],
    name: { th: "ปรึกษาแพทย์และตรวจผิว", en: "Doctor consultation & skin check" },
    summary: {
      th: "ทุกคนเริ่มที่นี่ แพทย์ดูผิวของคุณ ถามเรื่องผลิตภัณฑ์ที่ใช้อยู่ แล้วอธิบายทางเลือกทั้งหมด รวมถึงทางเลือกที่ไม่ต้องทำหัตถการเลย",
      en: "Everyone starts here. A doctor looks at your skin, asks what you're using now, and explains every option — including the ones that need no treatment at all.",
    },
    steps: {
      th: ["คุยเรื่องปัญหาผิวและประวัติที่เกี่ยวข้อง", "ตรวจผิวภายใต้แสงที่เหมาะสม", "แผนดูแลผิวเป็นลายลักษณ์อักษร พร้อมราคา"],
      en: ["Talk through your skin and relevant history", "Skin check under proper light", "A written plan, with prices, to take home"],
    },
    length: { th: "30 นาที", en: "30 minutes" },
    downtime: { th: "ไม่มี", en: "None" },
    course: { th: "ครั้งเดียว ติดตามผลตามแผน", en: "Once; follow-ups as planned" },
    tellUs: {
      th: "นำผลิตภัณฑ์ที่ใช้ประจำมาด้วยได้ หรือถ่ายรูปฉลากมา",
      en: "Bring the products you use, or photos of their labels.",
    },
  },
  {
    id: "facial",
    concerns: ["acne", "dull"],
    name: { th: "ทรีตเมนต์ทำความสะอาดผิวโดยแพทย์ดูแล", en: "Medical deep-cleanse facial" },
    summary: {
      th: "ทำความสะอาดรูขุมขน กดสิวอย่างถูกวิธี และเติมความชุ่มชื้น เหมาะกับผิวที่อุดตันหรือดูหมอง",
      en: "A careful pore cleanse, correct extraction and hydration — for congested or tired-looking skin.",
    },
    steps: {
      th: ["ล้างหน้าและผลัดเซลล์ผิวอ่อนโยน", "กดสิวด้วยเครื่องมือปลอดเชื้อ", "มาสก์และครีมบำรุงตามสภาพผิว"],
      en: ["Cleanse and gentle exfoliation", "Extraction with sterilised tools", "Mask and moisturiser chosen for your skin"],
    },
    length: { th: "60 นาที", en: "60 minutes" },
    downtime: { th: "อาจแดงเล็กน้อย 2–3 ชั่วโมง", en: "Possible mild redness for 2–3 hours" },
    course: { th: "ทุก 4–6 สัปดาห์ หากต้องการ", en: "Every 4–6 weeks if you want it" },
    tellUs: {
      th: "แจ้งแพทย์หากใช้ยารักษาสิวชนิดรับประทาน หรือยาทาที่มีเรตินอยด์",
      en: "Tell the doctor if you take oral acne medication or use retinoid creams.",
    },
  },
  {
    id: "acne-plan",
    concerns: ["acne"],
    name: { th: "แผนรักษาสิวกับแพทย์", en: "Acne care plan" },
    summary: {
      th: "การรักษาสิวต่อเนื่องหลายเดือน ใช้ยาที่แพทย์สั่งเมื่อเหมาะสม ร่วมกับการดูแลที่คลินิก และนัดติดตามเพื่อปรับแผน",
      en: "A plan over several months: prescription treatment where it's appropriate, in-clinic care, and follow-ups to adjust as your skin changes.",
    },
    steps: {
      th: ["ประเมินชนิดของสิวและสาเหตุที่เป็นไปได้", "ยาทาหรือยารับประทานตามที่แพทย์พิจารณา", "นัดติดตามทุก 4–6 สัปดาห์"],
      en: ["Assess the type of acne and likely triggers", "Topical or oral medication if the doctor advises it", "Follow-up every 4–6 weeks"],
    },
    length: { th: "นัดละ 20–45 นาที", en: "20–45 minutes per visit" },
    downtime: { th: "ขึ้นกับการรักษา แพทย์จะอธิบายก่อน", en: "Depends on treatment; explained beforehand" },
    course: { th: "ส่วนใหญ่ 3–6 เดือน", en: "Usually 3–6 months" },
    tellUs: {
      th: "แจ้งแพทย์หากตั้งครรภ์ วางแผนตั้งครรภ์ หรือให้นมบุตร",
      en: "Tell the doctor if you're pregnant, planning to be, or breastfeeding.",
    },
  },
  {
    id: "pigment",
    concerns: ["spots"],
    name: { th: "ดูแลฝ้า กระ และจุดด่างดำ", en: "Pigmentation & melasma care" },
    summary: {
      th: "ฝ้าเป็นภาวะที่ควบคุมได้แต่มักกลับมาได้ เราจึงเริ่มจากการป้องกันแดดและยาทาที่เหมาะสม แล้วจึงพิจารณาเลเซอร์แบบอ่อนโยนเมื่อจำเป็น",
      en: "Melasma can be controlled but often returns, so we start with sun protection and the right topical care, and consider gentle laser only where it helps.",
    },
    steps: {
      th: ["แยกชนิดของรอยดำก่อนเลือกวิธี", "แผนกันแดดและยาทาที่ใช้ได้จริงในชีวิตประจำวัน", "เลเซอร์พลังงานต่ำเป็นทางเลือกเมื่อเหมาะสม"],
      en: ["Identify the type of pigmentation before choosing anything", "A sun-protection and topical routine you'll actually keep up", "Low-energy laser as an option where suitable"],
    },
    length: { th: "30–45 นาที", en: "30–45 minutes" },
    downtime: { th: "ส่วนใหญ่ไม่มี อาจแดงเล็กน้อยหลังเลเซอร์", en: "Usually none; slight redness after laser" },
    course: { th: "ประเมินผลทุก 1–2 เดือน", en: "Reviewed every 1–2 months" },
    tellUs: {
      th: "บอกแพทย์ว่าออกแดดบ่อยแค่ไหน และใช้ยาคุมกำเนิดหรือไม่",
      en: "Tell the doctor how much sun you get and whether you take hormonal contraception.",
    },
  },
  {
    id: "calm",
    concerns: ["sensitive", "dull"],
    name: { th: "ทรีตเมนต์ฟื้นฟูผิวแพ้ง่าย", en: "Calming barrier-repair facial" },
    summary: {
      th: "สำหรับผิวที่แสบหรือแดงง่าย ใช้ผลิตภัณฑ์สูตรอ่อนโยน ไม่มีการขัดหรือกดสิว เน้นฟื้นฟูชั้นผิว",
      en: "For skin that stings or flushes easily: gentle formulas, no scrubbing or extraction, focused on repairing the skin barrier.",
    },
    steps: {
      th: ["ทดสอบผลิตภัณฑ์บริเวณเล็กๆ ก่อน", "มาสก์เย็นลดความแดง", "แนะนำการดูแลผิวที่บ้านแบบเรียบง่าย"],
      en: ["Patch-test products on a small area first", "Cooling mask to settle redness", "A simple home routine to follow"],
    },
    length: { th: "45 นาที", en: "45 minutes" },
    downtime: { th: "ไม่มี", en: "None" },
    course: { th: "ตามต้องการ", en: "As needed" },
    tellUs: {
      th: "บอกเราถึงผลิตภัณฑ์หรือสารที่เคยแพ้",
      en: "Tell us about any products or ingredients that have irritated you.",
    },
  },
  {
    id: "laser-hair",
    concerns: ["hair"],
    name: { th: "เลเซอร์กำจัดขน", en: "Laser hair removal" },
    summary: {
      th: "ใช้เลเซอร์ไดโอดลดจำนวนขนอย่างค่อยเป็นค่อยไป ทดสอบบริเวณเล็กก่อนทุกครั้ง ผลลัพธ์ขึ้นกับสีผิวและสีขนของแต่ละคน",
      en: "Diode laser to reduce hair gradually, always with a test patch first. Results depend on your skin tone and hair colour.",
    },
    steps: {
      th: ["ทดสอบบริเวณเล็กและรอดูผล 48 ชั่วโมง", "โกนขนก่อนมาตามคำแนะนำ", "ทำซ้ำตามรอบการงอกของขน"],
      en: ["Test patch, then a 48-hour wait", "Shave beforehand as advised", "Repeat sessions timed to hair growth"],
    },
    length: { th: "15–45 นาที ตามบริเวณ", en: "15–45 minutes by area" },
    downtime: { th: "อาจแดงเล็กน้อย หลีกเลี่ยงแดดจัด", en: "Possible mild redness; avoid strong sun" },
    course: { th: "ส่วนใหญ่ 6–8 ครั้ง ห่างกัน 4–6 สัปดาห์", en: "Usually 6–8 sessions, 4–6 weeks apart" },
    tellUs: {
      th: "แจ้งหากเพิ่งตากแดดจัด หรือใช้ยาที่ทำให้ไวต่อแสง",
      en: "Tell us about recent tanning or any medicine that makes you sun-sensitive.",
    },
  },
];
