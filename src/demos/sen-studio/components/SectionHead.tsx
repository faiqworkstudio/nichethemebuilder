import styles from "./Sections.module.css";

/** Drawing-sheet style section heading: sheet code, title and an optional intro. */
export function SectionHead({
  id,
  sheet,
  title,
  intro,
  tone = "light",
}: {
  id: string;
  sheet: string;
  title: string;
  intro?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className={`${styles.head} ${tone === "dark" ? styles.headDark : ""}`}>
      <p className={`sen-mono ${styles.sheet}`} aria-hidden="true">
        {sheet}
      </p>
      <h2 id={id} className={styles.headTitle}>
        {title}
      </h2>
      {intro ? <p className={styles.headIntro}>{intro}</p> : null}
    </div>
  );
}
