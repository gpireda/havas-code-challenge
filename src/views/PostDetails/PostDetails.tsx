import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import Post from 'components/Post/Post'
import { ReactComponent as ChevronLeftIcon } from 'icons/chevron-left.svg'
import styles from './PostDetails.module.scss'

interface PostDetailsProps {
  post: Post
}

const PostDetails: FC<PostDetailsProps> = ({ post }) => {
  return (
    <>
      <Link className={styles['go-back-link']} to='/'>
        <ChevronLeftIcon />
        Voltar
      </Link>

      <Post post={post} />
    </>
  )
}

export default PostDetails
