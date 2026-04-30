export default function Electronics() {
  return (
    <section className="section" id="electronics">
      <div className="sec-head">
        <div className="sec-num">§ 06 — Electronics &amp; wiring</div>
        <h2>Electronics &amp; Wiring</h2>
        <p>
          The micro:bit sits upright in the central well with its edge connector facing forward, so you can
          reflash code without pulling the car apart.
        </p>
      </div>

      <div className="step">
        <div className="step-num">06</div>
        <div className="step-meta">
          <span>Est. 4 min</span>
          <span>Part 05 · Part 07</span>
        </div>
        <h3>Seat the micro:bit &amp; battery pack</h3>
        <ol>
          <li>Drop the micro:bit into the raised central well. The edge connector should face forward;
            the 25-LED matrix faces up.</li>
          <li>The well is sized for a friction fit — the board should rest with its lower edge bottomed out
            and the top edge flush with the well wall.</li>
          <li>Lay the 4×AA battery pack flat in the rear compartment. Route its leads forward along the
            internal channel.</li>
        </ol>
        <div className="callout tip">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" />
          </svg>
          <div>
            <strong>Battery orientation</strong>
            Red to positive, black to ground. Double-check before connecting to the edge connector —
            reversed polarity can kill a micro:bit instantly.
          </div>
        </div>
      </div>

      <div className="step">
        <div className="step-num">07</div>
        <div className="step-meta">
          <span>Est. 5 min</span>
          <span>Wiring</span>
        </div>
        <h3>Wire up the servos</h3>
        <p>
          Each SG90 has three wires: <span className="mono" style={{ color: "#ff8080" }}>red</span> (3V),{" "}
          <span className="mono" style={{ color: "#6b6b7b" }}>black/brown</span> (GND), and{" "}
          <span className="mono" style={{ color: "#f4b942" }}>yellow/orange</span> (signal). Connect them to
          the micro:bit edge connector as follows:
        </p>
        <div className="specs" style={{ marginTop: 12 }}>
          <div className="row"><span className="k">Left rear servo · signal</span><span className="v">P0</span></div>
          <div className="row"><span className="k">Right rear servo · signal</span><span className="v">P1</span></div>
          <div className="row"><span className="k">Both servos · power</span><span className="v">3V rail</span></div>
          <div className="row"><span className="k">Both servos · ground</span><span className="v">GND rail</span></div>
          <div className="row"><span className="k">Battery pack</span><span className="v">3V / GND (via edge connector)</span></div>
        </div>
        <div className="callout warn">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          </svg>
          <div>
            <strong>Current draw matters</strong>
            Two SG90 servos at full stall pull ~0.5 A. The micro:bit&apos;s 3V rail isn&apos;t rated for that —
            power the servos directly from the battery pack&apos;s positive lead, and tie only the ground back
            through the micro:bit.
          </div>
        </div>
      </div>
    </section>
  );
}
