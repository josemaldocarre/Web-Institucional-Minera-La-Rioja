export interface GestionMineraPageHero {
  readonly breadcrumb: {
    href: string
    label: string
  }
  readonly eyebrow: {
    number: string
    label: string
  }
  readonly title: string
  readonly description: string
}

export interface GestionMineraImage {
  readonly src: string
  readonly alt: string
}

export interface CatastroMineroData {
  readonly title: string
  readonly description: string
  readonly pdf: string
  readonly dwg: string
}

export type GestionMineraServiceIcon =
  | 'catastro'
  | 'productoresVigentes'
  | 'productores'
  | 'notificaciones'
  | 'formularios'

export interface GestionMineraServiceItem {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly cta: string
  readonly href: string
  readonly icon: GestionMineraServiceIcon
  readonly accent: 'orange' | 'green'
  readonly badge?: string
  readonly catastroData?: CatastroMineroData
}

export interface GestionMineraTramites {
  readonly title: string
  readonly intro?: string
  readonly body: string
  readonly services: readonly GestionMineraServiceItem[]
}

export interface GestionMineraProveedores {
  readonly title: string
  readonly intro?: string
  readonly body: string
  readonly image: GestionMineraImage
  readonly cta: {
    readonly label: string
    readonly href: string
  }
}

export interface GestionMineraPageData {
  readonly page: GestionMineraPageHero
  readonly tramites: GestionMineraTramites
  readonly proveedores: GestionMineraProveedores
}

const gestionMineraData: GestionMineraPageData = {
  page: {
    breadcrumb: {
      href: '/',
      label: 'Inicio',
    },
    eyebrow: {
      number: '2',
      label: 'Gestión Minera',
    },
    title: 'Gestión Minera',
    description:
      'Acceda a los servicios, trámites y recursos de la Secretaría de Minería para la gestión de la actividad minera en La Rioja.',
  },
  tramites: {
    title: 'Trámites',
    intro:
      'Con el objetivo de agilizar y transparentar la gestión administrativa de los recursos minerales de la provincia, ponemos a disposición de los usuarios y profesionales nuestra plataforma de servicios y trámites digitales. Desde este espacio técnico, la Secretaría administra el registro de productores, gestiona el Catastro Minero Provincial conforme al Código Nacional de Minería, tramita pedimentos, emite guías de tránsito y procesa las notificaciones y declaraciones juradas obligatorias, garantizando la seguridad jurídica y el estricto control de la actividad.',
    body: '',
    services: [
      {
        id: 'catastro-minero',
        title: 'Catastro Minero',
        description:
          'Información geográfica sobre concesiones, límites y disponibilidad minera.',
        cta: 'Descargar',
        href: '#',
        icon: 'catastro',
        accent: 'green',
        badge: 'DWG',
        catastroData: {
          title: 'Catastro Minero',
          description: 'Información geográfica sobre concesiones, límites y disponibilidad minera.',
          pdf: '/docs/catastro-minero.pdf',
          dwg: '/docs/catastro-minero.dwg',
        },
      },
    ],
  },
  proveedores: {
    title: 'Proveedores',
    intro: '',
    body:
      'El crecimiento minero adquiere valor real cuando impulsa el entramado socioproductivo local. A través de la articulación con la Secretaría de Industria, priorizamos y potenciamos la contratación de industrias, pymes y emprendimientos riojanos dentro de la cadena de valor minera. Acceda al Registro Oficial de Proveedores Mineros de La Rioja para inscribir su empresa, postularse a demandas del sector y formar parte del ecosistema de servicios regionales que dinamizan la economía de nuestros departamentos.',
    image: {
      src: '/images/gestion-minera/proveedores.jpg',
      alt: 'Proveedores mineros de La Rioja',
    },
    cta: {
      label: 'Ir al Registro de Proveedores',
      href: '#',
    },
  },
}

export const gestionMineraService = gestionMineraData

export async function fetchGestionMineraPageData(): Promise<GestionMineraPageData> {
  return Promise.resolve(gestionMineraData)
}
