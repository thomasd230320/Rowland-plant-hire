-- Run this in the Supabase SQL editor (Dashboard → SQL editor → New query)

create table if not exists public.quote_requests (
  id              uuid        default gen_random_uuid() primary key,
  user_id         uuid        references auth.users(id) on delete cascade not null,
  items           jsonb       not null,
  days            integer     not null default 1,
  start_date      text,
  delivery_address text,
  total_estimate  numeric,
  created_at      timestamptz default now()
);

-- Row-level security: users can only see and insert their own quotes
alter table public.quote_requests enable row level security;

create policy "Users can view own quotes"
  on public.quote_requests for select
  using (auth.uid() = user_id);

create policy "Users can insert own quotes"
  on public.quote_requests for insert
  with check (auth.uid() = user_id);
