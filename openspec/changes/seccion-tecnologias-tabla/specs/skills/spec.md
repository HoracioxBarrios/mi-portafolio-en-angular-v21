## Purpose

Define el comportamiento observable de la sección "Herramientas y tecnologías" del portafolio, presentada como un listado tipo tabla con columnas de icono, nombre, stack y descripción, cuyo contenido unifica las skills del CV del autor y las tecnologías usadas en sus proyectos publicados.

## ADDED Requirements

### Requirement: Sección de tecnologías como tabla de columnas

La sección "Herramientas y tecnologías" SHALL presentarse como un listado tipo tabla con cuatro columnas en este orden: **icono**, **nombre**, **stack** y **descripción**. Cada fila SHALL representar una tecnología distinta y SHALL mostrar su icono (imagen o logo), su nombre, el stack al que pertenece y una descripción breve en el idioma activo.

#### Scenario: La sección muestra la tabla con sus columnas

- **WHEN** el visitante abre la sección "Herramientas y tecnologías"
- **THEN** se muestra una tabla con las columnas de icono, nombre, stack y descripción, con al menos una fila por tecnología

#### Scenario: El stack se muestra localizado

- **WHEN** el visitante ve la tabla en español
- **THEN** los valores de la columna stack se muestran como Frontend, Backend, Herramientas e IA

#### Scenario: La descripción se muestra localizada

- **WHEN** el visitante cambia el idioma activo de la aplicación
- **THEN** las descripciones de la tabla se muestran en el idioma activo

### Requirement: Dataset unificado de skills y tecnologías de proyectos

La tabla SHALL incluir, en un solo listado, la unión de las skills del CV del autor y las tecnologías usadas en los proyectos publicados en la sección "Proyectos" (por ejemplo, Angular, Angular Material, NestJS, Express, MongoDB, PostgreSQL, Groq, Vercel, Puppeteer, entre otras). Ninguna tecnología declarada en los proyectos publicados SHALL quedar excluida del listado.

#### Scenario: La tabla incluye tecnologías de los proyectos

- **WHEN** el visitante consulta la tabla
- **THEN** se listan tecnologías que aparecen en los proyectos publicados (como NestJS, Express, MongoDB o Groq) además de las skills del CV

#### Scenario: La tabla incluye las skills del CV

- **WHEN** el visitante consulta la tabla
- **THEN** se listan las skills principales del CV del autor (como Angular, Ionic, RxJS, TypeScript y PostgreSQL)

### Requirement: Filas con detalle interactivo

Cada fila de la tabla SHALL permitir abrir un modal de detalle de la tecnología al activarla (clic o teclado), mostrando información ampliada de la tecnología. El modal SHALL ser accesible por teclado.

#### Scenario: El visitante abre el detalle de una tecnología

- **WHEN** el visitante activa una fila de la tabla
- **THEN** se abre un modal con el detalle de la tecnología correspondiente

### Requirement: Tabla responsive

La tabla SHALL ser responsive: en viewports de escritorio SHALL mostrar las cuatro columnas en línea, y en viewports de teléfono SHALL conservar la legibilidad de las cuatro columnas mediante scroll horizontal o una disposición que no corte el contenido.

#### Scenario: La tabla es legible en teléfono

- **WHEN** el visitante ve la sección en un viewport de teléfono
- **THEN** la tabla mantiene sus cuatro columnas legibles mediante scroll horizontal o disposición adaptada

#### Scenario: La tabla es legible en desktop

- **WHEN** el visitante ve la sección en un viewport de escritorio
- **THEN** la tabla muestra las cuatro columnas en línea sin scroll
