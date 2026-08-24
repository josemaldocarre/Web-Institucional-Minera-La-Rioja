export interface ProgramasPageHero {
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

export interface ProgramasImage {
  readonly src: string
}

export interface ProgramasTallerArtesanias {
  readonly titleKey: string
  readonly introKey: string
  readonly bodyKey?: string
  readonly image?: {
    readonly src: string
    readonly altKey: string
  }
  readonly images?: readonly ProgramasImage[]
}

export interface ProgramasPageData {
  readonly page: ProgramasPageHero
  readonly tallerArtesanias: ProgramasTallerArtesanias
}

const programasData: ProgramasPageData = {
  page: {
    breadcrumb: {
      href: '/',
      labelKey: 'nav.inicio',
    },
    eyebrow: {
      number: '4',
      labelKey: 'nav.programas',
    },
    titleKey: 'nav.programas',
    descriptionKey: 'programas.page.description',
  },
  tallerArtesanias: {
    titleKey: 'programas.tallerArtesanias.title',
    introKey: 'programas.tallerArtesanias.intro',
    bodyKey: 'programas.tallerArtesanias.body',
    image: {
      src: '/images/programas/taller-artesanias/03.jpg',
      altKey: 'programas.tallerArtesanias.imageAlt',
    },
    images: [
      { src: '/images/programas/taller-artesanias/01.jpg' },
      { src: '/images/programas/taller-artesanias/02.jpg' },
      { src: '/images/programas/taller-artesanias/06.jpg' },
      { src: '/images/programas/taller-artesanias/04.jpg' },
      { src: '/images/programas/taller-artesanias/05.jpg' },
      { src: '/images/programas/taller-artesanias/07.jpg' },
    ],
  },
}

export const programasService = programasData

export async function fetchProgramasPageData(): Promise<ProgramasPageData> {
  return Promise.resolve(programasData)
}
