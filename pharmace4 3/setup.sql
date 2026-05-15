-- Run this entire script in Supabase SQL Editor
-- Go to: SQL Editor (left sidebar) → New query → paste this → Run

-- 1. USER PROFILES TABLE
create table if not exists public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  full_name text,
  email text,
  exam_target text,
  role text default 'pending',  -- 'pending', 'approved', 'revoked', 'admin'
  created_at timestamp with time zone default now(),
  approved_at timestamp with time zone,
  approved_by uuid
);

-- 2. Enable Row Level Security
alter table public.profiles enable row level security;

-- 3. RLS Policies
-- Users can read their own profile
create policy "Users can read own profile"
  on public.profiles for select
  using (auth.uid() = id);

-- Users can update their own profile
create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Admin can read ALL profiles
create policy "Admin can read all profiles"
  on public.profiles for select
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- Admin can update ALL profiles
create policy "Admin can update all profiles"
  on public.profiles for update
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- 4. Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, email, exam_target, role)
  values (
    new.id,
    new.raw_user_meta_data->>'full_name',
    new.email,
    new.raw_user_meta_data->>'exam_target',
    'pending'
  );
  return new;
end;
$$ language plpgsql security definer;

-- 5. Trigger on new user
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- 6. Allow inserts from trigger
create policy "Allow trigger inserts"
  on public.profiles for insert
  with check (true);

-- DONE. Now manually set yourself as admin:
-- Replace the email below with YOUR email, then run this separately:
-- update public.profiles set role = 'admin' where email = 'YOUR_EMAIL_HERE';
