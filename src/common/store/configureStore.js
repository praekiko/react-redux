import thunkMiddleware from 'redux-thunk'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'

import { rootReducer } from './rootReducer'

const loggerMiddleware = createLogger()
const reduxImmutableStateInvariantMiddleware = reduxImmutableStateInvariant()

const middleware =
  process.env.NODE_ENV === 'production'
    ? [thunkMiddleware]
    : [
        thunkMiddleware,
        loggerMiddleware,
        reduxImmutableStateInvariantMiddleware
      ]

export function configureStore() {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  )
}
