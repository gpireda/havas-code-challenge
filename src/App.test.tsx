import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import App from './App'

it('renders without crashing', () => {
  render(<App />)

  waitFor(() => {
    expect(screen.getByTestId('main-wrapper')).toBeTruthy()
  })
})
