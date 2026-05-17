import LogoBanner from '@/components/LogoBanner'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about hiring plant and tools from Rowland Plant Ltd in Witney, West Oxfordshire — including pricing, delivery, insurance and equipment.',
}

const faqs = [
  {
    category: 'Getting Started',
    items: [
      {
        q: 'How do I hire equipment?',
        a: (
          <>
            It&rsquo;s simple. Browse our equipment online, then call us on{' '}
            <a href="tel:+441865922611">01865 922611</a> or fill in the enquiry form at the bottom of this page.
            We&rsquo;ll confirm availability and pricing, then you can collect from our Witney depot or we can deliver to your site.
          </>
        ),
      },
      {
        q: 'Do I need to book in advance?',
        a: 'We recommend calling ahead, especially for plant hire. Some items may be available the same day, subject to availability — but to avoid disappointment, give us a call as early as you can.',
      },
      {
        q: 'What ID do I need to hire equipment?',
        a: 'We require valid photo ID — a driving licence or passport. If you\'re hiring on a business account, we\'ll also need your company name and contact details.',
      },
      {
        q: 'Can I hire equipment over a weekend?',
        a: 'Yes. Weekend rates are available on most tools and are often better value than booking two separate day rates. Call us to check weekend availability and pricing.',
      },
    ],
  },
  {
    category: 'Pricing & Payment',
    items: [
      {
        q: 'Are prices inclusive of VAT?',
        a: 'All prices shown on this website are subject to VAT at the standard rate of 20%. VAT will be added to the total at checkout or on your invoice.',
      },
      {
        q: 'Do I need to pay a deposit?',
        a: 'A deposit may be required depending on the equipment and the length of the hire period. Please contact us on 01865 922611 and we\'ll let you know what applies to your hire.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept bank transfer, card payments and cash. Please contact us ahead of collection or delivery to discuss the best payment method for your hire.',
      },
      {
        q: 'What is included in the hire price?',
        a: 'The hire price covers the use of the equipment for the agreed period. Fuel, consumables (such as drill bits or blades) and optional hire insurance are charged separately.',
      },
    ],
  },
  {
    category: 'Delivery & Collection',
    items: [
      {
        q: 'Do you deliver equipment to site?',
        a: (
          <>
            Yes — we deliver plant and tools directly to your site and collect at the end of the hire period.
            Please call us on <a href="tel:+441865922611">01865 922611</a> to arrange delivery and confirm
            applicable charges.
          </>
        ),
      },
      {
        q: 'What areas do you cover?',
        a: 'We are based in Witney and cover the surrounding West Oxfordshire area, including Chipping Norton, Burford, Carterton, Woodstock, Charlbury and The Cotswolds. Call us to check whether we cover your specific location.',
      },
      {
        q: 'Can I collect equipment myself?',
        a: 'Absolutely. Collection from our Witney depot is available and is the quickest way to get started. Just call us to arrange a time and we\'ll have everything ready for you.',
      },
    ],
  },
  {
    category: 'Equipment & Insurance',
    items: [
      {
        q: 'What happens if equipment breaks down during hire?',
        a: (
          <>
            Call us immediately on <a href="tel:+441865922611">01865 922611</a>. We will arrange a replacement
            or repair as quickly as possible to keep your project on track. Do not attempt to repair the
            equipment yourself.
          </>
        ),
      },
      {
        q: 'Is hire insurance available?',
        a: 'Yes — we offer optional hire insurance across all our equipment ranges for a small additional fee. We strongly recommend taking out hire insurance, as it covers damage or loss during the hire period.',
      },
      {
        q: 'What sizes of excavator do you have?',
        a: (
          <>
            We stock 1T, 1.5T and 3T mini excavators, suitable for the vast majority of groundworks,
            landscaping and footing excavation projects. Full details and specifications are on our{' '}
            <a href="/plant-hire">Plant Hire page</a>.
          </>
        ),
      },
      {
        q: 'Can you source equipment you don’t stock yourself?',
        a: 'As a member of the Hire Association Europe (HAE), we have access to a wide range of cross-hire equipment. This means we can often source specialist items on your behalf — without you needing to set up an account with another supplier.',
      },
    ],
  },
]

export default function FaqPage() {
  return (
    <>
      <LogoBanner />

      <div className="faq-page">

        {/* Hero */}
        <section className="faq-hero">
          <div className="faq-hero__inner">
            <p className="faq-hero__eyebrow">Help &amp; Support</p>
            <h1 className="faq-hero__title">Frequently Asked Questions</h1>
          </div>
        </section>

        {/* FAQ content */}
        <div className="faq-content">
          {faqs.map((section) => (
            <div key={section.category} className="faq-category">
              <h2 className="faq-category__title">{section.category}</h2>

              {section.items.map((item) => (
                <details key={item.q} className="faq-item">
                  <summary className="faq-question">
                    {item.q}
                    <svg
                      className="faq-chevron"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </summary>
                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          ))}
        </div>

      </div>

      <Footer />
    </>
  )
}
