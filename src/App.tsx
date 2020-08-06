import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Layout from 'components/Layout/Layout'
import usePosts from 'hooks/usePosts'
import Main from 'views/Main/Main'

function App() {
  const { posts } = usePosts()

  if (!posts) {
    return null
  }

  return (
    <Layout>
      <Route path={['/posts/:postId', '/']}>
        <Main posts={posts} />
      </Route>

      <Route render={() => <Redirect to='/' />} />
    </Layout>
  )
}

export default App
