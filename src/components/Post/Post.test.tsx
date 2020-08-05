import React from 'react'
import { render, screen } from '@testing-library/react'
import Post from './Post'

const post = {
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body:
    'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
}

it('renders without crashing', () => {
  render(<Post post={post} />)

  expect(screen.getByRole('heading')).toBeInTheDocument()
})

it('renders the expected heading', () => {
  render(<Post post={post} />)

  expect(screen.getByRole('heading').textContent).toEqual(post.title)
})

it('renders the expected body', () => {
  render(<Post post={post} />)

  expect(screen.getByTestId('body').textContent).toEqual(post.body)
})
