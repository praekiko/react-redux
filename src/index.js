import 'bootstrap/dist/css/bootstrap.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import { configureStore } from 'common/store/configureStore'
import RootPage from 'modules/root/pages/RootPage'

import registerServiceWorker from './registerServiceWorker'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <RootPage />
    </Router>
  </Provider>,
  document.getElementById('app')
)

registerServiceWorker()
