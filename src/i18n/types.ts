export type Locale = "en" | "pt"

export interface Translations {
  nav: {
    home: string
    about: string
    solutions: string
    services: string
    portfolio: string
    blog: string
    contact: string
    getQuote: string
  }
  hero: {
    badge: string
    titleStart: string
    titleHighlight: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    techLabel: string
  }
  services: {
    sectionTitle: string
    sectionSubtitle: string
    iaFirst: {
      title: string
      description: string
      features: string[]
    }
    chatbots: {
      title: string
      description: string
      features: string[]
    }
    pwa: {
      title: string
      description: string
      features: string[]
    }
  }
  about: {
    heroTitle: string
    heroSubtitle: string
    storyTitle: string
    storyParagraphs: string[]
    statsNumber: string
    statsLabel: string
    founderLabel: string
    founderTitle: string
    founderParagraphs: string[]
    valuesTitle: string
    valuesSubtitle: string
    values: { title: string; description: string }[]
    journeyTitle: string
    journeySubtitle: string
    milestones: { year: string; title: string; description: string }[]
    ctaTitle: string
    ctaSubtitle: string
    ctaButton: string
  }
  whyChoose: {
    title: string
    subtitle: string
    cta: string
    features: { title: string; description: string }[]
  }
  featuredWork: {
    title: string
    subtitle: string
    viewAll: string
  }
  testimonials: {
    title: string
    subtitle: string
    items: { quote: string; author: string; role: string }[]
  }
  cta: {
    title: string
    subtitle: string
    button: string
  }
  footer: {
    description: string
    solucoesTitle: string
    companyTitle: string
    servicesTitle: string
    newsletterTitle: string
    newsletterSubtitle: string
    subscribePlaceholder: string
    subscribeButton: string
    copyright: string
  }
  servicesPage: {
    heroTitle: string
    heroSubtitle: string
    processTitle: string
    processSubtitle: string
    process: { step: string; title: string; description: string }[]
    ctaTitle: string
    ctaSubtitle: string
    ctaButton: string
  }
  portfolio: {
    heroTitle: string
    heroSubtitle: string
    filterAll: string
    ctaTitle: string
    ctaSubtitle: string
    ctaButton: string
    viewDetails: string
  }
}
