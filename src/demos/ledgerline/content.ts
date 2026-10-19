import type { L } from "@/lib/i18n";
import type { DeadlineId } from "./deadlines";
import type { Volume } from "./fees";

/**
 * Ledgerline Advisory copy, Thai and English side by side. The firm is
 * fictional; case stories are illustrative scenarios (not clients), fees are
 * samples, and tax facts carry footnotes pointing to the official source.
 */

export const meta = {
  title: {
    th: "เลดเจอร์ไลน์ แอดไวซอรี — บัญชีและภาษีสำหรับธุรกิจขนาดเล็กในกรุงเทพฯ (เว็บไซต์ตัวอย่าง)",
    en: "Ledgerline Advisory — Accounting and tax for small businesses in Bangkok (concept demo)",
  },
  description: {
    th: "ทำบัญชีรายเดือน ยื่นภาษี เงินเดือนและประกันสังคม จดทะเบียนบริษัท อธิบายเป็นภาษาที่เข้าใจได้ ทั้งไทยและอังกฤษ — เว็บไซต์ตัวอย่างโดย Klickdoe",
    en: "Monthly bookkeeping, tax filings, payroll and company set-up — explained in plain Thai or English. A concept demo by Klickdoe.",
  },
} satisfies Record<string, L>;

export const demoNotice: L = {
  th: "เว็บไซต์ตัวอย่างโดย Klickdoe — เลดเจอร์ไลน์เป็นบริษัทสมมติ เรื่องราวลูกค้าเป็นสถานการณ์สมมติ และค่าบริการเป็นตัวอย่าง",
  en: "Concept demo by Klickdoe — Ledgerline is fictional, case stories are illustrative scenarios, and fees are samples.",
};

export const nav = {
  skip: { th: "ข้ามไปยังเนื้อหา", en: "Skip to content" },
  label: { th: "เมนูหลัก", en: "Main navigation" },
  items: [
    { id: "stories", th: "เรื่องราว", en: "Stories" },
    { id: "services", th: "บริการและค่าบริการ", en: "Services & fees" },
    { id: "month", th: "หนึ่งเดือนกับเรา", en: "A month with us" },
    { id: "faq", th: "คำถาม", en: "FAQ" },
  ],
  cta: { th: "นัดคุย 30 นาที", en: "Book an intro call" },
  langLabel: { th: "เปลี่ยนภาษา", en: "Change language" },
};

export const hero = {
  issue: { th: "บัญชี · ภาษี · บริษัท — กรุงเทพฯ", en: "Accounts · Tax · Company — Bangkok" },
  title: {
    th: "บัญชี ภาษี และเอกสารบริษัท เราดูแลให้ และอธิบายให้เข้าใจ",
    en: "Books, tax dates and company paperwork — handled, and explained.",
  },
  standfirst: {
    th: "สำหรับร้าน สตาร์ทอัพ และบริษัทเล็กที่ไม่อยากเดาเรื่องภาษีอีกต่อไป ทำงานผ่าน LINE ตอบเป็นภาษาไทยหรืออังกฤษ ราคารายเดือนบอกชัดตั้งแต่แรก",
    en: "For shops, start-ups and small companies who are tired of guessing about tax. We work over LINE, answer in Thai or English, and quote a fixed monthly fee up front.",
  },
  cta: { th: "นัดคุย 30 นาที ไม่มีค่าใช้จ่าย", en: "Book a free 30-minute intro call" },
  imageAlt: {
    th: "มือกำลังเซ็นเอกสารบนโต๊ะ",
    en: "A hand signing a document on a desk",
  },
};

export const deadlines = {
  title: { th: "กำหนดยื่นที่ใกล้ที่สุด", en: "Coming up: filing dates" },
  lead: { th: "สำหรับกิจการที่ยื่นแบบออนไลน์", en: "For businesses that file online" },
  names: {
    wht: { th: "ภ.ง.ด. 1, 3, 53 (ภาษีหัก ณ ที่จ่าย)", en: "PND 1, 3, 53 (withholding tax)" },
    sso: { th: "เงินสมทบประกันสังคม", en: "Social Security contributions" },
    vat: { th: "ภ.พ. 30 (ภาษีมูลค่าเพิ่ม)", en: "PP 30 (VAT return)" },
  } satisfies Record<DeadlineId, L>,
  period: { th: "สำหรับเดือน", en: "for" },
  days: {
    th: (n: number) => (n === 0 ? "วันนี้" : `อีก ${n} วัน`),
    en: (n: number) => (n === 0 ? "today" : `in ${n} day${n === 1 ? "" : "s"}`),
  },
  moved: { th: "เลื่อนจากวันหยุดสุดสัปดาห์", en: "moved from a weekend" },
  loading: { th: "กำลังคำนวณจากวันที่วันนี้…", en: "Working out today's dates…" },
  note: {
    th: "ไม่รวมวันหยุดนักขัตฤกษ์ ตรวจสอบวันที่สุดท้ายกับกรมสรรพากรเสมอ",
    en: "Public holidays aren't included — always confirm final dates with the Revenue Department.",
  },
};

export const stories = {
  kicker: { th: "เรื่องราว", en: "Stories" },
  title: { th: "สามคำถามที่เราได้ยินบ่อยที่สุด", en: "Three questions we hear most" },
  label: { th: "สถานการณ์สมมติ — ไม่ใช่ลูกค้าจริง", en: "Illustrative scenario — not a real client" },
  heads: {
    situation: { th: "สถานการณ์", en: "The situation" },
    work: { th: "สิ่งที่เราจะทำ", en: "What we'd do" },
    after: { th: "หลังจากนั้น", en: "Afterwards" },
  },
  items: [
    {
      id: "cafe",
      question: { th: "“ใบเสร็จเต็มกล่อง ต้องทำอะไรก่อน”", en: "“I have a box of receipts. Where do I start?”" },
      who: { th: "ร้านกาแฟ 2 สาขา ย่านอารีย์", en: "A two-branch café in Ari" },
      situation: {
        th: "เจ้าของเก็บใบเสร็จไว้ทั้งปีในกล่อง รายได้ผ่านแอปส่งอาหารสามเจ้า และไม่แน่ใจว่าต้องจดภาษีมูลค่าเพิ่มหรือยัง",
        en: "The owner kept a year of receipts in a box, takes orders through three delivery apps, and isn't sure whether the café should be VAT-registered yet.",
      },
      work: {
        th: "ตั้งระบบส่งรูปใบเสร็จทาง LINE ทุกสัปดาห์ รวมยอดจากแอปส่งอาหาร และเทียบรายได้กับเกณฑ์จดทะเบียนภาษีมูลค่าเพิ่ม",
        en: "Set up a weekly photo-the-receipts routine over LINE, pull together the delivery-app statements, and check turnover against the VAT registration threshold.",
      },
      after: {
        th: "ปิดงบรายเดือนได้ภายในวันที่ 10 รู้ล่วงหน้าว่าจะต้องจดภาษีมูลค่าเพิ่มเมื่อไร",
        en: "Monthly accounts closed by the 10th, and a clear warning well before VAT registration becomes necessary.",
      },
      note: 1,
      image: "cafe",
      imageAlt: {
        th: "ลูกค้ากำลังชำระเงินที่เคาน์เตอร์ร้านกาแฟ",
        en: "A customer paying at a café counter",
      },
    },
    {
      id: "founder",
      question: { th: "“ฉันเป็นชาวต่างชาติ ตั้งบริษัทในไทยได้อย่างไร”", en: "“I'm a foreigner. How do I set up a company here?”" },
      who: { th: "ผู้ก่อตั้งซอฟต์แวร์สตูดิโอ", en: "A founder starting a software studio" },
      situation: {
        th: "ต้องการตั้งบริษัท จ้างพนักงานคนไทย และขอใบอนุญาตทำงาน แต่ไม่รู้ว่าต้องเริ่มจากอะไรและใช้เวลานานแค่ไหน",
        en: "Wants a company, Thai staff and a work permit, but doesn't know the order things happen in or how long it takes.",
      },
      work: {
        th: "วางลำดับขั้นตอนเป็นลายลักษณ์อักษร จดทะเบียนบริษัท เปิดบัญชีธนาคาร ตั้งระบบเงินเดือนและประกันสังคม และประสานกับทนายความที่มีใบอนุญาตในเรื่องโครงสร้างผู้ถือหุ้นและวีซ่า",
        en: "Write out the sequence, register the company, open the bank account, set up payroll and Social Security, and work alongside a licensed lawyer on shareholding and visa questions.",
      },
      after: {
        th: "รู้ว่าแต่ละขั้นใช้เวลาเท่าไร และใครรับผิดชอบอะไร ไม่มีเรื่องเซอร์ไพรส์ตอนยื่นภาษีปีแรก",
        en: "A known timeline, clear owners for each step, and no surprises at the first year-end.",
      },
      note: 2,
      image: "founder",
      imageAlt: {
        th: "ชายนั่งทำงานกับแล็ปท็อปและโทรศัพท์ในร้านกาแฟที่มีต้นไม้",
        en: "A man working on a laptop and phone in a café with plants",
      },
    },
    {
      id: "shop",
      question: { th: "“ยอดขายออนไลน์โตเร็ว ภาษีจะตามทันไหม”", en: "“My online sales are growing fast. Will tax catch up with me?”" },
      who: { th: "ร้านขายของออนไลน์บนมาร์เก็ตเพลส", en: "An online shop on the marketplaces" },
      situation: {
        th: "ขายในนามบุคคลธรรมดามาสองปี ยอดขายเพิ่มขึ้นทุกเดือน และเริ่มถูกขอใบกำกับภาษีจากลูกค้าธุรกิจ",
        en: "Two years trading as an individual, sales up every month, and business customers starting to ask for tax invoices.",
      },
      work: {
        th: "เปรียบเทียบภาษีระหว่างบุคคลธรรมดากับนิติบุคคลด้วยตัวเลขจริง และวางแผนการเปลี่ยนแปลงในช่วงที่เหมาะสม",
        en: "Compare tax as an individual versus as a company using real numbers, and plan the switch for a sensible moment.",
      },
      after: {
        th: "ตัดสินใจได้จากตัวเลข ไม่ใช่จากคำแนะนำในกลุ่มแชท",
        en: "A decision made from numbers, not from advice in a group chat.",
      },
      note: 1,
      image: "bags",
      imageAlt: {
        th: "ถุงกระดาษสีแดงและดำหลายใบวางเรียงกัน",
        en: "Red and black paper shopping bags laid out together",
      },
    },
  ],
};

export const services = {
  kicker: { th: "บริการ", en: "Services" },
  title: { th: "สิ่งที่เราทำ และค่าบริการโดยประมาณ", en: "What we do, and roughly what it costs" },
  items: [
    { name: { th: "ทำบัญชีและยื่นภาษีรายเดือน", en: "Monthly bookkeeping & filings" }, body: { th: "บันทึกบัญชี ยื่น ภ.ง.ด. และ ภ.พ. 30 รายงานสั้นๆ ทุกเดือน", en: "Bookkeeping, withholding and VAT returns, and a one-page monthly report." } },
    { name: { th: "เงินเดือนและประกันสังคม", en: "Payroll & Social Security" }, body: { th: "สลิปเงินเดือน ภาษีหัก ณ ที่จ่าย และเงินสมทบ", en: "Payslips, withholding and contributions." } },
    { name: { th: "จดทะเบียนบริษัท", en: "Company set-up" }, body: { th: "จดทะเบียน เปิดบัญชี และตั้งระบบตั้งแต่วันแรก", en: "Registration, bank account and systems from day one." } },
    { name: { th: "งบการเงินปลายปี", en: "Year-end accounts" }, body: { th: "ปิดงบ ประสานผู้สอบบัญชีรับอนุญาต และยื่น ภ.ง.ด. 50", en: "Closing the year, working with a licensed auditor, and the PND 50 return." } },
  ],
  estimator: {
    title: { th: "ประเมินค่าทำบัญชีรายเดือน", en: "Estimate a monthly bookkeeping fee" },
    volume: { th: "จำนวนรายการต่อเดือน", en: "Transactions per month" },
    volumes: {
      small: { th: "ไม่เกิน 50", en: "Up to 50" },
      medium: { th: "51–150", en: "51–150" },
      large: { th: "151–400", en: "151–400" },
    } satisfies Record<Volume, L>,
    vat: { th: "จดทะเบียนภาษีมูลค่าเพิ่มแล้ว", en: "VAT-registered" },
    employees: { th: "จำนวนพนักงาน", en: "Employees on payroll" },
    result: { th: "ค่าบริการตัวอย่างต่อเดือน", en: "Sample monthly fee" },
    larger: { th: "มากกว่า 400 รายการ? คุยกันก่อนเพื่อเสนอราคาเฉพาะ", en: "More than 400 transactions? Let's talk for a tailored quote." },
    note: {
      th: "ตัวเลขตัวอย่างสำหรับเว็บไซต์สาธิต ไม่ใช่ใบเสนอราคา ราคาจริงขึ้นกับความซับซ้อนของธุรกิจ",
      en: "Sample figures for a demo website, not a quote. Real fees depend on how complex the business is.",
    },
  },
};

export const month = {
  kicker: { th: "หนึ่งเดือนกับเรา", en: "A month with us" },
  title: { th: "จังหวะการทำงานที่คาดเดาได้", en: "A rhythm you can predict" },
  steps: [
    { day: { th: "วันที่ 1–5", en: "Days 1–5" }, body: { th: "ส่งรูปใบเสร็จ ใบแจ้งหนี้ และ statement ทาง LINE หรือโฟลเดอร์ร่วม", en: "Send receipts, invoices and statements by LINE or a shared folder." } },
    { day: { th: "ภายในวันที่ 10", en: "By the 10th" }, body: { th: "เรากระทบยอดบัญชีและถามเฉพาะสิ่งที่ขาด", en: "We reconcile and ask only about what's missing." } },
    { day: { th: "ภายในวันที่ 15", en: "By the 15th" }, body: { th: "ยื่นภาษีหัก ณ ที่จ่ายและเงินสมทบประกันสังคม", en: "Withholding tax and Social Security filed." } },
    { day: { th: "ภายในวันที่ 23", en: "By the 23rd" }, body: { th: "ยื่น ภ.พ. 30 สำหรับกิจการที่จดภาษีมูลค่าเพิ่ม", en: "VAT return filed for VAT-registered businesses." } },
    { day: { th: "สิ้นเดือน", en: "Month end" }, body: { th: "รายงานหนึ่งหน้า รายได้ ค่าใช้จ่าย และภาษีที่ต้องเตรียม", en: "A one-page report: income, costs and tax to set aside." } },
  ],
  imageAlt: {
    th: "คนหลายคนนั่งประชุมรอบโต๊ะไม้ยาว มีสมุดและแล็ปท็อป",
    en: "People meeting around a long wooden table with notebooks and laptops",
  },
};

export const principles = {
  title: { th: "สิ่งที่เรายึดถือ", en: "How we work" },
  items: [
    { th: "ค่าบริการรายเดือนคงที่ ระบุสิ่งที่รวมไว้ชัดเจน", en: "Fixed monthly fees, with what's included written down." },
    { th: "ตอบคำถามภายในหนึ่งวันทำการ", en: "Questions answered within one working day." },
    { th: "งานตรวจสอบบัญชีทำโดยผู้สอบบัญชีรับอนุญาตเสมอ", en: "Audits are always signed by a licensed auditor." },
    { th: "เรื่องกฎหมายและวีซ่า เราประสานทนายความที่มีใบอนุญาต ไม่ให้คำแนะนำแทน", en: "Legal and visa matters go to licensed lawyers — we coordinate, we don't advise on them." },
  ],
  auditor: {
    th: "ผู้สอบบัญชีรับอนุญาต: [ชื่อ, เลขทะเบียน] — ข้อมูลตัวอย่าง",
    en: "Licensed auditor: [name, CPA registration no.] — placeholder",
  },
};

export const faqs: { q: L; a: L }[] = [
  {
    q: { th: "ต้องจดทะเบียนภาษีมูลค่าเพิ่มเมื่อไร", en: "When do I need to register for VAT?" },
    a: { th: "เมื่อรายได้จากการขายสินค้าหรือบริการเกิน 1.8 ล้านบาทต่อปี¹ บางกิจการเลือกจดก่อนถึงเกณฑ์ เราช่วยคำนวณว่าแบบไหนคุ้มกว่า", en: "Once taxable turnover goes above ฿1.8 million a year.¹ Some businesses register earlier by choice — we'll work out which suits you." },
  },
  {
    q: { th: "เปลี่ยนสำนักงานบัญชีกลางปีได้ไหม", en: "Can I switch accountants mid-year?" },
    a: { th: "ได้ เราขอข้อมูลบัญชีและแบบที่ยื่นแล้วจากสำนักงานเดิม และตรวจสอบให้ก่อนรับงานต่อ", en: "Yes. We collect your records and past filings from your current accountant and check them before taking over." },
  },
  {
    q: { th: "ช่วยเรื่อง BOI หรือใบอนุญาตทำงานได้ไหม", en: "Can you help with BOI or work permits?" },
    a: { th: "เราเตรียมข้อมูลด้านบัญชีและเงินเดือนที่ต้องใช้ และประสานกับทนายความหรือตัวแทนที่มีใบอนุญาตสำหรับการยื่นเรื่อง²", en: "We prepare the accounting and payroll side and coordinate with licensed lawyers or agents who handle the applications.²" },
  },
  {
    q: { th: "ต้องมาที่สำนักงานไหม", en: "Do I need to come to the office?" },
    a: { th: "ไม่จำเป็น ส่วนใหญ่ทำงานผ่าน LINE อีเมล และโฟลเดอร์ร่วม นัดเจอได้เมื่อต้องการ", en: "No. Most work happens over LINE, email and a shared folder — we meet in person when it helps." },
  },
];

export const footnotes: { n: number; text: L }[] = [
  {
    n: 1,
    text: {
      th: "เกณฑ์รายได้จดทะเบียนภาษีมูลค่าเพิ่ม 1.8 ล้านบาทต่อปี ตามประมวลรัษฎากร ตรวจสอบข้อมูลล่าสุดที่ rd.go.th",
      en: "VAT registration threshold of ฿1.8 million annual turnover under the Thai Revenue Code. Check the latest at rd.go.th.",
    },
  },
  {
    n: 2,
    text: {
      th: "ในเว็บไซต์จริง ควรระบุชื่อสำนักงานกฎหมายหรือตัวแทนที่ร่วมงาน และขอบเขตความรับผิดชอบ",
      en: "A live site should name the partner law firm or agent and state exactly who is responsible for what.",
    },
  },
];

export const intro = {
  title: { th: "นัดคุย 30 นาที", en: "Book a 30‑minute intro call" },
  lead: {
    th: "ไม่มีค่าใช้จ่าย ไม่มีข้อผูกมัด บอกเราสั้นๆ ว่าธุรกิจอยู่ในขั้นไหน แล้วเราจะเสนอเวลาโทรคุย",
    en: "Free, no obligation. Tell us briefly where the business is, and we'll suggest a time to talk.",
  },
  demoMode: {
    th: "โหมดตัวอย่าง: แบบฟอร์มนี้ตรวจสอบข้อมูลและแสดงตัวอย่างคำขอ แต่ไม่ได้ส่งข้อมูลไปที่ใด",
    en: "Demo mode: this form checks your answers and previews the request, but nothing is sent.",
  },
  privacy: {
    th: "ไม่ต้องส่งเอกสารหรือข้อมูลการเงินในขั้นนี้ ข้อมูลใช้เพื่อนัดคุยเท่านั้น ตามหลัก PDPA",
    en: "Don't send documents or financial details at this stage. Your details are used only to arrange the call, in line with Thailand's PDPA.",
  },
  required: { th: "จำเป็น", en: "required" },
  fields: {
    stage: { th: "ธุรกิจอยู่ในขั้นไหน", en: "Where is the business?" },
    needs: { th: "ต้องการให้ช่วยเรื่องอะไร", en: "What do you need help with?" },
    structure: { th: "รูปแบบธุรกิจ", en: "Business structure" },
    revenue: { th: "รายได้ต่อปีโดยประมาณ", en: "Rough annual revenue" },
    language: { th: "ภาษาที่สะดวก", en: "Preferred language" },
    name: { th: "ชื่อ", en: "Your name" },
    method: { th: "ให้ติดต่อกลับทาง", en: "How should we reply?" },
    lineId: { th: "LINE ID", en: "LINE ID" },
    phone: { th: "เบอร์โทรศัพท์", en: "Phone number" },
    email: { th: "อีเมล", en: "Email" },
    consent: { th: "ยินยอมให้ใช้ข้อมูลนี้เพื่อนัดคุยเท่านั้น", en: "I agree these details may be used only to arrange the call." },
  },
  stages: { idea: { th: "ยังไม่ได้เริ่ม", en: "Not started yet" }, new: { th: "เปิดไม่ถึง 1 ปี", en: "Under a year old" }, running: { th: "เปิดมาแล้วหลายปี", en: "Several years in" } },
  needs: {
    setup: { th: "จดทะเบียนบริษัท", en: "Company set-up" },
    books: { th: "ทำบัญชีรายเดือน", en: "Monthly bookkeeping" },
    payroll: { th: "เงินเดือน", en: "Payroll" },
    vat: { th: "ภาษีมูลค่าเพิ่ม", en: "VAT" },
    yearend: { th: "ปิดงบปลายปี", en: "Year-end accounts" },
  },
  structures: {
    individual: { th: "บุคคลธรรมดา", en: "Individual / sole trader" },
    thaico: { th: "บริษัทจำกัด", en: "Thai limited company" },
    foreign: { th: "บริษัทที่มีผู้ถือหุ้นต่างชาติ", en: "Foreign-owned company" },
    unsure: { th: "ยังไม่แน่ใจ", en: "Not sure yet" },
  },
  revenues: {
    under: { th: "ไม่เกิน 1.8 ล้านบาท", en: "Under ฿1.8M" },
    mid: { th: "1.8–10 ล้านบาท", en: "฿1.8M–10M" },
    high: { th: "มากกว่า 10 ล้านบาท", en: "Over ฿10M" },
    na: { th: "ยังไม่มีรายได้", en: "No revenue yet" },
  },
  languages: { th: { th: "ไทย", en: "Thai" }, en: { th: "อังกฤษ", en: "English" } },
  methods: { line: { th: "LINE", en: "LINE" }, phone: { th: "โทรศัพท์", en: "Phone" }, email: { th: "อีเมล", en: "Email" } },
  submitDemo: { th: "ตรวจสอบและดูตัวอย่าง", en: "Check and preview" },
  submit: { th: "ส่งคำขอ", en: "Send request" },
  sending: { th: "กำลังส่ง…", en: "Sending…" },
  errors: {
    summary: { th: "กรุณาตรวจสอบข้อมูลต่อไปนี้", en: "Please check the following" },
    stage: { th: "เลือกขั้นของธุรกิจ", en: "Choose where the business is" },
    needs: { th: "เลือกอย่างน้อยหนึ่งเรื่อง", en: "Choose at least one" },
    structure: { th: "เลือกรูปแบบธุรกิจ", en: "Choose a structure" },
    name: { th: "ใส่ชื่อที่ให้เราเรียก", en: "Enter a name we can use" },
    method: { th: "เลือกช่องทางติดต่อกลับ", en: "Choose how we should reply" },
    lineId: { th: "ใส่ LINE ID ให้ถูกต้อง", en: "Enter a valid LINE ID" },
    phone: { th: "ใส่เบอร์โทรไทย 9–10 หลัก", en: "Enter a Thai number (9–10 digits)" },
    email: { th: "ใส่อีเมลให้ถูกรูปแบบ", en: "Enter a valid email address" },
    consent: { th: "กรุณายืนยันการยินยอม", en: "Please confirm consent" },
  },
  preview: {
    title: { th: "ตัวอย่างเท่านั้น — ยังไม่ได้ส่ง", en: "Preview only — nothing was sent" },
    body: { th: "นี่คือเว็บไซต์ตัวอย่าง ถ้าเป็นบริษัทจริง เราจะตอบกลับพร้อมเสนอเวลาโทรคุย", en: "This is a demo website. A real firm would reply with a few times for the call." },
    edit: { th: "กลับไปแก้ไข", en: "Edit request" },
  },
  sent: { title: { th: "ได้รับคำขอแล้ว", en: "Request received" }, body: { th: "เราจะตอบกลับพร้อมเสนอเวลาโทรคุย", en: "We'll reply with a few times for the call." } },
  failed: { th: "ส่งไม่สำเร็จ กรุณาลองอีกครั้ง", en: "That didn't go through — please try again." },
};

export const footer = {
  notConnected: { th: "ยังไม่ได้เชื่อมต่อในเว็บไซต์ตัวอย่าง", en: "not connected in this demo" },
  address: {
    th: "ที่อยู่ตัวอย่าง — ย่านอโศก (บริษัทสมมติ ไม่มีที่ตั้งจริง)",
    en: "Demo address — Asok (fictional firm, no real location)",
  },
  credits: { th: "ภาพประกอบจาก Unsplash ใช้เพื่อประกอบแนวคิดเท่านั้น", en: "Photography from Unsplash, for illustration only." },
  builtBy: { th: "ออกแบบและพัฒนาเป็นงานตัวอย่างโดย", en: "Designed and built as a concept by" },
  back: { th: "กลับไปหน้าผลงาน Klickdoe", en: "Back to the Klickdoe portfolio" },
  notes: { th: "หมายเหตุ", en: "Notes" },
};
