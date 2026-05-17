// Mock availability data — will be replaced by live HireHop API calls
// Status: 'available' | 'limited' | 'out'

export const TOOL_AVAILABILITY = {
  // Concrete Breaking
  'light-duty-breaker':       { status: 'available', units: 3, total: 3 },
  'medium-duty-breaker':      { status: 'available', units: 2, total: 2 },
  'heavy-duty-breaker-11kg':  { status: 'limited',   units: 1, total: 2 },
  'heavy-duty-breaker-27kg':  { status: 'out',        dueBack: 'Due back 28 May' },

  // Concrete Mixing & Laying
  'petrol-cement-mixer':      { status: 'available', units: 3, total: 3 },
  '110v-cement-mixer':        { status: 'available', units: 2, total: 2 },
  'diesel-site-mixer':        { status: 'available', units: 1, total: 1 },
  'vibrating-poker':          { status: 'available', units: 4, total: 4 },
  'power-trowel':             { status: 'limited',   units: 1, total: 2 },
  'twin-beam-screed':         { status: 'out',        dueBack: 'Due back 30 May' },

  // Masonry, Diamond Core & Tile
  'angle-grinder-4-5':        { status: 'available', units: 4, total: 4 },
  'angle-grinder-9':          { status: 'available', units: 3, total: 3 },
  'cut-off-saw-12-electric':  { status: 'available', units: 2, total: 2 },
  'cut-off-saw-12-petrol':    { status: 'limited',   units: 1, total: 2 },
  'cut-off-saw-14-petrol':    { status: 'available', units: 2, total: 2 },
  'petrol-floor-saw':         { status: 'out',        dueBack: 'Due back 29 May' },
  'diamond-core-drill':       { status: 'available', units: 2, total: 2 },
  'diamond-core-cutters':     { status: 'available', units: 5, total: 5 },
  'tile-bench-saw':           { status: 'available', units: 1, total: 1 },
  'manual-tile-cutter':       { status: 'available', units: 3, total: 3 },
  'block-splitter':           { status: 'limited',   units: 1, total: 1 },

  // Wood & Metal Cutting
  'jigsaw':                   { status: 'available', units: 3, total: 3 },
  'reciprocating-saw':        { status: 'available', units: 2, total: 2 },
  'circular-saw-185':         { status: 'available', units: 3, total: 3 },
  'circular-saw-235':         { status: 'limited',   units: 1, total: 2 },
  'mitre-saw':                { status: 'available', units: 2, total: 2 },

  // Compacting Equipment
  'plate-compactor-12':       { status: 'available', units: 3, total: 3 },
  'plate-compactor-18':       { status: 'available', units: 2, total: 2 },
  'vibrating-roller-55':      { status: 'out',        dueBack: 'Due back 2 Jun' },
  'ride-on-roller':           { status: 'available', units: 1, total: 1 },

  // Drilling
  'sds-plus-drill':           { status: 'available', units: 4, total: 4 },
  'angle-drill-10mm':         { status: 'available', units: 3, total: 3 },
  'angle-drill-13mm':         { status: 'available', units: 2, total: 2 },
  'magnetic-core-drill':      { status: 'limited',   units: 1, total: 1 },

  // Acro Props, Trestles & Boards
  'adjustable-prop-size-0':   { status: 'available', units: 8, total: 8 },
  'adjustable-prop-size-1':   { status: 'available', units: 8, total: 8 },
  'adjustable-prop-size-2':   { status: 'limited',   units: 3, total: 6 },
  'adjustable-prop-size-3':   { status: 'available', units: 6, total: 6 },
  'strongboy':                { status: 'available', units: 4, total: 4 },
  'builders-trestle-size-1':  { status: 'available', units: 6, total: 6 },
  'builders-trestle-size-2':  { status: 'available', units: 6, total: 6 },
  'builders-trestle-size-3':  { status: 'available', units: 4, total: 4 },
  'scaffold-boards':          { status: 'available', units: 20, total: 20 },

  // Gardening
  'rotary-lawnmower':         { status: 'available', units: 2, total: 2 },
  'chainsaw-16':              { status: 'limited',   units: 1, total: 2 },
  'hedge-trimmer':            { status: 'available', units: 3, total: 3 },
  'rotavator':                { status: 'available', units: 2, total: 2 },
  'turf-cutter':              { status: 'out',        dueBack: 'Due back 27 May' },
  'stump-grinder':            { status: 'available', units: 1, total: 1 },
  'log-splitter':             { status: 'available', units: 2, total: 2 },

  // Scaffold Towers
  'single-width-tower-2-2m':  { status: 'available', units: 2, total: 2 },
  'single-width-tower-3-2m':  { status: 'limited',   units: 1, total: 2 },
  'single-width-tower-4-2m':  { status: 'available', units: 2, total: 2 },
  'double-width-tower-4-2m':  { status: 'available', units: 1, total: 1 },
  'double-width-tower-6-2m':  { status: 'out',        dueBack: 'Due back 1 Jun' },
}

export const PLANT_AVAILABILITY = {
  '1t-mini-excavator':        { status: 'available', units: 1, total: 1 },
  '1-5t-excavator':           { status: 'out',        dueBack: 'Due back 29 May' },
  '3t-excavator':             { status: 'available', units: 1, total: 1 },
  'skip-loader':              { status: 'available', units: 1, total: 1 },
  'dumper':                   { status: 'limited',   units: 1, total: 2 },
}
