import CategoryPage from '@/components/CategoryPage'
import { TOOL_HIRE_CATEGORIES } from '@/data/toolHireData'

const category = TOOL_HIRE_CATEGORIES.find(c => c.id === 'access-scaffold-towers')

export const metadata = {
  title: 'Scaffold Tower Hire Witney | Rowland Plant Hire',
  description: 'Hire single and double width aluminium scaffold towers in Witney & West Oxfordshire. Working heights from 2.2m to 12.2m.',
  alternates: { canonical: '/tool-hire/access-scaffold-towers' },
}

export default function AccessScaffoldTowersPage() {
  return (
    <CategoryPage
      category={category}
      intro="Hire lightweight aluminium scaffold towers in single and double width configurations, with working heights from 2.2m to 12.2m. Ideal for painting, plastering, roofing and maintenance work across Witney and West Oxfordshire."
    />
  )
}
