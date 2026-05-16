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

export default function ToolProductCard({ title, emoji, specs, note, pricing, pricingRows }) {
  return (
    <article className="th-card">
      <div className="th-card__body">
        <div className="th-card__img-col">
          <div className="th-card__img-placeholder" role="img" aria-label={title}>
            <span aria-hidden="true">{emoji || '🔧'}</span>
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
          📞 Call us on 01865 – 922611
        </a>
        <a href="mailto:Sales@Rowlandplant.co.uk" className="th-card__enquiry-link">
          Click link to ask us a question about this product
        </a>
      </div>
    </article>
  )
}
