// Translation dictionary — English.
// Namespaced keys. Keep in sync with `es.ts`.

export const EN: Record<string, string> = {
  // Navigation
  'nav.home': 'Home',
  'nav.proyectos': 'Projects',
  'nav.sobreMi': 'About Me',
  'header.cvButton': 'My CV',
  'header.cvAria': 'Download my updated CV',

  // Home — Hero
  'home.hero.title': "Hi, I'm Hora",
  'home.hero.badge': 'Software Developer | Angular & Ionic | AI Solutions & AI-Augmented Development',
  'home.hero.subtitle':
    'Frontend Developer (Angular/Ionic) focused on building solid products, with experience integrating AI into the development flow to work faster and better.',
  'home.hero.ctaAbout': 'Get to know me',
  'home.hero.ctaProjects': 'See my projects',

  // Home — Featured projects
  'home.featured.title': 'Featured Projects',
  'home.featured.loading': 'Loading projects...',
  'home.featured.viewAll': 'View all projects',

  // Home — CTA
  'home.cta.title': 'Interested in what I do?',
  'home.cta.text':
    "I'm open to full-time positions and freelance projects. I reply within 24 hours.",
  'home.cta.button': 'Get in touch',

  // Projects
  'proyectos.label': 'Projects',
  'proyectos.title': 'A selection of my work',
  'proyectos.subtitle':
    'Apps built with a focus on performance, accessibility and user experience',

  // About me
  'about.title': 'Who I am',
  'about.description':
    'Angular developer with experience on large-scale public-sector projects — I shipped the project’s first generative-AI solution to production as a conversational assistant. I combine technical expertise in Angular (v12–v21) with modern AI-assisted development tools to deliver higher-quality solutions in less time.',
  'about.experience.title': 'Professional experience',
  'about.experience.company': 'Consultores en Desarrollos Tecnológicos S.A. — CABA',
  'about.experience.period': 'August 2023 – Present',
  'about.experience.role': 'Software Developer (Angular / Ionic)',
  'about.experience.l1':
    'Shipped a generative-AI conversational assistant to production — the first solution of its kind in the project.',
  'about.experience.l2': 'Improved performance, reducing bug reports by 40%.',
  'about.experience.l3':
    'Refactored the services layer, removing duplicate calls and reducing load times.',
  'about.experience.l4':
    'Modernized the UI/UX by implementing full redesigns from Figma prototypes.',
  'about.experience.l5':
    'Implemented ARIA labels, improving accessibility for users with low vision.',
  'about.experience.l6':
    'Independently migrated 3 Angular projects from versions 9 and 12 to version 16.',
  'about.experience.l7':
    'Built and maintained a mobile app with Angular and Ionic published on the Play Store and App Store.',
  'about.education.title': 'Education',
  'about.education.degree': 'University Technical Degree in Programming',
  'about.education.inst': 'UTN · 2023 – Present',

  // About — Certificates
  'about.certificados.title': 'Certificates',
  'about.certificados.subtitle': 'Training & certifications',
  'about.certificados.verCertificado': 'View certificate',
  'about.certificados.claudeCodeInAction.title': 'Claude Code in Action',
  'about.certificados.cSharp.title': 'C# Course',
  'about.certificados.angular.title': 'Angular Course',
  'about.certificados.claude101.title': 'Claude 101',
  'about.certificados.claudeCode101.title': 'Claude Code 101',
  'about.certificados.mcp.title': 'Introduction to Model Context Protocol',
  'about.certificados.agentSkills.title': 'Introduction to Agent Skills',
  'about.certificados.subAgents.title': 'Introduction to SubAgents',
  'about.certificados.devinFoundations.title': 'Devin Foundations Badge',
  'about.certificados.mcpAdvanced.title': 'Model Context Protocol: Advanced Topics',

  // Project card
  'card.seeMore': 'See more...',
  'card.repo': 'Repository',
  'card.viewProject': 'View project',
  'card.privateTitle': 'This repository is private',
  'card.privateAria': 'Private repository',
  'card.repoAria': 'View repository on GitHub',
  'card.liveAria': 'View live project',
  'card.privateMsg': 'The administrator marked this repo as private',
  'card.lightboxOpen': 'Enlarge image of',
  'card.lightboxClose': 'Close image',

  // Skills
  'skills.title': 'Tools & technologies',
  'skills.table.icon': 'Icon',
  'skills.table.name': 'Name',
  'skills.table.stack': 'Stack',
  'skills.table.description': 'Description',
  'skills.nav.prev': 'Scroll table left',
  'skills.nav.next': 'Scroll table right',
  'skills.group.frontend': 'Frontend',
  'skills.group.backend': 'Backend',
  'skills.group.tools': 'Tools',
  'skills.group.ia': 'AI',

  // Skills — Descriptions
  'skills.item.html5.desc':
    'Markup language used to structure web content in a semantic and accessible way.',
  'skills.item.css3.desc':
    'Defining visual styles, responsive layouts and animations for modern interfaces.',
  'skills.item.javascript.desc':
    'Core language for frontend logic and dynamic user interaction.',
  'skills.item.sass.desc':
    'CSS preprocessor that enables more organized, reusable and scalable styles.',
  'skills.item.angular.desc':
    'Framework for building SPA web applications, component-based with modular architecture.',
  'skills.item.typescript.desc':
    'JavaScript superset that adds static typing, improving code quality and maintainability.',
  'skills.item.ionic.desc':
    'Framework for building hybrid cross-platform mobile apps with web technologies and Angular.',
  'skills.item.rxjs.desc':
    'Reactive programming library for handling asynchronous data flows and events, widely used in Angular.',
  'skills.item.angularMaterial.desc':
    'Material Design-based UI component library, used across the portfolio projects.',
  'skills.item.csharp.desc':
    'Object-oriented language used to build business logic and backend services.',
  'skills.item.nodejs.desc':
    'JavaScript runtime for the server side, used for APIs, build tools and integrating REST APIs from job aggregators (Careerjet, Jooble).',
  'skills.item.python.desc':
    'Versatile, readable language used for scripting, automation and backend development.',
  'skills.item.dotnet.desc':
    'Framework for building robust, scalable backend APIs and applications.',
  'skills.item.mysql.desc':
    'Relational database management system widely used in web applications.',
  'skills.item.postgresql.desc':
    'Advanced relational database focused on performance, scalability and reliability.',
  'skills.item.postman.desc': 'Tool for testing, validating and documenting REST APIs.',
  'skills.item.nestjs.desc':
    'Progressive Node.js framework for building scalable TypeScript backend APIs and applications.',
  'skills.item.express.desc':
    'Minimalist Node.js framework for building server-side APIs and web applications.',
  'skills.item.mongodb.desc':
    'NoSQL document-oriented database, widely used in modern applications.',
  'skills.item.zod.desc':
    'Schema and data validation library with TypeScript type inference.',
  'skills.item.jwt.desc':
    'Open standard for secure authentication based on signed tokens.',
  'skills.item.typeorm.desc':
    'TypeScript ORM for relational databases such as PostgreSQL, SQLite and MySQL.',
  'skills.item.sqlite.desc':
    'Embedded, lightweight, serverless relational database, ideal for local development.',
  'skills.item.git.desc':
    'Distributed version control system for source code management.',
  'skills.item.github.desc':
    'Platform for hosting repositories, collaborative work and version control.',
  'skills.item.gitlab.desc':
    'Repository platform with continuous integration and project management tools.',
  'skills.item.jira.desc':
    'Tool for task management, project tracking and agile methodologies.',
  'skills.item.vscode.desc': 'Code editor used for frontend and backend development.',
  'skills.item.visualstudio.desc':
    'Integrated development environment for backend applications and .NET solutions.',
  'skills.item.androidstudio.desc': 'Official IDE for Android app development.',
  'skills.item.figma.desc': 'UI/UX design tool for prototyping and team collaboration.',
  'skills.item.jenkins.desc':
    'Automation server for continuous integration and delivery (CI/CD) of applications.',
  'skills.item.azureDevops.desc':
    'Microsoft platform for CI/CD, repositories and agile project management.',
  'skills.item.trello.desc':
    'Kanban board-based task management tool for organizing work.',
  'skills.item.miro.desc':
    'Collaborative online whiteboard for diagrams, brainstorming and real-time teamwork.',
  'skills.item.puppeteer.desc':
    'Node.js library that controls Chromium for scraping and browser automation.',
  'skills.item.vercel.desc':
    'Serverless deployment platform for frontend and full-stack applications.',
  'skills.item.claudeCode.desc':
    'AI terminal assistant for writing, refactoring and debugging code in an agentic way.',
  'skills.item.copilot.desc':
    'AI code completion integrated into the editor to speed up development.',
  'skills.item.cursor.desc':
    'AI-powered code editor for generating and editing code through natural language.',
  'skills.item.specDriven.desc':
    'AI-assisted development methodology based on defining clear specifications before coding.',
  'skills.item.bmad.desc':
    'Agile development framework assisted by AI through role-specialized agents.',
  'skills.item.groq.desc':
    'Ultra-fast LLM inference provider, used for AI matching across projects.',

  // Footer
  'footer.text': 'Development',
  'footer.credit': 'Design inspired by a template from',

  // Sticky CTA (mobile)
  'stickyCta.label': 'Contact Horacio Barrios',
  'stickyCta.text': 'Contact',

  // Figma inspiration modal
  'figma.title': 'Design that inspired this portfolio',

  // Project descriptions
  'project.kickToAzar.desc':
    'Full-stack web app for statistical analysis of lottery games with data scraping. Currently focused on Quini 6, with plans to expand to Loto, Telekino and other games. Angular 21 frontend (Material Design + ECharts charts) and a NestJS backend with JWT authentication, TypeORM and PostgreSQL (full-stack deploy on Vercel, with an automated scraper running twice a week via Cron).',
  'project.machJobs.desc':
    "Full-stack job search web app with AI-powered matching. The user imports their CV (PDF/Markdown/txt or text) and the app structures it as a profile, aggregates real job postings from Argentina via the official APIs of job aggregators (Careerjet and Jooble), avoiding portal scraping and thus respecting each platform's terms and conditions (ToS), and scores each posting against the profile with a fit score based on (matching skills, missing skills and justification). Job offers are sorted by likelihood of success and the user can open the original posting with a click to apply, marking the status (new/seen/discarded/applied). Stack: Angular 22 (frontend) · Node + Express in TypeScript (backend) · MongoDB Atlas in production and SQLite for local development · AI with Groq (free tier, pluggable) · serverless deployment on Vercel.",
  'project.lineage2Eternal.desc':
    'Web app for the Lineage 2 Eternal server (High Five chronicle), built with Angular 21, responsive and SEO-optimized, offering detailed information about the server, events, guides and community. Deployed on Vercel.',
  'project.lineage2Alika.desc':
    'Web app for the Lineage 2 Alika server (Essence chronicle). Built with Angular 21 with a responsive design, server information, guides for new players and a community section. Deployed on Vercel.',
  'project.colvin.desc':
    'TheColvinCo.com is an online store specialized in selling and delivering flowers, plants and gifts, focused on bouquets and floral arrangements for special occasions.',
  'project.viajerosConB.desc':
    'Viajeros con B is a travel-content platform linked to B travel, focused on inspiring users through articles, experiences and recommendations about destinations and travel styles.',
};
