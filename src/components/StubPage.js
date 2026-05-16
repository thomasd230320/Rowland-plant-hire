import LogoBanner from './LogoBanner'
import SectionHeader from './SectionHeader'
import CtaButton from './CtaButton'
import Footer from './Footer'

export default function StubPage({ title, icon, emoji }) {
  return (
    <>
      <LogoBanner />
      <SectionHeader title={title} icon={icon} />
      <div className="stub-page">
        <div className="stub-page__icon">{emoji || '🔧'}</div>
        <h1 className="stub-page__title">{title}</h1>
        <p className="stub-page__text">
          Full product listing coming soon — call us to check availability.
        </p>
        <CtaButton />
      </div>
      <Footer />
    </>
  )
}
