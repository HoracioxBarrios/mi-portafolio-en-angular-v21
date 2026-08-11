## Context

Estado actual relevante: las cards y modales viven en `project-card`, `project-detail-modal` y `skill-detail-dialog`. El proyecto ya usa `MatDialog` para ambos modales (con `panelClass` globales en `src/styles.scss`), tokens de diseño en `abstracts/variables` (`--surface`, `--radius-*`, `--shadow-*`, `--accent*`, `--border-*`) y `JetBrains Mono` para etiquetas/code. La motivación está en `proposal.md` (Why); los requisitos observables en `specs/cards/spec.md`. Este documento define solo el "cómo".

## Goals / Non-Goals

**Goals:**
- Apertura de lightbox a tamaño de modal al hacer click en la imagen de la card de proyecto, reutilizando la infraestructura de `MatDialog` (accesibilidad gratis: focus trap, Escape, backdrop).
- Modal de proyecto con ancho y alto fijos para todos los proyectos y scroll interno cuando el contenido excede el alto.
- Modal de skill con tamaño uniforme sin importar la longitud de la descripción.
- Cards de proyecto del grid con proporción de imagen y dimensiones uniformes entre sí.
- Pulido estético de card de skill, card de proyecto y sus modales usando exclusivamente los tokens existentes (sin introducir un sistema visual nuevo).

**Non-Goals:**
- No agregar lightbox dentro del modal de detalle (solo desde la card).
- No cambiar datos/modelos de proyecto ni agregar campos.
- No rediseñar el resto del sitio ni el grid de skills como sistema.
- No migrar a otro framework de diálogos (se mantiene Angular Material).

## Decisions

### D1. Lightbox de imagen implementado con `MatDialog`
Se crea un componente ligero `ProjectImageLightbox` que recibe `image` y `alt`, y se abre con `dialog.open(..., { panelClass: 'project-lightbox-panel', backdropClass: 'project-lightbox-backdrop' })`, con el mismo ancho que el modal de detalle (`width: '90%'`, `maxWidth: '950px'`) y alto acotado (imagen `object-fit: contain` dentro de un área de hasta `min(80vh, 720px)`). El panel reutiliza el patrón de `skill-detail-dialog-panel` (container transparente, sin surface) en `styles.scss`.

**Por qué `MatDialog` y no un overlay inline:** el cierre por Escape, el click en backdrop, el focus trap, el `aria-modal` y el lock de scroll ya los da `MatDialog`. Un overlay manual con un `signal` duplicaría esa lógica y arriesgaría a11y. **Alternativa considerada:** overlay inline en `project-card` — rechazada por lo anterior.

### D2. Modal de proyecto con alto fijo y scroll interno
Se fija el tamaño en la apertura del diálogo (`width: '90%'`, `maxWidth: '950px'`, `height: 'min(80vh, 720px)'`). En `project-detail-modal.scss`, `.project-detail-modal` pasa a `display: flex; flex-direction: column; height: 100%`, el header queda fijo y `.modal__content` ocupa el resto con `flex: 1; min-height: 0; overflow-y: auto`. La galería conserva su `aspect-ratio: 16 / 10` (ya fija). Así, dos proyectos con distinta descripción abren modales idénticos en tamaño y solo cambia el scroll del cuerpo.

**Alternativa considerada:** alto según contenido (estado actual) — rechazada porque es la causa de la inconsistencia reportada.

### D3. Modal de skill con tamaño uniforme
En `skill-detail-dialog.scss` se fija `width: min(360px, 92vw)` y un alto máximo (`max-height: min(80vh, 560px)`) con el `.skill-dialog__body` en scroll (`overflow-y: auto`) si la descripción es larga. Banner e ícono montado mantienen tamaño fijo.

### D4. Cards de proyecto del grid uniformes
Se reemplaza el alto variable del wrapper de imagen (`clamp(160px, 22vw, 220px)`) por una relación de aspecto fija `2 / 1` (mismas proporciones de las screenshots reales, que miden ~2.05–2.09:1) con `object-fit: cover`. **Decisión tomada en apply:** el design original proponía `16/10` (igual que la galería del modal), pero al renderizar se midió un recorte lateral de ~23% del ancho con `cover` (las screenshots son ~2:1); el usuario optó por `2 / 1`, que reduce el recorte a ~2–4% y sigue garantizando cards uniformes entre sí. La card ya usa `height: 100%` y `margin-top: auto` en acciones, y la descripción ya está clampada a 4 líneas con altura mínima; se conserva ese patrón para que todas las cards de una fila midan lo mismo. En pantallas pequeñas la grid ya colapsa a 1 columna.

**Alternativa considerada:** dejar el alto por `clamp` — rechazada porque no garantiza proporciones idénticas entre cards.

### D5. Pulido visual con los tokens existentes (anti "look genérico IA")
- **Card de skill**: se refina el banner (degradado sutil del acento por stack ya implementado, sin cambiar la paleta), icono montado, jerarquía tipográfica y radius/sombras consistentes (`--radius-lg`, `--shadow-lg`). Se mantiene el acento por categoría (frontend/backend/tools/ia). **Anti-patrón evitado:** no se introducen degradados púrpura/azul "AI-slop"; todo usa los acentos del sitio.
- **Card de proyecto**: zoom sutil de la imagen al hover (`transform: scale(1.05)` dentro del wrapper `overflow: hidden`), hover de tarjeta con elevación existente, y refinamiento de espaciados/tags/botones con los tokens actuales.
- No se agregan features no pedidas (badges, fechas, etc.).

## Risks / Trade-offs

- [Cambios de markup/clases rompen tests e2e de Playwright que apuntan a selectores de las cards] → verificar selectores en `tests/playwright`; si se cambian clases, actualizar los selectores o usar `data-testid` estables.
- [`aspect-ratio: 16/10` puede recortar screenshots que no matchean esa proporción] → mitigación: `object-fit: cover` + `object-position: center` y revisar visualmente cada asset de `public/images` durante el apply.
- [Modal de alto fijo en pantallas muy chicas] → mitigación: `height: min(80vh, 720px)` y en móvil el layout ya pasa a una columna; el scroll interno cubre el resto.
- [Lightbox con imágenes muy anchas/panorámicas] → `object-fit: contain` dentro del área acotada evita distorsión.

## Migration Plan

- No hay migración de datos ni de API. Es un cambio de UI.
- Rollback: revertir el commit del apply (cambio autocontenido en los componentes y `styles.scss`).
- Verificación post-apply: `ng build`, lint+typecheck, y prueba e2e con Playwright sobre `http://localhost:4200` (abrir modal de proyecto con descripción larga y verificar tamaño consistente, y abrir lightbox desde la imagen).

## Open Questions

- Ninguna que bloquee. Las decisiones de tamaño concreto (altos/anchores) pueden afinarse visualmente durante el apply sin cambiar specs ni tareas.
