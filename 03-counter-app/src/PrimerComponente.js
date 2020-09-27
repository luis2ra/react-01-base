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

const PrimerComponente = () => {

    return <h1>Hola Mundo</h1>;
}

export default PrimerComponente;