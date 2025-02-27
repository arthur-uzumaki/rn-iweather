import { theme } from './src/theme/index'

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    colors: {
      white: '#FFFFFF',
      blue_light: '#8FB2F5',

      gray_900: '#13131A',
      gray_800: '#16161F',
      gray_700: '#1C1C27',
      gray_600: '#22222F',
      gray_500: '#3B3B54',
      gray_400: '#7F7F98',
      gray_300: '#ABABC4',
      gray_200: '#BFBFD4',
      gray_100: '#FAFAFA',
    },
    fontFamily: {
      regular: 'Nunito_400Regular',
      bold: 'Nunito_700Bold',
      extra_bold: 'Nunito_800ExtraBold',
    },
  },
  plugins: [],
}
