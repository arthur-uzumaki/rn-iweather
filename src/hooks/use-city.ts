import { useContext } from 'react'
import { CityContext } from '~/contexts/city-context'

export function useCity() {
  const context = useContext(CityContext)
  return context
}
