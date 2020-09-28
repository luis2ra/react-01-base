import React from 'react';
import ReactDOM from 'react-dom';
import PrimerComponente from './PrimerComponente';
import './index.css';

console.log('init...');

const divRoot = document.querySelector('#root');

ReactDOM.render( <PrimerComponente />, divRoot );
