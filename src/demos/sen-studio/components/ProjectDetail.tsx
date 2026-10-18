import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { budgetBands, projectPage, sections } from "../content";
import { projects, projectTypeLabel, type Project } from "../projects";
import { homePath, projectPath } from "../paths";
import styles from "./ProjectDetail.module.css";

export function ProjectDetail({ lang, project }: { lang: Locale; project: Project }) {
  const t = projectPage;
  const [lead, ...rest] = project.images;
  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const band = budgetBands.find((b) => b.value === project.budget);

  const facts: [string, string][] = [
    [t.facts.location[lang], project.location[lang]],
    [t.facts.type[lang], projectTypeLabel[lang][project.type]],
    [t.facts.area[lang], `${project.area} m²`],
    [t.facts.duration[lang], t.weeks[lang](project.weeks)],
    [t.facts.budget[lang], band ? band.label[lang] : "—"],
  ];

  return (
    <article className={styles.article}>
      <div className={`sen-wrap ${styles.top}`}>
        <nav aria-label="Breadcrumb" className={styles.crumbs}>
          <Link href={`${homePath(lang)}#projects`}>← {t.back[lang]}</Link>
        </nav>
        <div className={styles.headGrid}>
          <header className={styles.title}>
            <p className={`sen-mono ${styles.code}`}>
              {sections.projects.sheet}.{project.code}
              <span className={styles.concept}>{sections.projects.concept[lang]}</span>
            </p>
            <h1>{project.title[lang]}</h1>
            <p className={styles.short}>{project.short[lang]}</p>
          </header>
          <dl className={styles.facts}>
            {facts.map(([k, v]) => (
              <div key={k}>
                <dt className="sen-mono">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <figure className={`sen-wrap ${styles.lead}`}>
        <div className={styles.leadFrame}>
          <Image src={lead.src} alt={lead.alt[lang]} priority placeholder="blur" fill sizes="(max-width: 1440px) 100vw, 1440px" style={{ objectFit: "cover" }} />
        </div>
        <figcaption className="sen-mono">{lead.caption[lang]}</figcaption>
      </figure>

      <div className={`sen-wrap ${styles.body}`}>
        <section className={styles.brief} aria-labelledby="brief">
          <h2 id="brief" className="sen-mono">{t.brief[lang]}</h2>
          <p>{project.brief[lang]}</p>
        </section>
        <section className={styles.approach} aria-labelledby="approach">
          <h2 id="approach" className="sen-mono">{t.approach[lang]}</h2>
          <ol>
            {project.approach[lang].map((item, i) => (
              <li key={i}>
                <span className="sen-mono">{String(i + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </section>
        <aside className={styles.spec}>
          <section aria-labelledby="scope">
            <h2 id="scope" className="sen-mono">{t.scope[lang]}</h2>
            <ul>
              {project.scope[lang].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </section>
          <section aria-labelledby="materials">
            <h2 id="materials" className="sen-mono">{t.materials[lang]}</h2>
            <ul>
              {project.materials[lang].map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </section>
        </aside>
      </div>

      {rest.length > 0 ? (
        <div className={`sen-wrap ${styles.gallery}`} data-count={rest.length}>
          {rest.map((img) => (
            <figure key={img.src.src}>
              <div className={styles.galleryFrame} data-portrait={img.src.height > img.src.width || undefined}>
                <Image src={img.src} alt={img.alt[lang]} placeholder="blur" fill sizes="(max-width: 860px) 100vw, 50vw" style={{ objectFit: "cover" }} />
              </div>
              <figcaption className="sen-mono">{img.caption[lang]}</figcaption>
            </figure>
          ))}
        </div>
      ) : null}

      <div className="sen-wrap">
        <p className={styles.note}>{t.conceptNote[lang]}</p>
        <div className={styles.cta}>
          <a href={`${homePath(lang)}?type=${project.type}#enquiry`} className={styles.ctaLink}>
            {t.similar[lang]} <span aria-hidden="true">→</span>
          </a>
          <Link href={projectPath(lang, next.slug)} className={styles.next}>
            <span className="sen-mono">{t.next[lang]} · {next.code}</span>
            <span>{next.title[lang]}</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
