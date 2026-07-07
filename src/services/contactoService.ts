export interface ContactoPageHero {
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

export interface ContactoEmail {
  readonly id: string
  readonly area: string
  readonly email: string
}

export interface ContactoSocialItem {
  readonly id: string
  readonly network: string
  readonly label: string
  readonly href: string
}

export interface ContactoLocation {
  readonly title: string
  readonly street: string
  readonly city: string
  readonly mapEmbedUrl: string
  readonly mapTitle: string
}

export interface ContactoHours {
  readonly title: string
  readonly days: string
  readonly time: string
}

export interface ContactoPrimaryContact {
  readonly title: string
  readonly label: string
  readonly email: string
}

export interface ContactoEmailsBlock {
  readonly title: string
  readonly items: readonly ContactoEmail[]
}

export interface ContactoSocialBlock {
  readonly title: string
  readonly items: readonly ContactoSocialItem[]
}

export interface ContactoContact {
  readonly title: string
  readonly intro: string
  readonly body: string
  readonly hours: ContactoHours
  readonly primaryContact: ContactoPrimaryContact
  readonly emails: ContactoEmailsBlock
  readonly social: ContactoSocialBlock
  readonly location: ContactoLocation
}

export interface ContactoPageData {
  readonly page: ContactoPageHero
  readonly contact: ContactoContact
}

const contactoData: ContactoPageData = {
  page: {
    breadcrumb: {
      href: '/',
      label: 'Inicio',
    },
    eyebrow: {
      number: '5',
      label: 'Contacto',
    },
    title: 'Contacto',
    description:
      'Canales oficiales de comunicación de la Secretaría de Minería del Gobierno de La Rioja.',
  },
  contact: {
    title: 'Canales de atención',
    intro:
      'Estamos a su disposición para resolver consultas técnicas, recibir denuncias administrativas, tramitar guías de transporte o brindar asistencia institucional a productores y ciudadanos.',
    body: 'Encuentre aquí nuestras vías de comunicación telefónica, correo electrónico oficial, horarios de atención al público y la ubicación geográfica de nuestras oficinas centrales en la ciudad de La Rioja.',
    hours: {
      title: 'Horario',
      days: 'Lunes a Viernes',
      time: '08:00 a 13:00 hs',
    },
    primaryContact: {
      title: 'Contacto institucional',
      label: 'Correo principal',
      email: 'mineria@larioja.gob.ar',
    },
    emails: {
      title: 'Correos electrónicos',
      items: [
        {
          id: 'secretaria-mineria',
          area: 'Secretaría de Minería',
          email: 'mineria@larioja.gob.ar',
        },
        {
          id: 'direccion-general-mineria',
          area: 'Dirección General de Minería',
          email: 'direcciongeneraldemineria@larioja.gob.ar',
        },
        {
          id: 'escribania-minas',
          area: 'Dirección de Escribanía de Minas',
          email: 'escribaniademinaslr@larioja.gob.ar',
        },
        {
          id: 'catastro-minero',
          area: 'Dirección de Catastro Minero',
          email: 'catastrominerolr@larioja.gob.ar',
        },
        {
          id: 'policia-minera',
          area: 'Dirección de Policía Minera',
          email: 'policiaminerallr@larioja.gob.ar',
        },
        {
          id: 'economia-minera',
          area: 'Dirección de Economía Minera',
          email: 'economiaminerallr@larioja.gob.ar',
        },
        {
          id: 'geologia-minera',
          area: 'Dirección de Geología Minera',
          email: 'geologiamineralr@larioja.gob.ar',
        },
        {
          id: 'desarrollo-productivo',
          area: 'Dirección General de Desarrollo Productivo Minero',
          email: 'div.gral.dedes.prod.min.p@larioja.gob.ar',
        },
      ],
    },
    social: {
      title: 'Redes sociales',
      items: [
        {
          id: 'instagram',
          network: 'Instagram',
          label: '@minerialarioja',
          href: 'https://www.instagram.com/minerialarioja/',
        },
        {
          id: 'facebook',
          network: 'Facebook',
          label: 'Secretaría de Minería La Rioja',
          href: 'https://www.facebook.com/minerialr/',
        },
      ],
    },
    location: {
      title: 'Dirección',
      street: 'Pelagio B. Luna 800',
      city: 'La Rioja',
      mapEmbedUrl:
        'https://maps.google.com/maps?q=Pelagio+B.+Luna+800,+La+Rioja,+Argentina&hl=es&z=16&output=embed',
      mapTitle: 'Ubicación de las oficinas centrales de la Secretaría de Minería',
    },
  },
}

export const contactoService = contactoData

export async function fetchContactoPageData(): Promise<ContactoPageData> {
  return Promise.resolve(contactoData)
}
