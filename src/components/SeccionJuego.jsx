import React from "react";
import "../assets/stylesheets/Fonts.css"
import "../assets/stylesheets/SeccionJuego.css"
import juego from '../assets/images/juego.png';
import descargar from '../assets/cuento-juego.pdf'

function SeccionJuego() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = descargar;
        link.download = 'kit-juego.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <>
            <div className="contenedor-juego" id="producto">
                <div className="contenedor-juego-mesa">
                    <h3>JUEGO DE MESA</h3>
                    <h1>"EL VERDADERO TESORO"</h1>
                    <p>El juego "El Verdadero Tesoro" es una experiencia única diseñada para niños, centrada en la
                        aventura mágica en Encantopia. Este juego de mesa interactivo no solo entretiene, sino que
                        también fortalece valores fundamentales como el amor propio, la empatía, la responsabilidad y el
                        respeto. A través de desafíos y situaciones mágicas, los jugadores exploran y aprenden de manera
                        divertida, contribuyendo al desarrollo integral de habilidades sociales y emocionales desde
                        temprana edad.</p>
                    <div className="contenedor-texto-bajo">
                        <p className="texto-bajo">¡Una emocionante travesía llena de aprendizaje y diversión en busca del verdadero tesoro!</p>
                    </div>

                    <button className="descarga-pdf" onClick={handleDownload}>
                        CONOCE MÁS
                    </button>
                </div>
                <div className="contenedor-imagen-juego">
                    <img className="juego-img" src={juego} alt="juego" />
                </div>
            </div>
        </>
    );
}

export default SeccionJuego;