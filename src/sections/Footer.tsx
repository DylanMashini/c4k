export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="credit">Fast &amp; Furious · Micro:Bits · Chapter 2 · Spring 2026</div>
      <div className="names">
        Designed and documented by{" "}
        <span>Cora Reid</span>, <span>Dylan Mashini</span>, and <span>Enrrique Burgos</span> ·{" "}
        ENGR 1010 Section 014_06 · University of Virginia
      </div>
      <div className="names" style={{ marginTop: 8, fontSize: 12, color: "var(--text-faint)" }}>
        Prepared for Cullen Levesque &amp; Computers for Kids · Charlottesville, VA
      </div>
    </footer>
  );
}
