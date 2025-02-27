import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { Loading } from '~/components/loading'
import { SelectList } from '~/components/select-list'
import { WeatherToday } from '~/components/weather-today'
import { useCity } from '~/hooks/use-city'
import { type CityProps, getCityByName } from '~/http/get-city-by-name'
import { weatherIcons } from '~/utils/weather-icons'

export default function Index() {
  const [cities, setCities] = useState<CityProps[]>([])
  const [search, setSearch] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [isweatherIsLoading, setWeatherIsLoading] = useState(true)

  const { onChanceCity, city, cityIsLoading } = useCity()

  function handleSelect(value: CityProps) {
    onChanceCity(value)
    setSearch('')
    setCities([])
  }

  // async function getWeatherDetails() {
  //   if (!city) {
  //     return
  //   }

  //   setWeatherIsLoading(true)

  //   const { latitude, longitude } = city
  // }

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

  // useEffect(() => {
  //   getWeatherDetails()
  // }, [city])

  // if (!city || cityIsLoading || isweatherIsLoading) {
  //   return <Loading />
  // }
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

      {/* <WeatherToday
        city={city.name}
        weather={{
          description: '',
          details: weatherIcons.Clouds,
          temp: '',
          temp_max: '',
          temp_min: '',
        }}
      /> */}
    </View>
  )
}
