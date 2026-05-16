import EnquiryForm from './EnquiryForm'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Social */}
        <div className="footer__social">
          <h4>Find Us on Facebook</h4>
          <div className="footer__fb-buttons">
            <a
              href="https://facebook.com/61580028672223"
              target="_blank"
              rel="noopener noreferrer"
              className="fb-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://rowlandplant.co.uk')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="fb-btn fb-btn--share"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
              </svg>
              Share
            </a>
          </div>
          <div style={{ marginTop: '24px', fontSize: '13px', color: '#aaa', lineHeight: '1.7' }}>
            <p style={{ fontFamily: 'Oswald, sans-serif', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px', color: '#ccc' }}>Contact</p>
            <p>📞 <a href="tel:+441865922611" style={{ color: '#ccc' }}>01865 922611</a></p>
            <p>✉ <a href="mailto:Sales@Rowlandplant.co.uk" style={{ color: '#ccc' }}>Sales@Rowlandplant.co.uk</a></p>
            <p style={{ marginTop: '8px', color: '#888' }}>Witney, West Oxfordshire &amp; The Cotswolds</p>
          </div>
        </div>

        {/* Enquiry Form */}
        <div className="footer__form">
          <h4>Contact / Enquiry</h4>
          <EnquiryForm />
        </div>
      </div>

      <div className="footer__bottom">
        <span>&copy; {new Date().getFullYear()} Rowland Plant Ltd. All rights reserved.</span>
        <span>
          <a href="https://rowlandplant.co.uk">rowlandplant.co.uk</a>
        </span>
      </div>
    </footer>
  )
}
