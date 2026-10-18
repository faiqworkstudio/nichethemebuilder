"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { todayInBangkok } from "../booking";
import type { RoomId } from "../rooms";

type Stay = {
  checkIn: string;
  checkOut: string;
  guests: number;
  room: RoomId | "";
  /** Free-text note for the request form (pre-filled for monthly enquiries). */
  note: string;
  /** Today's date in Bangkok; empty until mounted so the static HTML never bakes in a build date. */
  today: string;
  update: (patch: Partial<Omit<Stay, "update" | "today">>) => void;
};

const StayCtx = createContext<Stay | null>(null);

/** Dates, guests and room shared by the planner, room catalogue and request form. */
export function StayProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState({ checkIn: "", checkOut: "", guests: 2, room: "" as RoomId | "", note: "" });
  const [today, setToday] = useState("");
  useEffect(() => {
    // The visitor's "today" is only known in the browser.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setToday(todayInBangkok());
  }, []);
  const update: Stay["update"] = (patch) => setState((s) => ({ ...s, ...patch }));
  return <StayCtx.Provider value={{ ...state, today, update }}>{children}</StayCtx.Provider>;
}

export function useStay() {
  const ctx = useContext(StayCtx);
  if (!ctx) throw new Error("useStay must be used inside <StayProvider>");
  return ctx;
}

export const scrollToId = (id: string) => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
};
