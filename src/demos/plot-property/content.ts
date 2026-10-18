import type { L } from "@/lib/i18n";

/**
 * Plot Property copy, Thai and English side by side. The agency is fictional
 * and every listing is a sample — no real property is for rent or sale.
 */

export const meta = {
  title: {
    th: "พล็อต พร็อพเพอร์ตี้ — คอนโดและบ้านเช่า/ขายในกรุงเทพฯ (เว็บไซต์ตัวอย่าง)",
    en: "Plot Property — Bangkok condos and houses to rent or buy (concept demo)",
  },
  description: {
    th: "ค้นหาคอนโดและบ้านในกรุงเทพฯ พร้อมรายละเอียดที่ประกาศอื่นมักไม่บอก ระยะเดินจริง ค่าส่วนกลาง กฎสัตว์เลี้ยง — เว็บไซต์ตัวอย่างโดย Klickdoe ประกาศทั้งหมดเป็นตัวอย่าง",
    en: "Search Bangkok condos and houses with the details other listings leave out: real walking distances, fees and pet rules. A concept demo by Klickdoe — every listing is a sample.",
  },
} satisfies Record<string, L>;

export const demoNotice: L = {
  th: "เว็บไซต์ตัวอย่างโดย Klickdoe — พล็อต พร็อพเพอร์ตี้เป็นบริษัทสมมติ ประกาศทั้งหมดเป็นตัวอย่าง ไม่มีทรัพย์ให้เช่าหรือขายจริง",
  en: "Concept demo by Klickdoe — Plot Property is fictional and every listing is a sample. Nothing here is really for rent or sale.",
};

export const nav = {
  skip: { th: "ข้ามไปยังเนื้อหา", en: "Skip to content" },
  label: { th: "เมนูหลัก", en: "Main navigation" },
  items: [
    { id: "listings", th: "ประกาศ", en: "Listings" },
    { id: "renting", th: "เช่าในกรุงเทพฯ", en: "Renting in Bangkok" },
    { id: "how", th: "วิธีทำงาน", en: "How we work" },
    { id: "faq", th: "คำถาม", en: "FAQ" },
  ],
  langLabel: { th: "เปลี่ยนภาษา", en: "Change language" },
};

export const hero = {
  index: "01",
  title: {
    th: "หาที่อยู่ในกรุงเทพฯ\nพร้อมรายละเอียดที่ประกาศอื่นไม่บอก",
    en: "Find a place in Bangkok.\nWith the details other listings leave out.",
  },
  body: {
    th: "ระยะเดินถึงสถานีจริง ค่าส่วนกลาง กฎสัตว์เลี้ยง และเงื่อนไขสัญญา เขียนไว้ในทุกประกาศ ก่อนคุณต้องโทรถาม",
    en: "Real walking distances, common fees, pet rules and contract terms — written on every listing, before you have to call and ask.",
  },
  quick: { th: "ค้นหาด่วน", en: "Quick search" },
  go: { th: "ดูประกาศ", en: "Show listings" },
  imageAlt: {
    th: "มุมมองจากด้านล่างของอาคารคอนโดสีขาวดำ กรอบหน้าต่างเป็นเส้นตรง ตัดกับท้องฟ้าสีฟ้า",
    en: "Looking up at a black-and-white apartment building with crisp window frames against a blue sky",
  },
};

export const explorer = {
  index: "02",
  title: { th: "ประกาศ", en: "Listings" },
  sampleTag: { th: "ประกาศตัวอย่าง", en: "Sample listing" },
  filters: { th: "ตัวกรอง", en: "Filters" },
  deal: { th: "ประเภทประกาศ", en: "Rent or buy" },
  deals: { all: { th: "ทั้งหมด", en: "All" }, rent: { th: "เช่า", en: "Rent" }, sale: { th: "ซื้อ", en: "Buy" } },
  type: { th: "ประเภททรัพย์", en: "Property" },
  types: { all: { th: "ทั้งหมด", en: "All" }, condo: { th: "คอนโด", en: "Condo" }, house: { th: "บ้าน", en: "House" } },
  area: { th: "ทำเล", en: "Area" },
  anyArea: { th: "ทุกทำเล", en: "All areas" },
  beds: { th: "ห้องนอนขั้นต่ำ", en: "Bedrooms (min)" },
  bedOptions: [
    { value: 0, label: { th: "ทั้งหมด", en: "Any" } },
    { value: 1, label: { th: "1+", en: "1+" } },
    { value: 2, label: { th: "2+", en: "2+" } },
    { value: 3, label: { th: "3+", en: "3+" } },
  ],
  maxPrice: { th: "ราคาสูงสุด", en: "Max price" },
  noLimit: { th: "ไม่จำกัด", en: "No limit" },
  pickDeal: { th: "เลือกเช่าหรือซื้อก่อน", en: "Choose rent or buy first" },
  pets: { th: "เลี้ยงสัตว์ได้เท่านั้น", en: "Pet-friendly only" },
  sort: { th: "เรียงตาม", en: "Sort" },
  sorts: {
    "price-asc": { th: "ราคาต่ำ → สูง", en: "Price: low to high" },
    "price-desc": { th: "ราคาสูง → ต่ำ", en: "Price: high to low" },
    "size-desc": { th: "พื้นที่มากสุด", en: "Largest first" },
  },
  reset: { th: "ล้างตัวกรอง", en: "Clear filters" },
  count: { th: (n: number) => `พบ ${n} ประกาศ`, en: (n: number) => `${n} listing${n === 1 ? "" : "s"}` },
  empty: {
    th: "ไม่มีประกาศที่ตรงกับตัวกรองนี้ ลองขยายราคา หรือบอกเราว่าต้องการอะไร เราจะช่วยหาให้",
    en: "Nothing matches those filters. Try a higher price, or tell us what you need and we'll look for you.",
  },
  shareHint: { th: "ลิงก์ในแถบที่อยู่จะจำตัวกรองนี้ไว้ แชร์ต่อได้", en: "The address bar keeps these filters — copy it to share this search." },
  perMonth: { th: "/ เดือน", en: "/ month" },
  studio: { th: "สตูดิโอ", en: "Studio" },
  bedsShort: { th: (n: number) => `${n} ห้องนอน`, en: (n: number) => `${n} bed` },
  bathsShort: { th: (n: number) => `${n} ห้องน้ำ`, en: (n: number) => `${n} bath` },
  floor: { th: (n: number) => `ชั้น ${n}`, en: (n: number) => `Floor ${n}` },
  land: { th: (n: number) => `ที่ดิน ${n} ตร.ว.`, en: (n: number) => `Land ${n} sq wah` },
  petsYes: { th: "เลี้ยงสัตว์ได้", en: "Pets OK" },
  available: {
    now: { th: "ว่างแล้ว", en: "Available now" },
    "1-month": { th: "ว่างในอีก 1 เดือน", en: "Free in 1 month" },
    "2-months": { th: "ว่างในอีก 2 เดือน", en: "Free in 2 months" },
  },
  view: { th: "ดูรายละเอียด", en: "View details" },
};

export const renting = {
  index: "03",
  title: { th: "เช่าคอนโดในกรุงเทพฯ ต้องจ่ายอะไรบ้าง", en: "What renting in Bangkok actually costs" },
  intro: {
    th: "ตัวเลขทั่วไปเพื่อให้วางแผนได้ แต่ละห้องอาจต่างกัน เราเขียนเงื่อนไขจริงไว้ในทุกประกาศ",
    en: "Typical terms, so you can plan. Every unit differs — the real terms are written on each listing.",
  },
  rows: [
    { item: { th: "เงินประกัน", en: "Security deposit" }, typical: { th: "2 เดือน", en: "2 months' rent" }, note: { th: "คืนเมื่อสิ้นสัญญา หักค่าเสียหายถ้ามี", en: "Returned at the end, minus any damage" } },
    { item: { th: "ค่าเช่าล่วงหน้า", en: "Rent in advance" }, typical: { th: "1 เดือน", en: "1 month" }, note: { th: "จ่ายวันทำสัญญา", en: "Paid when you sign" } },
    { item: { th: "ค่าไฟ", en: "Electricity" }, typical: { th: "อัตราการไฟฟ้า หรือราคาคอนโด", en: "Government rate or a condo rate" }, note: { th: "บางห้องคิดสูงกว่าอัตราการไฟฟ้า เราระบุไว้เสมอ", en: "Some units charge above the government rate — we always say which" } },
    { item: { th: "ค่าน้ำ", en: "Water" }, typical: { th: "ตามใช้จริง", en: "By usage" }, note: { th: "มักเป็นจำนวนเล็กน้อยต่อเดือน", en: "Usually a small monthly amount" } },
    { item: { th: "ค่าส่วนกลาง", en: "Common area fee" }, typical: { th: "เจ้าของจ่าย", en: "Paid by the owner" }, note: { th: "สำหรับผู้เช่า ปกติไม่ต้องจ่าย", en: "Tenants don't normally pay it" } },
    { item: { th: "สัญญา", en: "Contract" }, typical: { th: "12 เดือน", en: "12 months" }, note: { th: "สัญญาสั้นกว่านั้นมักค่าเช่าสูงขึ้น", en: "Shorter contracts usually cost more per month" } },
  ],
  cols: { item: { th: "รายการ", en: "Item" }, typical: { th: "ทั่วไป", en: "Typical" }, note: { th: "หมายเหตุ", en: "Note" } },
};

export const how = {
  index: "04",
  title: { th: "วิธีทำงานของเรา", en: "How we work" },
  items: [
    { title: { th: "เราไปดูห้องจริงทุกห้อง", en: "We visit every unit" }, body: { th: "ไม่ลงประกาศจากรูปที่ได้มาต่อๆ กัน", en: "No listings built from forwarded photos." } },
    { title: { th: "ระยะทางวัดจริง", en: "Distances we've walked" }, body: { th: "ระยะถึงสถานีวัดจากทางเข้าอาคาร ไม่ใช่เส้นตรงบนแผนที่", en: "Station distances from the building entrance, not a straight line on a map." } },
    { title: { th: "ค่าใช้จ่ายเป็นลายลักษณ์อักษร", en: "Costs in writing" }, body: { th: "เงินประกัน ค่าไฟ และค่าส่วนกลาง ระบุก่อนนัดดูห้อง", en: "Deposit, power rate and fees confirmed before a viewing." } },
    { title: { th: "ตอบได้ทั้งไทยและอังกฤษ", en: "Thai or English" }, body: { th: "ช่วยอ่านสัญญาเช่าให้เข้าใจทั้งสองภาษา", en: "We'll walk you through the lease in either language." } },
  ],
};

export const faqs: { q: L; a: L }[] = [
  {
    q: { th: "ประกาศเหล่านี้มีจริงไหม", en: "Are these listings real?" },
    a: { th: "ไม่ นี่คือเว็บไซต์ตัวอย่าง ประกาศ ราคา และรูปทั้งหมดเป็นตัวอย่าง ในเว็บไซต์จริงจะดึงจากระบบประกาศของบริษัท", en: "No — this is a demo website. Listings, prices and photos are samples; a live site would pull from the agency's listing system." },
  },
  {
    q: { th: "ต้องจ่ายค่านายหน้าไหม", en: "Do tenants pay a commission?" },
    a: { th: "สำหรับการเช่า โดยทั่วไปเจ้าของเป็นผู้จ่ายค่านายหน้า เราจะแจ้งถ้ามีค่าใช้จ่ายใดสำหรับคุณ", en: "For rentals the owner usually pays the agent. We'll tell you up front if anything is charged to you." },
  },
  {
    q: { th: "ชาวต่างชาติซื้อคอนโดได้ไหม", en: "Can foreigners buy a condo?" },
    a: { th: "ได้ภายใต้โควตาต่างชาติของอาคารและเงื่อนไขการโอนเงิน ควรตรวจสอบกับนักกฎหมายก่อนวางเงินมัดจำ", en: "Generally yes, within the building's foreign quota and with the right money-transfer paperwork — check with a lawyer before paying a deposit." },
  },
  {
    q: { th: "นัดดูห้องได้เร็วแค่ไหน", en: "How soon can I view?" },
    a: { th: "ส่วนใหญ่ภายใน 1–3 วัน ห้องที่มีผู้เช่าอยู่ต้องนัดล่วงหน้า", en: "Usually within one to three days. Occupied units need more notice." },
  },
];

export const viewing = {
  title: { th: "ขอนัดดูห้อง", en: "Request a viewing" },
  intro: {
    th: "บอกเราว่าสะดวกช่วงไหน เราจะยืนยันเวลากับเจ้าของแล้วติดต่อกลับ",
    en: "Tell us when suits you; we'll confirm with the owner and get back to you.",
  },
  demoMode: {
    th: "โหมดตัวอย่าง: ไม่มีการนัดหมายจริงและไม่ได้ส่งข้อมูลไปที่ใด",
    en: "Demo mode: no viewing is arranged and nothing is sent.",
  },
  privacy: {
    th: "เราไม่ขอสำเนาบัตรหรือหนังสือเดินทางจนกว่าจะทำสัญญา ข้อมูลใช้ตามหลัก PDPA",
    en: "We don't ask for ID or passport copies until you sign. Details are handled in line with Thailand's PDPA.",
  },
  required: { th: "จำเป็น", en: "required" },
  fields: {
    when: { th: "สะดวกดูห้องช่วงไหน", en: "When can you view?" },
    move: { th: "อยากย้ายเข้าเมื่อไร", en: "When would you move in?" },
    buy: { th: "อยากซื้อภายในเมื่อไร", en: "When are you looking to buy?" },
    name: { th: "ชื่อ", en: "Your name" },
    method: { th: "ให้ติดต่อกลับทาง", en: "How should we reply?" },
    lineId: { th: "LINE ID", en: "LINE ID" },
    phone: { th: "เบอร์โทรศัพท์", en: "Phone number" },
    email: { th: "อีเมล", en: "Email" },
    consent: { th: "ยินยอมให้ใช้ข้อมูลนี้เพื่อนัดดูห้องนี้เท่านั้น", en: "I agree these details may be used only to arrange this viewing." },
  },
  when: { weekday: { th: "วันธรรมดา", en: "Weekdays" }, weekend: { th: "เสาร์–อาทิตย์", en: "Weekends" }, evening: { th: "หลังเลิกงาน", en: "After work" } },
  move: { asap: { th: "เร็วที่สุด", en: "As soon as possible" }, "1-month": { th: "ภายใน 1 เดือน", en: "Within a month" }, "3-months": { th: "1–3 เดือน", en: "In 1–3 months" }, browsing: { th: "ยังดูไปก่อน", en: "Just looking" } },
  methods: { line: { th: "LINE", en: "LINE" }, phone: { th: "โทรศัพท์", en: "Phone" }, email: { th: "อีเมล", en: "Email" } },
  submitDemo: { th: "ตรวจสอบและดูตัวอย่าง", en: "Check and preview" },
  submit: { th: "ส่งคำขอ", en: "Send request" },
  sending: { th: "กำลังส่ง…", en: "Sending…" },
  errors: {
    summary: { th: "กรุณาตรวจสอบข้อมูลต่อไปนี้", en: "Please check the following" },
    when: { th: "เลือกช่วงเวลาที่สะดวก", en: "Choose when you can view" },
    move: { th: "เลือกช่วงเวลา", en: "Choose a timeframe" },
    name: { th: "ใส่ชื่อที่ให้เราเรียก", en: "Enter a name we can use" },
    method: { th: "เลือกช่องทางติดต่อกลับ", en: "Choose how we should reply" },
    lineId: { th: "ใส่ LINE ID ให้ถูกต้อง", en: "Enter a valid LINE ID" },
    phone: { th: "ใส่เบอร์โทรไทย 9–10 หลัก", en: "Enter a Thai number (9–10 digits)" },
    email: { th: "ใส่อีเมลให้ถูกรูปแบบ", en: "Enter a valid email address" },
    consent: { th: "กรุณายืนยันการยินยอม", en: "Please confirm consent" },
  },
  preview: {
    title: { th: "ตัวอย่างเท่านั้น — ยังไม่มีการนัด", en: "Preview only — no viewing arranged" },
    body: { th: "นี่คือเว็บไซต์ตัวอย่างและประกาศเป็นตัวอย่าง ถ้าเป็นบริษัทจริง เจ้าหน้าที่จะยืนยันเวลากับเจ้าของแล้วติดต่อกลับ", en: "This is a demo website with sample listings. A real agent would confirm a time with the owner and reply." },
    edit: { th: "กลับไปแก้ไข", en: "Edit request" },
  },
  sent: {
    title: { th: "ได้รับคำขอแล้ว", en: "Request received" },
    body: { th: "เราจะยืนยันเวลากับเจ้าของแล้วติดต่อกลับ", en: "We'll confirm a time with the owner and get back to you." },
  },
  failed: { th: "ส่งไม่สำเร็จ กรุณาลองอีกครั้ง", en: "That didn't go through — please try again." },
  listing: { th: "ประกาศ", en: "Listing" },
};

export const detail = {
  back: { th: "← กลับไปที่ประกาศทั้งหมด", en: "← Back to all listings" },
  facts: {
    price: { th: "ราคา (ตัวอย่าง)", en: "Price (sample)" },
    type: { th: "ประเภท", en: "Type" },
    size: { th: "พื้นที่ใช้สอย", en: "Floor area" },
    rooms: { th: "ห้อง", en: "Rooms" },
    transit: { th: "รถไฟฟ้า", en: "Transit" },
    available: { th: "ว่าง", en: "Available" },
    furnished: { th: "เฟอร์นิเจอร์", en: "Furniture" },
  },
  furnishedYes: { th: "มีเฟอร์นิเจอร์", en: "Furnished" },
  furnishedNo: { th: "ห้องเปล่า", en: "Unfurnished" },
  features: { th: "จุดเด่น", en: "Features" },
  notes: { th: "สิ่งที่ควรรู้", en: "Worth knowing" },
  photoNote: {
    th: "ประกาศตัวอย่างสำหรับเว็บไซต์สาธิต ภาพจาก Unsplash ไม่ใช่ทรัพย์จริง",
    en: "A sample listing for a demo website. Photos from Unsplash, not a real property.",
  },
};

export const footer = {
  notConnected: { th: "ยังไม่ได้เชื่อมต่อในเว็บไซต์ตัวอย่าง", en: "not connected in this demo" },
  credits: { th: "ภาพประกอบจาก Unsplash ใช้เพื่อประกอบแนวคิดเท่านั้น", en: "Photography from Unsplash, for illustration only." },
  builtBy: { th: "ออกแบบและพัฒนาเป็นงานตัวอย่างโดย", en: "Designed and built as a concept by" },
  back: { th: "กลับไปหน้าผลงาน Klickdoe", en: "Back to the Klickdoe portfolio" },
};
