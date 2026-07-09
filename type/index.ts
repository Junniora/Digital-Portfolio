export interface Project {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  role?: string;
  date?: string;
  link?: string;
  github?: string;
  results?: string[];
}
