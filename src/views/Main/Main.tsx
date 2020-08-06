import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import Heading from 'components/Heading/Heading'
import ListWrapper from 'components/ListWrapper/ListWrapper'
import PostDetails from 'views/PostDetails/PostDetails'
import PostsList from 'components/PostsList/PostsList'
import { presentPosts } from 'helpers'
import styles from './Main.module.scss'

interface MainProps {
  posts: Array<Post>
}

const Main: FC<MainProps> = ({ posts }) => {
  const { postId } = useParams<RouteParams>()
  const { filteredPosts, post } = presentPosts({ postId, posts })

  return (
    <>
      {post && (
        <div className={styles['post-details-wrapper']} data-testid='post-details-wrapper'>
          <PostDetails post={post} />
          <hr />
          <Heading>Ver mais</Heading>
        </div>
      )}

      <ListWrapper>
        <PostsList posts={filteredPosts} />
      </ListWrapper>
    </>
  )
}

export default Main
