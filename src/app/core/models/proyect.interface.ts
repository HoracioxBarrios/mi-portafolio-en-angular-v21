export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  repoUrl?: string;
  repoPrivate: boolean;
  liveUrl?: string;
  featured?: boolean;
}
