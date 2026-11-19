import type { MadePossibleByCompany } from '~/types'

// Ecosystem partners share the Made Possible By data structure
const files = import.meta.glob<MadePossibleByCompany>('~~/content/ecosystem-partners/*.json', {
  eager: true,
  import: 'default'
})

// The slug is the CMS filename, e.g. content/ecosystem-partners/colab.json -> colab
export const ecosystemPartners = Object.entries(files)
  .map(([path, partner]) => ({ ...partner, slug: path.split('/').pop()!.replace(/\.json$/, '') }))
  .sort((a, b) => a.order - b.order)
