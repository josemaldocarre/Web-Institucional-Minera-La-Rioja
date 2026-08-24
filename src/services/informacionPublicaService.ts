export interface InformacionPublicaPageHero {
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

export interface InformacionPublicaResource {
  readonly id: string
  readonly titleKey: string
  readonly href: string
}

export interface InformacionPublicaCategory {
  readonly id: 'normativas' | 'transparencia' | 'planQuinquenal'
  readonly titleKey: string
  readonly introKey: string
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
      labelKey: 'nav.inicio',
    },
    eyebrow: {
      number: '3',
      labelKey: 'nav.informacionPublica',
    },
    titleKey: 'nav.informacionPublica',
    descriptionKey: 'informacionPublica.page.description',
  },
  categories: [
    {
      id: 'normativas',
      titleKey: 'informacionPublica.categories.normativas.title',
      introKey: 'informacionPublica.categories.normativas.intro',
      resources: [
        {
          id: 'constitucion-nacional',
          titleKey: 'informacionPublica.categories.normativas.resources.constitucionNacional',
          href: 'https://servicios.infoleg.gob.ar/infolegInternet/anexos/0-4999/804/norma.htm',
        },
        {
          id: 'codigo-procedimiento-minero',
          titleKey: 'informacionPublica.categories.normativas.resources.codigoProcedimientoMinero',
          href: 'https://www.justicialarioja.gob.ar/legislacion/CP%20Minero%20revisado%20al%2025.03.15.pdf',
        },
        {
          id: 'constitucion-provincial',
          titleKey: 'informacionPublica.categories.normativas.resources.constitucionProvincial',
          href: 'https://www.saij.gob.ar/0-local-rioja-constitucion-provincia-rioja-lpf1000000-2008-05-14/123456789-0abc-defg-000-0001fvorpyel',
        },
        {
          id: 'codigo-minero-nacional',
          titleKey: 'informacionPublica.categories.normativas.resources.codigoMineroNacional',
          href: 'https://servicios.infoleg.gob.ar/infolegInternet/verNorma.do?id=43797',
        },
        {
          id: 'ley-ambiental-nacional',
          titleKey: 'informacionPublica.categories.normativas.resources.leyAmbientalNacional',
          href: 'https://servicios.infoleg.gob.ar/infolegInternet/verNorma.do?id=310020',
        },
        {
          id: 'normativa-de-proveedores',
          titleKey: 'informacionPublica.categories.normativas.resources.normativaProveedores',
          href: '#',
        },
      ],
    },
    {
      id: 'transparencia',
      titleKey: 'informacionPublica.categories.transparencia.title',
      introKey: 'informacionPublica.categories.transparencia.intro',
      resources: [
        {
          id: 'empresas-provincia',
          titleKey: 'informacionPublica.categories.transparencia.resources.empresasProvincia',
          href: '#',
        },
        {
          id: 'datos-estadisticos',
          titleKey: 'informacionPublica.categories.transparencia.resources.datosEstadisticos',
          href: '#',
        },
        {
          id: 'capacitaciones',
          titleKey: 'informacionPublica.categories.transparencia.resources.capacitaciones',
          href: '#',
        },
      ],
    },
    {
      id: 'planQuinquenal',
      titleKey: 'informacionPublica.categories.planQuinquenal.title',
      introKey: 'informacionPublica.categories.planQuinquenal.intro',
      resources: [
        {
          id: 'plan-quinquenal-2026-2030',
          titleKey: 'home.featureDocuments.plan.title',
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
