import { show } from "@/data/show";
import Hero from "@/components/Hero";
import Synopsis from "@/components/Synopsis";
import TableOfContents from "@/components/TableOfContents";
import SceneBlock from "@/components/SceneBlock";
import SongBlock from "@/components/SongBlock";
import type { SceneSection, SongSection } from "@/data/show";

export default function Home() {
  const allSections = show.sections;
  const act1 = allSections.filter((s) => s.act === 1);
  const act2 = allSections.filter((s) => s.act === 2);
  const act2Info = show.acts.find((a) => a.number === 2)!;

  const nextIdMap = new Map(
    allSections.map((s, i) => [s.id, allSections[i + 1]?.id])
  );

  let sceneNum = 0;

  function renderSection(section: (typeof allSections)[number]) {
    const nextSectionId = nextIdMap.get(section.id);
    if (section.type === "scene") {
      sceneNum++;
      return (
        <SceneBlock
          key={section.id}
          scene={section as SceneSection}
          index={sceneNum}
          nextSectionId={nextSectionId}
        />
      );
    }
    return (
      <SongBlock
        key={section.id}
        song={section as SongSection}
        nextSectionId={nextSectionId}
      />
    );
  }

  return (
    <div className="page-wrapper">
      <main className="main-content">
        <Hero />
        <Synopsis />
        <TableOfContents />

        <div className="act-header">
          <span className="act-number">Act One</span>
          <h2 className="act-title">Act I</h2>
        </div>

        {act1.map(renderSection)}

        <div className="act-header">
          <span className="act-number">Act Two</span>
          <h2 className="act-title">Act II</h2>
          {act2Info.note && (
            <p className="act-note">{act2Info.note}</p>
          )}
        </div>

        {act2.map(renderSection)}

        <footer className="site-footer">
          <p className="site-footer-text">
            Thank you for reading. — Opus, a work in progress.
          </p>
        </footer>
      </main>
    </div>
  );
}
