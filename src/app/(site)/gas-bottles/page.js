import Image from 'next/image'
import LogoBanner from '@/components/LogoBanner'
import SectionHeader from '@/components/SectionHeader'
import Footer from '@/components/Footer'
import { GAS_CATEGORIES } from '@/data/gasData'
import { COMPANY } from '@/data/companyDetails'

export const metadata = {
  title: 'Gas Bottles Witney — Patio, BBQ & Welding',
  description:
    'Gas bottles in Witney, West Oxfordshire. Patio and BBQ gas, caravan and camping butane, trade propane and welding gases — swapped over the counter while you wait.',
  alternates: { canonical: '/gas-bottles' },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rowlandplant.co.uk' },
    { '@type': 'ListItem', position: 2, name: 'Gas Bottles', item: 'https://rowlandplant.co.uk/gas-bottles' },
  ],
}

/** A bottle's price block. Welding cylinders are hired; everything else is a
 *  refundable deposit plus the gas. */
function PriceBlock({ refillPrice, deposit, hirePrice }) {
  const hasAny = refillPrice || deposit || hirePrice
  if (!hasAny) {
    return <p className="gas-card__poa">Call for price</p>
  }
  return (
    <dl className="gas-card__prices">
      {refillPrice && (
        <div className="gas-card__price">
          <dt>Gas / refill</dt>
          <dd>{refillPrice}</dd>
        </div>
      )}
      {deposit && (
        <div className="gas-card__price gas-card__price--muted">
          <dt>Bottle deposit</dt>
          <dd>
            {deposit}
            <span className="gas-card__refundable">refundable</span>
          </dd>
        </div>
      )}
      {hirePrice && (
        <div className="gas-card__price gas-card__price--muted">
          <dt>Cylinder hire</dt>
          <dd>{hirePrice}</dd>
        </div>
      )}
    </dl>
  )
}

export default function GasBottlesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <LogoBanner />
      <SectionHeader title="Gas Bottles" />

      <div className="gas-page">
        <p className="gas-page__intro">
          We stock bottled gas for just about everything — barbecues and patio heaters, caravans and
          campervans, plumbers&rsquo; blowlamps and site heaters, right through to welding and cutting
          gases. Bring your empty in and swap it over the counter at our Witney shop.
          {COMPANY.gasSupplier && ` Supplied by ${COMPANY.gasSupplier}.`}
        </p>

        <div className="gas-page__actions">
          <a href={`tel:${COMPANY.phoneLink}`} className="gas-page__call">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            {COMPANY.phone}
          </a>
          <span className="gas-page__hours">
            {COMPANY.openingHours[0]}
          </span>
        </div>

        {COMPANY.gasPricesAreIndicative && (
          <p className="gas-page__provisional">
            <strong>Please ring to confirm prices.</strong> Gas prices move with wholesale costs, so
            the figures below are a guide rather than a quote.
          </p>
        )}

        <nav className="gas-page__jump" aria-label="Gas types">
          {GAS_CATEGORIES.map(cat => (
            <a key={cat.slug} href={`#${cat.slug}`} className="gas-page__jump-link">
              <span aria-hidden="true">{cat.icon}</span> {cat.label}
            </a>
          ))}
        </nav>

        {GAS_CATEGORIES.map(cat => (
          <section key={cat.slug} id={cat.slug} className="gas-section">
            <h2 className="gas-section__title">
              <span aria-hidden="true">{cat.icon}</span> {cat.label}
            </h2>

            {cat.intro && <p className="gas-section__intro">{cat.intro}</p>}
            {cat.pricingNote && <p className="gas-section__note">{cat.pricingNote}</p>}

            <div className="gas-section__grid">
              {cat.products.map(bottle => (
                <article key={bottle.id} className="gas-card">
                  {bottle.image && (
                    <div className="gas-card__img-wrap">
                      <Image
                        src={bottle.image}
                        alt={bottle.title}
                        fill
                        sizes="(max-width: 600px) 100vw, 260px"
                        className="gas-card__photo"
                      />
                    </div>
                  )}
                  <div className="gas-card__body">
                    <h3 className="gas-card__title">{bottle.title}</h3>
                    {bottle.size && <p className="gas-card__size">{bottle.size}</p>}
                    {bottle.specs.length > 0 && (
                      <ul className="gas-card__specs">
                        {bottle.specs.map(spec => (
                          <li key={spec}>{spec}</li>
                        ))}
                      </ul>
                    )}
                    <PriceBlock {...bottle} />
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}

        <section className="gas-consumables">
          <h2 className="gas-consumables__title">Workshop Consumables</h2>
          <p className="gas-consumables__intro">
            Alongside the gas we carry the everyday bits that keep a job moving — so you can pick
            them up at the same time rather than making a second trip.
          </p>
          <ul className="gas-consumables__list">
            <li>Fixings &amp; fasteners — screws, bolts, nuts, washers, anchors</li>
            <li>Welding consumables — rods, wire, tips, shrouds, nozzles</li>
            <li>Abrasives — cutting &amp; grinding discs, flap wheels, sanding sheets</li>
            <li>Oils, lubricants &amp; workshop chemicals</li>
            <li>Safety wear — gloves, goggles, ear defenders, hi-vis, masks</li>
            <li>Drill bits, blades &amp; cutting accessories</li>
          </ul>
          <p className="gas-consumables__cta">
            Not sure if we have it? Give us a ring on{' '}
            <a href={`tel:${COMPANY.phoneLink}`}>{COMPANY.phone}</a> — if we haven&rsquo;t got it on
            the shelf we can usually get it in quickly.
          </p>
        </section>
      </div>

      <Footer />
    </>
  )
}
