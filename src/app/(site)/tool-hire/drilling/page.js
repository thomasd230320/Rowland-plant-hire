import CategoryPage from '@/components/CategoryPage'
import { TOOL_HIRE_CATEGORIES } from '@/data/toolHireData'

const category = TOOL_HIRE_CATEGORIES.find(c => c.id === 'metal-drilling')

export const metadata = {
  title: category.seo.title,
  description: category.seo.description,
  alternates: { canonical: `/tool-hire/${category.slug}` },
}

export default function DrillingPage() {
  return (
    <CategoryPage category={category} />
  )
}
