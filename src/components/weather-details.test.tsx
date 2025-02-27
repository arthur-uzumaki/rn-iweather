import { render, screen } from '@testing-library/react-native'
import { WeatherDetails } from './weather-details'

describe('Component weather details:', () => {
  it('should be rendo show  wind_speed and probability', () => {
    render(
      <WeatherDetails
        data={{
          temp_kf: '298.15',
          humidity: '75',
          feels_like: '300.12',
          wind_speed: '5.4',
          probability: '0.2',
        }}
      />
    )
    const windSpeed = screen.getByText('5.4')
    const probability = screen.getByText('0.2')

    expect(windSpeed).toBeTruthy()
    expect(probability).toBeTruthy()
  })
})
