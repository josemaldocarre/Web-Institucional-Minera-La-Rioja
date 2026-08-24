import { useTranslation } from 'react-i18next'
import { Accordion } from '../../components/ui/Accordion/Accordion'
import { ContentSection } from '../../components/ui/ContentSection/ContentSection'
import {
  INSTITUCIONAL_AUTHORITY_VACANT,
  institucionalService,
  type AuthorityDependencia,
  type AuthorityDireccionGeneral,
} from '../../services/institucionalService'
import styles from './Autoridades.module.scss'

const { titleKey, introKey, labels, secretaria, direccionesGenerales } =
  institucionalService.autoridades

function hasResponsible(
  value: string | null | undefined,
): value is string {
  if (value == null) {
    return false
  }

  const trimmed = value.trim()

  if (!trimmed) {
    return false
  }

  return trimmed.toUpperCase() !== INSTITUCIONAL_AUTHORITY_VACANT
}

function getVisibleDependencias(
  dependencias: readonly AuthorityDependencia[],
): AuthorityDependencia[] {
  return dependencias.filter((dependencia) => hasResponsible(dependencia.responsable))
}

function DireccionGeneralPanel({
  direccion,
}: {
  readonly direccion: AuthorityDireccionGeneral
}) {
  const { t } = useTranslation()
  const directorName = hasResponsible(direccion.director)
    ? direccion.director
    : null
  const dependencias = getVisibleDependencias(direccion.dependencias)

  if (!directorName && dependencias.length === 0) {
    return null
  }

  return (
    <div className={styles.panel}>
      {directorName ? (
        <p className={styles.directorName}>
          {directorName}
        </p>
      ) : null}

      {dependencias.length > 0 ? (
        <ul className={styles.dependentList}>
          {dependencias.map((dependencia) => (
            <li key={dependencia.id} className={styles.dependentItem}>
              <span className={styles.dependentTitle}>{t(dependencia.cargoKey)}</span>
              <span className={styles.responsibleName}>{dependencia.responsable}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export default function Autoridades() {
  const { t } = useTranslation()

  return (
    <ContentSection
      id="autoridades"
      title={t(titleKey)}
      description={introKey ? t(introKey) : undefined}
    >
      <div className={styles.layout}>
        <article className={styles.secretariaCard} aria-label={t(secretaria.headingKey)}>
          <p className={styles.secretariaHeading}>{t(secretaria.headingKey)}</p>

          <div className={styles.secretariaFields}>
            <div className={styles.fieldBlock}>
              <p className={styles.fieldLabel}>{t(labels.nameKey)}</p>
              <p className={styles.secretariaName}>{secretaria.name}</p>
            </div>

            <div className={styles.fieldBlock}>
              <p className={styles.fieldLabel}>{t(labels.roleKey)}</p>
              <p className={styles.secretariaRole}>{t(secretaria.roleKey)}</p>
            </div>
          </div>
        </article>

        <Accordion
          items={direccionesGenerales.map((direccion) => ({
            id: direccion.id,
            title: t(direccion.nombreKey),
            content: <DireccionGeneralPanel direccion={direccion} />,
          }))}
        />
      </div>
    </ContentSection>
  )
}
