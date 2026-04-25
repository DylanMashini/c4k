export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="grid-bg" aria-hidden />

      <div className="eyebrow reveal d1">
        <span className="dot" />
        <span>ENGR 1010 · 014_06 · Spring 2026</span>
      </div>

      <h1 className="reveal d2">
        A standardized chassis for{" "}
        <span className="gradient-text">Micro:Bit</span>
      </h1>

      <div className="hero-cta reveal d4">
        <a href="#printing" className="btn primary">
          Start assembling
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <a href="#bom" className="btn">
          Bill of materials
        </a>
      </div>

      <div className="hero-meta reveal d5">
        <div className="kv">
          <span className="k">Dimensions</span>
          <span className="v">5 × 5 × 1.75 in</span>
        </div>
        <div className="kv">
          <span className="k">Print time</span>
          <span className="v">~14 hrs total</span>
        </div>
        <div className="kv">
          <span className="k">Assembly</span>
          <span className="v">30 – 45 min</span>
        </div>
        <div className="kv">
          <span className="k">Skill level</span>
          <span className="v">Beginner</span>
        </div>
      </div>
    </section>
  );
}
