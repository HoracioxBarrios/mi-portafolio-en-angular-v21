## 1. Mover el lightbox de la card al modal de detalle

- [x] 1.1 En `project-card.html`, quitar el `<button class="project-card__image-btn">` que envuelve la imagen y dejar el `<img class="project-card__image">` directo (sin click, sin `cursor: zoom-in`); mantener `aspect-ratio: 2/1`, `object-fit: cover` y el zoom hover
- [x] 1.2 En `project-card.ts`, eliminar el método `openImageLightbox()` y el import del tipo `ProjectImageLightbox`
- [x] 1.3 En `project-card.scss`, eliminar los estilos `.project-card__image-btn` (cursor/focus-visible) y ajustar `.project-card__image-wrapper` para que el `<img>` mantenga el fill
- [x] 1.4 En `project-detail-modal.ts`, agregar `openLightbox()` que abra `ProjectImageLightbox` con `{ image: slides[index()], alt: project.title }` usando `panelClass: 'project-lightbox-panel'` y `backdropClass: 'project-lightbox-backdrop'`; importar solo el tipo
- [x] 1.5 En `project-detail-modal.html`, envolver el `<img class="modal__image">` en un `<button type="button">` con `(click)="openLightbox()"` y `[attr.aria-label]="tr.t('card.lightboxOpen') + ' ' + project.title"`
- [x] 1.6 Verificar con Playwright que click en la imagen de la card NO abre lightbox y que click en la imagen de la galería del modal SÍ lo abre (y cierra con Escape/backdrop)

## 2. Truncado de la descripción con elipsis al final

- [x] 2.1 En `project-card.scss`, `.project-card__description`: reemplazar `min-height: 110px` por `height: 6.6em` manteniendo `line-height: 1.65`, `-webkit-line-clamp: 4`/`line-clamp: 4` y `overflow: hidden`
- [x] 2.2 Verificar en el navegador que descripciones largas muestran la elipsis al final del bloque visible y que descripciones cortas no muestran elipsis, con alto de card idéntico en ambos casos

## 3. Posición fija de botones

- [x] 3.1 En `project-card.html`, reordenar el contenido: título → descripción → "Ver más..." → tags de tecnologías → acciones (`.project-card__actions` como último elemento)
- [x] 3.2 En `project-card.scss`, asegurar que `.project-card__actions` mantiene `margin-top: auto` y que el espacio fijo de la descripción deja estable al botón "Ver más..."
- [x] 3.3 Verificar con Playwright que "Ver más..." y la fila "Repositorio"/"Ver proyecto" quedan alineados al mismo lugar en cards con descripciones y tags de distinta longitud

## 4. Colores semánticos de los botones

- [x] 4.1 En `src/styles/themes/_tokens.scss`, agregar tokens `--repo-private: #d32f2f`, `--repo-public-bg`/`--repo-public-text` (oscuro: `#bef264`/`#0b0f0d`; claro: `#4d7c0f`/`#ffffff`) y `--repo-live: #2196f3` con texto `#0b0f0d` fijo en ambos temas
- [x] 4.2 En `project-card.scss`, `.project-card__action--primary` (Ver proyecto) pasa a `var(--repo-live)` con texto `#0b0f0d`; agregar modificador `.project-card__action--repo` (público) con los tokens verdes; `.project-card__action--private` pasa a `var(--repo-private)` con texto blanco
- [x] 4.3 En `project-card.html`, aplicar la clase `project-card__action--repo` al enlace de repositorio público y mantener los modificadores existentes en privado y "Ver proyecto"
- [x] 4.4 Verificar visualmente en tema oscuro y claro los tres estados de botón (privado rojo, público verde original, ver proyecto azul fijo)

## 5. Verificación

- [x] 5.1 Pasar `npm run build` (sin lint configurado en el repo; typecheck vía build)
- [x] 5.2 Revisar que no hayan cambios en capabilities fuera de `cards` y que los tests e2e (`tests/playwright`) sigan pasando (selectores `.project-card__tag`, `.project-card__action--primary`, rol "Ver más...") sin ajustes
- [x] 5.3 Limpiar referencias muertas (claves i18n sin uso, estilos huérfanos) en los archivos tocados
