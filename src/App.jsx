import './App.css'
import './components/Navbar'
import Navbar from './components/Navbar'
import Hada from './components/Hada';
import fondo from './assets/images/fondo-principal.gif';
import Slider from './components/Slider'
import SeccionCuento from './components/SeccionCuento';
import SeccionJuego from './components/SeccionJuego';
import Galeria from './components/Galeria';
import Card from './components/Card';
import Footer from './components/Footer';
import colorea from './assets/images/colorea.png';
import imprime from './assets/images/imprime.png';

function App() {

  return (
    <>
      <Navbar />
      <img href="/" className="fondo" src={fondo} alt="fondo" />
      <Hada />
      <Slider />
      <Galeria/>
      <SeccionCuento />
      <SeccionJuego />
      <div className="contenedor-cards">
        <Card titulorecuadro="Colorea" color="#FAE1EE" titulo="Paquete de Ilustraciones para colorear." descripcion="Estimula la creatividad de tus hijos a medida que dan rienda suelta a su imaginación pintando y explorando los cautivadores personajes de este emocionante cuento." img={colorea} botonColor={"#EF8AAE"} botonHover={"#f7548d"} />
        <Card titulorecuadro="Imprime" color="#B5DAEE" titulo="Juega desde casa" descripcion="¡Descarga todo lo necesario para jugar 'El Verdadero Tesoro' desde la comodidad de tu hogar! Incluye el tablero, cartas y fichas. Disfruta de un fantástico juego en familia." img={imprime} botonColor={"#54AFE2"} botonHover={"#1596e0"} />
      </div>
      
    </>
  )
}

export default App
