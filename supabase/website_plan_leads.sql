create table if not exists public.website_plan_leads (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  business_name text,
  contact_person text not null,
  email text,
  phone text,
  business_type text,
  website text,
  current_website text,
  business_address text,
  preferred_plan text,
  domain_ownership text,
  timeline text,
  budget text,
  project_details text,
  source text not null default 'website-plans'
);

alter table public.website_plan_leads enable row level security;
