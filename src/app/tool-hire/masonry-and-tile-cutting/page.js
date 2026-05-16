import CategoryPage from '@/components/CategoryPage'
import { TOOL_HIRE_CATEGORIES } from '@/data/toolHireData'

const category = TOOL_HIRE_CATEGORIES.find(c => c.id === 'masonry-diamond-tile')

export const metadata = {
  title: `${category.label} | Rowland Tool & Plant Hire`,
  description: 'Hire angle grinders, disc cutters, diamond core drills, tile saws and block splitters in Witney & West Oxfordshire.',
}

export default function MasonryTileCuttingPage() {
  return <CategoryPage category={category} />
}
