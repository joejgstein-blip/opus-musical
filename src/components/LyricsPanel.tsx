"use client";
import { useState } from "react";

interface Props {
  lyrics: string;
}

function formatLyrics(raw: string): React.ReactNode[] {
  const lines = raw.split("\n");
  return lines.map((line, i) => {
    const trimmed = line.trim();
    if (/^\[.+\]$/.test(trimmed)) {
      return (
        <span key={i} className="lyric-label">
          {trimmed.slice(1, -1)}
        </span>
      );
    }
    if (/^\*.*\*$/.test(trimmed)) {
      return (
        <span key={i} className="lyric-direction">
          {trimmed.replace(/^\*|\*$/g, "")}
          {"\n"}
        </span>
      );
    }
    return <span key={i}>{line}{"\n"}</span>;
  });
}

export default function LyricsPanel({ lyrics }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="lyrics-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className={`lyrics-toggle-icon ${open ? "open" : ""}`} aria-hidden="true">
          ▶
        </span>
        {open ? "Hide Lyrics" : "Show Lyrics"}
      </button>

      {open && (
        <div className="lyrics-panel fade-in">
          <div className="lyrics-text">{formatLyrics(lyrics)}</div>
        </div>
      )}
    </>
  );
}
