import LogoBanner from '@/components/LogoBanner'
import CtaButton from '@/components/CtaButton'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Rowland Tool & Plant Hire | Witney, West Oxfordshire & The Cotswolds',
}

export default function HomePage() {
  return (
    <>
      <LogoBanner />
      <div className="home-hero">
        <h1>Serving Witney, West Oxfordshire &amp; The Cotswolds.</h1>
        <h2>
          Please fill in the enquiry form at the bottom of the page or call our hire desk on{' '}
          <a href="tel:+441865922611" style={{ color: 'var(--red)' }}>01865 922611</a>
        </h2>
        <h3>We are currently updating our website to include our range of tools and plant.</h3>
      </div>
      <CtaButton />
      <Footer />
    </>
  )
}
