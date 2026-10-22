# Stack tecnológico

Herramientas que el repositorio usa hoy. Los comandos de instalación y ejecución están en el [README](../README.md).

## Aplicación

| Herramienta | Declarada en `package.json` | Resuelta en `package-lock.json` | Función |
| --- | --- | --- | --- |
| React | `^19.2.5` | 19.2.5 | Interfaz |
| React DOM | `^19.2.5` | 19.2.5 | Renderizado en el navegador |
| TypeScript | `~6.0.2` | 6.0.3 | Tipado del código |
| Vite | `^8.0.10` | 8.0.10 | Servidor de desarrollo y build |
| `@vitejs/plugin-react` | `^6.0.1` | 6.0.1 | Soporte de React en Vite |
| React Router DOM | `^6.30.3` | 6.30.3 | Rutas del sitio |
| i18next | `^26.0.8` | 26.0.8 | Catálogos de traducción |
| react-i18next | `^17.0.6` | 17.0.6 | Integración de i18next con React |
| Sass | `^1.99.0` | 1.99.0 | SCSS Modules |
| Leaflet | `^1.9.4` | 1.9.4 | Mapa del visor de catastro |
| `@types/leaflet` | `^1.9.22` | 1.9.22 | Tipos de Leaflet |

## Herramientas de desarrollo

| Herramienta | Declarada | Resuelta | Función |
| --- | --- | --- | --- |
| ESLint | `^10.2.1` | 10.3.0 | `npm run lint` |
| typescript-eslint | `^8.58.2` | 8.59.2 | Reglas de TypeScript para ESLint |
| eslint-plugin-react-hooks | `^7.1.1` | 7.1.1 | Reglas de hooks |
| eslint-plugin-react-refresh | `^0.5.2` | 0.5.2 | Reglas de React Refresh |

No hay un script ni una dependencia de tests en `package.json`.

## Node y gestores de paquetes

`package.json` no declara `engines`.

- Vite 8.0.10 admite Node `^20.19.0 || >=22.12.0`.
- ESLint 10.3.0 admite Node `^20.19.0 || ^22.13.0 || >=24`.

Una versión compatible con ambas es Node 20.19 o superior de la línea 20, Node 22.13 o superior, o Node 24 o superior.

El lockfile del repositorio es `package-lock.json`. El campo `packageManager` de `package.json` indica pnpm 9.15.0 y no existe `pnpm-lock.yaml`. La instalación reproducible con los archivos actuales es `npm ci`, documentada en el [README](../README.md).

## Qué no forma parte del stack

El código no depende de un backend, de una base de datos ni de variables de entorno. Esas piezas no están en el repositorio. El alcance del sitio está en [context.md](context.md).
