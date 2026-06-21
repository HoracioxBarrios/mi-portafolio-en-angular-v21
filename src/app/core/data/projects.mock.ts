import { Project } from '../models/proyect.interface';

export const PROJECTS: Project[] = [
  {
    title: 'Lineage 2 Eternal',
    descKey: 'project.lineage2Eternal.desc',
    image: 'images/lineage2-eternal.png',
    technologies: ['Angular 21', 'TypeScript', 'SCSS', 'Node.js'],
    repoUrl: 'https://github.com/HoracioxBarrios/Lineage2-Eternal-web-angular-21-responsive.git',
    repoPrivate: true,
    liveUrl: 'https://lineage2-eternal-web-angular-21-res.vercel.app/home',
    featured: true,
  },
  {
    title: 'Lineage 2 Alika',
    descKey: 'project.lineage2Alika.desc',
    image: 'images/lineage2-alika.png',
    technologies: ['Angular 21', 'TypeScript', 'SCSS', 'Node.js'],
    repoUrl: 'https://github.com/HoracioxBarrios/lineage2-Alika-web-angular-21-responsive.git',
    repoPrivate: true,
    liveUrl: 'https://lineage2-alika-web-angular-21-respo-lilac.vercel.app/',
    featured: true,
  },
  {
    title: 'Calvin',
    descKey: 'project.colvin.desc',
    image: 'images/calvin_web_venta_flores.webp',
    technologies: ['Angular', 'TypeScript', 'SCSS', 'Node.js'],
    repoUrl: 'https://github.com/Horacioxbarrios',
    repoPrivate: false,
    liveUrl: 'https://www.thecolvinco.com/',
    featured: false,
  },
  {
    title: 'Viajeros con B',
    descKey: 'project.viajerosConB.desc',
    image: 'images/viajeros_con_B_web_de_viajes.webp',
    technologies: ['Angular', 'TypeScript', 'SCSS'],
    repoUrl: 'https://github.com/usuario/demo',
    repoPrivate: false,
    liveUrl: 'https://viajerosconb.btravel.com/',
    featured: false,
  }
];
