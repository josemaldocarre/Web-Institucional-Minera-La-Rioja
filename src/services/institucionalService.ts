export interface InstitucionalPageHero {
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

export interface InstitucionalImage {
  readonly src: string
  readonly altKey: string
}

export interface InstitucionalSection {
  readonly titleKey: string
  readonly introKey?: string
  readonly bodyKey: string
  readonly image?: InstitucionalImage
}

export const INSTITUCIONAL_AUTHORITY_VACANT = 'VACANTE' as const

export interface AuthorityLabels {
  readonly nameKey: string
  readonly roleKey: string
}

export interface AuthoritySuperior {
  readonly id: string
  readonly headingKey: string
  readonly name: string
  readonly roleKey: string
  readonly accent?: 'green' | 'orange'
}

export interface AuthorityDependencia {
  readonly id: string
  readonly cargoKey: string
  readonly responsable: string | null | undefined
}

export interface AuthorityDireccionGeneral {
  readonly id: string
  readonly nombreKey: string
  readonly director: string | null | undefined
  readonly dependencias: readonly AuthorityDependencia[]
}

export interface InstitucionalAuthorities {
  readonly titleKey: string
  readonly introKey?: string
  readonly labels: AuthorityLabels
  readonly superiores: readonly AuthoritySuperior[]
  readonly direccionesGenerales: readonly AuthorityDireccionGeneral[]
}

export interface InstitucionalFuncionNode {
  readonly id: string
  readonly number: string
  readonly titleKey: string
  readonly dependsOnKey?: string
  readonly functionKeys: readonly string[]
  readonly children?: readonly InstitucionalFuncionNode[]
}

export interface InstitucionalFunciones {
  readonly titleKey: string
  readonly units: readonly InstitucionalFuncionNode[]
}

export interface InstitucionalPageData {
  readonly page: InstitucionalPageHero
  readonly quienesSomos: InstitucionalSection
  readonly autoridades: InstitucionalAuthorities
  readonly funciones: InstitucionalFunciones
}

const FUNCION_UNIT_BASE = 'institucional.funciones.unidades'

function funcionNode(
  id: string,
  number: string,
  unitKey: string,
  itemIds: readonly string[],
  options?: {
    readonly dependsOn?: boolean
    readonly children?: readonly InstitucionalFuncionNode[]
  },
): InstitucionalFuncionNode {
  return {
    id,
    number,
    titleKey: `${FUNCION_UNIT_BASE}.${unitKey}.title`,
    dependsOnKey: options?.dependsOn
      ? `${FUNCION_UNIT_BASE}.${unitKey}.dependsOn`
      : undefined,
    functionKeys: itemIds.map(
      (itemId) => `${FUNCION_UNIT_BASE}.${unitKey}.items.${itemId}`,
    ),
    children: options?.children,
  }
}

const funcionesUnits: readonly InstitucionalFuncionNode[] = [
  funcionNode('funcion-secretaria', '1.', 'secretaria', [
    'asistirPoderEjecutivo',
    'definirObjetivos',
    'ejecutarPlanes',
    'proponerPolitica',
    'representarEstado',
    'participarCredito',
    'coordinarAsistencia',
    'fortalecerVinculacion',
  ]),
  funcionNode(
    'funcion-dg-mineria',
    '2.',
    'dgMineria',
    [
      'planificarDesarrollo',
      'promoverAprovechamiento',
      'coordinarPoliticaNacional',
      'proponerEjecutarControlar',
      'articularPoliticas',
      'promoverRiesgos',
      'coordinarCooperacion',
    ],
    {
      children: [
        funcionNode(
          'funcion-d-escribania-minas',
          '2.1.',
          'escribaniaMinas',
          [
            'llevarRegistros',
            'llevarPadronCanon',
            'realizarNotificaciones',
            'asistirDireccionGeneral',
            'informarRegistros',
            'cumplirCodigo',
            'dejarConstancia',
            'extenderCertificados',
            'informarRequisitos',
            'certificarPlazos',
            'otrasTareas',
          ],
          {
            dependsOn: true,
            children: [
              funcionNode(
                'funcion-promotor-mesa-entradas',
                '2.1.1.',
                'mesaEntradas',
                ['registrarPresentacion', 'llevarUbicacion'],
                { dependsOn: true },
              ),
            ],
          },
        ),
        funcionNode(
          'funcion-d-catastro-minero',
          '2.2.',
          'catastroMinero',
          [
            'asignarMatriculas',
            'ordenarCatastro',
            'registrarDerechos',
            'informarDerechos',
            'participarMensuras',
            'aprobarMensuras',
          ],
          {
            dependsOn: true,
            children: [
              funcionNode(
                'funcion-promotor-topografia',
                '2.2.1.',
                'topografia',
                ['controlarTareas', 'mantenerRed', 'asegurarUbicacion'],
                { dependsOn: true },
              ),
              funcionNode(
                'funcion-promotor-grafico-catastral',
                '2.2.2.',
                'graficoCatastral',
                ['controlarRegistro', 'aplicarCodigo', 'contribuirSeguridad'],
                { dependsOn: true },
              ),
            ],
          },
        ),
        funcionNode(
          'funcion-d-geologia-minera',
          '2.3.',
          'geologiaMinera',
          [
            'asesorar',
            'evaluarCanteras',
            'evaluarMuestras',
            'organizarMuestras',
            'analizarProgramas',
            'evaluarLabores',
            'realizarAnalisis',
            'analizarDeclaraciones',
            'estudiosGeologicos',
            'estudiarAcceso',
            'registroConsultores',
          ],
          {
            dependsOn: true,
            children: [
              funcionNode(
                'funcion-promotor-trabajos-geologicos',
                '2.3.1.',
                'trabajosGeologicos',
                ['seleccionarPuntos', 'promoverUso'],
                { dependsOn: true },
              ),
            ],
          },
        ),
        funcionNode(
          'funcion-d-economia-minera',
          '2.4.',
          'economiaMinera',
          [
            'estudiarInversiones',
            'analizarProyectos',
            'determinarRegalias',
            'venderGuias',
          ],
          {
            dependsOn: true,
            children: [
              funcionNode(
                'funcion-promotor-registro-productores',
                '2.4.1.',
                'registroProductores',
                [
                  'relevarProductores',
                  'mantenerRegistro',
                  'coordinarSuim',
                  'articularInformacion',
                ],
                { dependsOn: true },
              ),
            ],
          },
        ),
        funcionNode(
          'funcion-d-policia-minera',
          '2.5.',
          'policiaMinera',
          [
            'controlarTrabajos',
            'protegerSeguridad',
            'inspeccionar',
            'constatarInfracciones',
            'controlarTransito',
            'verificarGuias',
          ],
          {
            dependsOn: true,
            children: [
              funcionNode(
                'funcion-promotor-fiscalizacion',
                '2.5.1.',
                'fiscalizacion',
                [
                  'evaluarSistemas',
                  'fiscalizarRacionalidad',
                  'comprobarNormas',
                  'verificarBuenasPracticas',
                ],
                { dependsOn: true },
              ),
            ],
          },
        ),
      ],
    },
  ),
  funcionNode(
    'funcion-dg-recursos-no-renovables',
    '3.',
    'dgRecursos',
    [
      'ejecutarPolitica',
      'velarNormas',
      'relevarRecursos',
      'mantenerBud',
      'intervenirExplotacion',
    ],
    {
      children: [
        funcionNode(
          'funcion-d-gestion-proyectos',
          '3.1.',
          'gestionProyectos',
          ['asistirSecretaria', 'intervenirInversores', 'participarDesarrollo'],
          { dependsOn: true },
        ),
      ],
    },
  ),
  funcionNode(
    'funcion-dg-desarrollo-productivo',
    '4.',
    'dgDesarrollo',
    [
      'promoverActividad',
      'evaluarProyectos',
      'fomentarServicios',
      'impulsarLaboratorios',
      'crearMuseo',
      'mantenerRelaciones',
      'brindarAsistencia',
      'intervenirRegimenes',
      'coordinarProyectos',
    ],
    {
      children: [
        funcionNode(
          'funcion-coord-valle-bermejo',
          '4.1.',
          'valleBermejo',
          ['contribuirPlanificacion', 'considerarRecursos'],
          { dependsOn: true },
        ),
        funcionNode(
          'funcion-d-servicio-minero',
          '4.2.',
          'servicioMinero',
          [
            'colaborarPoliticas',
            'promoverInversiones',
            'interactuarInversores',
            'proporcionarInformacion',
          ],
          { dependsOn: true },
        ),
      ],
    },
  ),
  funcionNode(
    'funcion-dg-administracion',
    '5.',
    'dgAdministracion',
    [
      'administrarRecursos',
      'dirigirContabilidad',
      'dirigirProcesos',
      'supervisarCompras',
      'administrarPatrimonio',
      'coordinarPersonal',
      'definirIndicadores',
      'registrarRecursos',
      'ejecutarAcciones',
      'supervisarRendiciones',
    ],
    {
      children: [
        funcionNode(
          'funcion-coord-rendicion-cuentas',
          '5.1.',
          'rendicionCuentas',
          [
            'asistirPresupuesto',
            'prepararAnteproyecto',
            'registrarEjecucion',
            'tramitarModificaciones',
            'registrarCuotas',
            'mantenerBienes',
            'intervenirMovimientos',
            'organizarArchivo',
          ],
          { dependsOn: true },
        ),
        funcionNode(
          'funcion-coord-tesoreria',
          '5.2.',
          'tesoreria',
          [
            'asistirFondos',
            'registrarMovimientos',
            'elaborarParte',
            'administrarValores',
            'efectuarPagos',
            'tramitesBancarios',
          ],
          { dependsOn: true },
        ),
        funcionNode(
          'funcion-coord-personal',
          '5.3.',
          'personal',
          [
            'planificarRecursos',
            'determinarNecesidades',
            'elevarPropuestas',
            'mantenerHistorial',
            'promoverCapacitacion',
            'evaluarRiesgos',
            'procurarBienestar',
            'asistirRecursosHumanos',
          ],
          { dependsOn: true },
        ),
      ],
    },
  ),
  funcionNode('funcion-dg-asuntos-legales', '6.', 'asuntosLegales', [
    'contribuirNormas',
    'asesorarDependencias',
    'intervenirDocumentacion',
    'supervisarProyectos',
    'asesorarNormativa',
    'dictaminarRecursos',
    'intervenirConvenios',
    'intervenirContratos',
  ]),
  funcionNode('funcion-dg-despacho', '7.', 'despacho', [
    'elaborarProyectos',
    'disponerNotificacion',
    'intervenirAsesoramiento',
    'participarRecursos',
    'registrarDocumentacion',
    'ordenarTramitacion',
    'protocolizarActos',
    'analizarNormativa',
    'detectarVacios',
  ]),
]

const institucionalData: InstitucionalPageData = {
  page: {
    breadcrumb: {
      href: '/',
      labelKey: 'nav.inicio',
    },
    eyebrow: {
      number: '1',
      labelKey: 'institucional.page.eyebrow',
    },
    titleKey: 'institucional.page.title',
    descriptionKey: 'institucional.page.description',
  },
  quienesSomos: {
    titleKey: 'institucional.quienesSomos.title',
    bodyKey: 'institucional.quienesSomos.body',
    image: {
      src: '/images/institucional/quienes-somos.JPG',
      altKey: 'institucional.quienesSomos.imageAlt',
    },
  },
  autoridades: {
    titleKey: 'institucional.autoridades.title',
    introKey: 'institucional.autoridades.intro',
    labels: {
      nameKey: 'institucional.autoridades.labels.name',
      roleKey: 'institucional.autoridades.labels.role',
    },
    superiores: [
      {
        id: 'gobernador',
        headingKey: 'institucional.autoridades.gobernador.heading',
        name: 'Ricardo Quintela',
        roleKey: 'institucional.autoridades.gobernador.role',
        accent: 'orange',
      },
      {
        id: 'ministro',
        headingKey: 'institucional.autoridades.ministro.heading',
        name: 'Federico Bazan',
        roleKey: 'institucional.autoridades.ministro.role',
        accent: 'orange',
      },
      {
        id: 'secretaria',
        headingKey: 'institucional.autoridades.secretaria.heading',
        name: 'Abg. Ivanna María Guardia',
        roleKey: 'institucional.autoridades.secretaria.role',
        accent: 'green',
      },
    ],
    direccionesGenerales: [
      {
        id: 'dg-mineria',
        nombreKey: 'institucional.autoridades.unidades.dgMineria',
        director: 'Ing. Florencia Olivera Butel',
        dependencias: [
          {
            id: 'd-escribania-minas',
            cargoKey: 'institucional.autoridades.unidades.dEscribaniaMinas',
            responsable: 'Escr. Agustina Delgado',
          },
          {
            id: 'd-catastro-minero',
            cargoKey: 'institucional.autoridades.unidades.dCatastroMinero',
            responsable: INSTITUCIONAL_AUTHORITY_VACANT,
          },
          {
            id: 'd-geologia-minera',
            cargoKey: 'institucional.autoridades.unidades.dGeologiaMinera',
            responsable: 'Geol. Nicolás Fernando Pereyra',
          },
          {
            id: 'd-economia-minera',
            cargoKey: 'institucional.autoridades.unidades.dEconomiaMinera',
            responsable: 'Ing. Fabiola Rivera',
          },
          {
            id: 'd-policia-minera',
            cargoKey: 'institucional.autoridades.unidades.dPoliciaMinera',
            responsable: 'Lic. Julián Emmanuel López',
          },
        ],
      },
      {
        id: 'dg-asuntos-legales',
        nombreKey: 'institucional.autoridades.unidades.dgAsuntosLegales',
        director: 'Abg. Clotilde Mabel Páez',
        dependencias: [],
      },
      {
        id: 'dg-desarrollo-productivo',
        nombreKey: 'institucional.autoridades.unidades.dgDesarrolloProductivo',
        director: 'Ing. Carlos Nicolás Molina',
        dependencias: [
          {
            id: 'd-servicio-minero',
            cargoKey: 'institucional.autoridades.unidades.dServicioMinero',
            responsable: 'Geol. Hilda Valladares',
          },
        ],
      },
      {
        id: 'dg-administracion',
        nombreKey: 'institucional.autoridades.unidades.dgAdministracion',
        director: 'Cra. Brizuela Camila Soledad',
        dependencias: [],
      },
      {
        id: 'dg-despacho',
        nombreKey: 'institucional.autoridades.unidades.dgDespacho',
        director: 'Tec. en Adm. de Doc. y Arch. Karina Elizabeth Caliva',
        dependencias: [],
      },
    ],
  },
  funciones: {
    titleKey: 'institucional.funciones.title',
    units: funcionesUnits,
  },
}

export const institucionalService = institucionalData

export async function fetchInstitucionalPageData(): Promise<InstitucionalPageData> {
  return Promise.resolve(institucionalData)
}
