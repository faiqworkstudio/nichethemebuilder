import Link from "next/link";
import { studio } from "@/config/studio";
import { DemoShowcase } from "@/studio/DemoShowcase";
import { demos } from "@/studio/registry";

const principles = [
  {
    title: "Thai and English, properly",
    body: "Real translated pages with their own URLs, metadata and form messages — not a toggle that swaps a few headings.",
  },
  {
    title: "Built around the enquiry",
    body: "Each demo is designed backwards from the action a customer needs to take: a quote request, a consultation, a booking hand-off.",
  },
  {
    title: "Honest by default",
    body: "No invented reviews, awards or numbers. Demo businesses are labelled as fictional and forms say clearly when nothing is sent.",
  },
  {
    title: "Its own design, every time",
    body: "Every demo gets a different theme, layout and type system, chosen for the business rather than recoloured from a template.",
  },
];

export default function ShowcasePage() {
  return (
    <>
      <a href="#work" className="kd-skip">
        Skip to demos
      </a>
      <header className="kd-header">
        <div className="kd-wrap kd-header-inner">
          <Link href="/" className="kd-logo" aria-label={`${studio.name} home`}>
            <span className="kd-logo-mark" aria-hidden="true">
              K
            </span>
            {studio.name}
          </Link>
          <nav aria-label="Main">
            <a href="#work">Demos</a>
            <a href="#approach">Approach</a>
            {studio.contact.email ? <a href="#contact">Contact</a> : null}
          </nav>
        </div>
      </header>

      <main>
        <section className="kd-hero kd-wrap" aria-labelledby="kd-title">
          <p className="kd-eyebrow">Demo portfolio · Bangkok</p>
          <h1 id="kd-title">Websites for Bangkok businesses, designed around the people who&nbsp;enquire.</h1>
          <p className="kd-lede">
            Concept sites built the way we&apos;d build yours: bilingual, quick on a phone, and focused on one clear next
            step. Open any demo and try it — the forms, filters and language switching all work.
          </p>
          <p className="kd-lede-th" lang="th">
            เว็บไซต์ตัวอย่างสำหรับธุรกิจในกรุงเทพฯ รองรับภาษาไทยและอังกฤษ ใช้งานได้จริงบนมือถือ
          </p>
        </section>

        <section id="work" className="kd-work" aria-labelledby="kd-work-title">
          <div className="kd-wrap">
            <div className="kd-section-head">
              <h2 id="kd-work-title">Demo websites</h2>
              <p>
                {demos.length} {demos.length === 1 ? "demo" : "demos"} so far. New industries are added one at a time,
                each finished and reviewed before the next begins.
              </p>
            </div>
            {demos.map((demo, i) => (
              <DemoShowcase key={demo.slug} demo={demo} index={i} />
            ))}
          </div>
        </section>

        <section id="approach" className="kd-approach kd-wrap" aria-labelledby="kd-approach-title">
          <h2 id="kd-approach-title">How every demo is built</h2>
          <ul>
            {principles.map((p) => (
              <li key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer id="contact" className="kd-footer">
        <div className="kd-wrap">
          {studio.contact.email ? (
            <>
              <h2>Want one of these for your business?</h2>
              <a className="kd-button" href={`mailto:${studio.contact.email}`}>
                Email {studio.name}
              </a>
            </>
          ) : process.env.NODE_ENV !== "production" ? (
            // Developer hint only; production hides the contact block until details exist.
            <p className="kd-muted">
              Contact details aren&apos;t configured — add them in <code>src/config/studio.ts</code>.
            </p>
          ) : null}
          <p className="kd-small">
            All demo businesses, projects and people are fictional. Photography is from Unsplash and used for
            illustration only.
          </p>
        </div>
      </footer>
    </>
  );
}
