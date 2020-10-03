// UseState - Hook
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( { value } ) => {
    
    /**
     * En este punto vemos en el navegador lo siguiente:
     * En Console se ve como un arreglo
     * En Components, se ve como un objeto
     */
    // const state = useState('Goku');
    // console.log( state );

    /**
     * Se define ahora como un []
     */
    const [ counter, setCounter ] = useState( 0 );
    console.log( counter, setCounter );

    // handleAdd : extrayendo la función a ejecutar para el evento click
    const handleAdd = () => {
        setCounter( counter + 1 );
        // setCounter( (c) => c + 1 );
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ handleAdd }> +1 </button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;