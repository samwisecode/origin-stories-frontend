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
  companyUrl?: string
  linkedInUrl?: string
  theStory?: string
  // Not shown on the site; kept in the CMS in case it's needed later
  bio?: string
  podcastUrl?: string
  years: number[]
  order: number
}

export interface Partner {
  name: string
  logo: string
  url?: string
  description: string
  about?: string
  podcastUrl?: string
  status?: 'Current' | 'Past'
  order: number
}

export interface MadePossibleByCompany {
  name: string
  logo: string
  url?: string
  description: string
  about?: string
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

export interface HomePage {
  hero: {
    tagline: string
    eventDate: string
    venue: string
    ticketLabel: string
    ticketUrl: string
  }
  intro: {
    before?: string
    highlight: string
    after?: string
  }
  origin: {
    heading: string
    paragraphs: string[]
    authorName: string
    authorRole?: string
    authorNote?: string
  }
  about: {
    heading: string
    headingAccent?: string
    body: string
  }
  vision: {
    heading: string
    headingAccent?: string
    body: string
  }
  speakers: {
    headingAccent: string
  }
  partners: {
    heading: string
    headingAccent?: string
    buttonLabel: string
  }
  contact: {
    heading: string
    headingAccent?: string
    intro?: string
    successMessage: string
    errorMessage: string
  }
}

export interface LearnMorePage {
  seoTitle: string
  seoDescription: string
  heroHeading: string
  heroHeadingAccent?: string
  heroIntro?: string
  cards: {
    title: string
    description?: string
    link: string
  }[]
  watchHeading: string
  watchHeadingAccent?: string
  watchIntro?: string
  watchButtonLabel: string
  watchButtonUrl: string
}
