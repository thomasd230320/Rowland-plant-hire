import CtaButton from './CtaButton'

function PricingTable({ rows }) {
  return (
    <>
      <div className="pricing-header">Price From</div>
      <table className="pricing-table">
        <thead>
          <tr>
            <th>Period</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.period}>
              <td>{r.period}</td>
              <td>{r.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default function ProductCard({ title, emoji, altText, description, specs, pricing, downloads }) {
  return (
    <div className="product-card">
      <div className="product-card__title-bar">{title}</div>
      <div className="product-card__body">
        {/* Image */}
        <div className="product-card__img-col">
          <div className="product-card__img-placeholder">
            <span>{emoji || '🔧'}</span>
            <span>{altText || title}</span>
          </div>
        </div>

        {/* Description + Specs */}
        <div className="product-card__info">
          {description && <p className="product-card__desc">{description}</p>}
          {specs && specs.length > 0 && (
            <div className="product-card__specs">
              {specs.map(s => (
                <div key={s.label} className="spec-row">
                  <span className="spec-row__label">{s.label}:</span>
                  <span className="spec-row__value">{s.value}</span>
                </div>
              ))}
            </div>
          )}
          {downloads && downloads.length > 0 && (
            <div className="product-card__downloads">
              {downloads.map(d => (
                <a key={d.label} href={d.href || '#'} className="download-btn" target="_blank" rel="noopener noreferrer">
                  ⬇ {d.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Pricing */}
        <div className="product-card__pricing">
          {pricing && <PricingTable rows={pricing} />}
          <div className="product-card__cta">
            <a href="tel:+441865922611" className="product-cta-btn">
              📞 Call Us On 01865 – 922611
            </a>
            <a href="mailto:Sales@Rowlandplant.co.uk" className="product-ask-link">
              Click to ask us a question about this product
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
