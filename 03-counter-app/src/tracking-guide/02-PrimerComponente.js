// Definición de un compoonente en base a funciones
import React from 'react';

/**
 * 
 * @param {*} props 
 * 
 * Esta forma es la tradicional para pasar propiedades desde el padre a 
 * un componente.
 */
// const PrimerComponente = ( props ) => {
//     // verificamos que inicialmente viene un objeto vacío
//     console.log(props);
    
//     return (
//         <>
//             <h1> { props.mensaje } </h1>
//             <p>Mi primera aplicación</p>
//         </>
//     );
// }

/**
 * Esta forma se pasa igual una propiedad desde el padre, pero aplicando
 * desestructuración en los props
 */
const PrimerComponente = ({ mensaje = "valor por defecto" } ) => {
    console.log( mensaje );
    return (
        <>
            <h1> { mensaje } </h1>
            <p>Mi primera aplicación</p>
        </>
    );
}


export default PrimerComponente;