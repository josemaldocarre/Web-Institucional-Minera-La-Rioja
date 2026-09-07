export interface InstitucionalPageHero {
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

export interface InstitucionalImage {
  readonly src: string
  readonly altKey: string
}

export interface InstitucionalSection {
  readonly titleKey: string
  readonly introKey?: string
  readonly bodyKey: string
  readonly image?: InstitucionalImage
}

export const INSTITUCIONAL_AUTHORITY_VACANT = 'VACANTE' as const

export interface AuthorityLabels {
  readonly nameKey: string
  readonly roleKey: string
}

export interface AuthoritySuperior {
  readonly id: string
  readonly headingKey: string
  readonly name: string
  readonly roleKey: string
  readonly accent?: 'green' | 'orange'
}

export interface AuthorityDependencia {
  readonly id: string
  readonly cargoKey: string
  readonly responsable: string | null | undefined
}

export interface AuthorityDireccionGeneral {
  readonly id: string
  readonly nombreKey: string
  readonly director: string | null | undefined
  readonly dependencias: readonly AuthorityDependencia[]
}

export interface InstitucionalAuthorities {
  readonly titleKey: string
  readonly introKey?: string
  readonly labels: AuthorityLabels
  readonly superiores: readonly AuthoritySuperior[]
  readonly direccionesGenerales: readonly AuthorityDireccionGeneral[]
}

export interface InstitucionalPageData {
  readonly page: InstitucionalPageHero
  readonly quienesSomos: InstitucionalSection
  readonly autoridades: InstitucionalAuthorities
}

const institucionalData: InstitucionalPageData = {
  page: {
    breadcrumb: {
      href: '/',
      labelKey: 'nav.inicio',
    },
    eyebrow: {
      number: '1',
      labelKey: 'institucional.page.eyebrow',
    },
    titleKey: 'institucional.page.title',
    descriptionKey: 'institucional.page.description',
  },
  quienesSomos: {
    titleKey: 'institucional.quienesSomos.title',
    bodyKey: 'institucional.quienesSomos.body',
    image: {
      src: '/images/institucional/quienes-somos.JPG',
      altKey: 'institucional.quienesSomos.imageAlt',
    },
  },
  autoridades: {
    titleKey: 'institucional.autoridades.title',
    introKey: 'institucional.autoridades.intro',
    labels: {
      nameKey: 'institucional.autoridades.labels.name',
      roleKey: 'institucional.autoridades.labels.role',
    },
    superiores: [
      {
        id: 'gobernador',
        headingKey: 'institucional.autoridades.gobernador.heading',
        name: 'Ricardo Quintela',
        roleKey: 'institucional.autoridades.gobernador.role',
        accent: 'orange',
      },
      {
        id: 'ministro',
        headingKey: 'institucional.autoridades.ministro.heading',
        name: 'Federico Bazan',
        roleKey: 'institucional.autoridades.ministro.role',
        accent: 'orange',
      },
      {
        id: 'secretaria',
        headingKey: 'institucional.autoridades.secretaria.heading',
        name: 'Abg. Ivanna María Guardia',
        roleKey: 'institucional.autoridades.secretaria.role',
        accent: 'green',
      },
    ],
    direccionesGenerales: [
      {
        id: 'dg-mineria',
        nombreKey: 'institucional.autoridades.unidades.dgMineria',
        director: 'Ing. Florencia Olivera Butel',
        dependencias: [
          {
            id: 'd-escribania-minas',
            cargoKey: 'institucional.autoridades.unidades.dEscribaniaMinas',
            responsable: 'Escr. Agustina Delgado',
          },
          {
            id: 'd-catastro-minero',
            cargoKey: 'institucional.autoridades.unidades.dCatastroMinero',
            responsable: INSTITUCIONAL_AUTHORITY_VACANT,
          },
          {
            id: 'd-geologia-minera',
            cargoKey: 'institucional.autoridades.unidades.dGeologiaMinera',
            responsable: 'Geol. Nicolás Fernando Pereyra',
          },
          {
            id: 'd-economia-minera',
            cargoKey: 'institucional.autoridades.unidades.dEconomiaMinera',
            responsable: 'Ing. Fabiola Rivera',
          },
          {
            id: 'd-policia-minera',
            cargoKey: 'institucional.autoridades.unidades.dPoliciaMinera',
            responsable: 'Lic. Julián Emmanuel López',
          },
        ],
      },
      {
        id: 'dg-asuntos-legales',
        nombreKey: 'institucional.autoridades.unidades.dgAsuntosLegales',
        director: 'Abg. Clotilde Mabel Páez',
        dependencias: [],
      },
      {
        id: 'dg-desarrollo-productivo',
        nombreKey: 'institucional.autoridades.unidades.dgDesarrolloProductivo',
        director: 'Ing. Carlos Nicolás Molina',
        dependencias: [
          {
            id: 'd-servicio-minero',
            cargoKey: 'institucional.autoridades.unidades.dServicioMinero',
            responsable: 'Geol. Hilda Valladares',
          },
        ],
      },
      {
        id: 'dg-administracion',
        nombreKey: 'institucional.autoridades.unidades.dgAdministracion',
        director: 'Cra. Brizuela Camila Soledad',
        dependencias: [],
      },
      {
        id: 'dg-despacho',
        nombreKey: 'institucional.autoridades.unidades.dgDespacho',
        director: 'Tec. en Adm. de Doc. y Arch. Karina Elizabeth Caliva',
        dependencias: [],
      },
    ],
  },
}

export const institucionalService = institucionalData

export async function fetchInstitucionalPageData(): Promise<InstitucionalPageData> {
  return Promise.resolve(institucionalData)
}
