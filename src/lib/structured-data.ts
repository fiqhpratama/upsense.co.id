export type JsonLd = Record<string, unknown>;

const DKI_JAKARTA: JsonLd = { '@type': 'AdministrativeArea', name: 'DKI Jakarta' };
const JAWA_BARAT: JsonLd = { '@type': 'AdministrativeArea', name: 'Jawa Barat' };
const BANTEN: JsonLd = { '@type': 'AdministrativeArea', name: 'Banten' };

export const UPSENSE_SERVICE_AREAS: JsonLd[] = [
  ...['Jakarta Pusat', 'Jakarta Utara', 'Jakarta Barat', 'Jakarta Selatan', 'Jakarta Timur'].map((name) => ({
    '@type': 'AdministrativeArea',
    name,
    containedInPlace: DKI_JAKARTA,
  })),
  { '@type': 'City', name: 'Kota Bogor', containedInPlace: JAWA_BARAT },
  { '@type': 'AdministrativeArea', name: 'Kabupaten Bogor', containedInPlace: JAWA_BARAT },
  { '@type': 'City', name: 'Kota Depok', containedInPlace: JAWA_BARAT },
  { '@type': 'City', name: 'Kota Tangerang', containedInPlace: BANTEN },
  { '@type': 'City', name: 'Kota Tangerang Selatan', containedInPlace: BANTEN },
  { '@type': 'AdministrativeArea', name: 'Kabupaten Tangerang', containedInPlace: BANTEN },
  { '@type': 'City', name: 'Kota Bekasi', containedInPlace: JAWA_BARAT },
  { '@type': 'AdministrativeArea', name: 'Kabupaten Bekasi', containedInPlace: JAWA_BARAT },
  {
    '@type': 'Place',
    name: 'Cikarang',
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: 'Kabupaten Bekasi',
      containedInPlace: JAWA_BARAT,
    },
  },
  { '@type': 'AdministrativeArea', name: 'Jabodetabek' },
  { '@type': 'Country', name: 'Indonesia' },
];

export type ServiceJsonLdProps = {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  category?: string;
};

export function renderJsonLd(schema: JsonLd | JsonLd[]) {
  return {
    __html: JSON.stringify(schema),
  };
}

export function buildServiceJsonLd({
  name,
  description,
  url,
  serviceType = name,
  category = 'Software Development & Technology Services',
}: ServiceJsonLdProps): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    description,
    url,
    serviceType,
    category,
    provider: {
      '@type': 'Organization',
      '@id': 'https://upsense.co.id/#organization',
      name: 'UPSENSE',
      url: 'https://upsense.co.id',
    },
    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'Businesses and Enterprises',
    },
    areaServed: UPSENSE_SERVICE_AREAS,
  };
}

export function buildBlogJsonLd({
  name,
  description,
  posts,
}: {
  name: string;
  description: string;
  posts: Array<{
    slug: string;
    title: string;
    description: string;
    image: string;
    post_date: string;
    post_by: string;
  }>;
}): JsonLd[] {
  const blogUrl = 'https://upsense.co.id/blog';

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name,
      description,
      url: blogUrl,
      publisher: {
        '@type': 'Organization',
        '@id': 'https://upsense.co.id/#organization',
        name: 'UPSENSE',
      },
    },
    ...posts.map((post) => ({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      datePublished: post.post_date,
      dateModified: post.post_date,
      author: {
        '@type': 'Organization',
        name: post.post_by,
      },
      publisher: {
        '@type': 'Organization',
        name: 'UPSENSE',
      },
      image: [post.image],
      mainEntityOfPage: `${blogUrl}#${post.slug}`,
      url: `https://upsense.co.id/post/${post.slug}`,
    })),
  ];
}
