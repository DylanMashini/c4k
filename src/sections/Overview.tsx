export default function Overview() {
  return (
    <section className="section" id="overview">
      <div className="sec-head">
        <div className="sec-num">§ 00 — Overview</div>
        <h2>Four printed parts. Three servos. One chassis.</h2>
        <p>
          The <strong>Fast and Furious</strong> chassis is a four-part 3D-printed frame that cleanly houses a
          BBC micro:bit, battery pack, and up to three micro-servos. It supports two interchangeable wheel axles
          and a latching side-track that lets students attach any shell they design — without adhesive, and with
          no tools beyond a screwdriver.
        </p>
      </div>

      <div className="card-grid">
        <div className="card">
          <div className="sec-num" style={{ marginBottom: 10 }}>01</div>
          <h3>Modular</h3>
          <p style={{ fontSize: 14 }}>
            Base frame, optional extension, and two swappable axles. Configure for a 5-inch sports car or an
            8-inch train — same chassis, same electronics.
          </p>
        </div>
        <div className="card">
          <div className="sec-num" style={{ marginBottom: 10 }}>02</div>
          <h3>Student-first</h3>
          <p style={{ fontSize: 14 }}>
            No glue, no soldering, no precision tools. Every fit is a press-fit or a screw. A student can
            rebuild the entire car in under 45 minutes.
          </p>
        </div>
        <div className="card">
          <div className="sec-num" style={{ marginBottom: 10 }}>03</div>
          <h3>Replicable</h3>
          <p style={{ fontSize: 14 }}>
            Printed on a Bambu X1 Carbon in standard PLA. Wall thicknesses and screw tolerances have been
            tuned over three iterations to print reliably.
          </p>
        </div>
        <div className="card">
          <div className="sec-num" style={{ marginBottom: 10 }}>04</div>
          <h3>Customizable</h3>
          <p style={{ fontSize: 14 }}>
            A printable latch-track runs along the side — students design a mating peg into their shell and
            the whole car becomes their canvas.
          </p>
        </div>
      </div>
    </section>
  );
}
