import homeMock from '../data/home.mock.json'

export interface HomeHeroBlock {
  readonly titleKey: string
  readonly subtitleKey: string
}

export interface HomeInstitutionalPreview {
  readonly eyebrowKey: string
  readonly titleKey: string
  readonly bodyKey: string
}

export interface HomeFeatureItem {
  readonly id: 'docs' | 'geo'
  readonly titleKey: string
  readonly descriptionKey: string
}

export interface HomeFeaturesBlock {
  readonly eyebrowKey: string
  readonly titleKey: string
  readonly items: readonly HomeFeatureItem[]
}

export interface HomeDocumentItem {
  readonly href: string
  readonly icon: 'plan' | 'catastro'
  readonly titleKey: string
  readonly descriptionKey: string
  readonly ctaKey: string
  readonly badgeKey: string
  readonly accent: 'orange' | 'green'
}

export interface HomeDocumentsBlock {
  readonly eyebrowKey: string
  readonly titleKey: string
  readonly subtitleKey: string
  readonly items: readonly HomeDocumentItem[]
}

export interface HomeContactPreview {
  readonly titleKey: string
  readonly descriptionKey: string
  readonly ctaKey: string
  readonly contactListLabelKey: string
  readonly emailHref: string
  readonly emailLabelKey: string
}

export interface HomeExternalPortalItem {
  readonly href: string
  readonly image: string
  readonly titleKey: string
  readonly descriptionKey: string
  readonly ctaKey: string
  readonly accent: 'orange' | 'green'
}

export interface HomeExternalPortalsBlock {
  readonly eyebrowKey: string
  readonly titleKey: string
  readonly subtitleKey: string
  readonly items: readonly HomeExternalPortalItem[]
}

export interface HomeTextBlock {
  readonly titleKey: string
  readonly descriptionKey: string
}

export interface HomeSpecificObjectiveItem {
  readonly number: string
  readonly textKey: string
}

export interface HomeMissionObjectivesBlock {
  readonly titleKey: string
  readonly mission: HomeTextBlock
  readonly generalObjective: HomeTextBlock
  readonly specificObjectives: {
    readonly titleKey: string
    readonly items: readonly HomeSpecificObjectiveItem[]
  }
}

export interface HomePolicyAxis {
  readonly id: string
  readonly titleKey: string
  readonly descriptionKey: string
}

export interface HomePublicPoliciesBlock {
  readonly titleKey: string
  readonly introKey: string
  readonly bodyKey: string
  readonly axes: readonly HomePolicyAxis[]
}

export interface HomePageData {
  readonly hero: HomeHeroBlock
  readonly institutionalPreview: HomeInstitutionalPreview
  readonly missionObjectives: HomeMissionObjectivesBlock
  readonly publicPolicies: HomePublicPoliciesBlock
  readonly features: HomeFeaturesBlock
  readonly documents: HomeDocumentsBlock
  readonly externalPortals: HomeExternalPortalsBlock
  readonly contactPreview: HomeContactPreview
}

export async function fetchHomePageData(): Promise<HomePageData> {
  return Promise.resolve(homeMock as HomePageData)
}
