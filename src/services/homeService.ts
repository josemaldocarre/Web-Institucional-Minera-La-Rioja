import homeMock from '../data/home.mock.json'

export interface HomePageData {
  readonly titleKey: string
}

export async function fetchHomePageData(): Promise<HomePageData> {
  return Promise.resolve(homeMock as HomePageData)
}
