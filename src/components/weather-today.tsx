import dayjs from 'dayjs'
import { ImageBackground, Text, View } from 'react-native'
import { isDayTime } from '~/utils/is-day-time'
import type { weatherIcons } from '~/utils/weather-icons'

export interface WeatherTodayProps {
  temp: string
  temp_min: string
  temp_max: string
  description: string
  details: typeof weatherIcons.Clouds
}

interface Props {
  city: string
  weather: WeatherTodayProps
}

export function WeatherToday({ city, weather }: Props) {
  const today = dayjs(new Date()).format('dddd, DD [de] MMM [de] YYYY')
  const isDay = isDayTime()

  const Icon = isDay ? weather.details.icon_day : weather.details.icon_night
  const bgImage = isDay ? weather.details.bg_day : weather.details.bg_night
  return (
    <ImageBackground
      className="justify-between overflow-hidden rounded-lg bg-gray_700 p-5"
      source={bgImage}
      resizeMode="center"
    >
      <View>
        <Text>{city}</Text>

        <Text className="font-regular text-gray_100 text-xs">{today}</Text>
      </View>

      <View className="w-full flex-row">
        <View className="mb-4 flex-1 justify-end">
          <Text className="font-extra_bold text-5xl text-white">
            {weather.temp}
          </Text>

          <Text className="font-bold text-base text-white">
            {weather.temp_min} / {weather.temp_max}
          </Text>

          <Text className="font-regular text-sm text-white capitalize ">
            {weather.description}
          </Text>

          <Icon testID="icon" width={160} height={160} />
        </View>
      </View>
    </ImageBackground>
  )
}
