import CategoryPage from '@/components/CategoryPage'
import { TOOL_HIRE_CATEGORIES } from '@/data/toolHireData'

const category = TOOL_HIRE_CATEGORIES.find(c => c.id === 'gardening-equipment')

export const metadata = {
  title: 'Garden Equipment Hire Witney | Rowland Plant',
  description: 'Hire lawnmowers, chainsaws, hedge trimmers, rotavators and more in Witney & West Oxfordshire.',
  alternates: { canonical: '/tool-hire/gardening-equipment' },
}

export default function GardeningEquipmentPage() {
  return (
    <CategoryPage
      category={category}
      intro="Hire lawnmowers, rotavators, chainsaws and hedge trimmers for garden maintenance, landscaping and groundswork projects. Serving domestic and trade customers across Witney, West Oxfordshire and The Cotswolds."
    />
  )
}
