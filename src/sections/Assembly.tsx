export default function Assembly() {
  return (
    <section className="section" id="assembly">
      <div className="sec-head">
        <div className="sec-num">§ 05 — Frame assembly</div>
        <h2>Clip, press, and you&apos;re rolling.</h2>
        <p>
          Work at a clean desk. Deburr any support scars with a hobby knife before you start. If a fit feels
          forced — stop, sand the mating face, and try again. Nothing on this chassis should require glue.
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
          Take the <strong>Base Frame</strong> and flip it upside-down. You&apos;ll see two round holes on the
          underside, near the front edge. These accept the two pegs on top of <strong>Wheel Axle 1</strong>.
        </p>
        <ol>
          <li>Align the axle so its two servo bays face forward (same direction as the base&apos;s latch tracks).</li>
          <li>Press the pegs straight down into the matching holes — the fit is snug but not forced.</li>
          <li>You should hear a soft click as the axle seats. It will not wiggle laterally when fully home.</li>
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
          <span>Est. 4 min</span>
          <span>Hardware · M3 × 8 mm</span>
        </div>
        <h3>Lock the axle with two M3 screws</h3>
        <p>
          While the axle&apos;s peg joint is snug, two M3 screws from the underside ensure it can&apos;t
          pop out under hard stops or when the shell is pulled off.
        </p>
        <ol>
          <li>Flip the chassis right-side up and confirm the axle is fully seated.</li>
          <li>Find the two 3 mm holes on the underside of the axle flange.</li>
          <li>Drive one M3 × 8 mm screw into each hole. Tighten until snug — do not over-torque; the PLA
            threads will strip.</li>
        </ol>
      </div>

      <div className="step">
        <div className="step-num">03</div>
        <div className="step-meta">
          <span>Est. 2 min</span>
          <span>Part 09 · Hardware</span>
        </div>
        <h3>Thread the dowel and mount the wheels</h3>
        <p>
          The two unpowered wheels run on a wooden dowel that passes through the axle part. This gives the
          car a clean rolling contact without adding mechanical complexity.
        </p>
        <ol>
          <li>Slide the 5 mm wooden dowel through the horizontal bore in Axle 1.</li>
          <li>Press a wheel onto each dowel end — the wheels should spin freely but not slide off under
            light lateral force.</li>
          <li>The front (driven) wheels push directly onto each micro-servo&apos;s output horn — we install
            those in the next step.</li>
        </ol>
      </div>

      <div className="step">
        <div className="step-num">04</div>
        <div className="step-meta">
          <span>Est. 5 min</span>
          <span>Optional · extended config</span>
        </div>
        <h3>Attach the extension piece (if needed)</h3>
        <p>
          Using a shell longer than 5 inches? Skip this step unless you&apos;re in the extended configuration.
        </p>
        <ol>
          <li>Align the extension&apos;s pegs with the two matching holes on the rear edge of the Base Frame.</li>
          <li>Press the extension into place — the locking tabs engage with an audible click.</li>
          <li>Install Wheel Axle 2 into the extension using the same peg-press method as Step 1.</li>
        </ol>
        <div className="callout tip">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" />
          </svg>
          <div>
            <strong>Level check</strong>
            Place the chassis on a flat surface before moving on. All six contact points should touch the
            surface. If one wheel is lifted, the extension isn&apos;t fully seated — press down along its
            full length and re-check.
          </div>
        </div>
      </div>
    </section>
  );
}
