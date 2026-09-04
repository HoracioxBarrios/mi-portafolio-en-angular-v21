## ADDED Requirements

### Requirement: Mostrar descripción actualizada del autor

La sección "Sobre Mí" SHALL mostrar la descripción del autor en el idioma activo. En español SHALL ser "Soy un Desarrollador especializado en Angular e Ionic Framework, con más de 3 años de experiencia desarrollando aplicaciones web y móviles para proyectos de gran escala del sector público. Experiencia en migraciones de Angular, arquitectura frontend, optimización de rendimiento, accesibilidad e integración de soluciones basadas en Inteligencia Artificial Generativa. Aplicación de metodologías de desarrollo asistidas por IA como Spec-Driven Development (SDD), BMAD Method y OpenSpec para mejorar la productividad, calidad y mantenibilidad del código. Orientado a la innovación y adopción de prácticas modernas de desarrollo". En inglés SHALL mostrarse una traducción equivalente que comunique el mismo mensaje.

#### Scenario: La sección "Sobre Mí" muestra la descripción actualizada en español

- **WHEN** el visitante abre la sección "Sobre Mí" con el idioma activo en español
- **THEN** se muestra la descripción del autor que comienza con "Soy un Desarrollador especializado en Angular e Ionic Framework, con más de 3 años de experiencia" y menciona migraciones de Angular, arquitectura frontend, rendimiento, accesibilidad, IA generativa y las metodologías Spec-Driven Development (SDD), BMAD Method y OpenSpec

#### Scenario: La descripción se muestra localizada en inglés

- **WHEN** el visitante abre la sección "Sobre Mí" con el idioma activo en inglés
- **THEN** se muestra la descripción en inglés que comunica el mismo mensaje y cubre los mismos puntos (especialización Angular/Ionic, experiencia, metodologías asistidas por IA)
