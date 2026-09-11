-- Run this in your Supabase project's SQL editor (supabase.com > your project > SQL Editor)

create table if not exists reactions (
  id uuid default gen_random_uuid() primary key,
  section_id text not null,
  reaction_type text not null check (reaction_type in ('up', 'down')),
  session_id text not null,
  created_at timestamptz default now(),
  unique (section_id, session_id)
);

create table if not exists comments (
  id uuid default gen_random_uuid() primary key,
  section_id text not null,
  body text not null,
  session_id text not null,
  created_at timestamptz default now()
);

alter table reactions enable row level security;
alter table comments enable row level security;

create policy "Public can manage reactions"
  on reactions for all using (true) with check (true);

create policy "Public can insert comments"
  on comments for insert with check (true);

create policy "Public can read comments"
  on comments for select using (true);

create policy "Public can read reactions"
  on reactions for select using (true);
