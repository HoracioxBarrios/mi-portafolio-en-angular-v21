## 1. Corrección del overflow en la card

- [x] 1.1 Eliminar `overflow: hidden` de `.project-card` en `project-card.scss` (línea 7)
- [x] 1.2 Verificar que el zoom de la imagen en hover no se desborda de la card (`.project-card__image-wrapper` ya tiene `overflow: hidden` propio)- [x] 1.3 Verificar que el mensaje de repo privado se muestra completo y sin recorte al hacer click en el botón "Repositorio" de una card con `repoPrivate: true`

## 2. Verificación visual

- [x] 2.1 Probar en tema oscuro y tema claro que el mensaje se ve correctamente
- [x] 2.2 Probar en diferentes tamaños de viewport (desktop, tablet, mobile) que el mensaje no se recorte
- [x] 2.3 Verificar que el hover de la card (translateY + sombra) no afecta la posición del mensaje
- [x] 2.4 Ejecutar lint y typecheck para confirmar que no hay errores
