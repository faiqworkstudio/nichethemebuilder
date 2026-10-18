import type { L } from "@/lib/i18n";
import type { BudgetBand } from "./projects";

/**
 * All Sen Studio page copy, Thai and English side by side so both versions
 * can be reviewed together. Sen Studio is fictional; studio "policies" below
 * describe how the concept business would work, not claims about a real firm.
 */

export const meta = {
  title: {
    th: "เส้น สตูดิโอ — ออกแบบตกแต่งภายในและรีโนเวท กรุงเทพฯ (เว็บไซต์ตัวอย่าง)",
    en: "Sen Studio — Interior design & renovation, Bangkok (concept demo)",
  },
  description: {
    th: "ออกแบบและรีโนเวทคอนโด ทาวน์เฮาส์ และออฟฟิศขนาดเล็กในกรุงเทพฯ แบบละเอียด ใบเสนอราคาแยกรายการ หัวหน้าหน้างานคนเดียวตั้งแต่สำรวจจนส่งมอบ — เว็บไซต์ตัวอย่างโดย Klickdoe",
    en: "Design-and-build renovation for Bangkok condos, townhouses and small offices: full drawings, itemised quotes and one site lead from survey to handover. A concept demo by Klickdoe.",
  },
} satisfies Record<string, L>;

export const demoNotice: L = {
  th: "เว็บไซต์ตัวอย่างโดย Klickdoe — เส้น สตูดิโอเป็นธุรกิจสมมติ ผลงานเป็นงานออกแบบแนวคิด และแบบฟอร์มไม่ได้ส่งข้อมูลจริง",
  en: "Concept demo by Klickdoe — Sen Studio is fictional, projects are design concepts, and the form does not send anything.",
};

export const nav = {
  skip: { th: "ข้ามไปยังเนื้อหา", en: "Skip to content" },
  label: { th: "เมนูหลัก", en: "Main navigation" },
  items: [
    { id: "projects", th: "ผลงาน", en: "Projects" },
    { id: "services", th: "บริการ", en: "Services" },
    { id: "studio", th: "สตูดิโอ", en: "Studio" },
    { id: "process", th: "ขั้นตอน", en: "Process" },
    { id: "faq", th: "คำถาม", en: "FAQ" },
  ],
  cta: { th: "ส่งรายละเอียดงาน", en: "Start a project" },
  langLabel: { th: "เปลี่ยนภาษา", en: "Change language" },
};

export const hero = {
  kicker: { th: "ออกแบบตกแต่งภายในและรีโนเวท · กรุงเทพฯ", en: "Interior design & renovation · Bangkok" },
  title: {
    th: "เขียนแบบให้ครบก่อน แล้วสร้างโดยทีมเดียวกับที่ออกแบบ",
    en: "Renovations drawn in full, then built by the team that drew them.",
  },
  body: {
    th: "เส้น สตูดิโอ ออกแบบและรีโนเวทคอนโด ทาวน์เฮาส์ และออฟฟิศขนาดเล็กในกรุงเทพฯ คุณจะได้แบบที่วัดจากหน้างานจริง ใบเสนอราคาแยกรายการ และหัวหน้าหน้างานคนเดียวดูแลตั้งแต่วันสำรวจจนวันส่งมอบ",
    en: "Sen Studio designs and renovates condos, townhouses and small offices across Bangkok. You get drawings measured on site, a quote itemised line by line, and one site lead from the first survey to handover.",
  },
  cta: { th: "นัดสำรวจหน้างาน", en: "Book a site survey" },
  imageCaption: { th: "แนวคิด 01 · ทาวน์เฮาส์อารีย์ ห้องนอนชั้นสาม", en: "Concept 01 · Ari townhouse, third-floor bedroom" },
  titleBlock: [
    { label: { th: "พื้นที่ให้บริการ", en: "Works in" }, value: { th: "กรุงเทพฯ นนทบุรี สมุทรปราการ", en: "Bangkok, Nonthaburi, Samut Prakan" } },
    { label: { th: "ประเภทงาน", en: "Projects" }, value: { th: "คอนโด · ทาวน์เฮาส์ · ออฟฟิศขนาดเล็ก", en: "Condos · Townhouses · Small offices" } },
    { label: { th: "ขนาดงาน", en: "Typical size" }, value: { th: "35–300 ตร.ม.", en: "35–300 m²" } },
    { label: { th: "เว็บไซต์นี้", en: "This website" }, value: { th: "ตัวอย่างงานออกแบบโดย Klickdoe", en: "Concept demo by Klickdoe" } },
  ],
};

export const sections = {
  projects: {
    sheet: "A-01",
    title: { th: "ผลงานที่คัดมา", en: "Selected projects" },
    intro: {
      th: "โปรเจกต์แนวคิด 5 งาน แสดงลักษณะงานที่สตูดิโอรับ เลือกดูตามประเภท แล้วเปิดอ่านโจทย์ ขอบเขตงาน และวัสดุที่ใช้",
      en: "Five concept projects showing the kind of work the studio takes on. Filter by type, then open one for the brief, scope and materials.",
    },
    filterLabel: { th: "กรองตามประเภท", en: "Filter by type" },
    all: { th: "ทั้งหมด", en: "All" },
    cols: {
      no: { th: "ลำดับ", en: "No." },
      project: { th: "โปรเจกต์", en: "Project" },
      location: { th: "ทำเล", en: "Location" },
      type: { th: "ประเภท", en: "Type" },
      area: { th: "พื้นที่", en: "Area" },
    },
    concept: { th: "งานออกแบบแนวคิด", en: "Concept project" },
    open: { th: "เปิดดูโปรเจกต์", en: "View project" },
    count: { th: (n: number) => `แสดง ${n} โปรเจกต์`, en: (n: number) => `Showing ${n} project${n === 1 ? "" : "s"}` },
  },
  services: {
    sheet: "A-02",
    title: { th: "บริการ", en: "Services" },
    intro: {
      th: "ทุกบริการเริ่มจากการสำรวจหน้างาน ระยะเวลาด้านล่างเป็นช่วงเวลาทำงานหน้างานโดยประมาณ หลังอนุมัติแบบแล้ว",
      en: "Every service starts with a site survey. Durations below are typical time on site, after drawings are approved.",
    },
    cols: {
      service: { th: "บริการ", en: "Service" },
      included: { th: "สิ่งที่รวมอยู่", en: "What's included" },
      duration: { th: "ระยะเวลา", en: "Duration" },
    },
  },
  studio: {
    sheet: "A-03",
    title: { th: "วิธีทำงานของสตูดิโอ", en: "How the studio works" },
    lead: {
      th: "ปัญหางานรีโนเวทส่วนใหญ่เริ่มจากแบบที่ไม่ละเอียดและใบเสนอราคาแบบเหมารวม เราจึงทำกลับกัน",
      en: "Most renovation problems start with a vague drawing and a lump-sum quote. We work the other way round.",
    },
    imageAlt: {
      th: "ช่างไม้สวมหมวกนิรภัยกำลังวัดและตัดไม้บนโต๊ะในโรงงาน",
      en: "Carpenter in a hard hat measuring and cutting timber on a workshop bench",
    },
    rolesTitle: { th: "คนที่คุณจะทำงานด้วย", en: "Who you'll work with" },
    rolesNote: {
      th: "แสดงเป็นบทบาทเท่านั้น เพราะเส้น สตูดิโอเป็นสตูดิโอสมมติ",
      en: "Shown as roles only — Sen Studio is a concept studio.",
    },
  },
  process: {
    sheet: "A-04",
    title: { th: "จากข้อความแรกจนถึงวันส่งมอบ", en: "From first message to handover" },
    youGet: { th: "สิ่งที่คุณได้รับ", en: "You receive" },
    expectTitle: { th: "เรื่องที่ควรรู้ก่อนเริ่มงาน", en: "Good to know before work starts" },
  },
  quote: {
    sheet: "A-05",
    title: { th: "ประเมินงบและส่งรายละเอียดงาน", en: "Plan a budget, then tell us about the project" },
  },
  faq: {
    sheet: "A-06",
    title: { th: "คำถามที่พบบ่อย", en: "Questions" },
  },
};

export const services: { name: L; summary: L; included: L<string[]>; duration: L }[] = [
  {
    name: { th: "รีโนเวทคอนโด", en: "Condo renovation" },
    summary: {
      th: "รีโนเวททั้งห้องหรือบางส่วน รวมถึงประสานเอกสารกับนิติบุคคลอาคาร",
      en: "Full or partial renovation of an existing unit, including the paperwork with your building's juristic office.",
    },
    included: {
      th: ["สำรวจและวัดหน้างาน", "แบบผังและภาพ 3D", "แบบไฟฟ้าและแสงสว่าง", "เฟอร์นิเจอร์บิวท์อิน", "ควบคุมงานหน้างาน"],
      en: ["Survey and measured drawings", "Layouts and 3D views", "Electrical and lighting plan", "Built-in furniture", "Site management"],
    },
    duration: { th: "8–14 สัปดาห์", en: "8–14 weeks" },
  },
  {
    name: { th: "ปรับปรุงทาวน์เฮาส์และบ้าน", en: "Townhouse & house refurbishment" },
    summary: {
      th: "สำหรับบ้านเก่าที่ต้องแก้มากกว่าผิวหน้า เช่น ความร้อน น้ำรั่วซึม ระบบไฟ บันได และแสงธรรมชาติ",
      en: "For older homes that need more than new finishes: heat, leaks, wiring, stairs and daylight.",
    },
    included: {
      th: ["ตรวจสภาพบ้าน", "หลังคาและกันซึม", "วิศวกรโครงสร้างตรวจเมื่อมีการรื้อผนัง", "งานระบบไฟฟ้าและประปาใหม่", "งานตกแต่งภายใน"],
      en: ["Condition survey", "Roof and waterproofing", "Structural engineer review when walls move", "New electrical and plumbing", "Interiors"],
    },
    duration: { th: "12–24 สัปดาห์", en: "12–24 weeks" },
  },
  {
    name: { th: "ตกแต่งออฟฟิศ", en: "Office fit-out" },
    summary: {
      th: "ออฟฟิศและสตูดิโอขนาดประมาณ 80–400 ตร.ม. วางผังจากวิธีทำงานจริงของทีม",
      en: "Offices and studios of roughly 80–400 m², planned around how your team actually works.",
    },
    included: {
      th: ["วางผังพื้นที่", "ห้องประชุมและงานอะคูสติก", "ผังปลั๊กและสายสัญญาณ", "แบบยื่นขออนุญาตกับอาคาร", "ทำงานกลางคืนหรือวันหยุดตามที่อาคารกำหนด"],
      en: ["Space planning", "Meeting rooms and acoustics", "Power and data layout", "Building approval drawings", "Night or weekend work where the building requires it"],
    },
    duration: { th: "6–12 สัปดาห์", en: "6–12 weeks" },
  },
  {
    name: { th: "ห้องครัวและห้องน้ำ", en: "Kitchens & bathrooms" },
    summary: {
      th: "งานเฉพาะห้อง ทำระบบประปา กันซึม และระบายอากาศให้ถูกต้องตั้งแต่ต้น",
      en: "Single-room projects with the plumbing, waterproofing and ventilation done properly.",
    },
    included: {
      th: ["วางผังและเลือกสุขภัณฑ์", "กันซึมพร้อมทดสอบขังน้ำ 48 ชั่วโมง", "ตู้และงานไม้บิวท์อิน", "งานกระเบื้อง"],
      en: ["Layout and fixture selection", "Waterproofing with a 48-hour flood test", "Cabinetry and joinery", "Tiling"],
    },
    duration: { th: "3–6 สัปดาห์", en: "3–6 weeks" },
  },
  {
    name: { th: "ออกแบบอย่างเดียว", en: "Design only" },
    summary: {
      th: "แบบก่อสร้างและ BOQ ที่นำไปให้ผู้รับเหมารายใดก็ได้เสนอราคา",
      en: "Drawings and a bill of quantities you can take to any contractor.",
    },
    included: {
      th: ["วัดหน้างาน", "ชุดแบบก่อสร้าง", "ตารางวัสดุ", "BOQ", "เข้าตรวจหน้างานระหว่างก่อสร้าง 2 ครั้ง"],
      en: ["Measured survey", "Construction drawing set", "Material schedule", "Bill of quantities", "Two site visits during construction"],
    },
    duration: { th: "ออกแบบ 4–6 สัปดาห์", en: "4–6 weeks of design" },
  },
];

export const principles: { title: L; body: L }[] = [
  {
    title: { th: "แบบก่อน ราคาทีหลัง", en: "Drawings before prices" },
    body: {
      th: "เราเสนอราคาจากชุดแบบที่ครบ ทุกบรรทัดในใบเสนอราคาจึงอ้างอิงกลับไปที่แบบได้",
      en: "We quote from a full drawing set, so every line in the quote points back to something on a drawing.",
    },
  },
  {
    title: { th: "หัวหน้าหน้างานคนเดียว", en: "One site lead" },
    body: {
      th: "คนเดียวกันดูแลตั้งแต่วันรื้อถอนจนวันส่งมอบ และเป็นคนที่ตอบข้อความ LINE ของคุณ",
      en: "The same person runs your site from demolition to handover, and is the one who answers your LINE messages.",
    },
  },
  {
    title: { th: "งานไม้ทำเอง", en: "Built-ins made, not ordered" },
    body: {
      th: "ตู้และบิวท์อินทำโดยทีมช่างไม้ของสตูดิโอ รายละเอียดในแบบจึงเป็นรายละเอียดที่ได้จริงในห้อง",
      en: "Cabinetry is built by the studio's own carpentry team, so the details on the drawing are the details in the room.",
    },
  },
  {
    title: { th: "บอกปัญหาของอาคารตั้งแต่แรก", en: "Straight about the building" },
    body: {
      th: "ระบบไฟเก่า น้ำรั่วซึมที่ซ่อนอยู่ และกฎของคอนโด เราแจ้งตั้งแต่วันสำรวจ ไม่ใช่มาเจอกลางงาน",
      en: "Old wiring, hidden leaks and condo rules are raised at the survey, not discovered halfway through.",
    },
  },
];

export const roles: { role: L; does: L }[] = [
  { role: { th: "นักออกแบบ", en: "Designer" }, does: { th: "ผัง วัสดุ และแบบก่อสร้าง", en: "Layout, materials and drawings" } },
  { role: { th: "หัวหน้าหน้างาน", en: "Site lead" }, does: { th: "ตารางงาน ทีมช่าง และอัปเดตทุกสัปดาห์", en: "Schedule, trades and weekly updates" } },
  { role: { th: "ทีมช่างไม้", en: "Carpentry team" }, does: { th: "เฟอร์นิเจอร์บิวท์อินทั้งหมด", en: "All built-in furniture" } },
  { role: { th: "วิศวกร (ภายนอก)", en: "Engineers (external)" }, does: { th: "ตรวจรับรองงานโครงสร้างและงานระบบเมื่อจำเป็น", en: "Structural and M&E sign-off when required" } },
];

export const steps: { title: L; body: L; output: L }[] = [
  {
    title: { th: "พูดคุยเบื้องต้น", en: "Conversation" },
    body: {
      th: "เล่าเรื่องพื้นที่ งบประมาณ และช่วงเวลา เราจะถามรายละเอียดเพิ่ม ถ้างานเหมาะกับเรา จะนัดวันสำรวจ",
      en: "Tell us about the space, budget and timing. We reply with questions and, if it's a fit, offer a survey date.",
    },
    output: { th: "วันนัดสำรวจหน้างาน", en: "A survey appointment" },
  },
  {
    title: { th: "สำรวจหน้างาน", en: "Site survey" },
    body: {
      th: "วัดพื้นที่ ถ่ายภาพ ตรวจระบบไฟ ประปา และกฎการรีโนเวทของอาคาร",
      en: "We measure, photograph, and check the wiring, plumbing and your building's renovation rules.",
    },
    output: { th: "บันทึกสำรวจและผังวัดจริง", en: "Survey notes and a measured plan" },
  },
  {
    title: { th: "แบบร่างแนวคิด", en: "Concept design" },
    body: {
      th: "ผังสองทางเลือก แนวทางวัสดุ และช่วงงบประมาณ ก่อนเริ่มเขียนแบบละเอียด",
      en: "Two layout options, a material direction and a budget range before detailed drawing starts.",
    },
    output: { th: "ผัง แนวทางวัสดุ และช่วงงบ", en: "Layouts, materials, budget range" },
  },
  {
    title: { th: "แบบก่อสร้างและใบเสนอราคา", en: "Drawings & quote" },
    body: {
      th: "ชุดแบบก่อสร้างครบ พร้อมใบเสนอราคาแยกตามหมวดงานและห้อง",
      en: "A full construction drawing set and a quote broken down by trade and by room.",
    },
    output: { th: "ชุดแบบและใบเสนอราคาแยกรายการ", en: "Drawing set and itemised quote" },
  },
  {
    title: { th: "ก่อสร้าง", en: "Build" },
    body: {
      th: "รายงานหน้างานทุกสัปดาห์พร้อมภาพ งวดเงินผูกกับงานที่เสร็จจริง ไม่ใช่ตามวันที่",
      en: "A weekly site report with photos. Payments are tied to finished stages, not calendar dates.",
    },
    output: { th: "รายงานประจำสัปดาห์", en: "Weekly reports" },
  },
  {
    title: { th: "ส่งมอบงาน", en: "Handover" },
    body: {
      th: "เดินตรวจพร้อมรายการแก้ไข แก้งานให้เรียบร้อย มอบแบบตามสร้างจริง และรับประกันงานฝีมือ 1 ปี",
      en: "A walk-through with a snag list, fixes, as-built drawings and a one-year workmanship warranty.",
    },
    output: { th: "แบบตามสร้างจริงและใบรับประกัน", en: "As-built drawings and warranty" },
  },
];

export const expectations: L[] = [
  {
    th: "คอนโดส่วนใหญ่ในกรุงเทพฯ อนุญาตงานที่มีเสียงดังเฉพาะวันธรรมดาในช่วงเวลาที่กำหนด เราวางตารางงานตามกฎของอาคารคุณ",
    en: "Most Bangkok condominiums only allow noisy work on weekdays within set hours. We schedule around your building's rules.",
  },
  {
    th: "อาคารมักขอเงินประกันความเสียหายและแบบก่อนเริ่มงาน เราเตรียมแบบและเอกสารยื่นนิติบุคคลให้",
    en: "Buildings usually ask for a damage deposit and drawings before work starts. We prepare the drawings and the juristic office paperwork.",
  },
  {
    th: "ถ้าคุณยังอยู่อาศัยระหว่างก่อสร้าง เราจะกั้นโซนกันฝุ่นและตกลงวันงานเงียบร่วมกัน",
    en: "If you're living in the home during the works, we seal off dust zones and agree quiet days with you.",
  },
];

export const processImages = {
  drawing: {
    th: "มือกำลังเขียนแบบด้วยดินสอบนกระดาษแบบแปลน พร้อมไม้บรรทัด",
    en: "A hand drawing on a plan sheet with pencil and scale ruler",
  },
  stripout: {
    th: "หน้างานระหว่างรื้อถอน ผนังอิฐเปลือย ค้ำยันไม้ และช่างกำลังทำงาน",
    en: "A site mid-demolition with exposed brick, timber props and a worker on a ladder",
  },
};

export const faqs: { q: L; a: L }[] = [
  {
    q: { th: "รับงานเล็กไหม", en: "Do you take small jobs?" },
    a: {
      th: "รับงานห้องครัวหรือห้องน้ำห้องเดียวที่ใช้เวลาประมาณ 3 สัปดาห์ขึ้นไป ถ้าเป็นงานเล็กกว่านั้น เช่น เปลี่ยนก๊อกน้ำหรือตู้ใบเดียว ช่างซ่อมทั่วไปจะเร็วและประหยัดกว่า",
      en: "Yes — single kitchens and bathrooms of roughly three weeks' work and up. For anything smaller, like replacing a tap or one cabinet, a general handyman will be quicker and cheaper.",
    },
  },
  {
    q: { th: "สำรวจหน้างานมีค่าใช้จ่ายไหม", en: "Is the site survey charged?" },
    a: {
      th: "การสำรวจครั้งแรกในเขตกรุงเทพฯ ไม่มีค่าใช้จ่าย นอกเขตกรุงเทพฯ จะแจ้งค่าเดินทางก่อนนัด",
      en: "The first survey inside Bangkok is free. Outside Bangkok we confirm a travel charge before booking.",
    },
  },
  {
    q: { th: "แบ่งจ่ายเงินอย่างไร", en: "How do payments work?" },
    a: {
      th: "ค่าออกแบบแบ่งจ่าย 2 งวด ส่วนค่าก่อสร้างแบ่งเป็นงวดตามงานที่เสร็จจริง เช่น รื้อถอนเสร็จ ติดตั้งบิวท์อินเสร็จ และส่งมอบงาน แต่ละงวดเรียกเก็บหลังคุณตรวจงานแล้ว",
      en: "The design fee is paid in two parts. Construction is paid in stages linked to finished work — for example demolition complete, built-ins installed, handover — and each stage is invoiced after you've inspected it.",
    },
  },
  {
    q: { th: "ใช้ผู้รับเหมาของตัวเองได้ไหม", en: "Can I use my own contractor?" },
    a: {
      th: "ได้ เลือกบริการออกแบบอย่างเดียว คุณจะได้ชุดแบบและ BOQ ไปให้ผู้รับเหมาเสนอราคา และเราเข้าตรวจหน้างาน 2 ครั้งระหว่างก่อสร้าง",
      en: "Yes. Choose the design-only service: you get the drawing set and bill of quantities to tender, and we visit site twice during construction.",
    },
  },
  {
    q: { th: "สื่อสารเป็นภาษาอังกฤษได้ไหม", en: "Can we work in English?" },
    a: {
      th: "ได้ แบบและใบเสนอราคาออกได้ทั้งภาษาไทยและภาษาอังกฤษ และหัวหน้าหน้างานจะเปิดกลุ่ม LINE ร่วมกับคุณ",
      en: "Yes. Drawings and quotes can be issued in Thai or English, and your site lead sets up a shared LINE group with you.",
    },
  },
  {
    q: { th: "รับประกันอะไรบ้าง", en: "What does the warranty cover?" },
    a: {
      th: "รับประกันงานฝีมือ 1 ปี ครอบคลุมงานบิวท์อิน กระเบื้อง กันซึม และงานติดตั้งไฟฟ้า ส่วนเครื่องใช้ไฟฟ้าและสุขภัณฑ์เป็นไปตามการรับประกันของผู้ผลิต",
      en: "One year on workmanship: built-ins, tiling, waterproofing and electrical installation. Appliances and fittings are covered by the manufacturer's warranty.",
    },
  },
];

/* ---------- Budget planner ---------- */

export type PlannerType = "condo" | "house" | "office";
export type PlannerScope = "refresh" | "full" | "design";

/** Illustrative THB-per-m² ranges for the demo. Not a pricing claim. */
export const plannerRates: Record<PlannerType, Record<PlannerScope, [number, number]>> = {
  condo: { refresh: [8000, 14000], full: [18000, 32000], design: [1200, 2000] },
  house: { refresh: [7000, 12000], full: [15000, 28000], design: [1000, 1800] },
  office: { refresh: [6000, 10000], full: [12000, 22000], design: [900, 1500] },
};

export const planner = {
  title: { th: "ประเมินงบเบื้องต้น", en: "Rough budget planner" },
  intro: {
    th: "ใส่ประเภทงาน พื้นที่ และขอบเขต เพื่อดูช่วงงบโดยประมาณก่อนคุยกัน",
    en: "Pick a project type, area and scope to see a ballpark range before we talk.",
  },
  type: { th: "ประเภทพื้นที่", en: "Space" },
  types: { condo: { th: "คอนโด", en: "Condo" }, house: { th: "ทาวน์เฮาส์ / บ้าน", en: "Townhouse / house" }, office: { th: "ออฟฟิศ", en: "Office" } },
  area: { th: "พื้นที่ (ตร.ม.)", en: "Area (m²)" },
  scope: { th: "ขอบเขตงาน", en: "Scope" },
  scopes: {
    refresh: { th: "ปรับปรุงเบา", en: "Light refresh" },
    full: { th: "รีโนเวททั้งหมด", en: "Full renovation" },
    design: { th: "ออกแบบอย่างเดียว", en: "Design only" },
  },
  scopeHint: {
    refresh: { th: "สี พื้น ไฟ สุขภัณฑ์ ไม่ย้ายผนังหรือท่อ", en: "Paint, floors, lighting, fittings — no wall or pipe moves" },
    full: { th: "รื้อถึงโครงสร้าง ระบบใหม่ บิวท์อิน", en: "Strip-out, new services, built-ins" },
    design: { th: "ค่าออกแบบ แบบก่อสร้างและ BOQ", en: "Design fee: drawings and BOQ" },
  },
  result: { th: "ช่วงงบโดยประมาณ", en: "Ballpark range" },
  resultDesign: { th: "ค่าออกแบบโดยประมาณ", en: "Ballpark design fee" },
  perSqm: { th: "ต่อ ตร.ม.", en: "per m²" },
  areaError: { th: "ใส่พื้นที่ระหว่าง 15–1,000 ตร.ม.", en: "Enter an area between 15 and 1,000 m²" },
  use: { th: "ใช้ช่วงงบนี้ในแบบฟอร์ม", en: "Use this in the enquiry" },
  used: { th: "ใส่ช่วงงบในแบบฟอร์มแล้ว", en: "Budget added to the enquiry" },
  disclaimer: {
    th: "ตัวเลขเป็นช่วงประมาณการสำหรับเว็บไซต์ตัวอย่างนี้ ไม่ใช่ใบเสนอราคา ราคาจริงขึ้นกับการสำรวจหน้างาน วัสดุ และกฎของอาคาร",
    en: "Illustrative ranges for this demo website, not a quote. Real costs depend on the site survey, materials and building rules.",
  },
};

/* ---------- Enquiry form ---------- */

export const budgetBands: { value: BudgetBand; label: L; max: number }[] = [
  { value: "u500k", label: { th: "ไม่เกิน 500,000 บาท", en: "Under ฿500,000" }, max: 500_000 },
  { value: "500k-1m", label: { th: "500,000 – 1 ล้านบาท", en: "฿500,000 – 1M" }, max: 1_000_000 },
  { value: "1m-2m", label: { th: "1 – 2 ล้านบาท", en: "฿1M – 2M" }, max: 2_000_000 },
  { value: "2m-4m", label: { th: "2 – 4 ล้านบาท", en: "฿2M – 4M" }, max: 4_000_000 },
  { value: "o4m", label: { th: "มากกว่า 4 ล้านบาท", en: "Over ฿4M" }, max: Infinity },
  { value: "unsure", label: { th: "ยังไม่แน่ใจ", en: "Not sure yet" }, max: NaN },
];

export const form = {
  title: { th: "ส่งรายละเอียดโปรเจกต์", en: "Project enquiry" },
  intro: {
    th: "ใช้เวลาประมาณ 2 นาที เราขอเฉพาะข้อมูลที่จำเป็นต่อการตอบกลับ",
    en: "Takes about two minutes. We only ask for what we need to reply.",
  },
  demoMode: {
    th: "โหมดตัวอย่าง: แบบฟอร์มนี้ตรวจสอบข้อมูลและแสดงตัวอย่างสิ่งที่สตูดิโอจะได้รับ แต่ไม่ได้ส่งข้อมูลไปที่ใด",
    en: "Demo mode: this form checks your answers and previews what the studio would receive, but it doesn't send anything anywhere.",
  },
  required: { th: "จำเป็น", en: "required" },
  optional: { th: "ไม่บังคับ", en: "optional" },
  fields: {
    type: { th: "ประเภทงาน", en: "Project type" },
    location: { th: "ทำเลหรือเขต", en: "Area or district" },
    locationHint: { th: "เช่น อารีย์, อ่อนนุช, คอนโดย่านสาทร", en: "e.g. Ari, On Nut, a condo near Sathorn" },
    size: { th: "พื้นที่โดยประมาณ (ตร.ม.)", en: "Approximate size (m²)" },
    budget: { th: "งบประมาณโดยประมาณ", en: "Approximate budget" },
    budgetPlaceholder: { th: "เลือกช่วงงบ", en: "Choose a range" },
    timeline: { th: "อยากเริ่มงานเมื่อไร", en: "When would you like to start?" },
    timelinePlaceholder: { th: "เลือกช่วงเวลา", en: "Choose a timeframe" },
    details: { th: "เล่าเกี่ยวกับงานสั้นๆ", en: "A few words about the project" },
    detailsHint: {
      th: "อะไรที่อยากเปลี่ยน มีปัญหาอะไรอยู่ หรือมีกฎของอาคารที่รู้อยู่แล้ว",
      en: "What you want to change, what isn't working, or any building rules you already know about",
    },
    name: { th: "ชื่อ", en: "Your name" },
    method: { th: "ช่องทางที่สะดวกให้ติดต่อกลับ", en: "How should we reply?" },
    lineId: { th: "LINE ID", en: "LINE ID" },
    phone: { th: "เบอร์โทรศัพท์", en: "Phone number" },
    phoneHint: { th: "เช่น 081 234 5678", en: "Thai mobile, e.g. 081 234 5678" },
    email: { th: "อีเมล", en: "Email" },
    replyLang: { th: "ภาษาที่ต้องการให้ตอบกลับ", en: "Reply in" },
    consent: {
      th: "ยินยอมให้เส้น สตูดิโอใช้ข้อมูลนี้เพื่อติดต่อกลับเรื่องงานนี้เท่านั้น",
      en: "I agree Sen Studio may use these details only to reply about this project.",
    },
  },
  types: {
    condo: { th: "คอนโด", en: "Condo" },
    house: { th: "ทาวน์เฮาส์ / บ้าน", en: "Townhouse / house" },
    office: { th: "ออฟฟิศ / ร้านค้า", en: "Office / shop" },
    room: { th: "ครัวหรือห้องน้ำ", en: "Kitchen or bathroom" },
    other: { th: "อื่นๆ", en: "Something else" },
  },
  timelines: {
    asap: { th: "ภายใน 1 เดือน", en: "Within a month" },
    "1-3m": { th: "1–3 เดือน", en: "In 1–3 months" },
    "3-6m": { th: "3–6 เดือน", en: "In 3–6 months" },
    planning: { th: "ยังอยู่ในช่วงวางแผน", en: "Just planning for now" },
  },
  methods: {
    line: { th: "LINE", en: "LINE" },
    phone: { th: "โทรศัพท์", en: "Phone" },
    email: { th: "อีเมล", en: "Email" },
  },
  replyLangs: { th: { th: "ไทย", en: "Thai" }, en: { th: "อังกฤษ", en: "English" } },
  privacy: {
    th: "เราไม่ขอที่อยู่ เลขบัตรประชาชน หรือข้อมูลอื่นที่ไม่จำเป็น ข้อมูลที่ส่งมาจะใช้เพื่อตอบกลับงานนี้เท่านั้น ตามหลัก PDPA",
    en: "We don't ask for your address, ID number or anything else we don't need. Details are used only to reply about this project, in line with Thailand's PDPA.",
  },
  submit: { th: "ตรวจสอบและส่ง", en: "Check and send" },
  submitDemo: { th: "ตรวจสอบและดูตัวอย่าง", en: "Check and preview" },
  sending: { th: "กำลังส่ง…", en: "Sending…" },
  errors: {
    summary: { th: "กรุณาแก้ไขข้อมูลต่อไปนี้", en: "Please fix the following" },
    type: { th: "เลือกประเภทงาน", en: "Choose a project type" },
    location: { th: "ใส่ทำเลหรือเขตของพื้นที่", en: "Enter the area or district" },
    size: { th: "ใส่พื้นที่เป็นตัวเลขระหว่าง 5–5,000", en: "Enter a number between 5 and 5,000" },
    budget: { th: "เลือกช่วงงบ (เลือก “ยังไม่แน่ใจ” ได้)", en: "Choose a budget range (“Not sure yet” is fine)" },
    timeline: { th: "เลือกช่วงเวลาที่อยากเริ่ม", en: "Choose when you'd like to start" },
    details: { th: "สั้นลงอีกนิด ไม่เกิน 800 ตัวอักษร", en: "Please keep this under 800 characters" },
    name: { th: "ใส่ชื่อที่ให้เราเรียก", en: "Enter a name we can use" },
    method: { th: "เลือกช่องทางติดต่อกลับ", en: "Choose how we should reply" },
    lineId: { th: "ใส่ LINE ID (ตัวอักษร ตัวเลข . _ - ยาว 4–20 ตัว)", en: "Enter a LINE ID (4–20 letters, numbers, . _ or -)" },
    phone: { th: "ใส่เบอร์โทรไทย 9–10 หลัก ขึ้นต้นด้วย 0", en: "Enter a Thai number: 9–10 digits starting with 0" },
    email: { th: "ใส่อีเมลให้ถูกรูปแบบ เช่น name@example.com", en: "Enter a valid email, e.g. name@example.com" },
    consent: { th: "กรุณายืนยันการยินยอม", en: "Please confirm consent" },
  },
  preview: {
    title: { th: "ตัวอย่างเท่านั้น — ยังไม่มีการส่งข้อมูล", en: "Preview only — nothing was sent" },
    body: {
      th: "นี่คือเว็บไซต์ตัวอย่าง ถ้าเป็นเว็บไซต์จริง ข้อมูลด้านล่างจะถูกส่งถึงสตูดิโอ และคุณจะได้รับข้อความยืนยันทางช่องทางที่เลือก",
      en: "This is a demo website. On a live site, the details below would reach the studio and you'd get a confirmation through the channel you chose.",
    },
    copy: { th: "คัดลอกสรุป", en: "Copy summary" },
    copied: { th: "คัดลอกแล้ว", en: "Copied" },
    copyFailed: { th: "คัดลอกไม่ได้ เลือกข้อความด้านบนแล้วคัดลอกเองได้", en: "Couldn't copy — select the text above instead" },
    edit: { th: "กลับไปแก้ไข", en: "Edit enquiry" },
  },
  success: {
    title: { th: "ได้รับรายละเอียดแล้ว", en: "Enquiry received" },
    body: {
      th: "ขอบคุณ เราจะติดต่อกลับทางช่องทางที่คุณเลือก",
      en: "Thank you — we'll reply through the channel you chose.",
    },
  },
  failure: {
    th: "ส่งไม่สำเร็จ ข้อมูลยังอยู่ในแบบฟอร์ม ลองอีกครั้ง หรือคัดลอกไปส่งทางช่องทางอื่น",
    en: "That didn't go through. Your answers are still in the form — try again, or copy them and use another channel.",
  },
  summaryHeading: { th: "สรุปคำขอ — เส้น สตูดิโอ", en: "Enquiry summary — Sen Studio" },
};

export const footer = {
  contactTitle: { th: "ติดต่อ", en: "Contact" },
  notConnected: { th: "ยังไม่ได้เชื่อมต่อในเว็บไซต์ตัวอย่าง", en: "not connected in this demo" },
  address: {
    th: "สตูดิโอสมมติ จึงไม่มีที่อยู่จริง ในเว็บไซต์ของลูกค้าจริงจะแสดงที่อยู่และแผนที่ตรงนี้",
    en: "A fictional studio, so there's no real address. A live client site would show the address and map here.",
  },
  credits: {
    th: "ภาพประกอบจาก Unsplash (Unsplash License) ใช้เพื่อประกอบแนวคิดเท่านั้น ไม่ใช่ผลงานของเส้น สตูดิโอ",
    en: "Photography from Unsplash (Unsplash License), used to illustrate concepts only — not Sen Studio's work.",
  },
  builtBy: { th: "ออกแบบและพัฒนาเป็นงานตัวอย่างโดย", en: "Designed and built as a concept by" },
  backToPortfolio: { th: "กลับไปหน้าผลงาน Klickdoe", en: "Back to the Klickdoe portfolio" },
};

export const projectPage = {
  back: { th: "ผลงานทั้งหมด", en: "All projects" },
  facts: {
    location: { th: "ทำเล", en: "Location" },
    type: { th: "ประเภท", en: "Type" },
    area: { th: "พื้นที่", en: "Area" },
    duration: { th: "ระยะเวลาหน้างาน (วางแผน)", en: "Time on site (planned)" },
    budget: { th: "ช่วงงบ (ตัวอย่าง)", en: "Budget band (illustrative)" },
  },
  weeks: { th: (n: number) => `${n} สัปดาห์`, en: (n: number) => `${n} weeks` },
  brief: { th: "โจทย์", en: "The brief" },
  approach: { th: "สิ่งที่เปลี่ยน", en: "What changes" },
  scope: { th: "ขอบเขตงาน", en: "Scope" },
  materials: { th: "วัสดุหลัก", en: "Key materials" },
  conceptNote: {
    th: "งานออกแบบแนวคิดสำหรับเว็บไซต์ตัวอย่าง ไม่ใช่งานลูกค้าจริง ภาพประกอบเป็นภาพถ่ายจาก Unsplash",
    en: "A design concept written for this demo website, not completed client work. Illustrated with Unsplash photography.",
  },
  similar: { th: "มีงานลักษณะนี้? ส่งรายละเอียดมาได้", en: "Planning something similar? Send us the details" },
  next: { th: "โปรเจกต์ถัดไป", en: "Next project" },
};
