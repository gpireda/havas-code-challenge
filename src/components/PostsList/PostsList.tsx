import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import Post from 'components/Post/Post'

interface PostsList {
  posts: Array<Post>
}

const PostsList: FC<PostsList> = ({ posts }) => (
  <>
    {posts.map(post => (
      <Link key={post.id} to={`/posts/${post.id}`}>
        <Post post={post} />
      </Link>
    ))}
  </>
)

export default PostsList
