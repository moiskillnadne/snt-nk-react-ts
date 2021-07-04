import React from 'react'
import { Router, Route, Switch, useLocation } from 'react-router-dom'

// Components
import Auth from '@/pages/auth/auth'
import ProtectedRoute from '@/components/protectedRoute/protectedRoute'
import Base from '@/pages/base/base.page'
import history from './history'

function App(): JSX.Element {
  return (
    <Router history={history}>
      <Navigation />
    </Router>
  )
}

function Navigation() {
  const location = useLocation()
  return (
    <Switch location={location}>
      <Route exact path="/auth" component={Auth} />

      <ProtectedRoute path="/" component={Base} />
    </Switch>
  )
}

export default App
