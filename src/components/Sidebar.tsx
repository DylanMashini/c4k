type Section = { id: string; label: string; num: string };

export default function Sidebar({
  sections,
  active,
}: {
  sections: Section[];
  active: string;
}) {
  return (
    <aside className="sidebar">
      <a href="#top" className="brand">
        <div className="brand-mark" aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4}>
            <path d="M4 16l4 -6l5 4l4 -10l3 14" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="brand-text">
          <span className="name">Fast &amp; Furious</span>
          <span className="tag">Assembly Guide · v3</span>
        </div>
      </a>

      <div className="nav-group">
        <div className="nav-label">Contents</div>
        <ul className="nav-list">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`nav-item ${active === s.id ? "active" : ""}`}
              >
                <span className="num">{s.num}</span>
                <span>{s.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="nav-group">
        <div className="nav-label">Project</div>
        <ul className="nav-list">
          <li>
            <a className="nav-item" href="#footer">
              <span className="num">ⓘ</span>
              <span>Team &amp; Credits</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
