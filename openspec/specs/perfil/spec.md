# Perfil Specification

## Purpose

Define el comportamiento observable del perfil principal del portafolio: los datos personales del autor (nombre, puesto, ubicación, foto, redes sociales y enlace de portafolio) que el layout muestra al visitante.

## Requirements

### Requirement: Mostrar puesto completo del autor

El perfil principal SHALL mostrar el puesto completo del autor: "Software Developer | Angular & Ionic | AI Solutions & AI-Augmented Development". El hero de la página de inicio y el rol de la experiencia en "Sobre Mí" SHALL mostrar ese mismo puesto (adaptado al idioma en el hero: el mismo puesto completo), en lugar de los textos anteriores.

#### Scenario: El perfil muestra el puesto completo

- **WHEN** el visitante carga la página de inicio
- **THEN** el perfil muestra "Software Developer | Angular & Ionic | AI Solutions & AI-Augmented Development"

#### Scenario: El rol de la experiencia coincide con el puesto

- **WHEN** el visitante abre la sección "Sobre Mí"
- **THEN** el rol de la experiencia muestra "Software Developer (Angular / Ionic)"

### Requirement: No mostrar Instagram en las redes sociales

El perfil principal SHALL mostrar únicamente las redes sociales reales del autor: GitHub y LinkedIn. La red social Instagram SHALL NO mostrarse.

#### Scenario: Redes sociales sin Instagram

- **WHEN** el visitante carga el perfil principal
- **THEN** se muestran los enlaces de GitHub y LinkedIn y no aparece ningún enlace de Instagram

### Requirement: Mostrar periodo de experiencia actualizado

La sección "Sobre Mí" SHALL mostrar el periodo de la experiencia laboral actual como "Agosto 2023 – Actualidad".

#### Scenario: Periodo de experiencia actualizado

- **WHEN** el visitante abre la sección "Sobre Mí"
- **THEN** el periodo de la experiencia se muestra como "Agosto 2023 – Actualidad"
