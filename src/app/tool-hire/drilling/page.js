import CategoryPage from '@/components/CategoryPage'
import { TOOL_HIRE_CATEGORIES } from '@/data/toolHireData'

const category = TOOL_HIRE_CATEGORIES.find(c => c.id === 'metal-drilling')

export const metadata = {
  title: 'Drill Hire Witney | Rowland Tool & Plant Hire',
  description: 'Hire SDS hammer drills, angle-head drills and magnetic core drills in Witney & West Oxfordshire.',
  alternates: { canonical: '/tool-hire/drilling' },
}

export default function DrillingPage() {
  return (
    <CategoryPage
      category={category}
      intro="Hire SDS hammer drills, angle-head drills and magnetic core drills for construction and fabrication projects in Witney, West Oxfordshire and The Cotswolds. Available on flexible day, weekend and weekly rates."
    />
  )
}
