import type React from 'react'
import { Text, View } from 'react-native'
import type { SvgProps } from 'react-native-svg'

export interface DayProps {
  day: string
  weather: string
  max: string
  min: string
  icon: React.FC<SvgProps>
}

interface Props {
  data: DayProps
}

export function Day({ data }: Props) {
  const { icon: Icon } = data
  return (
    <View className="items-center">
      <Text className="font-bold text-gray-200 text-sm">{data.day}</Text>

      <Icon width={56} height={56} />

      <Text className="font-bold text-gray-100 text-sm">{data.max}</Text>
      <Text className="font-bold text-gray-400 text-sm">{data.min}</Text>
    </View>
  )
}
