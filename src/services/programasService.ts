export interface ProgramaSection {
  readonly title: string
  readonly intro: string
  readonly body: string
}

export interface ProgramasPageData {
  readonly tallerArtesanias: ProgramaSection
}

const programasData: ProgramasPageData = {
  tallerArtesanias: {
    title: 'Taller de Artesanías',
    intro:
      'Programa de formación y valorización del trabajo artesanal vinculado al patrimonio y la identidad regional.',
    body:
      'La minería con identidad riojana incluye de manera especial el fomento y la visibilización de la pequeña escala y el trabajo artesanal. A través del Taller de Piedra, la Secretaría promueve de forma activa el agregado de valor en origen a las rocas de aplicación y minerales industriales característicos de nuestra tierra, tales como el granito, la laja y el travertino. Este espacio combina la formación en oficios tradicionales con el acompañamiento técnico y comercial a productores locales, artesanos y emprendedores rurales, resguardando nuestro acervo cultural y generando sustento familiar directo.',
  },
}

export const programasService = programasData

export async function fetchProgramasPageData(): Promise<ProgramasPageData> {
  return Promise.resolve(programasData)
}
