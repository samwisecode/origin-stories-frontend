import type { Partner } from '~/types'

const files = import.meta.glob<Partner>('~~/content/partners/*.json', {
  eager: true,
  import: 'default'
})

// The slug is the CMS filename, e.g. content/partners/sealand.json -> sealand
export const partners = Object.entries(files)
  .map(([path, partner]) => ({ ...partner, slug: path.split('/').pop()!.replace(/\.json$/, '') }))
  .sort((a, b) => a.order - b.order)
