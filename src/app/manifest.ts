import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'UPSENSE',
    short_name: 'UPSENSE',
    description: 'UPSENSE delivers IT consulting, software development, digital transformation, and enterprise technology solutions for modern businesses.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#013e78',
    icons: [
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '48x48',
        type: 'image/x-icon',
      },
    ],
  }
}
