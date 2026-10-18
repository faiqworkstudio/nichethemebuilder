"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { todayInBangkok } from "@/lib/dates";
import { defaultBooking, type BookingValues } from "../booking";
import { durationsFor, type TreatmentId } from "../menu";

type Ctx = {
  values: BookingValues;
  update: (patch: Partial<BookingValues>) => void;
  /** Switch treatment and snap the length to one it offers. */
  chooseTreatment: (id: TreatmentId) => void;
  /** Bangkok "today" and minutes since midnight; empty until mounted so static HTML never bakes in a build time. */
  today: string;
  nowMinutes: number | undefined;
};

const BookingCtx = createContext<Ctx | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [values, setValues] = useState<BookingValues>(defaultBooking);
  const [clock, setClock] = useState<{ today: string; nowMinutes?: number }>({ today: "" });

  useEffect(() => {
    // The visitor's "now" only exists in the browser.
    const now = new Date(Date.now() + 7 * 3_600_000);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setClock({ today: todayInBangkok(), nowMinutes: now.getUTCHours() * 60 + now.getUTCMinutes() });
  }, []);

  const update = (patch: Partial<BookingValues>) => setValues((v) => ({ ...v, ...patch }));
  const chooseTreatment = (id: TreatmentId) =>
    setValues((v) => {
      const lengths = durationsFor(id);
      return { ...v, treatment: id, duration: lengths.includes(v.duration) ? v.duration : lengths[0], time: "" };
    });

  return (
    <BookingCtx.Provider value={{ values, update, chooseTreatment, today: clock.today, nowMinutes: clock.nowMinutes }}>{children}</BookingCtx.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingCtx);
  if (!ctx) throw new Error("useBooking must be used inside <BookingProvider>");
  return ctx;
}

export const scrollToId = (id: string) => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
};
