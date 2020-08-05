import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Layout from 'components/Layout/Layout'
import usePosts from 'hooks/usePosts'
import PostsList from 'views/PostsList/PostsList'
import PostDetails from 'views/PostDetails/PostDetails'

function App() {
  const { posts } = usePosts()

  if (!posts) {
    return null
  }

  return (
    <Router>
      <Layout>
        <Switch>
          <Route
            path='/posts/:id'
            render={({ match }) => {
              const post = posts.find(({ id }) => id === +match.params.id)

              if (!post) {
                return <Redirect to='/' />
              }

              return <PostDetails post={post} />
            }}
          />

          <Route path={['/', '/posts']}>
            <PostsList posts={posts} />
          </Route>
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
