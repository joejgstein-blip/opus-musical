"use client";
import { useState, useEffect } from "react";
import { show } from "@/data/show";

const ALBUM_URL =
  "https://soundcloud.com/user-885999480/sets/musical_demo/s-YmPI8omDIvl?si=86d7c0d246f44a538c3a5ee689cad777&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing";

export default function SideNav() {
  const [activeId, setActiveId] = useState<string>("");

  const songs = show.sections.filter((s) => s.type === "song");
  const scenes = show.sections.filter((s) => s.type === "scene");

  // Map each song to its parent scene (the scene immediately before it)
  const songToScene = new Map<string, string>();
  const sceneToSong = new Map<string, string>();
  const all = show.sections;
  for (let i = 0; i < all.length; i++) {
    if (all[i].type === "song" && i > 0 && all[i - 1].type === "scene") {
      songToScene.set(all[i].id, all[i - 1].id);
      sceneToSong.set(all[i - 1].id, all[i].id);
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Use the last intersecting entry (lowest on page = most "current")
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[visible.length - 1].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    show.sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  function navigateTo(id: string) {
    // For songs embedded in scenes, scroll to the parent scene first
    const sceneId = songToScene.get(id);
    const scrollTarget = sceneId ?? id;
    const el = document.getElementById(scrollTarget);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("opus:open-section", { detail: id }));
      }, 450);
    }
  }

  function isSongActive(songId: string) {
    if (activeId === songId) return true;
    const parent = songToScene.get(songId);
    return !!parent && activeId === parent;
  }

  function isSceneActive(sceneId: string) {
    if (activeId === sceneId) return true;
    const linked = sceneToSong.get(sceneId);
    return !!linked && activeId === linked;
  }

  return (
    <nav className="side-nav" aria-label="Section navigation">
      <div className="side-nav-group">
        <span className="side-nav-heading">Songs</span>
        <a
          href={ALBUM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="side-nav-album-link"
        >
          ♪ Full album ↗
        </a>
        <div className="side-nav-track">
          {songs.map((song) => (
            <button
              key={song.id}
              className={`side-nav-item ${isSongActive(song.id) ? "active" : ""}`}
              onClick={() => navigateTo(song.id)}
              title={song.title}
            >
              <span className="side-nav-dot" aria-hidden="true" />
              <span className="side-nav-item-label">{song.title}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="side-nav-group">
        <span className="side-nav-heading">Scenes</span>
        <div className="side-nav-track">
          {scenes.map((scene, i) => (
            <button
              key={scene.id}
              className={`side-nav-item ${isSceneActive(scene.id) ? "active" : ""}`}
              onClick={() => navigateTo(scene.id)}
              title={scene.title}
            >
              <span className="side-nav-dot" aria-hidden="true" />
              <span className="side-nav-item-label">
                <span className="side-nav-num">{String(i + 1).padStart(2, "0")} </span>
                {scene.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
