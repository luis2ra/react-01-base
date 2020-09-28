import React from 'react';
import ReactDOM from 'react-dom';
import PrimerComponente from './02-PrimerComponente';
import './index.css';

console.log('init...');

const divRoot = document.querySelector('#root');

// se llama un componente con el uso de props
ReactDOM.render( <PrimerComponente mensaje="Hola Mundo desde props" />, divRoot );

// se llama un componente omitiendo el "mensaje" que espera el componente
// ReactDOM.render( <PrimerComponente />, divRoot );
