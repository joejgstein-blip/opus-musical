import { show } from "@/data/show";

export default function TableOfContents() {
  const songs = show.sections.filter((s) => s.type === "song");
  const scenes = show.sections.filter((s) => s.type === "scene");

  const songAct1 = songs.filter((s) => s.act === 1);
  const songAct2 = songs.filter((s) => s.act === 2);
  const sceneAct1 = scenes.filter((s) => s.act === 1);
  const sceneAct2 = scenes.filter((s) => s.act === 2);

  return (
    <nav className="toc" aria-label="Table of Contents">
      <div className="toc-two-col">

        <div className="toc-col">
          <span className="section-label">Songs</span>
          <div className="toc-act-group">
            <p className="toc-act-title">Act I</p>
            <ul className="toc-list">
              {songAct1.map((s) => (
                <li key={s.id} className="toc-item">
                  <span className="toc-song-icon">♪</span>
                  <a href={`#${s.id}`} className="toc-link">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="toc-act-group">
            <p className="toc-act-title">Act II</p>
            <ul className="toc-list">
              {songAct2.map((s) => (
                <li key={s.id} className="toc-item">
                  <span className="toc-song-icon">♪</span>
                  <a href={`#${s.id}`} className="toc-link">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="toc-col">
          <span className="section-label">Scenes</span>
          <div className="toc-act-group">
            <p className="toc-act-title">Act I</p>
            <ul className="toc-list">
              {sceneAct1.map((s, i) => (
                <li key={s.id} className="toc-item">
                  <span className="toc-number">{String(i + 1).padStart(2, "0")}</span>
                  <a href={`#${s.id}`} className="toc-link">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="toc-act-group">
            <p className="toc-act-title">Act II</p>
            <ul className="toc-list">
              {sceneAct2.map((s, i) => (
                <li key={s.id} className="toc-item">
                  <span className="toc-number">{String(sceneAct1.length + i + 1).padStart(2, "0")}</span>
                  <a href={`#${s.id}`} className="toc-link">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
}
