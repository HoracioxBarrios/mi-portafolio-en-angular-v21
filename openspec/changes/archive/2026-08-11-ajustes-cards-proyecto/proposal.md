## Why

Tras aplicar `mejorar-cards-proyecto-skills`, el comportamiento de las cards de proyecto quedó con dos problemas observables: (1) el lightbox de imagen se abre desde la imagen de la card, cuando el flujo deseado es abrirlo desde la imagen en miniatura dentro del modal de detalle; y (2) el contenido de la card (descripción, botón "Ver más..." y botones de acción) se ve desalineado y varía según la longitud del texto, con los puntos suspensivos de truncado apareciendo en cualquier posición y los botones siendo empujados por el contenido superior. Además, los botones de acción requieren colores semánticos propios.

## What Changes

- **BREAKING (sobre el change anterior):** la imagen de la card de proyecto deja de ser clickeable; ya no abre el lightbox. El lightbox pasa a abrirse desde dentro del modal de detalle: al hacer click sobre la imagen en miniatura (galería) del modal, se abre la imagen ampliada.
- La descripción de la card de proyecto reserva un espacio fijo de líneas visibles; cuando el texto lo excede, se corta con tres puntos suspensivos **al final** del texto visible (corrigiendo el truncado actual que coloca la elipsis en cualquier parte).
- El botón "Ver más..." y los botones "Repositorio" y "Ver proyecto" quedan en posición fija dentro de la card y no son empujados por el contenido superior.
- Colores semánticos de los botones de la card de proyecto:
  - "Repositorio" privado: `#d32f2f`.
  - "Repositorio" público: verde original del sitio (acento previo al cambio a azul).
  - "Ver proyecto": `#2196f3` fijo en ambos temas.

## Capabilities

### New Capabilities
- (ninguna)

### Modified Capabilities
- `cards`: cambia el requisito del lightbox (pasa de la card al modal de detalle) y agrega requisitos de truncado de descripción, posición fija de botones y colores semánticos de los botones de la card de proyecto.

## Impact

- `src/app/features/proyectos/components/project-card/project-card.html` y `.scss`: se quita el botón/lightbox de la imagen; se ajusta layout de descripción y botones; se aplican colores semánticos a las acciones.
- `src/app/features/proyectos/components/project-card/project-card.ts`: se elimina `openImageLightbox()` (el modal asume esa responsabilidad).
- `src/app/features/proyectos/components/project-detail-modal/project-detail-modal.html` y `.ts`: se hace clickeable la imagen de la galería para abrir el lightbox con la imagen actual (`slides[index()]`).
- `src/app/features/proyectos/components/project-image-lightbox/`: se reutiliza tal cual; solo cambia el origen del click.
- `src/app/core/i18n/es.ts` y `en.ts`: se ajusta/elimina la clave `card.lightboxOpen` de la card; se agrega clave de apertura desde el modal si aplica.
- No hay cambios de API ni de dependencias.
