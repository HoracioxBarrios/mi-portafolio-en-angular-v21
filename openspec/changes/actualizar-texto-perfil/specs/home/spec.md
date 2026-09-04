## MODIFIED Requirements

### Requirement: Hero con propuesta de valor

El hero de la página de inicio SHALL mostrar el título de bienvenida, el badge con el puesto completo ("Software Developer | Angular & Ionic | AI Solutions & AI-Augmented Development") y un subtitle de propuesta de valor en el idioma activo. El subtitle en español SHALL ser "Desarrollador especializado en Angular e Ionic, con más de 3 años creando y manteniendo aplicaciones web y móviles, con experiencia en proyectos del sector público de gran escala.".

#### Scenario: El hero muestra título, badge y subtitle en español

- **WHEN** el visitante carga la página de inicio con el idioma activo en español
- **THEN** el hero muestra "Hola, soy Hora", el badge "Software Developer | Angular & Ionic | AI Solutions & AI-Augmented Development" y el subtitle "Desarrollador especializado en Angular e Ionic, con más de 3 años creando y manteniendo aplicaciones web y móviles, con experiencia en proyectos del sector público de gran escala."

#### Scenario: El hero muestra el subtitle en inglés

- **WHEN** el visitante carga la página de inicio con el idioma activo en inglés
- **THEN** el hero muestra el subtitle en inglés que comunica el mismo mensaje de propuesta de valor
