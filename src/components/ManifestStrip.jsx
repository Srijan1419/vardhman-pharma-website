import { useReveal } from "../hooks/useReveal";
import { useCountUp } from "../hooks/useCountUp";
import { stats } from "../data/content";
import Icon from "./Icon";

const ICONS = ["calendar", "users", "network", "grid", "package"];

function StatCell({ stat, index }) {
  const { ref, visible } = useReveal();
  const display = useCountUp(stat.value, visible, 700 + index * 90);

  return (
    <div
      ref={ref}
      className={`m-cell reveal reveal-up ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <Icon name={ICONS[index]} className="m-icon" />
      <div className="m-label mono">
        {stat.label}
        {stat.live && <span className="live-dot" aria-hidden="true" />}
      </div>
      <div className="m-value mono">
        {display}
        <small>{stat.sub}</small>
      </div>
    </div>
  );
}

export default function ManifestStrip() {
  return (
    <div className="manifest">
      <div className="wrap manifest-grid">
        {stats.map((s, i) => (
          <StatCell key={s.label} stat={s} index={i} />
        ))}
      </div>
    </div>
  );
}
