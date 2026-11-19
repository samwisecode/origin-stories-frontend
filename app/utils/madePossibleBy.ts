import type { MadePossibleByCompany } from '~/types'

const files = import.meta.glob<MadePossibleByCompany>('~~/content/made-possible-by/*.json', {
  eager: true,
  import: 'default'
})

// The slug is the CMS filename, e.g. content/made-possible-by/wecolab.json -> wecolab
export const madePossibleByCompanies = Object.entries(files)
  .map(([path, company]) => ({ ...company, slug: path.split('/').pop()!.replace(/\.json$/, '') }))
  .sort((a, b) => a.order - b.order)
