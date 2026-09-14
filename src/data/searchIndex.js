import { TOOL_HIRE_CATEGORIES } from './toolHireData'
import { GAS_CATEGORIES } from './gasData'

// Extra tags for common user terms — appended to each product's searchable text
const CATEGORY_TAGS = {
  'concrete-breaking':    ['jackhammer', 'jack hammer', 'chipping', 'demolition', 'breaker', 'breaking', 'bust', 'hammer', 'electric'],
  'concrete-mixing-laying': ['cement mixer', 'concrete mixer', 'mixing', 'screed', 'trowel', 'float', 'poker'],
  'masonry-diamond-tile': ['grinder', 'grinding', 'angle grinder', 'disc cutter', 'tile cutter', 'block splitter', 'core drill', 'masonry', 'stone'],
  'wood-metal-cutting':   ['jigsaw', 'circular saw', 'mitre saw', 'bandsaw', 'reciprocating saw', 'wood', 'metal', 'timber', 'cutting', 'cut'],
  'diamond-core-drill-core-cutters': ['core drill', 'diamond drill', 'core cutter', 'hole saw', 'drilling'],
  'compacting-equipment': ['plate compactor', 'vibrating plate', 'wacker plate', 'wacker', 'whacker', 'rammer', 'trench rammer', 'compaction', 'compacting'],
  'drilling':             ['drill', 'drilling', 'sds', 'rotary hammer', 'core drill', 'hole'],
  'gardening-equipment':  ['strimmer', 'lawn mower', 'hedge trimmer', 'hedge cutter', 'rotovator', 'garden', 'grass', 'turf', 'leaf'],
  'access-scaffold-towers': ['scaffold', 'scaffolding', 'tower', 'mobile tower', 'access platform', 'working at height', 'height'],
  'acro-props-strongboys-trestles-scaffold': ['acro prop', 'strongboy', 'trestle', 'hop up', 'props', 'shoring', 'support'],
}

const PLANT_PRODUCTS = [
  {
    id: 'mini-excavator-1t',
    title: '1T Mini Excavator',
    categoryLabel: 'Plant Hire — Mini Excavators',
    url: '/plant-hire/mini-excavators-diggers',
    image: '/images/IMG_7870.WEBP',
    type: 'plant',
    pricing: { day1: '£90.00', week: '£180.00' },
    extraSearchText: 'mini excavator digger 1 tonne 1t micro digger groundworks landscaping footings restricted access compact machine plant hire',
  },
  {
    id: 'mini-excavator-1-5t',
    title: '1.5T Mini Excavator (Kubota U10-3)',
    categoryLabel: 'Plant Hire — Mini Excavators',
    url: '/plant-hire/mini-excavators-diggers',
    image: '/images/IMG_7869.WEBP',
    type: 'plant',
    pricing: { day1: 'POA', week: 'POA' },
    extraSearchText: 'mini excavator digger 1.5 tonne kubota groundworks landscaping footings excavating plant hire',
  },
  {
    id: 'excavator-3t',
    title: '3.0T Excavator (Hitachi ZX27-3)',
    categoryLabel: 'Plant Hire — Mini Excavators',
    url: '/plant-hire/mini-excavators-diggers',
    image: '/images/IMG_7871.WEBP',
    type: 'plant',
    pricing: { day1: '£120.00', week: '£240.00' },
    extraSearchText: '3 tonne excavator digger hitachi large excavator cab groundworks landscaping plant hire',
  },
  {
    id: 'tracked-dumper',
    title: 'Tracked Mini Dumper (Kinowa HS701)',
    categoryLabel: 'Plant Hire — Skip Loaders & Dumpers',
    url: '/plant-hire/skip-loaders-dumpers',
    image: '/images/IMG_7872.WEBP',
    type: 'plant',
    pricing: { day1: 'POA', week: 'POA' },
    extraSearchText: 'dumper tracked skip loader tipper tip spoil aggregate material muck away plant hire compact',
  },
  {
    id: 'wheeled-dumper',
    title: 'Wheeled Site Dumper (AUSA)',
    categoryLabel: 'Plant Hire — Skip Loaders & Dumpers',
    url: '/plant-hire/skip-loaders-dumpers',
    image: '/images/IMG_7873.WEBP',
    type: 'plant',
    pricing: { day1: 'POA', week: 'POA' },
    extraSearchText: 'dumper wheeled skip loader tipper tip spoil aggregate material muck away plant hire ausa site dumper',
  },
]

function buildToolIndex() {
  return TOOL_HIRE_CATEGORIES.flatMap(cat =>
    cat.products.map(product => {
      const extraTags = (CATEGORY_TAGS[cat.id] || []).join(' ')
      const specsText = (product.specs || []).join(' ')
      const searchText = [
        product.title,
        cat.label,
        cat.id.replace(/-/g, ' '),
        cat.slug?.replace(/-/g, ' ') || '',
        specsText,
        product.note || '',
        product.description || '',
        extraTags,
      ].join(' ').toLowerCase()

      return {
        id: product.id,
        title: product.title,
        categoryLabel: cat.label,
        categoryId: cat.id,
        url: `/tool-hire/${cat.slug}`,
        image: product.image || null,
        type: 'tool',
        pricing: product.pricing || null,
        searchText,
      }
    })
  )
}

function buildPlantIndex() {
  return PLANT_PRODUCTS.map(p => ({
    id: p.id,
    title: p.title,
    categoryLabel: p.categoryLabel,
    categoryId: p.type,
    url: p.url,
    image: p.image || null,
    type: 'plant',
    pricing: p.pricing || null,
    searchText: [p.title, p.categoryLabel, p.extraSearchText].join(' ').toLowerCase(),
  }))
}

// Gas bottles are sold over the counter rather than hired, so they carry a
// deposit/refill price instead of day rates.
const GAS_SEARCH_TAGS = {
  'patio-bbq-gas': ['patio gas', 'bbq gas', 'barbecue', 'barbeque', 'propane', 'patio heater', 'gas bottle', 'refill'],
  'caravan-camping-gas': ['caravan gas', 'camping gas', 'butane', 'propane', 'motorhome', 'campervan', 'awning', 'gas bottle'],
  'trade-plumbers-gas': ['propane', 'plumbers gas', 'blowlamp', 'blow torch', 'roofing torch', 'space heater', 'forklift gas', 'bitumen'],
  'welding-gas': ['welding gas', 'argon', 'co2', 'mig', 'tig', 'oxygen', 'acetylene', 'shielding gas', 'cutting', 'brazing'],
}

function buildGasIndex() {
  return GAS_CATEGORIES.flatMap(cat =>
    cat.products.map(bottle => ({
      id: bottle.id,
      title: bottle.title,
      categoryLabel: `Gas Bottles — ${cat.label}`,
      categoryId: cat.slug,
      url: `/gas-bottles#${cat.slug}`,
      image: bottle.image || null,
      type: 'gas',
      pricing: bottle.refillPrice ? { day1: bottle.refillPrice, week: null } : null,
      searchText: [
        bottle.title,
        bottle.size,
        cat.label,
        ...(bottle.specs ?? []),
        ...(GAS_SEARCH_TAGS[cat.slug] ?? []),
        'gas bottle cylinder',
      ]
        .join(' ')
        .toLowerCase(),
    })),
  )
}

export const SEARCH_INDEX = [...buildToolIndex(), ...buildPlantIndex(), ...buildGasIndex()]
