import React from 'react';

import "../assets/stylesheets/Fonts.css"
import "../assets/stylesheets/Instrucciones.css";
import televisor from '../assets/images/TV.png';


function Instrucciones() {
    return (
        <div className="contenedor-instrucciones" id='instrucciones'>
            <h1 className="titulo-instrucciones">INSTRUCCIONES</h1>
            <img href="/" className="tv" src={televisor} alt="tv" />
            <iframe
                className="screen"
                src="https://www.youtube.com/embed/4ggPmbhgzws?si=D_L_BDJ78QmrKINO"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>
    );
}

export default Instrucciones;
