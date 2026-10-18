"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { formatTHB } from "@/lib/format";
import type { Locale } from "@/lib/i18n";
import { plotConfig } from "../config";
import { explorer as t } from "../content";
import { listingImages } from "../listingImages";
import { areas, type Listing } from "../listings";
import { applyFilters, defaultFilters, parseQuery, priceCaps, toQuery, type Filters } from "../search";
import styles from "./Plot.module.css";

export const LAST_SEARCH_KEY = "plot:last-search";

function rememberSearch(query: string) {
  try {
    sessionStorage.setItem(LAST_SEARCH_KEY, query);
  } catch {
    /* storage unavailable — the URL still holds the search */
  }
}

const price = (l: Listing, lang: Locale) => `${formatTHB(l.price, lang)}${l.deal === "rent" ? ` ${t.perMonth[lang]}` : ""}`;

/** Filters on the left, results on the right; the URL always reflects the current search. */
export function Explorer({ lang }: { lang: Locale }) {
  const id = useId();
  const [filters, setFilters] = useState<Filters>(defaultFilters);

  // Read the search from the URL once mounted (static pages can't know it at build time),
  // and remember it so listing pages can link back to the same results.
  useEffect(() => {
    const initial = parseQuery(window.location.search);
    rememberSearch(toQuery(initial));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFilters(initial);
  }, []);

  const set = (patch: Partial<Filters>) =>
    setFilters((f) => {
      const next = { ...f, ...patch };
      // A price cap only makes sense for one deal type.
      if (patch.deal && patch.deal !== f.deal) next.maxPrice = 0;
      const query = toQuery(next);
      window.history.replaceState(null, "", `${window.location.pathname}${query}${window.location.hash}`);
      rememberSearch(query);
      return next;
    });

  const results = applyFilters(filters);
  const isDefault = toQuery(filters) === "";

  return (
    <div className={styles.explorer}>
      <form className={styles.filters} aria-label={t.filters[lang]} onSubmit={(e) => e.preventDefault()}>
        <fieldset className={styles.filter}>
          <legend>{t.deal[lang]}</legend>
          <div className={styles.segmented}>
            {(["all", "rent", "sale"] as const).map((d) => (
              <label key={d}>
                <input type="radio" name="deal" value={d} checked={filters.deal === d} onChange={() => set({ deal: d })} />
                <span>{t.deals[d][lang]}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className={styles.filter}>
          <legend>{t.type[lang]}</legend>
          <div className={styles.segmented}>
            {(["all", "condo", "house"] as const).map((ty) => (
              <label key={ty}>
                <input type="radio" name="type" value={ty} checked={filters.type === ty} onChange={() => set({ type: ty })} />
                <span>{t.types[ty][lang]}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className={styles.filter}>
          <label htmlFor={`${id}-area`}>{t.area[lang]}</label>
          <select id={`${id}-area`} value={filters.area} onChange={(e) => set({ area: e.target.value as Filters["area"] })}>
            <option value="all">{t.anyArea[lang]}</option>
            {areas.map((a) => (
              <option key={a.id} value={a.id}>
                {a.label[lang]}
              </option>
            ))}
          </select>
        </div>

        <fieldset className={styles.filter}>
          <legend>{t.beds[lang]}</legend>
          <div className={styles.segmented}>
            {t.bedOptions.map((b) => (
              <label key={b.value}>
                <input type="radio" name="beds" value={b.value} checked={filters.beds === b.value} onChange={() => set({ beds: b.value })} />
                <span>{b.label[lang]}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className={styles.filter}>
          <label htmlFor={`${id}-max`}>{t.maxPrice[lang]}</label>
          <select
            id={`${id}-max`}
            value={filters.maxPrice}
            disabled={filters.deal === "all"}
            aria-describedby={filters.deal === "all" ? `${id}-max-hint` : undefined}
            onChange={(e) => set({ maxPrice: Number(e.target.value) })}
          >
            <option value={0}>{t.noLimit[lang]}</option>
            {filters.deal !== "all"
              ? priceCaps[filters.deal].map((cap) => (
                  <option key={cap} value={cap}>
                    ≤ {formatTHB(cap, lang)}
                  </option>
                ))
              : null}
          </select>
          {filters.deal === "all" ? (
            <p id={`${id}-max-hint`} className={styles.hint}>
              {t.pickDeal[lang]}
            </p>
          ) : null}
        </div>

        <label className={styles.toggle}>
          <input type="checkbox" checked={filters.pets} onChange={(e) => set({ pets: e.target.checked })} />
          <span>{t.pets[lang]}</span>
        </label>

        {!isDefault ? (
          <button type="button" className={styles.reset} onClick={() => set({ ...defaultFilters })}>
            {t.reset[lang]}
          </button>
        ) : null}
      </form>

      <div className={styles.results}>
        <div className={styles.resultsBar}>
          <p aria-live="polite">
            <strong>{t.count[lang](results.length)}</strong>
          </p>
          <label className={styles.sort}>
            <span>{t.sort[lang]}</span>
            <select value={filters.sort} onChange={(e) => set({ sort: e.target.value as Filters["sort"] })}>
              {(Object.keys(t.sorts) as Filters["sort"][]).map((s) => (
                <option key={s} value={s}>
                  {t.sorts[s][lang]}
                </option>
              ))}
            </select>
          </label>
        </div>
        {!isDefault ? <p className={styles.hint}>{t.shareHint[lang]}</p> : null}

        {results.length ? (
          <ul className={styles.list}>
            {results.map((l) => (
              <li key={l.ref} className={styles.card}>
                <div className={styles.cardImage}>
                  <Image src={listingImages[l.ref][0]} alt="" fill sizes="(max-width: 760px) 100vw, 30vw" style={{ objectFit: "cover" }} />
                  <span className={styles.sampleTag}>{t.sampleTag[lang]}</span>
                </div>
                <div className={styles.cardBody}>
                  <p className={styles.cardMeta}>
                    <span>{l.ref}</span>
                    <span>{t.deals[l.deal][lang]}</span>
                    <span>{areas.find((a) => a.id === l.area)!.label[lang]}</span>
                  </p>
                  <h3>
                    <Link href={`${plotConfig.basePath}/${lang}/listings/${l.ref}`} className={styles.cardLink}>
                      {l.title[lang]}
                    </Link>
                  </h3>
                  <p className={styles.cardPrice}>{price(l, lang)}</p>
                  <ul className={styles.specs}>
                    <li>{l.beds === 0 ? t.studio[lang] : t.bedsShort[lang](l.beds)}</li>
                    <li>{t.bathsShort[lang](l.baths)}</li>
                    <li>{l.size} m²</li>
                    {l.floor ? <li>{t.floor[lang](l.floor)}</li> : null}
                    {l.land ? <li>{t.land[lang](l.land)}</li> : null}
                  </ul>
                  <p className={styles.transit}>{l.transit[lang]}</p>
                  <p className={styles.badges}>
                    <span>{t.available[l.available][lang]}</span>
                    {l.pets ? <span>{t.petsYes[lang]}</span> : null}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className={styles.empty}>
            <p>{t.empty[lang]}</p>
            <button type="button" className={styles.reset} onClick={() => set({ ...defaultFilters })}>
              {t.reset[lang]}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/** Back link on listing pages that restores the visitor's last search when there is one. */
export function BackToResults({ lang, label }: { lang: Locale; label: string }) {
  const [query, setQuery] = useState("");
  useEffect(() => {
    try {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setQuery(sessionStorage.getItem(LAST_SEARCH_KEY) ?? "");
    } catch {
      /* storage unavailable — fall back to the plain listings anchor */
    }
  }, []);
  return (
    <Link href={`${plotConfig.basePath}/${lang}${query}#listings`} className={styles.back}>
      {label}
    </Link>
  );
}
