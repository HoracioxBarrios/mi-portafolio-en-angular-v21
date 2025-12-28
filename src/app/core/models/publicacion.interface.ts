export interface Publication {
  id: string;
  title: string;
  summary: string;
  content: string;
  coverImage: string;
  publishedAt: Date;
  tags: string[];
  readTime: number;
}