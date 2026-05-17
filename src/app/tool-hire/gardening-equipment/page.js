import CategoryPage from '@/components/CategoryPage'
import { TOOL_HIRE_CATEGORIES } from '@/data/toolHireData'

const category = TOOL_HIRE_CATEGORIES.find(c => c.id === 'gardening-equipment')

export const metadata = {
  title: `${category.label}`,
  description: 'Hire lawnmowers, chainsaws, hedge trimmers, rotavators and more in Witney & West Oxfordshire.',
}

export default function GardeningEquipmentPage() {
  return <CategoryPage category={category} />
}
