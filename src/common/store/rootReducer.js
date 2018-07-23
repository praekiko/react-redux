import { combineReducers } from 'redux'

import root from 'modules/root/reducers'

export const rootReducer = combineReducers({ ...root })
