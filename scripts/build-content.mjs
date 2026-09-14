// Compiles the YAML in /content into src/data/toolHireData.js.
//
// Why generate a file instead of reading YAML at runtime? The product data is
// imported by SearchOverlay, a client component, so it has to be plain JS that
// webpack can bundle for the browser — it cannot touch the filesystem.
//
// Runs automatically via the "prebuild" and "predev" npm scripts.
import fs from 'node:fs'
import path from 'node:path'
import { createReader } from '@keystatic/core/reader'
import config from '../keystatic.config.js'

const ROOT = process.cwd()
const OUT = path.join(ROOT, 'src/data/toolHireData.js')

const reader = createReader(ROOT, config)

/** Keystatic may store an image as a bare filename or a full public path. */
function normaliseImage(value) {
  if (!value) return ''
  const v = String(value)
  return v.startsWith('/') ? v : `/images/${v.replace(/^\/*/, '')}`
}

/** All four rates blank means "price on enquiry" — the UI expects null. */
function normalisePricing(p) {
  if (!p) return null
  const out = {
    day1: p.day1 || '',
    extraDay: p.extraDay || '',
    week: p.week || '',
    weekend: p.weekend || '',
  }
  return Object.values(out).some(Boolean) ? out : null
}

const entries = await reader.collections.toolCategories.all()

if (entries.length === 0) {
  throw new Error('No categories found in content/tool-hire — refusing to generate an empty data file.')
}

// Keep a stable order so the generated file does not churn between builds.
entries.sort((a, b) => a.slug.localeCompare(b.slug))

let productCount = 0

const categories = entries.map(({ slug, entry }) => {
  const products = entry.products.map(p => {
    productCount++
    const rows = (p.pricingRows ?? []).map(r => ({
      size: r.size,
      ...normalisePricing(r),
    }))
    const image = normaliseImage(p.image)
    const product = {
      id: p.advanced.id,
      title: p.title,
      ...(image ? { image } : {}),
      specs: [...(p.specs ?? [])],
      pricing: normalisePricing(p.pricing),
    }
    if (rows.length) product.pricingRows = rows
    return product
  })

  return {
    id: entry.advanced.id,
    slug,
    label: entry.label,
    icon: entry.icon,
    ...(normaliseImage(entry.image) ? { image: normaliseImage(entry.image) } : {}),
    ...(entry.categoryNote ? { categoryNote: entry.categoryNote } : {}),
    intro: entry.intro || '',
    seo: { title: entry.seo?.title || '', description: entry.seo?.description || '' },
    products,
  }
})

// Every product id must be unique — availability data is keyed on it.
const ids = categories.flatMap(c => c.products.map(p => p.id))
const dupes = ids.filter((id, i) => ids.indexOf(id) !== i)
if (dupes.length) {
  throw new Error(`Duplicate product ids found: ${[...new Set(dupes)].join(', ')}`)
}
const missing = categories.flatMap(c =>
  c.products.filter(p => !p.id).map(p => `${c.slug}: "${p.title}"`),
)
if (missing.length) {
  throw new Error(
    `These products have no internal reference set:\n  ${missing.join('\n  ')}\n` +
      'Open them at /keystatic and fill in "Advanced — leave this alone".',
  )
}

const banner = `// AUTO-GENERATED — DO NOT EDIT BY HAND.
// Source of truth is the YAML in /content/tool-hire, edited at /keystatic.
// Regenerate with: npm run build:content
`

fs.writeFileSync(
  OUT,
  `${banner}\nexport const TOOL_HIRE_CATEGORIES = ${JSON.stringify(categories, null, 2)}\n`,
  'utf8',
)

// --- Gas bottles ------------------------------------------------------------

const gasEntries = await reader.collections.gasCategories.all()
gasEntries.sort((a, b) => (a.entry.order ?? 99) - (b.entry.order ?? 99))

let bottleCount = 0

const gasCategories = gasEntries.map(({ slug, entry }) => ({
  slug,
  label: entry.label,
  icon: entry.icon,
  intro: entry.intro || '',
  pricingNote: entry.pricingNote || '',
  seo: { title: entry.seo?.title || '', description: entry.seo?.description || '' },
  products: entry.products.map(p => {
    bottleCount++
    const image = normaliseImage(p.image)
    return {
      id: p.advanced.id,
      title: p.title,
      size: p.size || '',
      ...(image ? { image } : {}),
      specs: [...(p.specs ?? [])],
      refillPrice: p.refillPrice || '',
      deposit: p.deposit || '',
      hirePrice: p.hirePrice || '',
    }
  }),
}))

const gasIds = gasCategories.flatMap(c => c.products.map(p => p.id))
const gasDupes = gasIds.filter((id, i) => gasIds.indexOf(id) !== i)
if (gasDupes.length) {
  throw new Error(`Duplicate gas bottle ids found: ${[...new Set(gasDupes)].join(', ')}`)
}
const gasMissing = gasCategories.flatMap(c =>
  c.products.filter(p => !p.id).map(p => `${c.slug}: "${p.title}"`),
)
if (gasMissing.length) {
  throw new Error(
    `These gas bottles have no internal reference set:\n  ${gasMissing.join('\n  ')}\n` +
      'Open them at /keystatic and fill in "Advanced — leave this alone".',
  )
}

fs.writeFileSync(
  path.join(ROOT, 'src/data/gasData.js'),
  `${banner}\nexport const GAS_CATEGORIES = ${JSON.stringify(gasCategories, null, 2)}\n`,
  'utf8',
)

// Company details singleton -> its own module.
const company = await reader.singletons.companyDetails.read()
if (company) {
  fs.writeFileSync(
    path.join(ROOT, 'src/data/companyDetails.js'),
    `${banner}\nexport const COMPANY = ${JSON.stringify(
      {
        phone: company.phone,
        phoneLink: company.phoneLink,
        email: company.email,
        addressLine: company.addressLine || '',
        openingHours: [...(company.openingHours ?? [])],
        gasSupplier: company.gasSupplier || '',
        gasPricesAreIndicative: company.gasPricesAreIndicative !== false,
      },
      null,
      2,
    )}\n`,
    'utf8',
  )
}

console.log(
  `build-content: ${categories.length} tool categories / ${productCount} products, ` +
    `${gasCategories.length} gas sections / ${bottleCount} bottles`,
)
