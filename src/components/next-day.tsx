import { View } from 'react-native'
import { Day, type DayProps } from './day'

interface NextDayProps {
  data: DayProps[]
}

export function NextDay({ data }: NextDayProps) {
  return (
    <View className="w-full flex-row items-center justify-between rounded-xl bg-gray-800 p-3">
      {data.map(day => (
        <Day key={day.day} data={day} />
      ))}
    </View>
  )
}
