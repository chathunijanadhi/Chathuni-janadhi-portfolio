export type NavItem = {
  id: string
  label: string
}

export type EducationEntry = {
  id: string
  institution: string
  stream: string
  location: string
  description?: string
  subjects: string[]
}

export type InterestArea = {
  id: string
  title: string
  description: string
  icon: 'code' | 'lightbulb' | 'sparkles' | 'book'
}

export type ProjectModule = {
  title: string
  description: string
  points: string[]
}

export type Project = {
  id: string
  title: string
  subtitle: string
  category: string
  role: string
  overview: string
  technologies: string[]
  keyContributions: string[]
  modules: ProjectModule[]
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
  role: string
  greeting: string
  bio: string
  heroDescription: string
  location: string
  profileImage: string
  profileImageAlt: string
}

export type PortfolioData = {
  person: Person
  seo: {
    title: string
    description: string
  }
  contact: ContactInfo
  navigation: NavItem[]
  project: Project
  education: EducationEntry[]
  interests: InterestArea[]
}


