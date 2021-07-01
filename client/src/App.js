import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Login from './Login'
import Register from './Register'
import Home from './Home'
import Dashboard from './Dashboard'
import Principal from './Principal'

function App() {
  return (
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
<<<<<<< HEAD
=======
          <Dashboard />
        </Route>
        <Route path="/principal">
          <Principal />
>>>>>>> 9b19dd417b858a0574b92383b2d461e77878b289
        </Route>
      </Switch>
    </Router>
  )
}

export default App
