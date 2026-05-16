import LogoBanner from '@/components/LogoBanner'
import SectionHeader from '@/components/SectionHeader'
import Footer from '@/components/Footer'
import ToolProductCard from '@/components/ToolProductCard'
import ToolHireSidebar from '@/components/ToolHireSidebar'
import { TOOL_HIRE_CATEGORIES } from '@/data/toolHireData'

export const metadata = {
  title: 'Tool Hire | Rowland Tool & Plant Hire',
  description: 'Hire tools in Witney, West Oxfordshire & The Cotswolds. Breakers, mixers, saws, drills, compactors, scaffold towers and more.',
}

const sidebarCategories = TOOL_HIRE_CATEGORIES.map(({ id, label, icon }) => ({ id, label, icon }))

export default function ToolHirePage() {
  return (
    <>
      <LogoBanner />
      <SectionHeader title="Tool Hire" icon="🔧" />

      <div className="th-layout">
        <ToolHireSidebar categories={sidebarCategories} />

        <div className="th-content">
          {TOOL_HIRE_CATEGORIES.map(category => (
            <section
              key={category.id}
              id={category.id}
              className="th-section"
              aria-labelledby={`${category.id}-heading`}
            >
              <h2 id={`${category.id}-heading`} className="th-section__header">
                <span aria-hidden="true">{category.icon}</span>
                {category.label}
              </h2>

              {category.categoryNote && (
                <p className="th-section__note">{category.categoryNote}</p>
              )}

              {category.products.map(product => (
                <ToolProductCard key={product.id} {...product} />
              ))}
            </section>
          ))}

          <div className="th-disclaimer" role="note">
            <p>
              PLEASE NOTE THAT SPECIFICATIONS / DIMENSIONS MAY VARY SLIGHTLY BETWEEN MANUFACTURERS.
              IF THESE ARE CRITICAL, PLEASE OBTAIN CONFIRMATION OF EXACT SPECIFICATIONS BEFORE HIRE
              COMMENCES. ALL PRICES ARE SUBJECT TO VAT AT THE CURRENT RATE OF 20%.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
