// Professional SVG product illustrations for Rowland Plant Hire
// ViewBox: 0 0 200 200 | Style: clean technical drawing with brand red accents
// Colors: red #CC0000, dark #424242, mid-grey #9E9E9E, light-grey #D4D4D4, black #212121

const R  = '#CC0000'  // brand red
const DK = '#424242'  // dark grey / outlines
const MG = '#9E9E9E'  // medium grey
const LG = '#D4D4D4'  // light grey body
const BK = '#212121'  // near black

function Base({ children }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"
         style={{ width: '100%', height: '100%', display: 'block' }}>
      {children}
    </svg>
  )
}

// ── CONCRETE BREAKING ───────────────────────────────────────────

export function BreakerIllustration() {
  return (
    <Base>
      {/* Motor housing */}
      <rect x="70" y="14" width="60" height="28" rx="4" fill={MG} stroke={DK} strokeWidth="2"/>
      {/* Body */}
      <rect x="75" y="41" width="50" height="88" rx="3" fill={LG} stroke={DK} strokeWidth="2"/>
      {/* Vent slots */}
      <rect x="86" y="56" width="4" height="40" rx="2" fill={MG}/>
      <rect x="96" y="56" width="4" height="40" rx="2" fill={MG}/>
      <rect x="110" y="56" width="4" height="40" rx="2" fill={MG}/>
      <rect x="120" y="56" width="4" height="40" rx="2" fill={MG}/>
      {/* Red brand stripe */}
      <rect x="75" y="92" width="50" height="8" fill={R}/>
      {/* D-handle */}
      <path d="M75 60 L40 60 Q28 60 28 74 L28 90 Q28 102 40 102 L75 102"
            stroke={R} strokeWidth="7" strokeLinecap="round" fill="none"/>
      {/* Grip */}
      <rect x="22" y="78" width="12" height="26" rx="6" fill={BK}/>
      {/* Trigger */}
      <rect x="75" y="73" width="7" height="16" rx="2" fill={R}/>
      {/* Chisel block */}
      <rect x="83" y="129" width="34" height="10" rx="2" fill={MG} stroke={DK} strokeWidth="1.5"/>
      {/* Chisel bit */}
      <rect x="90" y="139" width="20" height="46" rx="2" fill={MG} stroke={DK} strokeWidth="1.5"/>
      {/* Chisel tip */}
      <polygon points="90,185 100,198 110,185" fill={DK}/>
      {/* Power cord */}
      <path d="M130 20 Q158 8 164 0" stroke={BK} strokeWidth="3" strokeLinecap="round"/>
    </Base>
  )
}

export function HeavyBreakerIllustration() {
  return (
    <Base>
      {/* Motor housing – wider/heavier */}
      <rect x="60" y="12" width="80" height="32" rx="5" fill={MG} stroke={DK} strokeWidth="2.5"/>
      {/* Body */}
      <rect x="65" y="43" width="70" height="96" rx="4" fill={LG} stroke={DK} strokeWidth="2.5"/>
      {/* Vent slots */}
      {[80,93,107,120,133].map(x => (
        <rect key={x} x={x} y="58" width="5" height="46" rx="2" fill={MG}/>
      ))}
      {/* Red stripe */}
      <rect x="65" y="98" width="70" height="9" fill={R}/>
      {/* D-handle */}
      <path d="M65 64 L28 64 Q16 64 16 80 L16 98 Q16 112 28 112 L65 112"
            stroke={R} strokeWidth="9" strokeLinecap="round" fill="none"/>
      {/* Grip */}
      <rect x="10" y="84" width="14" height="30" rx="7" fill={BK}/>
      {/* Chisel block */}
      <rect x="74" y="139" width="52" height="12" rx="3" fill={MG} stroke={DK} strokeWidth="2"/>
      {/* Chisel */}
      <rect x="84" y="151" width="32" height="40" rx="2" fill={MG} stroke={DK} strokeWidth="2"/>
      {/* Tip */}
      <polygon points="84,191 100,200 116,191" fill={DK}/>
      {/* Cord */}
      <path d="M135 18 Q160 6 168 0" stroke={BK} strokeWidth="4" strokeLinecap="round"/>
    </Base>
  )
}

// ── CONCRETE MIXING ─────────────────────────────────────────────

export function MixerIllustration() {
  return (
    <Base>
      {/* Frame legs */}
      <line x1="82" y1="118" x2="56" y2="162" stroke={R} strokeWidth="6" strokeLinecap="round"/>
      <line x1="120" y1="118" x2="144" y2="162" stroke={R} strokeWidth="6" strokeLinecap="round"/>
      <line x1="56" y1="150" x2="144" y2="150" stroke={R} strokeWidth="4" strokeLinecap="round"/>
      {/* Drum body */}
      <g transform="rotate(-20 100 88)">
        <ellipse cx="100" cy="88" rx="54" ry="38" fill={LG} stroke={DK} strokeWidth="2.5"/>
        {/* Drum ribs */}
        <line x1="66" y1="76" x2="66" y2="100" stroke={MG} strokeWidth="2"/>
        <line x1="78" y1="52" x2="78" y2="124" stroke={MG} strokeWidth="1.5"/>
        <line x1="122" y1="52" x2="122" y2="124" stroke={MG} strokeWidth="1.5"/>
        <line x1="134" y1="76" x2="134" y2="100" stroke={MG} strokeWidth="2"/>
        {/* Drum opening (front) */}
        <ellipse cx="52" cy="88" rx="12" ry="35" fill="#BDBDBD" stroke={DK} strokeWidth="2"/>
        {/* Motor box (rear) */}
        <rect x="138" y="78" width="22" height="22" rx="3" fill={MG} stroke={DK} strokeWidth="2"/>
        {/* Red stripe */}
        <rect x="58" y="82" width="80" height="10" fill={R}/>
      </g>
      {/* Wheels */}
      <circle cx="56" cy="168" r="14" fill={BK} stroke={DK} strokeWidth="2"/>
      <circle cx="56" cy="168" r="5" fill={MG}/>
      <circle cx="144" cy="168" r="14" fill={BK} stroke={DK} strokeWidth="2"/>
      <circle cx="144" cy="168" r="5" fill={MG}/>
    </Base>
  )
}

export function SiteMixerIllustration() {
  return (
    <Base>
      {/* Large drum - more upright */}
      <ellipse cx="105" cy="80" rx="58" ry="46" fill={LG} stroke={DK} strokeWidth="2.5"/>
      <ellipse cx="105" cy="80" rx="42" ry="32" fill="#BDBDBD" stroke={MG} strokeWidth="1.5"/>
      {/* Mixing blades */}
      <path d="M85 70 L105 90 L125 70 M105 90 L105 108" stroke={R} strokeWidth="3" strokeLinecap="round"/>
      {/* Engine housing */}
      <rect x="48" y="55" width="28" height="32" rx="3" fill={MG} stroke={DK} strokeWidth="2"/>
      {/* Exhaust */}
      <rect x="54" y="38" width="8" height="20" rx="3" fill={DK}/>
      <ellipse cx="58" cy="38" rx="6" ry="4" fill={DK}/>
      {/* Frame / chassis */}
      <rect x="30" y="130" width="140" height="18" rx="3" fill={MG} stroke={DK} strokeWidth="2"/>
      {/* Wheels */}
      {[45, 90, 115, 160].map(x => (
        <g key={x}>
          <circle cx={x} cy="164" r="16" fill={BK} stroke={DK} strokeWidth="2"/>
          <circle cx={x} cy="164" r="6" fill={MG}/>
        </g>
      ))}
      {/* Red stripe */}
      <rect x="47" y="92" width="116" height="8" fill={R}/>
    </Base>
  )
}

export function PokerIllustration() {
  return (
    <Base>
      {/* Engine/motor unit */}
      <rect x="60" y="20" width="80" height="55" rx="6" fill={LG} stroke={DK} strokeWidth="2.5"/>
      <rect x="60" y="20" width="80" height="22" rx="6" fill={MG} stroke={DK} strokeWidth="2"/>
      {/* Vents */}
      {[74, 86, 98, 110, 122].map(x => (
        <rect key={x} x={x} y="50" width="5" height="20" rx="2" fill={MG}/>
      ))}
      {/* Red stripe */}
      <rect x="60" y="58" width="80" height="7" fill={R}/>
      {/* Handle */}
      <path d="M80 20 L80 4 Q80 0 100 0 Q120 0 120 4 L120 20" stroke={R} strokeWidth="7" strokeLinecap="round" fill="none"/>
      {/* Flexible shaft */}
      <path d="M100 75 Q92 100 108 120 Q92 140 108 160 Q100 175 100 185"
            stroke={DK} strokeWidth="5" strokeLinecap="round" fill="none"/>
      {/* Poker head */}
      <ellipse cx="100" cy="188" rx="10" ry="8" fill={MG} stroke={DK} strokeWidth="2"/>
      {/* Fuel cap */}
      <circle cx="76" cy="34" r="6" fill={DK}/>
    </Base>
  )
}

export function TrowelIllustration() {
  return (
    <Base>
      {/* Engine */}
      <rect x="72" y="30" width="56" height="44" rx="5" fill={MG} stroke={DK} strokeWidth="2.5"/>
      {/* Engine details */}
      <circle cx="88" cy="52" r="12" fill={LG} stroke={DK} strokeWidth="2"/>
      <circle cx="112" cy="52" r="12" fill={LG} stroke={DK} strokeWidth="2"/>
      {/* Guard ring */}
      <circle cx="100" cy="130" r="58" stroke={DK} strokeWidth="3" fill="none"/>
      <circle cx="100" cy="130" r="52" stroke={MG} strokeWidth="1" strokeDasharray="6,4" fill="none"/>
      {/* Blades */}
      {[0, 90, 180, 270].map(deg => {
        const rad = (deg * Math.PI) / 180
        const x1 = 100 + 12 * Math.cos(rad)
        const y1 = 130 + 12 * Math.sin(rad)
        const x2 = 100 + 50 * Math.cos(rad)
        const y2 = 130 + 50 * Math.sin(rad)
        return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke={R} strokeWidth="6" strokeLinecap="round"/>
      })}
      {/* Center hub */}
      <circle cx="100" cy="130" r="12" fill={DK}/>
      {/* Handle */}
      <path d="M100 30 L100 10 Q100 4 112 4 L145 4" stroke={R} strokeWidth="7" strokeLinecap="round" fill="none"/>
    </Base>
  )
}

export function ScreedIllustration() {
  return (
    <Base>
      {/* Screed beam (horizontal) */}
      <rect x="15" y="90" width="170" height="20" rx="3" fill={LG} stroke={DK} strokeWidth="2.5"/>
      {/* Engine unit */}
      <rect x="75" y="50" width="50" height="45" rx="5" fill={MG} stroke={DK} strokeWidth="2.5"/>
      {/* Engine details */}
      <circle cx="90" cy="68" r="10" fill={LG} stroke={DK} strokeWidth="2"/>
      <circle cx="110" cy="68" r="10" fill={LG} stroke={DK} strokeWidth="2"/>
      {/* Red stripe on beam */}
      <rect x="15" y="95" width="170" height="5" fill={R}/>
      {/* Handles */}
      <path d="M80 50 L80 22 Q80 14 100 14 Q120 14 120 22 L120 50"
            stroke={R} strokeWidth="7" strokeLinecap="round" fill="none"/>
      {/* Vibrator attachments */}
      <line x1="50" y1="90" x2="50" y2="110" stroke={DK} strokeWidth="3"/>
      <line x1="150" y1="90" x2="150" y2="110" stroke={DK} strokeWidth="3"/>
      {/* Beam end caps */}
      <rect x="10" y="88" width="10" height="24" rx="3" fill={MG} stroke={DK} strokeWidth="2"/>
      <rect x="180" y="88" width="10" height="24" rx="3" fill={MG} stroke={DK} strokeWidth="2"/>
    </Base>
  )
}

// ── MASONRY / TILE / DIAMOND ────────────────────────────────────

export function GrinderIllustration() {
  return (
    <Base>
      {/* Body */}
      <rect x="80" y="72" width="95" height="42" rx="8" fill={LG} stroke={DK} strokeWidth="2.5"/>
      {/* Motor end */}
      <rect x="155" y="76" width="28" height="34" rx="6" fill={MG} stroke={DK} strokeWidth="2"/>
      {/* Vents */}
      {[160, 168, 176].map(x => (
        <rect key={x} x={x} y="82" width="3" height="22" rx="1.5" fill={DK}/>
      ))}
      {/* Guard (half-disc) */}
      <path d="M80 72 A46 46 0 0 0 80 114" fill={MG} stroke={DK} strokeWidth="2.5"/>
      {/* Disc */}
      <circle cx="46" cy="93" r="40" fill={LG} stroke={DK} strokeWidth="2.5"/>
      <circle cx="46" cy="93" r="30" stroke={MG} strokeWidth="1.5" fill="none" strokeDasharray="8,4"/>
      <circle cx="46" cy="93" r="5" fill={DK}/>
      {/* Cutting edge */}
      <circle cx="46" cy="93" r="40" stroke={R} strokeWidth="3" fill="none"
              strokeDasharray="6,6"/>
      {/* Side handle */}
      <rect x="108" y="114" width="14" height="40" rx="7" fill={DK} stroke={DK} strokeWidth="1.5"/>
      {/* Red stripe */}
      <rect x="82" y="87" width="92" height="7" fill={R}/>
      {/* Power cord */}
      <path d="M175 80 Q186 62 192 50" stroke={BK} strokeWidth="3" strokeLinecap="round"/>
    </Base>
  )
}

export function DiscCutterIllustration() {
  return (
    <Base>
      {/* Engine body */}
      <rect x="55" y="62" width="90" height="56" rx="8" fill={LG} stroke={DK} strokeWidth="2.5"/>
      {/* Fuel tank */}
      <rect x="110" y="72" width="28" height="36" rx="4" fill={MG} stroke={DK} strokeWidth="2"/>
      {/* Red fuel cap */}
      <circle cx="124" cy="72" r="6" fill={R}/>
      {/* Red stripe */}
      <rect x="55" y="90" width="90" height="7" fill={R}/>
      {/* Handle (top D) */}
      <path d="M75 62 L75 38 Q75 28 100 28 Q125 28 125 38 L125 62"
            stroke={DK} strokeWidth="8" strokeLinecap="round" fill="none"/>
      {/* Guard */}
      <path d="M55 62 A52 52 0 0 0 55 118" fill={MG} stroke={DK} strokeWidth="2.5"/>
      {/* Disc */}
      <circle cx="20" cy="90" r="45" fill={LG} stroke={DK} strokeWidth="2.5"/>
      <circle cx="20" cy="90" r="35" stroke={MG} strokeWidth="1.5" strokeDasharray="8,4" fill="none"/>
      <circle cx="20" cy="90" r="6" fill={DK}/>
      {/* Disc edge */}
      <circle cx="20" cy="90" r="45" stroke={R} strokeWidth="3" fill="none" strokeDasharray="5,5"/>
    </Base>
  )
}

export function FloorSawIllustration() {
  return (
    <Base>
      {/* Main body/engine */}
      <rect x="40" y="40" width="120" height="80" rx="6" fill={LG} stroke={DK} strokeWidth="2.5"/>
      {/* Engine block detail */}
      <rect x="50" y="50" width="50" height="40" rx="4" fill={MG} stroke={DK} strokeWidth="2"/>
      {/* Blade guard (lower) */}
      <rect x="105" y="100" width="50" height="30" rx="3" fill={MG} stroke={DK} strokeWidth="2"/>
      {/* Blade */}
      <circle cx="130" cy="130" r="38" fill={LG} stroke={DK} strokeWidth="2.5"/>
      <circle cx="130" cy="130" r="28" stroke={MG} strokeWidth="1.5" strokeDasharray="6,4" fill="none"/>
      <circle cx="130" cy="130" r="5" fill={DK}/>
      {/* Blade cutting edge */}
      <circle cx="130" cy="130" r="38" stroke={R} strokeWidth="3" fill="none" strokeDasharray="5,5"/>
      {/* Wheels */}
      <circle cx="50" cy="148" r="16" fill={BK} stroke={DK} strokeWidth="2"/>
      <circle cx="50" cy="148" r="6" fill={MG}/>
      {/* Handle bar */}
      <path d="M160 58 L178 40 Q186 30 186 42 L186 100 Q186 112 178 112 L160 112"
            stroke={DK} strokeWidth="7" strokeLinecap="round" fill="none"/>
      {/* Red stripe */}
      <rect x="40" y="88" width="120" height="7" fill={R}/>
    </Base>
  )
}

export function CoreDrillIllustration() {
  return (
    <Base>
      {/* Stand column */}
      <rect x="90" y="10" width="20" height="155" rx="3" fill={MG} stroke={DK} strokeWidth="2"/>
      {/* Base plate */}
      <rect x="48" y="158" width="104" height="16" rx="3" fill={DK} stroke={DK} strokeWidth="2"/>
      {/* Motor */}
      <rect x="56" y="28" width="88" height="64" rx="6" fill={LG} stroke={DK} strokeWidth="2.5"/>
      {/* Motor face */}
      <circle cx="100" cy="60" r="22" fill={MG} stroke={DK} strokeWidth="2"/>
      <circle cx="100" cy="60" r="12" fill={LG} stroke={DK} strokeWidth="1.5"/>
      {/* Red stripe */}
      <rect x="56" y="72" width="88" height="7" fill={R}/>
      {/* Core bit holder */}
      <rect x="88" y="92" width="24" height="20" rx="2" fill={DK}/>
      {/* Core bit */}
      <rect x="93" y="112" width="14" height="60" rx="2" fill={MG} stroke={DK} strokeWidth="1.5"/>
      {/* Core bit tip */}
      <rect x="90" y="172" width="20" height="8" rx="1" fill={R}/>
      {/* Water feed */}
      <path d="M56 48 Q30 48 26 60 Q22 72 26 84" stroke={BK} strokeWidth="3"
            strokeLinecap="round" fill="none" strokeDasharray="4,3"/>
      {/* Handle */}
      <rect x="144" y="42" width="36" height="18" rx="9" fill={DK}/>
    </Base>
  )
}

export function CoreCutterIllustration() {
  return (
    <Base>
      {/* Multiple cutter sizes shown in fan */}
      {/* Small */}
      <rect x="86" y="20" width="28" height="80" rx="3" fill={MG} stroke={DK} strokeWidth="2"/>
      <rect x="86" y="100" width="28" height="8" rx="2" fill={R}/>
      <line x1="100" y1="20" x2="100" y2="108" stroke={DK} strokeWidth="1.5" strokeDasharray="4,3"/>
      {/* Medium */}
      <rect x="120" y="30" width="36" height="90" rx="3" fill={LG} stroke={DK} strokeWidth="2"/>
      <rect x="120" y="120" width="36" height="8" rx="2" fill={R}/>
      <line x1="138" y1="30" x2="138" y2="128" stroke={DK} strokeWidth="1.5" strokeDasharray="4,3"/>
      {/* Large */}
      <rect x="52" y="30" width="36" height="90" rx="3" fill={LG} stroke={DK} strokeWidth="2"/>
      <rect x="52" y="120" width="36" height="8" rx="2" fill={R}/>
      <line x1="70" y1="30" x2="70" y2="128" stroke={DK} strokeWidth="1.5" strokeDasharray="4,3"/>
      {/* Size labels line */}
      <line x1="30" y1="148" x2="170" y2="148" stroke={MG} strokeWidth="1.5"/>
      {/* Shank ends */}
      <rect x="84" y="16" width="32" height="8" rx="2" fill={DK}/>
      <rect x="118" y="26" width="40" height="8" rx="2" fill={DK}/>
      <rect x="50" y="26" width="40" height="8" rx="2" fill={DK}/>
    </Base>
  )
}

export function TileSawIllustration() {
  return (
    <Base>
      {/* Table / bench */}
      <rect x="20" y="95" width="160" height="20" rx="3" fill={LG} stroke={DK} strokeWidth="2.5"/>
      {/* Table legs */}
      <rect x="30" y="115" width="12" height="60" rx="3" fill={MG} stroke={DK} strokeWidth="2"/>
      <rect x="158" y="115" width="12" height="60" rx="3" fill={MG} stroke={DK} strokeWidth="2"/>
      <line x1="30" y1="165" x2="170" y2="165" stroke={MG} strokeWidth="3" strokeLinecap="round"/>
      {/* Water tray */}
      <rect x="22" y="112" width="156" height="10" rx="2" fill="#90CAF9" stroke={DK} strokeWidth="1.5"/>
      {/* Bridge/guard */}
      <rect x="60" y="55" width="80" height="44" rx="5" fill={MG} stroke={DK} strokeWidth="2.5"/>
      {/* Blade slot */}
      <rect x="95" y="55" width="10" height="44" rx="1" fill={DK}/>
      {/* Blade */}
      <circle cx="100" cy="90" r="32" fill={LG} stroke={DK} strokeWidth="2.5"/>
      <circle cx="100" cy="90" r="24" stroke={MG} strokeWidth="1.5" strokeDasharray="6,4" fill="none"/>
      <circle cx="100" cy="90" r="4" fill={DK}/>
      <circle cx="100" cy="90" r="32" stroke={R} strokeWidth="2.5" strokeDasharray="4,5" fill="none"/>
      {/* Red detail */}
      <rect x="60" y="72" width="80" height="6" fill={R}/>
      {/* Fence */}
      <rect x="20" y="68" width="160" height="5" rx="2" fill={DK}/>
    </Base>
  )
}

export function TileCutterIllustration() {
  return (
    <Base>
      {/* Base rail */}
      <rect x="18" y="100" width="164" height="14" rx="3" fill={MG} stroke={DK} strokeWidth="2.5"/>
      {/* Rail guides */}
      <rect x="18" y="92" width="164" height="12" rx="3" fill={LG} stroke={DK} strokeWidth="2"/>
      {/* Cutting handle */}
      <rect x="80" y="30" width="40" height="14" rx="4" fill={DK} stroke={DK} strokeWidth="2"/>
      {/* Handle pole */}
      <line x1="100" y1="44" x2="100" y2="95" stroke={DK} strokeWidth="5" strokeLinecap="round"/>
      {/* Cutting wheel */}
      <circle cx="100" cy="92" r="8" fill={R}/>
      <circle cx="100" cy="92" r="3" fill={BK}/>
      {/* Tile shown */}
      <rect x="30" y="96" width="140" height="20" rx="2" fill="white" stroke={MG} strokeWidth="1.5"/>
      {/* Cut line */}
      <line x1="100" y1="96" x2="100" y2="116" stroke={R} strokeWidth="2" strokeDasharray="3,2"/>
      {/* Handle grip */}
      <rect x="72" y="22" width="56" height="12" rx="6" fill={R}/>
      {/* Base feet */}
      <rect x="20" y="112" width="18" height="10" rx="2" fill={DK}/>
      <rect x="162" y="112" width="18" height="10" rx="2" fill={DK}/>
    </Base>
  )
}

export function BlockSplitterIllustration() {
  return (
    <Base>
      {/* Frame */}
      <rect x="35" y="30" width="130" height="140" rx="5" fill={LG} stroke={DK} strokeWidth="2.5"/>
      {/* Hydraulic ram */}
      <rect x="72" y="35" width="56" height="60" rx="4" fill={MG} stroke={DK} strokeWidth="2"/>
      {/* Ram cylinder */}
      <rect x="84" y="95" width="32" height="40" rx="3" fill={DK}/>
      {/* Upper blade */}
      <polygon points="72,135 100,155 128,135" fill={R} stroke={DK} strokeWidth="2"/>
      {/* Lower anvil */}
      <rect x="50" y="155" width="100" height="8" rx="2" fill={DK}/>
      {/* Block */}
      <rect x="58" y="163" width="84" height="30" rx="2" fill="#B0BEC5" stroke={MG} strokeWidth="1.5"/>
      {/* Handle */}
      <rect x="145" y="50" width="16" height="60" rx="8" fill={DK}/>
      {/* Red label */}
      <rect x="72" y="55" width="56" height="7" fill={R}/>
    </Base>
  )
}

// ── WOOD & METAL CUTTING ────────────────────────────────────────

export function JigsawIllustration() {
  return (
    <Base>
      {/* Base plate / shoe */}
      <rect x="30" y="125" width="140" height="18" rx="3" fill={MG} stroke={DK} strokeWidth="2.5"/>
      {/* Body */}
      <rect x="60" y="55" width="80" height="72" rx="8" fill={LG} stroke={DK} strokeWidth="2.5"/>
      {/* Motor section */}
      <rect x="110" y="62" width="24" height="50" rx="5" fill={MG} stroke={DK} strokeWidth="2"/>
      {/* D-handle */}
      <path d="M60 68 L24 68 Q14 68 14 82 L14 100 Q14 114 24 114 L60 114"
            stroke={R} strokeWidth="8" strokeLinecap="round" fill="none"/>
      {/* Grip */}
      <rect x="8" y="84" width="12" height="26" rx="6" fill={BK}/>
      {/* Trigger */}
      <rect x="60" y="80" width="7" height="16" rx="2" fill={R}/>
      {/* Blade */}
      <rect x="90" y="143" width="8" height="48" rx="2" fill={DK}/>
      {/* Blade teeth */}
      {[148,155,162,165,175,182].map(y => (
        <line key={y} x1="98" y1={y} x2="105" y2={y+4} stroke={DK} strokeWidth="1.5"/>
      ))}
      {/* Red stripe */}
      <rect x="60" y="96" width="80" height="7" fill={R}/>
      {/* Cord */}
      <path d="M134 68 Q155 54 162 44" stroke={BK} strokeWidth="3" strokeLinecap="round"/>
    </Base>
  )
}

export function RecipSawIllustration() {
  return (
    <Base>
      {/* Body */}
      <rect x="40" y="70" width="110" height="52" rx="8" fill={LG} stroke={DK} strokeWidth="2.5"/>
      {/* Motor end */}
      <rect x="120" y="76" width="38" height="40" rx="6" fill={MG} stroke={DK} strokeWidth="2"/>
      {/* Front grip */}
      <rect x="40" y="74" width="32" height="44" rx="6" fill={MG} stroke={DK} strokeWidth="2"/>
      {/* D-handle */}
      <path d="M150 76 L168 62 Q178 56 178 72 L178 112 Q178 124 168 118 L150 110"
            stroke={DK} strokeWidth="7" strokeLinecap="round" fill="none"/>
      {/* Blade chuck */}
      <rect x="8" y="85" width="34" height="22" rx="3" fill={DK}/>
      {/* Blade */}
      <rect x="0" y="89" width="12" height="14" rx="1" fill={MG} stroke={DK} strokeWidth="1.5"/>
      {/* Blade serration */}
      {[0,4,8,12,16,20].map(i => (
        <polygon key={i} points={`${2+i*1.4},89 ${2+i*1.4+0.7},84 ${2+(i+1)*1.4},89`} fill={DK}/>
      ))}
      {/* Red stripe */}
      <rect x="42" y="90" width="108" height="7" fill={R}/>
      {/* Cord */}
      <path d="M178 76 Q188 62 194 52" stroke={BK} strokeWidth="3" strokeLinecap="round"/>
    </Base>
  )
}

export function CircularSawIllustration() {
  return (
    <Base>
      {/* Shoe/base plate */}
      <rect x="20" y="130" width="160" height="16" rx="3" fill={MG} stroke={DK} strokeWidth="2.5"/>
      {/* Lower guard */}
      <path d="M50 130 A55 55 0 0 0 160 130" fill={LG} stroke={DK} strokeWidth="2.5"/>
      {/* Blade */}
      <circle cx="105" cy="108" r="52" fill={LG} stroke={DK} strokeWidth="2.5"/>
      <circle cx="105" cy="108" r="40" stroke={MG} strokeWidth="1.5" strokeDasharray="8,4" fill="none"/>
      <circle cx="105" cy="108" r="7" fill={DK}/>
      {/* Blade teeth marks */}
      <circle cx="105" cy="108" r="52" stroke={R} strokeWidth="3" strokeDasharray="6,6" fill="none"/>
      {/* Upper guard / body */}
      <rect x="62" y="42" width="86" height="72" rx="8" fill={LG} stroke={DK} strokeWidth="2.5"/>
      {/* Motor */}
      <circle cx="105" cy="78" r="24" fill={MG} stroke={DK} strokeWidth="2"/>
      <circle cx="105" cy="78" r="12" fill={LG} stroke={DK} strokeWidth="1.5"/>
      {/* D-handle */}
      <path d="M148 55 L162 42 Q172 36 172 50 L172 106 Q172 118 162 112 L148 105"
            stroke={R} strokeWidth="8" strokeLinecap="round" fill="none"/>
      {/* Red stripe */}
      <rect x="64" y="94" width="84" height="7" fill={R}/>
    </Base>
  )
}

export function MitreSawIllustration() {
  return (
    <Base>
      {/* Base / table */}
      <rect x="15" y="135" width="170" height="22" rx="4" fill={MG} stroke={DK} strokeWidth="2.5"/>
      {/* Pivot arm */}
      <rect x="88" y="55" width="24" height="85" rx="4" fill={LG} stroke={DK} strokeWidth="2.5"/>
      {/* Pivot point */}
      <circle cx="100" cy="138" r="10" fill={DK}/>
      {/* Blade */}
      <circle cx="100" cy="80" r="46" fill={LG} stroke={DK} strokeWidth="2.5"/>
      <circle cx="100" cy="80" r="34" stroke={MG} strokeWidth="1.5" strokeDasharray="8,4" fill="none"/>
      <circle cx="100" cy="80" r="6" fill={DK}/>
      {/* Blade teeth */}
      <circle cx="100" cy="80" r="46" stroke={R} strokeWidth="3" strokeDasharray="5,6" fill="none"/>
      {/* Guard */}
      <path d="M55 82 A48 48 0 0 1 145 82" fill={MG} stroke={DK} strokeWidth="2.5"/>
      {/* Handle */}
      <path d="M124 62 L148 46 Q158 38 158 52 L158 90 Q158 102 148 98 L130 90"
            stroke={DK} strokeWidth="7" strokeLinecap="round" fill="none"/>
      {/* Red stripe */}
      <rect x="56" y="98" width="88" height="7" fill={R}/>
      {/* Fence */}
      <rect x="15" y="128" width="170" height="8" rx="2" fill={DK}/>
    </Base>
  )
}

// ── COMPACTING EQUIPMENT ────────────────────────────────────────

export function PlateCompactorIllustration() {
  return (
    <Base>
      {/* Handlebars */}
      <path d="M60 38 L60 14 Q60 6 78 6 L122 6 Q140 6 140 14 L140 38"
            stroke={R} strokeWidth="8" strokeLinecap="round" fill="none"/>
      {/* Handle grip bar */}
      <rect x="54" y="32" width="92" height="14" rx="7" fill={DK}/>
      {/* Engine block */}
      <rect x="45" y="46" width="110" height="60" rx="6" fill={LG} stroke={DK} strokeWidth="2.5"/>
      {/* Engine details */}
      <circle cx="80" cy="76" r="18" fill={MG} stroke={DK} strokeWidth="2"/>
      <circle cx="80" cy="76" r="8" fill={LG} stroke={DK} strokeWidth="1.5"/>
      {/* Recoil pull */}
      <circle cx="130" cy="62" r="12" fill={MG} stroke={DK} strokeWidth="2"/>
      <line x1="130" y1="55" x2="130" y2="44" stroke={DK} strokeWidth="2.5" strokeLinecap="round"/>
      {/* Exhaust */}
      <rect x="115" y="36" width="10" height="18" rx="4" fill={DK}/>
      {/* Red stripe */}
      <rect x="45" y="90" width="110" height="7" fill={R}/>
      {/* Vibration mount */}
      <rect x="50" y="106" width="100" height="10" rx="3" fill={MG} stroke={DK} strokeWidth="2"/>
      {/* Base plate */}
      <rect x="28" y="115" width="144" height="30" rx="4" fill={DK} stroke={DK} strokeWidth="2"/>
      <rect x="32" y="119" width="136" height="22" rx="3" fill="#616161"/>
    </Base>
  )
}

export function VibratingRollerIllustration() {
  return (
    <Base>
      {/* Handlebars */}
      <path d="M65 32 L65 10 Q65 3 100 3 Q135 3 135 10 L135 32"
            stroke={R} strokeWidth="8" strokeLinecap="round" fill="none"/>
      <rect x="58" y="26" width="84" height="14" rx="7" fill={DK}/>
      {/* Engine housing */}
      <rect x="55" y="40" width="90" height="52" rx="6" fill={LG} stroke={DK} strokeWidth="2.5"/>
      {/* Engine details */}
      <rect x="64" y="50" width="44" height="28" rx="4" fill={MG} stroke={DK} strokeWidth="2"/>
      <circle cx="86" cy="64" r="10" fill={LG} stroke={DK} strokeWidth="1.5"/>
      {/* Red stripe */}
      <rect x="55" y="74" width="90" height="7" fill={R}/>
      {/* Frame connecting to drums */}
      <rect x="68" y="92" width="14" height="30" rx="3" fill={MG} stroke={DK} strokeWidth="2"/>
      <rect x="118" y="92" width="14" height="30" rx="3" fill={MG} stroke={DK} strokeWidth="2"/>
      {/* Front drum */}
      <rect x="20" y="118" width="66" height="52" rx="26" fill={MG} stroke={DK} strokeWidth="2.5"/>
      <ellipse cx="53" cy="144" rx="28" ry="22" fill={LG} stroke={DK} strokeWidth="1.5"/>
      {/* Rear drum */}
      <rect x="114" y="118" width="66" height="52" rx="26" fill={MG} stroke={DK} strokeWidth="2.5"/>
      <ellipse cx="147" cy="144" rx="28" ry="22" fill={LG} stroke={DK} strokeWidth="1.5"/>
    </Base>
  )
}

// ── METAL DRILLING ──────────────────────────────────────────────

export function SDSDrillIllustration() {
  return (
    <Base>
      {/* Body */}
      <rect x="42" y="52" width="96" height="52" rx="8" fill={LG} stroke={DK} strokeWidth="2.5"/>
      {/* Motor area */}
      <rect x="100" y="58" width="32" height="40" rx="5" fill={MG} stroke={DK} strokeWidth="2"/>
      {/* Chuck */}
      <rect x="18" y="64" width="26" height="28" rx="4" fill={DK}/>
      {/* Bit */}
      <line x1="4" y1="78" x2="18" y2="78" stroke={MG} strokeWidth="5" strokeLinecap="round"/>
      {/* Side handle */}
      <rect x="52" y="104" width="14" height="40" rx="7" fill={DK}/>
      {/* Grip / handle */}
      <path d="M115 100 L115 148 Q115 160 100 160 Q86 160 86 148 L86 104"
            stroke={DK} strokeWidth="10" strokeLinecap="round" fill={LG}/>
      <rect x="85" y="100" width="32" height="12" rx="4" fill={MG} stroke={DK} strokeWidth="2"/>
      {/* Trigger */}
      <rect x="102" y="108" width="8" height="16" rx="3" fill={R}/>
      {/* Red stripe */}
      <rect x="44" y="73" width="94" height="7" fill={R}/>
      {/* Mode switch */}
      <circle cx="64" cy="58" r="6" fill={R}/>
      {/* Cord */}
      <path d="M138 70 Q158 58 164 46" stroke={BK} strokeWidth="3" strokeLinecap="round"/>
    </Base>
  )
}

export function AngleDrillIllustration() {
  return (
    <Base>
      {/* Body */}
      <rect x="50" y="60" width="90" height="44" rx="7" fill={LG} stroke={DK} strokeWidth="2.5"/>
      {/* Right-angle gearbox */}
      <rect x="40" y="86" width="26" height="56" rx="5" fill={MG} stroke={DK} strokeWidth="2.5"/>
      {/* Chuck */}
      <rect x="44" y="136" width="18" height="22" rx="4" fill={DK}/>
      {/* Bit pointing down */}
      <line x1="53" y1="158" x2="53" y2="180" stroke={MG} strokeWidth="5" strokeLinecap="round"/>
      {/* D-handle */}
      <path d="M140 66 L158 52 Q168 46 168 60 L168 100 Q168 112 158 108 L140 102"
            stroke={R} strokeWidth="8" strokeLinecap="round" fill="none"/>
      {/* Grip */}
      <rect x="160" y="65" width="12" height="38" rx="6" fill={BK}/>
      {/* Red stripe */}
      <rect x="52" y="80" width="88" height="7" fill={R}/>
      {/* Trigger */}
      <rect x="140" y="78" width="7" height="16" rx="2" fill={R}/>
      {/* Cord */}
      <path d="M140 66 Q130 48 128 36" stroke={BK} strokeWidth="3" strokeLinecap="round"/>
    </Base>
  )
}

export function MagDrillIllustration() {
  return (
    <Base>
      {/* Magnetic base */}
      <rect x="25" y="148" width="150" height="28" rx="4" fill={DK} stroke={DK} strokeWidth="2"/>
      <rect x="30" y="152" width="140" height="20" rx="3" fill="#455A64"/>
      {/* Column */}
      <rect x="88" y="25" width="24" height="130" rx="3" fill={MG} stroke={DK} strokeWidth="2.5"/>
      {/* Motor / drive unit */}
      <rect x="52" y="35" width="96" height="66" rx="6" fill={LG} stroke={DK} strokeWidth="2.5"/>
      {/* Motor face */}
      <circle cx="100" cy="68" r="24" fill={MG} stroke={DK} strokeWidth="2"/>
      <circle cx="100" cy="68" r="12" fill={LG} stroke={DK} strokeWidth="1.5"/>
      {/* Annular cutter */}
      <rect x="88" y="101" width="24" height="50" rx="3" fill={MG} stroke={DK} strokeWidth="2"/>
      <rect x="92" y="101" width="16" height="50" rx="2" fill={DK}/>
      {/* Red stripe + handle */}
      <rect x="52" y="78" width="96" height="7" fill={R}/>
      <rect x="148" y="42" width="14" height="50" rx="7" fill={DK}/>
    </Base>
  )
}

// ── ACRO PROPS / TRESTLES ───────────────────────────────────────

export function AcroPropIllustration() {
  return (
    <Base>
      {/* Top plate */}
      <rect x="32" y="20" width="136" height="16" rx="3" fill={DK} stroke={DK} strokeWidth="2"/>
      {/* Top pin / U-head */}
      <rect x="82" y="10" width="36" height="14" rx="3" fill={MG} stroke={DK} strokeWidth="2"/>
      {/* Outer tube */}
      <rect x="80" y="36" width="40" height="90" rx="3" fill={MG} stroke={DK} strokeWidth="2.5"/>
      {/* Weld ring */}
      <rect x="78" y="60" width="44" height="8" rx="2" fill={DK}/>
      {/* Inner tube (extends below outer) */}
      <rect x="86" y="126" width="28" height="46" rx="2" fill={LG} stroke={DK} strokeWidth="2"/>
      {/* Adjustment nut / collar */}
      <rect x="76" y="118" width="48" height="16" rx="4" fill={R} stroke={DK} strokeWidth="2"/>
      {/* Adjustment hole */}
      <circle cx="100" cy="126" r="5" fill={BK}/>
      {/* Base plate */}
      <rect x="32" y="168" width="136" height="16" rx="3" fill={DK} stroke={DK} strokeWidth="2"/>
      {/* Base feet spread */}
      <line x1="42" y1="184" x2="28" y2="196" stroke={DK} strokeWidth="5" strokeLinecap="round"/>
      <line x1="158" y1="184" x2="172" y2="196" stroke={DK} strokeWidth="5" strokeLinecap="round"/>
    </Base>
  )
}

export function StrongboyIllustration() {
  return (
    <Base>
      {/* Prop attachment bracket */}
      <rect x="80" y="60" width="40" height="80" rx="3" fill={MG} stroke={DK} strokeWidth="2.5"/>
      {/* Horizontal arm */}
      <rect x="100" y="84" width="70" height="28" rx="4" fill={LG} stroke={DK} strokeWidth="2.5"/>
      {/* Load bearing pin */}
      <circle cx="148" cy="98" r="12" fill={MG} stroke={DK} strokeWidth="2"/>
      <circle cx="148" cy="98" r="5" fill={DK}/>
      {/* Wall plate */}
      <rect x="66" y="56" width="16" height="88" rx="3" fill={DK}/>
      {/* Red accent stripe */}
      <rect x="80" y="92" width="90" height="7" fill={R}/>
      {/* Top pin */}
      <rect x="88" y="44" width="24" height="18" rx="3" fill={MG} stroke={DK} strokeWidth="2"/>
      {/* Adjustment collar */}
      <rect x="76" y="134" width="48" height="14" rx="3" fill={R} stroke={DK} strokeWidth="2"/>
    </Base>
  )
}

export function TrestleIllustration() {
  return (
    <Base>
      {/* Top platform */}
      <rect x="20" y="52" width="160" height="14" rx="3" fill={DK} stroke={DK} strokeWidth="2"/>
      {/* Left leg pair (X) */}
      <line x1="38" y1="66" x2="62" y2="155" stroke={MG} strokeWidth="7" strokeLinecap="round"/>
      <line x1="62" y1="66" x2="38" y2="155" stroke={MG} strokeWidth="7" strokeLinecap="round"/>
      {/* Right leg pair (X) */}
      <line x1="138" y1="66" x2="162" y2="155" stroke={MG} strokeWidth="7" strokeLinecap="round"/>
      <line x1="162" y1="66" x2="138" y2="155" stroke={MG} strokeWidth="7" strokeLinecap="round"/>
      {/* Cross brace */}
      <line x1="38" y1="110" x2="162" y2="110" stroke={DK} strokeWidth="4" strokeLinecap="round"/>
      {/* Feet */}
      <rect x="24" y="153" width="28" height="10" rx="3" fill={DK}/>
      <rect x="148" y="153" width="28" height="10" rx="3" fill={DK}/>
      {/* Red stripe on top */}
      <rect x="20" y="56" width="160" height="5" fill={R}/>
    </Base>
  )
}

export function ScaffoldBoardIllustration() {
  return (
    <Base>
      {/* Board face - 3 boards shown stacked to show they're planks */}
      <rect x="14" y="70" width="172" height="20" rx="2" fill="#C8A97E" stroke={DK} strokeWidth="2"/>
      <rect x="14" y="95" width="172" height="20" rx="2" fill="#BF9A6A" stroke={DK} strokeWidth="2"/>
      <rect x="14" y="120" width="172" height="20" rx="2" fill="#D4B48A" stroke={DK} strokeWidth="2"/>
      {/* Wood grain lines */}
      {[30,60,90,120,150].map(x => (
        <line key={x} x1={x} y1="70" x2={x+10} y2="90" stroke="#A0785A" strokeWidth="1" strokeDasharray="3,4"/>
      ))}
      {[30,60,90,120,150].map(x => (
        <line key={x+200} x1={x} y1="95" x2={x+10} y2="115" stroke="#A0785A" strokeWidth="1" strokeDasharray="3,4"/>
      ))}
      {/* End grain */}
      <rect x="170" y="70" width="14" height="70" rx="1" fill="#8D6448" stroke={DK} strokeWidth="1.5"/>
      {/* Metal end caps */}
      <rect x="14" y="68" width="16" height="24" rx="2" fill={MG} stroke={DK} strokeWidth="1.5"/>
      <rect x="14" y="93" width="16" height="24" rx="2" fill={MG} stroke={DK} strokeWidth="1.5"/>
      <rect x="14" y="118" width="16" height="24" rx="2" fill={MG} stroke={DK} strokeWidth="1.5"/>
    </Base>
  )
}

// ── GARDENING ───────────────────────────────────────────────────

export function ChainsawIllustration() {
  return (
    <Base>
      {/* Body */}
      <rect x="40" y="62" width="88" height="62" rx="8" fill={LG} stroke={DK} strokeWidth="2.5"/>
      {/* Engine block */}
      <rect x="96" y="70" width="26" height="36" rx="4" fill={MG} stroke={DK} strokeWidth="2"/>
      {/* Rear handle */}
      <path d="M128 76 L152 62 Q162 56 162 70 L162 110 Q162 122 152 116 L128 110"
            stroke={DK} strokeWidth="8" strokeLinecap="round" fill="none"/>
      {/* Grip back */}
      <rect x="154" y="68" width="12" height="40" rx="6" fill={BK}/>
      {/* Front handle guard */}
      <rect x="48" y="58" width="10" height="72" rx="5" fill={MG} stroke={DK} strokeWidth="2"/>
      {/* Chain bar */}
      <rect x="4" y="80" width="40" height="18" rx="3" fill={MG} stroke={DK} strokeWidth="2"/>
      {/* Bar tip sprocket */}
      <circle cx="10" cy="89" r="11" fill={MG} stroke={DK} strokeWidth="2"/>
      <circle cx="10" cy="89" r="5" fill={DK}/>
      {/* Chain */}
      <rect x="4" y="77" width="40" height="4" rx="2" fill={DK}/>
      <rect x="4" y="98" width="40" height="4" rx="2" fill={DK}/>
      {/* Red stripe */}
      <rect x="40" y="90" width="88" height="7" fill={R}/>
      {/* Oil/fuel caps */}
      <circle cx="70" cy="70" r="6" fill={R}/>
      <circle cx="86" cy="70" r="6" fill={DK}/>
    </Base>
  )
}

export function LawnmowerIllustration() {
  return (
    <Base>
      {/* Handlebar */}
      <path d="M55 48 L55 18 Q55 8 100 8 Q145 8 145 18 L145 48"
            stroke={R} strokeWidth="8" strokeLinecap="round" fill="none"/>
      {/* Handle crossbar */}
      <rect x="48" y="42" width="104" height="14" rx="7" fill={DK}/>
      {/* Body / deck */}
      <rect x="22" y="96" width="156" height="38" rx="6" fill={LG} stroke={DK} strokeWidth="2.5"/>
      {/* Engine */}
      <rect x="62" y="58" width="76" height="44" rx="6" fill={MG} stroke={DK} strokeWidth="2.5"/>
      {/* Recoil */}
      <circle cx="94" cy="72" r="14" fill={LG} stroke={DK} strokeWidth="2"/>
      <circle cx="94" cy="72" r="6" fill={DK}/>
      {/* Exhaust */}
      <rect x="116" y="52" width="8" height="16" rx="3" fill={DK}/>
      {/* Red stripe */}
      <rect x="22" y="110" width="156" height="7" fill={R}/>
      {/* Wheels */}
      <circle cx="42" cy="152" r="22" fill={BK} stroke={DK} strokeWidth="2.5"/>
      <circle cx="42" cy="152" r="8" fill={MG}/>
      <circle cx="158" cy="152" r="22" fill={BK} stroke={DK} strokeWidth="2.5"/>
      <circle cx="158" cy="152" r="8" fill={MG}/>
      {/* Blade discharge */}
      <rect x="168" y="100" width="18" height="30" rx="3" fill={MG} stroke={DK} strokeWidth="2"/>
    </Base>
  )
}

export function HedgeTrimmerIllustration() {
  return (
    <Base>
      {/* Body */}
      <rect x="52" y="68" width="96" height="44" rx="8" fill={LG} stroke={DK} strokeWidth="2.5"/>
      {/* Motor end */}
      <rect x="110" y="74" width="30" height="32" rx="5" fill={MG} stroke={DK} strokeWidth="2"/>
      {/* D-handle (rear) */}
      <path d="M148 80 L166 66 Q176 60 176 74 L176 110 Q176 122 166 116 L148 108"
            stroke={R} strokeWidth="8" strokeLinecap="round" fill="none"/>
      <rect x="168" y="73" width="12" height="38" rx="6" fill={BK}/>
      {/* Front handle */}
      <rect x="60" y="58" width="36" height="16" rx="8" fill={DK}/>
      {/* Blade bar - extends left */}
      <rect x="4" y="102" width="52" height="10" rx="2" fill={DK}/>
      {/* Blade teeth */}
      {[6,16,26,36,46].map(x => (
        <polygon key={x} points={`${x},102 ${x+5},95 ${x+10},102`} fill={MG}/>
      ))}
      {/* Red stripe */}
      <rect x="52" y="85" width="96" height="7" fill={R}/>
      {/* Blade tip */}
      <rect x="0" y="100" width="8" height="14" rx="2" fill={MG} stroke={DK} strokeWidth="1.5"/>
      {/* Cord */}
      <path d="M140 74 Q154 60 160 50" stroke={BK} strokeWidth="3" strokeLinecap="round"/>
    </Base>
  )
}

export function RotavatorIllustration() {
  return (
    <Base>
      {/* Handlebars */}
      <path d="M62 42 L62 16 Q62 8 100 8 Q138 8 138 16 L138 42"
            stroke={R} strokeWidth="8" strokeLinecap="round" fill="none"/>
      <rect x="55" y="36" width="90" height="14" rx="7" fill={DK}/>
      {/* Engine body */}
      <rect x="52" y="50" width="96" height="62" rx="6" fill={LG} stroke={DK} strokeWidth="2.5"/>
      {/* Engine details */}
      <rect x="62" y="58" width="48" height="36" rx="4" fill={MG} stroke={DK} strokeWidth="2"/>
      <circle cx="86" cy="76" r="14" fill={LG} stroke={DK} strokeWidth="1.5"/>
      {/* Air filter */}
      <rect x="120" y="60" width="18" height="28" rx="3" fill={MG} stroke={DK} strokeWidth="2"/>
      {/* Red stripe */}
      <rect x="52" y="92" width="96" height="7" fill={R}/>
      {/* Gear box */}
      <rect x="68" y="112" width="64" height="26" rx="4" fill={DK}/>
      {/* Tines / rotary blades */}
      {[50,70,90,110,130,150].map((x, i) => (
        <g key={i} transform={`translate(${x}, 148)`}>
          <rect x="-6" y="0" width="12" height="34" rx="2" fill={MG} stroke={DK} strokeWidth="2"
                transform="rotate(-15)"/>
          <rect x="-6" y="0" width="12" height="34" rx="2" fill={R} stroke={DK} strokeWidth="2"
                transform="rotate(15)"/>
        </g>
      ))}
    </Base>
  )
}

// ── SCAFFOLD TOWERS ─────────────────────────────────────────────

export function ScaffoldTowerIllustration() {
  return (
    <Base>
      {/* Left upright */}
      <rect x="28" y="10" width="16" height="170" rx="3" fill={MG} stroke={DK} strokeWidth="2.5"/>
      {/* Right upright */}
      <rect x="156" y="10" width="16" height="170" rx="3" fill={MG} stroke={DK} strokeWidth="2.5"/>
      {/* Platforms */}
      {[20, 60, 100, 140].map(y => (
        <rect key={y} x="28" y={y} width="144" height="10" rx="2" fill={LG} stroke={DK} strokeWidth="2"/>
      ))}
      {/* Diagonal braces */}
      <line x1="44" y1="30" x2="156" y2="60" stroke={MG} strokeWidth="3" strokeLinecap="round"/>
      <line x1="44" y1="100" x2="156" y2="60" stroke={MG} strokeWidth="3" strokeLinecap="round"/>
      <line x1="44" y1="100" x2="156" y2="140" stroke={MG} strokeWidth="3" strokeLinecap="round"/>
      {/* Guardrail */}
      <rect x="28" y="6" width="144" height="8" rx="2" fill={R} stroke={DK} strokeWidth="2"/>
      {/* Casters */}
      {[36, 164].map(x => (
        <g key={x}>
          <rect x={x-8} y="178" width="16" height="10" rx="2" fill={DK}/>
          <circle cx={x} cy="192" r="10" fill={BK} stroke={DK} strokeWidth="2"/>
          <circle cx={x} cy="192" r="4" fill={MG}/>
        </g>
      ))}
      {/* Outriggers */}
      <line x1="28" y1="170" x2="6" y2="185" stroke={DK} strokeWidth="4" strokeLinecap="round"/>
      <line x1="172" y1="170" x2="194" y2="185" stroke={DK} strokeWidth="4" strokeLinecap="round"/>
    </Base>
  )
}

// ── GENERIC POA / ENQUIRE ───────────────────────────────────────

export function PoaIllustration() {
  return (
    <Base>
      {/* Background shield */}
      <path d="M100 20 L166 50 L166 130 Q166 164 100 182 Q34 164 34 130 L34 50 Z"
            fill={LG} stroke={DK} strokeWidth="2.5"/>
      {/* Red band */}
      <path d="M100 28 L158 54 L158 84 L42 84 L42 54 Z" fill={R}/>
      {/* Phone icon */}
      <path d="M76 110 Q74 96 82 88 L90 88 L96 102 L88 108 Q92 116 100 122 L106 114 L120 120 L120 128 Q112 136 98 134 Q84 128 76 110 Z"
            fill={DK}/>
      {/* Question mark */}
      <text x="100" y="78" textAnchor="middle" fontFamily="Oswald, sans-serif"
            fontSize="28" fontWeight="700" fill="white">POA</text>
    </Base>
  )
}

// ── ILLUSTRATION LOOKUP MAP ─────────────────────────────────────

export const ILLUSTRATION_MAP = {
  'breaker':          BreakerIllustration,
  'breaker-large':    HeavyBreakerIllustration,
  'mixer':            MixerIllustration,
  'mixer-large':      SiteMixerIllustration,
  'poker':            PokerIllustration,
  'trowel':           TrowelIllustration,
  'screed':           ScreedIllustration,
  'grinder':          GrinderIllustration,
  'disc-cutter':      DiscCutterIllustration,
  'floor-saw':        FloorSawIllustration,
  'core-drill':       CoreDrillIllustration,
  'core-cutter':      CoreCutterIllustration,
  'tile-saw':         TileSawIllustration,
  'tile-cutter':      TileCutterIllustration,
  'block-splitter':   BlockSplitterIllustration,
  'jigsaw':           JigsawIllustration,
  'recip-saw':        RecipSawIllustration,
  'circular-saw':     CircularSawIllustration,
  'mitre-saw':        MitreSawIllustration,
  'compactor':        PlateCompactorIllustration,
  'roller':           VibratingRollerIllustration,
  'sds-drill':        SDSDrillIllustration,
  'angle-drill':      AngleDrillIllustration,
  'mag-drill':        MagDrillIllustration,
  'acro-prop':        AcroPropIllustration,
  'strongboy':        StrongboyIllustration,
  'trestle':          TrestleIllustration,
  'scaffold-board':   ScaffoldBoardIllustration,
  'chainsaw':         ChainsawIllustration,
  'lawnmower':        LawnmowerIllustration,
  'hedge-trimmer':    HedgeTrimmerIllustration,
  'rotavator':        RotavatorIllustration,
  'scaffold-tower':   ScaffoldTowerIllustration,
  'poa':              PoaIllustration,
}

export function ProductIllustration({ type }) {
  const Component = ILLUSTRATION_MAP[type] || PoaIllustration
  return <Component />
}
