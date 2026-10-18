import type { StaticImageData } from "next/image";
import type { RoomId } from "./rooms";
import teak from "./assets/teak-room.jpg";
import garden from "./assets/garden-room.jpg";
import city from "./assets/city-room.jpg";
import loft from "./assets/loft.jpg";
import studio from "./assets/studio.jpg";

export const roomImages: Record<RoomId, StaticImageData> = { teak, garden, city, loft, studio };
