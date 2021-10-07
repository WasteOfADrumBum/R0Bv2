import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
// Auth0
import { useAuth0 } from '@auth0/auth0-react'
// Redux
import store from './store'
import { Provider } from 'react-redux'
import { NavBar, Footer, Loading } from './components'
import {
  Home,
  Profile,
  ExternalApi,
  CreatorBio,
  CRUD,
  Resume,
  Portfolio,
  UpdateEmploymentView,
} from './views'
import ProtectedRoute from './auth/protected-route'
import './app.css'

const App = () => {
  const { isLoading } = useAuth0()
  const history = createBrowserHistory()

  if (isLoading) {
    return <Loading />
  }

  return (
    <Provider store={store}>
      <Router history={history}>
        <div id="app" className="d-flex flex-column h-100">
          <NavBar />
          <div className="container flex-grow-1">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/creator" component={CreatorBio} />
              <Route path="/portfolio" component={Portfolio} />
              <ProtectedRoute path="/crud" component={CRUD} />
              <ProtectedRoute path="/profile" component={Profile} />
              <ProtectedRoute path="/external-api" component={ExternalApi} />
              <ProtectedRoute path="/resume" component={Resume} />
              <ProtectedRoute
                path="/employment/:id/update"
                component={UpdateEmploymentView}
              />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  )
}

export default App
