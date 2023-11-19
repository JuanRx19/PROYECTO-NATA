import React from "react";
import "../assets/stylesheets/Fonts.css"
import "../assets/stylesheets/Footer.css"
import footer from '../assets/images/footer.gif';
import footer2 from '../assets/images/footer2.png';

function Footer() {
    return (
        <>
            <div className="contenedor-footer">
                <div className="contenedor-titulo-footer">
                    a
                </div>
                <div className="contenedor-imagenes-cuento">
                    <img className="cuento-img-1" src={footer} alt="cuento" />
                    <img className="cuento-img-2" src={footer2} alt="cuento" />
                </div>

            </div>
        </>
    );
}

export default Footer;