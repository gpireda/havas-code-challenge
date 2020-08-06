import React from 'react'
import { MemoryRouter, Route } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import Main from './Main'

const posts = [
  {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body:
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body:
      'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
  },
  {
    userId: 1,
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    body:
      'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
  },
]

it('renders the expected amount of posts', () => {
  render(
    <MemoryRouter>
      <Main posts={posts} />
    </MemoryRouter>,
  )

  expect(screen.getByTestId('posts-list-wrapper').childNodes).toHaveLength(posts.length)
})

it('renders post details section when user has selected one', () => {
  render(
    <MemoryRouter initialEntries={['/posts/3']}>
      <Route path='/posts/:postId'>
        <Main posts={posts} />
      </Route>
    </MemoryRouter>,
  )

  expect(screen.getByTestId('post-details-wrapper')).toBeInTheDocument()
  expect(screen.getByRole('separator')).toBeInTheDocument()
  expect(screen.getByText(/ver mais/i)).toBeInTheDocument()
})
