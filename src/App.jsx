import './App.css'
import './components/Navbar'
import Navbar from './components/Navbar'
import Hada from './components/Hada';
import fondo from './assets/images/fondo-principal.gif';

function App() {

  return (
    <>
      <Navbar/>
      <img href="/" className="fondo" src={fondo} alt="fondo" />
      <Hada/>
    </>
  )
}

export default App
