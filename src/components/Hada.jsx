import React  from "react";
import "../assets/stylesheets/Hada.css";
import hadagif from '../assets/images/hada.gif';
import dialogo from '../assets/images/dialogo.png';

function Hada(){
    return(
    <>
        <div className="contenedor-hada">
            <img href="/" className="hada-gif" src={hadagif} alt="hada-gif" />
            <div className="dialogo-contenedor">
                <img href="/" className="dialogo" src={dialogo} alt="dialogo" />
            </div>
        </div>
    </>
    );
}

export default Hada;