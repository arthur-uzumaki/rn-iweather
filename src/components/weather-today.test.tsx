import { render, screen } from '@testing-library/react-native'
import { weatherIcons } from '~/utils/weather-icons'
import { WeatherToday } from './weather-today'

describe('Component weather today:', () => {
  it('should be render show description and details', () => {
    render(
      <WeatherToday
        city="Palmas"
        weather={{
          temp: '30°C',
          temp_min: '25°C',
          temp_max: '35°C',
          description: 'Ensolarado com poucas nuvens',
          details: weatherIcons.Clouds,
        }}
      />
    )

    const description = screen.getByText('Ensolarado com poucas nuvens')
    const details = screen.getByTestId('icon')
    expect(description).toBeTruthy()
    expect(details).toBeTruthy()
  })
})
