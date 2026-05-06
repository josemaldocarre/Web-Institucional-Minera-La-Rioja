export interface MainNavItem {
  readonly path: string
  readonly labelKey: string
}

export const MAIN_NAV_ITEMS: readonly MainNavItem[] = [
  { path: 'inicio', labelKey: 'nav.inicio' },
/*   { path: 'quienes-somos', labelKey: 'nav.quienesSomos' },
  { path: 'tramites', labelKey: 'nav.tramites' },
  { path: 'normativas', labelKey: 'nav.normativas' },
  { path: 'transparencia', labelKey: 'nav.transparencia' }, */
  { path: 'plan-quinquenal', labelKey: 'nav.planQuinquenal' },
/*   { path: 'proveedores', labelKey: 'nav.proveedores' },
  { path: 'taller-de-artesanias', labelKey: 'nav.tallerArtesanias' }, */
  { path: 'contacto', labelKey: 'nav.contacto' },
]
