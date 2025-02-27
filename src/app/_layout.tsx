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

import * as SplashScreen from 'expo-splash-screen'
import { CityProvider } from '~/contexts/city-context'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [fontLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  })

  if (fontLoaded) {
    SplashScreen.hideAsync()
  } else {
    return
  }

  return (
    <CityProvider>
      <Slot />
      <StatusBar
        style="light"
        backgroundColor="transparent"
        translucent
        animated
      />
    </CityProvider>
  )
}
