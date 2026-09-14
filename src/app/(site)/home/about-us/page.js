import LogoBanner from '@/components/LogoBanner'
import SectionHeader from '@/components/SectionHeader'
import CtaButton from '@/components/CtaButton'
import Footer from '@/components/Footer'

export const metadata = { title: 'About Us' }

export default function AboutUsPage() {
  return (
    <>
      <LogoBanner />
      <SectionHeader title="About Us" icon="ℹ️" />

      <div className="about-content">
        {/* HAE Badge */}
        <div className="hae-badge">
          <div className="hae-badge__circle">
            <span className="hae-badge__top">Member of</span>
            <span className="hae-badge__main">HAE</span>
            <span className="hae-badge__sub">Hire Association Europe</span>
          </div>
        </div>

        <p>
          We offer a large range of plant &amp; equipment to trade and domestic customers across
          Oxfordshire and the Cotswolds.
        </p>
        <p>
          We specialise in safety equipment, tools, access platforms and small plant &amp; machinery
          up to 3 tonnes. As a member of the Hire Association Europe (HAE), we also have access to
          cross hiring equipment of all shapes, sizes and specialities, without the need for you to
          set up an additional account with another supplier, truly taking the hassle out of hiring!
        </p>
        <p>We also deliver to and collect from site at a mutually convenient time.</p>
        <p>
          We offer hire insurance across all our ranges of equipment for a small additional fee!
        </p>
        <p>
          To find out more, fill in the form below or call our hire desk on{' '}
          <a href="tel:+441865922611" style={{ color: 'var(--red)', fontWeight: 700 }}>01865 922611</a>.
        </p>
        <p>We are currently updating our website to include our range of tools and plant!</p>
      </div>

      <CtaButton />
      <Footer />
    </>
  )
}
