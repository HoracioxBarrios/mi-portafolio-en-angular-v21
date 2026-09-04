## Purpose

Define el comportamiento observable de la sección de Certificados de "Sobre Mí": reúne y muestra de forma localizada (ES/EN) las certificaciones y cursos del usuario con su título, plataforma/emisor y atributos opcionales (año, enlace, imagen).

## ADDED Requirements

### Requirement: Lista de certificaciones actualizada

La sección de Certificados SHALL mostrar la lista actualizada de certificaciones provista por el usuario, en el orden dado: Angular (Udemy), C# (Udemy), Claude 101 (Anthropic), Claude Code in Action (Anthropic), Claude Code 101 (Anthropic), Introduction to Model Context Protocol (Anthropic), Introduction to Agent Skills (Anthropic), Introduction to SubAgents (Anthropic) y Devin Foundations Badge (Devin AI · Cognition).

#### Scenario: Se muestran las 9 certificaciones actualizadas

- **WHEN** el visitante navega a `/sobre-mi` y hace scroll a la sección de Certificados
- **THEN** se muestran las 9 certificaciones de la lista actualizada, cada una con su título y su plataforma/emisor tal como los definió el usuario

#### Scenario: Plataforma correcta de Claude Code in Action

- **WHEN** se muestra el certificado "Claude Code in Action"
- **THEN** su plataforma/emisor es "Anthropic" (no Udemy)

#### Scenario: Certificados sin atributos opcionales se muestran de forma tolerante

- **WHEN** una certificación no tiene año, URL de verificación o imagen reales cargados
- **THEN** la tarjeta se renderiza sin esos elementos (sin enlace ni imagen) sin errores ni datos inventados

### Requirement: Localización de los títulos

Los títulos de las certificaciones SHALL resolverse mediante claves i18n de modo que al alternar idioma (ES/EN) la sección mantenga títulos coherentes: los nombres oficiales en inglés (Claude 101, Claude Code 101, Introduction to Model Context Protocol, Introduction to Agent Skills, Introduction to SubAgents, Devin Foundations Badge) se mantienen como tales, y los títulos de cursos preexistentes (Angular, C#) conservan su traducción actual.

#### Scenario: Títulos localizados al alternar idioma

- **WHEN** el visitante alterna el idioma entre ES y EN en la sección de Certificados
- **THEN** los títulos que tienen traducción la reflejan (p. ej. Angular/C#), y los nombres oficiales en inglés se muestran consistentes en ambos idiomas

#### Scenario: Subtítulo y enlace localizados

- **WHEN** se muestra la sección en ES o EN
- **THEN** el título de sección, el subtítulo y el texto del enlace "Ver certificado" se muestran en el idioma activo
