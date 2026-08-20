import { useEffect, useState } from "react";
import { prefersReducedMotion } from "./useReveal";

export function useCountUp(value, active, duration = 900) {
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!active) return;
    const match = String(value).match(/^([\d,]+)(.*)$/);
    if (!match || prefersReducedMotion()) return;
    const target = parseInt(match[1].replace(/,/g, ""), 10);
    const suffix = match[2];
    const grouped = match[1].includes(",");
    let frame;
    let start;

    const tick = (ts) => {
      if (start === undefined) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      const formatted = grouped ? current.toLocaleString("en-IN") : String(current);
      setDisplay(formatted + suffix);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, value, duration]);

  return display;
}
