export interface Project {
  title: string;
  githubUrl: string;
  liveUrl?: string;
  tech: string[];
  features: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  link: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  grade: string;
  location: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}