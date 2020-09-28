// Estado inicial del archivo para ver el concepto de PropTypes - video 39
import React from 'react';

const PrimerComponente = ({ mensaje = "Hola Mundo" } ) => {
    console.log( mensaje );
    return (
        <>
            <h1> { mensaje } </h1>
            <p>Mi primera aplicación</p>
        </>
    );
}

export default PrimerComponente;