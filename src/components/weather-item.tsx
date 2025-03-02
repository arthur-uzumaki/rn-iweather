import clsx from 'clsx'
import { Text, View } from 'react-native'
import type { SvgProps } from 'react-native-svg'

interface WeatherItemProps {
  icon: React.FC<SvgProps>
  title: string
  value: string
  isLast?: boolean
}

export function WeatherItem({
  icon: Icon,
  title,
  value,
  isLast = false,
}: WeatherItemProps) {
  return (
    <View
      className={clsx('w-full flex-row items-center py-5', {
        'border-b border-b-gray_700': !isLast,
      })}
    >
      <Icon width={24} height={24} />

      <Text className="ml-3 flex-1 font-bold text-gray_200 text-sm ">
        {title}
      </Text>

      <Text className="font-bold text-base text-gray_100"> {value}</Text>
    </View>
  )
}
