import Image from "next/image";
import Link from "next/link";
import { studio } from "@/config/studio";
import { DemoList } from "@/studio/DemoList";
import { Arrow, Squiggle } from "@/studio/Doodles";
import { demos } from "@/studio/registry";
import { deviceSizes, screenshotPath } from "@/studio/types";

/** What every demo includes — shown as callouts around a real phone screenshot. */
const anatomy = [
  { title: "Thai and English, properly", body: "Separate translated pages with their own URLs and metadata. Switching keeps you on the same section." },
  { title: "One clear next step", body: "A quote request, a consultation, a stay enquiry — the page is built backwards from it." },
  { title: "LINE where people expect it", body: "Contact and LINE details live in one config file, so going live is an edit, not a rebuild." },
  { title: "Forms that tell the truth", body: "They validate in both languages and say plainly when a demo sends nothing. No fake 'success'." },
];

const steps = [
  { title: "We talk", body: "About your customers, what they ask before they buy, and what the site should get them to do." },
  { title: "You see it working", body: "A real, clickable first version on your phone — not a static mock-up in a PDF." },
  { title: "We fill it with your real things", body: "Your photos, prices, team and LINE account replace the concept content." },
  { title: "It goes live", body: "Fast hosting, your domain, and a handover so you can update the basics yourself." },
];

export default function ShowcasePage() {
  const collage = demos.slice(0, 3);
  // The phone print and the "inside" section show the newest demo, so the page changes as work is added.
  const lead = demos[demos.length - 1];

  return (
    <>
      <a href="#work" className="kd-skip">
        Skip to demos
      </a>
      <header className="kd-header kd-wrap">
        <Link href="/" className="kd-logo" aria-label={`${studio.name} home`}>
          <span className="kd-logo-mark" aria-hidden="true">
            k
          </span>
          {studio.name}
        </Link>
        <nav aria-label="Main">
          <a href="#work">Work</a>
          <a href="#inside">What&apos;s inside</a>
          <a href="#together">Working together</a>
        </nav>
      </header>

      <main>
        <section className="kd-hero kd-wrap" aria-labelledby="kd-title">
          <div className="kd-hero-text">
            <p className="kd-hand kd-hello">
              hello from Bangkok
              <Squiggle className="kd-squiggle" />
            </p>
            <h1 id="kd-title">
              Websites for the <em>shophouses</em>, clinics and condo studios of&nbsp;Bangkok.
            </h1>
            <p className="kd-lede">
              {studio.name} is a small web studio. Before we pitch anyone, we build something real — so here are
              working sites for businesses like yours. Open one on your phone, switch it to Thai, fill in the form.
            </p>
            <p className="kd-lede-th" lang="th">
              เว็บไซต์ตัวอย่างที่ใช้งานได้จริง สำหรับธุรกิจในกรุงเทพฯ — ลองเปิดบนมือถือ สลับภาษา และกรอกแบบฟอร์มได้เลย
            </p>
            <a href="#work" className="kd-button">
              See the demos <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="kd-wall" aria-hidden="true">
            {collage.map((demo, i) => (
              <figure key={demo.slug} className={`kd-print kd-print-${i + 1}`}>
                <span className="kd-tape" />
                <Image
                  src={screenshotPath(demo.slug, "desktop")}
                  alt=""
                  width={deviceSizes.desktop.width}
                  height={deviceSizes.desktop.height}
                  sizes="(max-width: 900px) 80vw, 520px"
                  priority={i === 0}
                />
                <figcaption className="kd-hand">{demo.name}</figcaption>
              </figure>
            ))}
            <figure className="kd-print kd-print-phone">
              <span className="kd-tape" />
              <Image
                src={screenshotPath(lead.slug, "mobile")}
                alt=""
                width={deviceSizes.mobile.width}
                height={deviceSizes.mobile.height}
                sizes="160px"
              />
            </figure>
            <p className="kd-hand kd-note kd-note-hero">
              every one works in
              <br />
              Thai &amp; English
              <Arrow className="kd-arrow" />
            </p>
          </div>
        </section>

        <nav className="kd-index kd-wrap" aria-label="All demos">
          <ol>
            {demos.map((demo) => (
              <li key={demo.slug}>
                <a href={`#${demo.slug}`} style={{ "--demo-accent": demo.palette[2] } as React.CSSProperties}>
                  <span className="kd-index-thumb">
                    <Image src={screenshotPath(demo.slug, "mobile")} alt="" width={78} height={169} sizes="78px" />
                  </span>
                  <span className="kd-index-no">{demo.id.replace("D", "")}</span>
                  <span className="kd-index-name">{demo.name}</span>
                  <span className="kd-index-sector">{demo.industry}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="work" className="kd-work" aria-labelledby="kd-work-title">
          <div className="kd-wrap">
            <div className="kd-section-head">
              <p className="kd-kicker">The work</p>
              <h2 id="kd-work-title">
                {demos.length} working {demos.length === 1 ? "demo" : "demos"}, each designed from scratch
              </h2>
              <p>
                Different businesses need different websites, so no two of these share a template. We add a new
                industry once the last one is finished and checked.
              </p>
            </div>
            <DemoList demos={demos} />
          </div>
        </section>

        <section id="inside" className="kd-inside kd-wrap" aria-labelledby="kd-inside-title">
          <div className="kd-inside-phone">
            <div className="kd-phone">
              <Image
                src={screenshotPath(lead.slug, "mobile")}
                alt={`${lead.name} on a phone`}
                width={deviceSizes.mobile.width}
                height={deviceSizes.mobile.height}
                sizes="300px"
              />
            </div>
            <p className="kd-hand kd-note kd-note-phone">real screenshot, not a mock-up</p>
          </div>
          <div className="kd-inside-text">
            <p className="kd-kicker">What&apos;s inside</p>
            <h2 id="kd-inside-title">The boring details we never skip</h2>
            <ol className="kd-anatomy">
              {anatomy.map((item, i) => (
                <li key={item.title}>
                  <span className="kd-num" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="together" className="kd-together" aria-labelledby="kd-together-title">
          <div className="kd-wrap">
            <p className="kd-kicker">Working together</p>
            <h2 id="kd-together-title">How a real one gets made</h2>
            <ol className="kd-steps">
              {steps.map((step, i) => (
                <li key={step.title}>
                  <span className="kd-hand kd-step-no">0{i + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>

      <footer id="contact" className="kd-footer">
        <div className="kd-wrap kd-footer-inner">
          <div>
            <p className="kd-hand kd-signoff">— the {studio.name} team</p>
            {studio.contact.email ? (
              <a className="kd-button kd-button-light" href={`mailto:${studio.contact.email}`}>
                Say hello by email
              </a>
            ) : process.env.NODE_ENV !== "production" ? (
              // Developer hint only; production hides the contact action until details exist.
              <p className="kd-muted">
                Contact details aren&apos;t configured — add them in <code>src/config/studio.ts</code>.
              </p>
            ) : null}
          </div>
          <p className="kd-small">
            Every demo business, project and person on this site is fictional. Photography is from Unsplash and used
            for illustration only.
          </p>
        </div>
      </footer>
    </>
  );
}
