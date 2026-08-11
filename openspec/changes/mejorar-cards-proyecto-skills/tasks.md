## 1. Lightbox de imagen del proyecto

- [x] 1.1 Crear componente `ProjectImageLightbox` en `src/app/features/proyectos/components/project-image-lightbox/` (ts/html/scss) que reciba `image` y `alt`, muestre la imagen con `object-fit: contain` y botón de cierre con `aria-label` y focus visible
- [x] 1.2 Añadir el panel `project-lightbox-panel` (container transparente) y `project-lightbox-backdrop` en `src/styles.scss`, reutilizando el patrón de `skill-detail-dialog-panel`
- [x] 1.3 Registrar el lightbox en `declarations`/imports del módulo o standalone de proyectos
- [x] 1.4 En `project-card.ts`, añadir método que abra el lightbox con `MatDialog` (`width: '90%'`, `maxWidth: '950px'`, `panelClass: 'project-lightbox-panel'`, `backdropClass`) pasando `project.image` y el título como `alt`
- [x] 1.5 En `project-card.html`, hacer la imagen de la card clickeable (botón con `aria-label` i18n) y que "Ver más..." siga abriendo el modal de detalle sin cambio de comportamiento
- [x] 1.6 Añadir claves i18n del lightbox/`aria-label` en `es.ts` y `en.ts`

## 2. Modal de proyecto con tamaño fijo y scroll interno

- [x] 2.1 En `project-detail-modal.ts`, fijar `width: '90%'`, `maxWidth: '950px'` y `height: 'min(80vh, 720px)'` en la apertura del diálogo
- [x] 2.2 En `project-detail-modal.scss`, convertir `.project-detail-modal` a flex column con `height: 100%`, header fijo y `.modal__content` con `flex: 1; min-height: 0; overflow-y: auto`
- [x] 2.3 Verificar que la galería mantiene `aspect-ratio: 16/10` y que el slider/layout responde dentro del nuevo alto fijo (incluido el breakpoint de 1 columna en móvil)

## 3. Modal de skill con tamaño uniforme

- [x] 3.1 En `skill-detail-dialog.scss`, fijar `width: min(360px, 92vw)` y `max-height: min(80vh, 560px)` con `.skill-dialog__body` en `overflow-y: auto`, manteniendo banner e ícono montado de tamaño fijo

## 4. Cards de proyecto del grid uniformes

- [x] 4.1 En `project-card.scss`, reemplazar el alto del wrapper de imagen por `aspect-ratio: 16/10` con `object-fit: cover` y `object-position: center`
- [x] 4.2 Añadir zoom sutil al hover de la imagen (`overflow: hidden` + `transform: scale(1.05)` con transición) y hover de tarjeta con la elevación existente
- [x] 4.3 Revisar visualmente cada asset de `public/images` para confirmar que `cover` no recorta contenido relevante

## 5. Pulido visual de cards y modales

- [x] 5.1 Refinar card de skill: jerarquía tipográfica, radius y sombras con los tokens existentes (`--radius-lg`, `--shadow-lg`), sin cambiar la paleta de acentos por stack
- [x] 5.2 Refinar card de proyecto: espaciados, tags y botones con los tokens actuales; sin agregar features no pedidas
- [x] 5.3 Revisar anti-patrones del diseño (sin degradados genéricos "AI-slop", sin paletas ajenas al sitio) en ambos modales

## 6. Verificación

- [x] 6.1 Pasar lint y typecheck (`ng lint` y `tsc --noEmit` o equivalentes del repo) — sin ESLint en el repo; verificado con `npm run build`
- [x] 6.2 Verificar con Playwright en `http://localhost:4200`: apertura de lightbox desde la imagen de la card, "Ver más..." abriendo el modal, modal de proyecto con tamaño fijo y scroll con descripción larga, y modal de skill con tamaño uniforme
- [x] 6.3 Revisar que no haya cambios en las capabilities existentes (`navegacion`, `perfil`) y que los tests e2e no rompan por cambios de markup (ajustar selectores si aplica)
