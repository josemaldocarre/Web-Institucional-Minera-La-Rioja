export interface SectionPageItem {
  readonly id: string
  readonly labelKey: string
}

export interface SectionPageConfig {
  readonly titleKey: string
  readonly items?: readonly SectionPageItem[]
}

export const INSTITUCIONAL_PAGE: SectionPageConfig = {
  titleKey: 'nav.institucional',
  items: [
    {
      id: 'quienes-somos',
      labelKey: 'nav.quienesSomos',
    },
    {
      id: 'autoridades',
      labelKey: 'nav.autoridades',
    },
    {
      id: 'contacto',
      labelKey: 'nav.contacto',
    },
  ],
}

export const GESTION_MINERA_PAGE: SectionPageConfig = {
  titleKey: 'nav.gestionMinera',
  items: [
    {
      id: 'tramites',
      labelKey: 'nav.tramites',
    },
    {
      id: 'catastro-minero',
      labelKey: 'nav.catastroMinero',
    },
    {
      id: 'proveedores',
      labelKey: 'nav.proveedores',
    },
  ],
}

export const INFORMACION_PUBLICA_PAGE: SectionPageConfig = {
  titleKey: 'nav.informacionPublica',
  items: [
    {
      id: 'normativas',
      labelKey: 'nav.normativas',
    },
    {
      id: 'transparencia',
      labelKey: 'nav.transparencia',
    },
    {
      id: 'plan-quinquenal',
      labelKey: 'nav.planQuinquenal',
    },
  ],
}

export const PROGRAMAS_PAGE: SectionPageConfig = {
  titleKey: 'nav.programas',
  items: [
    {
      id: 'taller-artesanias',
      labelKey: 'nav.tallerArtesanias',
    },
  ],
}

export const CONTACTO_PAGE: SectionPageConfig = {
  titleKey: 'nav.contacto',
}