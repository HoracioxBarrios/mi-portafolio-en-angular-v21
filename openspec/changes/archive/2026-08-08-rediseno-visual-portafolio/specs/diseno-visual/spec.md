## Purpose

Define la identidad visual del portafolio: un sistema de diseño dark-first con acento neón, tipografía con carácter técnico y componentes coherentes que diferencian al sitio de cualquier plantilla genérica, preservando tema claro/oscuro, i18n y accesibilidad.

## ADDED Requirements

### Requirement: Identidad de color propia con acento neón

El sistema de color SHALL usar un acento neón propio, definido fuera de la paleta azul por defecto de Material (`#2196f3`), y el mismo acento SHALL mantenerse como identidad en ambos temas (oscuro y claro) con variantes legibles.

#### Scenario: Acento neón en tema oscuro por defecto

- **WHEN** la app carga en tema oscuro (por defecto)
- **THEN** el color de acento visible (links, botones primarios, indicadores activos, tags) es el neón definido por el sistema de tokens, distinto del azul `#2196f3` de Material

#### Scenario: Acento coherente al alternar tema

- **WHEN** el usuario alterna al tema claro y luego vuelve al oscuro
- **THEN** el acento conserva la misma identidad cromática (misma familia neón) con variantes de contraste legibles en cada tema

### Requirement: Sistema tipográfico con identidad

La tipografía SHALL usar al menos dos familias distintas con roles definidos: una fuente display para títulos y marca, y una fuente mono para elementos técnicos (tags de tecnologías, etiquetas, navegación, metadatos). Roboto deja de ser la única familia del sitio. La tipografía SHALL definir una escala de tamaños por breakpoint (desktop/móvil) y un tracking negativo en títulos para mantener jerarquía e impacto.

#### Scenario: Títulos con fuente display

- **WHEN** el usuario navega a cualquier ruta
- **THEN** los títulos (h1–h3) se renderizan con la fuente display definida, no con Roboto

#### Scenario: Detalles técnicos con fuente mono

- **WHEN** el usuario visualiza tags de tecnologías o metadatos técnicos (etiquetas de sección, períodos, código)
- **THEN** esos elementos se renderizan con la fuente mono definida

#### Scenario: Escala tipográfica adaptativa

- **WHEN** el usuario ve una página en desktop y luego en un viewport de teléfono
- **THEN** los tamaños de los títulos siguen la escala definida para cada breakpoint, sin depender de valores sueltos por componente

### Requirement: Navegación propia en el header

El header SHALL usar navegación propia con links estilizados y una marca visible (nombre o monograma), en lugar de las tabs crudas de Angular Material, manteniendo la ruta activa resaltada y el comportamiento de navegación SPA.

#### Scenario: Ruta activa resaltada en el header

- **WHEN** el usuario navega a la ruta "Proyectos" usando el header
- **THEN** el link de "Proyectos" se muestra como activo y la URL cambia a `/proyectos` sin recargar la página

#### Scenario: Controles del header preservados

- **WHEN** el usuario usa los controles de idioma y tema del header
- **THEN** la alternancia ES/EN y de tema claro/oscuro siguen funcionando con los mismos aria-labels accesibles

### Requirement: Hero y CTA sin degradados azul Material

El hero de la página de inicio y la sección CTA SHALL eliminar los degradados azul→púrpura fijos (`#1c275d→#3d6ae6` y `#5572f2→#6d25b5`) y adoptar un tratamiento visual coherente con el tema oscuro y el acento neón. El copy del hero SHALL comunicar una propuesta de valor específica (resultado o métrica concreta), no una afirmación genérica.

#### Scenario: Hero coherente con el tema oscuro

- **WHEN** el usuario carga `/home` en tema oscuro
- **THEN** el hero no muestra el degradado azul Material y su fondo/tratamiento visual respeta el tema y el acento neón definidos

#### Scenario: CTA sin degradado púrpura

- **WHEN** el usuario hace scroll a la sección CTA de `/home`
- **THEN** el fondo de la sección CTA no muestra el degradado púrpura `#5572f2→#6d25b5`

#### Scenario: Propuesta de valor específica en el hero

- **WHEN** el usuario lee el subtítulo del hero en `/home`
- **THEN** el texto menciona un resultado o métrica concreto (por ejemplo la primera solución de IA generativa en producción o la reducción de errores), no una promesa vaga

### Requirement: Escala consistente de radios y elevaciones

Todos los componentes SHALL usar una única escala de radios, espaciados y elevaciones definida en tokens, de modo que botones, tarjetas, secciones y pills compartan la misma proporción visual.

#### Scenario: Radios unificados

- **WHEN** el usuario visualiza botones, tarjetas de proyecto y secciones de "Sobre mí"
- **THEN** los radios de esquina provienen de la misma escala de tokens definida (sin valores sueltos inconsistentes entre componentes)

### Requirement: Funcionalidad y accesibilidad preservadas

El rediseño SHALL preservar la funcionalidad existente: i18n ES/EN, alternancia de tema, links sociales externos, galerías de imágenes y modales. Los elementos interactivos SHALL conservar aria-labels y la navegación por teclado.

#### Scenario: Funcionalidad de i18n y tema intacta

- **WHEN** el usuario alterna idioma (ES/EN) y tema (oscuro/claro) tras el rediseño
- **THEN** los textos cambian de idioma y los colores de tema cambian, sin errores en consola

#### Scenario: Contraste accesible en ambos temas

- **WHEN** el usuario visualiza texto principal en cualquier tema
- **THEN** el contraste entre texto y fondo cumple WCAG AA (mínimo 4.5:1 para texto normal)

### Requirement: Layout responsive mantenido

El rediseño SHALL mantener la grilla responsive de proyectos (1 columna en móvil, 2 en tablet, 3 en desktop) y el comportamiento adaptativo de las demás secciones.

#### Scenario: Grilla responsive de proyectos

- **WHEN** el usuario ve `/proyectos` en un viewport de teléfono y luego en desktop
- **THEN** la grilla se adapta a 1 columna en móvil y a 3 columnas en desktop, sin desbordes horizontales

### Requirement: Fondo con partículas sutiles

La aplicación SHALL mostrar un efecto de partículas de fondo (puntos flotantes con glow del acento neón) que sea discreto, no interactivo y no obstruya la lectura ni la interacción con el contenido.

#### Scenario: Partículas visibles en tema oscuro

- **WHEN** el usuario carga cualquier ruta en tema oscuro
- **THEN** se renderizan partículas de fondo sutiles con el acento neón del tema, sin líneas de conexión entre ellas

#### Scenario: Las partículas no interfieren con el contenido

- **WHEN** el usuario hace scroll o hace clic en enlaces, botones y tarjetas sobre las partículas
- **THEN** el efecto no captura clics, no genera scroll adicional y no impide la interacción con los elementos superpuestos

#### Scenario: Respeto de prefers-reduced-motion

- **WHEN** el usuario tiene activado `prefers-reduced-motion` en el sistema operativo
- **THEN** las partículas se muestran estáticas o el efecto se desactiva, sin animación

#### Scenario: Rendimiento aceptable en móvil

- **WHEN** el usuario navega en un dispositivo móvil con el efecto de partículas activo
- **THEN** la cantidad de partículas se reduce respecto al escritorio y la animación no degrada notablemente la fluidez

### Requirement: Color de CTA reservado para acciones primarias

El sistema de color SHALL reservar el acento pleno del CTA para las acciones primarias (botones de contacto y acciones principales), usando variantes suaves del acento en links, tags e indicadores activos para que el botón de acción conserve protagonismo visual.

#### Scenario: CTA con acento pleno

- **WHEN** el usuario ve un botón de acción primario (por ejemplo "Escribime" o "Ver proyecto")
- **THEN** ese botón usa el acento pleno reservado para CTA, de alto contraste contra su fondo

#### Scenario: Links y tags con acento suave

- **WHEN** el usuario visualiza links del header, tags de tecnologías o indicadores activos
- **THEN** esos elementos usan variantes suaves del acento (fondo/bloque en lugar del pleno del CTA), sin competir visualmente con el botón primario

### Requirement: Micro-interacciones de scroll

Las secciones de la aplicación SHALL entrar en viewport con un reveal sutil (fade-in escalonado), sin animaciones disruptivas, y SHALL desactivarse el movimiento cuando el usuario tiene activado `prefers-reduced-motion`.

#### Scenario: Reveal al hacer scroll

- **WHEN** el usuario hace scroll a una nueva sección en cualquier ruta
- **THEN** la sección entra suavemente en viewport con un fade-in breve, sin saltos de layout

#### Scenario: Sin animación con prefers-reduced-motion

- **WHEN** el usuario tiene activado `prefers-reduced-motion`
- **THEN** las secciones aparecen sin animación de reveal ni movimiento

### Requirement: Sticky CTA de contacto en móvil

En viewports móviles, la aplicación SHALL mostrar un botón flotante de contacto (sticky) con el color de CTA reservado, visible tras el primer scroll, que no ocupe demasiado espacio ni tape el contenido.

#### Scenario: Botón de contacto visible tras scroll

- **WHEN** el usuario hace scroll en `/home` desde un viewport de teléfono
- **THEN** aparece un botón flotante de contacto con el acento pleno del CTA, y desaparece al volver al inicio de la página

#### Scenario: El sticky CTA no bloquea el contenido

- **WHEN** el sticky CTA móvil está visible
- **THEN** no cubre el contenido principal interactivo (links, tarjetas) y respeta la altura de touch target accesible

### Requirement: Sección de Certificados en Sobre Mí

La página "Sobre Mí" SHALL incluir una sección de Certificados con tarjetas que muestren los certificados obtenidos (por ejemplo Udemy, Claude Code, Claude Code in Action, curso de C#, Curso de Angular), con título, plataforma/emisor y enlace (cuando esté disponible).

#### Scenario: Certificados visibles en Sobre Mí

- **WHEN** el usuario navega a `/sobre-mi` y hace scroll a la sección de certificados
- **THEN** se muestran tarjetas de certificados con el título, la plataforma/emisor y, si existe, el enlace al certificado

#### Scenario: Datos sin inventar

- **WHEN** un certificado aún no tiene URL o imagen reales cargadas
- **THEN** la tarjeta se muestra sin enlace roto y sin contenido inventado, con marcador `TODO(user)` en los datos

#### Scenario: Textos i18n ES/EN

- **WHEN** el usuario alterna idioma (ES/EN) en la sección de certificados
- **THEN** el título de la sección y los textos de plataforma se traducen y el contenido de los certificados se mantiene consistente

#### Scenario: Responsive de la sección de certificados

- **WHEN** el usuario ve la sección de certificados en un viewport de teléfono y luego en desktop
- **THEN** las tarjetas se adaptan a una columna en móvil y a una grilla de varias columnas en desktop, sin desbordes horizontales
