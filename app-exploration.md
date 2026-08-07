# App Exploration — MiPortafolioEnAngularV21

Modo: **all** | Fecha: 2026-08-07
Base URL: `http://localhost:4200` | Framework: Angular 21 (SPA, Material Design)

## Rutas descubiertas

Fuente: `src/app/app.routes.ts` (sitemap.xml no existe → link extraction + verificación de rutas).

| Ruta | Estado | Título | Elemento clave | Notas |
|------|--------|--------|----------------|-------|
| `/` | 200 → redirige a `/home` | Horacio Barrios — Angular Developer | hero | Redirect a `/home` (SPA) |
| `/home` | 200 | Horacio Barrios — Angular Developer | `<h1>Horacio Javier Barrios</h1>` | Landing + hero |
| `/proyectos` | 200 | Horacio Barrios — Angular Developer | `<h2>Una selección de mi trabajo</h2>` | Grid de proyectos, botones "Ver más..." |
| `/sobre-mi` | 200 | Horacio Barrios — Angular Developer | sin `h1` propio | Links sociales |

## Auth

**No requerida.** Landing pública sin guards de autenticación en `app.routes.ts` (sin `canActivate`, sin redirect a `/login`).

## Navegación (header)

- **Tabs Material** (`mat-tab-group`): `Home`, `Proyectos`, `Sobre Mí` → selector `[role="tab"]` / `.mat-mdc-tab`
- **Botón idioma**: `header__lang-btn` → `aria-label="Switch to English"` (texto visible: `EN`)
- **Botón tema**: `header__icon-btn` → `aria-label="Activar tema claro"` (texto visible: `light_mode`)
- **Links sociales** (header + footer): GitHub (`github.com/HoracioxBarrios`), LinkedIn (`linkedin.com/in/horacioxbarrios`), Instagram

## Elementos verificados por ruta

### Home (`/home`)
- `h1`: "Horacio Javier Barrios"
- CTAs: "Conóceme más" (`/sobre-mi`), "Ver mis proyectos" (`/proyectos`), "Ver todos los proyectos" (`/proyectos`)
- Link `mailto:` (Escribime)
- Proyectos destacados con link externo "Ver proyecto"

### Proyectos (`/proyectos`)
- `h2`: "Una selección de mi trabajo"
- Botones "Ver más..." (varios, 1 por tarjeta)
- Botones "Repositorio privado" (`aria-label`, con icono `lock`)
- Botón "Figma Community"
- Links externos a Vercel (proyectos desplegados)

### Sobre Mí (`/sobre-mi`)
- Links sociales GitHub/LinkedIn/Instagram (sin botones de acción adicionales)

## Errores de consola

Ninguno detectado en ninguna ruta (0 console errors, 0 page errors).

## Elementos especiales

| Elemento | Señal | Estrategia |
|----------|-------|------------|
| Tabs de navegación | `mat-tab-group` / `[role="tab"]` | `getByRole('tab', { name: 'Proyectos' })` |
| Iconos Material (Material Icons) | texto tipo `light_mode`, `lock`, `code` | No son accesibles semánticamente; usar `aria-label` del botón contenedor |
