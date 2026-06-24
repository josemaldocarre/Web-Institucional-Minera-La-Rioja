export interface GestionMineraIntro {
  readonly intro: string
}

export interface GestionMineraPageData {
  readonly tramites: GestionMineraIntro
  readonly catastroMinero: GestionMineraIntro
  readonly proveedores: GestionMineraIntro
}

const gestionMineraData: GestionMineraPageData = {
  tramites: {
    intro:
      'Con el objetivo de agilizar y transparentar la gestión administrativa de los recursos minerales de la provincia, ponemos a disposición de los usuarios y profesionales nuestra plataforma de servicios y trámites digitales. Desde este espacio técnico, la Secretaría administra el registro de productores, gestiona el Catastro Minero Provincial conforme al Código Nacional de Minería, tramita pedimentos, emite guías de tránsito y procesa las notificaciones y declaraciones juradas obligatorias, garantizando la seguridad jurídica y el estricto control de la actividad.  ',
  },
  catastroMinero: {
    intro:
      'El catastro minero reúne información geográfica sobre concesiones, límites y disponibilidad territorial en la provincia. Esta sección centralizará referencias espaciales y documentación asociada al registro minero. Contenido en preparación.',
  },
  proveedores: {
    intro:
      'El crecimiento minero adquiere valor real cuando impulsa el entramado socioproductivo local. A través de la articulación con la Secretaría de Industria, priorizamos y potenciamos la contratación de industrias, pymes y emprendimientos riojanos dentro de la cadena de valor minera. Acceda al Registro Oficial de Proveedores Mineros de La Rioja para inscribir su empresa, postularse a demandas del sector y formar parte del ecosistema de servicios regionales que dinamizan la economía de nuestros departamentos.',
  },
}

export const gestionMineraService = gestionMineraData

export async function fetchGestionMineraPageData(): Promise<GestionMineraPageData> {
  return Promise.resolve(gestionMineraData)
}
