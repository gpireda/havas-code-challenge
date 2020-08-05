import React, { FC } from 'react'
import { Link } from 'react-router-dom'

interface PostDetailsProps {
  post: Post
}

const PostDetails: FC<PostDetailsProps> = ({ post }) => {
  return (
    <>
      <Link to='/'>Go back</Link>

      <h1>{post.title}</h1>
    </>
  )
}

export default PostDetails
