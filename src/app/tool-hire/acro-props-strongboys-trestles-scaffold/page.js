import CategoryPage from '@/components/CategoryPage'
import { TOOL_HIRE_CATEGORIES } from '@/data/toolHireData'

const category = TOOL_HIRE_CATEGORIES.find(c => c.id === 'acro-props-trestles-boards')

export const metadata = {
  title: 'Acro Prop & Trestle Hire Witney | Rowland Plant',
  description: 'Hire acro props, strongboys, builders trestles and scaffold boards in Witney & West Oxfordshire.',
  alternates: { canonical: '/tool-hire/acro-props-strongboys-trestles-scaffold' },
}

export default function AcroPropsTrestlesPage() {
  return (
    <CategoryPage
      category={category}
      intro="Hire acro props, strongboys, builders trestles and scaffold boards for structural support and working-at-height tasks. Available for short and long-term hire across Witney, West Oxfordshire and The Cotswolds."
    />
  )
}
