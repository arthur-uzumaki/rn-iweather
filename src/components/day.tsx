import type React from 'react'
import { Text, View } from 'react-native'
import type { SvgProps } from 'react-native-svg'

export interface DayProps {
  icon: React.FC<SvgProps>
  day: string
  weather: string
  max: string
  min: string
}

interface Props {
  data: DayProps
}

export function Day({ data }: Props) {
  const { icon: Icon } = data
  return (
    <View className="items-center">
      <Text className="font-bold text-gray_200 text-sm">{data.day}</Text>

      <Icon width={56} height={56} />

      <Text className="font-bold text-gray_100 text-sm">{data.max}</Text>
      <Text className="font-bold text-gray_400 text-sm">{data.min}</Text>
    </View>
  )
}
