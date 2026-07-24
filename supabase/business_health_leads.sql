create table if not exists public.business_health_leads (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  business_name text,
  contact_person text not null,
  email text,
  phone text not null,
  city text,
  industry text,
  score integer not null check (score >= 0 and score <= 100),
  answers_json jsonb not null
);

alter table public.business_health_leads
  alter column business_name drop not null,
  alter column email drop not null;

alter table public.business_health_leads enable row level security;

-- Server-side API route uses the service role key, so RLS policies are optional.
-- If you want client-side inserts later, create explicit insert policies.
