## ADDED Requirements

### Requirement: Botón de descarga de CV en el header

El header SHALL incluir un botón de acceso al CV con la etiqueta "Mi CV" (en inglés "My CV"), de forma rectangular (no circular) para que quepa el texto, ubicado en la zona de controles junto a los controles de idioma y tema. Al activarlo, el botón SHALL abrir el CV en Google Drive en una pestaña nueva.

#### Scenario: El header muestra el botón de CV

- **WHEN** se renderiza el header
- **THEN** se muestra un botón con la etiqueta "Mi CV" (o "My CV" en inglés) en la zona de controles, junto al control de idioma y al control de tema, con forma rectangular que permita mostrar el texto

#### Scenario: Al activar el botón se abre el CV en una pestaña nueva

- **WHEN** el usuario activa el botón "Mi CV"
- **THEN** se abre el CV alojado en Google Drive en una pestaña nueva del navegador
