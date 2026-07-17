export interface Project {
  slug: string;
  title: string;
  description: string;
  problem?: string;
  solution?: string;
  architecture?: string;
  technologies: string[];
  role?: string;
  date?: string;
  link?: string;
  github?: string;
  results: string[];
}
