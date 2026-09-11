import { createClient } from "@supabase/supabase-js";

function validUrl(s: string | undefined): boolean {
  try { new URL(s ?? ""); return true; } catch { return false; }
}

// Fallback so `next build` works before Supabase is configured.
// At runtime (Vercel / local dev) the real env vars must be set.
const supabaseUrl = validUrl(process.env.NEXT_PUBLIC_SUPABASE_URL)
  ? process.env.NEXT_PUBLIC_SUPABASE_URL!
  : "https://placeholder.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type ReactionType = "up" | "down";

export interface Reaction {
  id: string;
  section_id: string;
  reaction_type: ReactionType;
  session_id: string;
  created_at: string;
}

export interface Comment {
  id: string;
  section_id: string;
  body: string;
  session_id: string;
  created_at: string;
}
