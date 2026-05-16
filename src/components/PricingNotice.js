export default function PricingNotice({ extra }) {
  return (
    <div className="pricing-notice">
      {extra && <p><strong>{extra}</strong></p>}
      <p>All Prices are Subject to VAT at the current rate of 20%.</p>
      <p>Please note that specifications / dimensions may vary slightly between Manufacturers, if these are critical, please obtain confirmation of exact specifications before hire commences.</p>
      <p>Price does not include delivery / collection or fuel used. Cash customers require identification and a deposit.</p>
    </div>
  )
}
