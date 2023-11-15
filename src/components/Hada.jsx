import React  from "react";
import "../assets/stylesheets/Hada.css";
import hadagif from '../assets/images/hada.gif';

function Hada(){
    return(
    <>
        <div className="contenedor-hada">
            <img href="/" className="hada-gif" src={hadagif} alt="hada-gif" />
        </div>
    </>
    );
}

export default Hada;