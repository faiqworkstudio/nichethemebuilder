import type { L } from "@/lib/i18n";
import type { Urgency } from "./triage";

/**
 * Yim Dental Clinic copy, Thai and English side by side. The clinic is
 * fictional: dentist details are placeholders, prices are sample ranges,
 * and the urgency guide is general information, not a diagnosis.
 */

export const meta = {
  title: {
    th: "ยิ้ม ทันตกรรม — คลินิกทันตกรรมใกล้ BTS อ่อนนุช (เว็บไซต์ตัวอย่าง)",
    en: "Yim Dental Clinic — A neighbourhood dentist near BTS On Nut (concept demo)",
  },
  description: {
    th: "คลินิกทันตกรรมที่อธิบายก่อนลงมือ มีตัวช่วยประเมินความเร่งด่วนเมื่อปวดฟัน รายการทันตกรรมพร้อมช่วงราคาตัวอย่าง และนัดหมายออนไลน์ — เว็บไซต์ตัวอย่างโดย Klickdoe",
    en: "A dentist that explains before they start: an 'is it urgent?' guide for toothache, a searchable treatment list with sample price ranges, and online appointment requests. A concept demo by Klickdoe.",
  },
} satisfies Record<string, L>;

export const demoNotice: L = {
  th: "เว็บไซต์ตัวอย่างโดย Klickdoe — ยิ้ม ทันตกรรมเป็นคลินิกสมมติ ราคาเป็นตัวอย่าง ข้อมูลทันตแพทย์เป็นตัวอย่าง และไม่มีการนัดหมายจริง",
  en: "Concept demo by Klickdoe — Yim Dental Clinic is fictional, prices and dentist details are samples, and no appointment is ever made.",
};

export const nav = {
  skip: { th: "ข้ามไปยังเนื้อหา", en: "Skip to content" },
  label: { th: "เมนูหลัก", en: "Main navigation" },
  items: [
    { id: "urgent", th: "ปวดฟัน?", en: "In pain?" },
    { id: "treatments", th: "การรักษาและราคา", en: "Treatments & prices" },
    { id: "nervous", th: "กลัวหมอฟัน", en: "Nervous?" },
    { id: "team", th: "ทันตแพทย์", en: "Dentists" },
    { id: "faq", th: "คำถาม", en: "FAQ" },
  ],
  cta: { th: "นัดหมาย", en: "Book a visit" },
  langLabel: { th: "เปลี่ยนภาษา", en: "Change language" },
};

export const hero = {
  kicker: { th: "คลินิกทันตกรรม · BTS อ่อนนุช", en: "Neighbourhood dentist · BTS On Nut" },
  title: { th: "หมอฟันที่อธิบายก่อนลงมือ", en: "A dentist that explains first." },
  body: {
    th: "ก่อนเริ่มทุกขั้นตอน เราบอกคุณว่าจะทำอะไร ใช้เวลานานแค่ไหน และราคาเท่าไร คุณหยุดพักได้ทุกเมื่อเพียงยกมือ",
    en: "Before anything starts, we tell you what we'll do, how long it takes and what it costs. Raise your hand and we stop — any time.",
  },
  doorsLabel: { th: "วันนี้มาเรื่องอะไร", en: "What brings you here?" },
  doors: [
    { id: "pain", href: "#urgent", title: { th: "ปวดฟันหรือฟันแตก", en: "I'm in pain" }, body: { th: "ตอบ 4 คำถามเพื่อดูว่าควรมาเร็วแค่ไหน", en: "Four questions to see how soon you should come in" } },
    { id: "checkup", href: "#treatments", title: { th: "ตรวจฟันและขูดหินปูน", en: "Check-up & clean" }, body: { th: "นัดตรวจทุก 6 เดือน พร้อมราคาตัวอย่าง", en: "Six-monthly visits, with sample prices" } },
    { id: "straighten", href: "#treatments", title: { th: "จัดฟัน รากเทียม ฟอกสี", en: "Braces & bigger work" }, body: { th: "ดูระยะเวลาและจำนวนนัดก่อนตัดสินใจ", en: "See timelines and visits before you decide" } },
  ],
  imageAlt: {
    th: "ห้องทำฟันสว่าง เก้าอี้ทันตกรรมสีส้ม ตู้สีขาว และหน้าต่างบานใหญ่",
    en: "A bright treatment room with an orange dental chair, white cabinets and a large window",
  },
  tag: { th: "เปิดถึง 20:00 วันธรรมดา (ตัวอย่าง)", en: "Open until 8pm on weekdays (example)" },
};

export const urgent = {
  title: { th: "ปวดฟัน — ต้องรีบแค่ไหน", en: "Toothache — how urgent is it?" },
  intro: {
    th: "ตอบคำถามสั้นๆ เพื่อดูคำแนะนำทั่วไป นี่ไม่ใช่การวินิจฉัย ถ้าไม่แน่ใจ โทรหาเราได้เสมอ",
    en: "Answer a few quick questions for general guidance. This isn't a diagnosis — if you're unsure, call us.",
  },
  questions: {
    redFlags: {
      th: "มีอาการบวมที่ใบหน้าหรือขากรรไกรที่ลามขึ้น มีไข้ หรือหายใจ/กลืนลำบากไหม",
      en: "Is there swelling in your face or jaw that's spreading, a fever, or any trouble breathing or swallowing?",
    },
    injury: { th: "ฟันหลุดหรือหักจากอุบัติเหตุไหม", en: "Was a tooth knocked out or broken in an accident?" },
    bleeding: { th: "มีเลือดออกไม่หยุด หลังกดแผลไว้ 20 นาทีไหม", en: "Is there bleeding that hasn't stopped after 20 minutes of firm pressure?" },
    pain: { th: "ปวดมากแค่ไหน", en: "How bad is the pain?" },
  },
  yes: { th: "ใช่", en: "Yes" },
  no: { th: "ไม่ใช่", en: "No" },
  pain: {
    none: { th: "ไม่ปวด หรือแค่เสียวเล็กน้อย", en: "None, or just mild sensitivity" },
    "comes-goes": { th: "ปวดเป็นพักๆ", en: "Comes and goes" },
    constant: { th: "ปวดตลอด จนนอนไม่หลับ", en: "Constant — it keeps me awake" },
  },
  waiting: { th: "ตอบคำถามให้ครบเพื่อดูคำแนะนำ", en: "Answer the questions to see guidance" },
  results: {
    emergency: {
      title: { th: "ไปห้องฉุกเฉินของโรงพยาบาลทันที", en: "Go to a hospital emergency department now" },
      body: {
        th: "อาการบวมที่ลามหรือหายใจลำบากอาจอันตราย อย่ารอนัดคลินิก โทร 1669 หากต้องการรถพยาบาล",
        en: "Spreading swelling or difficulty breathing can be dangerous. Don't wait for a clinic appointment — call 1669 if you need an ambulance.",
      },
    },
    today: {
      title: { th: "ควรพบทันตแพทย์วันนี้", en: "See a dentist today" },
      body: {
        th: "โทรหาคลินิกเพื่อขอคิวด่วน ถ้าฟันแท้หลุด ให้จับที่ตัวฟัน ไม่ถูราก แช่ในนมและมาให้เร็วที่สุด ภายใน 1 ชั่วโมงดีที่สุด",
        en: "Call for an urgent slot. If an adult tooth has been knocked out, hold it by the crown, don't scrub the root, keep it in milk and come in as fast as you can — ideally within an hour.",
      },
    },
    soon: {
      title: { th: "นัดภายใน 2–3 วัน", en: "Book within 2–3 days" },
      body: {
        th: "อาการปวดเป็นพักๆ มักเป็นสัญญาณของฟันผุหรือเหงือกอักเสบ ยิ่งรักษาเร็วยิ่งง่าย ระหว่างนี้รับประทานยาแก้ปวดตามฉลากได้",
        en: "Pain that comes and goes is often decay or gum inflammation — the sooner it's seen, the simpler it is. Meanwhile, painkillers taken as labelled can help.",
      },
    },
    routine: {
      title: { th: "นัดตรวจตามปกติได้", en: "A routine visit is fine" },
      body: {
        th: "ไม่มีสัญญาณที่ต้องรีบ นัดตรวจในเวลาที่สะดวก และบอกเราเรื่องอาการเสียวฟันในวันนัด",
        en: "Nothing here sounds urgent. Book a check-up when it suits you and mention any sensitivity on the day.",
      },
    },
  } satisfies Record<Urgency, { title: L; body: L }>,
  book: { th: "ขอนัดพร้อมระบุอาการ", en: "Request a visit with these answers" },
  call: { th: "โทรหาคลินิก", en: "Call the clinic" },
  callOff: { th: "เบอร์โทรยังไม่ได้เชื่อมต่อในเว็บไซต์ตัวอย่าง", en: "Phone not connected in this demo" },
  reset: { th: "เริ่มใหม่", en: "Start again" },
  disclaimer: {
    th: "คำแนะนำทั่วไปเท่านั้น ไม่ใช่การวินิจฉัย หากอาการรุนแรงหรือแย่ลง ไปโรงพยาบาลทันที",
    en: "General guidance only, not a diagnosis. If symptoms are severe or getting worse, go to hospital.",
  },
};

export const nervous = {
  title: { th: "กลัวหมอฟัน? เราเข้าใจ", en: "Nervous about the dentist? That's normal." },
  lead: {
    th: "หลายคนไม่ได้ทำฟันมาหลายปีเพราะเคยเจ็บหรืออาย บอกเราในแบบฟอร์มว่ากังวล แล้วเราจะทำตามนี้",
    en: "Plenty of people put off the dentist for years because of a bad experience or embarrassment. Tick 'I'm nervous' when you book, and this is what we do.",
  },
  items: [
    { th: "อธิบายก่อนทุกขั้นตอน และถามก่อนเริ่ม", en: "Explain every step and check before starting" },
    { th: "ตกลงสัญญาณหยุด — ยกมือแล้วเราหยุดทันที", en: "Agree a stop signal — raise your hand and we stop" },
    { th: "ใช้เจลชาก่อนฉีดยาชาทุกครั้ง", en: "Numbing gel before every injection" },
    { th: "นัดแรกเป็นการคุยและตรวจ ไม่ต้องทำอะไรถ้ายังไม่พร้อม", en: "First visit can be just a talk and a look — nothing else unless you're ready" },
    { th: "ไม่มีคำตำหนิเรื่องที่ไม่ได้มาหาหมอนาน", en: "No lectures about how long it's been" },
  ],
  imageAlt: {
    th: "มือสองคนจับกันเพื่อให้กำลังใจ",
    en: "Two people holding hands reassuringly",
  },
};

export const library = {
  title: { th: "การรักษาและราคาตัวอย่าง", en: "Treatments & sample prices" },
  intro: {
    th: "ค้นหาหรือเลือกหมวด ราคาเป็นช่วงตัวอย่างสำหรับเว็บไซต์นี้ ราคาจริงแจ้งเป็นลายลักษณ์อักษรหลังตรวจ และก่อนเริ่มรักษาทุกครั้ง",
    en: "Search or pick a category. Prices are sample ranges for this demo; real prices are written down after an exam and before any treatment starts.",
  },
  search: { th: "ค้นหาการรักษา", en: "Search treatments" },
  searchPlaceholder: { th: "เช่น อุดฟัน, ฟันคุด, จัดฟัน", en: "e.g. filling, wisdom tooth, braces" },
  all: { th: "ทั้งหมด", en: "All" },
  cols: {
    treatment: { th: "การรักษา", en: "Treatment" },
    chair: { th: "เวลาบนเก้าอี้", en: "Time in chair" },
    visits: { th: "จำนวนนัด", en: "Visits" },
    numbing: { th: "ยาชา", en: "Numbing" },
    price: { th: "ราคาตัวอย่าง", en: "Sample price" },
  },
  numbing: {
    no: { th: "ไม่ต้อง", en: "Not needed" },
    sometimes: { th: "บางครั้ง", en: "Sometimes" },
    yes: { th: "ใช้", en: "Yes" },
  },
  count: { th: (n: number) => `พบ ${n} รายการ`, en: (n: number) => `${n} treatment${n === 1 ? "" : "s"}` },
  empty: {
    th: "ไม่พบการรักษาที่ค้นหา ลองคำอื่น หรือถามเราในแบบฟอร์มนัดหมายได้",
    en: "No treatments match. Try another word, or just ask us in the booking form.",
  },
  clear: { th: "ล้างการค้นหา", en: "Clear search" },
  book: { th: "นัดเรื่องนี้", en: "Book for this" },
  sampleNote: {
    th: "ราคาตัวอย่าง ไม่ใช่ราคาจริง",
    en: "Sample ranges, not real prices",
  },
};

export const team = {
  title: { th: "ทันตแพทย์และการนัดครั้งแรก", en: "Dentists, and how a first visit goes" },
  steps: [
    { th: "คุยเรื่องอาการและสิ่งที่กังวล", en: "Talk about what's bothering you" },
    { th: "ตรวจฟันและเอกซเรย์เมื่อจำเป็น", en: "Exam, and X-rays only if needed" },
    { th: "ดูภาพเอกซเรย์ด้วยกันบนจอ", en: "Look at the X-rays together on screen" },
    { th: "รับแผนการรักษาและราคาเป็นลายลักษณ์อักษร", en: "A written plan and price to take home" },
  ],
  imageAlt: {
    th: "ทันตแพทย์ชี้ภาพเอกซเรย์ฟันบนจอให้ผู้ป่วยที่นั่งบนเก้าอี้ทำฟันดู",
    en: "A dentist pointing at a dental X-ray on a screen for a patient sitting in the chair",
  },
  placeholder: { th: "ข้อมูลตัวอย่าง", en: "Placeholder" },
  slots: [
    { role: { th: "ทันตแพทย์ทั่วไป", en: "General dentist" }, lines: { th: ["[ชื่อทันตแพทย์]", "ใบอนุญาตเลขที่ ท. [—]"], en: ["[Dentist's name]", "Licence no. ท. [—]"] } },
    { role: { th: "ทันตแพทย์จัดฟัน", en: "Orthodontist" }, lines: { th: ["[ชื่อทันตแพทย์]", "ใบอนุญาตเลขที่ ท. [—]"], en: ["[Dentist's name]", "Licence no. ท. [—]"] } },
    { role: { th: "ทันตแพทย์สำหรับเด็ก", en: "Children's dentist" }, lines: { th: ["[ชื่อทันตแพทย์]", "ใบอนุญาตเลขที่ ท. [—]"], en: ["[Dentist's name]", "Licence no. ท. [—]"] } },
  ],
  note: {
    th: "ในเว็บไซต์จริง ส่วนนี้แสดงชื่อ รูป และเลขที่ใบอนุญาตที่ตรวจสอบได้ของทันตแพทย์แต่ละท่าน",
    en: "On a live site, this shows each dentist's real name, photo and a licence number patients can check.",
  },
};

export const paying = {
  title: { th: "เรื่องค่าใช้จ่าย", en: "Paying for treatment" },
  items: [
    {
      title: { th: "ราคาก่อนเริ่มเสมอ", en: "A price before we start" },
      body: { th: "เราเขียนราคาให้หลังตรวจ ถ้าระหว่างรักษาต้องเปลี่ยนแผน เราหยุดถามก่อน", en: "You get a written price after the exam. If the plan needs to change mid-treatment, we stop and ask first." },
    },
    {
      title: { th: "สิทธิประกันสังคม", en: "Social Security dental benefit" },
      body: { th: "บอกเราตอนนัดหมาย เราจะตรวจสอบให้ว่าสิทธิของคุณครอบคลุมอะไรบ้าง", en: "Tell us when you book and we'll check what your benefit covers." },
    },
    {
      title: { th: "ช่องทางชำระเงิน", en: "Ways to pay" },
      body: { th: "เงินสด บัตร หรือพร้อมเพย์ งานใหญ่อย่างจัดฟันแบ่งจ่ายตามนัดได้", en: "Cash, card or PromptPay. Bigger work like braces can be paid per appointment." },
    },
  ],
};

export const visit = {
  title: { th: "มาที่คลินิก", en: "Finding us" },
  address: {
    th: "ที่อยู่ตัวอย่าง — ใกล้ BTS อ่อนนุช สุขุมวิท 77 (คลินิกสมมติ ไม่มีที่ตั้งจริง)",
    en: "Demo address — near BTS On Nut, Sukhumvit 77 (fictional clinic, no real location)",
  },
  transit: { th: "เดินจาก BTS อ่อนนุชประมาณ 4 นาที (ตัวอย่าง)", en: "About a 4-minute walk from BTS On Nut (example)" },
  hoursTitle: { th: "เวลาทำการ (ตัวอย่าง)", en: "Opening hours (example)" },
  hours: [
    { days: { th: "จันทร์ – ศุกร์", en: "Mon – Fri" }, time: "10:00 – 20:00" },
    { days: { th: "เสาร์", en: "Sat" }, time: "09:00 – 17:00" },
    { days: { th: "อาทิตย์", en: "Sun" }, time: { th: "ปิด", en: "Closed" } },
  ],
  notConnected: { th: "ยังไม่ได้เชื่อมต่อในเว็บไซต์ตัวอย่าง", en: "not connected in this demo" },
};

export const faqs: { q: L; a: L }[] = [
  {
    q: { th: "ต้องเอกซเรย์ทุกครั้งไหม", en: "Do I need X-rays every time?" },
    a: { th: "ไม่ต้อง เอกซเรย์เฉพาะเมื่อทันตแพทย์ต้องการดูสิ่งที่มองไม่เห็นจากการตรวจ และจะบอกเหตุผลก่อนเสมอ", en: "No. Only when the dentist needs to see something an exam can't show — and we'll tell you why first." },
  },
  {
    q: { th: "พาลูกเล็กมาได้ตั้งแต่อายุเท่าไร", en: "When should my child first visit?" },
    a: { th: "เมื่อฟันซี่แรกขึ้น หรือประมาณ 1 ขวบ นัดแรกเน้นให้เด็กคุ้นเคยมากกว่าการรักษา", en: "When the first tooth appears or around their first birthday. The first visit is mostly about getting comfortable." },
  },
  {
    q: { th: "ฟอกสีฟันทำให้ฟันเสียไหม", en: "Does whitening damage teeth?" },
    a: { th: "เมื่อทำหลังตรวจฟันและใช้ความเข้มข้นที่เหมาะสม มักทำให้เสียวฟันชั่วคราวเท่านั้น เราจะไม่ฟอกสีถ้ามีฟันผุที่ยังไม่ได้รักษา", en: "Done after a check-up at a sensible strength, the usual side effect is temporary sensitivity. We won't whiten over untreated decay." },
  },
  {
    q: { th: "พูดภาษาอังกฤษได้ไหม", en: "Do you speak English?" },
    a: { th: "ได้ แผนการรักษาและใบเสร็จออกได้ทั้งภาษาไทยและอังกฤษ สำหรับเบิกประกันต่างประเทศ", en: "Yes. Treatment plans and receipts can be in Thai or English, for overseas insurance claims." },
  },
  {
    q: { th: "ยกเลิกนัดได้ไหม", en: "Can I cancel or move an appointment?" },
    a: { th: "ได้ แจ้งล่วงหน้าอย่างน้อย 24 ชั่วโมงทาง LINE หรือโทรศัพท์", en: "Of course — please let us know at least 24 hours ahead by LINE or phone." },
  },
];

export const form = {
  title: { th: "ขอนัดหมาย", en: "Request an appointment" },
  intro: {
    th: "เลือกเรื่องที่ต้องการและเวลาที่สะดวก เราจะติดต่อกลับเพื่อยืนยันเวลา",
    en: "Tell us what you need and when suits you. We'll get back to you to confirm a time.",
  },
  demoMode: {
    th: "โหมดตัวอย่าง: แบบฟอร์มนี้ตรวจสอบข้อมูลและแสดงตัวอย่างคำขอ แต่ไม่มีการนัดหมายจริงและไม่ได้ส่งข้อมูลไปที่ใด",
    en: "Demo mode: this form checks your answers and previews the request, but no appointment is made and nothing is sent.",
  },
  privacy: {
    th: "เราขอเฉพาะข้อมูลที่ใช้นัดหมาย ประวัติสุขภาพจะถามในวันนัด ข้อมูลใช้ตามหลัก PDPA",
    en: "We only ask for what we need to book you in — health history is taken at the visit. Details are handled in line with Thailand's PDPA.",
  },
  required: { th: "จำเป็น", en: "required" },
  optional: { th: "ไม่บังคับ", en: "optional" },
  fields: {
    reason: { th: "นัดเรื่องอะไร", en: "What's the visit for?" },
    patient: { th: "ผู้ป่วยเป็น", en: "Who is the patient?" },
    days: { th: "วันที่สะดวก", en: "Days that suit you" },
    time: { th: "ช่วงเวลา", en: "Time of day" },
    sso: { th: "ใช้สิทธิประกันสังคมไหม", en: "Using Social Security dental benefit?" },
    name: { th: "ชื่อ", en: "Your name" },
    method: { th: "ให้ติดต่อกลับทาง", en: "How should we reply?" },
    lineId: { th: "LINE ID", en: "LINE ID" },
    phone: { th: "เบอร์โทรศัพท์", en: "Phone number" },
    email: { th: "อีเมล", en: "Email" },
    nervous: { th: "ฉันกลัวหมอฟัน — ช่วยอธิบายทุกขั้นตอน", en: "I'm nervous — please explain each step" },
    consent: { th: "ยินยอมให้คลินิกใช้ข้อมูลนี้เพื่อนัดหมายเท่านั้น", en: "I agree the clinic may use these details only to arrange my visit." },
  },
  urgencyNote: { th: "แนบผลประเมินความเร่งด่วน:", en: "Urgency guide result attached:" },
  reasons: {
    checkup: { th: "ตรวจและขูดหินปูน", en: "Check-up & clean" },
    pain: { th: "ปวดฟัน / ฟันแตก", en: "Toothache / broken tooth" },
    straighten: { th: "จัดฟัน", en: "Straightening" },
    repair: { th: "ครอบฟัน / รากเทียม", en: "Crown / implant" },
    cosmetic: { th: "ฟอกสีฟัน", en: "Whitening" },
    kids: { th: "ทันตกรรมเด็ก", en: "Child's visit" },
  },
  patients: { adult: { th: "ผู้ใหญ่", en: "Adult" }, child: { th: "เด็ก", en: "Child" } },
  days: { weekday: { th: "วันธรรมดา", en: "Weekdays" }, saturday: { th: "วันเสาร์", en: "Saturday" }, any: { th: "วันไหนก็ได้", en: "Any day" } },
  times: { morning: { th: "เช้า", en: "Morning" }, afternoon: { th: "บ่าย", en: "Afternoon" }, evening: { th: "หลัง 17:00", en: "After 5pm" } },
  sso: { yes: { th: "ใช้", en: "Yes" }, no: { th: "ไม่ใช้", en: "No" }, unsure: { th: "ไม่แน่ใจ", en: "Not sure" } },
  methods: { line: { th: "LINE", en: "LINE" }, phone: { th: "โทรศัพท์", en: "Phone" }, email: { th: "อีเมล", en: "Email" } },
  submitDemo: { th: "ตรวจสอบและดูตัวอย่าง", en: "Check and preview" },
  submit: { th: "ส่งคำขอนัด", en: "Send request" },
  sending: { th: "กำลังส่ง…", en: "Sending…" },
  errors: {
    summary: { th: "กรุณาตรวจสอบข้อมูลต่อไปนี้", en: "Please check the following" },
    reason: { th: "เลือกเรื่องที่ต้องการนัด", en: "Choose what the visit is for" },
    days: { th: "เลือกวันที่สะดวก", en: "Choose which days suit you" },
    time: { th: "เลือกช่วงเวลา", en: "Choose a time of day" },
    name: { th: "ใส่ชื่อที่ให้เราเรียก", en: "Enter a name we can use" },
    method: { th: "เลือกช่องทางติดต่อกลับ", en: "Choose how we should reply" },
    lineId: { th: "ใส่ LINE ID ให้ถูกต้อง", en: "Enter a valid LINE ID" },
    phone: { th: "ใส่เบอร์โทรไทย 9–10 หลัก", en: "Enter a Thai number (9–10 digits)" },
    email: { th: "ใส่อีเมลให้ถูกรูปแบบ", en: "Enter a valid email address" },
    consent: { th: "กรุณายืนยันการยินยอม", en: "Please confirm consent" },
  },
  preview: {
    title: { th: "ตัวอย่างเท่านั้น — ยังไม่มีการนัดหมาย", en: "Preview only — no appointment was made" },
    body: {
      th: "นี่คือเว็บไซต์ตัวอย่าง ถ้าเป็นคลินิกจริง คำขอนี้จะส่งถึงเคาน์เตอร์ และเจ้าหน้าที่จะติดต่อกลับเพื่อยืนยันเวลา ถ้าปวดมาก กรุณาโทรหาคลินิกแทนการรอ",
      en: "This is a demo website. At a real clinic this would reach the front desk, who'd contact you to confirm. If you're in a lot of pain, call rather than wait.",
    },
    edit: { th: "กลับไปแก้ไข", en: "Edit request" },
  },
  sent: {
    title: { th: "ได้รับคำขอแล้ว", en: "Request received" },
    body: { th: "เราจะติดต่อกลับเพื่อยืนยันเวลานัด", en: "We'll be in touch to confirm your appointment time." },
  },
  failed: { th: "ส่งไม่สำเร็จ ข้อมูลยังอยู่ กรุณาลองอีกครั้ง หรือโทรหาคลินิก", en: "That didn't go through. Your answers are still here — try again, or call the clinic." },
  urgencyLabels: {
    emergency: { th: "ฉุกเฉิน — ไปโรงพยาบาล", en: "Emergency — hospital" },
    today: { th: "ควรพบวันนี้", en: "See today" },
    soon: { th: "ภายใน 2–3 วัน", en: "Within 2–3 days" },
    routine: { th: "นัดปกติ", en: "Routine" },
  } satisfies Record<Urgency, L>,
};

export const footer = {
  disclaimer: {
    th: "ข้อมูลในเว็บไซต์นี้เป็นข้อมูลทั่วไป ไม่ใช่การวินิจฉัย ราคาเป็นตัวอย่างสำหรับเว็บไซต์สาธิต",
    en: "Information here is general, not a diagnosis. Prices are samples for a demo website.",
  },
  credits: {
    th: "ภาพประกอบจาก Unsplash ใช้เพื่อประกอบแนวคิดเท่านั้น ไม่ใช่ผู้ป่วยหรือบุคลากรของคลินิก",
    en: "Photography from Unsplash, for illustration only — not the clinic's patients or staff.",
  },
  builtBy: { th: "ออกแบบและพัฒนาเป็นงานตัวอย่างโดย", en: "Designed and built as a concept by" },
  back: { th: "กลับไปหน้าผลงาน Klickdoe", en: "Back to the Klickdoe portfolio" },
};
