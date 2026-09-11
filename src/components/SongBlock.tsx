"use client";
import { useState, useEffect } from "react";
import type { SongSection } from "@/data/show";
import LyricsPanel from "./LyricsPanel";
import ReactionBar from "./ReactionBar";

interface Props {
  song: SongSection;
  nextSectionId?: string;
}

function buildEmbedUrl(url: string) {
  const encoded = encodeURIComponent(url);
  return `https://w.soundcloud.com/player/?url=${encoded}&color=%23c8a96e&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false`;
}

export default function SongBlock({ song, nextSectionId }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      if ((e as CustomEvent).detail === song.id) setOpen(true);
    };
    window.addEventListener("opus:open-section", handler);
    return () => window.removeEventListener("opus:open-section", handler);
  }, [song.id]);

  function goNext() {
    if (!nextSectionId) return;
    const el = document.getElementById(nextSectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        window.dispatchEvent(
          new CustomEvent("opus:open-section", { detail: nextSectionId })
        );
      }, 450);
    }
  }

  return (
    <div id={song.id} className="section-wrapper">
      <div className="song-block">
        <h3 className="song-title-heading">
          <button
            className="song-toggle-btn"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
          >
            <span className="song-eyebrow">♪ Song</span>
            <span className="song-title">{song.title}</span>
            {song.lyricsWip && (
              <span className="song-wip-badge">Coming Soon</span>
            )}
            <span className={`collapse-chevron ${open ? "open" : ""}`} aria-hidden="true">›</span>
          </button>
        </h3>

        {open && (
          <div className="song-body fade-in">
            {song.lyrics && <LyricsPanel lyrics={song.lyrics} />}

            {song.soundcloudUrl ? (
              <div className="soundcloud-embed">
                <iframe
                  width="100%"
                  height="120"
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
