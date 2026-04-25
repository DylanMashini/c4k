export default function ShellAttach() {
  return (
    <section className="section" id="shell">
      <div className="sec-head">
        <div className="sec-num">§ 07 — Shell attachment</div>
        <h2>Shell Attachment</h2>
        <p>
          The base frame has two latch tracks along its left side. Design a pair of mating pegs into your
          shell — to the dimensions below — and the shell clips on with no adhesive.
        </p>
      </div>

      <div className="step">
        <div className="step-num">08</div>
        <div className="step-meta">
          <span>Student-designed</span>
          <span>Mating pegs</span>
        </div>
        <h3>Design the shell mating peg</h3>
        <p>
          Your shell must include two mating pegs whose dimensions match the latch track on the base frame:
        </p>
        <div className="specs" style={{ marginTop: 12 }}>
          <div className="row"><span className="k">Peg shaft</span><span className="v">4.0 mm × 6.0 mm</span></div>
          <div className="row"><span className="k">Peg head</span><span className="v">Ø 6.5 mm</span></div>
          <div className="row"><span className="k">Peg spacing</span><span className="v">42.0 mm centre-to-centre</span></div>
          <div className="row"><span className="k">Peg inset from edge</span><span className="v">8.0 mm</span></div>
        </div>
      </div>

      <div className="step">
        <div className="step-num">09</div>
        <div className="step-meta">
          <span>Est. 10 sec</span>
          <span>No tools required</span>
        </div>
        <h3>Clip the shell on</h3>
        <ol>
          <li>Hold the shell above the frame with its pegs aligned to the two latch tracks.</li>
          <li>Slide the shell downward along the tracks — the pegs travel through the entry slot.</li>
          <li>At the end of the track, rotate the shell 10° toward the frame to engage the locking
            detent. It clicks when locked.</li>
          <li>To remove, reverse the rotation — no detent-defeating gesture is accidental.</li>
        </ol>
        <div className="callout tip">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" />
          </svg>
          <div>
            <strong>Why this matters</strong>
            The latch is the one piece of the design the students <em>don&apos;t</em> get to choose — it&apos;s
            the interface contract between our chassis and their creativity. Dimensions are non-negotiable;
            everything above it is theirs.
          </div>
        </div>
      </div>
    </section>
  );
}
