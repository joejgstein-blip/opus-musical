import { show, type Section } from "@/data/show";

export default function TableOfContents() {
  const act1 = show.sections.filter((s) => s.act === 1);
  const act2 = show.sections.filter((s) => s.act === 2);

  const renderList = (sections: Section[], startNum: number) => (
    <ol className="toc-list">
      {sections.map((s, i) => (
        <li key={s.id} className="toc-item">
          <span className="toc-number">{String(startNum + i).padStart(2, "0")}</span>
          <a href={`#${s.id}`} className="toc-link">
            {s.title}
          </a>
          {s.type === "song" && <span className="toc-song-badge">♪</span>}
        </li>
      ))}
    </ol>
  );

  return (
    <nav className="toc" aria-label="Table of Contents">
      <span className="section-label">Contents</span>
      <div className="toc-acts">
        <div>
          <p className="toc-act-title">Act I</p>
          {renderList(act1, 1)}
        </div>
        <div>
          <p className="toc-act-title">Act II</p>
          {renderList(act2, act1.length + 1)}
        </div>
      </div>
    </nav>
  );
}
