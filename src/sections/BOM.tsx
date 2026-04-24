type Row = {
  ix: string;
  name: string;
  sub?: string;
  kind: string;
  qty: string;
  source: string;
};

const ROWS: Row[] = [
  { ix: "01", name: "Base Frame", sub: "Main chassis — houses micro:bit & electronics", kind: "Printed", qty: "1", source: "Prototype 3" },
  { ix: "02", name: "Extension Piece", sub: "Optional — extends base to 8 inches for larger shells", kind: "Printed", qty: "0–1", source: "Prototype 3" },
  { ix: "03", name: "Wheel Axle 1", sub: "Non-extended configuration — houses 2 micro-servos", kind: "Printed", qty: "1", source: "Axel 5in" },
  { ix: "04", name: "Wheel Axle 2", sub: "Extended configuration — for 8-inch frame", kind: "Printed", qty: "0–1", source: "Axel 2" },
  { ix: "05", name: "BBC micro:bit (V2)", sub: "Main controller — provided in the C4K kit", kind: "Electronic", qty: "1", source: "C4K kit" },
  { ix: "06", name: "Micro-servo (SG90 / FS90)", sub: "Continuous rotation drive motors", kind: "Electronic", qty: "2–3", source: "C4K kit" },
  { ix: "07", name: "AA battery pack (4×AA)", sub: "Powers servos + micro:bit via 3V rail", kind: "Electronic", qty: "1", source: "C4K kit" },
  { ix: "08", name: "Wooden dowel axle (Ø 5 mm)", sub: "Through-axle for unpowered wheels", kind: "Hardware", qty: "1–2", source: "C4K kit" },
  { ix: "09", name: "Wheels", sub: "Standard C4K wheels — 65 mm or 55 mm", kind: "Hardware", qty: "4", source: "C4K kit" },
  { ix: "10", name: "M3 × 8 mm machine screws", sub: "Secures axle to frame", kind: "Hardware", qty: "4", source: "Hardware bin" },
  { ix: "11", name: "Jumper wires", sub: "Servo ↔ micro:bit edge connector", kind: "Electronic", qty: "≥6", source: "C4K kit" },
];

export default function BOM() {
  return (
    <section className="section" id="bom">
      <div className="sec-head">
        <div className="sec-num">§ 01 — Bill of Materials</div>
        <h2>Everything you need, in one place.</h2>
        <p>
          Parts labeled <span className="mono" style={{ color: "var(--accent-2)" }}>Printed</span> are fabricated
          from the supplied <code>.3mf</code> files. Parts labeled{" "}
          <span className="mono" style={{ color: "var(--accent-2)" }}>Electronic</span> and{" "}
          <span className="mono" style={{ color: "var(--accent-2)" }}>Hardware</span> are included in the
          standard C4K Micro:Bit kit or the class hardware bin.
        </p>
      </div>

      <div className="bom">
        <div className="bom-row head">
          <span className="k1">#</span>
          <span className="k2">Part</span>
          <span className="k3">Type</span>
          <span className="k4">Qty</span>
          <span className="k5">Source</span>
        </div>
        {ROWS.map((r) => (
          <div className="bom-row" key={r.ix}>
            <span className="ix">{r.ix}</span>
            <div>
              <div className="name">{r.name}</div>
              {r.sub && <div className="sub">{r.sub}</div>}
            </div>
            <span className="kind">{r.kind}</span>
            <span className="qty">{r.qty}</span>
            <span className="source">{r.source}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
