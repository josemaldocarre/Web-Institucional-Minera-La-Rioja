export interface MainNavItem {
  readonly path: string
  readonly labelKey: string
}

/**
 * Navegación principal del sitio.
 * Rutas padre que agrupan secciones institucionales.
 */
export const MAIN_NAV_ITEMS: readonly MainNavItem[] = [
  { path: '', labelKey: 'nav.inicio' },
  { path: 'institucional', labelKey: 'nav.institucional' },
  { path: 'gestion-minera', labelKey: 'nav.gestionMinera' },
  { path: 'informacion-publica', labelKey: 'nav.informacionPublica' },
  { path: 'programas', labelKey: 'nav.programas' },
  { path: 'contacto', labelKey: 'nav.contacto' },
]

