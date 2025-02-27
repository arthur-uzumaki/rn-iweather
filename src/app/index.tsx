import { router, useRootNavigationState } from 'expo-router'
import { useEffect } from 'react'
import { View } from 'react-native'
import { Loading } from '~/components/loading'
import { useCity } from '~/hooks/use-city'

export default function Index() {
  const { city } = useCity()
  const { push } = router
  const navigationState = useRootNavigationState()

  useEffect(() => {
    if (!navigationState?.key) {
      return
    }
    if (city) {
      push('/dashboard')
    } else {
      push('/search')
    }
  }, [city])

  return (
    <View className="flex-1 bg-gray_900">
      <Loading />
    </View>
  )
}
