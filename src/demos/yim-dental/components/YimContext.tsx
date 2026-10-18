"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { Reason } from "../appointment";
import type { Category } from "../treatments";
import type { Urgency } from "../triage";

type Ctx = {
  reason: Reason | "";
  urgency: Urgency | null;
  category: Category | "all";
  setReason: (r: Reason | "") => void;
  setUrgency: (u: Urgency | null) => void;
  setCategory: (c: Category | "all") => void;
};

const YimCtx = createContext<Ctx | null>(null);

/** Shared by the hero doors, urgency guide, treatment library and appointment form. */
export function YimProvider({ children }: { children: ReactNode }) {
  const [reason, setReason] = useState<Reason | "">("");
  const [urgency, setUrgency] = useState<Urgency | null>(null);
  const [category, setCategory] = useState<Category | "all">("all");
  return <YimCtx.Provider value={{ reason, urgency, category, setReason, setUrgency, setCategory }}>{children}</YimCtx.Provider>;
}

export function useYim() {
  const ctx = useContext(YimCtx);
  if (!ctx) throw new Error("useYim must be used inside <YimProvider>");
  return ctx;
}

export const scrollToId = (id: string) => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
};
