import {
  ActivityIndicator,
  Platform,
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
    <View className="h-14 w-full flex-row rounded-lg bg-gray_600 px-5 font-regular text-base ">
      {children}

      {isLoading && (
        <ActivityIndicator
          className="text-blue_light"
          testID="activity-indicator"
        />
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
      cursorColor={theme.colors.blue_light}
      selectionColor={
        Platform.OS === 'ios' ? theme.colors.blue_light : undefined
      }
    />
  )
}

Input.Field = Field

export { Input }
