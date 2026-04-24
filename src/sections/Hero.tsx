export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="grid-bg" aria-hidden />

      <div className="eyebrow reveal d1">
        <span className="dot" />
        <span>ENGR 1010 · 014_06 · Spring 2026</span>
      </div>

      <h1 className="reveal d2">
        A standardized chassis for the{" "}
        <span className="gradient-text">Micro:Bit</span> generation.
      </h1>

      <p className="lede reveal d3">
        This guide walks through the complete replication of the <em>Fast and Furious</em> RC car frame —
        designed for Computers&nbsp;for&nbsp;Kids to give middle and high school students a durable,
        customizable base so they can focus on what they love: code, wiring, and creative vehicle design.
      </p>

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
        <div className="kv">
          <span className="k">Adhesive</span>
          <span className="v">None required</span>
        </div>
      </div>
    </section>
  );
}
