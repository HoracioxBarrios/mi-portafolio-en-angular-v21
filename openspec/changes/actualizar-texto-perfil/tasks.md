## 1. Actualizar textos i18n en español

- [x] 1.1 Actualizar `home.hero.subtitle` en `es.ts` con el nuevo copy del hero en español: "Desarrollador especializado en Angular e Ionic, con más de 3 años creando y manteniendo aplicaciones web y móviles, con experiencia en proyectos del sector público de gran escala."
- [x] 1.2 Actualizar `about.description` en `es.ts` con el nuevo copy del perfil en español aportado por el autor ("Soy un Desarrollador especializado en Angular e Ionic Framework, con más de 3 años de experiencia desarrollando aplicaciones web y móviles para proyectos de gran escala del sector público. Experiencia en migraciones de Angular, arquitectura frontend, optimización de rendimiento, accesibilidad e integración de soluciones basadas en Inteligencia Artificial Generativa. Aplicación de metodologías de desarrollo asistidas por IA como Spec-Driven Development (SDD), BMAD Method y OpenSpec para mejorar la productividad, calidad y mantenibilidad del código. Orientado a la innovación y adopción de prácticas modernas de desarrollo")

## 2. Actualizar textos i18n en inglés

- [x] 2.1 Actualizar `home.hero.subtitle` en `en.ts` con la traducción equivalente del nuevo copy del hero ("Developer specialized in Angular and Ionic, with over 3 years building and maintaining web and mobile apps, with experience on large-scale public-sector projects.")
- [x] 2.2 Actualizar `about.description` en `en.ts` con la traducción equivalente del nuevo copy del perfil
- [x] 2.3 Verificar que no queden claves i18n huérfanas ni duplicadas tras el cambio (las claves son las mismas, solo cambia su valor)

## 3. Verificación

- [x] 3.1 Ejecutar el build y confirmar que compila sin errores TypeScript
- [x] 3.2 En el navegador (dev server), revisar "Inicio" y "Sobre Mí": el subtítulo del hero y la descripción del perfil muestran los nuevos textos en español
- [x] 3.3 Alternar a inglés y verificar que ambos textos muestran la traducción correcta y coherente en "Inicio" y "Sobre Mí"
