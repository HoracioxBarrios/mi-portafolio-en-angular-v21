import { Component, inject } from '@angular/core';
import { SkillGroup } from '@app/core/models/skill-group.interface';
import { SkillsGroup } from '../skills-group/skills-group';
import { Translation } from '@app/core/services/translation';

@Component({
  selector: 'app-skills',
  imports: [SkillsGroup],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected readonly tr = inject(Translation);

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
        {
          name: 'Ionic',
          icon: 'icons/skills/frontend/ionic.svg',
          description:
            'Framework para desarrollar aplicaciones móviles híbridas multiplataforma con tecnologías web y Angular.',
          stack: 'frontend',
        },
        {
          name: 'RxJS',
          icon: 'icons/skills/frontend/rxjs.svg',
          description:
            'Librería de programación reactiva para manejar flujos de datos asíncronos y eventos, muy usada en Angular.',
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
          name: 'Node.js',
          icon: 'icons/skills/backend/nodejs.svg',
          description:
            'Entorno de ejecución de JavaScript del lado del servidor, usado para APIs y herramientas de build.',
          stack: 'backend',
        },
        {
          name: 'Python',
          icon: 'icons/skills/backend/python.svg',
          description:
            'Lenguaje versátil y legible utilizado para scripting, automatización y desarrollo backend.',
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
          monochrome: true,
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
        {
          name: 'Jenkins',
          icon: 'icons/skills/herramientas/jenkins.svg',
          description:
            'Servidor de automatización para integración y entrega continua (CI/CD) de aplicaciones.',
          stack: 'tools',
        },
        {
          name: 'Azure DevOps',
          icon: 'icons/skills/herramientas/azure-devops.svg',
          description:
            'Plataforma de Microsoft para CI/CD, repositorios y gestión de proyectos ágiles.',
          stack: 'tools',
        },
        {
          name: 'Trello',
          icon: 'icons/skills/herramientas/trello.svg',
          description:
            'Herramienta de gestión de tareas basada en tableros Kanban para organizar el trabajo.',
          stack: 'tools',
        },
        {
          name: 'Miro',
          icon: 'icons/skills/herramientas/miro.svg',
          description:
            'Pizarra colaborativa online para diagramas, brainstorming y trabajo en equipo en tiempo real.',
          stack: 'tools',
          monochrome: true,
        },
      ],
    },
    {
      title: 'IA',
      stack: 'ia',
      skills: [
        {
          name: 'Claude Code',
          icon: 'icons/skills/ia/claude.svg',
          description:
            'Asistente de IA en la terminal para escribir, refactorizar y depurar código de forma agéntica.',
          stack: 'ia',
        },
        {
          name: 'GitHub Copilot',
          icon: 'icons/skills/ia/copilot.svg',
          description:
            'Autocompletado de código con IA integrado al editor para acelerar el desarrollo.',
          stack: 'ia',
          monochrome: true,
        },
        {
          name: 'Cursor',
          icon: 'icons/skills/ia/cursor.svg',
          description:
            'Editor de código potenciado con IA para generar y editar código mediante lenguaje natural.',
          stack: 'ia',
          monochrome: true,
        },
        {
          name: 'Spec-Driven Development',
          icon: 'icons/skills/ia/spec-driven.svg',
          description:
            'Metodología de desarrollo asistido por IA basada en definir especificaciones claras antes de codear.',
          stack: 'ia',
        },
        {
          name: 'BMAD Method',
          icon: 'icons/skills/ia/bmad.svg',
          description:
            'Framework de desarrollo ágil asistido por IA mediante agentes especializados por rol.',
          stack: 'ia',
        },
        // Pendiente: 'Devin AI' — re-agregar cuando se domine bien.
        // Ícono ya disponible en icons/skills/ia/devin.svg.
      ],
    },
  ];
}
