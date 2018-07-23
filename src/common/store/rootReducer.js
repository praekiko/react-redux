import { combineReducers } from 'redux'

import post from 'modules/post/reducers'

export const rootReducer = combineReducers({ ...post })
