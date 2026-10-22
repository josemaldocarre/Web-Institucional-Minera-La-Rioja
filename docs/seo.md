# SEO Guidelines

Criterios para quien desarrolla. Cumplir una recomendación de esta guía no significa que el sitio ya la cumpla en todas las páginas. El comportamiento actual de títulos, idioma del documento y rutas está en [architecture.md](architecture.md).

## Objetivo

Favorecer que la web institucional sea indexable, clara y bien descrita.

## Reglas generales

- Cada página debe tener un solo <h1>
- Mantener jerarquía correcta: h1 → h2 → h3
- Usar HTML semántico (header, main, section, footer)
- Evitar contenido oculto innecesario

## Meta información

- title claro y descriptivo
- meta description institucional
- idioma definido en <html lang="es">

## Contenido

- Textos claros y legibles
- Evitar contenido vacío o genérico
- URLs limpias. Las rutas actuales están registradas en `src/App.tsx`

## Imágenes

- Todas deben tener atributo alt
- Optimizadas para web

## Performance

- Evitar imágenes pesadas
- Minimizar carga innecesaria

## Elementos que el repositorio no incluye

- `sitemap.xml`
- `robots.txt`
- Renderizado en servidor

Esta guía no los da por implementados.