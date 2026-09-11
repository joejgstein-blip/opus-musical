"use client";
import { useState, useEffect } from "react";
import type { SceneSection, SongSection } from "@/data/show";
import LyricsPanel from "./LyricsPanel";
import ReactionBar from "./ReactionBar";

interface Props {
  scene: SceneSection;
  song?: SongSection;
  index: number;
  nextSectionId?: string;
}

function buildEmbedUrl(url: string) {
  // Private SC tracks share as /s-TOKEN paths; the player needs ?secret_token=s-TOKEN
  const m = url.match(/^(https:\/\/soundcloud\.com\/[^?]+?)\/s-([A-Za-z0-9]+)/);
  const trackUrl = m ? `${m[1]}?secret_token=s-${m[2]}` : url;
  const encoded = encodeURIComponent(trackUrl);
  return `https://w.soundcloud.com/player/?url=${encoded}&color=%23c8a96e&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false`;
}

function isSongCue(p: string): boolean {
  const t = p.trim();
  if (t.length < 2 || t.length > 120) return false;
  // Strip any trailing parenthetical like "(First Verse and Chorus)" before checking case
  const withoutParen = t.replace(/\s*\([^)]*\)\s*$/, "").trim();
  return withoutParen.length > 1 && withoutParen === withoutParen.toUpperCase() && /[A-Z]{2,}/.test(withoutParen);
}

function renderParagraph(text: string): React.ReactNode[] {
  const parts = text.split(/(\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return <span key={i}>{part}</span>;
  });
}

export default function SceneBlock({ scene, song, index, nextSectionId }: Props) {
  const [open, setOpen] = useState(false);
  const paragraphs = scene.body.split("\n\n").filter(Boolean);

  // Auto-open if the URL hash targets this scene or its embedded song
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash === scene.id || (song && hash === song.id)) {
      setOpen(true);
    }
  }, [scene.id, song]);

  // Open when navigated to via the "Continue →" button
  useEffect(() => {
    const handler = (e: Event) => {
      const target = (e as CustomEvent<string>).detail;
      if (target === scene.id || (song && target === song.id)) setOpen(true);
    };
    window.addEventListener("opus:open-section", handler);
    return () => window.removeEventListener("opus:open-section", handler);
  }, [scene.id, song]);

  function goNext() {
    if (!nextSectionId) return;
    const el = document.getElementById(nextSectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("opus:open-section", { detail: nextSectionId }));
      }, 450);
    }
  }

  return (
    <div id={scene.id} className="section-wrapper">
      <div className="scene-block">
        <h2 className="scene-title-heading">
          <button
            className="scene-toggle-btn"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
          >
            <span className="scene-number">{String(index).padStart(2, "0")}</span>
            <span className="scene-title">{scene.title}</span>
            {song && <span className="scene-song-hint">♪ {song.title}</span>}
            <span className={`collapse-chevron ${open ? "open" : ""}`} aria-hidden="true">›</span>
          </button>
        </h2>

        {open && (
          <div className="scene-body fade-in">
            {paragraphs.map((p, i) =>
              isSongCue(p) ? (
                <p key={i} className="scene-song-cue">{p.trim()}</p>
              ) : (
                <p key={i}>{renderParagraph(p)}</p>
              )
            )}

            {song && (
              <div id={song.id} className="embedded-song">
                <div className="embedded-song-header">
                  <span className="song-eyebrow">♪ Song</span>
                  <span className="embedded-song-title">{song.title}</span>
                  {song.lyricsWip && (
                    <span className="song-wip-badge">Coming Soon</span>
                  )}
                </div>

                {song.lyrics && <LyricsPanel lyrics={song.lyrics} />}

                {song.soundcloudUrl ? (
                  <div className="soundcloud-embed">
                    <iframe
                      width="100%"
                      height="166"
                      allow="autoplay"
                      src={buildEmbedUrl(song.soundcloudUrl)}
                      title={`${song.title} — audio player`}
                    />
                  </div>
                ) : (
                  <div className="soundcloud-placeholder">
                    Recording coming soon
                  </div>
                )}

                <ReactionBar sectionId={song.id} />
              </div>
            )}

            <ReactionBar sectionId={scene.id} />

            {nextSectionId && (
              <div className="next-section-row">
                <button className="next-section-btn" onClick={goNext}>
                  Continue →
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
