import type { Speaker } from '~/types'

const files = import.meta.glob<Speaker>('~~/content/speakers/*.json', {
  eager: true,
  import: 'default'
})

// The slug is the CMS filename, e.g. content/speakers/patrick-schofield.json -> patrick-schofield
export const speakers = Object.entries(files)
  .map(([path, speaker]) => ({ ...speaker, slug: path.split('/').pop()!.replace(/\.json$/, '') }))
  .sort((a, b) => a.order - b.order)
