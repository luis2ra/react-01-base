import React from 'react';
import ReactDOM from 'react-dom';
console.log('init...');

// uso sencillo de una constante
const saludo = 'Hola Mundo...';
console.log( saludo );

// uso de expresiones etiquetadas dentro de una constante
const saludo2 = <h1>Hola Mundo</h1>;
console.log( saludo2 );

const divRoot = document.querySelector('#root');
console.log( divRoot );

// para renderizar el saludo2 dentro del HTML
ReactDOM.render( saludo2, divRoot );

/***
 * Colocar este index para la ruta src/ para repetir la experiencia
 */



