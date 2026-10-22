# Accessibility Guidelines

Criterios para quien desarrolla. Esta guía no certifica el cumplimiento del sitio. El comportamiento implementado está descrito en [architecture.md](architecture.md) y en [context.md](context.md).

## Objetivo

Orientar la interfaz hacia estándares básicos de accesibilidad de una web institucional pública.

## Estructura

- Usar HTML semántico:
  - <header>
  - <nav>
  - <main>
  - <section>
  - <footer>

## Navegación

- Menús dentro de <nav>
- Uso de aria-label cuando sea necesario

## Imágenes

- Todas deben tener atributo alt

## Botones y enlaces

- Usar <button> o <a>, no divs clickeables
- Deben ser accesibles por teclado

## Contraste

- Asegurar buen contraste de colores
- Evitar texto sobre fondos sin overlay

## Focus

- Elementos interactivos deben tener estados de focus visibles

## Formularios

El sitio actual no incluye un formulario de envío. Si se agrega uno, cada campo debe tener su etiqueta asociada y las validaciones deben poder entenderse sin depender solo del color.

## Buenas prácticas

- No depender solo del color para comunicar información
- Textos claros y comprensibles