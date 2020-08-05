import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import PostDetails from './PostDetails'

const post = {
  userId: 1,
  id: 2,
  title: 'qui est esse',
  body:
    'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
}

beforeEach(() => {
  render(
    <MemoryRouter>
      <PostDetails post={post} />
    </MemoryRouter>,
  )
})

it('renders without crashing', () => {
  expect(screen.getByRole('heading')).toBeInTheDocument()
})

it('renders the expected post heading', () => {
  expect(screen.getByRole('heading').textContent).toEqual(post.title)
})

it('renders go back link', () => {
  expect(screen.getByRole('link').textContent).toEqual('Go back')
})
