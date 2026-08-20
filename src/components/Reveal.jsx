import { useReveal } from "../hooks/useReveal";

export default function Reveal({ as: Tag = "div", direction = "up", delay = 0, className = "", style, children, ...rest }) {
  const { ref, visible } = useReveal();
  const dirClass = direction === "left" ? "reveal-left" : direction === "right" ? "reveal-right" : "reveal-up";

  return (
    <Tag
      ref={ref}
      className={`reveal ${dirClass} ${visible ? "visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
