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

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
