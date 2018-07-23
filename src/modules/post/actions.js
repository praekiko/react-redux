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

const fetchPostRequest = () => ({
  type: constanst.FETCH_POST_REQUEST
})

const fetchPostSuccess = post => ({
  type: constanst.FETCH_POST_SUCCESS,
  data: post,
  receivedAt: Date.now()
})

const fetchPostFailure = error => ({
  type: constanst.FETCH_POST_FAILURE,
  error
})

const fetchPost = postId => dispatch => {
  dispatch(fetchPostRequest())

  return BaseApi.getPost(postId)
    .then(post => dispatch(fetchPostSuccess(post)))
    .catch(error => dispatch(fetchPostFailure(error)))
}

export default {
  fetchPosts,
  fetchPost
}
