import createAsyncValueReducer from 'common/reducers'

export default {
  posts: createAsyncValueReducer('POSTS', []),
  post: createAsyncValueReducer('POST', {})
}
