import createAsyncValueAction from 'common/actions'

const posts = createAsyncValueAction('POSTS')
const post = createAsyncValueAction('POST')

export default {
  fetchPosts: () => posts.fetch('getPosts', 'posts')(),
  fetchPost: id => post.fetch('getPost', 'post')(id)
}
