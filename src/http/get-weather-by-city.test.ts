import { api } from '~/lib/api'
import { mockWeatherAPIResponse } from '../../__tests__/mocks/api/mockWeatherAPIResponse'
import { getWeatherByCity } from './get-weather-by-city'

describe('HTTP: getWeatherByCity', () => {
  it('should be return weather api data formatted', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockWeatherAPIResponse })
    const response = await getWeatherByCity({ latitude: 123, longitude: 456 })

    expect(response).toHaveProperty('today')
  })
})
