export class ProjectModel {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public technologies: string[],
    public imageUrl: string,
    public githubUrl?: string,
    public liveUrl?: string,
    public featured: boolean = false
  ) {}
}