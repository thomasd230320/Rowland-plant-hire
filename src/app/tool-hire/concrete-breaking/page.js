import CategoryPage from '@/components/CategoryPage'
import { TOOL_HIRE_CATEGORIES } from '@/data/toolHireData'

const category = TOOL_HIRE_CATEGORIES.find(c => c.id === 'concrete-breaking')

export const metadata = {
  title: 'Concrete Breaker Hire Witney | Rowland Plant',
  description: 'Hire concrete breakers in Witney & West Oxfordshire. Light, medium and heavy duty options from 5kg to 27kg.',
  alternates: { canonical: '/tool-hire/concrete-breaking' },
}

export default function ConcreteBreakingPage() {
  return (
    <CategoryPage
      category={category}
      intro="We hire light, medium and heavy duty concrete breakers to trade and domestic customers across Witney, West Oxfordshire and The Cotswolds. Ideal for breaking up concrete slabs, foundations, block paving and masonry."
    />
  )
}
