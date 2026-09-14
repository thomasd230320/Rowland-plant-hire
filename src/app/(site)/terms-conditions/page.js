import LogoBanner from '@/components/LogoBanner'
import SectionHeader from '@/components/SectionHeader'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Hire Terms & Conditions',
  description: 'Hire terms and conditions for Rowland Plant Limited — Witney, West Oxfordshire.',
  alternates: { canonical: '/terms-conditions' },
}

export default function TermsPage() {
  return (
    <>
      <LogoBanner />
      <SectionHeader title="Terms & Conditions" />

      <div className="terms-content">
        <div className="terms-pdf-placeholder">
          <h3>Model Conditions for the Hire and Sale of Goods to Consumers and Businesses 2025 V3.1</h3>
          <p style={{ color: '#666', fontSize: '14px', marginBottom: '16px' }}>
            Rowland Plant Limited — see contact details below
          </p>
          <a
            href="#terms-text"
            style={{
              display: 'inline-block',
              padding: '10px 24px',
              background: 'var(--red)',
              color: '#fff',
              fontFamily: 'var(--font-oswald), sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              borderRadius: '4px',
              fontSize: '14px',
            }}
          >
            View Terms Below ↓
          </a>
        </div>

        <div className="terms-text" id="terms-text">
          <h4>1 — Interpretation</h4>
          <p>
            In these Conditions, the following definitions apply: &ldquo;Business Customer&rdquo; means a
            customer who is acting in the course of a business; &ldquo;Consumer&rdquo; means a customer
            who is an individual acting for purposes wholly or mainly outside their trade, business,
            craft or profession; &ldquo;Contract&rdquo; means the contract between Rowland Plant Limited
            and the Customer for the hire or sale of Goods; &ldquo;Goods&rdquo; means the equipment,
            tools, plant, machinery or other items hired or sold by Rowland Plant Limited.
          </p>

          <h4>2 — Basis of Contract</h4>
          <p>
            These Conditions apply to the Contract to the exclusion of any other terms that the
            Customer seeks to impose or incorporate, or which are implied by trade, custom, practice
            or course of dealing. A quotation by Rowland Plant Limited shall not constitute an offer.
            No order placed by the Customer shall be deemed to be accepted by Rowland Plant Limited
            until Rowland Plant Limited confirms acceptance.
          </p>

          <h4>3 — The Goods</h4>
          <p>
            Rowland Plant Limited reserves the right to amend the specification of the Goods if
            required by any applicable statutory or regulatory requirement. Rowland Plant Limited
            warrants that on delivery the Goods shall: (a) conform in all material respects with
            their description; (b) be free from material defects in design, material and workmanship;
            and (c) be fit for any purpose held out by Rowland Plant Limited.
          </p>

          <h4>Part 1 — Hire Only</h4>

          <h4>4 — Hire of Goods</h4>
          <p>
            Rowland Plant Limited shall hire the Goods to the Customer from the Hire Period
            Commencement Date. The Customer shall be responsible for ensuring that the Goods are
            suitable for the Customer&rsquo;s intended purpose. The Customer shall take all necessary
            steps to ensure the proper use, care and custody of the Goods throughout the Hire Period.
          </p>

          <h4>5 — Hire Period</h4>
          <p>
            The Hire Period shall commence on the Hire Period Commencement Date and shall continue
            until the Goods are returned to Rowland Plant Limited in a clean and undamaged condition
            (fair wear and tear excepted), or collection is arranged by Rowland Plant Limited. The
            Customer shall be charged hire rates for the entire duration that the Goods are in the
            Customer&rsquo;s possession.
          </p>

          <h4>6 — Title and Risk</h4>
          <p>
            Title to the Goods shall remain with Rowland Plant Limited at all times. Risk of damage
            to or loss of the Goods shall pass to the Customer on delivery. The Customer shall insure
            the Goods from the time risk passes until the Goods are returned to Rowland Plant Limited.
            Rowland Plant Limited offers optional hire insurance across all equipment ranges for a
            small additional fee.
          </p>

          <div
            style={{
              marginTop: '30px',
              padding: '20px',
              background: '#f5f5f5',
              borderRadius: '6px',
              fontSize: '14px',
              color: '#555',
            }}
          >
            <strong>Rowland Plant Limited</strong><br />
            Witney, West Oxfordshire<br />
            Tel: <a href="tel:+441865922611" style={{ color: 'var(--red)' }}>01865 922611</a><br />
            Email: <a href="mailto:Sales@Rowlandplant.co.uk" style={{ color: 'var(--red)' }}>Sales@Rowlandplant.co.uk</a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
