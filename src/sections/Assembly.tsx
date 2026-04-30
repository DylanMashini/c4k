export default function Assembly() {
  return (
    <section className="section" id="assembly">
      <div className="sec-head">
        <div className="sec-num">§ 05 — Frame assembly</div>
        <h2>Frame Assembly</h2>
        <p>
          Clean up any support scars with a hobby knife before you start. If a fit feels forced, stop and
          sand the mating face — don&apos;t use glue.
        </p>
      </div>

      <div className="step">
        <div className="step-num">01</div>
        <div className="step-meta">
          <span>Est. 3 min</span>
          <span>Part 01 · Part 03</span>
        </div>
        <h3>Seat the wheel axle into the base frame</h3>
        <p>
          Flip the <strong>Base Frame</strong> upside-down. You&apos;ll see two round holes on the underside
          near the rear edge — these accept the two pegs on top of <strong>Wheel Axle 1</strong>.
        </p>
        <ol>
          <li>Align the axle so its two servo bays face the rear of the chassis.</li>
          <li>Press the pegs straight down into the matching holes — the fit is snug but not forced.</li>
          <li>The axle should not wiggle laterally when fully seated.</li>
        </ol>
        <div className="callout warn">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          </svg>
          <div>
            <strong>If the pegs won&apos;t seat</strong>
            Don&apos;t force them. Check for stringy support residue around the peg — Iteration 1 pegs came
            off the bed with small burrs. A quick pass with a hobby knife is all it takes.
          </div>
        </div>
      </div>

      <div className="step">
        <div className="step-num">02</div>
        <div className="step-meta">
          <span>Est. 5 min</span>
          <span>2 × micro-servo</span>
        </div>
        <h3>Install the two rear servos</h3>
        <p>
          The two driven wheels each get their own SG90 micro-servo. Drop one into each rear servo bay.
        </p>
        <ol>
          <li>Orient each servo so its cable exits toward the centre of the chassis (cables route forward
            into the micro:bit well).</li>
          <li>Drop the servo body-first into its bay. The flange catches on the top of the bay — that&apos;s
            what holds the servo vertically.</li>
        </ol>
      </div>

      <div className="step">
        <div className="step-num">03</div>
        <div className="step-meta">
          <span>Est. 2 min</span>
          <span>2 × rear wheel</span>
        </div>
        <h3>Mount the rear wheels onto the servos</h3>
        <p>
          With both servos installed, push a wheel onto each servo&apos;s output horn. The horn&apos;s splines
          bite into the wheel hub for a press-fit drive — no screw needed for a typical C4K wheel.
        </p>
        <ol>
          <li>Centre the wheel on the servo spline and press straight on. Don&apos;t rock it side-to-side.</li>
          <li>Spin each wheel by hand to confirm it&apos;s seated true — no wobble, no rub against the axle.</li>
          <li>If a wheel slips on the spline, add the small servo screw through the wheel hub into the horn.</li>
        </ol>
      </div>

      <div className="step">
        <div className="step-num">04</div>
        <div className="step-meta">
          <span>Est. 1 min</span>
          <span>1 × swivel castor</span>
        </div>
        <h3>Install the front swivel castor</h3>
        <p>
          The front of the chassis rides on a single swivel castor wheel. Install it under the front of the
          Base Frame using the castor&apos;s included hardware.
        </p>
      </div>
    </section>
  );
}
