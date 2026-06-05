export interface Project {
  title: string;
  category: 'Web/SaaS' | 'Tools' | 'Game Development' | 'Hardware' | 'Content';
  description: string;
  techStack: string[];
  link?: string;
  grade?: string;
}