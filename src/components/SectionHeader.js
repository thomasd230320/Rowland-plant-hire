export default function SectionHeader({ title, icon }) {
  return (
    <div className="section-header">
      <div className="section-header__inner">
        {icon && <span className="section-header__icon">{icon}</span>}
        <h2 className="section-header__title">{title}</h2>
      </div>
    </div>
  )
}
