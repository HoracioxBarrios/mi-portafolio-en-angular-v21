# Home Specification

## Purpose

Define el comportamiento observable de la página de inicio: el hero (título, badge de puesto, subtitle de propuesta de valor y botones de acción) y la sección de CTA de contacto con el botón de correo electrónico.

## Requirements

### Requirement: Hero con propuesta de valor

El hero de la página de inicio SHALL mostrar el título de bienvenida, el badge con el puesto completo ("Software Developer | Angular & Ionic | AI Solutions & AI-Augmented Development") y un subtitle de propuesta de valor en el idioma activo. El subtitle en español SHALL ser "Crear soluciones que superen las expectativas del cliente es lo que me mueve. Me preparo día a día para cambiar el mundo, manteniéndome a la vanguardia de la tecnología.".

#### Scenario: El hero muestra título, badge y subtitle en español

- **WHEN** el visitante carga la página de inicio con el idioma activo en español
- **THEN** el hero muestra "Hola, soy Hora", el badge "Software Developer | Angular & Ionic | AI Solutions & AI-Augmented Development" y el subtitle "Crear soluciones que superen las expectativas del cliente es lo que me mueve. Me preparo día a día para cambiar el mundo, manteniéndome a la vanguardia de la tecnología."

#### Scenario: El hero muestra el subtitle en inglés

- **WHEN** el visitante carga la página de inicio con el idioma activo en inglés
- **THEN** el hero muestra el subtitle en inglés que comunica el mismo mensaje de propuesta de valor

### Requirement: Botones de acción del hero

El hero SHALL ofrecer dos botones de acción: uno hacia la sección "Sobre Mí" y otro hacia la sección "Proyectos", con etiquetas localizadas.

#### Scenario: Los botones del hero navegan a sus secciones

- **WHEN** el visitante activa el botón "Conóceme más" en el hero
- **THEN** la aplicación navega a la sección "Sobre Mí"

#### Scenario: El botón de proyectos del hero navega a proyectos

- **WHEN** el visitante activa el botón "Ver mis proyectos" en el hero
- **THEN** la aplicación navega a la sección "Proyectos"

### Requirement: CTA de contacto con correo electrónico

La sección de contacto de la página de inicio SHALL mostrar el titular "¿Te interesa lo que hago?" (en inglés "Interested in what I do?"), el texto de apertura a posiciones full-time y proyectos freelance con respuesta en menos de 24 horas, y un botón que abra el cliente de correo del visitante dirigido al email del autor.

#### Scenario: El botón de contacto abre el cliente de correo

- **WHEN** el visitante activa el botón "Escribime" en la sección de contacto
- **THEN** se abre el cliente de correo del visitante con el email del autor como destinatario

#### Scenario: El texto de apertura se muestra localizado

- **WHEN** el visitante ve la sección de contacto en español
- **THEN** se muestra el titular "¿Te interesa lo que hago?" y el texto "Estoy abierto a posiciones full-time y proyectos freelance. Respondo en menos de 24 horas."
