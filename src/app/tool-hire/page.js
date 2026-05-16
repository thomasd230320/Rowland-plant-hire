import Link from 'next/link'
import LogoBanner from '@/components/LogoBanner'
import SectionHeader from '@/components/SectionHeader'
import Footer from '@/components/Footer'
import { TOOL_HIRE_CATEGORIES } from '@/data/toolHireData'

export const metadata = {
  title: 'Tool Hire | Rowland Tool & Plant Hire',
  description: 'Hire tools in Witney, West Oxfordshire & The Cotswolds. Breakers, mixers, saws, drills, compactors, scaffold towers and more.',
}

function BreakerIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect x="17" y="4" width="10" height="22" rx="2" fill="#CC0000"/>
      <rect x="19" y="26" width="6" height="10" rx="1" fill="#424242"/>
      <polygon points="22,36 18,44 26,44" fill="#CC0000"/>
    </svg>
  )
}

function MixerIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <ellipse cx="22" cy="20" rx="14" ry="16" fill="#CC0000"/>
      <ellipse cx="22" cy="20" rx="9" ry="11" fill="#9E9E9E"/>
      <rect x="20" y="36" width="4" height="6" rx="1" fill="#424242"/>
      <rect x="6" y="17" width="4" height="8" rx="1" fill="#424242"/>
    </svg>
  )
}

function MasonryIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <circle cx="22" cy="22" r="18" fill="#424242"/>
      <circle cx="22" cy="22" r="14" fill="#9E9E9E"/>
      <circle cx="22" cy="22" r="5" fill="#CC0000"/>
      <line x1="22" y1="4" x2="22" y2="40" stroke="#CC0000" strokeWidth="2"/>
      <line x1="4" y1="22" x2="40" y2="22" stroke="#CC0000" strokeWidth="2"/>
    </svg>
  )
}

function SawIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect x="4" y="14" width="28" height="16" rx="3" fill="#424242"/>
      <rect x="8" y="18" width="20" height="8" rx="2" fill="#9E9E9E"/>
      <rect x="32" y="10" width="8" height="24" rx="2" fill="#CC0000"/>
      <circle cx="36" cy="22" r="4" fill="#424242"/>
    </svg>
  )
}

function CompactorIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect x="14" y="4" width="16" height="20" rx="2" fill="#CC0000"/>
      <rect x="10" y="24" width="24" height="8" rx="2" fill="#424242"/>
      <rect x="8" y="32" width="28" height="8" rx="2" fill="#9E9E9E"/>
    </svg>
  )
}

function DrillIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect x="4" y="17" width="24" height="10" rx="3" fill="#424242"/>
      <rect x="28" y="20" width="12" height="4" rx="1" fill="#CC0000"/>
      <circle cx="14" cy="22" r="5" fill="#9E9E9E"/>
      <rect x="14" y="10" width="4" height="12" rx="1" fill="#CC0000" transform="rotate(15 14 22)"/>
    </svg>
  )
}

function PropIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect x="20" y="4" width="4" height="36" rx="2" fill="#424242"/>
      <rect x="10" y="4" width="24" height="4" rx="2" fill="#CC0000"/>
      <rect x="10" y="36" width="24" height="4" rx="2" fill="#CC0000"/>
      <rect x="18" y="18" width="8" height="8" rx="1" fill="#9E9E9E"/>
    </svg>
  )
}

function GardenIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <ellipse cx="22" cy="14" rx="12" ry="10" fill="#CC0000"/>
      <path d="M16 10 Q22 4 28 10 Q22 20 16 10Z" fill="#9E9E9E"/>
      <rect x="20" y="24" width="4" height="16" rx="2" fill="#424242"/>
      <rect x="10" y="36" width="24" height="4" rx="2" fill="#424242"/>
    </svg>
  )
}

function TowerIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect x="12" y="4" width="4" height="36" rx="1" fill="#424242"/>
      <rect x="28" y="4" width="4" height="36" rx="1" fill="#424242"/>
      <rect x="12" y="6" width="20" height="3" rx="1" fill="#CC0000"/>
      <rect x="12" y="16" width="20" height="3" rx="1" fill="#CC0000"/>
      <rect x="12" y="26" width="20" height="3" rx="1" fill="#CC0000"/>
      <rect x="12" y="36" width="20" height="3" rx="1" fill="#CC0000"/>
      <rect x="6" y="37" width="32" height="4" rx="1" fill="#9E9E9E"/>
    </svg>
  )
}

const CATEGORY_ICONS = {
  'concrete-breaking': BreakerIcon,
  'concrete-mixing-laying': MixerIcon,
  'masonry-diamond-tile': MasonryIcon,
  'wood-metal-cutting': SawIcon,
  'compacting-equipment': CompactorIcon,
  'metal-drilling': DrillIcon,
  'acro-props-trestles-boards': PropIcon,
  'gardening-equipment': GardenIcon,
  'access-scaffold-towers': TowerIcon,
}

export default function ToolHirePage() {
  return (
    <>
      <LogoBanner />
      <SectionHeader title="Tool Hire" />

      <div className="th-landing">
        <p className="th-landing__intro">
          Browse our full range of hire equipment. Click a category to see all available machines,
          specifications and pricing.
        </p>
        <div className="th-landing__grid">
          {TOOL_HIRE_CATEGORIES.map(cat => {
            const Icon = CATEGORY_ICONS[cat.id]
            return (
              <Link key={cat.id} href={`/tool-hire/${cat.slug}`} className="th-cat-card">
                <span className="th-cat-card__icon">
                  {Icon && <Icon />}
                </span>
                <span className="th-cat-card__label">{cat.label}</span>
              </Link>
            )
          })}
        </div>
      </div>

      <Footer />
    </>
  )
}
