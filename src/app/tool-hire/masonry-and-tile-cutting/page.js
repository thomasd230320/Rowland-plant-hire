import CategoryPage from '@/components/CategoryPage'
import { TOOL_HIRE_CATEGORIES } from '@/data/toolHireData'

const category = TOOL_HIRE_CATEGORIES.find(c => c.id === 'masonry-diamond-tile')

export const metadata = {
  title: 'Masonry & Tile Cutter Hire Witney | Rowland',
  description: 'Hire angle grinders, disc cutters, diamond core drills, tile saws and block splitters in Witney & West Oxfordshire.',
  alternates: { canonical: '/tool-hire/masonry-and-tile-cutting' },
}

export default function MasonryTileCuttingPage() {
  return (
    <CategoryPage
      category={category}
      intro="Hire angle grinders, disc cutters, tile saws and block splitters for brickwork, stonework and tiling projects in Witney and across West Oxfordshire. All equipment is 110v for site safety compliance."
    />
  )
}
