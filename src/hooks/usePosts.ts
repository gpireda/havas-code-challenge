import { useEffect, useState } from 'react'
import { client } from 'utils/client'

const usePosts = () => {
  const [posts, setPosts] = useState<Array<Post>>()

  useEffect(() => {
    client('/posts').then(setPosts)
  }, [])

  return { posts }
}

export default usePosts
