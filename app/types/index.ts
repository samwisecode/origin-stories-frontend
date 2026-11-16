export interface Sponsor {
  name: string
  email: string
  company: string
}

export interface Speaker {
  name: string
  photo: string
  title?: string
  company?: string
  linkedInUrl?: string
  bio?: string
  years: number[]
  order: number
}

export interface Partner {
  name: string
  logo: string
  url?: string
  description: string
  status?: 'Current' | 'Past'
  order: number
}

export interface AboutPage {
  seoTitle: string
  seoDescription: string
  heroHeading: string
  heroParagraphs: string[]
  whyHeading: string
  whyHeadingAccent?: string
  whyPoints: string[]
  closingLine: string
}
