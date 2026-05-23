import CategoryPage from '@/components/CategoryPage'
import { TOOL_HIRE_CATEGORIES } from '@/data/toolHireData'

const category = TOOL_HIRE_CATEGORIES.find(c => c.id === 'concrete-mixing-laying')

export const metadata = {
  title: 'Concrete Mixer Hire Witney | Rowland Plant Hire',
  description: 'Hire cement mixers, vibrating pokers, power trowels and screeds in Witney & West Oxfordshire.',
  alternates: { canonical: '/tool-hire/concrete-mixing-laying' },
}

export default function ConcreteMixingPage() {
  return (
    <CategoryPage
      category={category}
      intro="From cement mixers to power trowels and vibrating pokers, we have everything you need for concrete mixing and laying projects across Witney and West Oxfordshire. Available for day, weekend and weekly hire."
    />
  )
}
