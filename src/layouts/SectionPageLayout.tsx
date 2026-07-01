import { useTranslation } from 'react-i18next'
import type { ReactNode } from 'react'
import type { SectionPageConfig } from '../navigation/sectionNav'
import { SectionLayout } from './SectionLayout'

export interface SectionPageLayoutProps {
  readonly config: SectionPageConfig
  readonly children: ReactNode
}

export function SectionPageLayout({ config, children }: SectionPageLayoutProps) {
  const { t } = useTranslation()

  return (
    <>
      <SectionLayout
        title={t(config.titleKey)}
      >
        {null}
      </SectionLayout>
      {children}
    </>
  )
}
