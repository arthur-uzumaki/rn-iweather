import { router } from 'expo-router'
import { type ReactNode, createContext, useEffect, useState } from 'react'
import type { CityProps } from '~/http/get-city-by-name'
import { getStorageCity, saveStorageCity } from '~/storage/city-storage'

interface CityContextProviderProps {
  children: ReactNode
}

interface CityContextDataProps {
  cityIsLoading: boolean
  city: CityProps | null
  onChanceCity: (city: CityProps) => Promise<void>
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
    setCityIsLoading(true)
    getStorageCity()
      .then(data => setCity(data))
      .finally(() => setCityIsLoading(false))
  }, [])

  useEffect(() => {
    if (city) {
      router.navigate('/dashboard')
    }
  }, [city])

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
