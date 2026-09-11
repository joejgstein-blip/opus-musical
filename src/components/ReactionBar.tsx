"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { getSessionId } from "@/lib/session";
import type { ReactionType } from "@/lib/supabase";
import CommentBox from "./CommentBox";

interface Props {
  sectionId: string;
}

export default function ReactionBar({ sectionId }: Props) {
  const [myReaction, setMyReaction] = useState<ReactionType | null>(null);
  const [commentOpen, setCommentOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const sessionId = getSessionId();
    supabase
      .from("reactions")
      .select("reaction_type")
      .eq("section_id", sectionId)
      .eq("session_id", sessionId)
      .maybeSingle()
      .then(({ data }) => {
        if (data) setMyReaction(data.reaction_type as ReactionType);
      });
  }, [sectionId]);

  const react = async (type: ReactionType) => {
    if (loading) return;
    setLoading(true);
    const sessionId = getSessionId();

    if (myReaction === type) {
      await supabase
        .from("reactions")
        .delete()
        .eq("section_id", sectionId)
        .eq("session_id", sessionId);
      setMyReaction(null);
    } else {
      await supabase.from("reactions").upsert(
        { section_id: sectionId, reaction_type: type, session_id: sessionId },
        { onConflict: "section_id,session_id" }
      );
      setMyReaction(type);
    }
    setLoading(false);
  };

  return (
    <div>
      <div className="reaction-bar">
        <span className="reaction-label">Reaction</span>

        <button
          className={`reaction-btn ${myReaction === "up" ? "active-up" : ""}`}
          onClick={() => react("up")}
          aria-label="Thumbs up"
          aria-pressed={myReaction === "up"}
        >
          👍
        </button>

        <button
          className={`reaction-btn ${myReaction === "down" ? "active-down" : ""}`}
          onClick={() => react("down")}
          aria-label="Thumbs down"
          aria-pressed={myReaction === "down"}
        >
          👎
        </button>

        <button
          className="comment-toggle"
          onClick={() => setCommentOpen(!commentOpen)}
        >
          {commentOpen ? "Cancel" : "Leave a note"}
        </button>
      </div>

      {commentOpen && (
        <CommentBox
          sectionId={sectionId}
          onSubmit={() => setCommentOpen(false)}
        />
      )}
    </div>
  );
}
