// Estado inicial del archivo para ver el concepto de PropTypes - video 39
import React from 'react';
import ReactDOM from 'react-dom';
import PrimerComponente from './PrimerComponente';
import './index.css';

console.log('init...');

const divRoot = document.querySelector('#root');

ReactDOM.render( <PrimerComponente />, divRoot );