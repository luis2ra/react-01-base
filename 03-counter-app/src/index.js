import React from 'react';
import ReactDOM from 'react-dom';
import PrimerComponente from './PrimerComponente';
import './index.css';

console.log('init...');

// uso sencillo de una constante
const saludo = 'Hola Mundo...';
console.log( saludo );

const divRoot = document.querySelector('#root');
console.log( divRoot );

// para renderizar el saludo2 dentro del HTML
ReactDOM.render( <PrimerComponente />, divRoot );

