import { useState, type JSX } from 'react'
import { Container } from '../../components/ui/Container/Container'
import { PageHero } from '../../components/ui/PageHero/PageHero'
import { Section } from '../../components/ui/Section/Section'
import {
  informacionPublicaService,
  type InformacionPublicaCategory,
} from '../../services/informacionPublicaService'
import styles from './InformacionPublica.module.scss'

type CategoryId = InformacionPublicaCategory['id']

const { page, categories } = informacionPublicaService

const INITIAL_CATEGORY: CategoryId = 'normativas'

function IconNormativas({ size = 24 }: { readonly size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2 5 5h-5V4zM8 18v-2h8v2H8zm0-4v-2h8v2H8zm2-4V4h2v6H10z"
      />
    </svg>
  )
}

function IconTransparencia({ size = 24 }: { readonly size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M3.5 18.49 9 12.99l3.5 3.5 7.5-7.5-1.41-1.41L12.5 14.07 9 10.57l-7 7 1.5.92zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"
      />
    </svg>
  )
}

function IconPlanQuinquenal({ size = 24 }: { readonly size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z"
      />
    </svg>
  )
}

function IconExternalLink() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
      />
    </svg>
  )
}

function IconChevron() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"
      />
    </svg>
  )
}

const CATEGORY_ICONS: Record<CategoryId, (props: { size?: number }) => JSX.Element> = {
  normativas: IconNormativas,
  transparencia: IconTransparencia,
  planQuinquenal: IconPlanQuinquenal,
}

function getCategoryById(id: CategoryId): InformacionPublicaCategory {
  const category = categories.find((item) => item.id === id)
  if (!category) {
    return categories[0]
  }
  return category
}

export default function InformacionPublica() {
  const [activeCategoryId, setActiveCategoryId] =
    useState<CategoryId>(INITIAL_CATEGORY)

  const activeCategory = getCategoryById(activeCategoryId)
  const ActiveIcon = CATEGORY_ICONS[activeCategory.id]

  return (
    <>
      <PageHero {...page} />

      <Section
        className={styles.section}
        aria-label="Centro de consulta de información pública"
      >
        <Container>
          <div className={styles.layout}>
            <aside className={styles.sidebar} aria-label="Categorías">
              <p className={styles.sidebarLabel}>Categorías</p>
              <ul className={styles.categoryList}>
                {categories.map((category) => {
                  const isActive = category.id === activeCategoryId
                  const Icon = CATEGORY_ICONS[category.id]

                  return (
                    <li key={category.id}>
                      <button
                        type="button"
                        className={[
                          styles.categoryCard,
                          isActive ? styles.categoryCardActive : '',
                        ]
                          .filter(Boolean)
                          .join(' ')}
                        aria-pressed={isActive}
                        onClick={() => setActiveCategoryId(category.id)}
                      >
                        <span className={styles.categoryIcon} aria-hidden>
                          <Icon size={22} />
                        </span>
                        <span className={styles.categoryTitle}>
                          {category.title}
                        </span>
                        {isActive ? (
                          <span className={styles.categoryChevron} aria-hidden>
                            <IconChevron />
                          </span>
                        ) : null}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </aside>

            <div className={styles.panel} aria-live="polite">
              <header className={styles.panelHeader}>
                <span className={styles.panelIcon} aria-hidden>
                  <ActiveIcon size={32} />
                </span>
                <div className={styles.panelHeading}>
                  <h2 className={styles.panelTitle}>{activeCategory.title}</h2>
                  <p className={styles.panelIntro}>{activeCategory.intro}</p>
                </div>
              </header>

              <div className={styles.divider} />

              <ul
                className={[
                  styles.resourceGrid,
                  activeCategory.resources.length === 1
                    ? styles.resourceGridSingle
                    : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {activeCategory.resources.map((resource) => (
                  <li key={resource.id}>
                    <a
                      className={styles.resourceCard}
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className={styles.resourceTitle}>
                        {resource.title}
                      </span>
                      <span className={styles.resourceAction} aria-hidden>
                        <IconExternalLink />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
