import CategoryPage from '@/components/CategoryPage'
import { TOOL_HIRE_CATEGORIES } from '@/data/toolHireData'

const category = TOOL_HIRE_CATEGORIES.find(c => c.id === 'compacting-equipment')

export const metadata = {
  title: `${category.label} | Rowland Tool & Plant Hire`,
  description: 'Hire plate compactors, vibrating rollers and ride-on rollers in Witney & West Oxfordshire.',
}

export default function CompactingEquipmentPage() {
  return <CategoryPage category={category} />
}
