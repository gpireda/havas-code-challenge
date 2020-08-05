import React, { FC } from 'react'
import Post from 'components/Post/Post'
import './PostsList.module.scss'
import { Link } from 'react-router-dom'

interface PostsListProps {
  posts: Array<Post>
}

const PostsList: FC<PostsListProps> = ({ posts }) => (
  <section data-testid='posts-list-wrapper'>
    {posts.map(post => (
      <Link key={post.id} to={`/posts/${post.id}`}>
        <Post post={post} />
      </Link>
    ))}
  </section>
)

export default PostsList
