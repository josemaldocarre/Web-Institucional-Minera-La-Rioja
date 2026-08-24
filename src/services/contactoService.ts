export interface ContactoPageHero {
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

export interface ContactoEmail {
  readonly id: string
  readonly areaKey: string
  readonly email: string
}

export interface ContactoSocialItem {
  readonly id: string
  readonly network: string
  readonly label?: string
  readonly labelKey?: string
  readonly href: string
}

export interface ContactoLocation {
  readonly titleKey: string
  readonly street: string
  readonly city: string
  readonly mapEmbedUrl: string
  readonly mapTitleKey: string
}

export interface ContactoHours {
  readonly titleKey: string
  readonly daysKey: string
  readonly timeKey: string
}

export interface ContactoPrimaryContact {
  readonly titleKey: string
  readonly labelKey: string
  readonly email: string
}

export interface ContactoEmailsBlock {
  readonly titleKey: string
  readonly items: readonly ContactoEmail[]
}

export interface ContactoSocialBlock {
  readonly titleKey: string
  readonly items: readonly ContactoSocialItem[]
}

export interface ContactoContact {
  readonly titleKey: string
  readonly introKey: string
  readonly bodyKey: string
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
      labelKey: 'nav.inicio',
    },
    eyebrow: {
      number: '5',
      labelKey: 'nav.contacto',
    },
    titleKey: 'nav.contacto',
    descriptionKey: 'contacto.page.description',
  },
  contact: {
    titleKey: 'contacto.contact.title',
    introKey: 'contacto.contact.intro',
    bodyKey: 'contacto.contact.body',
    hours: {
      titleKey: 'contacto.hours.title',
      daysKey: 'contacto.hours.days',
      timeKey: 'contacto.hours.time',
    },
    primaryContact: {
      titleKey: 'contacto.primaryContact.title',
      labelKey: 'contacto.primaryContact.label',
      email: 'mineria@larioja.gob.ar',
    },
    emails: {
      titleKey: 'contacto.emails.title',
      items: [
        {
          id: 'secretaria-mineria',
          areaKey: 'contacto.emails.areas.secretaria',
          email: 'mineria@larioja.gob.ar',
        },
        {
          id: 'direccion-general-mineria',
          areaKey: 'institucional.autoridades.unidades.dgMineria',
          email: 'direcciongeneraldemineria@larioja.gob.ar',
        },
        {
          id: 'escribania-minas',
          areaKey: 'institucional.autoridades.unidades.dEscribaniaMinas',
          email: 'escribaniademinaslr@larioja.gob.ar',
        },
        {
          id: 'catastro-minero',
          areaKey: 'institucional.autoridades.unidades.dCatastroMinero',
          email: 'catastrominerolr@larioja.gob.ar',
        },
        {
          id: 'policia-minera',
          areaKey: 'institucional.autoridades.unidades.dPoliciaMinera',
          email: 'policiaminerallr@larioja.gob.ar',
        },
        {
          id: 'economia-minera',
          areaKey: 'institucional.autoridades.unidades.dEconomiaMinera',
          email: 'economiaminerallr@larioja.gob.ar',
        },
        {
          id: 'geologia-minera',
          areaKey: 'institucional.autoridades.unidades.dGeologiaMinera',
          email: 'geologiamineralr@larioja.gob.ar',
        },
        {
          id: 'desarrollo-productivo',
          areaKey: 'institucional.autoridades.unidades.dgDesarrolloProductivo',
          email: 'div.gral.dedes.prod.min.p@larioja.gob.ar',
        },
      ],
    },
    social: {
      titleKey: 'contacto.social.title',
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
          labelKey: 'contacto.social.facebookLabel',
          href: 'https://www.facebook.com/minerialr/',
        },
      ],
    },
    location: {
      titleKey: 'contacto.location.title',
      street: 'Pelagio B. Luna 800',
      city: 'La Rioja',
      mapEmbedUrl:
        'https://maps.google.com/maps?q=Pelagio+B.+Luna+800,+La+Rioja,+Argentina&hl=es&z=16&output=embed',
      mapTitleKey: 'contacto.location.mapTitle',
    },
  },
}

export const contactoService = contactoData

export async function fetchContactoPageData(): Promise<ContactoPageData> {
  return Promise.resolve(contactoData)
}
