import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Login from './Login'
import Register from './Register'
import Home from './Home'
import Dashboard from './Dashboard'
import PowerBI from './PowerBI'
import { AuthProvider } from './AuthContext'
import AuthRedirect from './AuthRedirect'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <AuthRedirect ifLogged={true} to="/dashboard">
              <Login />
            </AuthRedirect>
          </Route>
          <Route path="/register">
            <AuthRedirect ifLogged={true} to="/dashboard">
              <Register />
            </AuthRedirect>
          </Route>
          <Route path="/dashboard">
            <AuthRedirect ifLogged={false} to="/login">
              <Dashboard />
            </AuthRedirect>
          </Route>
          <Route path="/powerbi">
            <AuthRedirect ifLogged={false} to="/login">
              <PowerBI />
            </AuthRedirect>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  )
}

export default App
