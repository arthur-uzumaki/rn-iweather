import { type ReactNode, createContext, useEffect, useState } from 'react'
import type { CityProps } from '~/http/get-city-by-name'
import { getStorageCity, saveStorageCity } from '~/storage/city-storage'

interface CityContextProviderProps {
  children: ReactNode
}

interface CityContextDataProps {
  cityIsLoading: boolean
  city: CityProps | null
  onChanceCity: (city: CityProps) => void
}

export const CityContext = createContext<CityContextDataProps>(
  {} as CityContextDataProps
)

export function CityProvider({ children }: CityContextProviderProps) {
  const [cityIsLoading, setCityIsLoading] = useState(true)
  const [city, setCity] = useState<CityProps | null>(null)

  async function onChanceCity(selectedCity: CityProps) {
    setCityIsLoading(true)
    await saveStorageCity(selectedCity)
    setCity(selectedCity)
    setCityIsLoading(false)
  }

  useEffect(() => {
    getStorageCity()
      .then(data => setCity(data))
      .finally(() => setCityIsLoading(false))
  }, [])

  return (
    <CityContext.Provider
      value={{
        city,
        cityIsLoading,
        onChanceCity,
      }}
    >
      {children}
    </CityContext.Provider>
  )
}
