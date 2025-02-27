import { render, screen } from '@testing-library/react-native'

import { Input } from './input'

describe('Component:Input', () => {
  it('should be render without activity indicator if isLoading props is undefined ', () => {
    render(
      <Input>
        <Input.Field />
      </Input>
    )
    const activityIndicator = screen.queryByTestId('activity-indicator')
    expect(activityIndicator).toBeNull()
  })

  it('should be render with activity indicator if isLoading props is true', () => {
    render(
      <Input isLoading>
        <Input.Field />
      </Input>
    )
    const activityIndicator = screen.queryByTestId('activity-indicator')
    expect(activityIndicator).toBeTruthy()
  })
})
