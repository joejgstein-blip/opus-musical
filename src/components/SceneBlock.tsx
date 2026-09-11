import type { SceneSection } from "@/data/show";
import ReactionBar from "./ReactionBar";

interface Props {
  scene: SceneSection;
  index: number;
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

export default function SceneBlock({ scene, index }: Props) {
  const paragraphs = scene.body.split("\n\n").filter(Boolean);

  return (
    <div id={scene.id} className="section-wrapper">
      <div className="scene-block">
        <div className="scene-header">
          <span className="scene-number">{String(index).padStart(2, "0")}</span>
          <h2 className="scene-title">{scene.title}</h2>
        </div>
        <div className="scene-body">
          {paragraphs.map((p, i) => (
            <p key={i}>{renderParagraph(p)}</p>
          ))}
        </div>
      </div>
      <ReactionBar sectionId={scene.id} />
    </div>
  );
}
