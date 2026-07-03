export interface ProgramasPageHero {
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

export interface ProgramasImage {
  readonly src: string
  readonly alt: string
}

export interface ProgramasTallerArtesanias {
  readonly title: string
  readonly intro: string
  readonly body?: string
  readonly image?: ProgramasImage
}

export interface ProgramasPageData {
  readonly page: ProgramasPageHero
  readonly tallerArtesanias: ProgramasTallerArtesanias
}

const programasData: ProgramasPageData = {
  page: {
    breadcrumb: {
      href: '/',
      label: 'Inicio',
    },
    eyebrow: {
      number: '4',
      label: 'Programas',
    },
    title: 'Programas',
    description:
      'Conozca los programas de la Secretaría de Minería orientados al desarrollo local y la valorización del trabajo artesanal en La Rioja.',
  },
  tallerArtesanias: {
    title: 'Taller de Artesanías',
    intro: 'La minería con identidad riojana incluye de manera especial el fomento y la visibilización de la pequeña escala y el trabajo artesanal. A través del Taller de Piedra, la Secretaría promueve de forma activa el agregado de valor en origen a las rocas de aplicación y minerales industriales característicos de nuestra tierra, tales como el granito, la laja y el travertino. Este espacio combina la formación en oficios tradicionales con el acompañamiento técnico y comercial a productores locales, artesanos y emprendedores rurales, resguardando nuestro acervo cultural y generando sustento familiar directo.',
  },
}

export const programasService = programasData

export async function fetchProgramasPageData(): Promise<ProgramasPageData> {
  return Promise.resolve(programasData)
}
