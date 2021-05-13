import Form from './Form'
import Navbar from './Navbar'

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <div className="container mt-3">
        <Form />
      </div>
    </div>
  )
}

export default App
