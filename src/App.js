import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/NavBar'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  )
}

export default App