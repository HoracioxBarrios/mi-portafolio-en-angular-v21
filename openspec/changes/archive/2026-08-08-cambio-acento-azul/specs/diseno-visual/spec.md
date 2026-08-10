## MODIFIED Requirements

### Requirement: Identidad de color propia con acento azul

El sistema de color SHALL usar un acento azul propio (familia Material Blue previa del círculo del perfil: `#2196f3` en oscuro y `#1769c4` en claro, con variantes `#1976d2`/`#115293` y derivados `rgba(33,150,243,…)`/`rgba(23,105,196,…)` para fondos suaves), definido fuera de la paleta verde/lime, y el mismo acento SHALL mantenerse como identidad en ambos temas (oscuro y claro) con variantes legibles. El acento pleno SHALL seguir reservado para CTAs y acciones primarias, con variantes suaves en links, tags e indicadores.

#### Scenario: Acento azul en tema oscuro por defecto

- **WHEN** la app carga en tema oscuro (por defecto)
- **THEN** el color de acento visible (links, botones primarios, indicadores activos, tags) es el azul `#2196f3` (o su familia de contraste `#1976d2`), no lime/verde ni el verde de la propuesta anterior

#### Scenario: Acento coherente al alternar tema

- **WHEN** el usuario alterna al tema claro y luego vuelve al oscuro
- **THEN** el acento conserva la misma identidad cromática (misma familia azul) con variantes de contraste legibles en cada tema

#### Scenario: CTA reservado con acento azul

- **WHEN** el usuario ve un botón de acción primario (por ejemplo "Escribime" o "Ver proyecto")
- **THEN** ese botón usa el acento pleno azul reservado para CTA, de alto contraste contra su fondo

#### Scenario: Contraste AA del acento en ambos temas

- **WHEN** el usuario visualiza texto con el acento azul (links, nav activo, indicadores) sobre el fondo de cualquiera de los dos temas
- **THEN** el contraste cumple WCAG AA (mínimo 4.5:1 para texto normal)

#### Scenario: Componentes Material sin destaque verde

- **WHEN** se renderizan componentes de Angular Material (dialogs, ripples, iconos, estado de foco)
- **THEN** sus colores de acento provienen de la palette Material azul, sin restos de la palette lime/verde
