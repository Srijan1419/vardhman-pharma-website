import { useState } from "react";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { stockCategories } from "../data/content";

export default function WhatWeStock() {
  const [active, setActive] = useState(0);
  const current = stockCategories[active];

  return (
    <section id="stock" className="stock-section">
      <div className="wrap">
        <div className="section-head">
          <h2>What we stock</h2>
        </div>

        <Reveal className="tabs">
          <div className="tab-list" role="tablist" aria-label="What we stock">
            {stockCategories.map((c, i) => (
              <button
                key={c.title}
                role="tab"
                id={`tab-${i}`}
                aria-selected={active === i}
                aria-controls={`panel-${i}`}
                className={`tab-btn ${active === i ? "active" : ""}`}
                onClick={() => setActive(i)}
              >
                <Icon name={c.icon} className="tab-icon" />
                <span className="tab-btn-text">
                  <span className="tab-figure mono">{c.num}</span>
                  <span className="tab-title">{c.title}</span>
                </span>
              </button>
            ))}
          </div>

          <div
            className="tab-panel"
            role="tabpanel"
            id={`panel-${active}`}
            aria-labelledby={`tab-${active}`}
            key={active}
          >
            <Icon name={current.icon} className="tab-panel-icon" size={30} />
            <span className="tab-panel-figure mono">{current.num}</span>
            <h3>{current.title}</h3>
            <p>{current.body}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
