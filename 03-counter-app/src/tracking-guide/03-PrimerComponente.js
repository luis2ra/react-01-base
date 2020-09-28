// PropTypes - video 39
import React from 'react';
import PropTypes from 'prop-types';

const PrimerComponente = ({ mensaje } ) => {
    console.log( mensaje );

    // if ( !mensaje ) {
    //     throw new Error( 'Sin definir parámetro de entrada "mensaje"')
    // }

    return (
        <>
            <h1> { mensaje } </h1>
            <p>Mi primera aplicación</p>
        </>
    );
}

PrimerComponente.propTypes = {
    mensaje: PropTypes.string.isRequired
}

export default PrimerComponente;