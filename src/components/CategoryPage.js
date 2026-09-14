import Link from 'next/link'
import LogoBanner from '@/components/LogoBanner'
import SectionHeader from '@/components/SectionHeader'
import ToolProductCard from '@/components/ToolProductCard'
import HireHopBanner from '@/components/HireHopBanner'
import Footer from '@/components/Footer'
import { TOOL_AVAILABILITY } from '@/data/availability'

export default function CategoryPage({ category, intro }) {
  // Pages normally take the intro from the CMS; the derived diamond-core
  // page passes its own.
  const introText = intro ?? category.intro
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rowlandplant.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Tool Hire', item: 'https://rowlandplant.co.uk/tool-hire' },
      { '@type': 'ListItem', position: 3, name: category.label, item: `https://rowlandplant.co.uk/tool-hire/${category.slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <LogoBanner />
      <SectionHeader title={category.label} />
      <HireHopBanner />

      <div className="cat-page-wrapper">
        <Link href="/tool-hire" className="cat-page-back">
          ← Back to all Tool Hire categories
        </Link>

        {introText && <p className="cat-page-intro">{introText}</p>}

        {category.categoryNote && (
          <p className="cat-page-note">{category.categoryNote}</p>
        )}

        <div className="cat-page-products">
          {category.products.map(product => (
            <ToolProductCard
              key={product.id}
              {...product}
              availability={TOOL_AVAILABILITY[product.id]}
              categoryLabel={category.label}
            />
          ))}
        </div>

        <div className="th-disclaimer" role="note">
          <p>
            PLEASE NOTE THAT SPECIFICATIONS / DIMENSIONS MAY VARY SLIGHTLY BETWEEN MANUFACTURERS.
            IF THESE ARE CRITICAL, PLEASE OBTAIN CONFIRMATION OF EXACT SPECIFICATIONS BEFORE HIRE
            COMMENCES. ALL PRICES ARE SUBJECT TO VAT AT THE CURRENT RATE OF 20%.
          </p>
        </div>
      </div>

      <Footer />
    </>
  )
}
