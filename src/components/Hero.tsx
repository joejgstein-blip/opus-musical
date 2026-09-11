"use client";

export default function Hero() {
  function startShow() {
    const el = document.getElementById("act1-prologue-scene");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        window.dispatchEvent(
          new CustomEvent("opus:open-section", { detail: "act1-prologue-scene" })
        );
      }, 450);
    }
  }

  return (
    <header className="hero">
      <p className="hero-eyebrow">A Musical in Two Acts</p>
      <h1 className="hero-title">Opus</h1>
      <div className="hero-rule" />
      <p className="hero-subtitle">Work in Progress — this show is actively being workshopped.</p>
      <p className="hero-tagline">Leave reactions and feedback — everything is completely anonymous.</p>
      <button className="start-show-btn" onClick={startShow}>
        Start the Show
      </button>
    </header>
  );
}
