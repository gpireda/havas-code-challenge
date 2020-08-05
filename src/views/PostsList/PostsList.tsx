import React, { FC } from 'react'
import Post from 'components/Post/Post'
import './PostsList.module.scss'

interface PostsListProps {
  posts: Array<Post>
}

const PostsList: FC<PostsListProps> = ({ posts }) => (
  <section data-testid='posts-list-wrapper'>
    {posts.map(post => (
      <Post key={post.id} post={post} />
    ))}
  </section>
)

export default PostsList
