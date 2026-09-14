// A preview deployment must never be indexed — two copies of the same shop in
// Google would compete with the real site. Set NEXT_PUBLIC_SITE_NOINDEX=true on
// any non-production deploy.
const NOINDEX = process.env.NEXT_PUBLIC_SITE_NOINDEX === 'true'

export default function robots() {
  if (NOINDEX) {
    return { rules: { userAgent: '*', disallow: '/' } }
  }
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://rowlandplant.co.uk/sitemap.xml',
  }
}
