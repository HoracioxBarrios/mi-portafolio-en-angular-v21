import { Project } from '../models/proyect.interface';

export const PROJECTS: Project[] = [
  {
    title: 'Lineage 2 Eternal',
    description: 'Aplicación web para el servidor Lineage 2 Eternal crónica High Five, desarrollada en Angular 21, con diseño responsive y optimizada para SEO, que ofrece información detallada sobre el servidor, eventos, guías y comunidad, brindando a los jugadores una experiencia completa y atractiva para mantenerse actualizados y conectados con la comunidad de Lineage 2 Eternal.',
    image: 'images/lineage2-eternal.png',
    technologies: ['Angular 21', 'TypeScript', 'SCSS', 'Node.js'],
    repoUrl: 'https://github.com/HoracioxBarrios/Lineage2-Eternal-web-angular-21-responsive.git',
    repoPrivate: true,
    liveUrl: 'https://lineage2-eternal-web-angular-21-res.vercel.app/home',
    featured: true,
  },
  {
    title: 'Lineage 2 Alika',
    description: 'Aplicación web para el servidor Lineage 2 Alika, crónica Essence. Desarrollada en Angular 21 con diseño responsive, información del servidor, guías para nuevos jugadores y sección de comunidad.',
    image: 'images/lineage2-alika.png',
    technologies: ['Angular 21', 'TypeScript', 'SCSS', 'Node.js'],
    repoUrl: 'https://github.com/HoracioxBarrios/lineage2-Alika-web-angular-21-responsive.git',
    repoPrivate: true,
    liveUrl: 'https://lineage2-alika-web-angular-21-respo-lilac.vercel.app/',
    featured: true,
  },
  {
    title: 'Calvin',
    description: 'TheColvinCo.com es una tienda online especializada en la venta y envío de flores, plantas y regalos a domicilio, con enfoque en ramos y arreglos florales para ocasiones especiales como cumpleaños, aniversarios, celebraciones, fechas señaladas y momentos de detalle.',
    image: 'images/calvin_web_venta_flores.webp',
    technologies: ['Angular', 'TypeScript', 'SCSS', 'Node.js'],
    repoUrl: 'https://github.com/Horacioxbarrios',
    repoPrivate: false,
    liveUrl: 'https://www.thecolvinco.com/',
    featured: false,
  },
  {
    title: 'Viajeros con B',
    description: 'Viajeros con B es una plataforma de contenido de viajes vinculada a B travel, enfocada en inspirar a los usuarios a través de artículos, experiencias y recomendaciones sobre destinos, turismo y estilos de viaje, presentada en formato editorial y audiovisual.',
    image: 'images/viajeros_con_B_web_de_viajes.webp',
    technologies: ['Angular', 'TypeScript', 'SCSS'],
    repoUrl: 'https://github.com/usuario/demo',
    repoPrivate: false,
    liveUrl: 'https://viajerosconb.btravel.com/',
    featured: false,
  }
];
