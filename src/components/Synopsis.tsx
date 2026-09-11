import { show } from "@/data/show";

export default function Synopsis() {
  const paragraphs = show.synopsis.split("\n\n");
  return (
    <section className="synopsis" aria-label="Synopsis">
      <span className="section-label">Synopsis</span>
      {paragraphs.map((p, i) => (
        <p key={i} className="synopsis-text">{p}</p>
      ))}
    </section>
  );
}
