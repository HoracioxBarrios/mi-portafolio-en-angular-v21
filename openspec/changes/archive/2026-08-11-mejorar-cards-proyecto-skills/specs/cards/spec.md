## Purpose

Define el comportamiento observable de las cards del portafolio (card de proyecto, card de skill y sus modales de detalle): uniformidad de tamaños entre elementos del mismo tipo, apertura de lightbox desde la imagen de la card de proyecto y consistencia visual con el lenguaje de diseño del sitio.

## ADDED Requirements

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

### Requirement: Lightbox de imagen en la card de proyecto

Al hacer click en la imagen de una card de proyecto SHALL abrirse un overlay (lightbox) que muestra la imagen ampliada al tamaño del modal de detalle de esa card. El overlay SHALL incluir un control para cerrarlo y SHALL cerrarse también con la tecla Escape o click fuera de la imagen. La imagen del lightbox SHALL ser la imagen principal de la card (la que muestra el slider del detalle en su posición inicial).

#### Scenario: Click en la imagen de la card abre el lightbox

- **WHEN** el visitante hace click sobre la imagen de una card de proyecto
- **THEN** se abre un overlay mostrando esa imagen ampliada al tamaño del modal de detalle

#### Scenario: Cerrar el lightbox

- **WHEN** el lightbox está abierto y el visitante activa el botón de cierre, presiona Escape o hace click fuera de la imagen
- **THEN** el lightbox se cierra y el visitante vuelve a la card

#### Scenario: El lightbox no reemplaza a "Ver más..."

- **WHEN** el visitante activa el botón "Ver más..." de la card
- **THEN** se abre el modal de detalle de proyecto con descripción, botones y slider, de la misma forma que antes

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
