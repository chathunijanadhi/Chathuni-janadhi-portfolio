export type NavItem = {
  id: string
  label: string
}

export type Stat = {
  value: string
  label: string
}

export type EducationSubject = {
  name: string
  grade?: string
}

export type EducationEntry = {
  id: string
  status: 'Completed' | 'Currently Studying'
  institution: string
  qualification: string
  location: string
  description: string
  subjects?: EducationSubject[]
}

export type Skill = {
  name: string
}

export type SkillGroup = {
  id: string
  title: string
  skills: Skill[]
}

export type JourneyEntry = {
  id: string
  title: string
  context: string
  description: string
}

export type Service = {
  id: string
  title: string
  description: string
  icon: 'layers' | 'server' | 'database' | 'cloud'
}

export type ProjectLinks = {
  github?: string
  live?: string
}

export type Project = {
  id: string
  number: string
  title: string
  year: string
  category: string
  role?: string
  myContributions?: string[]
  description: string
  overview?: string
  problem?: string
  solution?: string
  challenges?: string
  learnings?: string
  technologies: string[]
  features?: string[]
  links?: ProjectLinks
  featured?: boolean
}

export type ContactInfo = {
  name: string
  role: string
  location: string
  email: string
  phone: string
  linkedin: string
  github: string
}

export type Person = {
  name: string
  firstName: string
  professionalTitle: string
  shortTitle: string
  greeting: string
  introduction: string
  heroDescription: string
  university: string
  degree: string
  location: string
  profileImage: string
  profileImageAlt: string
}

export type Interest = {
  id: string
  title: string
  description: string
  icon: 'code' | 'lightbulb' | 'sparkles' | 'book'
}

export type PortfolioData = {
  person: Person
  seo: {
    title: string
    description: string
  }
  contact: ContactInfo
  navigation: NavItem[]
  stats: Stat[]
  currentlyLearning: string[]
  education: EducationEntry[]
  skills: SkillGroup[]
  projects: Project[]
  journey: JourneyEntry[]
  services: Service[]
  interests: Interest[]
  form?: {
    formspreeEndpointEnv?: string
  }
}



