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
  cluster2: {
    hubTitle: string
    hubSubtitle: string
    posCastracaoTitle: string
    posCastracaoDesc: string
    posOrtopedicaTitle: string
    posOrtopedicaDesc: string
    alertasTitle: string
    alertasDesc: string
    porAnimalTitle: string
    porAnimalDesc: string
    checklistTitle: string
    checklistDesc: string
    readMore: string
    whyCluster: {
      title: string
      subtitle: string
      benefit1Title: string
      benefit1Desc: string
      benefit2Title: string
      benefit2Desc: string
      benefit3Title: string
      benefit3Desc: string
    }
    cta: string
  }
  notFound: {
    title: string
    message: string
    backHome: string
  }
  blog: {
    heroTitle: string
    heroSubtitleStart: string
    heroSubtitle: string
    stayUpdated: string
    stayUpdatedDesc: string
    emailPlaceholder: string
    subscribe: string
    loadMore: string
    readArticle: string
  }
  contact: {
    heroTitle: string
    heroTitleHighlight: string
    heroSubtitle: string
    formTitle: string
    contactTitle: string
    email: string
    phone: string
    location: string
    responseTime: string
    withinHours: string
    remoteGlobal: string
    phoneNumber: string
    emailAddress: string
    nameLabel: string
    emailLabel: string
    phoneLabel: string
    projectTypeLabel: string
    projectDetailsLabel: string
    selectService: string
    aiChatbot: string
    pwa: string
    other: string
    placeholders: {
      name: string
      email: string
      phone: string
      message: string
    }
    sending: string
    sendMessage: string
    preferChat: string
    preferChatDesc: string
    bookCall: string
    faqTitle: string
    faqSubtitle: string
    successTitle: string
    successDesc: string
    errorTitle: string
  }
  privacy: {
    title: string
    lastUpdated: string
  }
  terms: {
    title: string
    lastUpdated: string
  }
}
