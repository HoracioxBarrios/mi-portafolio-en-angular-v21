## 1. i18n (diccionarios)

- [x] 1.1 Reemplazar el valor de `home.hero.subtitle` en `src/app/core/i18n/es.ts` por el copy aprobado (opción B) y en `en.ts` por su equivalente en inglés
- [x] 1.2 Agregar en `es.ts` las claves `header.cvButton` ("Mi CV") y `header.cvAria` ("Descargar mi CV actualizado") y sus equivalentes en `en.ts` ("My CV" / "Download my updated CV")

## 2. Datos del CV

- [x] 2.1 Agregar en `main-layout.ts` la propiedad `cvUrl` en `userInfo` con el link de Google Drive: `https://drive.google.com/file/d/1juiFa2ruwAO6TnKhPLkSBOxaKYLTNy_S/view?usp=sharing` y su getter `cvUrl`
- [x] 2.2 Pasar `[cvUrl]="cvUrl"` al `app-header` en `main-layout.html`
- [x] 2.3 Quitar la propiedad `portafolio` de `userInfo`, el getter `portafolioUrl` en `main-layout.ts` y el binding `[portafolioUrl]` en `main-layout.html`

## 3. Botón "Mi CV" en el header

- [x] 3.1 En `header.ts`: agregar input `cvUrl`, incorporar el label traducido y mantener el icono de descarga (importar `MatIconModule` ya está)
- [x] 3.2 En `header.html`: agregar en `header__controls` un enlace `<a>` con clase `header__cv-btn`, icono de descarga, texto `tr.t('header.cvButton')`, `[href]="cvUrl"`, `target="_blank"`, `rel="noopener"` y `[attr.aria-label]="tr.t('header.cvAria')"`
- [x] 3.3 En `header.scss`: crear `.header__cv-btn` rectangular (sin `border-radius` pill completo, usar `--radius-md`), con fondo de acento, texto e icono alineados, hover con `--accent-soft-bg`, y compacto para móvil

## 4. Quitar enlace "Portafolio" del perfil

- [x] 4.1 En `profile.html`: eliminar el bloque `@if (portafolioUrl)` con su enlace
- [x] 4.2 En `profile.ts`: quitar el input `portafolioUrl`
- [x] 4.3 En `es.ts`/`en.ts`: quitar la clave `profile.portafolio` si queda sin uso (verificar antes con búsqueda)

## 5. Verificación

- [x] 5.1 Verificar que no queden referencias a `portafolioUrl` ni `profile.portafolio` en el código (grep)
- [x] 5.2 Ejecutar lint y typecheck (si aplica, `npm run lint` y build `ng build`) y confirmar que pasan
