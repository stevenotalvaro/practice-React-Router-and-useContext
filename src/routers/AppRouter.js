import React, {useContext} from 'react'
import {AuthContext} from '../auth/AuthContext'
import {PrivateRoute} from './PrivateRoute'
import {PublicRoute} from './PublicRoute'
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import {LoginScreen} from '../components/login/LoginScreen'
import {DashboardRoutes} from './DashboardRoutes'
export function AppRouter() {
  const {user} = useContext(AuthContext)
  console.log(user)
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={LoginScreen}
            isAuthenticated={user.logged}
          />
          <PrivateRoute
            path="/"
            component={DashboardRoutes}
            isAuthenticated={user.logged}
          />
        </Switch>
      </div>
    </Router>
  )
}
