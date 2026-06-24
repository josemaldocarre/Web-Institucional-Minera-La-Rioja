export interface InstitucionalSection {
  readonly title: string
  readonly intro: string
}

export interface InstitucionalPageData {
  readonly quienesSomos: InstitucionalSection
  readonly autoridades: InstitucionalSection
  readonly contacto: InstitucionalSection
}

const institucionalData: InstitucionalPageData = {
  quienesSomos: {
    title: 'Quiénes Somos',
    intro:
      'Bienvenidos al portal institucional de la Secretaría de Minería del Gobierno de La Rioja. Somos la autoridad competente encargada de planificar, regular, promover y controlar la actividad minera en todo el territorio provincial. Nuestro propósito es impulsar el desarrollo de una minería moderna, inclusiva y con una fuerte identidad riojana, combinando de manera estratégica el crecimiento económico con el bienestar social y el cuidado ambiental. Trabajamos bajo un modelo participativo que articula esfuerzos con el sector científico-académico, la Secretaría de Ambiente, empresas públicas como EMSE, plataformas de innovación como Kallpa I+D, y fundamentalmente, con la comunidad local como eje central de nuestras políticas.',
  },
  autoridades: {
    title: 'Autoridades',
    intro:
      'El equipo de gestión de la Secretaría de Minería lidera la ejecución y el control técnico-institucional de la política minera provincial, velando por el cumplimiento de las metas estratégicas de sostenibilidad, transparencia y desarrollo local definidas para el bienestar de la provincia.',
  },
  contacto: {
    title: 'Contacto',
    intro:
      'Estamos a su disposición para resolver consultas técnicas, recibir denuncias administrativas, tramitar guías de transporte o brindar asistencia institucional a productores y ciudadanos. Encuentre aquí nuestras vías de comunicación telefónica, correo electrónico oficial, horarios de atención al público y la ubicación geográfica de nuestras oficinas centrales en la ciudad de La Rioja.',
  },
}

export const institucionalService = institucionalData

export async function fetchInstitucionalPageData(): Promise<InstitucionalPageData> {
  return Promise.resolve(institucionalData)
}
