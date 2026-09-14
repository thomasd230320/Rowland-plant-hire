const BASE = 'https://rowlandplant.co.uk'

export default function sitemap() {
  const now = new Date()
  const routes = [
    { url: '/',                changeFrequency: 'weekly',  priority: 1.0 },
    { url: '/tool-hire',       changeFrequency: 'weekly',  priority: 0.9 },
    { url: '/plant-hire',      changeFrequency: 'weekly',  priority: 0.9 },
    { url: '/gas-bottles',     changeFrequency: 'weekly',  priority: 0.9 },
    { url: '/about',           changeFrequency: 'monthly', priority: 0.7 },
    { url: '/faq',             changeFrequency: 'monthly', priority: 0.7 },
    { url: '/terms-conditions',changeFrequency: 'yearly',  priority: 0.3 },
    { url: '/tool-hire/concrete-breaking',                    changeFrequency: 'monthly', priority: 0.8 },
    { url: '/tool-hire/concrete-mixing-laying',               changeFrequency: 'monthly', priority: 0.8 },
    { url: '/tool-hire/masonry-and-tile-cutting',             changeFrequency: 'monthly', priority: 0.8 },
    { url: '/tool-hire/wood-metal-cutting',                   changeFrequency: 'monthly', priority: 0.8 },
    { url: '/tool-hire/diamond-core-drill-core-cutters',      changeFrequency: 'monthly', priority: 0.8 },
    { url: '/tool-hire/compacting-equipment',                 changeFrequency: 'monthly', priority: 0.8 },
    { url: '/tool-hire/drilling',                             changeFrequency: 'monthly', priority: 0.8 },
    { url: '/tool-hire/gardening-equipment',                  changeFrequency: 'monthly', priority: 0.8 },
    { url: '/tool-hire/access-scaffold-towers',               changeFrequency: 'monthly', priority: 0.8 },
    { url: '/tool-hire/access-scaffold-towers/single-width',  changeFrequency: 'monthly', priority: 0.6 },
    { url: '/tool-hire/access-scaffold-towers/double-width',  changeFrequency: 'monthly', priority: 0.6 },
    { url: '/tool-hire/acro-props-strongboys-trestles-scaffold', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/plant-hire/mini-excavators-diggers',             changeFrequency: 'monthly', priority: 0.8 },
    { url: '/plant-hire/skip-loaders-dumpers',                changeFrequency: 'monthly', priority: 0.8 },
  ]

  return routes.map(({ url, changeFrequency, priority }) => ({
    url: `${BASE}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))
}
