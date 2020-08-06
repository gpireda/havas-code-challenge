import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import ListWrapper from 'components/ListWrapper/ListWrapper'
import PostDetails from 'views/PostDetails/PostDetails'
import PostsList from 'components/PostsList/PostsList'
import { presentPosts } from 'helpers'

interface MainProps {
  posts: Array<Post>
}

const Main: FC<MainProps> = ({ posts }) => {
  const { postId } = useParams<RouteParams>()
  const { filteredPosts, post } = presentPosts({ postId, posts })

  return (
    <>
      {post && (
        <>
          <PostDetails post={post} />
          <hr />
          <h1>Ver mais</h1>
        </>
      )}

      <ListWrapper>
        <PostsList posts={filteredPosts} />
      </ListWrapper>
    </>
  )
}

export default Main
