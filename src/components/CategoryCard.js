import Link from 'next/link'

export default function CategoryCard({ title, emoji, alt, linkTo }) {
  return (
    <Link href={linkTo} className="category-card">
      <div className="category-card__header">{title}</div>
      <div className="category-card__img-placeholder">
        <span>{emoji}</span>
        <span>{alt}</span>
      </div>
    </Link>
  )
}
