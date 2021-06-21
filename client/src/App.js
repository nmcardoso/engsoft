import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Login from './Login'
import Register from './Register'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
