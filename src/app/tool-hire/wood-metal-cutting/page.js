import CategoryPage from '@/components/CategoryPage'
import { TOOL_HIRE_CATEGORIES } from '@/data/toolHireData'

const category = TOOL_HIRE_CATEGORIES.find(c => c.id === 'wood-metal-cutting')

export const metadata = {
  title: `${category.label}`,
  description: 'Hire jigsaws, reciprocating saws, circular saws and mitre saws in Witney & West Oxfordshire.',
}

export default function WoodMetalCuttingPage() {
  return <CategoryPage category={category} />
}
