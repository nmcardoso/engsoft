import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Login from './Login'
import Register from './Register'
import Home from './Home'
import Formulario from './Formulario'
import PowerBI from './PowerBI'
import { AuthProvider } from './AuthContext'
import AuthRedirect from './AuthRedirect'
import UserPage from './UserPage'
import Feedback from './Feedback'
import Welcome from './Welcome'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <AuthRedirect ifLogged={true} to="/welcome">
              <Login />
            </AuthRedirect>
          </Route>
          <Route path="/register">
            <AuthRedirect ifLogged={true} to="/userpage">
              <Register />
            </AuthRedirect>
          </Route>
          <Route path="/formulario">
            <AuthRedirect ifLogged={false} to="/login">
              <Formulario />
            </AuthRedirect>
          </Route>
          <Route path="/powerbi">
            <AuthRedirect ifLogged={false} to="/login">
              <PowerBI />
            </AuthRedirect>
          </Route>
          <Route path="/userpage">
            <AuthRedirect ifLogged={false} to="/login">
              <UserPage />
            </AuthRedirect>
          </Route>
          <Route path="/welcome">
            <AuthRedirect ifLogged={false} to="/login">
              <Welcome />
            </AuthRedirect>
          </Route>
          <Route path="/feedback">
            <AuthRedirect ifLogged={false} to="/login">
              <Feedback />
            </AuthRedirect>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  )
}

export default App
