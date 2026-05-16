import Link from 'next/link'
import LogoBanner from '@/components/LogoBanner'
import SectionHeader from '@/components/SectionHeader'
import Footer from '@/components/Footer'
import { TOOL_HIRE_CATEGORIES } from '@/data/toolHireData'

export const metadata = {
  title: 'Tool Hire | Rowland Tool & Plant Hire',
  description: 'Hire tools in Witney, West Oxfordshire & The Cotswolds. Breakers, mixers, saws, drills, compactors, scaffold towers and more.',
}

export default function ToolHirePage() {
  return (
    <>
      <LogoBanner />
      <SectionHeader title="Tool Hire" icon="🔧" />

      <div className="th-landing">
        <p className="th-landing__intro">
          Browse our full range of hire equipment. Click a category to see all available machines,
          specifications and pricing.
        </p>
        <div className="th-landing__grid">
          {TOOL_HIRE_CATEGORIES.map(cat => (
            <Link key={cat.id} href={`/tool-hire/${cat.slug}`} className="th-cat-card">
              <span className="th-cat-card__icon" aria-hidden="true">{cat.icon}</span>
              <span className="th-cat-card__label">{cat.label}</span>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </>
  )
}
