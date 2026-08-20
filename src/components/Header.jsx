import { useEffect, useState } from "react";
import { business } from "../data/content";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#stock", label: "What We Stock" },
  { href: "#brands", label: "Brands" },
  { href: "#credentials", label: "Credentials" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="wrap header-row">
        <a href="#top" className="brand">
          <span className="brand-name">
            <span className="brand-name-a">Vardhman</span>{" "}
            <span className="brand-name-b">Pharma</span>
          </span>
          <span className="brand-sub">{business.tagline}</span>
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={`nav-mobile ${open ? "open" : ""}`}
        aria-label="Primary"
      >
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
      </nav>
    </header>
  );
}
