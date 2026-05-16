import LogoBanner from '@/components/LogoBanner'
import SectionHeader from '@/components/SectionHeader'
import CategoryCard from '@/components/CategoryCard'
import Footer from '@/components/Footer'

export const metadata = { title: 'Tool Hire' }

const CATEGORIES = [
  { title: 'Concrete Breaking', emoji: '🔨', alt: 'Concrete Breaker', linkTo: '/tool-hire/concrete-breaking' },
  { title: 'Concrete Mixing & Laying', emoji: '🪣', alt: 'Cement Mixer', linkTo: '/tool-hire/concrete-mixing-laying' },
  { title: 'Compacting Equipment', emoji: '🏗️', alt: 'Plate Compactor', linkTo: '/tool-hire/compacting-equipment' },
  { title: 'Masonry & Tile Cutting', emoji: '🪚', alt: 'Disc Cutter', linkTo: '/tool-hire/masonry-and-tile-cutting' },
  { title: 'Wood & Metal Cutting', emoji: '⚙️', alt: 'Circular Saw', linkTo: '/tool-hire/wood-metal-cutting' },
  { title: 'Rug Doctor / Carpet Cleaning', emoji: '🧹', alt: 'Carpet Cleaner', linkTo: '/tool-hire/gardening-equipment' },
  { title: 'Access Scaffold Towers', emoji: '🪜', alt: 'Scaffold Tower', linkTo: '/tool-hire/access-scaffold-towers' },
  { title: 'Ladders & Staging', emoji: '🪜', alt: 'Ladder', linkTo: '/tool-hire/acro-props-strongboys-trestles-scaffold' },
  { title: 'Props, Strongboys, Boards & Trestles', emoji: '🪵', alt: 'Props & Boards', linkTo: '/tool-hire/acro-props-strongboys-trestles-scaffold' },
  { title: 'Diamond Core Drill & Core Cutters', emoji: '💎', alt: 'Core Drill', linkTo: '/tool-hire/diamond-core-drill-core-cutters' },
  { title: 'Metal & Masonry Drilling', emoji: '🔩', alt: 'Rotary Hammer', linkTo: '/tool-hire/drilling' },
  { title: 'Gardening Equipment', emoji: '🌿', alt: 'Garden Cultivator', linkTo: '/tool-hire/gardening-equipment' },
]

export default function ToolHirePage() {
  return (
    <>
      <LogoBanner />
      <SectionHeader title="Tool Hire" icon="🔧" />
      <div className="category-grid">
        {CATEGORIES.map(c => (
          <CategoryCard key={c.title} {...c} />
        ))}
      </div>
      <Footer />
    </>
  )
}
