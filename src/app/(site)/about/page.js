import LogoBanner from '@/components/LogoBanner'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About Us',
  description: 'Rowland Plant Limited — plant and tool hire specialists in Witney, West Oxfordshire and The Cotswolds. HAE members with over 30 years of experience.',
  alternates: { canonical: '/about' },
}

export default function AboutUsPage() {
  return (
    <>
      <LogoBanner />

      <div className="about-page">

        {/* Hero section */}
        <section className="about-hero">
          <div className="about-hero__inner">
            <p className="about-hero__eyebrow">About Us</p>
            <h1 className="about-hero__title">Your Local Hire Specialist</h1>
            <p className="about-hero__sub">
              Serving trade and domestic customers across Witney, West Oxfordshire and The Cotswolds
              with quality plant and tool hire since the company was founded.
            </p>
          </div>
        </section>

        {/* Main content */}
        <section className="about-content">
          <div className="about-content__inner">

            {/* HAE Badge + intro */}
            <div className="about-intro">
              <div className="about-intro__text">
                <h2>Professional Hire You Can Trust</h2>
                <p>
                  We offer a large range of plant &amp; equipment to trade and domestic customers across
                  Oxfordshire and the Cotswolds. Whether you need a compact excavator for groundworks or
                  power tools for a renovation project, our experienced team is on hand to help you choose
                  the right equipment.
                </p>
                <p>
                  We specialise in safety equipment, tools, access platforms and small plant &amp; machinery
                  up to 3 tonnes. As a member of the Hire Association Europe (HAE), we also have access to
                  cross-hiring equipment of all shapes, sizes and specialities — without the need for you to
                  set up an additional account with another supplier, truly taking the hassle out of hiring.
                </p>
                <p>
                  We deliver to and collect from site at a mutually convenient time, and offer hire insurance
                  across all our equipment ranges for a small additional fee.
                </p>
                <p>
                  To find out more, fill in the form below or call our hire desk on{' '}
                  <a href="tel:+441865922611" className="about-phone-link">01865 922611</a>.
                </p>
              </div>

              <div className="about-intro__badge">
                <div className="hae-badge">
                  <div className="hae-badge__circle">
                    <span className="hae-badge__top">Member of</span>
                    <span className="hae-badge__main">HAE</span>
                    <span className="hae-badge__sub">Hire Association Europe</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key facts */}
            <div className="about-facts">
              <div className="about-fact">
                <div className="about-fact__icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3>Trade &amp; Domestic</h3>
                <p>We serve both trade professionals and domestic customers with the same level of service and quality equipment.</p>
              </div>
              <div className="about-fact">
                <div className="about-fact__icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h3>HAE Member</h3>
                <p>Full member of the Hire Association Europe — the UK's leading hire industry trade body, ensuring quality and compliance.</p>
              </div>
              <div className="about-fact">
                <div className="about-fact__icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="1" y="3" width="15" height="13" rx="2"/>
                    <path d="M16 8h4l3 5v3h-7V8z"/>
                    <circle cx="5.5" cy="18.5" r="2.5"/>
                    <circle cx="18.5" cy="18.5" r="2.5"/>
                  </svg>
                </div>
                <h3>Delivery &amp; Collection</h3>
                <p>We deliver heavy plant to your site and collect when the hire period ends — arranged at a time that suits you.</p>
              </div>
              <div className="about-fact">
                <div className="about-fact__icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <h3>Local Coverage</h3>
                <p>Based in Witney, we cover West Oxfordshire and The Cotswolds — a trusted local supplier for your projects.</p>
              </div>
            </div>

          </div>
        </section>

      </div>

      <Footer />
    </>
  )
}
