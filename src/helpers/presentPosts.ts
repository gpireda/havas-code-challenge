const seeMoreAmount = 4

const presentPosts = ({ postId, posts }: { posts: Array<Post>; postId?: string }) => {
  if (!postId) {
    return { filteredPosts: posts }
  }

  return {
    post: posts.find(({ id }) => id === +postId),
    filteredPosts: posts.filter(({ id }) => id !== +postId).slice(0, seeMoreAmount),
  }
}

export default presentPosts
