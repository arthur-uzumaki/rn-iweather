import { render, screen } from '@testing-library/react-native'
import { Loading } from './loading'

describe('Component: loading', () => {
  it('should be render activity', () => {
    render(<Loading />)
    const activity = screen.getByTestId('loading')

    expect(activity).toBeTruthy()
  })
})
