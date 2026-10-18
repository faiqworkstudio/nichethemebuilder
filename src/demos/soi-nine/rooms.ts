import type { L } from "@/lib/i18n";

// Room data stays free of image imports so the booking logic can be unit
// tested in Node; photos are mapped by id in ./roomImages.ts.

export type RoomId = "teak" | "garden" | "city" | "loft" | "studio";

export type Room = {
  id: RoomId;
  name: L;
  tagline: L;
  size: number;
  bed: L;
  sleeps: number;
  view: L;
  /** Sample nightly rate in THB — illustrative, never a live price. */
  sampleRate: number;
  /** Monthly-only serviced apartment. */
  monthly?: number;
  details: L<string[]>;
  alt: L;
};

export const rooms: Room[] = [
  {
    id: "teak",
    name: { th: "ห้องไม้สัก", en: "Teak Room" },
    tagline: { th: "ห้องที่คนพักซ้ำเลือกบ่อยที่สุด เงียบ อบอุ่น มองเห็นสวนกลางบ้าน", en: "Quiet, warm, and looking onto the courtyard garden." },
    size: 24,
    bed: { th: "เตียงควีน", en: "Queen bed" },
    sleeps: 2,
    view: { th: "สวนกลางบ้าน", en: "Courtyard garden" },
    sampleRate: 2600,
    details: {
      th: ["พื้นและเฟอร์นิเจอร์ไม้สักเก่าที่นำมาใช้ใหม่", "ห้องน้ำฝักบัวแบบ rain shower", "โต๊ะทำงานริมหน้าต่าง"],
      en: ["Reclaimed teak floors and furniture", "Rain shower", "Desk by the window"],
    },
    alt: {
      th: "ห้องนอนไม้สักโทนอุ่น เตียงผ้าสีขาว หมอนสีเขียวหัวเป็ด และหน้าต่างมองเห็นต้นไม้",
      en: "Warm teak bedroom with white linen, teal cushions and a window onto greenery",
    },
  },
  {
    id: "garden",
    name: { th: "ห้องการ์เด้น", en: "Garden Room" },
    tagline: { th: "ประตูบานเฟี้ยมเปิดออกสู่ระเบียงเล็กเหนือสวน แสงเช้าดีที่สุดในบ้าน", en: "French doors onto a small balcony over the garden — the best morning light in the house." },
    size: 28,
    bed: { th: "เตียงคิงไซส์", en: "King bed" },
    sleeps: 2,
    view: { th: "ระเบียงชมสวน", en: "Garden balcony" },
    sampleRate: 3100,
    details: {
      th: ["ระเบียงส่วนตัว", "ม้านั่งไม้ปลายเตียง", "ผ้าม่านทึบแสงสำหรับนอนกลางวัน"],
      en: ["Private balcony", "Teak bench at the foot of the bed", "Blackout curtains for daytime sleep"],
    },
    alt: {
      th: "ห้องนอนพื้นไม้ เตียงใหญ่ ม้านั่งไม้ปลายเตียง และประตูบานสูงที่มีแสงแดดส่องเข้ามา",
      en: "Timber-floored bedroom with a large bed, a wooden bench and tall sunlit doors",
    },
  },
  {
    id: "city",
    name: { th: "ห้องซิตี้", en: "City Room" },
    tagline: { th: "ห้องกะทัดรัดด้านถนน ผนังกันเสียงสองชั้น เหมาะกับคนที่ออกไปเที่ยวทั้งวัน", en: "A compact street-side room with double-glazed windows, for days spent out exploring." },
    size: 20,
    bed: { th: "เตียงควีน", en: "Queen bed" },
    sleeps: 2,
    view: { th: "ถนนเจริญกรุง", en: "Charoen Krung street side" },
    sampleRate: 2100,
    details: {
      th: ["หน้าต่างกันเสียงสองชั้น", "ผนังหัวเตียงบุผ้า", "ฝักบัวแบบวอล์กอิน"],
      en: ["Double-glazed windows", "Upholstered headboard wall", "Walk-in shower"],
    },
    alt: {
      th: "ห้องนอนโทนเข้ม ผนังหัวเตียงบุผ้าสีเทาเข้ม เตียงพร้อมผ้าคลุมสีน้ำเงิน",
      en: "Dark-toned bedroom with a padded charcoal headboard wall and a navy throw",
    },
  },
  {
    id: "loft",
    name: { th: "ลอฟต์สวีท", en: "Loft Suite" },
    tagline: { th: "ห้องใหญ่ใต้หลังคา เพดานสูง มีโซฟาเบดสำหรับคนที่สาม", en: "The big room under the roof: high ceilings and a day bed for a third guest." },
    size: 46,
    bed: { th: "เตียงคิงไซส์ + โซฟาเบด", en: "King bed + day bed" },
    sleeps: 3,
    view: { th: "หลังคาเมืองเก่าและแม่น้ำไกลๆ", en: "Old-town rooftops, a glimpse of the river" },
    sampleRate: 4800,
    details: {
      th: ["ห้องน้ำกรุกระจกพร้อมอ่างอาบน้ำ", "มุมนั่งเล่นแยก", "พักได้ 3 คน"],
      en: ["Glass-walled bathroom with a bath", "Separate sitting area", "Sleeps three"],
    },
    alt: {
      th: "ห้องสวีทกว้าง เตียงฐานไม้ ห้องน้ำกรุกระจก และหน้าต่างยาวมองเห็นวิว",
      en: "A wide suite with a timber-based bed, a glass-walled bathroom and long windows",
    },
  },
  {
    id: "studio",
    name: { th: "สตูดิโออพาร์ตเมนต์", en: "Studio Apartment" },
    tagline: { th: "สำหรับพักรายเดือน มีครัวเล็ก เครื่องซักผ้า และพื้นที่ทำงาน", en: "For monthly stays: kitchenette, washer and room to work." },
    size: 38,
    bed: { th: "เตียงควีน", en: "Queen bed" },
    sleeps: 2,
    view: { th: "หน้าต่างสูงสองชั้น", en: "Double-height windows" },
    sampleRate: 0,
    monthly: 32000,
    details: {
      th: ["ครัวเล็กพร้อมเตาไฟฟ้าและตู้เย็น", "เครื่องซักผ้าในห้อง", "ทำความสะอาดสัปดาห์ละครั้ง", "พักขั้นต่ำ 1 เดือน"],
      en: ["Kitchenette with hob and fridge", "In-room washer", "Weekly housekeeping", "One-month minimum"],
    },
    alt: {
      th: "ห้องนั่งเล่นเพดานสูง โซฟาสีครีม และหน้าต่างสองชั้นมองเห็นท้องฟ้า",
      en: "A double-height living space with a cream sofa and tall two-storey windows",
    },
  },
];

export const nightlyRooms = rooms.filter((r) => !r.monthly);
export const getRoom = (id: RoomId) => rooms.find((r) => r.id === id)!;
