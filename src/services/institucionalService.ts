export interface InstitucionalPageHero {
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

export interface InstitucionalImage {
  readonly src: string
  readonly alt: string
}

export interface InstitucionalSection {
  readonly title: string
  readonly intro?: string
  readonly body: string
  readonly image?: InstitucionalImage
}

export const INSTITUCIONAL_AUTHORITY_VACANT = 'VACANTE' as const

export interface AuthorityLabels {
  readonly name: string
  readonly role: string
  readonly titular: string
  readonly dependents: string
}

export interface AuthoritySecretaria {
  readonly heading: string
  readonly name: string
  readonly role: string
}

export interface AuthoritySupportMember {
  readonly id: string
  readonly role: string
  readonly responsible: string
}

export interface AuthoritySupport {
  readonly title: string
  readonly members: readonly AuthoritySupportMember[]
}

export interface AuthorityDependent {
  readonly id: string
  readonly title: string
  readonly responsible: string
}

export interface AuthorityGroup {
  readonly id: string
  readonly title: string
  readonly titular: string
  readonly dependents: readonly AuthorityDependent[]
}

export interface AuthorityProgram {
  readonly id: string
  readonly title: string
  readonly responsible: string
}

export interface AuthorityPrograms {
  readonly title: string
  readonly items: readonly AuthorityProgram[]
}

export interface InstitucionalAuthorities {
  readonly title: string
  readonly intro?: string
  readonly labels: AuthorityLabels
  readonly secretaria: AuthoritySecretaria
  readonly support: AuthoritySupport
  readonly groups: readonly AuthorityGroup[]
  readonly programs: AuthorityPrograms
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
      label: 'Inicio',
    },
    eyebrow: {
      number: '1',
      label: 'Sobre la Secretaría',
    },
    title: 'Institucional',
    description:
      'Bienvenidos al portal institucional de la Secretaría de Minería del Gobierno de La Rioja.',
  },
  quienesSomos: {
    title: 'Quiénes Somos',
    intro: '',
    body:
      'Somos la autoridad competente encargada de planificar, regular, promover y controlar la actividad minera en todo el territorio provincial. Nuestro propósito es impulsar el desarrollo de una minería moderna, inclusiva y con una fuerte identidad riojana, combinando de manera estratégica el crecimiento económico con el bienestar social y el cuidado ambiental. Trabajamos bajo un modelo participativo que articula esfuerzos con el sector científico-académico, la Secretaría de Ambiente, empresas públicas como EMSE, plataformas de innovación como Kallpa I+D, y fundamentalmente, con la comunidad local como eje central de nuestras políticas.',
    image: {
      src: '/images/institucional/quienes-somos.JPG',
      alt: 'Paisaje minero de La Rioja',
    },
  },
  autoridades: {
    title: 'Autoridades',
    intro:
      'El equipo de gestión de la Secretaría de Minería lidera la ejecución y el control técnico-institucional de la política minera provincial, velando por el cumplimiento de las metas estratégicas de sostenibilidad, transparencia y desarrollo local definidas para el bienestar de la provincia.',
    labels: {
      name: 'Nombre',
      role: 'Cargo',
      titular: 'Titular',
      dependents: 'Direcciones dependientes',
    },
    secretaria: {
      heading: 'SECRETARÍA DE MINERÍA',
      name: 'Abogada Ivanna María Guardia',
      role: 'Secretaria de Minería',
    },
    support: {
      title: 'Personal de Apoyo Directo',
      members: [
        {
          id: 'secretaria-privada',
          role: 'Secretaria Privada',
          responsible: 'Bettiana Flores Antúnez',
        },
        {
          id: 'chofer-secretario',
          role: 'Chofer del Secretario',
          responsible: 'Ramón Alberto Herrera',
        },
      ],
    },
    groups: [
      {
        id: 'dg-mineria',
        title: 'Dirección General de Minería',
        titular: 'Florencia Olivera Buteler',
        dependents: [
          {
            id: 'd-escribania-minas',
            title: 'Dirección de Escribanía de Minas',
            responsible: 'Agustina Delgado',
          },
          {
            id: 'd-catastro-minero',
            title: 'Dirección de Catastro Minero',
            responsible: INSTITUCIONAL_AUTHORITY_VACANT,
          },
          {
            id: 'd-geologia-minera',
            title: 'Dirección de Geología Minera',
            responsible: 'Nicolás Fernando Pereyra',
          },
          {
            id: 'dg-asuntos-legales',
            title: 'Dirección General de Asuntos Legales',
            responsible: 'Clotilde Mabel Páez',
          },
          {
            id: 'd-economia-minera',
            title: 'Dirección de Economía Minera',
            responsible: INSTITUCIONAL_AUTHORITY_VACANT,
          },
          {
            id: 'd-policia-minera',
            title: 'Dirección de Policía Minera',
            responsible: 'Julián Emmanuel López',
          },
          {
            id: 'dg-desarrollo-productivo',
            title: 'Dirección General de Desarrollo Productivo Minero',
            responsible: 'Carlos Nicolás Molina',
          },
          {
            id: 'dg-despacho',
            title: 'Dirección General de Despacho',
            responsible: 'Karina Elizabeth Caliva',
          },
        ],
      },
      {
        id: 'dg-administracion',
        title: 'Dirección General de Administración',
        titular: 'Cira. Brizuela Camila Soledad',
        dependents: [
          {
            id: 'd-servicio-minero',
            title: 'Dirección Servicio Minero',
            responsible: 'Hilda Valladares',
          },
          {
            id: 'c-valle-bermejo-llanos-del-sur',
            title: 'Coordinación Valle Bermejo y Llanos del Sur',
            responsible: 'Gisela Rufina Baigorrí Nieto',
          },
          {
            id: 'c-rendiciones-cuentas-presupuesto-patrimonio',
            title: 'Coordinación Rendiciones de Cuentas, Presupuesto y Patrimonio',
            responsible: INSTITUCIONAL_AUTHORITY_VACANT,
          },
          {
            id: 'c-tesoreria',
            title: 'Coordinación Tesorería',
            responsible: INSTITUCIONAL_AUTHORITY_VACANT,
          },
          {
            id: 'c-personal',
            title: 'Coordinación Personal',
            responsible: INSTITUCIONAL_AUTHORITY_VACANT,
          },
        ],
      },
    ],
    programs: {
      title: 'Programas y Áreas Dependientes',
      items: [
        {
          id: 'mesa-entradas',
          title: 'Mesa de Entradas y Salidas',
          responsible: INSTITUCIONAL_AUTHORITY_VACANT,
        },
        {
          id: 'topografia',
          title: 'Topografía',
          responsible: 'Adrián Gabriel Córdoba',
        },
        {
          id: 'trabajos-geologicos',
          title: 'Trabajos Geológicos',
          responsible: 'Edgar Iván Bricco Moreno',
        },
        {
          id: 'registro-productores',
          title: 'Registro de Productores y Minerales',
          responsible: 'Valladares Ercilla Rosario',
        },
        {
          id: 'fiscalizacion-trabajo',
          title:
            'Fiscalización de Trabajo de Exploración, Explotación y Establecimiento',
          responsible: 'Santiago Tadeo',
        },
        {
          id: 'registro-grafico-catastral',
          title: 'Registro Gráfico Catastral',
          responsible: 'Gabriel Sergio Gómez',
        },
      ],
    },
  },
}

export const institucionalService = institucionalData

export async function fetchInstitucionalPageData(): Promise<InstitucionalPageData> {
  return Promise.resolve(institucionalData)
}
