import Image from 'next/image'

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  )
}

function PricingTable({ pricing, pricingRows }) {
  if (pricingRows) {
    return (
      <table className="th-price-table">
        <thead>
          <tr>
            <th className="th-price-table__config-head">Size / Config</th>
            <th>1 Day</th>
            <th>Extra Day</th>
            <th>Week</th>
            <th>Weekend</th>
          </tr>
        </thead>
        <tbody>
          {pricingRows.map((row, i) => (
            <tr key={i}>
              <td className="th-price-table__config">{row.size}</td>
              <td>{row.day1}</td>
              <td>{row.extraDay}</td>
              <td>{row.week}</td>
              <td>{row.weekend}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

  return (
    <table className="th-price-table">
      <thead>
        <tr>
          <th>1 Day</th>
          <th>Extra Day</th>
          <th>Week</th>
          <th>Weekend</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{pricing?.day1 ?? 'POA'}</td>
          <td>{pricing?.extraDay ?? 'POA'}</td>
          <td>{pricing?.week ?? 'POA'}</td>
          <td>{pricing?.weekend ?? 'POA'}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default function ToolProductCard({ title, image, specs, note, pricing, pricingRows }) {
  return (
    <article className="th-card">
      <div className="th-card__body">
        <div className="th-card__img-col">
          <div className="th-card__illustration">
            {image && (
              <div className="th-card__photo-wrap">
                <Image src={image} alt={title} fill sizes="160px" className="th-card__photo" />
              </div>
            )}
          </div>
        </div>

        <div className="th-card__middle-col">
          <div className="th-card__title-bar">{title}</div>
          {note && <p className="th-card__note">{note}</p>}
          <ul className="th-card__specs">
            {specs.map((spec, i) => (
              <li key={i}>{spec}</li>
            ))}
          </ul>
        </div>

        <div className="th-card__pricing-col">
          <div className="th-card__pricing-header">Price From</div>
          <PricingTable pricing={pricing} pricingRows={pricingRows} />
        </div>
      </div>

      <div className="th-card__actions">
        <a href="tel:+441865922611" className="th-card__call-btn">
          <PhoneIcon />
          Call us: 01865 922611
        </a>
        <a href="mailto:Sales@Rowlandplant.co.uk" className="th-card__enquiry-link">
          <MailIcon />
          Enquire about this item
        </a>
      </div>
    </article>
  )
}
