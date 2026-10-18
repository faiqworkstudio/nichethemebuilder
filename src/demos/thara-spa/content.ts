import type { L } from "@/lib/i18n";

/**
 * Thara Thai Massage & Spa copy, Thai and English side by side. The spa is
 * fictional, prices are samples and no booking is ever made.
 */

export const meta = {
  title: {
    th: "ธารา นวดไทยและสปา — ใกล้ BTS พร้อมพงษ์ (เว็บไซต์ตัวอย่าง)",
    en: "Thara Thai Massage & Spa — near BTS Phrom Phong (concept demo)",
  },
  description: {
    th: "นวดแผนไทย นวดเท้า นวดน้ำมัน และลูกประคบสมุนไพร จองเวลาได้ตั้งแต่หน้าแรก เลือกน้ำหนักมือและหมอนวดได้ — เว็บไซต์ตัวอย่างโดย Klickdoe ราคาเป็นตัวอย่าง",
    en: "Thai massage, foot reflexology, oil massage and herbal compress — book from the first screen, choose pressure and therapist. A concept demo by Klickdoe; prices are samples.",
  },
} satisfies Record<string, L>;

export const demoNotice: L = {
  th: "เว็บไซต์ตัวอย่างโดย Klickdoe — ธาราเป็นร้านสมมติ ราคาเป็นตัวอย่าง และไม่มีการจองคิวจริง",
  en: "Concept demo by Klickdoe — Thara is fictional, prices are samples, and no booking is ever made.",
};

export const nav = {
  skip: { th: "ข้ามไปยังเนื้อหา", en: "Skip to content" },
  label: { th: "เมนูหลัก", en: "Main navigation" },
  items: [
    { id: "menu", th: "เมนูนวด", en: "Menu" },
    { id: "visit", th: "มาครั้งแรก", en: "Your visit" },
    { id: "good-to-know", th: "ควรรู้", en: "Good to know" },
    { id: "faq", th: "คำถาม", en: "FAQ" },
  ],
  langLabel: { th: "เปลี่ยนภาษา", en: "Change language" },
};

export const hero = {
  kicker: { th: "ซอยสุขุมวิท 24 · พร้อมพงษ์", en: "Sukhumvit 24 · Phrom Phong" },
  title: { th: "พักสักชั่วโมง", en: "Take an hour." },
  sub: {
    th: "นวดแผนไทยโดยหมอนวดที่ผ่านการฝึกมาอย่างดี ในตึกแถวเงียบๆ ที่มีชาตะไคร้รอคุณอยู่หลังนวด",
    en: "Thai massage by well-trained hands, in a quiet shophouse — with lemongrass tea waiting afterwards.",
  },
  imageAlt: {
    th: "มุมมองจากด้านบน ผู้รับบริการนอนบนเบาะ ห่มผ้าขนหนูขาว หมอนวดนวดศีรษะ ข้างตัวมีผลไม้และดอกไม้ บนพื้นกระเบื้องลาย",
    en: "Overhead view of a client lying on a mat under a white towel while a therapist massages her head, with fruit and flowers on a patterned tiled floor",
  },
};

export const picker = {
  title: { th: "จองเวลานวด", en: "Book a massage" },
  treatment: { th: "เลือกการนวด", en: "Treatment" },
  duration: { th: "ระยะเวลา", en: "Length" },
  date: { th: "วันที่", en: "Date" },
  time: { th: "เวลาเริ่ม", en: "Start time" },
  timePlaceholder: { th: "เลือกเวลา", en: "Choose a time" },
  people: { th: "จำนวนคน", en: "People" },
  total: { th: "ราคาตัวอย่าง", en: "Sample price" },
  sample: {
    th: "ราคาตัวอย่าง ไม่ใช่ราคาจริง เวลาเป็นเวลาที่ต้องการ ไม่ใช่คิวว่างจริง",
    en: "Sample price, not a real rate. Times are preferences, not live availability.",
  },
  next: { th: "ต่อไป: ข้อมูลของคุณ", en: "Next: your details" },
};

export const menuCopy = {
  title: { th: "เมนูนวด", en: "The menu" },
  intro: {
    th: "ราคาต่อคน รวมชาและผลไม้หลังนวด ทุกการนวดเริ่มด้วยการแช่เท้าน้ำอุ่น",
    en: "Prices per person, with tea and fruit afterwards. Every treatment starts with a warm foot soak.",
  },
  min: { th: "นาที", en: "min" },
  book: { th: "จอง", en: "Book" },
  sampleNote: { th: "ราคาตัวอย่างสำหรับเว็บไซต์สาธิต", en: "Sample prices for a demo website" },
};

export const visitCopy = {
  title: { th: "มาครั้งแรก เป็นแบบนี้", en: "Your first visit" },
  steps: [
    {
      title: { th: "มาก่อน 10 นาที", en: "Arrive ten minutes early" },
      body: { th: "ถอดรองเท้าที่หน้าร้าน ดื่มน้ำ และบอกเราว่าอยากให้เน้นตรงไหน", en: "Shoes off at the door, a glass of water, and a quick word about where you'd like us to focus." },
      image: "foot",
    },
    {
      title: { th: "แช่เท้าและเปลี่ยนชุด", en: "Foot soak, then change" },
      body: { th: "แช่เท้าน้ำอุ่นกับใบเตย แล้วเปลี่ยนเป็นชุดผ้าฝ้ายในห้องส่วนตัว", en: "A warm pandan foot soak, then loose cotton clothes in a private room." },
      image: "thai",
    },
    {
      title: { th: "นวด แล้วพักต่อ", en: "Massage, then stay a while" },
      body: { th: "หลังนวด นั่งพักในห้องสวนได้ตามสบาย พร้อมชาตะไคร้อุ่น", en: "Afterwards, take your time in the garden room with warm lemongrass tea." },
      image: "garden",
    },
  ],
  alts: {
    foot: { th: "เท้าแช่ในอ่างน้ำอุ่นที่ลอยดอกลีลาวดีและดอกกล้วยไม้", en: "Feet soaking in warm water with frangipani and orchid flowers" },
    thai: { th: "มือหมอนวดกดและยืดแขนผู้รับบริการบนเบาะ", en: "A therapist's hands pressing and stretching a client's arm on a mat" },
    garden: { th: "ห้องพักผ่อนริมสวน มีสระน้ำเล็ก ต้นไม้ และเก้าอี้หวาย", en: "A garden lounge with a small pool, plants and a rattan chair" },
  },
};

export const goodToKnow = {
  title: { th: "ควรรู้ก่อนมา", en: "Good to know" },
  items: [
    {
      title: { th: "บอกน้ำหนักมือได้ตลอด", en: "Say so about pressure — any time" },
      body: { th: "“เบาหน่อย” หรือ “แรงอีกนิด” พูดได้เลย หมอนวดของเราอยากให้คุณบอก", en: "“Softer” or “firmer” is always fine to say. Our therapists want you to." },
    },
    {
      title: { th: "ตั้งครรภ์หรือบาดเจ็บ", en: "Pregnant or injured?" },
      body: { th: "บอกหมอนวดก่อนเริ่ม บางท่าและบางน้ำมันอาจต้องเลี่ยง ถ้ามีอาการเจ็บป่วย ควรปรึกษาแพทย์ก่อน", en: "Tell your therapist before you start — some positions and oils should be avoided. If you're unwell, check with a doctor first." },
    },
    {
      title: { th: "เรื่องทิป", en: "About tipping" },
      body: { th: "ทิปเป็นน้ำใจ ไม่บังคับ และหมอนวดได้รับเต็มจำนวน", en: "Tips are appreciated, never expected, and go in full to your therapist." },
    },
    {
      title: { th: "เลื่อนหรือยกเลิก", en: "Changing plans" },
      body: { th: "แจ้งล่วงหน้า 3 ชั่วโมงทาง LINE หรือโทรศัพท์ เพื่อให้คนอื่นได้ใช้เวลานั้น", en: "Let us know three hours ahead by LINE or phone so someone else can have the slot." },
    },
  ],
};

export const visitInfo = {
  title: { th: "มาที่ร้าน", en: "Finding us" },
  address: {
    th: "ที่อยู่ตัวอย่าง — ซอยสุขุมวิท 24 (ร้านสมมติ ไม่มีที่ตั้งจริง)",
    en: "Demo address — Sukhumvit Soi 24 (fictional spa, no real location)",
  },
  transit: { th: "เดินจาก BTS พร้อมพงษ์ประมาณ 5 นาที (ตัวอย่าง)", en: "About 5 minutes' walk from BTS Phrom Phong (example)" },
  hours: { th: "เปิดทุกวัน 10:00 – 22:00 (ตัวอย่าง)", en: "Open daily 10:00 – 22:00 (example)" },
  notConnected: { th: "ยังไม่ได้เชื่อมต่อในเว็บไซต์ตัวอย่าง", en: "not connected in this demo" },
};

export const faqs: { q: L; a: L }[] = [
  {
    q: { th: "นวดแผนไทยเจ็บไหม", en: "Does Thai massage hurt?" },
    a: { th: "ไม่ควรเจ็บ อาจรู้สึกตึงตอนยืดเส้น ถ้าเจ็บให้บอกทันที เลือกน้ำหนักมือ “เบา” ตอนจองได้", en: "It shouldn't. Stretches can feel intense, but say if anything hurts — and you can pick “light” pressure when you book." },
  },
  {
    q: { th: "มาเป็นคู่หรือเป็นกลุ่มได้ไหม", en: "Can we come as a couple or group?" },
    a: { th: "ได้ถึง 4 คนในห้องเดียวกัน เลือกจำนวนคนตอนจอง", en: "Yes — up to four people in the same room. Choose the number when you book." },
  },
  {
    q: { th: "ขอหมอนวดผู้หญิงหรือผู้ชายได้ไหม", en: "Can I ask for a female or male therapist?" },
    a: { th: "ได้ เลือกตอนจอง เราจะจัดให้ตามที่มีในวันนั้นและแจ้งยืนยันกลับ", en: "Yes, choose when you book. We'll arrange it where we can and confirm when we reply." },
  },
  {
    q: { th: "ต้องจองล่วงหน้าไหม", en: "Do I need to book ahead?" },
    a: { th: "ไม่จำเป็น แต่ช่วงเย็นและวันหยุดมักเต็ม การจองล่วงหน้าทำให้ไม่ต้องรอ", en: "Not always, but evenings and weekends fill up — booking saves you waiting." },
  },
];

export const booking = {
  title: { th: "ข้อมูลของคุณ", en: "Your details" },
  intro: {
    th: "ตรวจสอบรายการด้านซ้าย แล้วกรอกข้อมูลสำหรับยืนยันคิว",
    en: "Check your choices, then tell us how to confirm.",
  },
  demoMode: {
    th: "โหมดตัวอย่าง: แบบฟอร์มนี้ตรวจสอบข้อมูลและแสดงตัวอย่างการจอง แต่ไม่มีการจองคิวจริงและไม่ได้ส่งข้อมูลไปที่ใด",
    en: "Demo mode: this form checks your answers and previews the booking, but nothing is reserved and nothing is sent.",
  },
  privacy: {
    th: "เราขอเฉพาะข้อมูลที่ใช้ยืนยันคิว ใช้ตามหลัก PDPA",
    en: "We only ask for what we need to confirm your slot, in line with Thailand's PDPA.",
  },
  yourChoice: { th: "รายการที่เลือก", en: "Your booking" },
  change: { th: "เปลี่ยน", en: "Change" },
  required: { th: "จำเป็น", en: "required" },
  fields: {
    treatment: { th: "การนวด", en: "Treatment" },
    when: { th: "วันและเวลา", en: "Date and time" },
    people: { th: "จำนวนคน", en: "People" },
    therapist: { th: "หมอนวด", en: "Therapist" },
    pressure: { th: "น้ำหนักมือ", en: "Pressure" },
    name: { th: "ชื่อ", en: "Your name" },
    method: { th: "ให้ยืนยันทาง", en: "Confirm by" },
    lineId: { th: "LINE ID", en: "LINE ID" },
    phone: { th: "เบอร์โทรศัพท์", en: "Phone number" },
    email: { th: "อีเมล", en: "Email" },
    consent: { th: "ยินยอมให้ร้านใช้ข้อมูลนี้เพื่อยืนยันการจองเท่านั้น", en: "I agree Thara may use these details only to confirm this booking." },
  },
  minutes: { th: (n: number) => `${n} นาที`, en: (n: number) => `${n} min` },
  therapists: { any: { th: "ใครก็ได้", en: "No preference" }, female: { th: "ผู้หญิง", en: "Female" }, male: { th: "ผู้ชาย", en: "Male" } },
  pressures: { light: { th: "เบา", en: "Light" }, medium: { th: "กลาง", en: "Medium" }, firm: { th: "แรง", en: "Firm" } },
  methods: { line: { th: "LINE", en: "LINE" }, phone: { th: "โทรศัพท์", en: "Phone" }, email: { th: "อีเมล", en: "Email" } },
  submitDemo: { th: "ตรวจสอบและดูตัวอย่าง", en: "Check and preview" },
  submit: { th: "ส่งคำขอจอง", en: "Send booking request" },
  sending: { th: "กำลังส่ง…", en: "Sending…" },
  errors: {
    summary: { th: "กรุณาตรวจสอบข้อมูลต่อไปนี้", en: "Please check the following" },
    duration: { th: "เลือกระยะเวลาที่มีสำหรับการนวดนี้", en: "Choose a length offered for this treatment" },
    date: { th: "เลือกวันที่", en: "Choose a date" },
    past: { th: "วันที่ต้องไม่ใช่วันที่ผ่านมาแล้ว", en: "The date can't be in the past" },
    time: { th: "เลือกเวลาเริ่ม", en: "Choose a start time" },
    timePassed: { th: "เวลานี้ผ่านไปแล้วสำหรับวันนี้", en: "That time has already passed today" },
    people: { th: "จองได้ 1–4 คน", en: "Book for 1–4 people" },
    name: { th: "ใส่ชื่อที่ให้เราเรียก", en: "Enter a name we can use" },
    method: { th: "เลือกช่องทางยืนยัน", en: "Choose how we should confirm" },
    lineId: { th: "ใส่ LINE ID ให้ถูกต้อง", en: "Enter a valid LINE ID" },
    phone: { th: "ใส่เบอร์โทรไทย 9–10 หลัก", en: "Enter a Thai number (9–10 digits)" },
    email: { th: "ใส่อีเมลให้ถูกรูปแบบ", en: "Enter a valid email address" },
    consent: { th: "กรุณายืนยันการยินยอม", en: "Please confirm consent" },
  },
  preview: {
    title: { th: "ตัวอย่างเท่านั้น — ยังไม่มีการจอง", en: "Preview only — nothing is booked" },
    body: {
      th: "นี่คือเว็บไซต์ตัวอย่าง ถ้าเป็นร้านจริง เราจะตอบกลับเพื่อยืนยันคิวหรือเสนอเวลาใกล้เคียง",
      en: "This is a demo website. At a real spa we'd reply to confirm your slot or suggest the nearest free time.",
    },
    edit: { th: "กลับไปแก้ไข", en: "Edit booking" },
  },
  sent: {
    title: { th: "ได้รับคำขอแล้ว", en: "Request received" },
    body: { th: "เราจะตอบกลับเพื่อยืนยันคิวเร็วๆ นี้", en: "We'll reply soon to confirm your slot." },
  },
  failed: { th: "ส่งไม่สำเร็จ ข้อมูลยังอยู่ กรุณาลองอีกครั้ง", en: "That didn't go through. Your answers are still here — please try again." },
};

export const footer = {
  credits: {
    th: "ภาพประกอบจาก Unsplash ใช้เพื่อประกอบแนวคิดเท่านั้น ไม่ใช่ร้านหรือหมอนวดของธารา",
    en: "Photography from Unsplash, for illustration only — not Thara's rooms or therapists.",
  },
  builtBy: { th: "ออกแบบและพัฒนาเป็นงานตัวอย่างโดย", en: "Designed and built as a concept by" },
  back: { th: "กลับไปหน้าผลงาน Klickdoe", en: "Back to the Klickdoe portfolio" },
};
