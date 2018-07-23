import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PostsPage from 'modules/post/pages/PostsPage'
import PostPage from 'modules/post/pages/PostPage'

const Router = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={() => {
        return <h1>Home</h1>
      }}
    />
    <Route path="/posts/:id" component={PostPage} />
    <Route path="/posts" component={PostsPage} />

    <Route
      render={() => {
        return <h1>Nomatch</h1>
      }}
    />
  </Switch>
)

export default Router
