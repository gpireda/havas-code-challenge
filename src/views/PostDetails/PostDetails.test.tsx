import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import PostDetails from './PostDetails'

it('renders without crashing', () => {
  render(
    <MemoryRouter>
      <PostDetails />
    </MemoryRouter>,
  )

  expect(screen.getByRole('heading')).toBeInTheDocument()
})
