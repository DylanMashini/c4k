const TOOLS = [
  { name: "Phillips #0 screwdriver", note: "For M3 screws" },
  { name: "Bambu X1 Carbon (or comparable)", note: "FDM, 0.4 mm nozzle, PLA" },
  { name: "Flush cutters / side cutters", note: "Cleaning support material" },
  { name: "Needle-nose pliers", note: "Pressing pegs home" },
  { name: "Hobby knife", note: "Deburring printed edges" },
  { name: "Computer w/ MakeCode", note: "Flashing the micro:bit" },
];

export default function Tools() {
  return (
    <section className="section" id="tools">
      <div className="sec-head">
        <div className="sec-num">§ 03 — Tools required</div>
        <h2>Tools Required</h2>
      </div>

      <div className="card-grid">
        {TOOLS.map((t) => (
          <div className="card" key={t.name}>
            <h3 style={{ fontSize: "1rem", marginBottom: 6 }}>{t.name}</h3>
            <p style={{ fontSize: 13, color: "var(--text-faint)" }}>{t.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
