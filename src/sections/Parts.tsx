export default function Parts() {
  return (
    <section className="section" id="parts">
      <div className="sec-head">
        <div className="sec-num">§ 02 — Printed parts</div>
        <h2>Know your components.</h2>
        <p>
          Before printing, take a moment to understand each part. The CAD renders below show the pieces in
          their final revision — Iteration 3. Dimensions are in millimetres; Fusion source files are open in
          the shared Fusion 360 team folder.
        </p>
      </div>

      <div className="part-row">
        <div className="part-visual">
          <div className="part-tag">01 · Base Frame</div>
          <img src="/parts/base_frame_raw.png" alt="Base frame" />
        </div>
        <div className="part-info">
          <div className="id">PART-01 / Prototype 3 v14</div>
          <h3>Base Frame</h3>
          <p>
            The core chassis. The raised central well holds the micro:bit upright with its edge connector
            facing forward. Servos mount into the two rectangular cavities along the front edge. Two latch
            tracks run down the left side — this is where the student-designed shell clips on.
          </p>
          <div className="part-specs">
            <div className="spec"><span className="k">Footprint</span><span className="v">127 × 127 mm</span></div>
            <div className="spec"><span className="k">Height</span><span className="v">44.5 mm</span></div>
            <div className="spec"><span className="k">Material</span><span className="v">PLA, 20% infill</span></div>
            <div className="spec"><span className="k">Print time</span><span className="v">~6h 20m</span></div>
          </div>
        </div>
      </div>

      <div className="part-row reverse">
        <div className="part-visual">
          <div className="part-tag">03 · Wheel Axle 1</div>
          <img src="/parts/axel1_raw.png" alt="Wheel Axle 1" />
        </div>
        <div className="part-info">
          <div className="id">PART-03 / Rear/Front Axle 5 in v67 v3</div>
          <h3>Wheel Axle 1</h3>
          <p>
            A Y-shaped sub-assembly that clips into the bottom of the Base Frame via two round pegs. It
            carries two micro-servos in its front cavities, with through-holes for a wooden dowel running
            to the rear wheels. Use this axle for the standard 5-inch configuration.
          </p>
          <div className="part-specs">
            <div className="spec"><span className="k">Servo bays</span><span className="v">2 × SG90</span></div>
            <div className="spec"><span className="k">Dowel bore</span><span className="v">Ø 5.2 mm</span></div>
            <div className="spec"><span className="k">Peg diameter</span><span className="v">Ø 6.0 mm</span></div>
            <div className="spec"><span className="k">Print time</span><span className="v">~3h 40m</span></div>
          </div>
        </div>
      </div>

      <div className="part-row">
        <div className="part-visual" style={{ display: "grid", placeItems: "center" }}>
          <div className="part-tag">02 · Extension Piece</div>
          <svg width="60%" viewBox="0 0 200 140" fill="none" style={{ opacity: 0.45 }}>
            <rect x="20" y="40" width="160" height="60" rx="6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
            <rect x="30" y="50" width="40" height="40" rx="3" stroke="currentColor" strokeWidth="1" />
            <rect x="80" y="50" width="40" height="40" rx="3" stroke="currentColor" strokeWidth="1" />
            <rect x="130" y="50" width="40" height="40" rx="3" stroke="currentColor" strokeWidth="1" />
            <text x="100" y="130" textAnchor="middle" fontSize="8" fill="currentColor" fontFamily="JetBrains Mono">
              OPTIONAL · EXTENDED CONFIG
            </text>
          </svg>
        </div>
        <div className="part-info">
          <div className="id">PART-02 / Extension</div>
          <h3>Extension Piece</h3>
          <p>
            A hollowed slab that bridges the Base Frame and Wheel Axle 2 to push the chassis to its full
            8-inch (203 mm) length. It mates to the base via a reinforced peg-and-lock pair on its short
            edge. Print only when a larger shell — train, truck, bus — demands the extra length.
          </p>
          <div className="part-specs">
            <div className="spec"><span className="k">Footprint</span><span className="v">76 × 127 mm</span></div>
            <div className="spec"><span className="k">Interior</span><span className="v">Hollowed · 3 ribs</span></div>
            <div className="spec"><span className="k">Print time</span><span className="v">~2h 10m</span></div>
            <div className="spec"><span className="k">Use when</span><span className="v">Shell &gt; 5 in</span></div>
          </div>
        </div>
      </div>

      <div className="part-row reverse">
        <div className="part-visual" style={{ display: "grid", placeItems: "center" }}>
          <div className="part-tag">04 · Wheel Axle 2</div>
          <svg width="55%" viewBox="0 0 200 140" fill="none" style={{ opacity: 0.45 }}>
            <path d="M 20 80 L 60 40 L 140 40 L 180 80 L 180 100 L 20 100 Z" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="50" cy="70" r="5" stroke="currentColor" strokeWidth="1" />
            <circle cx="150" cy="70" r="5" stroke="currentColor" strokeWidth="1" />
            <text x="100" y="130" textAnchor="middle" fontSize="8" fill="currentColor" fontFamily="JetBrains Mono">
              OPTIONAL · EXTENDED CONFIG
            </text>
          </svg>
        </div>
        <div className="part-info">
          <div className="id">PART-04 / Axle 2</div>
          <h3>Wheel Axle 2</h3>
          <p>
            A secondary axle used when the extension is installed. Mirrors Axle 1&apos;s peg-and-slot attachment
            method rather than Iteration 2&apos;s screwed joint — this fixes the thin-wall failure from earlier
            prints. Installs under the extension piece.
          </p>
          <div className="part-specs">
            <div className="spec"><span className="k">Servo bays</span><span className="v">1 × SG90</span></div>
            <div className="spec"><span className="k">Attachment</span><span className="v">Peg press-fit</span></div>
            <div className="spec"><span className="k">Print time</span><span className="v">~2h 00m</span></div>
            <div className="spec"><span className="k">Pairs with</span><span className="v">Extension</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
