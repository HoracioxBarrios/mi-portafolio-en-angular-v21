## ADDED Requirements

### Requirement: Mensaje de repositorio privado visible y sin recorte

El mensaje que indica que un repositorio es privado SHALL mostrarse completo y legible, sin ser recortado por el contenedor de la card. El mensaje SHALL superponerse al frente de la card, visible por encima de cualquier otro contenido de la card, sin importar el `overflow` del contenedor padre.

#### Scenario: Mensaje completo al hacer click en repo privado

- **WHEN** el visitante presiona el botón "Repositorio" de una card con repo privado
- **THEN** el mensaje "El administrador marcó este repo como privado" se muestra completo, sin texto cortado, y superpuesto al frente de la card

#### Scenario: Mensaje no recortado por overflow de la card

- **WHEN** la card de proyecto tiene `overflow: hidden` (para el efecto de zoom de imagen)
- **THEN** el mensaje de repositorio privado NO es recortado por ese overflow y se渲染iza completamente visible

#### Scenario: Mensaje visible en todas las cards con repo privado

- **WHEN** el grid muestra múltiples cards de proyecto con repositorio privado
- **THEN** cada card muestra su mensaje de repo privado completo y sin recorte, sin importar la posición de la card en el grid
