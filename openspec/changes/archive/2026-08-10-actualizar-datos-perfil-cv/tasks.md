## 1. Actualizar datos del perfil principal

- [x] 1.1 En `src/app/layout/main-layout/main-layout.ts` actualizar `userInfo.tecnologias` al puesto completo: `["Software Developer | Angular & Ionic | AI Solutions & AI-Augmented Development"]`
- [x] 1.2 En `src/app/layout/main-layout/main-layout.ts` quitar la red social Instagram de `userInfo.redesSociales`, dejando GitHub y LinkedIn
- [x] 1.3 En `src/app/layout/main-layout/main-layout.ts` agregar el dato `portafolio: 'https://mi-portafolio-horacio-barrios.vercel.app'` a `userInfo` y exponer el getter `portafolioUrl`
- [x] 1.4 En `src/app/layout/main-layout/main-layout.html` pasar el nuevo input `[portafolioUrl]="portafolioUrl"` a `<app-profile>`

## 2. Agregar enlace de portafolio al componente perfil

- [x] 2.1 En `src/app/shared/components/profile/profile.ts` agregar `@Input() portafolioUrl` (opcional)
- [x] 2.2 En `src/app/shared/components/profile/profile.html` renderizar un enlace a `portafolioUrl` reutilizando la clase `profile__social-link` (con ícono y label)
- [x] 2.3 En `src/app/shared/components/profile/profile.scss` verificar/reutilizar estilos existentes para el nuevo enlace sin romper el layout

## 3. Actualizar textos i18n

- [x] 3.1 En `src/app/core/i18n/es.ts` actualizar `home.hero.badge` al puesto completo del CV
- [x] 3.2 En `src/app/core/i18n/es.ts` actualizar `about.experience.role` a "Software Developer (Angular / Ionic)" y `about.experience.period` a "Agosto 2023 – Actualidad"
- [x] 3.3 En `src/app/core/i18n/en.ts` actualizar `home.hero.badge`, `about.experience.role` y `about.experience.period` de forma equivalente (mantener paridad de claves con `es.ts`)
- [x] 3.4 Si se usa un label traducible para el enlace de portafolio, agregar la clave `profile.portafolio` en `es.ts` y `en.ts`

## 4. Verificar

- [x] 4.1 Ejecutar `npx tsc --noEmit -p tsconfig.app.json` y confirmar que compila sin errores
- [x] 4.2 Revisión visual en servidor local: perfil con puesto completo, GitHub + LinkedIn sin Instagram, enlace de portafolio visible, y Sobre Mí con rol y periodo actualizados (en español e inglés)
