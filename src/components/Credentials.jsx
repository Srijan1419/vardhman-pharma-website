import Reveal from "./Reveal";
import CopyButton from "./CopyButton";
import { credentials } from "../data/content";

export default function Credentials() {
  return (
    <section id="credentials" className="cred-section">
      <div className="wrap">
        <div className="section-head">
          <h2>Licences &amp; credentials</h2>
        </div>
        <p className="cred-note">
          Filed with the applicable licensing and tax authorities — figures
          below are shown as a matter of record.
        </p>
        <div className="cred-grid">
          {credentials.map((c, i) => (
            <Reveal
              key={c.label}
              className="cred-cell"
              delay={i * 60}
              direction={i % 2 ? "right" : "left"}
            >
              <div className="m-label mono">{c.label}</div>
              <div className="m-value mono">
                {c.value}
                {c.isSample && <span className="placeholder-tag">unconfirmed</span>}
                {!c.isSample && <CopyButton value={c.value} label={c.label} />}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
