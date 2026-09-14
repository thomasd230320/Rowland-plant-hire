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
  title: 'Diamond Core Drill Hire Witney | Rowland Plant',
  description: 'Hire diamond core drills and core cutters in Witney & West Oxfordshire. Sizes from 22mm to 152mm.',
  alternates: { canonical: '/tool-hire/diamond-core-drill-core-cutters' },
}

export default function DiamondCorePage() {
  return (
    <CategoryPage
      category={category}
      intro="Hire diamond core drills for clean, precise holes in concrete, brick and blockwork. Available in sizes from 22mm to 152mm — ideal for plumbing, electrical and HVAC installations across Witney and West Oxfordshire."
    />
  )
}
