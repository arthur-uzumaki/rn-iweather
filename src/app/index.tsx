import { Redirect } from 'expo-router'
import { useCity } from '~/hooks/use-city'
import Dashboard from './dashboard'

export default function Index() {
  const { city } = useCity()

  if (!city) {
    return <Redirect href={'/search'} />
  }

  return <Dashboard />
}
