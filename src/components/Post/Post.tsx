import React, { FC } from 'react'
import './Post.module.scss'

interface PostProps {
  post: Post
}

const Post: FC<PostProps> = ({ post }) => (
  <article>
    <h1>{post.title}</h1>
    <p data-testid='body'>{post.body}</p>
  </article>
)

export default Post
