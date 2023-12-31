import React from "react";
import "../assets/stylesheets/Fonts.css"
import "../assets/stylesheets/SeccionCuento.css"
import cuento from '../assets/images/cuento.png';
import descargar from '../assets/cuento-verdadero-tesoro.pdf'

function SeccionCuento() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = descargar;
        link.download = 'cuento-verdadero-tesoro.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

    return (
        <>
            <div className="contenedor-cuento" id="producto">
                <div className="cuento">
                    <img className="cuento-img" src={cuento} alt="cuento" />
                </div>
                <div className="contenedor-descripcion-cuento">
                    <h3>CUENTO</h3>
                    <h1>"EL VERDADERO TESORO"</h1>
                    <p>Seis amigos son transportados a Encantopia, un mundo mágico que poco a poco está perdiendo su
                        magia. Cada uno de los niños recibe dones mágicos asombrosos con ellos, su tarea es rescatar un
                        tesoro mágico que está en manos de un dragón egoísta llamado Draco. Este tesoro es la única
                        esperanza para salvar a Encantopia de perder su magia para siempre</p>
                    <div className="contenedor-texto-bajo">
                        <p className="texto-bajo">¿Qué podría contener este tesoro tan especial?</p>
                        <p className="texto-bajo">Eso es un misterio que estos amigos están ansiosos por descubrir.</p>
                    </div>

                    <button className="descarga-pdf" onClick={handleDownload}>
                        DESCARGA EL PDF
                    </button>
                </div>
            </div>
        </>


    );
}

export default SeccionCuento;