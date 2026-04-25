export default function Printing() {
  return (
    <section className="section" id="printing">
      <div className="sec-head">
        <div className="sec-num">§ 04 — Printing the parts</div>
        <h2>Printing the Parts</h2>
        <p>
          Slice each <code>.3mf</code> with the settings below. These are the settings that produced clean
          prints on the Bambu X1 Carbon — other FDM printers with a 0.4&nbsp;mm nozzle should work with the
          same values.
        </p>
      </div>

      <div className="specs" style={{ marginBottom: 28 }}>
        <div className="row"><span className="k">Printer</span><span className="v">Bambu X1 Carbon (0.4 mm)</span></div>
        <div className="row"><span className="k">Filament</span><span className="v">PLA · any colour</span></div>
        <div className="row"><span className="k">Layer height</span><span className="v">0.20 mm</span></div>
        <div className="row"><span className="k">Walls</span><span className="v">3 perimeters</span></div>
        <div className="row"><span className="k">Infill</span><span className="v">20% gyroid</span></div>
        <div className="row"><span className="k">Supports</span><span className="v">Tree, only where marked</span></div>
        <div className="row"><span className="k">Brim</span><span className="v">5 mm on Axle parts</span></div>
        <div className="row"><span className="k">Orientation</span><span className="v">See note below</span></div>
      </div>

      <div className="callout tip">
        <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4M12 8h.01" strokeLinecap="round" />
        </svg>
        <div>
          <strong>Print orientations</strong>
          Base Frame and Extension print flat on the build plate, open-side up. Axle 1 and Axle 2 print on
          their flat back face with tree supports under the front servo bays — this keeps the peg surfaces
          clean for press-fit.
        </div>
      </div>

      <div className="callout warn">
        <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div>
          <strong>Iteration 1 lesson — watch wall thickness</strong>
          The original Axle 2 failed because one of its internal walls was below the printer&apos;s minimum
          extrusion width. If you remix the CAD, keep every wall ≥ 1.6 mm. If a wall prints hollow, scrap it —
          don&apos;t try to glue over it.
        </div>
      </div>

      <div className="callout tip">
        <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4M12 8h.01" strokeLinecap="round" />
        </svg>
        <div>
          <strong>Print order</strong>
          Print the Base Frame and Wheel Axle 1 first — you can dry-fit and validate the chassis even before
          the extension arrives. Print extension parts only after choosing the extended configuration.
        </div>
      </div>
    </section>
  );
}
