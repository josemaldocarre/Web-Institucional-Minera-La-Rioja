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
  readonly directorPrefix: string
}

export interface AuthoritySecretaria {
  readonly heading: string
  readonly name: string
  readonly role: string
}

export interface AuthoritySupportMember {
  readonly id: string
  readonly cargo: string
  readonly responsable: string
}

export interface AuthorityPersonalApoyo {
  readonly title: string
  readonly members: readonly AuthoritySupportMember[]
}

export interface AuthoritySubdependencia {
  readonly id: string
  readonly cargo: string
  readonly responsable: string | null | undefined
}

export interface AuthorityDependencia {
  readonly id: string
  readonly cargo: string
  readonly responsable: string | null | undefined
  readonly subdependencias?: readonly AuthoritySubdependencia[]
}

export interface AuthorityDireccionGeneral {
  readonly id: string
  readonly nombre: string
  readonly director: string | null | undefined
  readonly dependencias: readonly AuthorityDependencia[]
}

export interface InstitucionalAuthorities {
  readonly title: string
  readonly intro?: string
  readonly labels: AuthorityLabels
  readonly secretaria: AuthoritySecretaria
  readonly personalApoyo: AuthorityPersonalApoyo
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
      directorPrefix: 'Dir.',
    },
    secretaria: {
      heading: 'SECRETARÍA DE MINERÍA',
      name: 'Abogada Ivanna María Guardia',
      role: 'Secretaria de Minería',
    },
    personalApoyo: {
      title: 'Personal de Apoyo',
      members: [
        {
          id: 'secretaria-privada',
          cargo: 'Secretaría Privada',
          responsable: 'Bettiana Flores Antúnez',
        },
        {
          id: 'chofer-secretario',
          cargo: 'Chofer del Secretario',
          responsable: 'Ramón Alberto Herrera',
        },
      ],
    },
    direccionesGenerales: [
      {
        id: 'dg-mineria',
        nombre: 'Dirección General de Minería',
        director: 'Florencia Olivera Buteler',
        dependencias: [
          {
            id: 'd-escribania-minas',
            cargo: 'Dirección de Escribanía de Minas',
            responsable: 'Agustina Delgado',
            subdependencias: [
              {
                id: 'prom-mesa-e-s',
                cargo: 'PROM. DE MESA DE E/S',
                responsable: 'María Leticia Díaz',
              },
            ],
          },
          {
            id: 'd-catastro-minero',
            cargo: 'Dirección de Catastro Minero',
            responsable: INSTITUCIONAL_AUTHORITY_VACANT,
            subdependencias: [
              {
                id: 'prom-registro-grafico-catastral',
                cargo: 'PROM. REGISTRO GRÁFICO CATASTRAL',
                responsable: 'Gabriel Sergio Gómez',
              },
              {
                id: 'prom-topografia',
                cargo: 'PROM. TOPOGRAFÍA',
                responsable: 'Adrián Gabriel Córdoba',
              },
            ],
          },
          {
            id: 'd-geologia-minera',
            cargo: 'Dirección de Geología Minera',
            responsable: 'Nicolás Fernando Pereyra',
            subdependencias: [
              {
                id: 'prom-trabajos-geologicos',
                cargo: 'PROM. TRABAJOS GEOLÓGICOS',
                responsable: 'Edgar Iván Bricco Moreno',
              },
            ],
          },
          {
            id: 'd-economia-minera',
            cargo: 'Dirección de Economía Minera',
            responsable: 'Fabiola Rivera',
            subdependencias: [
              {
                id: 'prom-registro-productores',
                cargo: 'PROM. REGISTRO DE PRODUCTORES Y MINERALES',
                responsable: 'Ercilla Rosario Valladares',
              },
              {
                id: 'coord-valle-bermejo-llanos-del-sur',
                cargo: 'COORD. VALLE BERMEJO Y LLANOS DEL SUR',
                responsable: 'Gisela Rufina Baigorria Nieto',
              },
            ],
          },
          {
            id: 'd-policia-minera',
            cargo: 'Dirección de Policía Minera',
            responsable: 'Julián Emmanuel López',
            subdependencias: [
              {
                id: 'prom-fiscalizacion-trabajo',
                cargo:
                  'PROM. FISCALIZACIÓN DE TRABAJO DE EXPLORACIÓN, EXPLOTACIÓN Y ESTABLECIMIENTO',
                responsable: 'Santiago Tadeo',
              },
            ],
          },
        ],
      },
      {
        id: 'dg-asuntos-legales',
        nombre: 'Dirección General de Asuntos Legales',
        director: 'Clotilde Mabel Páez',
        dependencias: [],
      },
      {
        id: 'dg-desarrollo-productivo',
        nombre: 'Dirección General de Desarrollo Productivo Minero',
        director: 'Carlos Nicolás Molina',
        dependencias: [
          {
            id: 'd-servicio-minero',
            cargo: 'Dirección Servicio Minero',
            responsable: 'Hilda Valladares',
          }
        ],
      },
      {
        id: 'dg-administracion',
        nombre: 'Dirección General de Administración',
        director: 'Cira. Brizuela Camila Soledad',
        dependencias: [
          {
            id: 'c-rendiciones-cuentas-presupuesto-patrimonio',
            cargo: 'Coordinación Rendiciones de Cuentas, Presupuesto y Patrimonio',
            responsable: INSTITUCIONAL_AUTHORITY_VACANT,
          },
          {
            id: 'c-tesoreria',
            cargo: 'Coordinación Tesorería',
            responsable: 'Gimena Soler',
          },
          {
            id: 'c-personal',
            cargo: 'Coordinación Personal',
            responsable: INSTITUCIONAL_AUTHORITY_VACANT,
          },
        ],
      },
      {
        id: 'dg-despacho',
        nombre: 'Dirección General de Despacho',
        director: 'Karina Elizabeth Caliva',
        dependencias: [],
      },
      {
        id: 'dg-comunicaciones-estrategicas-y-responsabilidad-social-minera',
        nombre: 'Dirección General de Comunicaciones Estratégicas y Responsabilidad Social Minera',
        director: 'Josefina Guadalupe Herrera Aguad',
        dependencias: []
      },
    ],
  },
}

export const institucionalService = institucionalData

export async function fetchInstitucionalPageData(): Promise<InstitucionalPageData> {
  return Promise.resolve(institucionalData)
}
