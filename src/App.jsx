import './App.css'
import'../src/index.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Density from './Components/Density'

function App() {

  return (
    <>
      <div className="container">
      <Navbar/>
      <Hero/>
      <Density/>
      </div>
    </>
  )
}

export default App
