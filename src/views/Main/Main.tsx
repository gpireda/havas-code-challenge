import React, { FC } from 'react'
import { Link, useParams } from 'react-router-dom'
import Post from 'components/Post/Post'
import ListWrapper from 'components/ListWrapper/ListWrapper'
import PostDetails from 'views/PostDetails/PostDetails'
import { presentPosts } from 'helpers'

interface MainProps {
  posts: Array<Post>
}

const Main: FC<MainProps> = ({ posts }) => {
  const { postId } = useParams<RouteParams>()
  const { filteredPosts, post } = presentPosts({ postId, posts })

  return (
    <>
      {post && <PostDetails post={post} />}

      <ListWrapper>
        {filteredPosts.map(post => (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <Post post={post} />
          </Link>
        ))}
      </ListWrapper>
    </>
  )
}

export default Main
