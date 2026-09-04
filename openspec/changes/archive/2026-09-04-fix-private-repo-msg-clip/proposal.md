## Why

Al presionar el botón "Repositorio" en una card de proyecto con repo privado, el mensaje "El administrador marcó este repo como privado" se muestra cortado y por dentro de la card. Esto ocurre porque `.project-card` tiene `overflow: hidden` (necesario para el efecto de zoom de la imagen en hover) y el mensaje usa `position: absolute` dentro del mismo contenedor, por lo que el overflow lo recorta.

## What Changes

- Mover el mensaje de repositorio privado fuera del contexto de `overflow: hidden` de la card para que se muestre completo y superpuesto al frente de la card.
- Evaluar si el mismo problema existe en el `project-detail-modal` (actualmente solo tiene un botón deshabilitado sin burbuja de mensaje, así que no está afectado).

## Capabilities

### Modified Capabilities

- `cards`: Agregar requirement de que el mensaje de repositorio privado SHALL mostrarse completo, fuera del contexto de overflow de la card, sin ser recortado.

## Impact

- Archivos afectados: `project-card.scss` (cambio de posicionamiento del mensaje), posiblemente `project-card.ts` (si se necesita calcular posición con `position: fixed`).
- Sin cambios en APIs, dependencias ni datos.
- El `project-detail-modal` no requiere cambios (no tiene burbuja de mensaje).
