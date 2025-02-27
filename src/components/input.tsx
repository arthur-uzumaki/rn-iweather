import {
  ActivityIndicator,
  TextInput,
  type TextInputProps,
  View,
  type ViewProps,
} from 'react-native'
import { theme } from '~/theme'

interface InputProps extends ViewProps {
  isLoading?: boolean
}

function Input({ children, isLoading = false }: InputProps) {
  return (
    <View className="h-14 w-full flex-row rounded-lg bg-gray_600 px-5 font-regular text-base">
      {isLoading ? (
        <ActivityIndicator
          className="text-blue_light"
          testID="activity-indicator"
        />
      ) : (
        children
      )}
    </View>
  )
}

function Field({ ...rest }: TextInputProps) {
  return (
    <TextInput
      className="flex-1 text-white"
      placeholderTextColor={theme.colors.gray_400}
      {...rest}
    />
  )
}

Input.Field = Field

export { Input }
