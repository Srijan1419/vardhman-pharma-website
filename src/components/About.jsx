import Reveal from "./Reveal";
import { business, brands } from "../data/content";

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head">
          <h2>About the business</h2>
        </div>
        <div className="about-grid">
          <Reveal direction="left">
            <p>
              Vardhman Pharma is a wholesale distributor of ethical medicines
              based in Jabalpur, Madhya Pradesh. We source stock from
              stockists across multiple states and supply it on to retail
              chemists across the city and district — carrying a wide spread
              of companies so that retailers can order what they actually
              need from one place, instead of chasing multiple suppliers.
            </p>
            <p>
              Since starting operations, we've built a base of retailer
              relationships on a simple principle: pick up the phone,
              deliver on time, and stand behind what we supply. That's grown
              the business to a network of <strong>100+ retailers</strong>,
              with roughly half ordering on a regular, ongoing basis.
            </p>
            <p>
              We're currently expanding our systems — from how stock is
              picked and checked in our godown, to how retailers place and
              track orders — as the business grows past the point where
              everything can run on phone calls alone.
            </p>
          </Reveal>
          <Reveal direction="right" delay={120} className="fact-list">
            <dl>
              <dt className="mono">Proprietor</dt>
              <dd>
                {business.proprietor.value}
                {business.proprietor.isSample && <span className="placeholder-tag">sample</span>}
              </dd>
              <dt className="mono">Business type</dt>
              <dd>Wholesale Distribution — Ethical Medicines</dd>
              <dt className="mono">Location</dt>
              <dd>{business.city}, India</dd>
              <dt className="mono">Operating since</dt>
              <dd>{business.establishedMonth} {business.establishedYear}</dd>
              <dt className="mono">Companies stocked</dt>
              <dd>{brands.length}</dd>
              <dt className="mono">SKU range</dt>
              <dd>1,600+ across therapeutic categories</dd>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
