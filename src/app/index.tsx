import { Redirect, router, useRootNavigationState } from 'expo-router'
import { useEffect } from 'react'
import { View } from 'react-native'
import { Loading } from '~/components/loading'
import { useCity } from '~/hooks/use-city'
import Dashboard from './dashboard'
import Search from './search'

export default function Index() {
  const { city } = useCity()
  const { push } = router
  const navigationState = useRootNavigationState()

  if (!city) {
    return <Redirect href={'/search'} />
  }

  return <Dashboard />
}
