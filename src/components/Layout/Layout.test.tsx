import React from 'react'
import { render, screen } from '@testing-library/react'
import Layout from './Layout'

it('renders its children', () => {
  render(
    <Layout>
      <div data-testid='layout-children'>Lorem Ipsum</div>
    </Layout>,
  )

  expect(screen.getByTestId('layout-children')).toBeInTheDocument()
})
