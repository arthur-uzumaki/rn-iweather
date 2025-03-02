import '~/styles/global.css'
import '~/lib/dayjs'

import {
  Nunito_400Regular,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  useFonts,
} from '@expo-google-fonts/nunito'

import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Loading } from '~/components/loading'
import { CityProvider } from '~/contexts/city-context'

export default function RootLayout() {
  const [fontLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  })

  if (!fontLoaded) {
    return (
      <>
        <Loading />
        <StatusBar style="light" backgroundColor="transparent" translucent />
      </>
    )
  }

  return (
    <>
      <CityProvider>
        <Slot />
      </CityProvider>
      <StatusBar style="light" backgroundColor="transparent" translucent />
    </>
  )
}
