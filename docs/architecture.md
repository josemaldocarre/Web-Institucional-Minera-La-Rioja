# Arquitectura

Describe la aplicación tal como está implementada. La instalación y los comandos están en el [README](../README.md). El alcance institucional está en [context.md](context.md).

## Entrada y layout

`index.html` declara el documento, el título y la meta description iniciales, y carga `src/main.tsx`.

`src/main.tsx` inicializa i18n, importa los estilos globales y monta `App` en el nodo `root`.

`src/App.tsx` usa `BrowserRouter`. Todas las páginas comparten `src/layouts/MainLayout.tsx`: encabezado, `<main id="main-content">` y pie. El encabezado y el pie están en `src/components/layout/`. `ScrollRestoration` vuelve al inicio de la página cuando cambia la ruta.

## Organización del código

| Directorio | Qué contiene |
| --- | --- |
| `src/pages/` | Una página por ruta y sus bloques internos |
| `src/modules/home/` | Orden de las secciones del inicio |
| `src/features/home/` | Hero, misión, políticas, documentos, portales y contacto del inicio |
| `src/features/catastro/CatastroViewer/` | Visor Leaflet |
| `src/components/ui/` | Contenedor, sección, hero de página, acordeón y anclas |
| `src/components/layout/` | Encabezado y pie |
| `src/navigation/mainNav.ts` | Rutas y claves de texto del menú |
| `src/services/` | Contenido estático tipado de cada sección |
| `src/data/home.mock.json` | Estructura del inicio |
| `src/i18n/` | Idiomas y traducciones |
| `src/seo/useSyncPageMeta.ts` | Título y meta description del inicio |
| `src/styles/` | Variables, mixins y estilos globales |
| `public/` | Imágenes, video y documentos que se copian al build |

`src/navigation/sectionNav.ts`, `src/layouts/SectionPageLayout.tsx` y `src/pages/PlaceholderPage/` están en el repositorio y no los usa ninguna ruta registrada. El menú real sale de `mainNav.ts` y del contenido de cada página.

## Rutas

| Ruta | Página | Responsabilidad |
| --- | --- | --- |
| `/` | `src/pages/Home.tsx` | Inicio |
| `/institucional` | `src/pages/institucional/Institucional.tsx` | Presentación, autoridades y funciones, con anclas en la misma página |
| `/gestion-minera` | `src/pages/gestion-minera/GestionMinera.tsx` | Visor de catastro y descargas DWG/PDF |
| `/informacion-publica` | `src/pages/informacion-publica/InformacionPublica.tsx` | Documentos públicos, en tres categorías de la misma página |
| `/programas` | `src/pages/programas/Programas.tsx` | Taller de artesanías y galería |
| `/contacto` | `src/pages/contacto/Contacto.tsx` | Dirección, horario, correos, redes y mapa embebido |
| Resto de rutas | `src/pages/NotFound/NotFound.tsx` | Mensaje de página no encontrada y enlace al inicio |

## Idiomas

`src/i18n/config.ts` carga `es.json` y `en.json`, con idioma inicial y de respaldo `es`. El encabezado llama a `i18n.changeLanguage` para alternar entre `es` y `en`.

Ese cambio vale mientras la página sigue abierta. No se guarda en el navegador: al recargar vuelve el español. `index.html` mantiene `<html lang="es">` y el código no lo actualiza cuando se elige inglés.

`useSyncPageMeta` escribe `document.title` y la meta description solo en el inicio. En el resto de las rutas permanecen el título y la descripción de `index.html`.

## Datos de cada sección

No hay un servidor de datos de la aplicación. Cada pantalla lee contenido incluido en el repositorio.

| Sección | Origen |
| --- | --- |
| Inicio | `fetchHomePageData` en `src/services/homeService.ts`, que resuelve `src/data/home.mock.json`. Los textos visibles salen de las claves i18n |
| Institucional | Constante `institucionalService` |
| Gestión minera | Constante `gestionMineraService` |
| Documentos públicos | Constante `informacionPublicaService` |
| Programas | Constante `programasService` |
| Contacto | Constante `contactoService` |

Las funciones `fetchInstitucionalPageData`, `fetchGestionMineraPageData`, `fetchInformacionPublicaPageData`, `fetchProgramasPageData` y `fetchContactoPageData` existen y las páginas no las usan. Esas pantallas importan la constante directamente.

## Inicio

`Home` pide el mock al montarse y, mientras tanto, muestra un estado de carga. Después `src/modules/home/HomeModule.tsx` renderiza, en este orden: hero con video, introducción, misión y objetivos, políticas públicas, dos tarjetas informativas, documentos descargables, portales externos y un acceso al correo institucional.

El video y su póster están en `public/videos/hero_video.mp4` y `public/images/hero/fallback.jpg`.

La tarjeta del plan quinquenal abre `/docs/plan-quinquenal.pdf`. La tarjeta de catastro abre `/docs/catastro-minero.dwg`. El visor está en `/gestion-minera`, no en esa tarjeta.

## Visor de catastro

Está en `src/features/catastro/CatastroViewer/` y lo monta `src/pages/gestion-minera/Tramites.tsx`.

Leaflet dibuja un `FeatureCollection` pedido por `fetch` a `/docs/catastro-minero.geojson`. El archivo tiene 2914 elementos: 1464 polígonos y 1450 puntos. No declara `crs`. El campo `name` del archivo es `/tmp/outputs/`. El repositorio no documenta la herramienta que lo generó, el datum oficial ni si el DWG y el PDF son la misma edición que el GeoJSON.

El mapa de fondo usa teselas de OpenStreetMap (`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`), con atribución. Esas teselas las pide el navegador.

Las categorías de la leyenda son cateos, manifestaciones, canteras, minas, pasma minas, aluviones y áreas especiales. El color de un polígono sale del campo `TIPO` dentro de `description` o, si no está, de `styleUrl`. La leyenda solo informa: no enciende ni apaga categorías. No hay buscador ni filtro. Lo que no se clasifica se dibuja en gris. Los puntos se dibujan todos con el mismo estilo y muestran el nombre en un tooltip.

Un clic consulta un índice espacial del propio visor. Si hay una parcela, abre una ficha con nombre, tipo, expediente, titular, departamento y superficie. Si hay varias, muestra un selector. La ficha lee el HTML de `description` y, en su defecto, `name`. Otros campos sueltos del GeoJSON, como `Expte` o coordenadas separadas, no se muestran.

Si la carga falla, el JSON no es un `FeatureCollection` o no hay geometrías dibujables, el visor muestra un mensaje. Al desmontar, libera el mapa.

Junto al visor hay enlaces a `/docs/catastro-minero.dwg` y `/docs/catastro-minero.pdf`. Esos archivos se descargan. El visor no los interpreta.

## Integraciones externas

Todas se resuelven en el navegador:

- Teselas de OpenStreetMap en el visor.
- Iframe de Google Maps en Contacto y un enlace de Google Maps en el pie.
- Fuente Red Hat Display desde Google Fonts, declarada en `index.html`.
- Portales `https://proveedoresmineros.larioja.gob.ar/` y `https://emse.ar/` en el inicio.
- Normas en Infoleg, SAIJ y el sitio del Poder Judicial de La Rioja, desde Documentos públicos.
- Instagram, Facebook y LinkedIn. LinkedIn aparece en el pie. Instagram y Facebook aparecen en Contacto y en el pie.
- Enlaces `mailto:` al correo institucional.

En Documentos públicos, estos cuatro recursos apuntan a `#` y no tienen destino operativo: «Normativa de Proveedores», «Empresas trabajando en la provincia», «Datos Estadísticos» y «Capacitaciones».

## Compilación local

`npm run build` ejecuta `tsc -b && vite build` y escribe el resultado en `dist/`. Ese directorio sirve para revisar la compilación en la máquina local. No hay variables de entorno referenciadas por el código.

## Qué conviene tener en cuenta

- El idioma inicial y de respaldo es español. El cambio de idioma no persiste al recargar, y `<html lang>` permanece en `es`.
- El título y la meta description dinámicos solo se actualizan en el inicio.
- La leyenda del catastro no filtra capas, y no hay buscador.
- El GeoJSON, el DWG y el PDF conviven como archivos estáticos. Su procedencia común y su datum no se pueden confirmar con el repositorio.
- Los enlaces `href="#"` de Documentos públicos no son destinos operativos.
- No hay backend propio, autenticación ni base de datos de la aplicación.
