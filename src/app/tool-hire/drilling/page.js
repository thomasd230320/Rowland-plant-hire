import CategoryPage from '@/components/CategoryPage'
import { TOOL_HIRE_CATEGORIES } from '@/data/toolHireData'

const category = TOOL_HIRE_CATEGORIES.find(c => c.id === 'metal-drilling')

export const metadata = {
  title: `${category.label}`,
  description: 'Hire SDS hammer drills, angle-head drills and magnetic core drills in Witney & West Oxfordshire.',
}

export default function DrillingPage() {
  return <CategoryPage category={category} />
}
