<?php

declare(strict_types=1);

$siteUrl = 'https://www.upsense.co.id';
$cmsBaseUrl = 'https://cms.upsense.co.id';
$cacheDir = __DIR__ . '/cache';
$cacheFile = $cacheDir . '/sitemap.xml';
$cacheTtlSeconds = 600;

$staticRoutes = [
    ['path' => '/', 'changefreq' => 'daily', 'priority' => '1.0'],
    ['path' => '/about/', 'changefreq' => 'monthly', 'priority' => '0.8'],
    ['path' => '/services/', 'changefreq' => 'weekly', 'priority' => '0.9'],
    ['path' => '/portfolio/', 'changefreq' => 'weekly', 'priority' => '0.9'],
    ['path' => '/blog/', 'changefreq' => 'daily', 'priority' => '0.9'],
    ['path' => '/contact/', 'changefreq' => 'monthly', 'priority' => '0.7'],
    ['path' => '/services/software-development/', 'changefreq' => 'monthly', 'priority' => '0.8'],
    ['path' => '/services/web-development/', 'changefreq' => 'monthly', 'priority' => '0.8'],
    ['path' => '/services/analytic-solutions/', 'changefreq' => 'monthly', 'priority' => '0.8'],
    ['path' => '/services/cloud-devops/', 'changefreq' => 'monthly', 'priority' => '0.8'],
    ['path' => '/services/product-design/', 'changefreq' => 'monthly', 'priority' => '0.8'],
    ['path' => '/services/app-design/', 'changefreq' => 'monthly', 'priority' => '0.8'],
];

function ensureCacheDirectory(string $cacheDir): void
{
    if (!is_dir($cacheDir)) {
        mkdir($cacheDir, 0755, true);
    }
}

function emitXmlResponse(string $xml): void
{
    header('Content-Type: application/xml; charset=UTF-8');
    header('X-Robots-Tag: noindex');
    echo $xml;
    exit;
}

function isFreshCache(string $cacheFile, int $ttl): bool
{
    return is_file($cacheFile) && (time() - filemtime($cacheFile) < $ttl);
}

function readCache(string $cacheFile): ?string
{
    $content = @file_get_contents($cacheFile);
    return $content === false ? null : $content;
}

function writeCache(string $cacheFile, string $content): void
{
    @file_put_contents($cacheFile, $content, LOCK_EX);
}

function fetchJson(string $url, int $timeoutSeconds = 15): ?array
{
    $context = stream_context_create([
        'http' => [
            'method' => 'GET',
            'header' => "Accept: application/json\r\nUser-Agent: UPSENSE-Sitemap/1.0\r\n",
            'timeout' => $timeoutSeconds,
            'ignore_errors' => true,
        ],
        'ssl' => [
            'verify_peer' => true,
            'verify_peer_name' => true,
        ],
    ]);

    $response = @file_get_contents($url, false, $context);
    if ($response === false) {
        return null;
    }

    if (isset($http_response_header[0]) && !preg_match('#\s200\s#', $http_response_header[0])) {
        return null;
    }

    $decoded = json_decode($response, true);
    return is_array($decoded) ? $decoded : null;
}

function isoDate(?string $date): string
{
    if (!$date) {
        return gmdate('c');
    }

    $timestamp = strtotime($date);
    return $timestamp ? gmdate('c', $timestamp) : gmdate('c');
}

function xmlEscape(string $value): string
{
    return htmlspecialchars($value, ENT_XML1 | ENT_QUOTES, 'UTF-8');
}

function normalizePath(string $path): string
{
    if ($path === '/') {
        return '/';
    }

    return rtrim($path, '/') . '/';
}

function appendUrl(array &$entries, string $loc, string $lastmod, string $changefreq, string $priority): void
{
    $entries[] = [
        'loc' => $loc,
        'lastmod' => $lastmod,
        'changefreq' => $changefreq,
        'priority' => $priority,
    ];
}

function buildSitemapXml(array $entries): string
{
    $xml = [];
    $xml[] = '<?xml version="1.0" encoding="UTF-8"?>';
    $xml[] = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

    foreach ($entries as $entry) {
        $xml[] = '  <url>';
        $xml[] = '    <loc>' . xmlEscape($entry['loc']) . '</loc>';
        $xml[] = '    <lastmod>' . xmlEscape($entry['lastmod']) . '</lastmod>';
        $xml[] = '    <changefreq>' . xmlEscape($entry['changefreq']) . '</changefreq>';
        $xml[] = '    <priority>' . xmlEscape($entry['priority']) . '</priority>';
        $xml[] = '  </url>';
    }

    $xml[] = '</urlset>';

    return implode("\n", $xml);
}

ensureCacheDirectory($cacheDir);

if (isFreshCache($cacheFile, $cacheTtlSeconds)) {
    $cached = readCache($cacheFile);
    if ($cached !== null) {
        emitXmlResponse($cached);
    }
}

$entries = [];
$nowIso = gmdate('c');

foreach ($staticRoutes as $route) {
    appendUrl(
        $entries,
        $siteUrl . normalizePath($route['path']),
        $nowIso,
        $route['changefreq'],
        $route['priority']
    );
}

$blogPayload = fetchJson($cmsBaseUrl . '/api/blog-posts');
if (!empty($blogPayload['data']) && is_array($blogPayload['data'])) {
    foreach ($blogPayload['data'] as $item) {
        if (empty($item['slug'])) {
            continue;
        }

        appendUrl(
            $entries,
            $siteUrl . '/blog/' . rawurlencode((string) $item['slug']) . '/',
            isoDate($item['updated_at'] ?? $item['published_at'] ?? null),
            'weekly',
            '0.8'
        );
    }
}

$caseStudyPayload = fetchJson($cmsBaseUrl . '/api/case-studies');
if (!empty($caseStudyPayload['data']) && is_array($caseStudyPayload['data'])) {
    foreach ($caseStudyPayload['data'] as $item) {
        if (empty($item['slug'])) {
            continue;
        }

        appendUrl(
            $entries,
            $siteUrl . '/post/' . rawurlencode((string) $item['slug']) . '/',
            isoDate($item['updated_at'] ?? $item['published_at'] ?? null),
            'monthly',
            '0.8'
        );
    }
}

$xml = buildSitemapXml($entries);
writeCache($cacheFile, $xml);
emitXmlResponse($xml);
