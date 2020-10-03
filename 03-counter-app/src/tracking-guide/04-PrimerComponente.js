// DefaultProps - video 40
import React from 'react';
import PropTypes from 'prop-types';

const PrimerComponente = ({ mensaje, msgExtra } ) => {
    console.log( mensaje );

    // if ( !mensaje ) {
    //     throw new Error( 'Sin definir parámetro de entrada "mensaje"')
    // }

    return (
        <>
            <h1> { mensaje } </h1>
            <p> { msgExtra } </p>
        </>
    );
}

PrimerComponente.propTypes = {
    mensaje: PropTypes.string.isRequired
}

PrimerComponente.defaultProps = {
    msgExtra: "Parrafo adicional"
}
export default PrimerComponente;