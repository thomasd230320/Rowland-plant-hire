import LogoBanner from '@/components/LogoBanner'
import SectionHeader from '@/components/SectionHeader'
import CategoryCard from '@/components/CategoryCard'
import CtaButton from '@/components/CtaButton'
import Footer from '@/components/Footer'

export const metadata = { title: 'Access Scaffold Towers' }

export default function AccessScaffoldPage() {
  return (
    <>
      <LogoBanner />
      <SectionHeader title="Access Scaffold Towers" icon="🪜" />
      <div className="category-grid" style={{ maxWidth: '760px' }}>
        <CategoryCard
          title="Double Width Scaffold Tower"
          emoji="🪜"
          alt="Double Width"
          linkTo="/tool-hire/access-scaffold-towers/double-width"
        />
        <CategoryCard
          title="Single Width Scaffold Tower"
          emoji="🪜"
          alt="Single Width"
          linkTo="/tool-hire/access-scaffold-towers/single-width"
        />
      </div>
      <CtaButton />
      <Footer />
    </>
  )
}
