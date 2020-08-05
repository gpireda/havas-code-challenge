import React from 'react'
import Layout from 'components/Layout/Layout'
import usePosts from 'hooks/usePosts'
import PostsList from 'views/PostsList/PostsList'

function App() {
  const { posts } = usePosts()

  if (!posts) {
    return null
  }

  return (
    <Layout>
      <PostsList posts={posts} />
    </Layout>
  )
}

export default App
