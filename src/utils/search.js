// Maps common user terms to canonical words found in the search index
const SYNONYMS = {
  digger:          ['excavator', 'digger', 'mini excavator'],
  dig:             ['excavator', 'digger', 'excavating'],
  excavator:       ['excavator', 'digger'],
  'mini digger':   ['excavator', 'digger', 'mini excavator'],
  'micro digger':  ['excavator', 'digger'],
  'mini excavator':['excavator', 'mini excavator'],
  groundwork:      ['excavator', 'digger', 'compactor', 'groundworks'],
  groundworks:     ['excavator', 'digger', 'compactor', 'groundworks'],
  jackhammer:      ['breaker', 'breaking'],
  'jack hammer':   ['breaker', 'breaking'],
  demo:            ['breaker', 'breaking', 'demolition'],
  demolition:      ['breaker', 'breaking', 'demolition'],
  bust:            ['breaker', 'breaking'],
  chisel:          ['breaker', 'breaking', 'chipping'],
  cement:          ['cement', 'concrete', 'mixer', 'mixing'],
  concrete:        ['concrete', 'cement', 'mixer', 'mixing', 'breaking', 'breaker'],
  mix:             ['mixer', 'mixing', 'cement'],
  mixer:           ['mixer', 'mixing', 'cement'],
  mixing:          ['mixer', 'mixing', 'cement'],
  trowel:          ['trowel', 'concrete', 'float', 'screed'],
  screed:          ['screed', 'concrete', 'float'],
  grinder:         ['grinder', 'grinding', 'masonry', 'angle grinder'],
  angle:           ['angle grinder', 'grinder', 'masonry'],
  cutting:         ['saw', 'cutter', 'cut', 'cutting'],
  cutter:          ['cutter', 'saw', 'cutting', 'disc'],
  tile:            ['tile', 'tiling', 'masonry', 'cutter'],
  jigsaw:          ['jigsaw', 'cutting', 'wood'],
  circular:        ['circular saw', 'saw', 'cutting', 'wood'],
  mitre:           ['mitre saw', 'saw', 'cutting', 'wood'],
  drill:           ['drill', 'drilling'],
  drilling:        ['drill', 'drilling', 'core'],
  core:            ['core drill', 'diamond', 'drilling'],
  diamond:         ['diamond', 'core drill', 'drilling'],
  compactor:       ['compactor', 'compacting', 'plate', 'wacker'],
  compact:         ['compactor', 'compacting', 'plate', 'wacker'],
  wacker:          ['wacker', 'plate', 'compactor', 'compacting'],
  whacker:         ['wacker', 'plate', 'compactor', 'compacting'],
  plate:           ['plate compactor', 'wacker', 'compacting'],
  rammer:          ['rammer', 'compactor', 'compacting'],
  vibrating:       ['vibrating', 'compactor', 'plate', 'wacker'],
  scaffold:        ['scaffold', 'scaffolding', 'tower', 'access'],
  scaffolding:     ['scaffold', 'scaffolding', 'tower'],
  tower:           ['tower', 'scaffold', 'scaffolding', 'access'],
  height:          ['height', 'scaffold', 'tower', 'access'],
  access:          ['access', 'scaffold', 'tower'],
  prop:            ['prop', 'acro', 'strongboy', 'shoring'],
  acro:            ['acro', 'prop', 'shoring'],
  trestle:         ['trestle', 'scaffold', 'hop up'],
  strimmer:        ['strimmer', 'gardening', 'garden'],
  mower:           ['mower', 'lawn', 'gardening', 'garden'],
  lawn:            ['lawn', 'mower', 'gardening'],
  hedge:           ['hedge', 'hedge trimmer', 'gardening'],
  garden:          ['garden', 'gardening'],
  gardening:       ['gardening', 'garden'],
  grass:           ['grass', 'mower', 'lawn', 'strimmer'],
  dumper:          ['dumper', 'skip', 'tipper', 'tip'],
  tipper:          ['tipper', 'dumper', 'skip'],
  skip:            ['skip', 'dumper', 'tipper'],
  'muck away':     ['dumper', 'skip', 'tipper'],
  spoil:           ['dumper', 'skip', 'spoil'],
  plant:           ['plant hire', 'excavator', 'digger', 'dumper'],
  tool:            ['tool hire', 'breaker', 'drill', 'saw'],
}

function tokenise(str) {
  return str.toLowerCase().trim().split(/\s+/).filter(Boolean)
}

function expandQuery(query) {
  const lower = query.toLowerCase().trim()
  const terms = new Set(tokenise(lower))

  // Check for multi-word synonyms first
  for (const [key, expansions] of Object.entries(SYNONYMS)) {
    if (lower.includes(key)) {
      expansions.forEach(t => terms.add(t.toLowerCase()))
    }
  }

  return [...terms]
}

function scoreItem(item, terms) {
  let score = 0
  const titleLower = item.title.toLowerCase()
  const catLower = item.categoryLabel.toLowerCase()
  const text = item.searchText

  for (const term of terms) {
    // Title exact substring — highest weight
    if (titleLower.includes(term)) score += 20
    // Title starts with term
    if (titleLower.startsWith(term)) score += 10
    // Category match — important for "all X" queries
    if (catLower.includes(term)) score += 12
    // General search text (specs, tags, descriptions)
    if (text.includes(term)) score += 5
  }

  // Bonus: more terms matched = more likely to be the right result
  const termMatches = terms.filter(t => text.includes(t) || titleLower.includes(t)).length
  score += termMatches * 2

  return score
}

export function searchProducts(query, index) {
  const q = query.trim()
  if (q.length < 2) return []

  const terms = expandQuery(q)
  if (!terms.length) return []

  return index
    .map(item => ({ ...item, _score: scoreItem(item, terms) }))
    .filter(item => item._score > 0)
    .sort((a, b) => b._score - a._score)
    .map(({ _score, ...item }) => item) // strip internal score
}
