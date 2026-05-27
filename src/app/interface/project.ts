export interface Project {
  title: string;
  category: 'Web/SaaS' | 'Hardware' | 'Content';
  description: string;
  techStack: string[];
  link?: string;
  grade?: string;
}