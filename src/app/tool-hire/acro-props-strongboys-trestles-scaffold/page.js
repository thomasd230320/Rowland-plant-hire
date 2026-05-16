import CategoryPage from '@/components/CategoryPage'
import { TOOL_HIRE_CATEGORIES } from '@/data/toolHireData'

const category = TOOL_HIRE_CATEGORIES.find(c => c.id === 'acro-props-trestles-boards')

export const metadata = {
  title: `${category.label} | Rowland Tool & Plant Hire`,
  description: 'Hire acro props, strongboys, builders trestles and scaffold boards in Witney & West Oxfordshire.',
}

export default function AcroPropsTrestlesPage() {
  return <CategoryPage category={category} />
}
