import { Accordion } from '../../components/ui/Accordion/Accordion'
import { ContentSection } from '../../components/ui/ContentSection/ContentSection'
import {
  INSTITUCIONAL_AUTHORITY_VACANT,
  institucionalService,
  type AuthorityDependencia,
  type AuthorityDireccionGeneral,
  type AuthoritySubdependencia,
} from '../../services/institucionalService'
import styles from './Autoridades.module.scss'

const { title, intro, labels, secretaria, personalApoyo, direccionesGenerales } =
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

function getVisibleSubdependencias(
  subdependencias: readonly AuthoritySubdependencia[] | undefined,
): AuthoritySubdependencia[] {
  if (!subdependencias) {
    return []
  }

  return subdependencias.filter((item) => hasResponsible(item.responsable))
}

function isVisibleDependencia(dependencia: AuthorityDependencia): boolean {
  return (
    hasResponsible(dependencia.responsable) ||
    getVisibleSubdependencias(dependencia.subdependencias).length > 0
  )
}

function getVisibleDependencias(
  dependencias: readonly AuthorityDependencia[],
): AuthorityDependencia[] {
  return dependencias.filter(isVisibleDependencia)
}

function DireccionGeneralPanel({
  direccion,
}: {
  readonly direccion: AuthorityDireccionGeneral
}) {
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
          {labels.directorPrefix} {directorName}
        </p>
      ) : null}

      {dependencias.length > 0 ? (
        <ul className={styles.dependentList}>
          {dependencias.map((dependencia) => {
            const responsable = hasResponsible(dependencia.responsable)
              ? dependencia.responsable
              : null
            const subdependencias = getVisibleSubdependencias(
              dependencia.subdependencias,
            )

            return (
              <li key={dependencia.id} className={styles.dependentItem}>
                <span className={styles.dependentTitle}>{dependencia.cargo}</span>

                {responsable ? (
                  <span className={styles.responsibleName}>{responsable}</span>
                ) : null}

                {subdependencias.length > 0 ? (
                  <ul className={styles.subdependentList}>
                    {subdependencias.map((subdependencia) => (
                      <li
                        key={subdependencia.id}
                        className={styles.subdependentItem}
                      >
                        <span className={styles.subdependentTitle}>
                          {subdependencia.cargo}
                        </span>
                        <span className={styles.subdependentName}>
                          {subdependencia.responsable}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}

export default function Autoridades() {
  const visibleSupportMembers = personalApoyo.members.filter((member) =>
    hasResponsible(member.responsable),
  )

  return (
    <ContentSection id="autoridades" title={title} description={intro}>
      <div className={styles.layout}>
        <article className={styles.secretariaCard} aria-label={secretaria.heading}>
          <p className={styles.secretariaHeading}>{secretaria.heading}</p>

          <div className={styles.secretariaFields}>
            <div className={styles.fieldBlock}>
              <p className={styles.fieldLabel}>{labels.name}</p>
              <p className={styles.secretariaName}>{secretaria.name}</p>
            </div>

            <div className={styles.fieldBlock}>
              <p className={styles.fieldLabel}>{labels.role}</p>
              <p className={styles.secretariaRole}>{secretaria.role}</p>
            </div>
          </div>
        </article>

        {visibleSupportMembers.length > 0 ? (
          <section className={styles.support} aria-labelledby="support-heading">
            <h3 id="support-heading" className={styles.subsectionTitle}>
              {personalApoyo.title}
            </h3>

            <ul className={styles.supportList}>
              {visibleSupportMembers.map((member) => (
                <li key={member.id} className={styles.supportItem}>
                  <span className={styles.supportRole}>{member.cargo}</span>
                  <span className={styles.responsibleName}>{member.responsable}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <Accordion
          items={direccionesGenerales.map((direccion) => ({
            id: direccion.id,
            title: direccion.nombre,
            content: <DireccionGeneralPanel direccion={direccion} />,
          }))}
        />
      </div>
    </ContentSection>
  )
}
