// Diccionario de traducción — Español (idioma por defecto).
// Claves namespaced. Mantener sincronizado con `en.ts`.

export const ES: Record<string, string> = {
  // Navegación
  'nav.home': 'Inicio',
  'nav.proyectos': 'Proyectos',
  'nav.sobreMi': 'Sobre Mí',
  'header.cvButton': 'Mi CV',
  'header.cvAria': 'Descargar mi CV actualizado',

  // Home — Hero
  'home.hero.title': 'Hola, soy Hora',
  'home.hero.badge': 'Software Developer | Angular & Ionic | AI Solutions & AI-Augmented Development',
  'home.hero.subtitle':
    'Desarrollador Frontend (Angular/Ionic) enfocado en construir productos sólidos, con experiencia integrando IA al flujo de desarrollo para trabajar más rápido y mejor.',
  'home.hero.ctaAbout': 'Conóceme más',
  'home.hero.ctaProjects': 'Ver mis proyectos',

  // Home — Proyectos destacados
  'home.featured.title': 'Proyectos Destacados',
  'home.featured.loading': 'Cargando proyectos...',
  'home.featured.viewAll': 'Ver todos los proyectos',

  // Home — CTA
  'home.cta.title': '¿Te interesa lo que hago?',
  'home.cta.text':
    'Estoy abierto a posiciones full-time y proyectos freelance. Respondo en menos de 24 horas.',
  'home.cta.button': 'Escribime',

  // Proyectos
  'proyectos.label': 'Proyectos',
  'proyectos.title': 'Una selección de mi trabajo',
  'proyectos.subtitle':
    'Apps desarrolladas con foco en performance, accesibilidad y experiencia de usuario',

  // Sobre mí
  'about.title': 'Quién soy',
  'about.description':
    'Desarrollador Angular con experiencia en proyectos de gran escala para el sector público — llevé a producción la primera solución de IA generativa del proyecto como asistente conversacional. Combino expertise técnico en Angular (v12–v21) con herramientas modernas de desarrollo asistido por IA para entregar soluciones de mayor calidad en menos tiempo.',
  'about.experience.title': 'Experiencia profesional',
  'about.experience.company': 'Consultores en Desarrollos Tecnológicos S.A. — CABA',
  'about.experience.period': 'Agosto 2023 – Actualidad',
  'about.experience.role':
    'Software Developer (Angular / Ionic)',
  'about.experience.l1':
    'Implementé un asistente conversacional con IA generativa en producción, siendo la primera solución de este tipo en el proyecto.',
  'about.experience.l2': 'Optimicé el rendimiento reduciendo los reportes de errores en un 40%.',
  'about.experience.l3':
    'Refactoricé la capa de servicios eliminando llamadas duplicadas y reduciendo tiempos de carga.',
  'about.experience.l4':
    'Modernicé la UI/UX implementando rediseños completos a partir de prototipos en Figma.',
  'about.experience.l5':
    'Implementé ARIA labels mejorando la accesibilidad para usuarios con visión reducida.',
  'about.experience.l6':
    'Migré de forma independiente 3 proyectos Angular de versiones 9 y 12 a la versión 16.',
  'about.experience.l7':
    'Desarrollé y mantuve una app móvil con Angular e Ionic publicada en Play Store y App Store.',
  'about.education.title': 'Formación académica',
  'about.education.degree': 'Tecnicatura Universitaria en Programación',
  'about.education.inst': 'UTN · 2023 – Actualidad',

  // Sobre mí — Certificados
  'about.certificados.title': 'Certificados',
  'about.certificados.subtitle': 'Formación y certificaciones',
  'about.certificados.verCertificado': 'Ver certificado',
  'about.certificados.claudeCode.title': 'Claude Code',
  'about.certificados.claudeCodeInAction.title': 'Claude Code in Action',
  'about.certificados.cSharp.title': 'Curso de C#',
  'about.certificados.angular.title': 'Curso de Angular',

  // Project card
  'card.seeMore': 'Ver más...',
  'card.repo': 'Repositorio',
  'card.viewProject': 'Ver proyecto',
  'card.privateTitle': 'Este repositorio es privado',
  'card.privateAria': 'Repositorio privado',
  'card.repoAria': 'Ver repositorio en GitHub',
  'card.liveAria': 'Ver proyecto en vivo',
  'card.privateMsg': 'El administrador marcó este repo como privado',
  'card.lightboxOpen': 'Ampliar imagen de',
  'card.lightboxClose': 'Cerrar imagen',

  // Skills
  'skills.title': 'Herramientas y tecnologías',
  'skills.table.icon': 'Icono',
  'skills.table.name': 'Nombre',
  'skills.table.stack': 'Stack',
  'skills.table.description': 'Descripción',
  'skills.nav.prev': 'Desplazar tabla a la izquierda',
  'skills.nav.next': 'Desplazar tabla a la derecha',
  'skills.group.frontend': 'Frontend',
  'skills.group.backend': 'Backend',
  'skills.group.tools': 'Herramientas',
  'skills.group.ia': 'IA',

  // Skills — Descripciones
  'skills.item.html5.desc':
    'Lenguaje de marcado utilizado para estructurar contenido web de forma semántica y accesible.',
  'skills.item.css3.desc':
    'Definición de estilos visuales, layouts responsivos y animaciones para interfaces modernas.',
  'skills.item.javascript.desc':
    'Lenguaje principal para la lógica del frontend y la interacción dinámica con el usuario.',
  'skills.item.sass.desc':
    'Preprocesador CSS que permite escribir estilos más organizados, reutilizables y escalables.',
  'skills.item.angular.desc':
    'Framework para el desarrollo de aplicaciones web SPA, orientado a componentes y arquitectura modular.',
  'skills.item.typescript.desc':
    'Superset de JavaScript que aporta tipado estático y mejora la calidad y mantenibilidad del código.',
  'skills.item.ionic.desc':
    'Framework para desarrollar aplicaciones móviles híbridas multiplataforma con tecnologías web y Angular.',
  'skills.item.rxjs.desc':
    'Librería de programación reactiva para manejar flujos de datos asíncronos y eventos, muy usada en Angular.',
  'skills.item.angularMaterial.desc':
    'Biblioteca de componentes de interfaz basada en Material Design, usada en los proyectos del portafolio.',
  'skills.item.csharp.desc':
    'Lenguaje orientado a objetos utilizado para desarrollar lógica de negocio y servicios backend.',
  'skills.item.nodejs.desc':
    'Entorno de ejecución de JavaScript del lado del servidor, usado para APIs, herramientas de build e integración de APIs REST de agregadores de empleo (Careerjet, Jooble).',
  'skills.item.python.desc':
    'Lenguaje versátil y legible utilizado para scripting, automatización y desarrollo backend.',
  'skills.item.dotnet.desc':
    'Framework para el desarrollo de APIs y aplicaciones backend robustas y escalables.',
  'skills.item.mysql.desc':
    'Sistema de gestión de bases de datos relacional ampliamente utilizado en aplicaciones web.',
  'skills.item.postgresql.desc':
    'Base de datos relacional avanzada, orientada a rendimiento, escalabilidad y confiabilidad.',
  'skills.item.postman.desc': 'Herramienta para pruebas, validación y documentación de APIs REST.',
  'skills.item.nestjs.desc':
    'Framework progresivo de Node.js para construir APIs y aplicaciones backend escalables con TypeScript.',
  'skills.item.express.desc':
    'Framework minimalista de Node.js para construir APIs y aplicaciones web del lado del servidor.',
  'skills.item.mongodb.desc':
    'Base de datos NoSQL orientada a documentos, ampliamente utilizada en aplicaciones modernas.',
  'skills.item.zod.desc':
    'Librería de validación de esquemas y datos con inferencia de tipos para TypeScript.',
  'skills.item.jwt.desc':
    'Estándar abierto para autenticación segura basada en tokens firmados.',
  'skills.item.typeorm.desc':
    'ORM de TypeScript para bases de datos relacionales como PostgreSQL, SQLite y MySQL.',
  'skills.item.sqlite.desc':
    'Base de datos relacional embebida, ligera y sin servidor, ideal para desarrollo local.',
  'skills.item.git.desc':
    'Sistema de control de versiones distribuido para la gestión del código fuente.',
  'skills.item.github.desc':
    'Plataforma para alojamiento de repositorios, trabajo colaborativo y control de versiones.',
  'skills.item.gitlab.desc':
    'Plataforma de repositorios con integración continua y herramientas de gestión de proyectos.',
  'skills.item.jira.desc':
    'Herramienta para la gestión de tareas, seguimiento de proyectos y metodologías ágiles.',
  'skills.item.vscode.desc': 'Editor de código utilizado para el desarrollo frontend y backend.',
  'skills.item.visualstudio.desc':
    'Entorno de desarrollo integrado para aplicaciones backend y soluciones .NET.',
  'skills.item.androidstudio.desc': 'IDE oficial para el desarrollo de aplicaciones Android.',
  'skills.item.figma.desc':
    'Herramienta de diseño UI/UX para prototipado y colaboración con equipos.',
  'skills.item.jenkins.desc':
    'Servidor de automatización para integración y entrega continua (CI/CD) de aplicaciones.',
  'skills.item.azureDevops.desc':
    'Plataforma de Microsoft para CI/CD, repositorios y gestión de proyectos ágiles.',
  'skills.item.trello.desc':
    'Herramienta de gestión de tareas basada en tableros Kanban para organizar el trabajo.',
  'skills.item.miro.desc':
    'Pizarra colaborativa online para diagramas, brainstorming y trabajo en equipo en tiempo real.',
  'skills.item.puppeteer.desc':
    'Librería de Node.js que controla Chromium para scraping y automatización de navegador.',
  'skills.item.vercel.desc':
    'Plataforma de despliegue serverless para aplicaciones frontend y full-stack.',
  'skills.item.claudeCode.desc':
    'Asistente de IA en la terminal para escribir, refactorizar y depurar código de forma agéntica.',
  'skills.item.copilot.desc':
    'Autocompletado de código con IA integrado al editor para acelerar el desarrollo.',
  'skills.item.cursor.desc':
    'Editor de código potenciado con IA para generar y editar código mediante lenguaje natural.',
  'skills.item.specDriven.desc':
    'Metodología de desarrollo asistido por IA basada en definir especificaciones claras antes de codear.',
  'skills.item.bmad.desc':
    'Framework de desarrollo ágil asistido por IA mediante agentes especializados por rol.',
  'skills.item.groq.desc':
    'Proveedor de inferencia de LLMs ultrarrápida, usado para el matching por IA en los proyectos.',

  // Footer
  'footer.text': 'Desarrollo',
  'footer.credit': 'Diseño inspirado en una plantilla de',

  // Sticky CTA (móvil)
  'stickyCta.label': 'Contactar a Horacio Barrios',
  'stickyCta.text': 'Contactar',

  // Modal de inspiración Figma
  'figma.title': 'Diseño que inspiró este portfolio',

  // Descripciones de proyectos
  'project.kickToAzar.desc':
    'Aplicación web full-stack para el análisis estadístico de loterías con scraping de datos. Actualmente enfocada en Quini 6, con la visión de expandirse a Loto, Telekino y otros juegos. Frontend en Angular 21 (Material Design + gráficos ECharts) y backend en NestJS con autenticación JWT, TypeORM y PostgreSQL (deploy full-stack en Vercel, con scraper automatizado 2 veces por semana, usando un Cron).',
  'project.machJobs.desc':
    'Aplicación web full-stack de búsqueda de empleo con matching por IA. El usuario importa su CV (PDF/Markdown/txt o texto) y la app lo estructura como perfil, agrega ofertas laborales reales de Argentina vía las APIs oficiales de agregadores de empleo (Careerjet y Jooble), evitando el scraping de portales y respetando así los términos y condiciones (ToS) de cada plataforma, y puntúa cada oferta contra su perfil con un score de ajuste según (skills que coinciden, faltantes y justificación). Las ofertas se ordenan por probabilidad de éxito y el usuario puede abrir la oferta original con un clic para postularse, marcando el estado (nueva/vista/descartada/postulada). Stack: Angular 22 (frontend) · Node + Express en TypeScript (backend) · MongoDB Atlas en producción y SQLite para desarrollo local · IA con Groq (free tier, enchufable) · despliegue serverless en Vercel.',
  'project.lineage2Eternal.desc':
    'Aplicación web para el servidor Lineage 2 Eternal crónica High Five, desarrollada en Angular 21, con diseño responsive y optimizada para SEO, que ofrece información detallada sobre el servidor, eventos, guías y comunidad. Desplegada en Vercel.',
  'project.lineage2Alika.desc':
    'Aplicación web para el servidor Lineage 2 Alika, crónica Essence. Desarrollada en Angular 21 con diseño responsive, información del servidor, guías para nuevos jugadores y sección de comunidad. Desplegada en Vercel.',
  'project.colvin.desc':
    'TheColvinCo.com es una tienda online especializada en la venta y envío de flores, plantas y regalos a domicilio, con enfoque en ramos y arreglos florales para ocasiones especiales.',
  'project.viajerosConB.desc':
    'Viajeros con B es una plataforma de contenido de viajes vinculada a B travel, enfocada en inspirar a los usuarios a través de artículos, experiencias y recomendaciones sobre destinos y estilos de viaje.',
};
