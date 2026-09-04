## Purpose

Define el favicon e identidad del portafolio: el icono que se muestra en la pestaña del navegador y en marcadores, reemplazando el favicon genérico por un icono de desarrollador/código acorde a la identidad del proyecto.

## ADDED Requirements

### Requirement: Favicon de desarrollador/código

El portafolio SHALL mostrar un favicon que represente la identidad de desarrollador del sitio, usando el icono "code" de la colección Material Icons/Symbols de Google (licencia Apache 2.0). El favicon SHALL estar disponible en formato SVG (escalable, para navegadores modernos) y un fallback en formato ICO (para navegadores que solo soportan `.ico`). La página SHALL referenciar el SVG con el `.ico` como fallback.

#### Scenario: El navegador moderno muestra el favicon SVG

- **WHEN** el visitante abre el portafolio en un navegador moderno que soporta favicons SVG
- **THEN** la pestaña y los marcadores muestran el icono "code" de Material en formato SVG, nítido a cualquier tamaño

#### Scenario: Navegadores sin soporte SVG usan el fallback ICO

- **WHEN** el visitante abre el portafolio en un navegador que no soporta favicons SVG
- **THEN** el navegador usa el fallback en formato ICO, mostrando el mismo icono de desarrollador/código

#### Scenario: El favicon reemplaza al genérico

- **WHEN** el portafolio se carga
- **THEN** el favicon que se muestra es el nuevo icono de desarrollador/código y no el favicon genérico anterior
