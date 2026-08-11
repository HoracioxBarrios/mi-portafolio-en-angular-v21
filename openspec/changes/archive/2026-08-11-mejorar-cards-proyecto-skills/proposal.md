## Why

Las cards del portafolio (card de skill y card de proyecto) lucen genéricas y con un acabado visual inferior al resto del diseño del sitio. Además, las cards del mismo tipo no tienen tamaños consistentes: el modal de proyecto cambia de tamaño según la cantidad de descripción y contenido de cada proyecto, y se observan diferencias de proporción entre cards del mismo tipo según su contenido.

## What Changes

- **Rediseño estético de la card de skill** (`skill-detail-dialog`): acabado más acorde al lenguaje visual del portafolio (superficies, bordes, acentos por categoría, jerarquía tipográfica), manteniendo el detalle de acento por stack (frontend/backend/tools/ia).
- **Rediseño estético de la card de proyecto** (`project-card`): imagen, contenido, acciones y tags más pulidos y consistentes con el diseño existente.
- **Lightbox en la imagen de la card de proyecto**: al hacer click en la imagen, la imagen crece hasta el tamaño del modal de detalle de esa card, en un overlay con botón de cierre. El comportamiento de "Ver más..." (abrir el modal de detalle) no cambia.
- **Tamaño consistente entre cards del mismo tipo**: las cards de proyecto del grid mantienen la misma altura/anchura entre sí independientemente del contenido; las cards de skill (iconos/grupos) y el modal de skill mantienen dimensiones coherentes.
- **Tamaño fijo + scroll interno en el modal de proyecto**: todos los modales de proyecto usan el mismo ancho y alto; si la descripción o contenido supera el alto fijo, el cuerpo del modal hace scroll interno. La galería mantiene una relación de aspecto fija.
- **Consistencia del modal de skill**: el `skill-detail-dialog` mantiene un tamaño uniforme para todas las skills, sin variar según la longitud de la descripción.

## Capabilities

### New Capabilities
- `cards`: comportamiento observable de las cards del portafolio (card de proyecto, card de skill y sus modales): uniformidad de tamaños entre cards del mismo tipo, apertura de lightbox al hacer click en la imagen de la card de proyecto, y tamaño consistente con scroll interno en los modales.

### Modified Capabilities
- (ninguna)

## Impact

- `src/app/features/proyectos/components/project-card/*` (TS, HTML, SCSS)
- `src/app/features/proyectos/components/project-detail-modal/*` (TS, HTML, SCSS)
- `src/app/shared/components/skill-detail-dialog/*` (HTML, SCSS)
- `src/app/shared/components/skills-icon/*` (TS, SCSS) solo si se requiere para el lightbox
- `src/styles.scss` (estilos globales de paneles de modales, clases `project-detail-panel` / `skill-detail-dialog-panel`)
- Traducciones `src/app/core/i18n/es.ts` y `en.ts` si se agregan textos accesibles nuevos (ej. label del lightbox)
