# Arquitectura del Proyecto

## Stack actual

- React + TypeScript
- Vite
- SASS Modules
- React Router

## Estructura de carpetas

src/
- components/ → componentes reutilizables
- layouts/ → estructura general (Header, Footer)
- pages/ → páginas (Home)
- modules/ → secciones grandes (Home, futuras secciones)
- services/ → simulación de API
- data/ → JSON mock
- styles/ → variables, mixins, global styles
- i18n/ → traducciones

## Principios

- Separación por responsabilidad
- Componentes reutilizables
- No lógica en componentes visuales
- Escalable a backend futuro

## Flujo de datos (actual)

UI → services → mock JSON

## Futuro

UI → API → Backend → DB

## Decisiones importantes

- Simular servicios desde el inicio
- No consumir datos directamente desde JSON en componentes