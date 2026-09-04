## Context

El componente `project-card` renderingiza un mensaje de repositorio privado (`<p class="project-card__private-msg">`) dentro de `.project-card__actions`, que a su vez está dentro de `<article class="project-card">`. La card tiene `overflow: hidden` (línea 7 de `project-card.scss`), necesario para contener el zoom de la imagen en hover. El mensaje usa `position: absolute` con `top: calc(100% + 0.4rem)`, lo que lo posiciona fuera del área visible de `.project-card__actions` pero dentro del overflow de la card → el navegador lo recorta.

El `overflow: hidden` a nivel de card es redundante: `.project-card__image-wrapper` ya tiene su propio `overflow: hidden` (línea 32) que contiene el zoom de la imagen. El border-radius de la card se aplica por separado.

## Goals / Non-Goals

**Goals:**
- Que el mensaje de repo privado se muestre completo y legible al frente de la card
- Mantener el efecto de zoom de la imagen en hover
- Solución quirúrgica, sin refactorizar componentes ni cambiar estructura de datos

**Non-Goals:**
- Cambiar el sistema de notificaciones del portafolio (no hay toast/snackbar global)
- Modificar el `project-detail-modal` (no tiene burbuja de mensaje, solo botón deshabilitado)
- Agregar dependencias nuevas (CDK overlay u otras)

## Decisions

### Decisión 1: Eliminar `overflow: hidden` de `.project-card`

**Rationale**: El `overflow: hidden` a nivel de card solo sirve para contener la imagen, pero `.project-card__image-wrapper` ya lo hace. El border-radius de la card se aplica independientemente. Eliminarlo permite que el `position: absolute` del mensaje escape naturalmente del área de la card.

**Alternativa descartada**: Usar `position: fixed` con cálculo de coordenadas en JS → innecesariamente complejo para este caso, introduce dependencia de `getBoundingClientRect()` y lógica de recálculo en resize/scroll.

**Verificación**: Confirmar que el zoom de imagen en hover no se desborda de la card al quitar `overflow: hidden` del article. Si `image-wrapper` ya lo contiene (tiene su propio `overflow: hidden`), no hay regresión.

### Decisión 2: Mantener `position: absolute` con `z-index` elevado

**Rationale**: El mensaje ya tiene `position: absolute; z-index: 10`. Sin `overflow: hidden` en el padre, esto funciona correctamente. No hay necesidad de cambiar a `position: fixed` ni usar CDK overlay.

## Risks / Trade-offs

- **[Riesgo]**: Al quitar `overflow: hidden` de `.project-card`, algún contenido interno podría desbordarse visualmente. **Mitigación**: `.project-card__image-wrapper` ya tiene `overflow: hidden` para la imagen; el resto del contenido (texto, tags, botones) tiene `overflow: hidden` implícito por ser block/flex elements con texto que se trunca con `-webkit-line-clamp`. Riesgo mínimo.

- **[Trade-off]**: Si en el futuro se agrega contenido que pueda desbordar la card (ej: animaciones grandes), podría necesitarse reintroducir overflow control a nivel de card. **Mitigación**: Se puede usar `overflow: clip` en lugar de `hidden` si se necesita preservar el border-radius sin recortar contenido absoluto.
