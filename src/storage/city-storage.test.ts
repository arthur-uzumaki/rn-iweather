import type { CityProps } from '~/http/get-city-by-name'
import { getStorage, removeStorage, saveStorage } from './city-storage'

const newCity: CityProps = {
  id: '1',
  name: 'São Paulo',
  latitude: 123,
  longitude: 456,
}

describe('Storage: CityStorage', () => {
  it('should be return null when dont have a city storage ', async () => {
    const response = await getStorage()

    expect(response).toBeNull()
  })

  it('should be return city storage', async () => {
    await saveStorage(newCity)

    const response = await getStorage()

    expect(response).toEqual(newCity)
  })

  it('should be remover city storage', async () => {
    await saveStorage(newCity)
    await removeStorage()

    const response = await getStorage()

    expect(response).toBeNull()
  })
})
