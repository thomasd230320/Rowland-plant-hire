import CategoryPage from '@/components/CategoryPage'
import { TOOL_HIRE_CATEGORIES } from '@/data/toolHireData'

const category = TOOL_HIRE_CATEGORIES.find(c => c.id === 'wood-metal-cutting')

export const metadata = {
  title: 'Wood & Metal Cutting Tool Hire Witney | Rowland',
  description: 'Hire jigsaws, reciprocating saws, circular saws and mitre saws in Witney & West Oxfordshire.',
  alternates: { canonical: '/tool-hire/wood-metal-cutting' },
}

export default function WoodMetalCuttingPage() {
  return (
    <CategoryPage
      category={category}
      intro="Hire jigsaws, reciprocating saws, circular saws and mitre saws for carpentry, demolition and construction projects. Serving Witney, West Oxfordshire and The Cotswolds with flexible day and weekly hire rates."
    />
  )
}
