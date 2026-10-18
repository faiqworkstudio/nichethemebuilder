import type { L } from "@/lib/i18n";

/**
 * Soi Nine House copy, Thai and English side by side. The property is
 * fictional; neighbourhood places are real public places, and walking times
 * are approximate. Rates are samples and no reservation is ever made.
 */

export const meta = {
  title: {
    th: "บ้านซอยเก้า — ที่พักบูติกย่านตลาดน้อย เจริญกรุง (เว็บไซต์ตัวอย่าง)",
    en: "Soi Nine House — A small stay in Talat Noi, Bangkok (concept demo)",
  },
  description: {
    th: "ห้องพัก 12 ห้องในตึกแถวเก่าย่านตลาดน้อย เดินถึงเยาวราช ท่าเรือ และ MRT หัวลำโพง พร้อมคู่มือละแวกบ้าน — เว็บไซต์ตัวอย่างโดย Klickdoe ราคาเป็นตัวอย่างเท่านั้น",
    en: "Twelve rooms in an old Talat Noi shophouse, walking distance to Chinatown, the river and MRT Hua Lamphong — with a neighbourhood guide. A concept demo by Klickdoe; rates are samples only.",
  },
} satisfies Record<string, L>;

export const demoNotice: L = {
  th: "เว็บไซต์ตัวอย่างโดย Klickdoe — บ้านซอยเก้าเป็นที่พักสมมติ ราคาเป็นตัวอย่าง และไม่มีการจองหรือรับชำระเงินจริง",
  en: "Concept demo by Klickdoe — Soi Nine House is fictional, rates are samples, and no booking or payment is ever made.",
};

export const nav = {
  skip: { th: "ข้ามไปยังเนื้อหา", en: "Skip to content" },
  label: { th: "เมนูหลัก", en: "Main navigation" },
  items: [
    { id: "rooms", th: "ห้องพัก", en: "Rooms" },
    { id: "house", th: "ในบ้าน", en: "The house" },
    { id: "neighbourhood", th: "ละแวกบ้าน", en: "Neighbourhood" },
    { id: "getting-here", th: "การเดินทาง", en: "Getting here" },
    { id: "faq", th: "คำถาม", en: "FAQ" },
  ],
  cta: { th: "เช็กวันว่าง", en: "Check dates" },
  langLabel: { th: "เปลี่ยนภาษา", en: "Change language" },
};

export const hero = {
  kicker: { th: "ตลาดน้อย · เจริญกรุง · กรุงเทพฯ", en: "Talat Noi · Charoen Krung · Bangkok" },
  title: { th: "บ้านเล็กๆ ริมซอย ใกล้แม่น้ำ", en: "A small house down a quiet soi, near the river." },
  body: {
    th: "ห้องพัก 12 ห้องในตึกแถวอายุร้อยปีที่ปรับปรุงใหม่ เดินไปเยาวราชได้ ได้ยินเสียงเรือมากกว่าเสียงรถ",
    en: "Twelve rooms in a restored century-old shophouse. Chinatown is a walk away, and you'll hear boats more than traffic.",
  },
  imageAlt: {
    th: "ห้องนอนไม้สักโทนอุ่นยามเย็น เปิดไฟหัวเตียง หน้าต่างมองเห็นสวน",
    en: "A teak bedroom in the evening, bedside lights on, with a window onto the garden",
  },
};

export const planner = {
  title: { th: "วางแผนเข้าพัก", en: "Plan a stay" },
  checkIn: { th: "เช็กอิน", en: "Check-in" },
  checkOut: { th: "เช็กเอาต์", en: "Check-out" },
  guests: { th: "ผู้เข้าพัก", en: "Guests" },
  go: { th: "ดูห้องที่เหมาะ", en: "See rooms that fit" },
  nights: { th: (n: number) => `${n} คืน`, en: (n: number) => `${n} night${n === 1 ? "" : "s"}` },
  sampleNote: {
    th: "ราคาตัวอย่าง ไม่ใช่ราคาจริงหรือห้องว่างจริง",
    en: "Sample rates — not live prices or real availability",
  },
  fits: { th: (n: number) => `${n} ห้องที่รองรับ`, en: (n: number) => `${n} room types fit` },
  invalid: { th: "เลือกวันเช็กเอาต์หลังวันเช็กอิน (สูงสุด 28 คืน)", en: "Choose a check-out after check-in (up to 28 nights)" },
  longStay: { th: "พักนานกว่านั้น? ดูสตูดิโอรายเดือน", en: "Staying longer? See the monthly studio" },
};

export const roomsCopy = {
  title: { th: "ห้องพัก", en: "The rooms" },
  intro: {
    th: "ห้องพักรายคืนสี่แบบ และสตูดิโอสำหรับพักรายเดือนหนึ่งแบบ ทุกห้องมีแอร์ Wi-Fi ที่ใช้ทำงานได้จริง และน้ำดื่มเติมได้",
    en: "Four nightly room types and one studio for monthly stays. Every room has air-con, Wi-Fi you can actually work on, and refillable drinking water.",
  },
  tabsLabel: { th: "ประเภทห้อง", en: "Room types" },
  size: { th: "ขนาด", en: "Size" },
  bed: { th: "เตียง", en: "Bed" },
  sleeps: { th: "พักได้", en: "Sleeps" },
  view: { th: "วิว", en: "Outlook" },
  people: { th: (n: number) => `${n} คน`, en: (n: number) => `${n} ${n === 1 ? "guest" : "guests"}` },
  from: { th: "ราคาตัวอย่าง", en: "Sample rate" },
  perNight: { th: "/ คืน", en: "/ night" },
  perMonth: { th: "/ เดือน", en: "/ month" },
  sampleTag: { th: "ตัวอย่าง", en: "sample" },
  total: { th: (n: number) => `รวม ${n} คืน (ตัวอย่าง)`, en: (n: number) => `Sample total for ${n} night${n === 1 ? "" : "s"}` },
  request: { th: "ขอจองห้องนี้", en: "Request this room" },
  monthlyAsk: { th: "สอบถามการพักรายเดือน", en: "Ask about a monthly stay" },
  monthlyNote: {
    th: "สนใจพักรายเดือนที่สตูดิโออพาร์ตเมนต์ เริ่มประมาณวันที่: ",
    en: "Interested in a monthly stay in the Studio Apartment, starting around: ",
  },
  tooSmall: { th: "ห้องนี้พักได้ไม่ถึงจำนวนผู้เข้าพักที่เลือก", en: "This room doesn't fit the number of guests you chose" },
  provider: { th: "จองผ่านระบบจองของที่พัก", en: "Book through the hotel's booking engine" },
};

export const house = {
  title: { th: "ในบ้าน", en: "Inside the house" },
  lead: {
    th: "ชั้นล่างเป็นห้องรับแขกและห้องอาหารเช้าที่เปิดให้คนในละแวกนั่งกาแฟด้วย ชั้นบนเงียบ มีไว้สำหรับแขกเท่านั้น",
    en: "Downstairs is a lounge and breakfast room that neighbours drop into for coffee too. Upstairs is quiet and for guests only.",
  },
  amenitiesTitle: { th: "สิ่งที่มีให้", en: "What's here" },
  amenities: {
    th: ["อาหารเช้า 7:00–10:30 (ไทยและตะวันตก)", "Wi-Fi ไฟเบอร์ทุกชั้น", "ฝากกระเป๋าก่อนเช็กอินและหลังเช็กเอาต์", "ห้องซักรีดสำหรับแขก", "จักรยานให้ยืมสำหรับเที่ยวละแวกบ้าน", "เรียกรถและเรือให้ได้"],
    en: ["Breakfast 7:00–10:30 (Thai and Western)", "Fibre Wi-Fi on every floor", "Luggage storage before and after your stay", "Guest laundry room", "Bicycles to borrow for the neighbourhood", "Help booking taxis and boats"],
  },
  rulesTitle: { th: "ข้อตกลงในบ้าน", en: "House notes" },
  rules: {
    th: ["เช็กอิน 14:00 · เช็กเอาต์ 12:00", "ช่วงเวลาเงียบ 22:00–07:00", "งดสูบบุหรี่ภายในอาคาร", "ไม่มีลิฟต์ — ห้องอยู่ชั้น 2–4 เรามีคนช่วยยกกระเป๋า"],
    en: ["Check-in 14:00 · check-out 12:00", "Quiet hours 22:00–07:00", "No smoking indoors", "No lift — rooms are on floors 2–4; we'll carry your bags"],
  },
  lobbyAlt: {
    th: "ห้องรับแขกชั้นล่าง เพดานสูง โซฟาสีเทา โต๊ะกลมสีดำ และบันไดขึ้นชั้นลอย",
    en: "The ground-floor lounge with a high ceiling, grey sofas, a round black table and stairs to a mezzanine",
  },
  breakfastAlt: {
    th: "โต๊ะไม้กลมริมหน้าต่างกระจก กาน้ำชาแบบเฟรนช์เพรส ถ้วยกาแฟ และต้นไม้",
    en: "A round wooden table by a glass wall with a French press, coffee cups and plants",
  },
  diningAlt: {
    th: "ห้องอาหารสว่าง โต๊ะเรียงกัน โคมไฟสีทองแดงห้อยจากเพดาน และใบมอนสเตอร่าด้านหน้า",
    en: "A bright dining room with rows of tables, copper pendant lamps and monstera leaves in front",
  },
};

export const neighbourhood = {
  kicker: { th: "คู่มือละแวกบ้าน", en: "Neighbourhood journal" },
  title: { th: "เดินออกจากประตูแล้วไปไหนดี", en: "Where to walk from the front door" },
  intro: {
    th: "ระยะเวลาเป็นค่าประมาณจากหน้าบ้าน เวลาเปิดปิดของสถานที่อาจเปลี่ยน ควรตรวจสอบก่อนไป",
    en: "Times are rough estimates from our door. Opening hours change, so check before you go.",
  },
  mapLabel: {
    th: "แผนที่โดยสังเขปของละแวกบ้าน ไม่ได้ย่อตามมาตราส่วน",
    en: "Sketch map of the neighbourhood, not to scale",
  },
  notToScale: { th: "แผนที่โดยสังเขป · ไม่ตามมาตราส่วน", en: "Sketch map · not to scale" },
  river: { th: "แม่น้ำเจ้าพระยา", en: "Chao Phraya River" },
  you: { th: "บ้านซอยเก้า", en: "Soi Nine House" },
};

export type Place = {
  n: number;
  name: L;
  time: L;
  body: L;
  /** Position on the sketch map, as percentages. */
  x: number;
  y: number;
  image?: "chinatown" | "temple" | "food" | "cafe";
  imageAlt?: L;
};

export const places: Place[] = [
  {
    n: 1,
    name: { th: "ซอยในตลาดน้อย", en: "The lanes of Talat Noi" },
    time: { th: "หน้าประตู", en: "On the doorstep" },
    body: {
      th: "ร้านอะไหล่เก่า ศาลเจ้าจีน ภาพวาดบนกำแพง และร้านกาแฟในโกดังเก่า เดินเล่นตอนเช้าก่อนร้านเปิดจะเงียบที่สุด",
      en: "Old machine-parts shops, Chinese shrines, murals and cafés in former warehouses. Quietest in the morning before the shops open.",
    },
    x: 40,
    y: 58,
    image: "cafe",
    imageAlt: {
      th: "ร้านกาแฟในโกดังเก่า เพดานโครงเหล็ก โคมไฟห้อย และโต๊ะไม้ยาว",
      en: "A café in a converted warehouse with a steel-truss roof, hanging lamps and long wooden tables",
    },
  },
  {
    n: 2,
    name: { th: "ท่าเรือสี่พระยา", en: "Si Phraya pier" },
    time: { th: "เดิน ~10 นาที", en: "~10 min walk" },
    body: {
      th: "ขึ้นเรือด่วนเจ้าพระยาไปทางเหนือสู่เกาะรัตนโกสินทร์ หรือข้ามฝั่งไปไอคอนสยาม",
      en: "Catch the Chao Phraya Express north towards the old town, or cross to the Thonburi side.",
    },
    x: 22,
    y: 72,
  },
  {
    n: 3,
    name: { th: "เยาวราช", en: "Yaowarat (Chinatown)" },
    time: { th: "เดิน ~15 นาที", en: "~15 min walk" },
    body: {
      th: "ไปหลังพระอาทิตย์ตก เมื่อร้านริมทางเริ่มตั้งโต๊ะ เริ่มจากปากซอยแล้วค่อยๆ เดินกินไป",
      en: "Go after dark, when the street stalls set up. Start at one end and eat your way along.",
    },
    x: 62,
    y: 28,
    image: "chinatown",
    imageAlt: {
      th: "ถนนเยาวราชยามค่ำคืน ป้ายไฟนีออนภาษาจีน และรถตุ๊กตุ๊กบนถนนเปียกฝน",
      en: "Yaowarat Road at night with Chinese neon signs and tuk-tuks on a rain-wet street",
    },
  },
  {
    n: 4,
    name: { th: "วัดไตรมิตรฯ", en: "Wat Traimit" },
    time: { th: "เดิน ~15 นาที", en: "~15 min walk" },
    body: {
      th: "วัดที่ประดิษฐานพระพุทธรูปทองคำองค์ใหญ่ แต่งกายสุภาพ คลุมไหล่และเข่า",
      en: "Home of the large golden Buddha. Dress modestly — shoulders and knees covered.",
    },
    x: 78,
    y: 46,
  },
  {
    n: 5,
    name: { th: "MRT หัวลำโพง", en: "MRT Hua Lamphong" },
    time: { th: "เดิน ~12 นาที", en: "~12 min walk" },
    body: {
      th: "รถไฟใต้ดินสายสีน้ำเงิน ไปสีลม สุขุมวิท และต่อแอร์พอร์ตเรลลิงก์ที่สถานีเพชรบุรี",
      en: "Blue Line metro to Silom and Sukhumvit, with the Airport Rail Link change at Phetchaburi.",
    },
    x: 86,
    y: 70,
  },
  {
    n: 6,
    name: { th: "อาหารริมทางเจริญกรุง", en: "Street food on Charoen Krung" },
    time: { th: "เดิน 2–10 นาที", en: "2–10 min walk" },
    body: {
      th: "ข้าวมันไก่ บะหมี่ และขนมหวานเจ้าเก่าตลอดถนน ถามเราได้ว่าวันนี้ร้านไหนเปิด",
      en: "Chicken rice, noodles and old-school desserts all along the road. Ask us which ones are open today.",
    },
    x: 55,
    y: 66,
    image: "food",
    imageAlt: {
      th: "อาหารไทยหลายจานบนโต๊ะไม้ ต้มยำ ยำ หมูย่าง และผักสด",
      en: "A spread of Thai dishes on a wooden table: tom yum, salads, grilled pork and fresh greens",
    },
  },
  {
    n: 7,
    name: { th: "โลหะปราสาท วัดราชนัดดาฯ", en: "Loha Prasat, Wat Ratchanatda" },
    time: { th: "เรือหรือแท็กซี่ ~25 นาที", en: "~25 min by boat or taxi" },
    body: {
      th: "ปราสาทยอดโลหะในเขตเมืองเก่า ไปช่วงเช้าก่อนแดดแรง และต่อไปภูเขาทองได้",
      en: "The metal-spired temple in the old town. Go in the morning before the heat, and walk on to the Golden Mount.",
    },
    x: 18,
    y: 14,
    image: "temple",
    imageAlt: {
      th: "โลหะปราสาท วัดราชนัดดาราม ใต้ท้องฟ้าสีฟ้า ด้านหน้าเป็นสวนและอาคารทรงไทย",
      en: "Loha Prasat at Wat Ratchanatda under a blue sky, with gardens and Thai-style pavilions in front",
    },
  },
];

export const gettingHere = {
  title: { th: "การเดินทางมาบ้านซอยเก้า", en: "Getting here" },
  address: {
    th: "ที่อยู่ตัวอย่าง — ซอยในย่านตลาดน้อย ถนนเจริญกรุง (ที่พักสมมติ ไม่มีที่ตั้งจริง)",
    en: "Demo address — a soi in Talat Noi, off Charoen Krung Road (fictional property, no real location)",
  },
  routes: [
    {
      from: { th: "จากสุวรรณภูมิ", en: "From Suvarnabhumi" },
      how: {
        th: "แอร์พอร์ตเรลลิงก์ไปมักกะสัน เดินต่อ MRT เพชรบุรี แล้วนั่งสายสีน้ำเงินไปหัวลำโพง ประมาณ 1 ชั่วโมง หรือแท็กซี่ 45–75 นาทีขึ้นกับรถติด",
        en: "Airport Rail Link to Makkasan, walk to MRT Phetchaburi, then the Blue Line to Hua Lamphong — about an hour. Or a taxi, 45–75 minutes depending on traffic.",
      },
    },
    {
      from: { th: "จากดอนเมือง", en: "From Don Mueang" },
      how: {
        th: "แท็กซี่ประมาณ 40–70 นาที หรือรถไฟสายสีแดงแล้วต่อ MRT",
        en: "Taxi, about 40–70 minutes, or the SRT Red Line then the MRT.",
      },
    },
    {
      from: { th: "ทางเรือ", en: "By river" },
      how: {
        th: "ลงท่าเรือสี่พระยา แล้วเดินประมาณ 10 นาที โทรหาเราได้ ถ้าอยากให้ไปรับที่ท่า",
        en: "Get off at Si Phraya pier and walk about 10 minutes — message us if you'd like to be met at the pier.",
      },
    },
  ],
};

export const faqs: { q: L; a: L }[] = [
  {
    q: { th: "ราคาบนเว็บไซต์คือราคาจริงไหม", en: "Are the prices on this site real?" },
    a: {
      th: "ไม่ใช่ นี่คือเว็บไซต์ตัวอย่าง ราคาทั้งหมดเป็นตัวอย่าง ในเว็บไซต์จริง ราคาและห้องว่างจะมาจากระบบจองของที่พักโดยตรง",
      en: "No — this is a demo website and every rate is a sample. On a live site, prices and availability come straight from the property's booking engine.",
    },
  },
  {
    q: { th: "เช็กอินก่อนเวลาได้ไหม", en: "Can I check in early?" },
    a: {
      th: "ถ้าห้องพร้อมก็ได้ และฝากกระเป๋าได้เสมอ บอกเวลาที่มาถึงในคำขอจองได้เลย",
      en: "If the room is ready, yes — and you can always leave your bags. Add your arrival time to your request.",
    },
  },
  {
    q: { th: "มีที่จอดรถไหม", en: "Is there parking?" },
    a: {
      th: "ไม่มีที่จอดในซอย มีลานจอดรถเอกชนบนถนนเจริญกรุงห่างไปประมาณ 5 นาที",
      en: "Not in the soi. There's a private car park on Charoen Krung about five minutes' walk away.",
    },
  },
  {
    q: { th: "เหมาะกับเด็กเล็กไหม", en: "Is it suitable for young children?" },
    a: {
      th: "ยินดีต้อนรับ แต่บ้านมีบันไดชันและไม่มีลิฟต์ ลอฟต์สวีทเหมาะกับครอบครัวที่สุด",
      en: "Children are welcome, but the house has steep stairs and no lift. The Loft Suite works best for families.",
    },
  },
  {
    q: { th: "พักรายเดือนได้ไหม", en: "Do you do monthly stays?" },
    a: {
      th: "ได้ที่สตูดิโออพาร์ตเมนต์ ขั้นต่ำ 1 เดือน รวมทำความสะอาดสัปดาห์ละครั้ง ค่าไฟคิดตามจริง",
      en: "Yes, in the Studio Apartment: one-month minimum, weekly housekeeping included, electricity charged at cost.",
    },
  },
];

export const request = {
  title: { th: "ส่งคำขอจอง", en: "Send a stay request" },
  intro: {
    th: "ส่งวันที่และห้องที่สนใจ เราจะยืนยันห้องว่างและราคาก่อนรับชำระใดๆ",
    en: "Send your dates and room. We confirm availability and the price before anything is paid.",
  },
  demoMode: {
    th: "โหมดตัวอย่าง: แบบฟอร์มนี้ตรวจสอบวันที่และแสดงตัวอย่างคำขอ แต่ไม่มีการจองห้อง ไม่มีการรับชำระเงิน และไม่ได้ส่งข้อมูลไปที่ใด",
    en: "Demo mode: this form checks your dates and previews the request, but no room is held, no payment is taken, and nothing is sent.",
  },
  privacy: {
    th: "เราไม่ขอเลขบัตรเครดิตหรือหนังสือเดินทางในขั้นตอนนี้ ข้อมูลใช้เพื่อตอบคำขอนี้เท่านั้น ตามหลัก PDPA",
    en: "We never ask for card or passport details at this stage. Your details are used only to answer this request, in line with Thailand's PDPA.",
  },
  required: { th: "จำเป็น", en: "required" },
  optional: { th: "ไม่บังคับ", en: "optional" },
  fields: {
    room: { th: "ห้อง", en: "Room" },
    roomPlaceholder: { th: "เลือกห้อง", en: "Choose a room" },
    checkIn: { th: "เช็กอิน", en: "Check-in" },
    checkOut: { th: "เช็กเอาต์", en: "Check-out" },
    guests: { th: "ผู้เข้าพัก", en: "Guests" },
    name: { th: "ชื่อ", en: "Your name" },
    method: { th: "ให้ตอบกลับทาง", en: "How should we reply?" },
    lineId: { th: "LINE ID", en: "LINE ID" },
    phone: { th: "เบอร์โทรศัพท์", en: "Phone number" },
    email: { th: "อีเมล", en: "Email" },
    requests: { th: "เวลาที่มาถึงหรือคำขอพิเศษ", en: "Arrival time or special requests" },
    consent: {
      th: "ยินยอมให้ที่พักใช้ข้อมูลนี้เพื่อตอบคำขอนี้เท่านั้น",
      en: "I agree the property may use these details only to answer this request.",
    },
  },
  methods: { line: { th: "LINE", en: "LINE" }, phone: { th: "โทรศัพท์", en: "Phone" }, email: { th: "อีเมล", en: "Email" } },
  nights: { th: (n: number) => `${n} คืน`, en: (n: number) => `${n} night${n === 1 ? "" : "s"}` },
  submitDemo: { th: "ตรวจสอบและดูตัวอย่าง", en: "Check and preview" },
  submit: { th: "ส่งคำขอ", en: "Send request" },
  sending: { th: "กำลังส่ง…", en: "Sending…" },
  errors: {
    summary: { th: "กรุณาตรวจสอบข้อมูลต่อไปนี้", en: "Please check the following" },
    room: { th: "เลือกห้อง", en: "Choose a room" },
    checkIn: { th: "เลือกวันเช็กอิน", en: "Choose a check-in date" },
    past: { th: "วันเช็กอินต้องไม่ใช่วันที่ผ่านมาแล้ว", en: "Check-in can't be in the past" },
    checkOut: { th: "เลือกวันเช็กเอาต์", en: "Choose a check-out date" },
    order: { th: "วันเช็กเอาต์ต้องอยู่หลังวันเช็กอิน", en: "Check-out must be after check-in" },
    tooLong: { th: "พักได้สูงสุด 28 คืน หากนานกว่านั้นดูสตูดิโอรายเดือน", en: "Up to 28 nights — for longer, see the monthly studio" },
    tooShort: { th: "สตูดิโอรายเดือนพักขั้นต่ำ 28 คืน", en: "The monthly studio needs at least 28 nights" },
    guests: { th: "ห้องนี้พักได้ไม่ถึงจำนวนผู้เข้าพัก", en: "That room doesn't fit this many guests" },
    name: { th: "ใส่ชื่อที่ให้เราเรียก", en: "Enter a name we can use" },
    method: { th: "เลือกช่องทางตอบกลับ", en: "Choose how we should reply" },
    lineId: { th: "ใส่ LINE ID ให้ถูกต้อง", en: "Enter a valid LINE ID" },
    phone: { th: "ใส่เบอร์โทร 9–10 หลัก ขึ้นต้นด้วย 0 หรือ +66", en: "Enter a Thai number: 9–10 digits, starting 0 or +66" },
    email: { th: "ใส่อีเมลให้ถูกรูปแบบ", en: "Enter a valid email address" },
    requests: { th: "ไม่เกิน 500 ตัวอักษร", en: "Please keep this under 500 characters" },
    consent: { th: "กรุณายืนยันการยินยอม", en: "Please confirm consent" },
  },
  preview: {
    title: { th: "ตัวอย่างเท่านั้น — ยังไม่มีการจอง", en: "Preview only — nothing is booked" },
    body: {
      th: "นี่คือเว็บไซต์ตัวอย่าง ไม่มีการกันห้องหรือรับชำระเงิน ถ้าเป็นที่พักจริง เจ้าหน้าที่จะตอบกลับพร้อมยืนยันห้องว่างและราคา",
      en: "This is a demo website: no room is held and no payment is taken. At a real property, the front desk would reply to confirm availability and the price.",
    },
    edit: { th: "กลับไปแก้ไข", en: "Edit request" },
  },
  sent: {
    title: { th: "ได้รับคำขอแล้ว", en: "Request received" },
    body: { th: "เราจะตอบกลับพร้อมยืนยันห้องว่างและราคา ยังไม่มีการเรียกเก็บเงิน", en: "We'll reply to confirm availability and the price. Nothing has been charged." },
  },
  failed: {
    th: "ส่งไม่สำเร็จ ข้อมูลยังอยู่ในแบบฟอร์ม กรุณาลองอีกครั้ง",
    en: "That didn't go through. Your answers are still here — please try again.",
  },
};

export const footer = {
  notConnected: { th: "ยังไม่ได้เชื่อมต่อในเว็บไซต์ตัวอย่าง", en: "not connected in this demo" },
  credits: {
    th: "ภาพประกอบจาก Unsplash ใช้เพื่อประกอบแนวคิดเท่านั้น ภาพห้องพักไม่ใช่ที่พักนี้ ภาพสถานที่ในละแวกเป็นสถานที่จริงในกรุงเทพฯ",
    en: "Photography from Unsplash, for illustration only. Room photos are not this property; neighbourhood photos show real Bangkok places.",
  },
  builtBy: { th: "ออกแบบและพัฒนาเป็นงานตัวอย่างโดย", en: "Designed and built as a concept by" },
  back: { th: "กลับไปหน้าผลงาน Klickdoe", en: "Back to the Klickdoe portfolio" },
};
