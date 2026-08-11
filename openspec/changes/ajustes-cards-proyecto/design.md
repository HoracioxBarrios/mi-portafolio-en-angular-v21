## Context

Estado actual: tras `mejorar-cards-proyecto-skills`, el lightbox (`ProjectImageLightbox`, standalone, se abre con `MatDialog` y los paneles `project-lightbox-panel`/`project-lightbox-backdrop` en `styles.scss`) se abre desde la imagen de la card. El modal de detalle (`ProjectDetailModal`) tiene tamaño fijo (`min(80vh, 720px)`), galería con `aspect-ratio: 16/10` y cuerpo con scroll. La descripción de la card usa `-webkit-line-clamp: 4` con `min-height: 110px` (que no coincide con 4 líneas → cajas de alto variable y elipsis descolocadas). Las acciones usan `margin-top: auto` pero los tags van debajo de ellas, lo que desplaza los botones según el alto de los tags. Motivación en `proposal.md`; requisitos observables en `specs/cards/spec.md`.

## Goals / Non-Goals

**Goals:**
- Mover la apertura del lightbox desde la imagen de la card al modal de detalle, reutilizando `ProjectImageLightbox` sin cambios.
- Descripción de la card con espacio fijo de N líneas y elipsis únicamente al final del texto visible.
- "Ver más..." y las acciones "Repositorio"/"Ver proyecto" en posición fija, sin ser empujados por el contenido superior.
- Colores semánticos de los botones de la card: privado `#d32f2f`, público verde original, "Ver proyecto" `#2196f3` fijo en ambos temas.

**Non-Goals:**
- No cambiar los colores de los botones del modal de detalle (no fueron solicitados).
- No tocar la card de skill ni el modal de skill.
- No cambiar el tamaño del modal de proyecto ni la galería (`16/10`).
- No agregar datos ni modelos nuevos.

## Decisions

### D1. El lightbox se abre desde el modal de detalle
- En `project-card.html` se elimina el `<button class="project-card__image-btn">`; la imagen vuelve a ser un `<img>` directo dentro del wrapper (sin click ni `cursor: zoom-in` ni focus-visible). Se conservan `aspect-ratio: 2/1`, `object-fit: cover` y el zoom hover.
- En `project-card.ts` se elimina `openImageLightbox()` y el import de `ProjectImageLightbox`.
- En `project-detail-modal.ts` se agrega `openLightbox()` que abre `ProjectImageLightbox` con `{ image: this.slides[this.index()], alt: this.project.title }` usando el mismo `panelClass`/`backdropClass`. Solo se importa el tipo (standalone, sin declararlo en `imports`, patrón ya usado en la card).
- En `project-detail-modal.html` la imagen de la galería se envuelve en un `<button type="button">` con `(click)="openLightbox()"` y `[attr.aria-label]="tr.t('card.lightboxOpen') + ' ' + project.title"`. Se reutilizan las claves `card.lightboxOpen`/`card.lightboxClose` existentes (sin cambios de i18n).

**Por qué no un overlay inline:** se conserva `MatDialog` (Escape, focus trap, aria-modal, lock de scroll) y el componente ya existe.

### D2. Truncado de la descripción con elipsis al final
En `project-card.scss`, `.project-card__description` pasa de `min-height: 110px` a un alto exacto de 4 líneas: `line-height: 1.65` + `height: 6.6em` (= 4 × 1.65) manteniendo `display: -webkit-box; -webkit-line-clamp: 4; line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;`. Al ser altura fija, todas las cards reservan el mismo espacio y la elipsis aparece únicamente al final del bloque visible cuando el texto excede las 4 líneas; el texto corto no muestra elipsis ni deja posiciones desalineadas.

**Alternativa considerada:** `text-overflow: ellipsis` simple (1 línea) — rechazada: recorta demasiado texto y la card tiene espacio para 4 líneas.

### D3. Botones en posición fija
En `project-card.html` se reordena el contenido de la card: título → descripción (altura fija de D2) → "Ver más..." → **tags de tecnologías** → **acciones**. Así `.project-card__actions` (con su `margin-top: auto` ya existente) queda como último elemento y los botones "Repositorio"/"Ver proyecto" se anclan siempre al borde inferior de la card, sin ser empujados ni por la descripción ni por los tags (los tags, al ir antes, ya no desplazan la fila de botones). "Ver más..." queda justo bajo la descripción, en posición estable porque la descripción tiene altura fija.

**Impacto en tests e2e:** los selectores `.project-card__tag`, `.project-card__action--primary` y el rol de botón "Ver más..." no dependen del orden del DOM; se re-verifican en apply.

### D4. Colores semánticos de los botones de la card
Se agregan tokens semánticos en `_tokens.scss` y se asignan a modificadores de `.project-card__action`:

| Botón | Token | Tema oscuro | Tema claro |
|---|---|---|---|
| Repositorio privado | `--repo-private` | `#d32f2f` | `#d32f2f` |
| Repositorio público | `--repo-public-bg` / `--repo-public-text` | `#bef264` / `#0b0f0d` | `#4d7c0f` / `#ffffff` |
| Ver proyecto | `--repo-live` / texto | `#2196f3` / `#0b0f0d` | `#2196f3` / `#0b0f0d` |

- **Ver proyecto**: hoy usa `var(--accent)`; pasa a `var(--repo-live)` con texto oscuro `#0b0f0d` (contraste ≈6.1:1 sobre `#2196f3`, cumple AA). En ambos temas `#2196f3` fijo (decisión del usuario).
- **Repositorio público**: se agrega el modificador `.project-card__action--repo` (verde original pre-azul: lima `#bef264` en oscuro con texto oscuro —el CTA original—, `#4d7c0f` en claro con texto blanco) y se aplica al enlace público en el template.
- **Repositorio privado**: `.project-card__action--private` pasa de `var(--danger)` a `var(--repo-private)` `#d32f2f` con texto blanco (contraste ≈5.8:1, cumple AA). Se mantiene el hover con `brightness(0.92)`.
- Hovers: tonos más fuertes usando la escala existente (lime `#a3e635` para oscuro del público; `brightness` para privado y azul).

**Por qué tokens y no valores inline:** los hex fijos quedan centralizados y legibles, y el "verde original" se define por tema (el acento pre-azul ya era bicolor).

## Risks / Trade-offs

- [Cambio de orden de tags/acciones en el DOM de la card] → selectores e2e existentes no dependen del orden; se verifica con Playwright al aplicar (lightbox ya no abre desde la card, "Ver más..." sigue abriendo el modal).
- [`height: 6.6em` con `line-height` variable por fuente descargada] → la fuente del body es la misma en todo el sitio; si se ajusta `line-height`, recalcular el `em` en apply.
- [Azul `#2196f3` fijo en tema claro reduce contraste del acento del sitio] → mitigación: solo afecta al botón "Ver proyecto" de la card (no al resto de la UI); el texto sobre el botón se mantiene oscuro para cumplir AA.
- [`#d32f2f` con texto blanco] → contraste ≈5.8:1, cumple AA; se verifica visualmente en apply.

## Migration Plan

- No hay migración de datos ni API; es un cambio de UI autocontenido en `project-card.*`, `project-detail-modal.*` y `_tokens.scss`.
- Rollback: revertir el commit del apply.
- Verificación post-apply: `ng build` (sin lint en el repo), Playwright sobre `http://localhost:4200` (click en imagen de card sin lightbox; click en imagen del modal abre el lightbox; descripción truncada con elipsis al final; botones alineados al fondo con descripciones largas; colores de los tres estados de botón).

## Open Questions

- Ninguna que bloquee. El número exacto de líneas visibles de la descripción (4) puede afinarse visualmente en apply sin cambiar specs ni tareas.
