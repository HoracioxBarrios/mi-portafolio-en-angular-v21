## Why

El copy actual del perfil ("Quién soy" en "Sobre Mí") y del subtítulo del hero ("Inicio") no refleja con precisión el posicionamiento actual del autor: desarrollador especializado en Angular e Ionic, con más de 3 años de experiencia en el sector público, foco en migraciones, arquitectura frontend, rendimiento, accesibilidad e IA generativa, y práctica de metodologías de desarrollo asistidas por IA (SDD, BMAD, OpenSpec). Un texto desactualizado resta credibilidad y claridad a la propuesta de valor de la landing.

## What Changes

- Reemplazar el texto de la descripción del perfil en "Quién soy" (clave i18n `about.description`) en español e inglés por el nuevo copy aportado por el autor, que describe la especialización, la experiencia y las metodologías.
- Ajustar el subtítulo del hero de Inicio (clave i18n `home.hero.subtitle`) en español e inglés para que sea armónico con el nuevo perfil (mismo posicionamiento, tono y foco), en lugar del texto actual que menciona solo "productos sólidos" y "trabajar más rápido y mejor".
- Corregir el texto aportado en detalles ortográficos menores (p. ej. "publico" → "público") manteniendo intacto el contenido.
- No cambia estructura, layout, componentes ni behaviors de navegación: solo se actualizan dos strings de contenido localizados (ES/EN).

## Capabilities

### New Capabilities

_Ninguna._

### Modified Capabilities

- `perfil`: cambia la descripción del autor que se muestra en la sección "Sobre Mí" (nuevo texto de `about.description` en ES/EN).
- `home`: cambia el subtítulo de propuesta de valor del hero de la página de inicio (nuevo texto de `home.hero.subtitle` en ES/EN).

## Impact

- `src/app/core/i18n/es.ts`: actualizar `about.description` y `home.hero.subtitle`.
- `src/app/core/i18n/en.ts`: actualizar las claves equivalentes en inglés.
- Sin cambios de tipos, interfaces, componentes, servicios, rutas ni dependencias.
- Verificación: build de Angular y revisión visual en "Inicio" y "Sobre Mí" en ES/EN.
