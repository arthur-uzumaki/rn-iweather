import { api } from '~/lib/api'
import { mockCityAPIResponse } from '../../__tests__/mocks/api/mockCityAPIResponse'
import { getCityByName } from './get-city-by-name'
describe('HTTP: getCityByName:', () => {
  it('should return city details', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockCityAPIResponse })

    const response = await getCityByName('São Paulo')
    expect(response.length).toBeGreaterThan(0)
  })
})
