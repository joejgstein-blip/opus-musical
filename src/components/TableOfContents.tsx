"use client";
import { useState } from "react";
import { show } from "@/data/show";

const ALBUM_URL =
  "https://soundcloud.com/user-885999480/sets/musical_demo/s-YmPI8omDIvl?si=86d7c0d246f44a538c3a5ee689cad777&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing";

function navigate(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent("opus:open-section", { detail: id }));
    }, 450);
  }
}

export default function TableOfContents() {
  const [songsOpen, setSongsOpen] = useState(false);
  const [scenesOpen, setScenesOpen] = useState(false);

  const songs = show.sections.filter((s) => s.type === "song");
  const scenes = show.sections.filter((s) => s.type === "scene");

  // For songs embedded in scenes, clicking a song link should open the parent scene
  const songToScene = new Map<string, string>();
  const all = show.sections;
  for (let i = 0; i < all.length; i++) {
    if (all[i].type === "song" && i > 0 && all[i - 1].type === "scene") {
      songToScene.set(all[i].id, all[i - 1].id);
    }
  }

  function navigateSong(songId: string) {
    const sceneId = songToScene.get(songId);
    const scrollTarget = sceneId ?? songId;
    const el = document.getElementById(scrollTarget);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("opus:open-section", { detail: songId }));
      }, 450);
    }
  }

  return (
    <div className="toc">
      {/* Songs */}
      <div className="toc-group">
        <button
          className="toc-group-header"
          onClick={() => setSongsOpen(!songsOpen)}
          aria-expanded={songsOpen}
        >
          <span className="section-label" style={{ marginBottom: 0 }}>Songs</span>
          <span className={`collapse-chevron ${songsOpen ? "open" : ""}`} aria-hidden="true">›</span>
        </button>

        {songsOpen && (
          <div className="toc-group-body fade-in">
            <a
              href={ALBUM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="toc-album-link"
            >
              ♪ Listen to the full album on SoundCloud ↗
            </a>
            <ul className="toc-list">
              {songs.map((s) => (
                <li key={s.id} className="toc-item">
                  <span className="toc-song-icon">♪</span>
                  <button className="toc-link-btn" onClick={() => navigateSong(s.id)}>
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Scenes */}
      <div className="toc-group">
        <button
          className="toc-group-header"
          onClick={() => setScenesOpen(!scenesOpen)}
          aria-expanded={scenesOpen}
        >
          <span className="section-label" style={{ marginBottom: 0 }}>Scenes</span>
          <span className={`collapse-chevron ${scenesOpen ? "open" : ""}`} aria-hidden="true">›</span>
        </button>

        {scenesOpen && (
          <div className="toc-group-body fade-in">
            <ul className="toc-list">
              {scenes.map((s, i) => (
                <li key={s.id} className="toc-item">
                  <span className="toc-number">{String(i + 1).padStart(2, "0")}</span>
                  <button className="toc-link-btn" onClick={() => navigate(s.id)}>
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
