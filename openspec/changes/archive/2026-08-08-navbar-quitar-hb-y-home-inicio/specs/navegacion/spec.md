## Purpose

Define el comportamiento observable del menú de navegación principal del sitio: las rutas que expone, las etiquetas localizadas que muestra y cómo se marca el enlace de la página activa.

## ADDED Requirements

### Requirement: Menú principal sin marca duplicada

El menú de navegación principal SHALL contener únicamente los enlaces a las secciones navegables del sitio y NO incluir la marca/logo (iniciales `HB`) como un enlace adicional a la página de inicio. La marca no SHALL aparecer como elemento clicable ni como indicador de ruta activa en el header.

#### Scenario: El navbar no contiene la marca HB

- **WHEN** se renderiza el header de la aplicación
- **THEN** no existe ningún enlace con el texto `HB` en el navbar y el único enlace a la página de inicio es el tab "Inicio"/"Home"

#### Scenario: No hay indicador activo duplicado en la ruta de inicio

- **WHEN** el usuario navega a la página de inicio
- **THEN** solo el tab de inicio muestra el estado activo (`aria-current="page"`), sin que ningún otro elemento del header lo repita

### Requirement: Etiquetas del menú localizadas

Los enlaces del menú SHALL mostrar su etiqueta en el idioma activo: en español el enlace a la página de inicio se muestra como "Inicio" y el resto de secciones en su equivalente en español ("Proyectos", "Sobre Mí"); en inglés se muestran en inglés ("Home", "Projects", "About Me").

#### Scenario: Etiquetas del menú en español

- **WHEN** el idioma activo es español
- **THEN** el menú muestra "Inicio", "Proyectos" y "Sobre Mí"

#### Scenario: Etiquetas del menú en inglés

- **WHEN** el idioma activo es inglés
- **THEN** el menú muestra "Home", "Projects" y "About Me"
