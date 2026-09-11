import { show } from "@/data/show";
import Hero from "@/components/Hero";
import Synopsis from "@/components/Synopsis";
import SceneBlock from "@/components/SceneBlock";
import SongBlock from "@/components/SongBlock";
import SideNav from "@/components/SideNav";
import type { SceneSection, SongSection } from "@/data/show";

type Group =
  | { kind: "pair"; scene: SceneSection; song: SongSection }
  | { kind: "scene-only"; scene: SceneSection }
  | { kind: "song-only"; song: SongSection };

function groupId(g: Group) {
  return g.kind === "song-only" ? g.song.id : g.scene.id;
}

function groupAct(g: Group) {
  return g.kind === "song-only" ? g.song.act : g.scene.act;
}

export default function Home() {
  const allSections = show.sections;

  // Pair each scene with the song that immediately follows it
  const groups: Group[] = [];
  let i = 0;
  while (i < allSections.length) {
    const curr = allSections[i];
    const next = allSections[i + 1];
    if (curr.type === "scene" && next?.type === "song") {
      groups.push({ kind: "pair", scene: curr as SceneSection, song: next as SongSection });
      i += 2;
    } else if (curr.type === "scene") {
      groups.push({ kind: "scene-only", scene: curr as SceneSection });
      i++;
    } else {
      groups.push({ kind: "song-only", song: curr as SongSection });
      i++;
    }
  }

  const act1Groups = groups.filter((g) => groupAct(g) === 1);
  const act2Groups = groups.filter((g) => groupAct(g) === 2);
  const act2Info = show.acts.find((a) => a.number === 2)!;

  let sceneNum = 0;

  function renderGroup(group: Group, gi: number, contextGroups: Group[], spillGroups?: Group[]) {
    const nextGroup = contextGroups[gi + 1] ?? spillGroups?.[0];
    const nextSectionId = nextGroup ? groupId(nextGroup) : undefined;

    if (group.kind === "pair") {
      sceneNum++;
      return (
        <SceneBlock
          key={group.scene.id}
          scene={group.scene}
          song={group.song}
          index={sceneNum}
          nextSectionId={nextSectionId}
        />
      );
    }
    if (group.kind === "scene-only") {
      sceneNum++;
      return (
        <SceneBlock
          key={group.scene.id}
          scene={group.scene}
          index={sceneNum}
          nextSectionId={nextSectionId}
        />
      );
    }
    return (
      <SongBlock
        key={group.song.id}
        song={group.song}
        nextSectionId={nextSectionId}
      />
    );
  }

  return (
    <div className="page-wrapper">
      <SideNav />
      <main className="main-content">
        <Hero />
        <Synopsis />

        <div className="act-header">
          <span className="act-number">Act One</span>
          <h2 className="act-title">Act I</h2>
        </div>

        {act1Groups.map((group, gi) =>
          renderGroup(group, gi, act1Groups, act2Groups)
        )}

        <div className="act-header">
          <span className="act-number">Act Two</span>
          <h2 className="act-title">Act II</h2>
          {act2Info.note && <p className="act-note">{act2Info.note}</p>}
        </div>

        {act2Groups.map((group, gi) =>
          renderGroup(group, gi, act2Groups)
        )}

        <footer className="site-footer">
          <p className="site-footer-text">
            Thank you for reading. — Opus, a work in progress.
          </p>
        </footer>
      </main>
    </div>
  );
}
