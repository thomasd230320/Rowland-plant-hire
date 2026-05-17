import CategoryPage from '@/components/CategoryPage'
import { TOOL_HIRE_CATEGORIES } from '@/data/toolHireData'

const category = TOOL_HIRE_CATEGORIES.find(c => c.id === 'concrete-breaking')

export const metadata = {
  title: `${category.label}`,
  description: 'Hire concrete breakers in Witney & West Oxfordshire. Light, medium and heavy duty options from 5kg to 27kg.',
}

export default function ConcreteBreakingPage() {
  return <CategoryPage category={category} />
}
