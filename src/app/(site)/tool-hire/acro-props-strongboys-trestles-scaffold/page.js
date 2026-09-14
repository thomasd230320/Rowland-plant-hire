import CategoryPage from '@/components/CategoryPage'
import { TOOL_HIRE_CATEGORIES } from '@/data/toolHireData'

const category = TOOL_HIRE_CATEGORIES.find(c => c.id === 'acro-props-trestles-boards')

export const metadata = {
  title: category.seo.title,
  description: category.seo.description,
  alternates: { canonical: `/tool-hire/${category.slug}` },
}

export default function AcroPropsTrestlesPage() {
  return (
    <CategoryPage category={category} />
  )
}
