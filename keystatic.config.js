import { config, fields, collection, singleton } from '@keystatic/core'

// ---------------------------------------------------------------------------
// Rowland Tool & Plant Hire — content schema
//
// This file describes the editing forms Rowland sees at /keystatic.
// Content is saved as YAML into /content, committed to GitHub, and compiled
// into src/data/toolHireData.js at build time by scripts/build-content.mjs.
// ---------------------------------------------------------------------------

const GITHUB_REPO = { owner: 'thomasd230320', name: 'Rowland-plant-hire' }

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
      'Tool hire': ['toolCategories'],
      'Site details': ['companyDetails'],
    },
  },

  collections: {
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
      },
    }),
  },
})
