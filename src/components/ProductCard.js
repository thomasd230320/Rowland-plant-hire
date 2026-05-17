import Image from 'next/image'
import AvailabilityBadge from './AvailabilityBadge'
import AvailabilityChecker from './AvailabilityChecker'
import AddToQuoteBtn from './AddToQuoteBtn'

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
    </svg>
  )
}

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

export default function ProductCard({ title, image, altText, description, specs, pricing, downloads, availability, categoryLabel }) {
  return (
    <article className="product-card">
      <div className="product-card__header">
        <h3 className="product-card__title">{title}</h3>
        <AvailabilityBadge availability={availability} />
      </div>
      <div className="product-card__body">
        <div className="product-card__img-col">
          {image ? (
            <div className="product-card__photo-wrap">
              <Image src={image} alt={altText || title} fill sizes="240px" className="product-card__photo" />
            </div>
          ) : (
            <div className="product-card__img-placeholder" />
          )}
        </div>

        <div className="product-card__info">
          {description && <p className="product-card__desc">{description}</p>}
          {specs && specs.length > 0 && (
            <div className="product-card__specs">
              {specs.map(s => (
                <div key={s.label} className="spec-row">
                  <span className="spec-row__label">{s.label}</span>
                  <span className="spec-row__value">{s.value}</span>
                </div>
              ))}
            </div>
          )}
          {downloads && downloads.length > 0 && (
            <div className="product-card__downloads">
              {downloads.map(d => (
                <a key={d.label} href={d.href || '#'} className="download-btn" target="_blank" rel="noopener noreferrer">
                  <DownloadIcon />
                  {d.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="product-card__pricing">
          {pricing && <PricingTable rows={pricing} />}
          <div className="product-card__cta">
            <a href="mailto:Sales@Rowlandplant.co.uk" className="product-ask-link">
              Enquire by email
            </a>
            <AvailabilityChecker productTitle={title} availability={availability} />
            <AddToQuoteBtn item={{
              id: title,
              title,
              type: 'plant',
              pricing: pricing ? { day1: pricing[0]?.price, extraDay: pricing[1]?.price, week: pricing[2]?.price } : null,
              categoryLabel: categoryLabel || 'Plant Hire',
            }} />
          </div>
        </div>
      </div>
    </article>
  )
}
