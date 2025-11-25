export interface Project {
  title: string;
  githubUrl: string;
  tech: string[];
  features: string[];
}

export interface Certification {
  title: string;
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