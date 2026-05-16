import CategoryPage from '@/components/CategoryPage'
import { TOOL_HIRE_CATEGORIES } from '@/data/toolHireData'

const category = TOOL_HIRE_CATEGORIES.find(c => c.id === 'concrete-mixing-laying')

export const metadata = {
  title: `${category.label} | Rowland Tool & Plant Hire`,
  description: 'Hire cement mixers, vibrating pokers, power trowels and screeds in Witney & West Oxfordshire.',
}

export default function ConcreteMixingPage() {
  return <CategoryPage category={category} />
}
