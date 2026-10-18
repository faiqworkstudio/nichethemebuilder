"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { sections } from "../content";
import { indexImage, projects, projectTypeLabel, type ProjectType } from "../projects";
import { projectPath } from "../paths";
import { SectionHead } from "./SectionHead";
import styles from "./ProjectIndex.module.css";

type Filter = ProjectType | "all";
const filters: Filter[] = ["all", "condo", "house", "office"];

/**
 * Project index: a ruled list of projects with a large preview that follows
 * hover/focus on desktop. Filters narrow the list by project type.
 */
export function ProjectIndex({ lang }: { lang: Locale }) {
  const s = sections.projects;
  const [filter, setFilter] = useState<Filter>("all");
  const [activeSlug, setActiveSlug] = useState(projects[0].slug);

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.type === filter)),
    [filter],
  );
  // Fall back to the first visible project when a filter hides the active one.
  const active = visible.find((p) => p.slug === activeSlug) ?? visible[0];

  return (
    <section className={styles.section} aria-labelledby="projects">
      <div className="sen-wrap">
        <SectionHead id="projects" sheet={s.sheet} title={s.title[lang]} intro={s.intro[lang]} />

        <div className={styles.toolbar}>
          <div role="group" aria-label={s.filterLabel[lang]} className={styles.filters}>
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
                className={styles.filter}
              >
                {f === "all" ? s.all[lang] : projectTypeLabel[lang][f]}
              </button>
            ))}
          </div>
          <p className="sen-mono" aria-live="polite">
            {s.count[lang](visible.length)}
          </p>
        </div>

        <div className={styles.layout}>
          <div className={styles.listWrap}>
            <div className={styles.listHead} aria-hidden="true">
              <span className="sen-mono">{s.cols.no[lang]}</span>
              <span className="sen-mono">{s.cols.project[lang]}</span>
              <span className="sen-mono">{s.cols.location[lang]}</span>
              <span className="sen-mono">{s.cols.area[lang]}</span>
            </div>
            <ul className={styles.list}>
              {visible.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={projectPath(lang, p.slug)}
                    className={styles.row}
                    data-active={p.slug === active.slug || undefined}
                    onMouseEnter={() => setActiveSlug(p.slug)}
                    onFocus={() => setActiveSlug(p.slug)}
                  >
                    <span className={styles.thumb}>
                      <Image src={indexImage(p).src} alt="" fill sizes="96px" style={{ objectFit: "cover" }} />
                    </span>
                    <span className={`sen-mono ${styles.code}`}>{p.code}</span>
                    <span className={styles.rowMain}>
                      <span className={styles.rowTitle}>{p.title[lang]}</span>
                      <span className={styles.rowShort}>{p.short[lang]}</span>
                    </span>
                    <span className={styles.rowLocation}>
                      {p.location[lang]}
                      <span className={styles.rowType}>{projectTypeLabel[lang][p.type]}</span>
                    </span>
                    <span className={`sen-mono ${styles.rowArea}`}>{p.area} m²</span>
                    <span className={styles.arrow} aria-hidden="true">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <figure className={styles.preview} aria-hidden="true">
            <div className={styles.previewFrame}>
              {projects.map((p) => (
                <Image
                  key={p.slug}
                  src={indexImage(p).src}
                  alt=""
                  fill
                  sizes="(max-width: 960px) 1px, 40vw"
                  placeholder="blur"
                  className={styles.previewImage}
                  data-visible={p.slug === active.slug || undefined}
                />
              ))}
              <span className={styles.previewTag}>{s.concept[lang]}</span>
            </div>
            <figcaption>
              <span className="sen-mono">
                {active.code} · {active.location[lang]}
              </span>
              <span>{indexImage(active).caption[lang]}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
