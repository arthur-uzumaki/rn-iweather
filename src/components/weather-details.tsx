import { View } from 'react-native'
import drop from '~/assets/drop.svg'
import rain from '~/assets/rain.svg'
import sun from '~/assets/sun.svg'
import thermometer from '~/assets/thermometer.svg'
import wind from '~/assets/wind.svg'
import { WeatherItem } from './weather-item'

export interface WeatherDetailsProps {
  temp_kf: string
  humidity: string
  feels_like: string
  wind_speed: string
  probability: string
}

interface Props {
  data: WeatherDetailsProps
}

export function WeatherDetails({ data }: Props) {
  return (
    <View className="w-full rounded-xl bg-gray_800 px-4">
      <WeatherItem
        icon={thermometer}
        title="Sensação térmica"
        value={data.feels_like}
      />

      <WeatherItem
        icon={rain}
        title="Probabilidade de chuva"
        value={data.probability}
      />

      <WeatherItem
        icon={wind}
        title="Velocidade do vento"
        value={data.wind_speed}
      />

      <WeatherItem icon={drop} title="Umidade do ar" value={data.humidity} />

      <WeatherItem icon={sun} title="Índice UV" value={data.temp_kf} />
    </View>
  )
}
