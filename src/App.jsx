import './App.css'
import './components/Navbar'
import Navbar from './components/Navbar'
import fondo from './assets/images/fondo-principal.gif';

function App() {

  return (
    <>
      <Navbar/>
      <img href="/" className="fondo" src={fondo} alt="fondo" />
      
    </>
  )
}

export default App
