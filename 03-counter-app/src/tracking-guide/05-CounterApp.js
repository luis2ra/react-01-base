// Evento click en React
import React from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( { value } ) => {
    console.log( value );

    // handleAdd : extrayendo la función a ejecutar para el evento click
    const handleAdd = (e) => {
        console.log(e)
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { value } </h2>

            <button onClick={ handleAdd }> +1 </button>
        </>
    );
}

// El evento en el botón se puede escribir de forma simplificada, se ejecuta
// como una promesa
// <button onClick={ handleAdd }> +1 </button>

// El evento se ejecuta pero debe ser tratado como función
// <button onClick={ handleAdd() }> +1 </button>

// Forma explicita que se define la función que maneja el evento
// <button onClick={ (e) => { handleAdd(e) } }> +1 </button>

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;