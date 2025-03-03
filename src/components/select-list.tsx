import { Text, TouchableOpacity, View } from 'react-native'
import type { CityProps } from '~/http/get-city-by-name'
import { Input } from './input'

interface SelectListProps {
  isLoading?: boolean
  placeholder?: string
  value?: string
  data: CityProps[]
  onChange: (value: string) => void
  onPress: (value: CityProps) => void
}

export function SelectList(props: SelectListProps) {
  return (
    <View className="relative z-10 w-full ">
      <Input testID="search-input" isLoading={props.isLoading}>
        <Input.Field
          placeholder={props.placeholder}
          onChangeText={props.onChange}
          value={props.value}
        />
      </Input>

      <View
        className="absolute top-16 right-0 left-0 overflow-hidden rounded-lg"
        testID="options"
      >
        {props.data.map(item => (
          <TouchableOpacity
            key={item.latitude}
            activeOpacity={0.7}
            onPress={() => props.onPress(item)}
          >
            <Text className="border-b border-b-gray_600 bg-gray_500 px-5 py-4 font-regular text-base text-gray_100 ">
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}
