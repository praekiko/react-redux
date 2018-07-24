import React from 'react'
import { Switch, Route } from 'react-router-dom'

import postRoutes from 'modules/post/routes'

const combinedRoutes = [...postRoutes]

const Router = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={() => {
        return <h1>Home</h1>
      }}
    />

    {combinedRoutes.map(({ path, component }) => (
      <Route key={path} path={path} component={component} />
    ))}

    <Route
      render={() => {
        return <h1>Nomatch</h1>
      }}
    />
  </Switch>
)

export default Router
