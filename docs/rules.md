# Reglas de Desarrollo

Criterios de trabajo para quien modifica el repositorio. El alcance del sitio está en [context.md](context.md). Seguir una regla de este archivo no afirma que todo el código actual ya la cumpla.

## Uso de Cursor

- SIEMPRE leer los archivos en /docs antes de hacer cambios
- NO hacer cambios sin aprobación del usuario
- NO hacer commits automáticos
- NO modificar estructura sin justificación

## Código

- Usar TypeScript correctamente tipado
- NO usar any
- Mantener componentes pequeños y reutilizables
- Separar lógica de presentación

## Estilos

- Usar SASS Modules
- NO usar estilos inline
- NO hardcodear colores (usar variables)

## Arquitectura

- Respetar estructura definida
- No mezclar responsabilidades
- Usar carpeta services para datos

## i18n

- No hardcodear textos
- Preparar contenido para ES/EN desde el inicio
- Mantener los textos de interfaz en `src/i18n/locales/`

## SEO

- Sigue las directrices definidas en [seo.md](seo.md)
- Asegúrate de que el HTML sea semántico
- Mantén la jerarquía de los encabezados

## Accessibility

- Sigue las directrices definidas en [accessibility.md](accessibility.md)
- Utiliza elementos semánticos
- Asegúrate de que la página sea accesible mediante el teclado