export interface DataPoint {
  metric: string
  label?: string
  context?: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface CTA {
  text: string
  url: string
}

export interface Feature {
  name: string
  description: string
}

export interface SocialProof {
  quote: string
  author: string
  role: string
  note?: string
}

export interface ContentSection {
  title: string
  content: string
  data_points?: DataPoint[]
  features?: Feature[]
}

export interface SpokeContent {
  intro?: string
  problem_section?: ContentSection
  solution_section?: ContentSection & { features?: Feature[] }
  social_proof?: SocialProof
}

export interface SpokeVariables {
  [key: string]: string | string[] | DataPoint[] | object
}

export type TemplateType =
  | 'solution-by-size'
  | 'solution-by-type'
  | 'problem-solution'
  | 'feature-focus'
  | 'comparison'
  | 'data-driven'
  | 'procedure-specific'
  | 'animal-type'
  | 'resource'

export interface Spoke {
  id: string
  slug: string
  url: string
  template: TemplateType
  title: string
  h1: string
  meta_description: string
  keyword_primary: string
  keywords_secondary: string[]
  variables: SpokeVariables
  content?: SpokeContent
  faq: FAQ[]
  cta?: { primary: CTA; secondary?: CTA }
  tool_cta?: CTA
  related_spokes: string[]
  related_posts: string[]
}

export interface ClusterHub {
  slug: string
  url: string
  title: string
  h1: string
  meta_description: string
  keyword_primary: string
  keywords_secondary: string[]
}

export interface BlogPostSupport {
  slug: string
  title: string
  category: string
  target_keywords: string[]
  internal_links_to: string[]
}

export interface Cluster {
  cluster_id: string
  cluster_name: string
  hub: ClusterHub
  spokes: Spoke[]
  blog_posts_support: BlogPostSupport[]
}
