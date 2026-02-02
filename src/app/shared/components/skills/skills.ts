import { Component } from '@angular/core';
import { SkillGroup } from '@app/core/models/skill-group.interface';
import { SkillsGroup } from '../skills-group/skills-group';

@Component({
  selector: 'app-skills',
  imports: [SkillsGroup],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  groups: SkillGroup[] = [
    {
      title: 'Frontend',
      stack: 'frontend',
      skills: [
        {
          name: 'HTML5',
          icon: 'icons/skills/frontend/html.svg',
          description:
            'Lenguaje de marcado utilizado para estructurar contenido web de forma semántica y accesible.',
          stack: 'frontend',
        },
        {
          name: 'CSS3',
          icon: 'icons/skills/frontend/css3.svg',
          description:
            'Definición de estilos visuales, layouts responsivos y animaciones para interfaces modernas.',
          stack: 'frontend',
        },
        {
          name: 'JavaScript',
          icon: 'icons/skills/frontend/javascript.svg',
          description:
            'Lenguaje principal para la lógica del frontend y la interacción dinámica con el usuario.',
          stack: 'frontend',
        },
        {
          name: 'Sass',
          icon: 'icons/skills/frontend/sass.svg',
          description:
            'Preprocesador CSS que permite escribir estilos más organizados, reutilizables y escalables.',
          stack: 'frontend',
        },
        {
          name: 'Angular',
          icon: 'icons/skills/frontend/angular.svg',
          description:
            'Framework para el desarrollo de aplicaciones web SPA, orientado a componentes y arquitectura modular.',
          stack: 'frontend',
        },
        {
          name: 'TypeScript',
          icon: 'icons/skills/frontend/typescript.svg',
          description:
            'Superset de JavaScript que aporta tipado estático y mejora la calidad y mantenibilidad del código.',
          stack: 'frontend',
        },
      ],
    },

    {
      title: 'Backend',
      stack: 'backend',
      skills: [
        {
          name: 'C#',
          icon: 'icons/skills/backend/c-sharp.svg',
          description:
            'Lenguaje orientado a objetos utilizado para desarrollar lógica de negocio y servicios backend.',
          stack: 'backend',
        },
        {
          name: '.NET',
          icon: 'icons/skills/backend/NET-core.svg',
          description:
            'Framework para el desarrollo de APIs y aplicaciones backend robustas y escalables.',
          stack: 'backend',
        },
        {
          name: 'MySQL',
          icon: 'icons/skills/backend/mySql.svg',
          description:
            'Sistema de gestión de bases de datos relacional ampliamente utilizado en aplicaciones web.',
          stack: 'backend',
        },
        {
          name: 'PostgreSQL',
          icon: 'icons/skills/backend/postgresql.svg',
          description:
            'Base de datos relacional avanzada, orientada a rendimiento, escalabilidad y confiabilidad.',
          stack: 'backend',
        },
        {
          name: 'Postman',
          icon: 'icons/skills/backend/postman.svg',
          description: 'Herramienta para pruebas, validación y documentación de APIs REST.',
          stack: 'backend',
        },
      ],
    },
    {
      title: 'Herramientas',
      stack: 'tools',
      skills: [
        {
          name: 'Git',
          icon: 'icons/skills/herramientas/git-icon.svg',
          description:
            'Sistema de control de versiones distribuido para la gestión del código fuente.',
          stack: 'tools',
        },
        {
          name: 'GitHub',
          icon: 'icons/skills/herramientas/github-blanco.svg',
          description:
            'Plataforma para alojamiento de repositorios, trabajo colaborativo y control de versiones.',
          stack: 'tools',
        },
        {
          name: 'GitLab',
          icon: 'icons/skills/herramientas/gitlab.svg',
          description:
            'Plataforma de repositorios con integración continua y herramientas de gestión de proyectos.',
          stack: 'tools',
        },
        {
          name: 'Jira',
          icon: 'icons/skills/herramientas/jira.svg',
          description:
            'Herramienta para la gestión de tareas, seguimiento de proyectos y metodologías ágiles.',
          stack: 'tools',
        },
        {
          name: 'Visual Studio Code',
          icon: 'icons/skills/herramientas/visual-studio-code.svg',
          description: 'Editor de código utilizado para el desarrollo frontend y backend.',
          stack: 'tools',
        },
        {
          name: 'Visual Studio',
          icon: 'icons/skills/herramientas/visual-studio-2013.svg',
          description:
            'Entorno de desarrollo integrado para aplicaciones backend y soluciones .NET.',
          stack: 'tools',
        },
        {
          name: 'Android Studio',
          icon: 'icons/skills/herramientas/android-studio-icon.svg',
          description: 'IDE oficial para el desarrollo de aplicaciones Android.',
          stack: 'tools',
        },
        {
          name: 'Figma',
          icon: 'icons/skills/herramientas/figma-icon.svg',
          description: 'Herramienta de diseño UI/UX para prototipado y colaboración con equipos.',
          stack: 'tools',
        },
      ],
    },
  ];
}
