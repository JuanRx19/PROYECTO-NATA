import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "../assets/stylesheets/Slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../assets/stylesheets/Fonts.css"
import bufon from '../assets/images/personajes/bufon.png';
import caballero from '../assets/images/personajes/caballero.png';
import hada from '../assets/images/personajes/hada.png';
import mago from '../assets/images/personajes/mago.png';
import pirata from '../assets/images/personajes/pirata.png';
import princesa from '../assets/images/personajes/princesa.png';

const characters = [
    {
        image: bufon,
        title: 'JULIO',
        description: 'Pilar de la alegría'
    },
    {
        image: caballero,
        title: 'MATEO',
        description: 'Pilar del perdón'
    },
    {
        image: hada,
        title: 'LUCÍA',
        description: 'Pilar de la Empatía'
    },
    {
        image: mago,
        title: 'DIEGO',
        description: 'Pilar de la responsabilidad'
    },
    {
        image: pirata,
        title: 'CARLOS',
        description: 'Pilar de la valentía'
    },
    {
        image: princesa,
        title: 'MARIA',
        description: 'Pilar de la amistad'
    },

];

const Slider = () => {
    return (
        <div className="contenedor-principal">
            <div className="contenedor-titulo">
                <h3 className='titulo-h3'>PERSONAJES</h3>
            </div>
            <div className="contenedor-descripcion">
                <p className='descripcion-p'>Bienvenido a Encantopia, te presentamos a un grupo de amigos extraordinarios, cada uno con un
                    poder único que los hace especiales. ¡Conócelos y descubre los secretos detrás de sus dones
                    asombrosos!</p>
            </div>
            <Carousel className="carrusel" showThumbs={false}>
                {characters.map((character, index) => (
                    <div key={index}>
                        <img className="personajes" src={character.image} alt={character.title} />
                        <h3 className='titulo-pj'>{character.title}</h3>
                        <p className='descripcion-pj'>{character.description}</p>
                    </div>
                ))}
            </Carousel>
        </div>

    );
};

export default Slider;