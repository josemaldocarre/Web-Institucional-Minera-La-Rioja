export interface MainNavItem {
  readonly path: string
  readonly labelKey: string
}

/** 
 * Navegación principal del sitio. 
 * Agrupación lógica alineada con la arquitectura de rutas del sitio.
*/
export const MAIN_NAV_ITEMS: readonly MainNavItem[] = [
  // Inicio
  { path: '', labelKey: 'nav.inicio' },

  // Institucional
  { path: 'institucional/quienes-somos', labelKey: 'nav.quienesSomos' },
  { path: 'institucional/autoridades', labelKey: 'nav.autoridades' },
  { path: 'institucional/contacto', labelKey: 'nav.contacto' },

  // Gestión Minera
  { path: 'gestion-minera/tramites', labelKey: 'nav.tramites' },
  { path: 'gestion-minera/catastro-minero', labelKey: 'nav.catastroMinero' },
  { path: 'gestion-minera/proveedores', labelKey: 'nav.proveedores' },

  // Información Pública
  { path: 'informacion-publica/transparencia', labelKey: 'nav.transparencia' },
  { path: 'informacion-publica/normativas', labelKey: 'nav.normativas' },
  { path: 'informacion-publica/plan-quinquenal', labelKey: 'nav.planQuinquenal' },

  // Programas
  { path: 'programas/taller-artesanias', labelKey: 'nav.tallerArtesanias' },
]
