import EnquiryForm from './EnquiryForm'

export default function Footer() {
  return (
    <footer className="footer" id="enquiry">
      <div className="footer__inner">
        {/* Left: brand + contact + social */}
        <div className="footer__social">
          <div style={{ marginBottom: '24px' }}>
            <p style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '20px', textTransform: 'uppercase', letterSpacing: '2px', color: 'white', marginBottom: '4px' }}>
              Rowland Tool &amp; Plant Hire
            </p>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', fontFamily: 'Oswald, sans-serif', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Witney, West Oxfordshire &amp; The Cotswolds
            </p>
          </div>

          {/* Contact details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
            <a
              href="tel:+441865922611"
              style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white', textDecoration: 'none', fontFamily: 'Oswald, sans-serif', fontSize: '18px', fontWeight: 700 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              01865 922611
            </a>
            <a
              href="mailto:Sales@Rowlandplant.co.uk"
              style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontFamily: 'Oswald, sans-serif', fontSize: '14px' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Sales@Rowlandplant.co.uk
            </a>
          </div>

          <h4>Find Us on Facebook</h4>
          <div className="footer__fb-buttons">
            <a
              href="https://facebook.com/61580028672223"
              target="_blank"
              rel="noopener noreferrer"
              className="fb-btn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Find us on Facebook
            </a>
          </div>
        </div>

        {/* Right: enquiry form */}
        <div className="footer__form">
          <h4>Quick Enquiry</h4>
          <EnquiryForm />
        </div>
      </div>

      <div className="footer__bottom">
        <span>&copy; {new Date().getFullYear()} Rowland Plant Ltd. All rights reserved.</span>
        <a href="https://rowlandplant.co.uk">rowlandplant.co.uk</a>
      </div>
    </footer>
  )
}
