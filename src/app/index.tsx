import { router } from 'expo-router'
import { useEffect, useState } from 'react'
import {
  ImageBackground,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native'

import bg from '~/assets/background.png'
import Logo from '~/assets/logo.svg'
import { SelectList } from '~/components/select-list'
import { useCity } from '~/hooks/use-city'
import { type CityProps, getCityByName } from '~/http/get-city-by-name'

export default function Search() {
  const [cities, setCities] = useState<CityProps[]>([])
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { onChanceCity, city } = useCity()
  console.log('index', city)
  const dimensions = useWindowDimensions()

  async function handleChanceCity(selectedCity: CityProps) {
    await onChanceCity(selectedCity)
    router.navigate('/dashboard')
  }

  async function getCities(city: string) {
    setIsLoading(true)

    const response = await getCityByName(city)
    setCities(response)
    setIsLoading(false)
  }

  useEffect(() => {
    if (search.trim().length === 0) {
      return
    }

    const debounce = setTimeout(() => getCities(search), 500)
    return () => clearInterval(debounce)
  }, [search])

  return (
    <ScrollView className="flex-1 bg-gray_900">
      <ImageBackground
        source={bg}
        defaultSource={bg}
        resizeMode="cover"
        className="items-center p-6 pt-12"
        style={{ width: dimensions.width, height: dimensions.height }}
      >
        <Logo width={186} height={32} />
        <View className="w-full flex-1 justify-center pb-14">
          <Text className="text-center font-bold text-white text-xl">
            Previsão do tempo com{' '}
            <Text className="text-blue_light">IWeather</Text>
          </Text>

          <Text className="mt-1 mb-8 text-center font-regular text-gray_200 text-sm ">
            Escolha um local pra ver a previsão do tempo
          </Text>

          <SelectList
            data={cities}
            onChange={setSearch}
            onPress={handleChanceCity}
            placeholder="Buscar o local"
            isLoading={isLoading}
          />
        </View>
      </ImageBackground>
    </ScrollView>
  )
}
