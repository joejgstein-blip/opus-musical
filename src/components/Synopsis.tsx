import { show } from "@/data/show";

export default function Synopsis() {
  return (
    <section className="synopsis" aria-label="Synopsis">
      <span className="section-label">Synopsis</span>
      <p className="synopsis-text">{show.synopsis}</p>
    </section>
  );
}
