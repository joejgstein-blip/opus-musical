import { redirect } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import { show } from "@/data/show";

function getAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

interface ReactionRow {
  section_id: string;
  reaction_type: string;
}

interface CommentRow {
  id: string;
  section_id: string;
  body: string;
  created_at: string;
}

interface SectionFeedback {
  reactions: { up: number; down: number };
  comments: CommentRow[];
}

export default async function BackstagePage({
  searchParams,
}: {
  searchParams: Promise<{ key?: string }>;
}) {
  const params = await searchParams;
  const key = params.key ?? "";
  const backstageKey = process.env.BACKSTAGE_KEY ?? "opus-backstage";

  if (key !== backstageKey) {
    redirect("/");
  }

  const db = getAdminClient();

  const [{ data: reactions }, { data: comments }] = await Promise.all([
    db.from("reactions").select("section_id, reaction_type"),
    db.from("comments").select("id, section_id, body, created_at").order("created_at", { ascending: false }),
  ]);

  const bySection: Record<string, SectionFeedback> = {};
  for (const s of show.sections) {
    bySection[s.id] = { reactions: { up: 0, down: 0 }, comments: [] };
  }

  for (const r of (reactions as ReactionRow[]) ?? []) {
    if (bySection[r.section_id]) {
      if (r.reaction_type === "up") bySection[r.section_id].reactions.up++;
      else if (r.reaction_type === "down") bySection[r.section_id].reactions.down++;
    }
  }

  for (const c of (comments as CommentRow[]) ?? []) {
    if (bySection[c.section_id]) {
      bySection[c.section_id].comments.push(c);
    }
  }

  const totalUp = Object.values(bySection).reduce((a, b) => a + b.reactions.up, 0);
  const totalDown = Object.values(bySection).reduce((a, b) => a + b.reactions.down, 0);
  const totalComments = Object.values(bySection).reduce((a, b) => a + b.comments.length, 0);

  return (
    <div className="backstage">
      <div className="backstage-header">
        <h1 className="backstage-title">Backstage — Opus</h1>
        <p className="backstage-subtitle">
          {totalUp} thumbs up &middot; {totalDown} thumbs down &middot; {totalComments} notes
        </p>
      </div>

      {show.sections.map((section) => {
        const feedback = bySection[section.id];
        return (
          <div key={section.id} className="backstage-section">
            <h2 className="backstage-section-title">
              <span style={{ fontSize: "0.7rem", color: "var(--gold-dim)", letterSpacing: "0.15em", fontFamily: "Lato, sans-serif", textTransform: "uppercase" }}>
                {section.type === "song" ? "♪ Song" : "Scene"} &middot; Act {section.act}
              </span>
              {section.title}
            </h2>

            <div className="backstage-reactions">
              <span className="backstage-reaction-count">👍 {feedback.reactions.up}</span>
              <span className="backstage-reaction-count">👎 {feedback.reactions.down}</span>
            </div>

            {feedback.comments.length > 0 ? (
              <div className="backstage-comments">
                {feedback.comments.map((c) => (
                  <div key={c.id} className="backstage-comment">
                    <p>{c.body}</p>
                    <p className="backstage-comment-meta">
                      {new Date(c.created_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="backstage-empty">No notes yet.</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
