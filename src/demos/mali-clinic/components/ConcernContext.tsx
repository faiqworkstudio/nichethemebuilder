"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { Concern } from "../treatments";

type Ctx = {
  selected: Concern[];
  toggle: (c: Concern) => void;
  set: (c: Concern[]) => void;
};

const ConcernCtx = createContext<Ctx | null>(null);

/**
 * One list of "concerns" shared by the hero chips, the treatment finder and
 * the booking form — pick once, and every part of the page follows.
 */
export function ConcernProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<Concern[]>([]);
  const toggle = (c: Concern) => setSelected((s) => (s.includes(c) ? s.filter((x) => x !== c) : [...s, c]));
  return <ConcernCtx.Provider value={{ selected, toggle, set: setSelected }}>{children}</ConcernCtx.Provider>;
}

export function useConcerns() {
  const ctx = useContext(ConcernCtx);
  if (!ctx) throw new Error("useConcerns must be used inside <ConcernProvider>");
  return ctx;
}
