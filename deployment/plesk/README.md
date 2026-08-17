# Plesk Sitemap Package

## Files
- `sitemap.php` → dynamic sitemap generator from CMS API
- `.htaccess` → rewrites `/sitemap.xml` to `sitemap.php`
- `robots.txt` → robots file pointing to sitemap
- `cache/` → writable cache directory for generated sitemap XML

## Upload Steps
1. Upload `sitemap.php` to your web root.
2. Upload `.htaccess` to your web root.
3. Upload `robots.txt` to your web root.
4. Create or upload writable folder `cache/` beside `sitemap.php`.
5. Ensure PHP can write into `cache/`.

## Required URLs
Edit inside `sitemap.php` if needed:
- `$siteUrl = 'https://www.upsense.co.id';`
- `$cmsBaseUrl = 'https://cms.upsense.co.id';`

## Cache
- Cache file: `cache/sitemap.xml`
- Cache TTL: `600` seconds
- To force refresh, delete `cache/sitemap.xml`

## Recommended Permissions
- `cache/` directory: `755` or `775`
- files: `644`

## Notes
- This sitemap works well for static frontend deployments.
- Dynamic blog and case study slugs are fetched live from CMS.
- No Next.js rebuild is required when new slugs are added.
