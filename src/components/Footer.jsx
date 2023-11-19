import React from "react";
import "../assets/stylesheets/Fonts.css"
import "../assets/stylesheets/Footer.css"
import footer from '../assets/images/footer.gif';

function Footer() {
    return (
        <>
            <div className="contenedor-footer">
                <div className="contenedor-titulo-footer">
                    <h2>¡Tu eres el verdadero tesoro!</h2>
                </div>
                <div className="contenedor-imagenes-cuento">
                    <img className="cuento-img-1" src={footer} alt="cuento" />
                </div>

            </div>
        </>
    );
}

export default Footer;