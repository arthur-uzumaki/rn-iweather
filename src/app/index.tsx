import { router } from 'expo-router'
import { View } from 'react-native'
import { useCity } from '~/hooks/use-city'
import Dashboard from './dashboard'

export default function Index() {
  const { city } = useCity()
  return (
    <View className="flex-1 bg-gray_900 pt-16 ">
      {city ? <Dashboard /> : undefined}
    </View>
  )
}
