import React from "react";
import "../assets/stylesheets/Fonts.css"
import "../assets/stylesheets/Card.css"

function Card(props) {
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
            <div className="contenedor-card">
                <div className="contenedor-de-texto">
                    <div className="contenedor-superior">
                        <div className="recuadro" style={{ backgroundColor: props.color, color: props.botonColor}}>
                            {props.titulorecuadro}
                        </div>
                    </div>
                    <div className="contenedor-inferior">
                        <h3 className="titulo-card">{props.titulo}</h3>
                        <p className="descripcion-card">{props.descripcion}</p>
                        <button className="boton-card" onClick={handleDownload} style={{ backgroundColor: props.botonColor}} onMouseOver={(e) => (e.target.style.backgroundColor = props.botonHover)} onMouseOut={(e) => (e.target.style.backgroundColor = props.botonColor)}>
                            DESCARGA EL PDF
                        </button>
                    </div>
                </div>
                <div className="contenedor-img">
                    <img className="colorea-img" src={props.img} alt="colorea" />
                </div>
            </div>
        </>
    );
}

export default Card;