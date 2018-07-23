import constants from './constants'

const posts = (
  state = {
    isFetching: false,
    didInvalidate: false,
    data: []
  },
  action
) => {
  switch (action.type) {
    case constants.FETCH_POSTS_FAILURE:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case constants.FETCH_POSTS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case constants.FETCH_POSTS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        data: action.data,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

const post = (
  state = {
    isFetching: false,
    didInvalidate: false,
    data: []
  },
  action
) => {
  switch (action.type) {
    case constants.FETCH_POST_FAILURE:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case constants.FETCH_POST_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case constants.FETCH_POST_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        data: action.data,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export default {
  posts,
  post
}
