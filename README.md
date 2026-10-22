# Sitio institucional de Minería — La Rioja

Sitio institucional estático de la Secretaría de Minería de La Rioja. Es una aplicación solo frontend: el contenido se compila con el sitio y el navegador lo muestra sin un servidor de aplicación propio.

## Alcance actual

Ofrece información institucional y documentos. Incluye inicio, presentación y autoridades, el visor de catastro minero, enlaces a normas y al plan quinquenal, el taller de artesanías, y datos de contacto.

El repositorio no incluye backend propio, autenticación, cuentas de usuario ni envío de trámites. Esos procesos no forman parte del sitio actual.

El detalle de cada sección está en [docs/context.md](docs/context.md). La organización del código está en [docs/architecture.md](docs/architecture.md).

## Tecnologías principales

Versiones resueltas en `package-lock.json`:

| Tecnología | Versión | Uso |
| --- | --- | --- |
| React | 19.2.5 | Interfaz |
| TypeScript | 6.0.3 | Tipado |
| Vite | 8.0.10 | Desarrollo y build |
| React Router DOM | 6.30.3 | Rutas |
| i18next | 26.0.8 | Textos en español e inglés |
| Sass | 1.99.0 | Estilos en SCSS Modules |
| Leaflet | 1.9.4 | Visor de catastro |

La tabla completa, con rangos declarados y herramientas de desarrollo, está en [docs/tech-stack.md](docs/tech-stack.md).

## Requisitos previos

`package.json` no declara `engines`. Para coincidir con Vite 8.0.10 y ESLint 10.3.0 hace falta una de estas versiones de Node:

- 20.19 o superior, dentro de la línea 20
- 22.13 o superior
- 24 o superior

## Instalación

El lockfile vigente es `package-lock.json`. La integración continua también instala con npm. `package.json` declara `packageManager` con pnpm 9.15.0, pero no hay un `pnpm-lock.yaml`. Esta documentación no modifica esa diferencia.

Para reproducir las dependencias del lockfile:

```bash
npm ci
```

## Desarrollo local

```bash
npm run dev
```

Levanta el servidor de Vite.

## Validaciones

```bash
npm run lint
```

Ejecuta ESLint sobre el proyecto (`eslint .`).

```bash
npx tsc -b
```

Comprueba los tipos. TypeScript está configurado con `noEmit`, así que no genera JavaScript. El mismo paso es la primera parte de `npm run build`.

```bash
npm run build
```

Ejecuta `tsc -b` y después `vite build`. El resultado queda en `dist/`. Compila el proyecto en la máquina local y no lo publica.

## Vista previa del build

```bash
npm run preview
```

Sirve en local el contenido ya generado en `dist/`. No vuelve a compilar y no publica el sitio. Antes hace falta un `npm run build` exitoso.

## Estructura del proyecto

| Directorio | Responsabilidad |
| --- | --- |
| `src/pages/` | Páginas de cada ruta |
| `src/layouts/` | Layout compartido |
| `src/modules/home/` | Composición del inicio |
| `src/features/` | Bloques del inicio y visor de catastro |
| `src/components/` | Encabezado, pie y componentes de interfaz reutilizables |
| `src/navigation/` | Ítems del menú principal |
| `src/services/` | Contenido estático de cada sección |
| `src/data/` | Mock local del inicio |
| `src/i18n/` | Configuración y textos ES/EN |
| `src/seo/` | Título y descripción de la página de inicio |
| `src/styles/` | Estilos globales |
| `public/` | Archivos servidos tal cual: imágenes, video y documentos |

## Rutas principales

Definidas en `src/App.tsx`:

| Ruta | Contenido |
| --- | --- |
| `/` | Inicio |
| `/institucional` | Presentación, autoridades y funciones |
| `/gestion-minera` | Visor de catastro y descargas |
| `/informacion-publica` | Documentos públicos |
| `/programas` | Taller de artesanías |
| `/contacto` | Datos de contacto y mapa |
| Cualquier otra ruta | Página no encontrada, dentro del layout |

La etiqueta visible de `/informacion-publica` es «Documentos Públicos».

## Datos e integraciones

Los textos de interfaz están en `src/i18n/locales/es.json` y `src/i18n/locales/en.json`. El inicio lee `src/data/home.mock.json`. El resto de las secciones usa constantes de `src/services/`.

El navegador también pide recursos externos: teselas de OpenStreetMap, un mapa de Google embebido en Contacto, la fuente Red Hat Display, portales institucionales y enlaces a normas. Esos pedidos salen del navegador. No hay un backend propio detrás de ellos.

## Documentación relacionada

- [Contexto y alcance](docs/context.md)
- [Arquitectura](docs/architecture.md)
- [Stack tecnológico](docs/tech-stack.md)
- [Criterios de SEO](docs/seo.md)
- [Criterios de accesibilidad](docs/accessibility.md)
- [Reglas de desarrollo](docs/rules.md)
