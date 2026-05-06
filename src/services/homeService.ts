import homeMock from '../data/home.mock.json'

export interface HomeHeroBlock {
  readonly leadKey: string
  readonly imageSrc: string
  readonly imageAltKey: string
}

export interface HomePlanSection {
  readonly headingKey: string
  readonly subheadingKey: string
  readonly bodyKey: string
}

export interface HomePageData {
  readonly titleKey: string
  readonly hero: HomeHeroBlock
  readonly planSection: HomePlanSection
}

export async function fetchHomePageData(): Promise<HomePageData> {
  return Promise.resolve(homeMock as HomePageData)
}
