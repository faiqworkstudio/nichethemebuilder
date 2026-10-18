import type { L } from "@/lib/i18n";

/**
 * Mali Skin Clinic page copy, Thai and English side by side. The clinic is
 * fictional; doctor details are visibly marked placeholders, and no outcome,
 * price or credential is presented as real.
 */

export const meta = {
  title: {
    th: "มะลิ สกินคลินิก — คลินิกผิวพรรณโดยแพทย์ ย่านเอกมัย (เว็บไซต์ตัวอย่าง)",
    en: "Mali Skin Clinic — Doctor-led skin care in Ekkamai (concept demo)",
  },
  description: {
    th: "คลินิกผิวพรรณขนาดเล็ก เริ่มทุกอย่างด้วยการปรึกษาแพทย์ 30 นาที แผนดูแลผิวเป็นลายลักษณ์อักษรพร้อมราคา ไม่มีการขายคอร์สในครั้งแรก — เว็บไซต์ตัวอย่างโดย Klickdoe",
    en: "A small doctor-led skin clinic: every plan starts with a 30-minute doctor consultation and a written plan with prices, with no course selling on your first visit. A concept demo by Klickdoe.",
  },
} satisfies Record<string, L>;

export const demoNotice: L = {
  th: "เว็บไซต์ตัวอย่างโดย Klickdoe — มะลิ สกินคลินิกเป็นคลินิกสมมติ ข้อมูลแพทย์เป็นตัวอย่าง และแบบฟอร์มไม่ได้ส่งข้อมูลจริง",
  en: "Concept demo by Klickdoe — Mali Skin Clinic is fictional, doctor details are placeholders, and the form does not send anything.",
};

export const nav = {
  skip: { th: "ข้ามไปยังเนื้อหา", en: "Skip to content" },
  label: { th: "เมนูหลัก", en: "Main navigation" },
  items: [
    { id: "first-visit", th: "ครั้งแรกที่มา", en: "First visit" },
    { id: "treatments", th: "การดูแลผิว", en: "Treatments" },
    { id: "doctors", th: "แพทย์", en: "Doctors" },
    { id: "visit", th: "เดินทาง", en: "Visit" },
    { id: "faq", th: "คำถาม", en: "FAQ" },
  ],
  cta: { th: "นัดปรึกษาแพทย์", en: "Book a consultation" },
  langLabel: { th: "เปลี่ยนภาษา", en: "Change language" },
};

export const hero = {
  eyebrow: { th: "คลินิกผิวพรรณโดยแพทย์ · เอกมัย", en: "Doctor-led skin clinic · Ekkamai" },
  title: {
    th: "ดูแลผิว เริ่มจากการคุยกันให้เข้าใจ",
    en: "Skin care that starts with a proper conversation.",
  },
  body: {
    th: "ครั้งแรกที่มา คุณจะได้คุยกับแพทย์ 30 นาที และกลับบ้านพร้อมแผนดูแลผิวที่ชัดเจน แม้แผนนั้นจะเป็น “ยังไม่ต้องทำอะไร” ก็ตาม",
    en: "Your first visit is a 30-minute talk with a doctor. You leave with a clear plan — even if the plan is “you don't need a treatment”.",
  },
  cta: { th: "นัดปรึกษาแพทย์", en: "Book a consultation" },
  chipsLabel: { th: "กังวลเรื่องไหนอยู่", en: "What's bothering your skin?" },
  imageAlt: {
    th: "มือสองข้างถือกระปุกเจลบำรุงผิวสีฟ้าใส สวมเสื้อเชิ้ตสีขาว",
    en: "Two hands holding a small jar of clear blue gel against a white shirt",
  },
  insetAlt: {
    th: "ขวดเซรั่มแก้วสีชาวางบนแผ่นไม้ ข้างกิ่งยูคาลิปตัส",
    en: "A small amber serum bottle on a wooden board beside a eucalyptus sprig",
  },
  note: { th: "ไม่ขายคอร์สในครั้งแรก", en: "No course selling on your first visit" },
};

export const firstVisit = {
  title: { th: "ครั้งแรกที่มา เป็นแบบนี้", en: "What your first visit looks like" },
  steps: [
    {
      title: { th: "นัดเวลา", en: "Book a time" },
      body: { th: "ผ่านแบบฟอร์มหรือ LINE บอกเราสั้นๆ ว่ากังวลเรื่องอะไร", en: "Use the form or LINE and tell us briefly what's on your mind." },
    },
    {
      title: { th: "คุยกับแพทย์ 30 นาที", en: "30 minutes with a doctor" },
      body: { th: "ไม่เร่ง ไม่มีพนักงานขายร่วมห้อง ถามได้ทุกเรื่อง", en: "Unhurried, no sales staff in the room, ask anything." },
    },
    {
      title: { th: "รับแผนเป็นลายลักษณ์อักษร", en: "A written plan" },
      body: { th: "ทางเลือก ระยะเวลา และราคา เขียนไว้ให้ชัดเจน นำกลับไปคิดได้", en: "Options, timing and prices on paper, to take home and think about." },
    },
    {
      title: { th: "เริ่มเมื่อคุณพร้อม", en: "Start when you're ready" },
      body: { th: "วันเดียวกันหรือวันอื่นก็ได้ ไม่มีการกดดัน", en: "Same day or another day — there's no pressure either way." },
    },
  ],
};

export const treatmentsCopy = {
  title: { th: "การดูแลผิวที่เรามี", en: "Treatments we offer" },
  intro: {
    th: "เลือกเรื่องที่กังวลเพื่อดูทางเลือกที่แพทย์อาจแนะนำ ทุกการรักษาเริ่มจากการปรึกษาแพทย์ และผลลัพธ์ของแต่ละคนแตกต่างกัน",
    en: "Pick a concern to see the options a doctor may suggest. Every treatment starts with a consultation, and results differ from person to person.",
  },
  filterLabel: { th: "เรื่องที่กังวล", en: "Your concerns" },
  all: { th: "ดูทั้งหมด", en: "Show all" },
  count: { th: (n: number) => `${n} ทางเลือก`, en: (n: number) => `${n} option${n === 1 ? "" : "s"}` },
  facts: {
    length: { th: "ระยะเวลา", en: "Time" },
    downtime: { th: "พักฟื้น", en: "Downtime" },
    course: { th: "ความถี่", en: "How often" },
  },
  steps: { th: "สิ่งที่เกิดขึ้น", en: "What happens" },
  tellUs: { th: "บอกเราก่อน", en: "Tell us first" },
  price: {
    th: "ราคาแจ้งหลังปรึกษาแพทย์ เมื่อรู้แล้วว่าคุณต้องการอะไรจริงๆ",
    en: "Priced after your consultation, once we know what you actually need.",
  },
  addToConsult: { th: "เพิ่มเรื่องนี้ในการนัดปรึกษา", en: "Add these concerns to my booking" },
  added: { th: "เพิ่มในแบบฟอร์มนัดหมายแล้ว", en: "Added to the booking form" },
  disclaimer: {
    th: "ข้อมูลนี้เป็นข้อมูลทั่วไป ไม่ใช่คำแนะนำทางการแพทย์ แพทย์จะประเมินความเหมาะสมกับคุณเป็นรายบุคคล",
    en: "General information, not medical advice. A doctor will assess what's suitable for you individually.",
  },
};

export const promises = {
  title: { th: "สิ่งที่เราถือเป็นหลัก", en: "How we look after you" },
  items: [
    {
      title: { th: "บอกตรงๆ ถ้าไม่จำเป็น", en: "We'll say if you don't need it" },
      body: { th: "บางครั้งคำแนะนำที่ดีที่สุดคือกันแดดที่เหมาะสมและครีมบำรุงหนึ่งตัว", en: "Sometimes the best advice is the right sunscreen and one good moisturiser." },
    },
    {
      title: { th: "ไม่มีคอร์สจ่ายล่วงหน้าในครั้งแรก", en: "No prepaid courses on day one" },
      body: { th: "คุณจ่ายเฉพาะสิ่งที่ทำในวันนั้น", en: "You pay only for what's done that day." },
    },
    {
      title: { th: "ราคาเขียนไว้ก่อนเริ่มเสมอ", en: "Prices in writing, before anything starts" },
      body: { th: "ไม่มีค่าใช้จ่ายเพิ่มที่มาบอกทีหลัง", en: "No extras added at the counter afterwards." },
    },
    {
      title: { th: "สะอาดและปลอดเชื้อ", en: "Clean, every time" },
      body: { th: "หัวเครื่องมือแบบใช้ครั้งเดียว และอุปกรณ์ผ่านการฆ่าเชื้อทุกครั้ง", en: "Single-use tips and sterilised instruments for every client." },
    },
  ],
  imageAlt: {
    th: "แพทย์สวมถุงมือทำทรีตเมนต์ผิวหน้าให้ผู้รับบริการที่นอนหลับตา",
    en: "A gloved practitioner treating the face of a client lying with eyes closed",
  },
};

export const doctors = {
  title: { th: "แพทย์ของเรา", en: "Our doctors" },
  intro: {
    th: "ในเว็บไซต์จริง ส่วนนี้จะแสดงชื่อ รูป เลขที่ใบอนุญาตประกอบวิชาชีพเวชกรรม และการฝึกอบรมของแพทย์แต่ละท่าน",
    en: "On a live site this shows each doctor's name, photo, Thai medical licence number and training.",
  },
  placeholderTag: { th: "ข้อมูลตัวอย่าง", en: "Placeholder" },
  slots: [
    {
      role: { th: "แพทย์ผู้ดูแลคลินิก", en: "Clinic director" },
      lines: {
        th: ["[ชื่อแพทย์]", "ใบอนุญาตเลขที่ ว. [—]", "[การฝึกอบรมด้านผิวหนัง]"],
        en: ["[Doctor's name]", "Licence no. ว. [—]", "[Dermatology training]"],
      },
    },
    {
      role: { th: "แพทย์ประจำคลินิก", en: "Clinic doctor" },
      lines: {
        th: ["[ชื่อแพทย์]", "ใบอนุญาตเลขที่ ว. [—]", "[ภาษาที่สื่อสารได้]"],
        en: ["[Doctor's name]", "Licence no. ว. [—]", "[Languages spoken]"],
      },
    },
  ],
  note: {
    th: "เราไม่แสดงชื่อหรือคุณวุฒิสมมติ เพราะผู้ป่วยควรตรวจสอบข้อมูลแพทย์ได้จริง",
    en: "We don't invent names or credentials: patients should be able to verify a real doctor.",
  },
};

export const visit = {
  title: { th: "มาที่คลินิก", en: "Visiting the clinic" },
  address: {
    th: "ที่อยู่ตัวอย่าง — ย่านเอกมัย สุขุมวิท 63 (คลินิกสมมติ ไม่มีที่ตั้งจริง)",
    en: "Demo address — Ekkamai, Sukhumvit 63 (fictional clinic, no real location)",
  },
  transit: {
    th: "เดินจาก BTS เอกมัยประมาณ 5–8 นาที",
    en: "About a 5–8 minute walk from BTS Ekkamai",
  },
  hoursTitle: { th: "เวลาทำการ (ตัวอย่าง)", en: "Opening hours (example)" },
  hours: [
    { days: { th: "อังคาร – ศุกร์", en: "Tue – Fri" }, time: "11:00 – 20:00" },
    { days: { th: "เสาร์ – อาทิตย์", en: "Sat – Sun" }, time: "10:00 – 18:00" },
    { days: { th: "จันทร์", en: "Mon" }, time: { th: "ปิด", en: "Closed" } },
  ],
  line: { th: "ทัก LINE", en: "Message on LINE" },
  notConnected: { th: "ยังไม่ได้เชื่อมต่อในเว็บไซต์ตัวอย่าง", en: "not connected in this demo" },
};

export const faqs: { q: L; a: L }[] = [
  {
    q: { th: "การปรึกษาแพทย์มีค่าใช้จ่ายไหม", en: "Is there a fee for the consultation?" },
    a: {
      th: "มีค่าปรึกษาแพทย์ ซึ่งจะแจ้งให้ทราบตอนนัดหมาย และคุณไม่มีข้อผูกมัดที่จะต้องทำทรีตเมนต์ต่อ",
      en: "Yes. The consultation fee is confirmed when you book, and you're under no obligation to have a treatment afterwards.",
    },
  },
  {
    q: { th: "ทำไมไม่แสดงราคาบนเว็บไซต์", en: "Why aren't prices on the website?" },
    a: {
      th: "ราคาขึ้นกับสิ่งที่ผิวคุณต้องการจริง เราจึงเขียนราคาให้หลังปรึกษา แทนการโฆษณาโปรโมชั่นที่อาจไม่เหมาะกับคุณ",
      en: "Because the right price depends on what your skin actually needs. We write it down after the consultation instead of advertising deals that may not suit you.",
    },
  },
  {
    q: { th: "พูดภาษาอังกฤษได้ไหม", en: "Do you speak English?" },
    a: {
      th: "ได้ ระบุภาษาที่ต้องการตอนนัดหมาย แผนดูแลผิวเขียนได้ทั้งภาษาไทยและภาษาอังกฤษ",
      en: "Yes. Choose your language when you book; written plans can be in Thai or English.",
    },
  },
  {
    q: { th: "มาช่วงพักกลางวันได้ไหม", en: "Can I come in a lunch break?" },
    a: {
      th: "ได้สำหรับการปรึกษาและทรีตเมนต์สั้นๆ เลือกช่วงเวลา “กลางวัน” ในแบบฟอร์มได้เลย",
      en: "For consultations and shorter treatments, yes — pick “Midday” in the form.",
    },
  },
  {
    q: { th: "ต้องเตรียมตัวอย่างไร", en: "How should I prepare?" },
    a: {
      th: "มาแบบไม่แต่งหน้าหรือแต่งน้อย และนำผลิตภัณฑ์ที่ใช้อยู่มาด้วยหรือถ่ายรูปฉลากไว้ ไม่ต้องส่งรูปหรือประวัติการรักษามาทางออนไลน์",
      en: "Come with little or no make-up and bring your current products, or photos of the labels. There's no need to send photos or medical history online.",
    },
  },
  {
    q: { th: "รับผู้ป่วยอายุต่ำกว่า 18 ปีไหม", en: "Do you see patients under 18?" },
    a: {
      th: "รับ โดยต้องมีผู้ปกครองมาด้วยในวันนัด",
      en: "Yes, with a parent or guardian present at the appointment.",
    },
  },
];

export const form = {
  title: { th: "นัดปรึกษาแพทย์", en: "Book a consultation" },
  intro: {
    th: "บอกเราว่ากังวลเรื่องอะไรและสะดวกช่วงไหน เราจะติดต่อกลับเพื่อยืนยันเวลา",
    en: "Tell us what's on your mind and when suits you. We'll get back to you to confirm a time.",
  },
  demoMode: {
    th: "โหมดตัวอย่าง: แบบฟอร์มนี้ตรวจสอบข้อมูลและแสดงตัวอย่างคำขอ แต่ไม่มีการนัดหมายจริงและไม่ได้ส่งข้อมูลไปที่ใด",
    en: "Demo mode: this form checks your answers and previews the request, but no appointment is made and nothing is sent.",
  },
  privacy: {
    th: "กรุณาอย่าส่งรูปถ่ายหรือประวัติการรักษามาทางนี้ แพทย์จะสอบถามเองในวันนัด ข้อมูลที่ส่งมาใช้เพื่อนัดหมายเท่านั้น ตามหลัก PDPA",
    en: "Please don't send photos or medical history here — the doctor will ask in person. Your details are used only to arrange the appointment, in line with Thailand's PDPA.",
  },
  required: { th: "จำเป็น", en: "required" },
  optional: { th: "ไม่บังคับ", en: "optional" },
  fields: {
    concerns: { th: "เรื่องที่อยากปรึกษา", en: "What would you like to talk about?" },
    firstTime: { th: "เคยมาคลินิกนี้หรือยัง", en: "Have you visited before?" },
    days: { th: "วันที่สะดวก", en: "Days that suit you" },
    time: { th: "ช่วงเวลาที่สะดวก", en: "Time of day" },
    name: { th: "ชื่อ", en: "Your name" },
    method: { th: "ให้ติดต่อกลับทาง", en: "How should we reply?" },
    lineId: { th: "LINE ID", en: "LINE ID" },
    phone: { th: "เบอร์โทรศัพท์", en: "Phone number" },
    email: { th: "อีเมล", en: "Email" },
    language: { th: "ภาษาที่ต้องการ", en: "Preferred language" },
    consent: {
      th: "ยินยอมให้คลินิกใช้ข้อมูลนี้เพื่อติดต่อเรื่องนัดหมายเท่านั้น",
      en: "I agree the clinic may use these details only to arrange my appointment.",
    },
  },
  firstTimeOptions: { yes: { th: "ครั้งแรก", en: "First time" }, no: { th: "เคยมาแล้ว", en: "Been before" } },
  dayOptions: { weekday: { th: "วันธรรมดา", en: "Weekdays" }, weekend: { th: "เสาร์–อาทิตย์", en: "Weekends" }, any: { th: "วันไหนก็ได้", en: "Any day" } },
  timeOptions: {
    morning: { th: "เช้า", en: "Morning" },
    midday: { th: "กลางวัน", en: "Midday" },
    evening: { th: "หลังเลิกงาน", en: "After work" },
  },
  methods: { line: { th: "LINE", en: "LINE" }, phone: { th: "โทรศัพท์", en: "Phone" }, email: { th: "อีเมล", en: "Email" } },
  languages: { th: { th: "ไทย", en: "Thai" }, en: { th: "อังกฤษ", en: "English" } },
  submitDemo: { th: "ตรวจสอบและดูตัวอย่าง", en: "Check and preview" },
  submit: { th: "ส่งคำขอนัดหมาย", en: "Send request" },
  sending: { th: "กำลังส่ง…", en: "Sending…" },
  errors: {
    summary: { th: "กรุณาตรวจสอบข้อมูลต่อไปนี้", en: "Please check the following" },
    concerns: { th: "เลือกอย่างน้อยหนึ่งเรื่อง", en: "Choose at least one topic" },
    days: { th: "เลือกวันที่สะดวก", en: "Choose which days suit you" },
    time: { th: "เลือกช่วงเวลา", en: "Choose a time of day" },
    name: { th: "ใส่ชื่อที่ให้เราเรียก", en: "Enter a name we can use" },
    method: { th: "เลือกช่องทางติดต่อกลับ", en: "Choose how we should reply" },
    lineId: { th: "ใส่ LINE ID ให้ถูกต้อง", en: "Enter a valid LINE ID" },
    phone: { th: "ใส่เบอร์โทรไทย 9–10 หลัก ขึ้นต้นด้วย 0", en: "Enter a Thai number: 9–10 digits starting with 0" },
    email: { th: "ใส่อีเมลให้ถูกรูปแบบ", en: "Enter a valid email address" },
    consent: { th: "กรุณายืนยันการยินยอม", en: "Please confirm consent" },
  },
  preview: {
    title: { th: "ตัวอย่างเท่านั้น — ยังไม่มีการนัดหมาย", en: "Preview only — no appointment was made" },
    body: {
      th: "นี่คือเว็บไซต์ตัวอย่าง ถ้าเป็นคลินิกจริง คำขอนี้จะถูกส่งถึงคลินิก และเจ้าหน้าที่จะติดต่อกลับเพื่อยืนยันเวลา",
      en: "This is a demo website. At a real clinic this request would reach the front desk, who would contact you to confirm a time.",
    },
    edit: { th: "กลับไปแก้ไข", en: "Edit request" },
  },
  sent: {
    title: { th: "ได้รับคำขอแล้ว", en: "Request received" },
    body: { th: "เราจะติดต่อกลับเพื่อยืนยันเวลานัด", en: "We'll be in touch to confirm your appointment time." },
  },
  failed: {
    th: "ส่งไม่สำเร็จ ข้อมูลยังอยู่ในแบบฟอร์ม กรุณาลองอีกครั้ง",
    en: "That didn't go through. Your answers are still here — please try again.",
  },
};

export const footer = {
  disclaimer: {
    th: "ข้อมูลในเว็บไซต์นี้เป็นข้อมูลทั่วไป ไม่ใช่คำแนะนำทางการแพทย์ ผลการรักษาแตกต่างกันในแต่ละบุคคล",
    en: "Information on this site is general, not medical advice. Results vary from person to person.",
  },
  credits: {
    th: "ภาพประกอบจาก Unsplash ใช้เพื่อประกอบแนวคิดเท่านั้น ไม่ใช่ผู้ป่วยหรือบุคลากรของคลินิก",
    en: "Photography from Unsplash, used for illustration only — not the clinic's patients or staff.",
  },
  builtBy: { th: "ออกแบบและพัฒนาเป็นงานตัวอย่างโดย", en: "Designed and built as a concept by" },
  back: { th: "กลับไปหน้าผลงาน Klickdoe", en: "Back to the Klickdoe portfolio" },
};
