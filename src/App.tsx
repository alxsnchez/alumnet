import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { Home } from './routes/Home'
import { NotFound } from './routes/NotFound'

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route exact={true} path="/">
        <Home />
      </Route>
      <Route path="/404">
        <NotFound />
      </Route>
      <Redirect to="/404" />
    </Switch>
  </Router>
)

export default App
