## MODIFIED Requirements

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

## ADDED Requirements

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
