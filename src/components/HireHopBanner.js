export default function HireHopBanner() {
  return (
    <div className="hirehop-banner">
      <div className="hirehop-banner__inner">
        <svg className="hirehop-banner__icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
        </svg>
        <p className="hirehop-banner__text">
          Check availability before you call &mdash; select dates on any product card.&nbsp;
          <strong>Live stock data via HireHop integration coming soon.</strong>
        </p>
        <span className="hirehop-banner__tag">Demo Feature</span>
      </div>
    </div>
  )
}
