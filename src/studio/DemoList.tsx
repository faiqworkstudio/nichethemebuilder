"use client";

import { useState } from "react";
import { DemoBoard } from "./DemoBoard";
import type { DemoEntry } from "./types";

/** Demo boards with a sector filter (shown once there is more than one sector). */
export function DemoList({ demos }: { demos: DemoEntry[] }) {
  const sectors = [...new Set(demos.map((d) => d.sector))];
  const [sector, setSector] = useState<string>("all");
  const visible = sector === "all" ? demos : demos.filter((d) => d.sector === sector);

  return (
    <>
      {sectors.length > 1 ? (
        <div className="kd-filter" role="group" aria-label="Filter demos by sector">
          {["all", ...sectors].map((s) => (
            <button key={s} type="button" aria-pressed={sector === s} onClick={() => setSector(s)}>
              {s === "all" ? `All (${demos.length})` : s}
            </button>
          ))}
        </div>
      ) : null}
      <p className="visually-hidden" aria-live="polite">
        Showing {visible.length} of {demos.length} demos
      </p>
      <div className="kd-boards">
        {visible.map((demo) => (
          <DemoBoard key={demo.slug} demo={demo} index={demos.indexOf(demo)} />
        ))}
      </div>
    </>
  );
}
