import homeMock from '../data/home.mock.json'

export interface HomeHeroBlock {
  readonly titleKey: string
  readonly subtitleKey: string
}

export interface HomePlanSection {
  readonly headingKey: string
  readonly subheadingKey: string
  readonly bodyKey: string
}

export interface HomePageData {
  readonly hero: HomeHeroBlock
  readonly planSection: HomePlanSection
}

export async function fetchHomePageData(): Promise<HomePageData> {
  return Promise.resolve(homeMock as HomePageData)
}
