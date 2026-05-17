import CategoryPage from '@/components/CategoryPage'
import { TOOL_HIRE_CATEGORIES } from '@/data/toolHireData'

const category = TOOL_HIRE_CATEGORIES.find(c => c.id === 'access-scaffold-towers')

export const metadata = {
  title: `${category.label}`,
  description: 'Hire single and double width aluminium scaffold towers in Witney & West Oxfordshire. Working heights from 2.2m to 12.2m.',
}

export default function AccessScaffoldTowersPage() {
  return <CategoryPage category={category} />
}
