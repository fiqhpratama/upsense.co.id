# Blog Content Template

Use this structure for every CMS blog post.

1. `slug`: lowercase, hyphen-separated, SEO and Indonesia-location friendly where relevant.
2. `title`: one SEO-friendly main title and two alternatives for editorial selection.
3. `excerpt`: a two-to-three sentence opening hook.
4. `content`: HTML article using one H1 title, then H2/H3 sections covering definition, business value, components, risk analysis, best practices, conclusion, and a CTA to UPSENSE.
5. `seo.meta_title`: maximum 60 characters; record the character count in the editorial brief.
6. `seo.meta_description`: maximum 160 characters; record the character count in the editorial brief.
7. `seo.keywords`: primary keywords, secondary/long-tail keywords, and supporting Indonesia GEO keywords.
8. `tags`: comma-separated in the editorial brief, stored as an array in the API.

The frontend generates `BlogPosting` JSON-LD from `title`, `excerpt`, `cover_image`, `author_name`, `published_at`, `seo.keywords`, and `tags`.
