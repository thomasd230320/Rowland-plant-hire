export default function SectionHeader({ title }) {
  return (
    <div className="section-header">
      <div className="section-header__inner">
        <h2 className="section-header__title">{title}</h2>
      </div>
    </div>
  )
}
