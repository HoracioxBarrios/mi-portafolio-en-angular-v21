## Purpose

Define el comportamiento observable de la navegación principal del header como tabbar de Material: pestañas localizadas (Inicio / Proyectos / Sobre Mí), pestaña activa sincronizada con la ruta activa y controles de idioma y tema.

## Requirements

### Requirement: Navegación principal mediante tabs de Material

La navegación principal del header SHALL presentarse como un tabbar de Material con una pestaña por sección navegable: inicio, proyectos y sobre mí. La pestaña activa SHALL reflejar la ruta actual de la aplicación.

#### Scenario: El header muestra el tabbar con las secciones navegables

- **WHEN** se renderiza el header
- **THEN** se muestran las pestañas "Inicio", "Proyectos" y "Sobre Mí" como elementos de tipo tab, sin enlaces (`<a>`) como elemento de navegación principal

#### Scenario: Al hacer clic en una pestaña se navega a la sección

- **WHEN** el usuario activa la pestaña "Proyectos"
- **THEN** la aplicación navega a la ruta `/proyectos`

### Requirement: Pestaña activa sincronizada con la ruta

La pestaña seleccionada en el tabbar SHALL mantenerse sincronizada con la ruta activa: al navegar a una sección, su pestaña pasa a ser la activa; al navegar a una ruta no correspondiente a ninguna sección, la pestaña de inicio queda activa.

#### Scenario: Navegar a una sección marca su pestaña como activa

- **WHEN** el usuario navega a `/proyectos` (por URL, enlace o acción de la aplicación)
- **THEN** la pestaña "Proyectos" es la pestaña seleccionada del tabbar

#### Scenario: Ruta desconocida deja activa la pestaña de inicio

- **WHEN** la ruta actual no corresponde a ninguna sección del tabbar
- **THEN** la pestaña "Inicio" es la pestaña seleccionada del tabbar

### Requirement: Etiquetas del menú localizadas

Las etiquetas de las pestañas SHALL mostrarse en el idioma activo: en español "Inicio", "Proyectos" y "Sobre Mí"; en inglés "Home", "Projects" y "About Me".

#### Scenario: Etiquetas del tabbar en español

- **WHEN** el idioma activo es español
- **THEN** el tabbar muestra "Inicio", "Proyectos" y "Sobre Mí"

#### Scenario: Etiquetas del tabbar en inglés

- **WHEN** el idioma activo es inglés
- **THEN** el tabbar muestra "Home", "Projects" y "About Me"

### Requirement: Controles de idioma y tema en el header

El header SHALL incluir el control para alternar el idioma (ES/EN) y el control para alternar el tema claro/oscuro, junto al tabbar de navegación.

#### Scenario: Alternar idioma

- **WHEN** el usuario activa el control de idioma
- **THEN** las etiquetas de las pestañas cambian al idioma alterno

#### Scenario: Alternar tema

- **WHEN** el usuario activa el control de tema
- **THEN** la aplicación cambia entre tema oscuro y claro

### Requirement: Menú principal sin marca duplicada

El header SHALL contener únicamente el tabbar de navegación y sus controles, sin marca/logo clicable adicional que navegue a la página de inicio.

#### Scenario: El tabbar no contiene marca adicional

- **WHEN** se renderiza el header
- **THEN** no existe ningún enlace con la marca `HB` y la única forma de navegar a inicio es la pestaña "Inicio"/"Home"

### Requirement: Botón de descarga de CV en el header

El header SHALL incluir un botón de acceso al CV con la etiqueta "Mi CV" (en inglés "My CV"), de forma rectangular (no circular) para que quepa el texto, ubicado en la zona de controles junto a los controles de idioma y tema. Al activarlo, el botón SHALL abrir el CV en Google Drive en una pestaña nueva.

#### Scenario: El header muestra el botón de CV

- **WHEN** se renderiza el header
- **THEN** se muestra un botón con la etiqueta "Mi CV" (o "My CV" en inglés) en la zona de controles, junto al control de idioma y al control de tema, con forma rectangular que permita mostrar el texto

#### Scenario: Al activar el botón se abre el CV en una pestaña nueva

- **WHEN** el usuario activa el botón "Mi CV"
- **THEN** se abre el CV alojado en Google Drive en una pestaña nueva del navegador
