# Cards Specification

## Purpose

Define el comportamiento observable de las cards del portafolio (card de proyecto, card de skill y sus modales de detalle): uniformidad de tamaños entre elementos del mismo tipo, apertura de lightbox desde la imagen en miniatura del modal de detalle de proyecto, botones de la card con posición fija y colores semánticos, y consistencia visual con el lenguaje de diseño del sitio.

## Requirements

### Requirement: Tamaño consistente entre cards del mismo tipo

Las cards del mismo tipo SHALL presentar dimensiones equivalentes entre sí independientemente de su contenido. Las cards de proyecto del grid SHALL mantener la misma altura y anchura; el modal de detalle de proyecto SHALL usar un ancho y un alto fijos para todos los proyectos; el modal de detalle de skill SHALL mantener un tamaño uniforme para todas las skills.

#### Scenario: Cards de proyecto del grid con el mismo tamaño

- **WHEN** se renderiza el grid de proyectos con proyectos de distinta longitud de descripción
- **THEN** todas las cards de proyecto de la misma fila muestran la misma altura y anchura

#### Scenario: Modal de proyecto con tamaño fijo

- **WHEN** el visitante abre el detalle de dos proyectos distintos
- **THEN** ambos modales usan el mismo ancho y el mismo alto, sin importar la longitud de la descripción o la cantidad de contenido

#### Scenario: Modal de skill con tamaño uniforme

- **WHEN** el visitante abre el detalle de skills con descripciones de distinta longitud
- **THEN** el modal de skill muestra el mismo tamaño en todos los casos

### Requirement: Lightbox de imagen desde el modal de detalle

El lightbox de imagen ampliada SHALL abrirse desde el modal de detalle del proyecto, no desde la card de proyecto. Al hacer click sobre la imagen en miniatura de la galería del modal SHALL abrirse un overlay que muestra esa imagen ampliada al tamaño del modal. El overlay SHALL incluir un control para cerrarlo y SHALL cerrarse también con la tecla Escape o click fuera de la imagen. La imagen mostrada SHALL ser la imagen activa del slider en el momento del click. La imagen de la card de proyecto SHALL NO abrir ningún overlay al hacer click sobre ella.

#### Scenario: Click en la imagen del modal abre el lightbox

- **WHEN** el visitante hace click sobre la imagen en miniatura de la galería dentro del modal de detalle
- **THEN** se abre un overlay mostrando esa imagen ampliada

#### Scenario: La card de proyecto no abre el lightbox

- **WHEN** el visitante hace click sobre la imagen de una card de proyecto en el grid
- **THEN** no se abre ningún overlay ni se modifica la navegación; la imagen de la card no es interactiva

#### Scenario: Cerrar el lightbox

- **WHEN** el lightbox está abierto y el visitante activa el botón de cierre, presiona Escape o hace click fuera de la imagen
- **THEN** el lightbox se cierra y el visitante vuelve al modal de detalle

### Requirement: Contenido del modal de proyecto con scroll interno

Cuando el contenido del modal de proyecto excede su alto fijo, el cuerpo del modal SHALL hacer scroll interno sin cambiar el tamaño del modal. La galería de imágenes del modal SHALL mantener una relación de aspecto fija y constante en todos los proyectos.

#### Scenario: Descripción larga dentro del modal fijo

- **WHEN** un proyecto tiene una descripción que excede el alto fijo del modal
- **THEN** el cuerpo del modal muestra scroll interno y el modal conserva su tamaño

#### Scenario: Galería con relación de aspecto fija

- **WHEN** se abre el detalle de cualquier proyecto
- **THEN** la zona de galería del modal muestra la misma relación de aspecto en todos los proyectos

### Requirement: Estilo visual consistente con el diseño del sitio

Las cards de proyecto, las cards de skill y sus modales SHALL usar el lenguaje visual del portafolio: superficies y bordes con el sistema de tokens (radius, sombras, bordes), acento por categoría en el caso de las skills y tipografía del diseño existente. Ninguna card SHALL verse genérica o desalineada respecto del resto de la UI.

#### Scenario: Cards acordes al diseño del sitio

- **WHEN** el visitante navega por las secciones de proyectos y skills
- **THEN** las cards y sus modales comparten el sistema de diseño del sitio (mismos tokens de radio, sombra y borde) y no se perciben con un acabado distinto al resto de la UI

### Requirement: Truncado de la descripción de la card de proyecto

La descripción de la card de proyecto SHALL reservar un espacio fijo de líneas visibles, con el mismo alto en todas las cards del grid. Cuando el texto excede ese espacio, SHALL truncarse mostrando tres puntos suspensivos ("...") únicamente al final del texto visible. La elipsis SHALL NO aparecer en una posición intermedia del texto ni desplazar el resto del contenido de la card.

#### Scenario: Descripción larga truncada con elipsis al final

- **WHEN** una card de proyecto tiene una descripción que supera el espacio fijo visible
- **THEN** el texto se corta dentro del espacio fijo y los tres puntos suspensivos aparecen al final del último fragmento visible

#### Scenario: Descripción corta sin elipsis

- **WHEN** una card de proyecto tiene una descripción que cabe en el espacio fijo
- **THEN** la descripción se muestra completa, sin puntos suspensivos, y el alto de la card no cambia

### Requirement: Posición fija de los botones de la card de proyecto

El botón "Ver más..." y los botones "Repositorio" y "Ver proyecto" SHALL mantener una posición fija y consistente dentro de la card de proyecto, independientemente de la longitud de la descripción o de la cantidad de tecnologías. El contenido superior SHALL NO empujar estos botones: "Ver más..." SHALL quedar ubicado justo bajo el espacio fijo de la descripción y los botones de acción SHALL quedar anclados al fondo de la card, alineados entre sí en todas las cards.

#### Scenario: Botones alineados con descripciones de distinta longitud

- **WHEN** el grid muestra cards de proyecto con descripciones de distinta longitud
- **THEN** el botón "Ver más..." y los botones "Repositorio" y "Ver proyecto" ocupan la misma posición relativa en todas las cards y no son desplazados por el texto

#### Scenario: Botones anclados al fondo de la card

- **WHEN** el contenido superior de la card varía en altura
- **THEN** la fila de botones "Repositorio" y "Ver proyecto" permanece alineada al fondo de la card, a la misma distancia del borde en todas las cards

### Requirement: Colores semánticos de los botones de la card de proyecto

Los botones de acción de la card de proyecto SHALL mostrar colores semánticos propios: el botón "Repositorio" con repositorio privado SHALL usar rojo `#d32f2f`; el botón "Repositorio" con repositorio público SHALL usar el verde del acento original del sitio (verde lima `#bef264` en tema oscuro y `#4d7c0f` en tema claro); el botón "Ver proyecto" SHALL usar azul `#2196f3` fijo en ambos temas. El texto sobre cada color SHALL permanecer legible.

#### Scenario: Repositorio privado en rojo

- **WHEN** la card de proyecto tiene un repositorio privado
- **THEN** el botón "Repositorio" se muestra con el color rojo `#d32f2f`

#### Scenario: Repositorio público en verde original

- **WHEN** la card de proyecto tiene un repositorio público
- **THEN** el botón "Repositorio" se muestra con el verde del acento original del sitio según el tema activo

#### Scenario: Ver proyecto en azul fijo

- **WHEN** la card de proyecto tiene un enlace de proyecto en vivo
- **THEN** el botón "Ver proyecto" se muestra con el color azul `#2196f3` en ambos temas
