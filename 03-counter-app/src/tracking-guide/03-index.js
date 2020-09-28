// PropTypes - video 39
import React from 'react';
import ReactDOM from 'react-dom';
import PrimerComponente from './03-PrimerComponente';
import './index.css';

console.log('init...');

const divRoot = document.querySelector('#root');

// llamado del componente sin la variable esperada "mensaje"
// ReactDOM.render( <PrimerComponente />, divRoot );

// llamado del componente definiendo la variable "mensaje"
ReactDOM.render( <PrimerComponente mensaje="Hola Mundo"/>, divRoot );