"use client";

import { useId, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { formatTHB } from "@/lib/format";
import type { Reason } from "../appointment";
import { library as t } from "../content";
import { categories, searchTreatments, type Category } from "../treatments";
import { scrollToId, useYim } from "./YimContext";
import styles from "./Yim.module.css";

const reasonFor: Record<Category, Reason> = {
  checkup: "checkup",
  pain: "pain",
  repair: "repair",
  straighten: "straighten",
  cosmetic: "cosmetic",
  kids: "kids",
};

/** Searchable, filterable treatment table (a real <table> on wide screens). */
export function TreatmentLibrary({ lang }: { lang: Locale }) {
  const { category, setCategory, setReason } = useYim();
  const [query, setQuery] = useState("");
  const id = useId();
  const rows = searchTreatments(query, category, lang);

  return (
    <div className={styles.library}>
      <div className={styles.libraryTools}>
        <div className={styles.search}>
          <label htmlFor={`${id}-q`}>{t.search[lang]}</label>
          <input id={`${id}-q`} type="search" value={query} placeholder={t.searchPlaceholder[lang]} onChange={(e) => setQuery(e.target.value)} />
        </div>
        <div role="group" aria-label={t.cols.treatment[lang]} className={styles.cats}>
          {[{ id: "all" as const, label: t.all }, ...categories].map((c) => (
            <button key={c.id} type="button" aria-pressed={category === c.id} onClick={() => setCategory(c.id)}>
              {c.label[lang]}
            </button>
          ))}
        </div>
        <p className={styles.libraryCount} aria-live="polite">
          {t.count[lang](rows.length)} · {t.sampleNote[lang]}
        </p>
      </div>

      {rows.length ? (
        <table className={styles.table}>
          <caption className="visually-hidden">{t.title[lang]}</caption>
          <thead>
            <tr>
              <th scope="col">{t.cols.treatment[lang]}</th>
              <th scope="col">{t.cols.chair[lang]}</th>
              <th scope="col">{t.cols.visits[lang]}</th>
              <th scope="col">{t.cols.numbing[lang]}</th>
              <th scope="col">{t.cols.price[lang]}</th>
              <th scope="col">
                <span className="visually-hidden">{t.book[lang]}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((tr) => (
              <tr key={tr.id}>
                <th scope="row">
                  <span className={styles.tName}>{tr.name[lang]}</span>
                  <span className={styles.tWhat}>{tr.what[lang]}</span>
                </th>
                <td data-label={t.cols.chair[lang]}>{tr.chair[lang]}</td>
                <td data-label={t.cols.visits[lang]}>{tr.visits[lang]}</td>
                <td data-label={t.cols.numbing[lang]}>{t.numbing[tr.numbing][lang]}</td>
                <td data-label={t.cols.price[lang]} className={styles.price}>
                  {formatTHB(tr.price[0], lang)}–{formatTHB(tr.price[1], lang)}
                  {tr.unit ? <small> {tr.unit[lang]}</small> : null}
                </td>
                <td>
                  <button
                    type="button"
                    className={styles.rowBook}
                    onClick={() => {
                      setReason(reasonFor[tr.category]);
                      scrollToId("book");
                    }}
                  >
                    {t.book[lang]}
                    <span className="visually-hidden">: {tr.name[lang]}</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className={styles.empty}>
          <p>{t.empty[lang]}</p>
          <button type="button" className={styles.textButton} onClick={() => setQuery("")}>
            {t.clear[lang]}
          </button>
        </div>
      )}
    </div>
  );
}
