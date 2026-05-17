import CategoryPage from '@/components/CategoryPage'
import { TOOL_HIRE_CATEGORIES } from '@/data/toolHireData'

const masonry = TOOL_HIRE_CATEGORIES.find(c => c.id === 'masonry-diamond-tile')

const category = {
  ...masonry,
  label: 'Diamond Core Drill & Core Cutters',
  icon: '💎',
  products: masonry.products.filter(p => p.id.startsWith('diamond')),
}

export const metadata = {
  title: 'Diamond Core Drill & Core Cutters',
  description: 'Hire diamond core drills and core cutters in Witney & West Oxfordshire. Sizes from 22mm to 152mm.',
}

export default function DiamondCorePage() {
  return <CategoryPage category={category} />
}
