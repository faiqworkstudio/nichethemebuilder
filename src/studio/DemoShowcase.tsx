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
      sizes={device === "desktop" ? "(max-width: 900px) 92vw, 900px" : device === "tablet" ? "(max-width: 900px) 30vw, 340px" : "(max-width: 900px) 18vw, 180px"}
      priority={priority}
    />
  );
}

/** One demo: description on one side, real desktop / iPad / phone screenshots on the other. */
export function DemoShowcase({ demo, index }: { demo: DemoEntry; index: number }) {
  const primary = demo.routes.th ?? demo.routes.en;
  return (
    <article className="kd-demo" aria-labelledby={`${demo.slug}-title`}>
      <div className="kd-stage">
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
      </div>

      <div className="kd-demo-intro">
        <p className="kd-demo-id">
          {demo.id} · {demo.industry}
          <span className="kd-status">{demo.status}</span>
        </p>
        <h3 id={`${demo.slug}-title`}>
          {demo.name}
          {demo.nameTh ? (
            <span lang="th" className="kd-name-th">
              {demo.nameTh}
            </span>
          ) : null}
        </h3>
        <p>{demo.summary}</p>
        <div className="kd-actions">
          <a className="kd-button" href={primary}>
            Open demo{demo.routes.th ? " (ไทย)" : ""}
          </a>
          {demo.routes.th ? (
            <a className="kd-button kd-button-ghost" href={demo.routes.en}>
              English version
            </a>
          ) : null}
        </div>
      </div>

      <div className="kd-demo-detail">
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
            <dt>Theme</dt>
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
      </div>

      <ul className="kd-shot-links" aria-label={`${demo.name} full-size screenshots`}>
        {devices.map((d) => (
          <li key={d}>
            <a href={screenshotPath(demo.slug, d)} target="_blank" rel="noopener">
              {deviceSizes[d].label} ↗
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
