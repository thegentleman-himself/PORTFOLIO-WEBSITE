export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: 'cybersecurity' | 'web-development' | 'full-stack' | 'research';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  completionDate: string;
  highlights: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: 'cybersecurity' | 'programming' | 'tools' | 'soft-skills';
  proficiency: number; // 0-100
  icon: string;
  description: string;
  certifications?: string[];
  projects?: string[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  achievements: string[];
  skills: string[];
  type: 'full-time' | 'part-time' | 'internship' | 'volunteer';
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  achievements: string[];
  gpa?: string;
  relevantCourses: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId: string;
  category: 'cybersecurity' | 'programming' | 'cloud' | 'other';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  description: string;
  verificationUrl?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  category: 'academic' | 'leadership' | 'technical' | 'recognition';
  image?: string;
  certificate?: string;
  impact: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  tags: string[];
  readTime: number;
  featured: boolean;
  image: string;
  slug: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  date: string;
  avatar?: string;
  verified: boolean;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  twitter?: string;
  website?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    preferredName: string;
    title: string;
    subtitle: string;
    bio: string;
    avatar: string;
    contact: ContactInfo;
  };
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  achievements: Achievement[];
  blogPosts: BlogPost[];
  testimonials: Testimonial[];
  stats: {
    githubStars: number;
    githubFollowers: number;
    githubRepositories: number;
    linkedinConnections: number;
    yearsOfExperience: number;
    projectsCompleted: number;
    certificationsEarned: number;
  };
}