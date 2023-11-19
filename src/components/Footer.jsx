import React from "react";
import "../assets/stylesheets/Fonts.css"
import "../assets/stylesheets/Footer.css"
import footer from '../assets/images/footer.gif';
import footer2 from '../assets/images/footer2.png';

function Footer(){
    return(
        <>
        <div className="contenedor-footer">
        <img className="cuento-img" src={footer} alt="cuento" />
        <img className="cuento-img" src={footer2} alt="cuento" />
        </div>
        </>
    );
}

export default Footer;