import homeMock from '../data/home.mock.json'

export interface HomeHeroBlock {
  readonly titleKey: string
  readonly subtitleKey: string
}

export interface HomePageData {
  readonly hero: HomeHeroBlock
}

export async function fetchHomePageData(): Promise<HomePageData> {
  return Promise.resolve(homeMock as HomePageData)
}
