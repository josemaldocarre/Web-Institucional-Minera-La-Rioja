export interface InformacionPublicaSection {
  readonly title: string
  readonly intro: string
  readonly body: string
}

export interface InformacionPublicaPageData {
  readonly normativas: InformacionPublicaSection
  readonly transparencia: InformacionPublicaSection
  readonly planQuinquenal: InformacionPublicaSection
}

const informacionPublicaData: InformacionPublicaPageData = {
  normativas: {
    title: 'Normativas',
    intro:
      'Marco normativo y documentación de referencia de la actividad minera en La Rioja.',
    body:
      'La seguridad jurídica, la previsibilidad económica y la estricta protección del patrimonio natural se sustentan en un marco legal robusto y transparente. En esta sección podrá acceder a las regulaciones nacionales y provinciales que rigen la actividad minera. Nuestro marco regulatorio asegura que cada fase de prospección, exploración y explotación se ejecute bajo los más rigurosos estándares ambientales, resguardando de forma prioritaria los recursos hídricos en articulación con el Ministerio del Agua y Energía, y garantizando la plena vigencia de las leyes que protegen nuestro territorio.',
  },
  transparencia: {
    title: 'Transparencia',
    intro:
      'Compromiso institucional con la publicación de información clara y accesible.',
    body:
      'La transparencia y el libre acceso a la información pública son los pilares fundamentales para la legitimidad de la minería como política de Estado. Creemos en un modelo de gestión abierta al ciudadano, donde la fiscalización y los datos estadísticos reflejen la realidad técnica y económica del sector.',
  },
  planQuinquenal: {
    title: 'Plan Quinquenal 2026-2030',
    intro:
      'Documento estratégico que define los lineamientos del desarrollo minero en la provincia.',
    body:
      'El Plan Quinquenal para el Desarrollo Minero de La Rioja 2026-2030 constituye nuestra hoja de ruta estratégica para transformar el potencial geológico y humano de la provincia en bienestar real para las y los riojanos. Este documento es el resultado de un extenso diálogo técnico y territorial, consolidando un modelo que aporta de manera competitiva a la transición energética global a través de minerales críticos como el cobre y el litio, promoviendo el empleo formal y las inversiones con una clara responsabilidad social y climática. Lo invitamos a descargar y conocer el plan completo que guía el futuro productivo de nuestra región.',
  },
}

export const informacionPublicaService = informacionPublicaData

export async function fetchInformacionPublicaPageData(): Promise<InformacionPublicaPageData> {
  return Promise.resolve(informacionPublicaData)
}
