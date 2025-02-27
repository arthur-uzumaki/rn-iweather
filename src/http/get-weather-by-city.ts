import dayjs from 'dayjs'
import type { DayProps } from '~/components/day'
import type { WeatherDetailsProps } from '~/components/weather-details'
import type { WeatherTodayProps } from '~/components/weather-today'
import { api } from '~/lib/api'
import { getNextDays } from '~/utils/get-next-days'
import { type WeatherIconsKeysProps, weatherIcons } from '~/utils/weather-icons'

export interface WeatherAPIResponseProps {
  list: {
    pop: number
    dt_txt: string
    main: {
      temp: number
      temp_min: number
      temp_max: number
      feels_like: number
      humidity: number
      temp_kf: number
    }
    wind: {
      speed: number
    }
    weather: {
      description: string
      main: WeatherIconsKeysProps
    }[]
  }[]
}

interface SearchCityWeatherProps {
  latitude: number
  longitude: number
}

export interface WeatherResponseProps {
  today: {
    weather: WeatherTodayProps
    details: WeatherDetailsProps
  }
  nextDays: DayProps[]
}

export async function getWeatherByCity({
  latitude,
  longitude,
}: SearchCityWeatherProps): Promise<WeatherResponseProps> {
  const { data } = await api.get<WeatherAPIResponseProps>(
    `/forecast?lat=${latitude}&lon=${longitude}`
  )

  const { main, weather, wind, pop } = data.list[0]

  const today = {
    weather: {
      temp: `${Math.ceil(main.temp)}°c`,
      temp_min: `${Math.floor(main.temp_min)}°c`,
      temp_max: `${Math.ceil(main.temp_max)}°c`,
      description: weather[0].description,
      details: weatherIcons[weather[0].main],
    },

    details: {
      feels_like: `${Math.floor(main.feels_like)}°c`,
      probability: `${pop * 100}%`,
      wind_speed: `${wind.speed}km/h`,
      humidity: `${main.humidity}%`,
      temp_kf: `${Math.floor(main.temp_kf)}`,
    },
  }

  const days = getNextDays()
  const daysAdded: string[] = []
  const nextDays: DayProps[] = []

  // biome-ignore lint/complexity/noForEach: <explanation>
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  data.list.forEach((item: any) => {
    const day = dayjs(new Date(item.dt_txt)).format('DD/MM')

    if (days.includes(day) && !daysAdded.includes(day)) {
      daysAdded.push(day)
    }

    const status: WeatherIconsKeysProps = item.weather[0].main

    const details = weatherIcons[status]

    nextDays.push({
      day: dayjs(new Date(item.dt_txt)).format('ddd'),
      min: `${Math.floor(item.main.tem_min)}°c`,
      max: `${Math.ceil(item.main.tem_max)}°c`,
      weather: item.weather[0].description,
      icon: details.icon_day,
    })
  })

  return { today, nextDays }
}
