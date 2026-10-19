import Image from "next/image";
import { deviceSizes, screenshotPath, type DemoEntry, type Device } from "./types";

const devices: Device[] = ["desktop", "tablet", "mobile"];

function Shot({ demo, device, priority }: { demo: DemoEntry; device: Device; priority?: boolean }) {
  const size = deviceSizes[device];
  return (
    <Image
      src={screenshotPath(demo.slug, device)}
      alt={`${demo.name} homepage on ${size.label.split(" ·")[0].toLowerCase()}`}
      width={size.width}
      height={size.height}
      sizes={device === "desktop" ? "(max-width: 900px) 90vw, 760px" : device === "tablet" ? "(max-width: 900px) 30vw, 260px" : "(max-width: 900px) 18vw, 140px"}
      priority={priority}
    />
  );
}

/** One demo as a pinned board: device screenshots, story, a "try this" note and links. */
export function DemoBoard({ demo, index, isNewest = false }: { demo: DemoEntry; index: number; isNewest?: boolean }) {
  const primary = demo.routes.th ?? demo.routes.en;
  const flip = index % 2 === 1;
  return (
    <article
      id={demo.slug}
      className={`kd-board${flip ? " kd-board-flip" : ""}`}
      aria-labelledby={`${demo.slug}-title`}
      style={{ "--demo-accent": demo.palette[2] ?? "#2457d6", "--demo-bg": demo.palette[0] } as React.CSSProperties}
    >
      {/* Clickable picture duplicates the "Open the demo" button, so it is hidden from keyboard and screen readers. */}
      <a className="kd-stage" href={primary} aria-hidden="true" tabIndex={-1}>
        <figure className="kd-device kd-desktop">
          <div className="kd-browser-bar" aria-hidden="true">
            <span />
            <span />
            <span />
            <em>{primary}</em>
          </div>
          <Shot demo={demo} device="desktop" priority={index === 0} />
        </figure>
        <figure className="kd-device kd-tablet">
          <Shot demo={demo} device="tablet" />
        </figure>
        <figure className="kd-device kd-mobile">
          <Shot demo={demo} device="mobile" />
        </figure>
      </a>

      <div className="kd-board-text">
        <p className="kd-board-id">
          <span className="kd-big-num" aria-hidden="true">
            {demo.id.replace("D", "")}
          </span>
          <span>
            {demo.industry}
            <span className="kd-status">{demo.status}</span>
            {isNewest ? <span className="kd-new kd-hand">new!</span> : null}
          </span>
        </p>
        <h3 id={`${demo.slug}-title`}>
          {demo.name}
          {demo.nameTh ? (
            <span lang="th" className="kd-name-th">
              {demo.nameTh}
            </span>
          ) : null}
        </h3>
        <p className="kd-summary">{demo.summary}</p>

        <p className="kd-sticky">
          <span className="kd-hand">try this →</span> {demo.tryThis}
        </p>

        <details className="kd-more">
          <summary>Who it&apos;s for, the design idea, and what works</summary>
          <dl className="kd-facts">
            <div>
              <dt>For</dt>
              <dd>{demo.audience}</dd>
            </div>
            <div>
              <dt>Goal</dt>
              <dd>{demo.goal}</dd>
            </div>
            <div>
              <dt>Design</dt>
              <dd>{demo.theme}</dd>
            </div>
          </dl>
          <ul className="kd-features">
            {demo.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <div className="kd-palette" role="img" aria-label={`Palette: ${demo.palette.join(", ")}`}>
            {demo.palette.map((c) => (
              <span key={c} style={{ background: c }} title={c} />
            ))}
          </div>
        </details>

        <div className="kd-actions">
          <a className="kd-button" href={primary}>
            Open the demo{demo.routes.th ? " (ไทย)" : ""}
          </a>
          {demo.routes.th ? (
            <a className="kd-link" href={demo.routes.en}>
              English version →
            </a>
          ) : null}
        </div>
        <p className="kd-shot-links">
          Screenshots:{" "}
          {devices.map((d, i) => (
            <span key={d}>
              {i > 0 ? " · " : ""}
              <a href={screenshotPath(demo.slug, d)} target="_blank" rel="noopener">
                {deviceSizes[d].label.split(" ·")[0]}
              </a>
            </span>
          ))}
        </p>
      </div>
    </article>
  );
}
