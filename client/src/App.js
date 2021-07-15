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
import PrivateComponent from './PrivateComponent'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/dashboard">
            <PrivateComponent>
              <Dashboard />
            </PrivateComponent>
          </Route>
          <Route path="/powerbi">
            <PrivateComponent>
              <PowerBI />
            </PrivateComponent>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  )
}

export default App
