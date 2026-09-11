"use client";
import { useState, useEffect } from "react";
import type { SceneSection } from "@/data/show";
import ReactionBar from "./ReactionBar";

interface Props {
  scene: SceneSection;
  index: number;
  nextSectionId?: string;
}

function isSongCue(p: string): boolean {
  const t = p.trim();
  return t.length > 1 && t === t.toUpperCase() && /[A-Z]{2,}/.test(t) && t.length < 100;
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

export default function SceneBlock({ scene, index, nextSectionId }: Props) {
  const [open, setOpen] = useState(false);
  const paragraphs = scene.body.split("\n\n").filter(Boolean);

  useEffect(() => {
    const handler = (e: Event) => {
      if ((e as CustomEvent).detail === scene.id) setOpen(true);
    };
    window.addEventListener("opus:open-section", handler);
    return () => window.removeEventListener("opus:open-section", handler);
  }, [scene.id]);

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
