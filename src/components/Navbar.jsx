import React from "react";
import "../assets/stylesheets/Navbar.css";
import "../assets/stylesheets/Fonts.css"
import logo from '../assets/images/logo-navbar.png';
function Navbar() {

    return (
        <>
            <nav className="contenedor-navbar">
                <img href="/" className="logo-navbar" src={logo} alt="logo" />
                <ul className="lista-ul">
                    <li className="lista-li">
                        <a href="#personajes" className="opcion">PERSONAJES</a>
                    </li>
                    <li className="lista-li">
                        <a href="#galeria" className="opcion">GALERÍA</a>
                    </li>
                    <li className="lista-li">
                        <a href="#producto" className="opcion">PRODUCTO</a>
                    </li>
                    <li className="lista-li">
                        <a href="#instrucciones" className="opcion">INSTRUCCIONES</a>
                    </li>
                    <li className="lista-li">
                        <a href="#material-didactico" className="opcion">MATERIAL DIDÁCTICO</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;