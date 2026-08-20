import Reveal from "./Reveal";

export default function Signal() {
  return (
    <section id="signal" className="signal-section">
      <div className="capsule-stage" aria-hidden="true">
        <div className="capsule">
          <div className="capsule-half gold" />
          <div className="capsule-half white" />
          <div className="capsule-outline" />
        </div>
      </div>
      <div className="wrap">
        <Reveal as="p" className="signal-text">
          Stock other distributors won't bother carrying — picked, checked,
          and dispatched the same day.
        </Reveal>
      </div>
    </section>
  );
}
