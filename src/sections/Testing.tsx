export default function Testing() {
  return (
    <section className="section" id="testing">
      <div className="sec-head">
        <div className="sec-num">§ 08 — Testing &amp; calibration</div>
        <h2>Prove it moves. Prove it stops.</h2>
        <p>
          Before handing the car to a student, run through the two tests below. These are the same tests we
          used across three build iterations — if your car passes them, it&apos;s ready for the classroom.
        </p>
      </div>

      <div className="step">
        <div className="step-num">10</div>
        <div className="step-meta">
          <span>Durability</span>
          <span>~5 min</span>
        </div>
        <h3>Durability test</h3>
        <p>
          Simulate a reasonable classroom impact. The goal isn&apos;t to break the frame — it&apos;s to
          confirm it survives what a middle-schooler will throw at it.
        </p>
        <ol>
          <li>With the chassis fully assembled and shell attached, drive the car into a wall at normal speed.</li>
          <li>Inspect: no cracks at the axle pegs, no displaced servos, no loose latch.</li>
          <li>Open the shell and re-close it ten times. The latch detent should still engage crisply.</li>
          <li>Shake the car gently — if anything rattles, find it and seat it.</li>
        </ol>
      </div>

      <div className="step">
        <div className="step-num">11</div>
        <div className="step-meta">
          <span>Assembly</span>
          <span>~10 min</span>
        </div>
        <h3>Assembly test (volunteer)</h3>
        <p>
          The whole point of this chassis is that students can assemble it themselves. Hand the printed parts,
          a screwdriver, and this guide to someone who has never seen the project.
        </p>
        <ol>
          <li>Time them from unboxing to a fully-assembled chassis. Target: under 45 minutes.</li>
          <li>Do not answer questions about the design. Instead, note exactly where the instructions failed.</li>
          <li>Every question is a guide bug — revise the text or add a photo, then re-test.</li>
        </ol>
        <div className="callout tip">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" />
          </svg>
          <div>
            <strong>Ship it</strong>
            A volunteer who finishes the build without asking for help is your strongest signal that this
            guide is ready for C4K. Treat that bar seriously.
          </div>
        </div>
      </div>
    </section>
  );
}
