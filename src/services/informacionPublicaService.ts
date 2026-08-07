export interface InformacionPublicaPageHero {
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

export interface InformacionPublicaResource {
  readonly id: string
  readonly title: string
  readonly href: string
}

export interface InformacionPublicaCategory {
  readonly id: 'normativas' | 'transparencia' | 'planQuinquenal'
  readonly title: string
  readonly intro: string
  readonly resources: readonly InformacionPublicaResource[]
}

export interface InformacionPublicaPageData {
  readonly page: InformacionPublicaPageHero
  readonly categories: readonly InformacionPublicaCategory[]
}

const informacionPublicaData: InformacionPublicaPageData = {
  page: {
    breadcrumb: {
      href: '/',
      label: 'Inicio',
    },
    eyebrow: {
      number: '3',
      label: 'Documentos Públicos',
    },
    title: 'Documentos Públicos',
    description:
      'Portal de documentación, transparencia y acceso a la información pública de la Secretaría de Minería de La Rioja.',
  },
  categories: [
    {
      id: 'normativas',
      title: 'Normativas',
      intro:
        'La seguridad jurídica, la previsibilidad económica y la estricta protección del patrimonio natural se sustentan en un marco legal robusto y transparente. En esta sección podrá acceder a las regulaciones nacionales y provinciales que rigen la actividad minera. Nuestro marco regulatorio asegura que cada fase de prospección, exploración y explotación se ejecute bajo los más rigurosos estándares ambientales, resguardando de forma prioritaria los recursos hídricos en articulación con el Ministerio del Agua y Energía, y garantizando la plena vigencia de las leyes que protegen nuestro territorio.',
      resources: [
        {
          id: 'constitucion-nacional',
          title: 'Constitución Nacional',
          href: 'https://servicios.infoleg.gob.ar/infolegInternet/anexos/0-4999/804/norma.htm',
        },
        {
          id: 'codigo-procedimiento-minero',
          title: 'Código de Procedimiento Minero',
          href: 'https://www.justicialarioja.gob.ar/legislacion/CP%20Minero%20revisado%20al%2025.03.15.pdf',
        },
        {
          id: 'constitucion-provincial',
          title: 'Constitución Provincial',
          href: 'https://www.saij.gob.ar/0-local-rioja-constitucion-provincia-rioja-lpf1000000-2008-05-14/123456789-0abc-defg-000-0001fvorpyel',
        },
        {
          id: 'codigo-minero-nacional',
          title: 'Código Minero Nacional',
          href: 'https://servicios.infoleg.gob.ar/infolegInternet/verNorma.do?id=43797',
        },
        {
          id: 'ley-ambiental-nacional',
          title: 'Ley Ambiental Nacional',
          href: 'https://servicios.infoleg.gob.ar/infolegInternet/verNorma.do?id=310020',
        },
        {
          id: 'normativa-de-proveedores',
          title: 'Normativa de Proveedores',
          href: '#',
        },
      ],
    },
    {
      id: 'transparencia',
      title: 'Transparencia',
      intro:
        'La transparencia y el libre acceso a la información pública son los pilares fundamentales para la legitimidad de la minería como política de Estado. Creemos en un modelo de gestión abierta al ciudadano, donde la fiscalización y los datos estadísticos reflejen la realidad técnica y económica del sector.',
      resources: [
        {
          id: 'empresas-provincia',
          title: 'Empresas trabajando en la provincia',
          href: '#',
        },
        {
          id: 'datos-estadisticos',
          title: 'Datos Estadísticos',
          href: '#',
        },
        {
          id: 'capacitaciones',
          title: 'Capacitaciones',
          href: '#',
        },
      ],
    },
    {
      id: 'planQuinquenal',
      title: 'Plan Quinquenal',
      intro:
        'El Plan Quinquenal para el Desarrollo Minero de La Rioja 2026-2030 constituye nuestra hoja de ruta estratégica para transformar el potencial geológico y humano de la provincia en bienestar real para las y los riojanos. Este documento es el resultado de un extenso diálogo técnico y territorial, consolidando un modelo que aporta de manera competitiva a la transición energética global a través de minerales críticos como el cobre y el litio, promoviendo el empleo formal y las inversiones con una clara responsabilidad social y climática. Lo invitamos a descargar y conocer el plan completo que guía el futuro productivo de nuestra región.',
      resources: [
        {
          id: 'plan-quinquenal-2026-2030',
          title: 'Plan Quinquenal 2026–2030',
          href: '/docs/plan-quinquenal.pdf',
        },
      ],
    },
  ],
}

export const informacionPublicaService = informacionPublicaData

export async function fetchInformacionPublicaPageData(): Promise<InformacionPublicaPageData> {
  return Promise.resolve(informacionPublicaData)
}
