import Reveal from "./Reveal";
import logo from "../assets/logo-transparent.png";
import { brands } from "../data/content";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <Reveal className="eyebrow mono" delay={0}>
            Deals in fast-moving ethical items
          </Reveal>
          <Reveal as="h1" delay={80}>
            A dependable stockist network for chemists across Jabalpur and
            the surrounding district.
          </Reveal>
          <Reveal as="p" className="lede" delay={160}>
            Vardhman Pharma supplies ethical pharmaceutical products to
            retail chemists — sourcing across {brands.length} companies,
            holding 1,600+ SKUs, and serving a growing base of retailers who
            need stock on time, every time.
          </Reveal>
          <Reveal className="hero-actions" delay={240}>
            <a href="#contact" className="btn btn-primary">Get in touch</a>
            <a href="#credentials" className="hero-link">View licences &amp; credentials →</a>
          </Reveal>
        </div>

        <Reveal className="hero-visual" direction="right" delay={200}>
          <div className="hero-glow" aria-hidden="true" />
          <img className="hero-logo" src={logo} alt="Vardhman Pharma — Bcoz Every Dose Matters" />
        </Reveal>
      </div>
    </section>
  );
}
