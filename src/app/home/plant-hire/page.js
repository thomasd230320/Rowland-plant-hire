import LogoBanner from '@/components/LogoBanner'
import SectionHeader from '@/components/SectionHeader'
import CategoryCard from '@/components/CategoryCard'
import CtaButton from '@/components/CtaButton'
import Footer from '@/components/Footer'

export const metadata = { title: 'Plant Hire' }

const CATEGORIES = [
  {
    title: 'Mini Excavators',
    emoji: '⛏️',
    alt: 'Mini Digger',
    linkTo: '/home/plant-hire/mini-excavators-diggers',
  },
  {
    title: 'Special Offers',
    emoji: '🏷️',
    alt: 'Special Offers',
    linkTo: '/home/plant-hire',
  },
  {
    title: 'Skip Loaders / Dumpers',
    emoji: '🚛',
    alt: 'Skip Loader / Dumper',
    linkTo: '/home/plant-hire',
  },
]

export default function PlantHirePage() {
  return (
    <>
      <LogoBanner />
      <SectionHeader title="Plant Hire" icon="☰" />
      <div className="category-grid">
        {CATEGORIES.map(c => (
          <CategoryCard key={c.title} {...c} />
        ))}
      </div>
      <CtaButton />
      <CtaButton type="email" />
      <Footer />
    </>
  )
}
