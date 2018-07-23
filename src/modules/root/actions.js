import BaseApi from 'common/lib/BaseApi'

import constanst from './constants'

const fetchPostsRequest = () => ({
  type: constanst.FETCH_POSTS_REQUEST
})

const fetchPostsSuccess = posts => ({
  type: constanst.FETCH_POSTS_SUCCESS,
  data: posts,
  receivedAt: Date.now()
})

const fetchPostsFailure = error => ({
  type: constanst.FETCH_POSTS_FAILURE,
  error
})

const fetchPosts = () => dispatch => {
  dispatch(fetchPostsRequest())

  return BaseApi.getPosts()
    .then(posts => dispatch(fetchPostsSuccess(posts)))
    .catch(error => dispatch(fetchPostsFailure(error)))
}

export default {
  fetchPosts
}
