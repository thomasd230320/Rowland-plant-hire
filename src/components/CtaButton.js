export default function CtaButton({ type = 'phone' }) {
  if (type === 'email') {
    return (
      <div className="cta-wrap">
        <a href="mailto:Sales@Rowlandplant.co.uk" className="cta-btn cta-btn--email">
          ✉&nbsp; Email: Sales@Rowlandplant.co.uk
        </a>
      </div>
    )
  }
  return (
    <div className="cta-wrap">
      <a href="tel:+441865922611" className="cta-btn">
        📞&nbsp; Call Us On 01865 – 922611
      </a>
    </div>
  )
}
