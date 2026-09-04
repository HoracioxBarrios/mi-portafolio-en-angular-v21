## ADDED Requirements

### Requirement: URL de la página de inicio en español

La página de inicio SHALL servirse en la ruta `/inicio`. La ruta `/home` SHALL redirigir a `/inicio` para no romper URLs existentes (bookmarks y links externos). La raíz `/` y las rutas no reconocidas SHALL redirigir a `/inicio`.

#### Scenario: La página de inicio se sirve en /inicio

- **WHEN** el visitante accede a la URL `/inicio`
- **THEN** se muestra la página de inicio

#### Scenario: /home redirige a /inicio

- **WHEN** el visitante accede a la URL `/home`
- **THEN** se redirige a `/inicio` y se muestra la página de inicio

#### Scenario: La raíz redirige a /inicio

- **WHEN** el visitante accede a la URL raíz `/`
- **THEN** se redirige a `/inicio` y se muestra la página de inicio
