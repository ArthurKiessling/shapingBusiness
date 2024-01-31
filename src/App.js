import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import Background from './components/Background'

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Navbar />
      
      </BrowserRouter>
      <Background/>
      <div className="mt-auto">

        <Footer />
      </div>
    </div>
  )
}

export default App