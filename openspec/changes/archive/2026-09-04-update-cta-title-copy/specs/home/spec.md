## MODIFIED Requirements

### Requirement: CTA de contacto con correo electrónico

La sección de contacto de la página de inicio SHALL mostrar el titular "¿Te interesa lo que hago?" (en inglés "Interested in what I do?"), el texto de apertura a posiciones full-time y proyectos freelance con respuesta en menos de 24 horas, y un botón que abra el cliente de correo del visitante dirigido al email del autor.

#### Scenario: El botón de contacto abre el cliente de correo

- **WHEN** el visitante activa el botón "Escribime" en la sección de contacto
- **THEN** se abre el cliente de correo del visitante con el email del autor como destinatario

#### Scenario: El texto de apertura se muestra localizado

- **WHEN** el visitante ve la sección de contacto en español
- **THEN** se muestra el titular "¿Te interesa lo que hago?" y el texto "Estoy abierto a posiciones full-time y proyectos freelance. Respondo en menos de 24 horas."
