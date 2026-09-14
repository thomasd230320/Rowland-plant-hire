import { config, fields, collection, singleton } from '@keystatic/core'

// ---------------------------------------------------------------------------
// Rowland Tool & Plant Hire — content schema
//
// This file describes the editing forms Rowland sees at /keystatic.
// Content is saved as YAML into /content, committed to GitHub, and compiled
// into src/data/toolHireData.js at build time by scripts/build-content.mjs.
// ---------------------------------------------------------------------------

// Which GitHub repository Keystatic saves Rowland's edits to.
//
// Set as environment variables so the site can be moved to a different GitHub
// account without a code change — point these at the new owner and repo name,
// then redeploy. They must start with NEXT_PUBLIC_ because the admin panel runs
// in the browser.
const GITHUB_REPO = {
  owner: process.env.NEXT_PUBLIC_GITHUB_REPO_OWNER || 'thomasd230320',
  name: process.env.NEXT_PUBLIC_GITHUB_REPO_NAME || 'Rowland-plant-hire',
}

// Local mode (editing on your own machine) unless GitHub credentials are set.
const storage =
  process.env.KEYSTATIC_GITHUB_CLIENT_ID
    ? { kind: 'github', repo: GITHUB_REPO }
    : { kind: 'local' }

/** Four standard hire rates. Leave every box blank for "Call for price". */
const pricingFields = {
  day1: fields.text({
    label: '1 day',
    description: 'e.g. £17.50 — leave blank to show "Call for price"',
    validation: { isRequired: false },
  }),
  extraDay: fields.text({ label: 'Each extra day', validation: { isRequired: false } }),
  week: fields.text({ label: '1 week', validation: { isRequired: false } }),
  weekend: fields.text({ label: 'Weekend', validation: { isRequired: false } }),
}

export default config({
  storage,
  ui: {
    brand: { name: 'Rowland Tool & Plant Hire' },
    navigation: {
      'Gas bottles': ['gasCategories'],
      'Tool hire': ['toolCategories'],
      'Site details': ['companyDetails'],
    },
  },

  collections: {
    gasCategories: collection({
      label: 'Gas bottles',
      path: 'content/gas/*/',
      format: { data: 'yaml' },
      slugField: 'label',
      columns: ['label'],
      entryLayout: 'form',
      schema: {
        label: fields.slug({
          name: {
            label: 'Section name',
            description: 'e.g. "Patio & BBQ Gas" or "Welding Gas".',
          },
          slug: {
            label: 'Reference',
            description: 'Used to link to this section. Best left alone once set.',
          },
        }),

        order: fields.integer({
          label: 'Position on the page',
          description: '1 shows first, 2 second, and so on.',
          defaultValue: 1,
        }),

        icon: fields.text({ label: 'Icon', description: 'A single emoji.', defaultValue: '🔥' }),

        intro: fields.text({
          label: 'Intro paragraph',
          description: 'A sentence or two about this type of gas and who it suits.',
          multiline: true,
          validation: { isRequired: false },
        }),

        pricingNote: fields.text({
          label: 'Note about how it is paid for',
          description:
            'e.g. "Bottle deposit is fully refunded when you bring the empty back." Shown in a highlighted box.',
          multiline: true,
          validation: { isRequired: false },
        }),

        products: fields.array(
          fields.object({
            title: fields.text({
              label: 'Bottle name',
              description: 'e.g. "Patio Gas 13kg"',
            }),
            size: fields.text({
              label: 'Size',
              description: 'e.g. "13kg" — shown as a label on the card.',
              validation: { isRequired: false },
            }),
            image: fields.image({
              label: 'Photo',
              directory: 'public/images',
              publicPath: '/images/',
              validation: { isRequired: false },
            }),
            specs: fields.array(fields.text({ label: 'Detail' }), {
              label: 'Details',
              description: 'What it suits, fitting type, that sort of thing.',
              itemLabel: props => props.value || 'New detail',
            }),
            refillPrice: fields.text({
              label: 'Gas / refill price',
              description: 'What the customer pays for the gas itself, e.g. £32.00. Blank shows "Call for price".',
              validation: { isRequired: false },
            }),
            deposit: fields.text({
              label: 'Refundable bottle deposit',
              description: 'For non-welding gas. Refunded when the empty bottle comes back. Leave blank for welding gas.',
              validation: { isRequired: false },
            }),
            hirePrice: fields.text({
              label: 'Cylinder hire',
              description: 'For welding gas hired by the period, e.g. "£45.00 / year". Leave blank for deposit bottles.',
              validation: { isRequired: false },
            }),
            advanced: fields.object(
              {
                id: fields.text({
                  label: 'Internal reference',
                  description: 'Do not change this on an existing bottle.',
                }),
              },
              { label: 'Advanced — leave this alone' },
            ),
          }),
          {
            label: 'Bottles',
            itemLabel: props => props.fields.title.value || 'New bottle',
          },
        ),

        seo: fields.object(
          {
            title: fields.text({ label: 'Google title', validation: { isRequired: false } }),
            description: fields.text({
              label: 'Google description',
              multiline: true,
              validation: { isRequired: false },
            }),
          },
          { label: 'Google search listing' },
        ),
      },
    }),

    toolCategories: collection({
      label: 'Tool hire categories',
      path: 'content/tool-hire/*/',
      format: { data: 'yaml' },
      slugField: 'label',
      columns: ['label'],
      entryLayout: 'form',
      schema: {
        label: fields.slug({
          name: {
            label: 'Category name',
            description: 'Shown as the heading on the category page, e.g. "Concrete Breaking".',
          },
          slug: {
            label: 'Web address',
            description:
              'The end of the page address: rowlandplant.co.uk/tool-hire/THIS-BIT. ' +
              'Changing this breaks any existing links and Google results — best left alone.',
          },
        }),

        icon: fields.text({
          label: 'Icon',
          description: 'A single emoji shown next to the category, e.g. 🔨',
          defaultValue: '🔧',
        }),

        image: fields.image({
          label: 'Category photo',
          directory: 'public/images',
          publicPath: '/images/',
          validation: { isRequired: false },
        }),

        intro: fields.text({
          label: 'Intro paragraph',
          description:
            'The paragraph under the heading. Good place to mention Witney and the surrounding areas — it helps Google.',
          multiline: true,
          validation: { isRequired: false },
        }),

        categoryNote: fields.text({
          label: 'Highlighted note (optional)',
          description:
            'Shown in a highlighted box, e.g. "Sharpening charge per chisel @ £3.75 applies to all breakers."',
          multiline: true,
          validation: { isRequired: false },
        }),

        products: fields.array(
          fields.object({
            title: fields.text({ label: 'Product name' }),
            image: fields.image({
              label: 'Photo',
              directory: 'public/images',
              publicPath: '/images/',
              validation: { isRequired: false },
            }),
            specs: fields.array(fields.text({ label: 'Spec' }), {
              label: 'Specifications',
              description: 'One bullet point per line item.',
              itemLabel: props => props.value || 'New spec',
            }),
            pricing: fields.object(pricingFields, {
              label: 'Hire rates',
              description: 'Leave all four blank if the price is on enquiry.',
            }),
            pricingRows: fields.array(
              fields.object({
                size: fields.text({ label: 'Size / variant' }),
                ...pricingFields,
              }),
              {
                label: 'Price table by size (optional)',
                description:
                  'Only for products priced per size, like diamond core cutters. Leave empty otherwise.',
                itemLabel: props => props.fields.size.value || 'New size',
              },
            ),
            advanced: fields.object(
              {
                id: fields.text({
                  label: 'Internal reference',
                  description:
                    'Used to link this product to stock availability. Do not change it on an existing product.',
                }),
              },
              { label: 'Advanced — leave this alone' },
            ),
          }),
          {
            label: 'Products',
            itemLabel: props => props.fields.title.value || 'New product',
          },
        ),

        seo: fields.object(
          {
            title: fields.text({
              label: 'Google title',
              description: 'The blue clickable line in Google. Aim for under 60 characters.',
              validation: { isRequired: false },
            }),
            description: fields.text({
              label: 'Google description',
              description: 'The grey text under the title in Google. Aim for under 155 characters.',
              multiline: true,
              validation: { isRequired: false },
            }),
          },
          { label: 'Google search listing' },
        ),

        advanced: fields.object(
          {
            id: fields.text({
              label: 'Internal reference',
              description: 'Used by the website code to find this category. Do not change it.',
            }),
          },
          { label: 'Advanced — leave this alone' },
        ),
      },
    }),
  },

  singletons: {
    companyDetails: singleton({
      label: 'Company details',
      path: 'content/company-details',
      format: { data: 'yaml' },
      schema: {
        phone: fields.text({
          label: 'Phone number',
          description: 'Shown as written, e.g. 01865 922611',
        }),
        phoneLink: fields.text({
          label: 'Phone number for click-to-call',
          description: 'No spaces, with country code, e.g. +441865922611',
        }),
        email: fields.text({ label: 'Email address' }),
        addressLine: fields.text({
          label: 'Address',
          multiline: true,
          validation: { isRequired: false },
        }),
        openingHours: fields.array(fields.text({ label: 'Line' }), {
          label: 'Opening hours',
          description: 'One line each, e.g. "Mon–Fri: 7:30am – 5:00pm"',
          itemLabel: props => props.value || 'New line',
        }),

        gasSupplier: fields.text({
          label: 'Gas supplier name',
          description:
            'Shown on the gas page, e.g. "Calor" or "Hobbyweld". Leave blank and no supplier is named.',
          validation: { isRequired: false },
        }),

        gasPricesAreIndicative: fields.checkbox({
          label: 'Gas prices are a guide only',
          description:
            'While ticked, the gas page shows a notice that prices need confirming by phone. Untick once the real prices are in.',
          defaultValue: true,
        }),
      },
    }),
  },
})
