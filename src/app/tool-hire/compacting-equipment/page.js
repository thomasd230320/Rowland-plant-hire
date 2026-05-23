import CategoryPage from '@/components/CategoryPage'
import { TOOL_HIRE_CATEGORIES } from '@/data/toolHireData'

const category = TOOL_HIRE_CATEGORIES.find(c => c.id === 'compacting-equipment')

export const metadata = {
  title: 'Compactor Hire Witney | Rowland Plant Hire',
  description: 'Hire plate compactors, vibrating rollers and ride-on rollers in Witney & West Oxfordshire.',
  alternates: { canonical: '/tool-hire/compacting-equipment' },
}

export default function CompactingEquipmentPage() {
  return (
    <CategoryPage
      category={category}
      intro="We hire plate compactors, vibrating rollers and ride-on rollers for compacting sub-bases, gravel, tarmac and soil across Witney and West Oxfordshire. Essential for driveways, paths and groundworks projects."
    />
  )
}
