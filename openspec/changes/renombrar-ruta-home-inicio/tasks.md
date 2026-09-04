## 1. Implementación

- [x] 1.1 En `src/app/app.routes.ts`: cambiar `path: 'home'` a `path: 'inicio'`, actualizar los `redirectTo` de la raíz `''` y del wildcard `'**'` a `inicio`, y agregar el alias `{ path: 'home', redirectTo: 'inicio', pathMatch: 'full' }`
- [x] 1.2 En `src/app/shared/components/header/header.ts`: cambiar el nav link `{ id: 1, path: 'home', key: 'nav.home' }` a `path: 'inicio'`
- [x] 1.3 En `tests/playwright/pages/HomePage.ts`: cambiar `goto('/home')` a `goto('/inicio')` y actualizar el comentario de la cabecera
- [x] 1.4 En `tests/playwright/changes/cambio-acento-azul/cambio-acento-azul.spec.ts`: cambiar los 9 `page.goto('/home')` a `page.goto('/inicio')`
- [x] 1.5 En `tests/playwright/auth.setup.ts`: ajustar el regex de ruta template (`dashboard|home|profile`) reemplazando `home` por `inicio`
- [x] 1.6 En `tests/playwright/app-knowledge.md`: actualizar la tabla de rutas (`/` y `/home` → `/inicio`)

## 2. Verificación

- [x] 2.1 Pasar `npm run build` (sin lint configurado en el repo; typecheck vía build)
- [x] 2.2 Verificar con Playwright que `/inicio` muestra la landing, `/home` redirige a `/inicio`, la raíz `/` redirige a `/inicio` y la pestaña "Inicio" queda activa en el nav
- [x] 2.3 Ejecutar los tests e2e de `cambio-acento-azul` (ahora navegando a `/inicio`) y confirmar que pasan sin ajustes adicionales
- [x] 2.4 Verificar con búsqueda que en `src/` solo queden referencias de ruta a `home` en el alias del router y en nombres internos (componente, claves i18n)
