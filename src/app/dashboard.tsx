import { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Loading } from '~/components/loading'
import { NextDays } from '~/components/next-day'
import { SelectList } from '~/components/select-list'
import { WeatherDetails } from '~/components/weather-details'
import { WeatherToday } from '~/components/weather-today'
import { useCity } from '~/hooks/use-city'
import { type CityProps, getCityByName } from '~/http/get-city-by-name'
import {
  type WeatherResponseProps,
  getWeatherByCity,
} from '~/http/get-weather-by-city'

export default function Dashboard() {
  const [cities, setCities] = useState<CityProps[]>([])
  const [weather, setWeather] = useState<WeatherResponseProps>(
    {} as WeatherResponseProps
  )
  const [search, setSearch] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [isWeatherIsLoading, setWeatherIsLoading] = useState(true)

  const { onChanceCity, city, cityIsLoading } = useCity()

  function handleSelect(value: CityProps) {
    onChanceCity(value)
    setSearch('')
    setCities([])
  }

  async function getWeatherDetails() {
    if (!city) {
      return
    }

    setWeatherIsLoading(true)

    const { latitude, longitude } = city
    const response = await getWeatherByCity({ latitude, longitude })
    setWeather(response)
    setWeatherIsLoading(false)
  }

  async function getCities(city: string) {
    setIsSearching(true)

    const response = await getCityByName(city)
    console.log(response)

    setCities(response)
    setIsSearching(false)
  }

  useEffect(() => {
    if (search.trim().length === 0) {
      return
    }

    getCities(search)

    const debounce = setTimeout(() => getCities(search), 500)
    return () => clearInterval(debounce)
  }, [search])

  useEffect(() => {
    getWeatherDetails()
  }, [city])

  if (!city || cityIsLoading || isWeatherIsLoading) {
    return <Loading />
  }

  return (
    <View className="flex-1 gap-8 bg-gray_900 p-5 py-16 pb-0">
      <SelectList
        data={cities}
        placeholder="Buscar local"
        value={search}
        onChange={setSearch}
        onPress={handleSelect}
        isLoading={isSearching}
      />

      <WeatherToday city={city.name} weather={weather.today.weather} />

      <ScrollView className="gap-2 pb-8" showsHorizontalScrollIndicator={false}>
        <WeatherDetails data={weather.today.details} />
        <NextDays data={weather.nextDays} />
      </ScrollView>
    </View>
  )
}
