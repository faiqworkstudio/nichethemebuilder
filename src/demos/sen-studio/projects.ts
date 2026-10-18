import type { StaticImageData } from "next/image";
import type { L } from "@/lib/i18n";

import ariBedroom from "./assets/ari-bedroom.jpg";
import ariLiving from "./assets/ari-living.jpg";
import ariBath from "./assets/ari-bath.jpg";
import thonglorLiving from "./assets/thonglor-living.jpg";
import thonglorBedroom from "./assets/thonglor-bedroom.jpg";
import thonglorBath from "./assets/thonglor-bath.jpg";
import silomFloor from "./assets/silom-office-floor.jpg";
import silomLounge from "./assets/silom-office-lounge.jpg";
import silomCorridor from "./assets/silom-office-corridor.jpg";
import bangnaLiving from "./assets/bangna-living.jpg";
import bangnaKitchen from "./assets/bangna-kitchen.jpg";
import bangnaBath from "./assets/bangna-bath.jpg";
import riversideLiving from "./assets/riverside-living.jpg";
import riversideShower from "./assets/riverside-shower.jpg";

export type ProjectType = "condo" | "house" | "office";

export type ProjectImage = {
  src: StaticImageData;
  alt: L;
  caption: L;
};

export type Project = {
  slug: string;
  code: string;
  type: ProjectType;
  title: L;
  short: L;
  location: L;
  area: number;
  /** Planned duration on site, in weeks. */
  weeks: number;
  /** Illustrative budget band — matches enquiry form values. */
  budget: BudgetBand;
  scope: L<string[]>;
  brief: L;
  approach: L<string[]>;
  materials: L<string[]>;
  images: ProjectImage[];
  /** Which image the project index previews (defaults to the first). */
  indexImage?: number;
};

export type BudgetBand = "u500k" | "500k-1m" | "1m-2m" | "2m-4m" | "o4m" | "unsure";

export const projectTypeLabel: L<Record<ProjectType, string>> = {
  th: { condo: "คอนโด", house: "ทาวน์เฮาส์ / บ้าน", office: "ออฟฟิศ" },
  en: { condo: "Condo", house: "Townhouse / house", office: "Office" },
};

/**
 * Concept projects. These are design concepts written for the demo, illustrated
 * with licensed stock photography. They are not completed client work.
 */
export const projects: Project[] = [
  {
    slug: "ari-townhouse",
    code: "01",
    type: "house",
    title: {
      th: "ทาวน์เฮาส์อารีย์ ชั้นบนที่อยู่ได้ทั้งบ่าย",
      en: "Ari townhouse: a top floor you can use in the afternoon",
    },
    short: {
      th: "แก้ความร้อนชั้นสาม เปิดช่องบันไดรับแสง และห้องนอนใหญ่ใหม่",
      en: "Third-floor heat fixed, stair void opened to light, new main suite",
    },
    location: { th: "อารีย์, พญาไท", en: "Ari, Phaya Thai" },
    area: 180,
    weeks: 14,
    budget: "2m-4m",
    // The hero already shows the bedroom, so the index previews the stair-void room.
    indexImage: 1,
    scope: {
      th: ["ฉนวนหลังคาและฝ้าระบายอากาศ", "เปลี่ยนหน้าต่างทิศตะวันตก", "แผงบังแดดอะลูมิเนียมเจาะรู", "ห้องนอนใหญ่และห้องน้ำ", "เปิดช่องบันได"],
      en: ["Roof insulation and ventilated ceiling", "New west-facing windows", "Perforated aluminium sun screen", "Main bedroom and bathroom", "Opened stair void"],
    },
    brief: {
      th: "ทาวน์เฮาส์สามชั้นอายุราว 30 ปี ชั้นบนสุดร้อนจนใช้งานไม่ได้หลังบ่ายสองโมง เจ้าของบ้านอยากได้ห้องนอนใหญ่ที่นอนได้จริงโดยไม่ต้องเปิดแอร์ตั้งแต่กลางวัน และอยากให้กลางบ้านสว่างขึ้นโดยไม่ต้องเปิดไฟ",
      en: "A three-storey townhouse from the early 1990s. The top floor was too hot to use after 2pm. The owners wanted a main bedroom they could actually sleep in without running the air-con from midday, and a middle of the house that didn't need lights on during the day.",
    },
    approach: {
      th: [
        "ปูฉนวนบนพื้นหลังคาและทำฝ้าแบบมีช่องระบายอากาศ ลดความร้อนที่สะสมใต้หลังคา",
        "เปลี่ยนหน้าต่างทิศตะวันตกเป็นกรอบลึกขึ้น และติดแผงอะลูมิเนียมเจาะรูด้านนอก กันแดดบ่ายแต่ยังเห็นวิว",
        "เปิดช่องบันไดเดิมให้แสงจากช่องแสงบนหลังคาลงถึงชั้นสอง",
        "ห้องน้ำโทนเข้ม ใช้ช่องแสงเล็กด้านบนแทนหน้าต่าง เพื่อความเป็นส่วนตัว",
      ],
      en: [
        "Insulated the roof deck and added a ventilated ceiling so heat doesn't build up under the roof.",
        "Replaced the west windows with deeper frames and an external perforated aluminium screen — afternoon sun is blocked, the view stays.",
        "Opened the existing stair void so light from a roof skylight reaches the second floor.",
        "A darker, quieter bathroom lit by a small high-level skylight instead of a window, for privacy.",
      ],
    },
    materials: {
      th: ["พื้นไม้เอ็นจิเนียร์ผิวน้ำมัน", "ผนังฉาบปูนขาวแบบไลม์วอช", "อะลูมิเนียมเจาะรูพ่นสี", "หินขัดผิวด้าน"],
      en: ["Oiled engineered timber floor", "Lime-wash plaster walls", "Powder-coated perforated aluminium", "Honed terrazzo"],
    },
    images: [
      {
        src: ariBedroom,
        alt: {
          th: "ห้องนอนแสงแดดยามบ่าย พื้นไม้ ผนังไม้อัดโทนอ่อน และแผงบังแดดเจาะรูที่หน้าต่างกระจก",
          en: "Bedroom in afternoon sun with timber floor, pale plywood wall and a perforated screen outside the glazing",
        },
        caption: { th: "ห้องนอนใหญ่ ชั้นสาม — แผงบังแดดฝั่งตะวันตก", en: "Main bedroom, third floor — west sun screen" },
      },
      {
        src: ariLiving,
        alt: {
          th: "ห้องนั่งเล่นเพดานสูง ผนังคอนกรีตเปลือยและระแนงไม้สีเข้ม โซฟาผ้าสีเทาอุ่น",
          en: "Double-height sitting room with bare concrete, dark timber battens and a warm grey sofa",
        },
        caption: { th: "พื้นที่นั่งเล่นใต้ช่องบันไดที่เปิดใหม่", en: "Sitting area below the opened stair void" },
      },
      {
        src: ariBath,
        alt: {
          th: "ห้องน้ำโทนเข้ม อ่างอาบน้ำสีขาว และแสงจากช่องแสงด้านบน",
          en: "Dark-toned bathroom with a white freestanding bath lit from a high skylight",
        },
        caption: { th: "ห้องน้ำ — แสงจากด้านบน", en: "Bathroom — light from above" },
      },
    ],
  },
  {
    slug: "thonglor-condo",
    code: "02",
    type: "condo",
    title: {
      th: "คอนโดทองหล่อ จากสามห้องเล็กเป็นพื้นที่เดียว",
      en: "Thonglor condo: three small rooms into one",
    },
    short: {
      th: "รื้อผนังเบา รวมครัว นั่งเล่น และโต๊ะทำงานเป็นพื้นที่เดียว",
      en: "Light partitions removed; kitchen, living and desk become one room",
    },
    location: { th: "ทองหล่อ, วัฒนา", en: "Thonglor, Watthana" },
    area: 74,
    weeks: 10,
    budget: "1m-2m",
    scope: {
      th: ["รื้อถอนทั้งห้อง", "ผังไฟฟ้าใหม่", "ครัวเปิด", "ตู้บิวท์อินผนังยาว", "ห้องน้ำใหม่"],
      en: ["Full strip-out", "New electrical layout", "Open kitchen", "Full-length storage wall", "New bathroom"],
    },
    brief: {
      th: "คอนโดหนึ่งห้องนอนอายุ 12 ปี ถูกแบ่งเป็นห้องเล็กๆ ด้วยผนังเบา ทำให้ทุกห้องมืดและแคบ เจ้าของทำงานที่บ้านสามวันต่อสัปดาห์ ต้องการมุมทำงานที่ไม่ต้องเก็บทุกเย็น และที่เก็บของมากกว่าเดิม",
      en: "A 12-year-old one-bedroom unit divided by light partitions into small, dark rooms. The owner works from home three days a week and wanted a desk that doesn't have to be cleared every evening, plus far more storage.",
    },
    approach: {
      th: [
        "รื้อผนังเบาที่ไม่ใช่โครงสร้าง (ตรวจสอบกับแบบอาคารและนิติบุคคลก่อน) ให้แสงจากหน้าต่างเข้าถึงครัว",
        "ตู้บิวท์อินยาวตลอดผนังหนึ่งด้าน รวมตู้เสื้อผ้า ชั้นหนังสือ และโต๊ะทำงานที่ปิดได้",
        "เดินไฟใหม่ทั้งห้อง เพิ่มปลั๊กตามตำแหน่งใช้งานจริง แยกวงจรไฟครัว",
        "ห้องน้ำโทนอ่อน กระจกบานใหญ่ช่วยให้ห้องแคบดูกว้างขึ้น",
      ],
      en: [
        "Removed non-structural partitions (checked against the building drawings and with the juristic office first) so window light reaches the kitchen.",
        "One wall of built-in joinery: wardrobe, bookshelves and a desk with doors that close over it.",
        "Rewired the unit with sockets where they're actually used and a separate kitchen circuit.",
        "A pale bathroom with a large mirror to make a narrow room feel wider.",
      ],
    },
    materials: {
      th: ["ไม้วีเนียร์โอ๊คย้อมอ่อน", "ผนังสีขาวนวล", "กระเบื้องพอร์ซเลนผิวด้าน", "มือจับทองเหลืองขัดด้าน"],
      en: ["Pale-stained oak veneer", "Warm white walls", "Matt porcelain tiles", "Brushed brass handles"],
    },
    images: [
      {
        src: thonglorLiving,
        alt: {
          th: "ห้องนั่งเล่นโทนครีม โซฟาผ้าบูเคล่ โต๊ะกลมสีขาว และกระจกกรอบหวายสองบานบนผนัง",
          en: "Cream living room with a bouclé sofa, round white table and two rattan-framed mirrors on the wall",
        },
        caption: { th: "พื้นที่นั่งเล่นหลังรื้อผนังเบา", en: "Living area after removing the partitions" },
      },
      {
        src: thonglorBedroom,
        alt: {
          th: "ห้องนอนผนังสีดำด้าน เตียงผ้าลินินสีอ่อน และหน้าต่างบานใหญ่มองเห็นต้นไม้",
          en: "Bedroom with a matt black wall, pale linen bedding and a large window onto trees",
        },
        caption: { th: "ห้องนอน — ผนังหัวเตียงสีเข้มลดแสงสะท้อน", en: "Bedroom — dark headboard wall to cut glare" },
      },
      {
        src: thonglorBath,
        alt: {
          th: "ห้องน้ำสีขาว อ่างอาบน้ำ และต้นไม้ใบใหญ่ข้างหน้าต่าง",
          en: "White bathroom with a bath and a large-leaf plant by the window",
        },
        caption: { th: "ห้องน้ำ", en: "Bathroom" },
      },
    ],
  },
  {
    slug: "silom-office",
    code: "03",
    type: "office",
    title: {
      th: "ออฟฟิศสีลม สำหรับทีม 24 คน",
      en: "Silom office for a team of 24",
    },
    short: {
      th: "ออฟฟิศชั้นเดียว ห้องประชุมเก็บเสียง และโซนทำงานเงียบริมหน้าต่าง",
      en: "Single-floor office with acoustic meeting rooms and a quiet window zone",
    },
    location: { th: "สีลม, บางรัก", en: "Silom, Bang Rak" },
    area: 260,
    weeks: 9,
    budget: "2m-4m",
    scope: {
      th: ["วางผังพื้นที่", "ห้องประชุม 3 ห้อง", "งานอะคูสติก", "ผังปลั๊กและสายสัญญาณ", "แบบยื่นขออนุญาตอาคาร"],
      en: ["Space planning", "Three meeting rooms", "Acoustic treatment", "Power and data layout", "Building approval drawings"],
    },
    brief: {
      th: "ทีมออกแบบผลิตภัณฑ์ 24 คนย้ายจากโคเวิร์กกิ้งสเปซมาเช่าพื้นที่เปล่าในอาคารสำนักงาน ต้องการห้องประชุมที่คุยวิดีโอคอลได้โดยไม่รบกวนคนอื่น และพื้นที่ทำงานเงียบที่ไม่ต้องจองล่วงหน้า",
      en: "A 24-person product team moving from a co-working space into a bare shell office unit. They needed meeting rooms for video calls that don't disturb everyone else, and quiet desks that don't have to be booked.",
    },
    approach: {
      th: [
        "ห้องประชุมกรอบกระจกอยู่กลางพื้นที่ เพื่อให้ริมหน้าต่างทั้งหมดเป็นที่นั่งทำงาน",
        "ฝ้าดูดซับเสียงและผนังห้องประชุมเสริมฉนวนถึงใต้พื้นชั้นบน",
        "ทำงานรื้อและเจาะในเวลากลางคืนตามข้อกำหนดของอาคาร",
        "พื้นปูนขัดมันเคลือบเดิม เก็บไว้และซ่อมเฉพาะจุด ประหยัดงบไปใช้กับงานอะคูสติก",
      ],
      en: [
        "Glass-fronted meeting rooms sit in the middle of the floor so the whole window line is left for desks.",
        "Acoustic ceiling panels, and meeting-room walls insulated right up to the slab above.",
        "Demolition and drilling scheduled at night, as the building's fit-out rules require.",
        "The existing sealed concrete floor was kept and patched, moving budget into acoustics instead.",
      ],
    },
    materials: {
      th: ["พื้นปูนขัดมันเดิม", "กระจกลามิเนตกันเสียง", "แผ่นซับเสียงใยโพลีเอสเตอร์", "เหล็กพ่นสีดำ"],
      en: ["Existing polished concrete", "Acoustic laminated glass", "Polyester acoustic panels", "Black powder-coated steel"],
    },
    images: [
      {
        src: silomFloor,
        alt: {
          th: "พื้นที่ออฟฟิศเพดานคอนกรีตเปลือย หน้าต่างกระจกยาวตลอดแนว โต๊ะประชุมยาวและเก้าอี้สีชมพูอ่อน",
          en: "Office floor with exposed concrete ceiling, full-length windows, a long table and pale pink chairs",
        },
        caption: { th: "โซนทำงานริมหน้าต่าง", en: "Window-side work zone" },
      },
      {
        src: silomLounge,
        alt: {
          th: "มุมพักผ่อนในออฟฟิศ เก้าอี้บุผ้าสีอ่อน โคมไฟตั้งพื้นสีดำ และผนังกระจกกรอบไม้",
          en: "Office lounge corner with pale upholstered chairs, a black floor lamp and timber-framed glazing",
        },
        caption: { th: "มุมพักและรับแขก", en: "Lounge and visitor area" },
      },
      {
        src: silomCorridor,
        alt: {
          th: "ทางเดินในออฟฟิศ ผนังสีเทาเข้ม ชั้นวางไม้ และห้องกระจกเรียงต่อกัน",
          en: "Office corridor with a dark grey wall, timber shelving and a row of glass rooms",
        },
        caption: { th: "ทางเดินหน้าห้องประชุม", en: "Corridor outside the meeting rooms" },
      },
    ],
  },
  {
    slug: "bangna-house",
    code: "04",
    type: "house",
    title: {
      th: "บ้านเดี่ยวบางนา ครัว ห้องนั่งเล่น และห้องน้ำสองห้อง",
      en: "Bang Na family house: kitchen, living room and two bathrooms",
    },
    short: {
      th: "เปิดครัวต่อกับห้องนั่งเล่น และแก้ปัญหาน้ำซึมในห้องน้ำ",
      en: "Kitchen opened to the living room; bathroom leaks fixed for good",
    },
    location: { th: "บางนา", en: "Bang Na" },
    area: 140,
    weeks: 12,
    budget: "2m-4m",
    scope: {
      th: ["ครัวใหม่พร้อมเคาน์เตอร์กลาง", "ผนังไม้ห้องนั่งเล่น", "ห้องน้ำ 2 ห้อง", "ระบบกันซึมใหม่", "ประตูบานเลื่อนออกสวน"],
      en: ["New kitchen with island", "Timber feature wall", "Two bathrooms", "New waterproofing", "Sliding doors to the garden"],
    },
    brief: {
      th: "บ้านเดี่ยวในหมู่บ้านอายุ 20 ปี ครัวปิดอยู่หลังบ้าน ห้องน้ำชั้นบนมีน้ำซึมลงฝ้าชั้นล่างมาหลายปี ครอบครัวต้องการครัวที่มองเห็นลูกเล่นในสวนได้",
      en: "A 20-year-old house in a gated estate. The kitchen was closed off at the back and the upstairs bathroom had been leaking into the ceiling below for years. The family wanted a kitchen where they could see the children playing in the garden.",
    },
    approach: {
      th: [
        "ย้ายครัวมาอยู่กลางบ้าน เคาน์เตอร์กลางหันออกสวน เปลี่ยนหน้าต่างเป็นประตูบานเลื่อน",
        "รื้อพื้นห้องน้ำถึงพื้นโครงสร้าง ทำกันซึมใหม่และทดสอบขังน้ำ 48 ชั่วโมงก่อนปูกระเบื้อง",
        "ผนังไม้ระแนงห้องนั่งเล่นซ่อนประตูห้องเก็บของ",
        "เลือกหินและกระเบื้องผิวด้านที่ดูแลง่ายสำหรับบ้านที่มีเด็ก",
      ],
      en: [
        "Moved the kitchen into the middle of the house with an island facing the garden; a window became sliding doors.",
        "Stripped the bathroom floors back to the slab, re-waterproofed and ran a 48-hour flood test before tiling.",
        "A timber-clad living room wall that hides the storeroom door.",
        "Matt stone and tiles chosen to be easy to keep clean with young children.",
      ],
    },
    materials: {
      th: ["ไม้จริงระแนงแนวตั้ง", "ท็อปควอตซ์สีขาว", "หินแกรนิตผิวพ่นทราย", "สุขภัณฑ์สีดำด้าน"],
      en: ["Vertical solid-timber cladding", "White quartz worktops", "Flamed granite", "Matt black fittings"],
    },
    images: [
      {
        src: bangnaLiving,
        alt: {
          th: "ห้องนั่งเล่นเปิดโล่ง โซฟาสีขาว ผนังไม้ระแนง และครัวพร้อมเคาน์เตอร์กลางด้านหลัง",
          en: "Open living room with a white sofa, timber-clad wall and the kitchen island behind",
        },
        caption: { th: "ห้องนั่งเล่นต่อกับครัวและสวน", en: "Living room opening to kitchen and garden" },
      },
      {
        src: bangnaKitchen,
        alt: {
          th: "ครัวสีขาว เคาน์เตอร์กลางยาว เก้าอี้สตูลไม้สี่ตัว และตู้ไม้โอ๊ค",
          en: "White kitchen with a long island, four timber stools and oak cabinetry",
        },
        caption: { th: "ครัวและเคาน์เตอร์กลาง", en: "Kitchen and island" },
      },
      {
        src: bangnaBath,
        alt: {
          th: "ห้องน้ำผนังหินสีเทา อ่างล้างหน้าสีดำบนท็อปไม้ และกระจกกลมขอบดำ",
          en: "Bathroom with grey stone walls, a black basin on a timber vanity and a round black-framed mirror",
        },
        caption: { th: "ห้องน้ำชั้นบน หลังทำกันซึมใหม่", en: "Upstairs bathroom after re-waterproofing" },
      },
    ],
  },
  {
    slug: "riverside-condo",
    code: "05",
    type: "condo",
    title: {
      th: "คอนโดริมแม่น้ำ เจริญนคร ปรับใหม่ก่อนปล่อยเช่า",
      en: "Riverside condo, Charoen Nakhon: refreshed for renting",
    },
    short: {
      th: "งานปรับปรุงเบา 5 สัปดาห์ ทนทานสำหรับผู้เช่าระยะยาว",
      en: "A five-week light refresh built to last through long-term tenants",
    },
    location: { th: "เจริญนคร, คลองสาน", en: "Charoen Nakhon, Khlong San" },
    area: 62,
    weeks: 5,
    budget: "500k-1m",
    scope: {
      th: ["ทาสีและซ่อมผนัง", "เปลี่ยนพื้นเป็น SPC", "เปลี่ยนสุขภัณฑ์และฉากกั้นอาบน้ำ", "ไฟ LED ใหม่", "เฟอร์นิเจอร์ลอยตัว"],
      en: ["Wall repairs and paint", "New SPC flooring", "New fittings and shower screen", "New LED lighting", "Loose furniture package"],
    },
    brief: {
      th: "เจ้าของคอนโดต้องการปล่อยเช่าระยะยาว ห้องอยู่ในสภาพดีแต่ดูเก่า งบจำกัดและต้องเสร็จก่อนผู้เช่าใหม่เข้าอยู่ภายในสองเดือน",
      en: "The owner planned to let the unit long-term. It was sound but tired-looking, the budget was limited, and it had to be ready for a new tenant within two months.",
    },
    approach: {
      th: [
        "ไม่ย้ายระบบประปาหรือผนัง เพื่อให้งานเสร็จเร็วและไม่ต้องขออนุญาตเพิ่ม",
        "ปูพื้น SPC ทับพื้นเดิม กันน้ำ ทนรอยขีดข่วน และเงียบกว่าลามิเนต",
        "เลือกเฟอร์นิเจอร์ลอยตัวที่เปลี่ยนได้ แทนบิวท์อินราคาสูง",
        "ฉากกั้นอาบน้ำกระจกเทมเปอร์และก๊อกที่หาอะไหล่ได้ง่ายในไทย",
      ],
      en: [
        "No plumbing or wall moves, so the job is fast and needs no extra building approval.",
        "SPC flooring laid over the existing floor: waterproof, scratch-resistant and quieter than laminate.",
        "Loose furniture that can be replaced, instead of expensive built-ins.",
        "A tempered-glass shower screen and taps with spare parts that are easy to find in Thailand.",
      ],
    },
    materials: {
      th: ["พื้น SPC ลายไม้โอ๊ค", "สีน้ำอะคริลิกเช็ดล้างได้", "กระจกเทมเปอร์ 10 มม.", "ไฟ LED 3000K"],
      en: ["Oak-effect SPC flooring", "Washable acrylic paint", "10 mm tempered glass", "3000K LED lighting"],
    },
    images: [
      {
        src: riversideLiving,
        alt: {
          th: "ห้องนั่งเล่นสว่าง หน้าต่างบานใหญ่ แสงแดดส่องบนพื้นไม้ โซฟาสีน้ำตาลและเก้าอี้สีขาว",
          en: "Bright living room with large windows, sunlight on a timber floor, a tan sofa and a white chair",
        },
        caption: { th: "ห้องนั่งเล่นหลังปรับปรุง", en: "Living room after the refresh" },
      },
      {
        src: riversideShower,
        alt: {
          th: "ห้องน้ำ ฉากกั้นอาบน้ำกระจกใส ผนังกระเบื้องขาว และเคาน์เตอร์อ่างล้างหน้าท็อปขาว",
          en: "Bathroom with a clear glass shower screen, white tiles and a white-topped vanity",
        },
        caption: { th: "ห้องน้ำ — ฉากกั้นกระจกใหม่", en: "Bathroom — new glass screen" },
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const indexImage = (p: Project) => p.images[p.indexImage ?? 0];
