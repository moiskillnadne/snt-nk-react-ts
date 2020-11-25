import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Main from '@/pages/main/main'

export default function RouteManager(): JSX.Element {
  return (
    <div className="content">
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </div>
  )
}
