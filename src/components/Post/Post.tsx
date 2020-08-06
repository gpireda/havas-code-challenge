import React, { FC } from 'react'
import Heading from 'components/Heading/Heading'
import Paragraph from 'components/Paragraph/Paragraph'
import './Post.module.scss'

interface PostProps {
  post: Post
}

const Post: FC<PostProps> = ({ post }) => (
  <article>
    <Heading>{post.title}</Heading>
    <Paragraph dataTestId='body'>{post.body}</Paragraph>
  </article>
)

export default Post
