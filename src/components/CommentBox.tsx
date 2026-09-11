"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { getSessionId } from "@/lib/session";

interface Props {
  sectionId: string;
  onSubmit: () => void;
}

export default function CommentBox({ sectionId, onSubmit }: Props) {
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const submit = async () => {
    if (!text.trim() || submitting) return;
    setSubmitting(true);
    const sessionId = getSessionId();
    await supabase
      .from("comments")
      .insert({ section_id: sectionId, body: text.trim(), session_id: sessionId });
    setSubmitted(true);
    setTimeout(onSubmit, 1800);
  };

  if (submitted) {
    return (
      <div className="comment-box fade-in">
        <p className="comment-success">Thank you — noted.</p>
      </div>
    );
  }

  return (
    <div className="comment-box fade-in">
      <textarea
        className="comment-textarea"
        placeholder="What's on your mind? Anything goes — honest reactions welcome."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
        maxLength={1000}
      />
      <div className="comment-actions">
        <span className="comment-hint">Anonymous · only visible to the creator</span>
        <button
          className="comment-submit"
          onClick={submit}
          disabled={!text.trim() || submitting}
        >
          Send
        </button>
      </div>
    </div>
  );
}
