# Content API Contract

## Response envelope

```json
{
  "success": true,
  "message": "OK",
  "data": [],
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 0,
    "total_pages": 0
  }
}
```

## Endpoints

### `GET /api/blog-posts`

```json
{
  "success": true,
  "message": "Blog posts fetched successfully",
  "data": [
    {
      "id": "blog_001",
      "slug": "software-bill-of-material-aluminium-industry",
      "title": "Software Bill of Materials untuk Industri Aluminium",
      "excerpt": "Pelajari bagaimana sistem Software Bill of Materials membantu produsen aluminium...",
      "content": "<p>full html or markdown content</p>",
      "cover_image": "https://example.com/image.jpg",
      "author_name": "UPSENSE Editorial Team",
      "published_at": "2026-03-13T00:00:00.000Z",
      "status": "published",
      "featured": true,
      "seo": {
        "meta_title": "Software Bill of Materials untuk Industri Aluminium",
        "meta_description": "Pelajari bagaimana sistem Software Bill of Materials membantu produsen aluminium...",
        "keywords": ["software bill of materials", "manufacturing erp"]
      },
      "tags": ["ERP", "Manufacturing", "BOM"],
      "created_at": "2026-03-13T00:00:00.000Z",
      "updated_at": "2026-03-13T00:00:00.000Z"
    }
  ],
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 1,
    "total_pages": 1
  }
}
```

### `GET /api/blog-posts/:slug`

```json
{
  "success": true,
  "message": "Blog post fetched successfully",
  "data": {
    "id": "blog_001",
    "slug": "software-bill-of-material-aluminium-industry",
    "title": "Software Bill of Materials untuk Industri Aluminium",
    "excerpt": "Pelajari bagaimana sistem Software Bill of Materials membantu produsen aluminium...",
    "content": "<p>full html or markdown content</p>",
    "cover_image": "https://example.com/image.jpg",
    "author_name": "UPSENSE Editorial Team",
    "published_at": "2026-03-13T00:00:00.000Z",
    "status": "published",
    "featured": true,
    "seo": {
      "meta_title": "Software Bill of Materials untuk Industri Aluminium",
      "meta_description": "Pelajari bagaimana sistem Software Bill of Materials membantu produsen aluminium...",
      "keywords": ["software bill of materials", "manufacturing erp"]
    },
    "tags": ["ERP", "Manufacturing", "BOM"],
    "created_at": "2026-03-13T00:00:00.000Z",
    "updated_at": "2026-03-13T00:00:00.000Z"
  }
}
```

### `GET /api/case-studies`

```json
{
  "success": true,
  "message": "Case studies fetched successfully",
  "data": [
    {
      "id": "case_001",
      "slug": "document-management-system",
      "title": "Document Management System",
      "category": "Enterprise Document Case Study",
      "summary": "Centralized document management platform...",
      "hero_image": "https://example.com/hero.jpg",
      "published_at": "2026-03-16T00:00:00.000Z",
      "status": "published",
      "problem": "Business teams faced scattered files...",
      "solution": "UPSENSE built a document management system...",
      "outcomes": [
        "Faster document retrieval across departments and teams."
      ],
      "tech_stack": [
        "Secure Web Application"
      ],
      "seo": {
        "meta_title": "Document Management System",
        "meta_description": "Centralized document management platform...",
        "keywords": ["document management system", "enterprise software"]
      },
      "created_at": "2026-03-16T00:00:00.000Z",
      "updated_at": "2026-03-16T00:00:00.000Z"
    }
  ],
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 1,
    "total_pages": 1
  }
}
```

### `GET /api/case-studies/:slug`

```json
{
  "success": true,
  "message": "Case study fetched successfully",
  "data": {
    "id": "case_001",
    "slug": "document-management-system",
    "title": "Document Management System",
    "category": "Enterprise Document Case Study",
    "summary": "Centralized document management platform...",
    "hero_image": "https://example.com/hero.jpg",
    "published_at": "2026-03-16T00:00:00.000Z",
    "status": "published",
    "problem": "Business teams faced scattered files...",
    "solution": "UPSENSE built a document management system...",
    "outcomes": ["Faster document retrieval across departments and teams."],
    "tech_stack": ["Secure Web Application"],
    "seo": {
      "meta_title": "Document Management System",
      "meta_description": "Centralized document management platform...",
      "keywords": ["document management system", "enterprise software"]
    },
    "created_at": "2026-03-16T00:00:00.000Z",
    "updated_at": "2026-03-16T00:00:00.000Z"
  }
}
```

### `GET /api/services`

```json
{
  "success": true,
  "message": "Services fetched successfully",
  "data": [
    {
      "id": "service_001",
      "category": "STRATEGY",
      "title": "Digital Transformation",
      "description": "Orchestrating the seamless convergence of disparate systems...",
      "icon": "sparkles",
      "color": "bg-[#e8f0fa]",
      "sort_order": 1,
      "is_active": true,
      "seo": {
        "keywords": ["digital transformation", "it consulting", "business automation"]
      },
      "created_at": "2026-03-13T00:00:00.000Z",
      "updated_at": "2026-03-13T00:00:00.000Z"
    }
  ],
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 1,
    "total_pages": 1
  }
}
```

## Frontend mapping

- API payload uses `snake_case`
- Frontend app model uses `camelCase`
- Mapping should happen inside `content-api.ts`
