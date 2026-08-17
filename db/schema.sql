create table blog_posts (
  id text primary key,
  slug text not null unique,
  title text not null,
  excerpt text not null,
  content text not null,
  cover_image text not null,
  author_name text not null,
  published_at timestamptz,
  status text not null default 'draft',
  featured boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table blog_post_seo (
  id text primary key,
  blog_post_id text not null unique references blog_posts(id) on delete cascade,
  meta_title text,
  meta_description text,
  keywords text[] not null default '{}'
);

create table blog_post_tags (
  id text primary key,
  blog_post_id text not null references blog_posts(id) on delete cascade,
  tag text not null,
  sort_order integer not null default 0
);

create table case_studies (
  id text primary key,
  slug text not null unique,
  title text not null,
  category text not null,
  summary text not null,
  hero_image text not null,
  published_at timestamptz,
  status text not null default 'draft',
  problem text not null,
  solution text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table case_study_seo (
  id text primary key,
  case_study_id text not null unique references case_studies(id) on delete cascade,
  meta_title text,
  meta_description text,
  keywords text[] not null default '{}'
);

create table case_study_outcomes (
  id text primary key,
  case_study_id text not null references case_studies(id) on delete cascade,
  content text not null,
  sort_order integer not null default 0
);

create table case_study_tech_stacks (
  id text primary key,
  case_study_id text not null references case_studies(id) on delete cascade,
  content text not null,
  sort_order integer not null default 0
);

create table services (
  id text primary key,
  category text not null,
  title text not null,
  description text not null,
  icon text not null,
  color text not null,
  sort_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table service_seo (
  id text primary key,
  service_id text not null unique references services(id) on delete cascade,
  keywords text[] not null default '{}'
);

create index idx_blog_posts_slug on blog_posts(slug);
create index idx_blog_posts_status_published_at on blog_posts(status, published_at desc);
create index idx_case_studies_slug on case_studies(slug);
create index idx_case_studies_status_published_at on case_studies(status, published_at desc);
create index idx_services_active_sort on services(is_active, sort_order);
