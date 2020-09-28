// Definición de un compoonente en base a funciones
/**
 * Antiguamente se usaba SFC (Stateless Functional Compononet), pero 
 * con la introducción de los Hooks en React, ahora se suele usar
 * "Functional Component"
 * 
 * Es la forma actual de trabajar los proyectos de React
 * Existen también los componentes basados en clases, 
 * pero hay que buscar guias dedicadas para ello, en caso de requerirlo
 *
 */
import React from 'react';
//import React, { Fragment } from 'react';

const PrimerComponente = () => {

    let varMostrar = 'Hola gente';
    varMostrar = 123;                   // lo muestra OK
    varMostrar = 123.45;                // lo muestra OK
    varMostrar = true;                  // no muestra nada ni da error
    varMostrar = [ 1, 2, 3, 4, 5] ;     // muestra el arreglo contatenado

    /**
     * El siguiente objeto, inicialmente no lo imprime, da error
     * Pero si se usa la función JSON.stringify lo convierte en un texto
     */
    varMostrar = {
        nombre: 'Luis',
        job: 'Developer'
    }

    return (
        /**
         * Forma clasica de definir un Fragment de React
         */
        // <Fragment>
        //     <h1>Hola Mundo</h1>
        //     <p>Mi primera aplicación</p>
        // </Fragment>

        /**
         * Forma simplificada de definir un Fragment
         */
        <>
            <h1>Hola! { JSON.stringify( varMostrar ) } </h1>
            <p>Mi primera aplicación</p>
        </>
    );
    
    
}

export default PrimerComponente;