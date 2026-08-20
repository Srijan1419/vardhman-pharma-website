import { useState } from "react";
import Reveal from "./Reveal";
import { brands } from "../data/content";

const logoModules = import.meta.glob("../assets/brand-logos/*.png", { eager: true, import: "default" });
const logosBySlug = {};
for (const path in logoModules) {
  const file = path.split("/").pop().replace(".png", "");
  logosBySlug[file] = logoModules[path];
}

const ACCENTS = ["accent-blue", "accent-gold", "accent-cyan", "accent-deep"];

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function initials(name) {
  const clean = name.replace(/[^A-Za-z& ]/g, "");
  const parts = clean.split(" ").filter(Boolean);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return clean.slice(0, 2).toUpperCase();
}

function Mark({ name, index, size }) {
  const logo = logosBySlug[slugify(name)];
  if (logo) {
    return <img className={`brand-logo ${size ? "brand-logo-lg" : ""}`} src={logo} alt={`${name} logo`} loading="lazy" />;
  }
  return (
    <span className={`brand-mark ${ACCENTS[index % ACCENTS.length]} ${size ? "brand-mark-lg" : ""}`}>
      {initials(name)}
    </span>
  );
}

const orderedBrands = [...brands].sort((a, b) => {
  const aLogo = logosBySlug[slugify(a.name)] ? 1 : 0;
  const bLogo = logosBySlug[slugify(b.name)] ? 1 : 0;
  return bLogo - aLogo;
});

export default function BrandsWeCarry() {
  const [expanded, setExpanded] = useState(false);
  const track = [...orderedBrands, ...orderedBrands];
  const withLogo = brands.filter((b) => logosBySlug[slugify(b.name)]).length;

  return (
    <section id="brands">
      <div className="wrap">
        <div className="section-head">
          <h2>Brands we carry</h2>
        </div>
        <p className="brands-note">
          {brands.length} companies, transcribed from our own roster sheet — the real list, not a placeholder.
          {" "}{withLogo} shown with verified logos; the rest as monogram marks.
        </p>
      </div>

      <Reveal className="marquee" aria-label="Companies we carry">
        <div className="marquee-track">
          {track.map((b, i) => (
            <span className="marquee-chip" key={`${b.id}-${i}`}>
              <Mark name={b.name} index={b.id} />
              {b.name}
            </span>
          ))}
        </div>
      </Reveal>

      <div className="wrap">
        <button
          className="roster-toggle"
          aria-expanded={expanded}
          onClick={() => setExpanded((e) => !e)}
        >
          {expanded ? "Hide full roster" : `View full roster (${brands.length})`}
        </button>

        {expanded && (
          <ul className="roster-grid">
            {orderedBrands.map((b) => (
              <li key={b.id} className="roster-item">
                <Mark name={b.name} index={b.id} size="lg" />
                {b.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
