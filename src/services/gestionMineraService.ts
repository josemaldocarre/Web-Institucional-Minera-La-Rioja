export interface GestionMineraPageHero {
  readonly breadcrumb: {
    href: string
    labelKey: string
  }
  readonly eyebrow: {
    number: string
    labelKey: string
  }
  readonly titleKey: string
  readonly descriptionKey: string
}


const CATASTRO_UNIFIED_GEOJSON_URLS = ['/docs/catastro-minero.geojson'] as const

export interface CatastroMineroData {
  readonly pdf: string
  readonly dwg: string
  readonly geojsonUrls: readonly string[]
}

export type GestionMineraServiceIcon =
  | 'catastro'
  | 'productoresVigentes'
  | 'productores'
  | 'notificaciones'
  | 'formularios'

export interface GestionMineraServiceItem {
  readonly id: string
  readonly titleKey: string
  readonly descriptionKey: string
  readonly ctaKey: string
  readonly href: string
  readonly icon: GestionMineraServiceIcon
  readonly accent: 'orange' | 'green'
  readonly badgeKey?: string
  readonly catastroData?: CatastroMineroData
}

export interface GestionMineraTramites {
  readonly titleKey: string
  readonly introKey?: string
  readonly services: readonly GestionMineraServiceItem[]
}

export interface GestionMineraPageData {
  readonly page: GestionMineraPageHero
  readonly tramites: GestionMineraTramites
}

const gestionMineraData: GestionMineraPageData = {
  page: {
    breadcrumb: {
      href: '/',
      labelKey: 'nav.inicio',
    },
    eyebrow: {
      number: '2',
      labelKey: 'nav.gestionMinera',
    },
    titleKey: 'nav.gestionMinera',
    descriptionKey: 'gestionMinera.page.description',
  },
  tramites: {
    titleKey: 'gestionMinera.tramites.title',
    introKey: 'gestionMinera.tramites.intro',
    services: [
      {
        id: 'catastro-minero',
        titleKey: 'home.featureDocuments.catastro.title',
        descriptionKey: 'home.featureDocuments.catastro.description',
        ctaKey: 'home.featureDocuments.catastro.cta',
        href: '#',
        icon: 'catastro',
        accent: 'green',
        badgeKey: 'home.featureDocuments.catastro.badge',
        catastroData: {
          pdf: '/docs/catastro-minero.pdf',
          dwg: '/docs/catastro-minero.dwg',
          geojsonUrls: CATASTRO_UNIFIED_GEOJSON_URLS,
        },
      },
    ],
  },
}

export const gestionMineraService = gestionMineraData

export async function fetchGestionMineraPageData(): Promise<GestionMineraPageData> {
  return Promise.resolve(gestionMineraData)
}
