import { render, screen } from '@testing-library/react-native'
import clearDay from '~/assets/clear_day.svg'
import { Day } from './day'

describe('Component: Day', () => {
  it('should be render day', () => {
    render(
      <Day
        data={{
          day: '25/02',
          min: '30°c',
          max: '34°c',
          weather: 'Céu limpo',
          icon: clearDay,
        }}
      />
    )
    expect(screen.getByText('25/02')).toBeTruthy()
  })
})
