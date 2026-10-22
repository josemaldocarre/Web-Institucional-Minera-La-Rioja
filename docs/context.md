# Contexto del sitio

Sitio institucional de la Secretaría de Minería de La Rioja. Informa sobre la secretaría, sus documentos y sus programas, y ofrece un visor del catastro minero.

La organización del código está en [architecture.md](architecture.md). La forma de ejecutarlo está en el [README](../README.md).

## Alcance actual

El sitio es una aplicación frontend estática. Los textos están en español e inglés. El inicio toma su estructura de un JSON local. El resto de las secciones toma el contenido de constantes incluidas en el código. Los documentos, las imágenes y el video se sirven desde `public/`.

Secciones del sitio:

- **Inicio:** presentación, misión, objetivos, políticas públicas, descargas y accesos a portales externos.
- **Institucional:** quiénes somos, autoridades y funciones o competencias.
- **Gestión minera:** visor del catastro y descarga de los archivos DWG y PDF.
- **Documentos públicos:** normas con enlace externo y el plan quinquenal en PDF. Cuatro recursos de esta sección todavía apuntan a `#` y no abren un documento.
- **Programas:** taller de artesanías, con texto y galería.
- **Contacto:** dirección, horario, correos, redes sociales y mapa embebido.

## Visor catastral

En Gestión minera, Leaflet muestra el GeoJSON local `public/docs/catastro-minero.geojson` sobre teselas de OpenStreetMap. La persona puede identificar una parcela y ver su ficha. El DWG y el PDF se ofrecen como descargas aparte. El detalle técnico está en [architecture.md](architecture.md).

## Qué queda fuera

El repositorio no incluye:

- un backend propio;
- autenticación;
- persistencia de usuarios;
- tramitación en línea o envío de formularios.

Contacto ofrece correos `mailto:` y un mapa. No envía un formulario al sitio.
